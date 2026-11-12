import { Form, Head, Link } from '@inertiajs/react';
import { Check } from 'lucide-react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import SocialAuthButtons from '@/components/social-auth-buttons';
import TeamInvitationAlert from '@/components/team-invitation-alert';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import type { TeamInvitationContext } from '@/types';

type Props = {
    status?: string;
    canResetPassword: boolean;
    teamInvitation?: TeamInvitationContext | null;
};

// Small logo, only used on mobile where the dark panel is hidden
function LogoMark() {
    return (
        <svg
            className="size-6.5"
            viewBox="16 18 26 22"
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <linearGradient
                    id="auth-logo-g"
                    x1="23.7"
                    y1="20"
                    x2="35"
                    y2="38"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0D6B3E" />
                    <stop offset="0.53" stopColor="#19D27A" />
                    <stop offset="1" stopColor="#0D6B3E" />
                </linearGradient>
            </defs>

            <path
                d="M18.157 33.164 17 38.211h17.628c2.492-.234 4.481-4.058 4.585-5.047H18.157Z"
                fill="url(#auth-logo-g)"
            />

            <path
                d="m40.613 25.049 1.036-5.26H24.528c-3.868.505-4.846 4.054-5.13 5.062-.284 1.008-.237 1.831-.126 2.76.209 1.754 1.686 3.867 2.706 3.943h17.266v-2.442c-.027-1.729-.508-2.245-2.15-2.403H25.706c-.502-.486-.502-.865 0-1.343l14.907-.318Z"
                fill="url(#auth-logo-g)"
            />
        </svg>
    );
}

const BENEFITS = [
    {
        title: 'All your client sites in one place',
        text: 'Keep maintenance and reporting organized across every website.',
    },
    {
        title: 'Branded monthly reports',
        text: 'Plain-language updates your clients actually understand.',
    },
    {
        title: 'Delivered on WhatsApp',
        text: 'Clients get their report in a place they already use.',
    },
];

const inputClass =
    'h-12 rounded-xl border-[#DEDDD3] bg-white px-4 text-[14px] text-[#10120F] shadow-none placeholder:text-[#85877E] focus-visible:border-[#18B96B] focus-visible:ring-[3px] focus-visible:ring-[#18B96B]/20 dark:border-[#DEDDD3] dark:bg-white dark:text-[#10120F]';

const labelClass = 'text-[13px] font-semibold text-[#10120F]';

