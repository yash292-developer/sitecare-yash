import CTASection from "@/components/CTASection";
import { Head, Link } from "@inertiajs/react";
import {
  Activity,
  CalendarDays,
  Check,
  Database,
  MessageCircle,
  Palette,
  RefreshCw,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import SiteLayout from "@/layouts/site-layout";

/* ---------- Sample data (fictional, for illustration only) ---------- */

const STATS: {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
}[] = [
  {
    label: "Updates completed",
    value: "14",
    note: "WordPress, themes and plugins",
    icon: RefreshCw,
  },
  {
    label: "Backups saved",
    value: "31",
    note: "One every day",
    icon: Database,
  },
  {
    label: "Website uptime",
    value: "99.98%",
    note: "Online and running",
    icon: Activity,
  },
  {
    label: "Security checks",
    value: "All clear",
    note: "No issues found",
    icon: ShieldCheck,
  },
];

const ACTIVITY = [
  {
    title: "WordPress core is up to date",
    text: "Your site is running the latest version.",
  },
  {
    title: "9 plugin updates installed",
    text: "Each update was checked to make sure the site kept working.",
  },
  {
    title: "Daily backups stored safely",
    text: "If anything ever goes wrong, we can restore your site.",
  },
  {
    title: "Security scans completed",
    text: "We found nothing that needs your attention.",
  },
];

const STEPS = [
  {
    icon: CalendarDays,
    title: "We prepare it every month",
    text: "SiteCare turns your maintenance activity into a ready-to-send report.",
  },
  {
    icon: Palette,
    title: "It carries your branding",
    text: "Clients see your business, so your service feels consistent and professional.",
  },
  {
    icon: MessageCircle,
    title: "It arrives where clients are",
    text: "Reports can be delivered through WhatsApp, a familiar place for your clients.",
  },
];

/* ---------- Page ---------- */

export default function SampleReport() {
  return (
    <SiteLayout title="Sample report">
      <Head title="Sample Client Report | SiteCare" />

      <main className="bg-[#F0EFE9] px-0 pb-14 pt-0 font-sans sm:px-8 sm:pb-20 sm:pt-0">
        <div className="mx-auto w-full max-w-[1320px]">
          {/* HERO */}
          <section
            id="sample-report"
            className="relative isolate flex flex-col items-center overflow-hidden bg-[#F0EFE9] px-5 py-14 text-center sm:px-5 sm:py-20 md:py-24"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[45%] -z-10 h-[420px] w-[min(820px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18B96B26] opacity-100 blur-[120px]"
            />

            <a
              href="#report-preview"
              className="relative inline-flex max-w-full items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1.5 text-[11px] font-medium text-[#10120F] shadow-sm transition hover:shadow-md sm:gap-3 sm:text-xs"
            >
              <span className="shrink-0 rounded-full bg-[#18B96B] px-3 py-1 font-bold text-[#071b11]">
                SAMPLE
              </span>
              <span className="min-w-0 truncate">
                A real look at a monthly client report
              </span>
              <span className="shrink-0 pr-2 text-base">→</span>
            </a>

            <h1 className="relative mx-auto mt-7 max-w-5xl text-[clamp(36px,8.5vw,80px)] font-bold leading-[0.98] tracking-[-0.065em] text-[#10120F] sm:text-[clamp(42px,6.2vw,80px)]">
              This is what your
              <br className="hidden sm:block" /> clients receive.
            </h1>

            <p className="relative mx-auto mt-5 max-w-[550px] text-[15px] font-medium leading-relaxed tracking-[-0.02em] text-[#3b4252] sm:mt-6 sm:text-lg">
              A clear, branded monthly report that explains your website
              maintenance in plain language, with no technical jargon.
            </p>

            <div className="relative mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/register"
                className="inline-flex h-[54px] w-full max-w-[250px] items-center justify-center gap-3 rounded-full bg-[#080d18] px-7 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#202a3a] sm:w-auto"
              >
                Start 14-day free trial
                <span className="text-lg">→</span>
              </Link>

              <a
                href="#sample-report"
                className="inline-flex h-[54px] w-full max-w-[250px] items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-7 text-sm font-semibold text-[#111827] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md sm:w-auto"
              >
                <span className="text-base text-[#19b875]">▤</span>
                See a sample report
              </a>
            </div>

            <p className="relative mt-5 px-4 text-center text-[13px] leading-[19.5px] text-[#6B7280]">
              14-day free trial. No credit card required.
            </p>
          </section>

          {/* REPORT PREVIEW */}
          <section
            id="report-preview"
            className="mt-2 scroll-mt-28 sm:mt-6 px-5"
          >
            <div className="mx-auto max-w-[900px]">
              <div className="mb-4 flex items-center justify-between gap-3 px-1">
                <p className="text-[13px] font-semibold text-[#10120F]">
                  Monthly report preview
                </p>
                <span className="rounded-full border border-[#DDE9E0] bg-[#E3F4EA] px-3 py-1 text-[12px] font-semibold text-[#16834D]">
                  Sample data
                </span>
              </div>

              <article className="overflow-hidden rounded-[28px] border border-[#E2E1D8] bg-white shadow-[0_1px_2px_rgba(16,18,15,0.04),0_30px_70px_-35px_rgba(16,18,15,0.25)]">
                {/* Report header */}
                <header className="flex flex-col gap-5 border-b border-[#ECEBE3] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-8">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#10120F] text-[16px] font-bold text-[#18B96B]"
                    >
                      N
                    </span>
                    <div>
                      <p className="text-[16px] font-bold tracking-[-0.02em] text-[#10120F]">
                        Northwind Web Studio
                      </p>
                      <p className="text-[13px] text-[#5B6157]">
                        Your logo and brand colors go here
                      </p>
                    </div>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-[13px] font-semibold text-[#16834D]">
                      Monthly website report
                    </p>
                    <p className="text-[15px] font-semibold text-[#10120F]">
                      October 2026
                    </p>
                  </div>
                </header>

                <div className="px-5 py-6 sm:px-9 sm:py-8">
                  {/* Client */}
                  <p className="text-[13px] text-[#5B6157]">Prepared for</p>
                  <h2 className="mt-1 text-[24px] font-bold leading-tight tracking-[-0.04em] text-[#10120F] sm:text-[30px]">
                    Harbor &amp; Pine Café
                  </h2>
                  <p className="text-[14px] text-[#5B6157]">
                    harborandpine.com
                  </p>

                  {/* Plain-language summary */}
                  <div className="mt-6 rounded-2xl border border-[#18B96B]/25 bg-[#E3F4EA] p-5 sm:p-6">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#18B96B] text-[#071b11]">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#10120F]">
                        Everything is running smoothly
                      </h3>
                    </div>
                    <p className="mt-3 text-[15px] leading-7 text-[#2E4638]">
                      Your website was online and working well all month. We
                      kept everything up to date and your backups are safe.
                      Nothing needs your attention right now.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {STATS.map((stat) => {
                      const Icon = stat.icon;

                      return (
                        <div
                          key={stat.label}
                          className="rounded-2xl border border-[#E2E1D8] bg-[#FAFAF6] p-4"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#16834D] shadow-sm">
                            <Icon size={17} />
                          </span>
                          <p className="mt-4 text-[24px] font-bold leading-none tracking-[-0.04em] text-[#10120F] sm:text-[28px]">
                            {stat.value}
                          </p>
                          <p className="mt-2 text-[13px] font-semibold text-[#10120F]">
                            {stat.label}
                          </p>
                          <p className="mt-0.5 text-[12px] leading-5 text-[#5B6157]">
                            {stat.note}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Activity */}
                  <h3 className="mt-9 text-[18px] font-bold tracking-[-0.02em] text-[#10120F]">
                    What we looked after
                  </h3>

                  <ul className="mt-4 divide-y divide-[#ECEBE3] rounded-2xl border border-[#E2E1D8]">
                    {ACTIVITY.map((item) => (
                      <li
                        key={item.title}
                        className="flex items-start gap-4 px-4 py-4 sm:px-5"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E3F4EA] text-[#16834D]">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[15px] font-semibold text-[#10120F]">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-[14px] leading-6 text-[#5B6157]">
                            {item.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <footer className="border-t border-[#ECEBE3] bg-[#FAFAF6] px-5 py-4 text-[13px] text-[#5B6157] sm:px-9">
                  Questions about your report? Just reply to Northwind Web
                  Studio and we &apos;ll be happy to help.
                </footer>
              </article>

              <p className="mt-4 px-1 text-center text-[12.5px] text-[#6B7280]">
                Business, website and figures shown are made-up examples for
                illustration.
              </p>
            </div>
          </section>

          {/* DELIVERY */}
          <section className="mt-16 grid grid-cols-[minmax(0,1fr)] items-center gap-8 sm:mt-24 lg:grid-cols-2 lg:gap-14 px-5">
            <div className="min-w-0">
              <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.05em] text-[#10120F] sm:text-[40px]">
                Reports that clients
                <br className="hidden sm:block" /> actually read.
              </h2>
              <p className="mt-4 max-w-[480px] text-[15px] leading-7 text-[#3b4252] sm:text-[16px]">
                Instead of explaining technical details every month, send a
                report your clients understand at a glance.
              </p>

              <ul className="mt-8 space-y-5">
                {STEPS.map((step) => {
                  const Icon = step.icon;

                  return (
                    <li key={step.title} className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E2E1D8] bg-white text-[#16834D]">
                        <Icon size={19} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[16px] font-semibold text-[#10120F]">
                          {step.title}
                        </p>
                        <p className="mt-0.5 text-[14.5px] leading-6 text-[#5B6157]">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Message preview */}
            <div className="relative isolate min-w-0 overflow-hidden rounded-[28px] bg-[#10120F] p-5 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(24,185,107,0.28), transparent 70%)",
                }}
              />

              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18B96B] text-[15px] font-bold text-[#071b11]"
                >
                  N
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-white">
                    Northwind Web Studio
                  </p>
                  <p className="text-[12px] text-[#A8B2AC]">via WhatsApp</p>
                </div>
              </div>

              <div className="mt-6 max-w-[360px] rounded-2xl rounded-tl-md bg-white p-4 shadow-sm">
                <p className="text-[14.5px] leading-6 text-[#10120F]">
                  Hi Sarah, your October website report for Harbor &amp; Pine
                  Café is ready.
                </p>
                <p className="mt-2 text-[14.5px] leading-6 text-[#10120F]">
                  Everything ran smoothly this month: 14 updates, daily backups
                  and 99.98% uptime.
                </p>

                <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-[#E3F4EA] px-3.5 py-3">
                  <span className="text-[13.5px] font-semibold text-[#16834D]">
                    View your report
                  </span>
                  <span aria-hidden="true" className="text-[#16834D]">
                    →
                  </span>
                </div>

                <p className="mt-2 text-right text-[11px] text-[#85877E]">
                  9:00 AM
                </p>
              </div>
            </div>
          </section>

          {/* BOTTOM CTA */}
          <div className="mt-16 sm:mt-24">
            <CTASection />
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
