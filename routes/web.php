<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RegisterOtpController;
use App\Http\Controllers\SocialAuthController;
use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;


Route::get('/', HomeController::class)->name('home');

// Email OTP for registration (called from the register page)
Route::post('/register/send-otp', [RegisterOtpController::class, 'send'])
    ->middleware(['guest', 'throttle:6,1'])
    ->name('register.send-otp');

// Google / GitHub login and registration
Route::middleware('guest')->group(function () {
    Route::get('/auth/{provider}/redirect', [SocialAuthController::class, 'redirect'])
        ->whereIn('provider', ['google', 'github'])
        ->name('social.redirect');

    Route::get('/auth/{provider}/callback', [SocialAuthController::class, 'callback'])
        ->whereIn('provider', ['google', 'github'])
        ->name('social.callback');
});

Route::prefix('{current_team}')
    ->middleware(['auth', EnsureTeamMembership::class])
    ->group(function () {
        Route::get('dashboard', DashboardController::class)->name('dashboard');
    });

Route::middleware(['auth'])->group(function () {
    Route::post('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
    Route::delete('invitations/{invitation}', [TeamInvitationController::class, 'decline'])->name('invitations.decline');
});




// Contact Page
Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');


// about Page
Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');


// Pricing Page
Route::get('/pricing', function () {
    return Inertia::render('pricing');
})->name('pricing');


// faq Page
Route::get('/faq', function () {
    return Inertia::render('faq');
})->name('faq');


// faq Page
Route::get('/privacy-policy', function () {
    return Inertia::render('privacy-policy');
})->name('privacy-policy');


// faq Page
Route::get('/terms-and-conditions', function () {
    return Inertia::render('terms-and-conditions');
})->name('terms-and-conditions');  

// cookie-policy Page
Route::get('/cookie-policy', function () {
    return Inertia::render('cookie-policy');
})->name('cookie-policy');  



// sample-report Page
Route::get('/sample-report', function () {
    return Inertia::render('sample-report');
})->name('sample-report');

// Contact Form Submission
Route::post('/contact', [ContactController::class, 'store'])
    ->name('contact.store');


    

require __DIR__.'/settings.php';