export default function Login({
    status,
    canResetPassword,
    teamInvitation,
}: Props) {
    return (
        <>
            <Head title="Log in | SiteCare"></Head>

            {/* Full-screen overlay: breaks out of the default narrow auth layout */}
            <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F0EFE9]">
                <div className="grid min-h-screen bg-[#F0EFE9] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                    {/* LEFT: marketing panel (desktop only) */}
                    <div className="hidden p-0 lg:block">
                        <div className="relative isolate flex h-full min-h-screen flex-col overflow-hidden bg-[#10120F] p-12 xl:p-14">
                            {/* Glow */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 -z-10"
                                style={{
                                    background:
                                        'radial-gradient(ellipse 70% 60% at 100% 0%, rgba(24,185,107,0.28), transparent 70%)',
                                }}
                            />

                            {/* Logo (stays at the top) */}
                            <Link
                                href="/"
                                aria-label="SiteCare home"
                                className="flex w-fit items-center gap-2 text-xl font-semibold tracking-tight text-ink outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                            >
                                <img
                                    src="/logo.webp"
                                    alt="SiteCare"
                                    className="h-auto w-[150px]"
                                />
                            </Link>

                            {/* Heading + paragraph + benefits = ONE group, vertically centered */}
                            <div className="flex flex-1 items-center py-12">
                                <div className="w-full max-w-[460px]">
                                    <h2 className="text-[40px] font-bold leading-[1.02] tracking-[-0.05em] text-white xl:text-[46px]">
                                        Your clients are waiting for their
                                        update.
                                    </h2>
                                    <p className="mt-5 max-w-[420px] text-[16px] leading-7 text-[#A8B2AC]">
                                        Log in to manage your WordPress
                                        websites and share clear, branded
                                        monthly reports.
                                    </p>

                                    <ul className="mt-10 space-y-5">
                                        {BENEFITS.map((benefit) => (
                                            <li
                                                key={benefit.title}
                                                className="flex items-start gap-4"
                                            >
                                                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#18B96B] text-[#071b11]">
                                                    <Check
                                                        size={15}
                                                        strokeWidth={3}
                                                    />
                                                </span>
                                                <span>
                                                    <span className="block text-[16px] font-semibold text-white">
                                                        {benefit.title}
                                                    </span>
                                                    <span className="mt-0.5 block text-[14px] leading-6 text-[#A8B2AC]">
                                                        {benefit.text}
                                                    </span>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: FORM */}
                    <div className="relative isolate flex flex-col overflow-hidden px-5 py-8 sm:px-10 lg:px-16">
                        {/* Soft green glow, same as the site hero */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-[35%] -z-10 h-[360px] w-[min(640px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18B96B26] blur-[110px]"
                        />

                        {/* Mobile logo (dark panel is hidden on mobile) */}
                        <Link
                            href="/"
                            aria-label="SiteCare home"
                            className="flex w-fit items-center gap-2 text-xl font-semibold tracking-tight text-[#10120F] outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
                        >
                            <LogoMark />
                            <span className="whitespace-nowrap">SiteCare</span>
                        </Link>

                        <div className="flex flex-1 items-center justify-center py-8">
                            <div className="w-full max-w-[440px]">
                                <div className="text-center sm:text-left">
                                    <h1 className="text-[32px] font-bold leading-[1.05] tracking-[-0.05em] text-[#10120F] sm:text-[40px]">
                                        Welcome back
                                    </h1>
                                    <p className="mt-3 text-[15px] font-medium leading-relaxed tracking-[-0.01em] text-[#3b4252]">
                                        Enter your email and password below to
                                        log in to your account.
                                    </p>
                                </div>

                                {status && (
                                    <div className="mt-6 rounded-xl border border-[#18B96B]/30 bg-[#E3F4EA] px-4 py-3 text-center text-[14px] font-medium text-[#16834D] sm:text-left">
                                        {status}
                                    </div>
                                )}

                                <div className="mt-8 rounded-[24px] border border-[#E2E1D8] bg-white p-5 shadow-[0_1px_2px_rgba(16,18,15,0.04),0_20px_50px_-28px_rgba(16,18,15,0.18)] sm:p-7">
                                    {teamInvitation && (
                                        <div className="mb-6">
                                            <TeamInvitationAlert
                                                invitation={teamInvitation}
                                                action="Log in"
                                            />
                                        </div>
                                    )}

                                    <Form
                                        {...store.form()}
                                        resetOnSuccess={['password']}
                                        className="flex flex-col gap-6"
                                    >
                                        {({ processing, errors }) => (
                                            <div className="grid gap-5">
                                                <div className="grid gap-2">
                                                    <Label
                                                        htmlFor="email"
                                                        className={labelClass}
                                                    >
                                                        Email address
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        required
                                                        autoFocus
                                                        tabIndex={1}
                                                        autoComplete="email"
                                                        placeholder="email@example.com"
                                                        className={inputClass}
                                                    />
                                                    <InputError
                                                        message={errors.email}
                                                    />
                                                </div>

                                                <div className="grid gap-2">
                                                    <div className="flex items-center">
                                                        <Label
                                                            htmlFor="password"
                                                            className={
                                                                labelClass
                                                            }
                                                        >
                                                            Password
                                                        </Label>
                                                        {canResetPassword && (
                                                            <TextLink
                                                                href={request()}
                                                                className="ml-auto text-[13px] font-semibold text-[#16834D] underline decoration-[#18B96B] decoration-2 underline-offset-4"
                                                                tabIndex={5}
                                                            >
                                                                Forgot
                                                                password?
                                                            </TextLink>
                                                        )}
                                                    </div>
                                                    <PasswordInput
                                                        id="password"
                                                        name="password"
                                                        required
                                                        tabIndex={2}
                                                        autoComplete="current-password"
                                                        placeholder="Password"
                                                        className={inputClass}
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.password
                                                        }
                                                    />
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <Checkbox
                                                        id="remember"
                                                        name="remember"
                                                        tabIndex={3}
                                                        className="h-5 w-5 rounded-md border-[#C9C8BE] shadow-none data-[state=checked]:border-[#18B96B] data-[state=checked]:bg-[#18B96B] data-[state=checked]:text-[#10120F]"
                                                    />
                                                    <Label
                                                        htmlFor="remember"
                                                        className="text-[14px] font-medium text-[#3F443B]"
                                                    >
                                                        Remember me
                                                    </Label>
                                                </div>

                                                <Button
                                                    type="submit"
                                                    tabIndex={4}
                                                    disabled={processing}
                                                    data-test="login-button"
                                                    className="mt-1 h-12 w-full rounded-xl bg-[#18B96B] text-[14px] font-semibold text-[#10120F] shadow-none transition hover:bg-[#10120F] hover:text-white"
                                                >
                                                    {processing && <Spinner />}
                                                    Log in
                                                </Button>
                                            </div>
                                        )}
                                    </Form>

                                    <SocialAuthButtons
                                        invitation={teamInvitation?.code}
                                    />
                                </div>

                                <p className="mt-6 text-center text-[14px] text-[#5B6157]">
                                    Don't have an account?{' '}
                                    <TextLink
                                        href={register({
                                            query: {
                                                invitation:
                                                    teamInvitation?.code,
                                            },
                                        })}
                                        data-test="register-link"
                                        tabIndex={6}
                                        className="font-semibold text-[#10120F] underline decoration-[#18B96B] decoration-2 underline-offset-4"
                                    >
                                        Sign up
                                    </TextLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// The default auth layout is still applied by the app, but this page covers it with a full-screen overlay.
Login.layout = {
    title: 'Log in to your account',
    description: 'Enter your email and password below to log in',
};
