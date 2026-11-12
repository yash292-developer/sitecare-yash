<?php

namespace App\Http\Controllers;

use App\Actions\Teams\CreateTeam;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use Throwable;

class SocialAuthController extends Controller
{
    private const PROVIDERS = ['google', 'github'];

    /**
     * Send the user to Google or GitHub.
     */
    public function redirect(Request $request, string $provider)
    {
        abort_unless(in_array($provider, self::PROVIDERS, true), 404);

        // Remember a team invitation code through the OAuth round trip
        if ($request->filled('invitation')) {
            $request->session()->put('social_invitation', (string) $request->input('invitation'));
        }

        $driver = Socialite::driver($provider);

        if ($provider === 'github') {
            // Needed so GitHub returns the primary verified email even when it is private
            $driver->scopes(['user:email']);
        }

        return $driver->redirect();
    }

    /**
     * Handle the return from Google or GitHub: log in, or register a new account.
     */
    public function callback(Request $request, string $provider, CreateTeam $createTeam)
    {
        abort_unless(in_array($provider, self::PROVIDERS, true), 404);

        try {
            $social = Socialite::driver($provider)->user();
        } catch (Throwable $e) {
            Log::warning('Social login failed', [
                'provider' => $provider,
                'message' => $e->getMessage(),
            ]);

            return redirect('/login')->withErrors([
                'email' => 'We could not sign you in with '.ucfirst($provider).'. Please try again.',
            ]);
        }

        $email = $social->getEmail();

        if (! $email) {
            return redirect('/login')->withErrors([
                'email' => ucfirst($provider).' did not share an email address. Please use a different sign-in method.',
            ]);
        }

        // Only trust an email that the provider has verified
        if ($provider === 'google' && data_get($social->user, 'email_verified') === false) {
            return redirect('/login')->withErrors([
                'email' => 'Your Google email address is not verified.',
            ]);
        }

        $user = User::where('email', $email)->first();

        if (! $user) {
            $user = DB::transaction(function () use ($social, $email, $createTeam) {
                $user = User::create([
                    'name' => $social->getName() ?: $social->getNickname() ?: Str::before($email, '@'),
                    'email' => $email,
                    // Random password, hashed by the model cast. The user can set a real one via "Forgot password?"
                    'password' => Str::random(40),
                ]);

                // The provider already verified this email
                $user->forceFill(['email_verified_at' => now()])->save();

                $createTeam->handle($user, $user->name."'s Team", isPersonal: true);

                return $user;
            });
        } elseif (! $user->email_verified_at) {
            // This account was registered but never verified. Someone else could have created it
            // with this email and their own password, so replace the password when the real
            // owner proves the email through the provider. The owner can set a new one via "Forgot password?".
            $user->forceFill([
                'email_verified_at' => now(),
                'password' => Str::random(40),
            ])->save();
        }

        // Users with two-factor enabled must still pass the 2FA challenge
        if (! is_null($user->two_factor_secret) && ! is_null($user->two_factor_confirmed_at)) {
            $request->session()->put([
                'login.id' => $user->getKey(),
                'login.remember' => true,
            ]);

            return redirect()->route('two-factor.login');
        }

        Auth::login($user, remember: true);
        $request->session()->regenerate();

        // The dashboard route is "{current_team}/dashboard", so it needs the user's current team
        $team = $user->refresh()->currentTeam;

        $fallback = $team
            ? route('dashboard', ['current_team' => $team->getRouteKey()])
            : route('home');

        // The invitation code is kept in the session so your existing invitation logic can read it
        return redirect()->intended($fallback);
    }
}