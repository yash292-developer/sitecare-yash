import { Form, Head, Link } from "@inertiajs/react";
import { Check, Mail } from "lucide-react";
import TextLink from "@/components/text-link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { logout } from "@/routes";
import { send } from "@/routes/verification";

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

export default function VerifyEmail({ status }: { status?: string }) {
  return (
    <>
      <Head title="Verify your email | SiteCare"></Head>

      <section>
        {/* Full-screen overlay: breaks out of the default narrow auth layout */}
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F0EFE9]">
          <div className="grid min-h-screen bg-[#F0EFE9] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {/* Left: marketing panel */}
            <div className="hidden p-0 lg:block">
              <div className="relative isolate flex h-full min-h-screen flex-col overflow-hidden bg-[#10120F] p-12 xl:p-14">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(24,185,107,0.28), transparent 70%)",
                  }}
                />

                <Link
                  href="/"
                  aria-label="SiteCare home"
                  className="flex w-fit items-center gap-2 text-xl font-semibold tracking-tight outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <img
                    src="/logo.webp"
                    alt="SiteCare"
                    className="h-auto w-[150px]"
                  />
                </Link>

                <div className="flex flex-1 items-center py-12">
                  <div className="w-full max-w-[460px]">
                    <h2 className="text-[40px] font-bold leading-[1.02] tracking-[-0.05em] text-white xl:text-[46px]">
                      Keep clients informed, without the technical talk.
                    </h2>
                    <p className="mt-5 max-w-[420px] text-[16px] leading-7 text-[#A8B2AC]">
                      SiteCare helps WordPress professionals manage maintenance
                      and share clear, branded monthly reports.
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

            {/* Right: verification card */}
            <div className="relative isolate flex flex-col overflow-hidden px-5 py-8 sm:px-10 lg:px-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[35%] -z-10 h-[360px] w-[min(640px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18B96B26] blur-[110px]"
              />

              {/* Logo for mobile, where the left panel is hidden */}
              <Link
                href="/"
                aria-label="SiteCare home"
                className="mx-auto block w-fit lg:hidden"
              >
                <img
                  src="/logo.webp"
                  alt="SiteCare"
                  className="h-auto w-[130px] invert"
                />
              </Link>

              <div className="flex flex-1 items-center justify-center py-8">
                <div className="w-full max-w-[440px]">
                  <div className="text-center sm:text-left">
                    <h1 className="text-[32px] font-bold leading-[1.05] tracking-[-0.05em] text-[#10120F] sm:text-[40px]">
                      Verify your email
                    </h1>
                    <p className="mt-3 text-[15px] font-medium leading-relaxed tracking-[-0.01em] text-[#3b4252]">
                      Please verify your email address by clicking on the link
                      we just emailed to you.
                    </p>
                  </div>

                  <div className="mt-8 rounded-[24px] border border-[#E2E1D8] bg-white p-5 shadow-[0_1px_2px_rgba(16,18,15,0.04),0_20px_50px_-28px_rgba(16,18,15,0.18)] sm:p-7">
                    <div className="flex items-start gap-3 rounded-xl border border-[#DEDDD3] bg-[#F7F6F1] px-4 py-3">
                      <Mail
                        size={18}
                        className="mt-0.5 shrink-0 text-[#16834D]"
                      />
                      <p className="text-[13px] leading-5 text-[#3b4252]">
                        Check your inbox, and your spam folder too. The email
                        may take a minute to arrive.
                      </p>
                    </div>

                    {status === "verification-link-sent" && (
                      <div
                        role="status"
                        className="mt-5 flex items-start gap-2 rounded-xl border border-[#BFE8D2] bg-[#EAF8F0] px-4 py-3 text-[13px] font-medium leading-5 text-[#16834D]"
                      >
                        <Check size={16} strokeWidth={3} className="mt-0.5 shrink-0" />
                        <span>
                          A new verification link has been sent to the email
                          address you provided during registration.
                        </span>
                      </div>
                    )}

                    <Form
                      {...send.form()}
                      className="mt-6 flex flex-col gap-4"
                    >
                      {({ processing }) => (
                        <>
                          <Button
                            type="submit"
                            disabled={processing}
                            data-test="resend-verification-button"
                            className="h-12 w-full rounded-xl bg-[#18B96B] text-[14px] font-semibold text-[#10120F] shadow-none transition hover:bg-[#10120F] hover:text-white"
                          >
                            {processing && <Spinner />}
                            Resend verification email
                          </Button>

                          <TextLink
                            href={logout()}
                            className="mx-auto block text-[14px] font-semibold text-[#10120F] underline decoration-[#18B96B] decoration-2 underline-offset-4"
                          >
                            Log out
                          </TextLink>
                        </>
                      )}
                    </Form>
                  </div>
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
VerifyEmail.layout = {
  title: "Verify your email",
  description:
    "Please verify your email address by clicking on the link we just emailed to you.",
};
