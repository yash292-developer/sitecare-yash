  import { Form, Head, Link } from "@inertiajs/react";
  import { Check } from "lucide-react";
  import InputError from "@/components/input-error";
  import PasswordInput from "@/components/password-input";
  import SocialAuthButtons from "@/components/social-auth-buttons";
  import TeamInvitationAlert from "@/components/team-invitation-alert";
  import TextLink from "@/components/text-link";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Spinner } from "@/components/ui/spinner";
  import { login } from "@/routes";
  import { store } from "@/routes/register";
  import type { TeamInvitationContext } from "@/types";

  type Props = {
    passwordRules: string;
    teamInvitation?: TeamInvitationContext | null;
  };

  const BENEFITS = [
    {
      title: "14-day free trial",
      text: "Try SiteCare before deciding if it is right for your business.",
    },
    {
      title: "No credit card required",
      text: "Create your account and start right away.",
    },
    {
      title: "Branded monthly reports",
      text: "Plain-language updates your clients actually understand.",
    },
    {
      title: "Delivered on WhatsApp",
      text: "Clients get their report in a place they already use.",
    },
  ];

  const inputClass =
    "h-12 rounded-xl border-[#DEDDD3] bg-white px-4 text-[14px] text-[#10120F] shadow-none placeholder:text-[#85877E] focus-visible:border-[#18B96B] focus-visible:ring-[3px] focus-visible:ring-[#18B96B]/20 dark:border-[#DEDDD3] dark:bg-white dark:text-[#10120F]";

  const labelClass = "text-[13px] font-semibold text-[#10120F]";

  export default function Register({ passwordRules, teamInvitation }: Props) {
    return (
      <>
        <Head title="Create your account | SiteCare"></Head>

        <section>
          {/* Full-screen overlay: breaks out of the default narrow auth layout */}
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F0EFE9]">
            <div className="grid min-h-screen bg-[#F0EFE9] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              {/* Left: marketing panel */}
              <div className="hidden p-0 lg:block">
                <div className="relative isolate flex h-full min-h-screen flex-col overflow-hidden bg-[#10120F] p-12 xl:p-14">
                  {/* Glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(24,185,107,0.28), transparent 70%)",
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

                  {/* Heading + paragraph + benefits = ONE group, vertically centered.
                      Zoom out karne par bhi ye teeno saath rahenge. */}
                  <div className="flex flex-1 items-center py-12">
                    <div className="w-full max-w-[460px]">
                      <h2 className="text-[40px] font-bold leading-[1.02] tracking-[-0.05em] text-white xl:text-[46px]">
                        Keep clients informed, without the technical talk.
                      </h2>
                      <p className="mt-5 max-w-[420px] text-[16px] leading-7 text-[#A8B2AC]">
                        SiteCare helps WordPress professionals manage
                        maintenance and share clear, branded monthly reports.
                      </p>

                      <ul className="mt-10 space-y-5">
                        {BENEFITS.map((benefit) => (
                          <li
                            key={benefit.title}
                            className="flex items-start gap-4"
                          >
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#18B96B] text-[#071b11]">
                              <Check size={15} strokeWidth={3} />
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

              {/* Right: form */}
              <div className="relative isolate flex flex-col overflow-hidden px-5 py-8 sm:px-10 lg:px-16">
                {/* Soft green glow, same as the site hero */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-[35%] -z-10 h-[360px] w-[min(640px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18B96B26] blur-[110px]"
                />

                <div className="flex flex-1 items-center justify-center py-8">
                  <div className="w-full max-w-[440px]">
                    <div className="text-center sm:text-left">
                      <h1 className="text-[32px] font-bold leading-[1.05] tracking-[-0.05em] text-[#10120F] sm:text-[40px]">
                        Create your account
                      </h1>
                      <p className="mt-3 text-[15px] font-medium leading-relaxed tracking-[-0.01em] text-[#3b4252]">
                        Enter your details below to get started with your free
                        trial.
                      </p>
                    </div>

                    {/* Compact benefits for mobile (full list shows on desktop) */}
                    <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start lg:hidden">
                      {["14-day free trial", "No credit card"].map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#DEDDD3] bg-white px-3 py-1 text-[12px] font-medium text-[#10120F]"
                        >
                          <Check size={12} className="text-[#16834D]" />
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 rounded-[24px] border border-[#E2E1D8] bg-white p-5 shadow-[0_1px_2px_rgba(16,18,15,0.04),0_20px_50px_-28px_rgba(16,18,15,0.18)] sm:p-7">
                      <Form
                        {...store.form()}
                        resetOnSuccess={["password", "password_confirmation"]}
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                      >
                        {({ processing, errors }) => (
                          <>
                            {teamInvitation && (
                              <TeamInvitationAlert
                                invitation={teamInvitation}
                                action="Register"
                              />
                            )}

                            <div className="grid gap-5">
                              <div className="grid gap-2">
                                <Label htmlFor="name" className={labelClass}>
                                  Name
                                </Label>
                                <Input
                                  id="name"
                                  type="text"
                                  required
                                  autoFocus
                                  tabIndex={1}
                                  autoComplete="name"
                                  name="name"
                                  placeholder="Full name"
                                  className={inputClass}
                                />
                                <InputError message={errors.name} />
                              </div>

                              <div className="grid gap-2">
                                <Label htmlFor="email" className={labelClass}>
                                  Email address
                                </Label>
                                <Input
                                  id="email"
                                  type="email"
                                  required
                                  tabIndex={2}
                                  autoComplete="email"
                                  name="email"
                                  placeholder="email@example.com"
                                  className={inputClass}
                                />
                                <InputError message={errors.email} />
                              </div>

                              <div className="grid gap-2">
                                <Label htmlFor="password" className={labelClass}>
                                  Password
                                </Label>
                                <PasswordInput
                                  id="password"
                                  required
                                  tabIndex={3}
                                  autoComplete="new-password"
                                  name="password"
                                  placeholder="Password"
                                  passwordrules={passwordRules}
                                  className={inputClass}
                                />
                                <InputError message={errors.password} />
                              </div>

                              <div className="grid gap-2">
                                <Label
                                  htmlFor="password_confirmation"
                                  className={labelClass}
                                >
                                  Confirm password
                                </Label>
                                <PasswordInput
                                  id="password_confirmation"
                                  required
                                  tabIndex={4}
                                  autoComplete="new-password"
                                  name="password_confirmation"
                                  placeholder="Confirm password"
                                  passwordrules={passwordRules}
                                  className={inputClass}
                                />
                                <InputError
                                  message={errors.password_confirmation}
                                />
                              </div>

                              <Button
                                type="submit"
                                tabIndex={5}
                                data-test="register-user-button"
                                className="mt-1 h-12 w-full rounded-xl bg-[#18B96B] text-[14px] font-semibold text-[#10120F] shadow-none transition hover:bg-[#10120F] hover:text-white"
                              >
                                {processing && <Spinner />}
                                Create account
                              </Button>
                            </div>
                          </>
                        )}
                      </Form>

                      <SocialAuthButtons invitation={teamInvitation?.code} />
                    </div>

                    <p className="mt-6 text-center text-[14px] text-[#5B6157]">
                      Already have an account?{" "}
                      <TextLink
                        href={
                          teamInvitation
                            ? login.url({
                                query: {
                                  invitation: teamInvitation.code,
                                },
                              })
                            : login()
                        }
                        data-test="team-invitation-login-link"
                        tabIndex={6}
                        className="font-semibold text-[#10120F] underline decoration-[#18B96B] decoration-2 underline-offset-4"
                      >
                        Log in
                      </TextLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // The default auth layout is still applied by the app, but this page covers it with a full-screen overlay.
  Register.layout = {
    title: "Create an account",
    description: "Enter your details below to create your account",
  };
