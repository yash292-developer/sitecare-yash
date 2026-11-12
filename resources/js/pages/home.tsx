import { Link } from "@inertiajs/react";
import { useState } from "react";
import PricingSection from "@/components/pricing-section";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import PluginsSection from "@/components/PluginsSection";
import SiteLayout from "@/layouts/site-layout";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <SiteLayout title="Home">
      {/* HERO SECTION */}
      <section
        id="product"
        className="relative isolate flex min-h-[570px] flex-col items-center overflow-hidden bg-[#F7F6F2] px-5 py-16 text-center md:min-h-[590px] md:py-35" >
        {/* Green Background Glow */}
        <div
          aria-hidden="true"
          class="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[420px] w-[min(820px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19D27A33] opacity-100 blur-[120px]"
        ></div>

        {/* Announcement Badge */}
        <a
          href="#how-it-works"
          className="relative inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-2 py-1.5 text-[11px] font-medium text-[#111827] shadow-sm transition hover:shadow-md sm:text-xs"
        >
          <span className="rounded-full bg-[#19D27A] px-3 py-1 font-bold text-[#071b11]">
            NEW
          </span>

          <span>Reports now delivered on WhatsApp</span>

          <span className="pr-2 text-base">→</span>
        </a>

        {/* Main Heading */}
        <h1 className="relative mx-auto mt-7 max-w-5xl text-[clamp(42px,6.2vw,80px)] font-bold leading-[0.98] tracking-[-0.065em] text-[#080d18]">
          Care plans your clients
          <br className="hidden sm:block" /> can actually see.
        </h1>

        {/* Description */}
        <p className="relative mx-auto mt-6 max-w-[550px] text-base font-medium leading-relaxed tracking-[-0.02em] text-[#3b4252] sm:text-lg">
          SiteCare watches every WordPress site you manage and sends a branded,
          plain-language report to your client’s WhatsApp. Automatically, every
          month.
        </p>

        {/* CTA Buttons */}
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

        {/* Trial Information */}
        <p className="relative mt-5  text-[13px] font-normal leading-[19.5px] tracking-normal text-center align-middle text-[#6B7280]">
          No credit card · Cancel anytime · Pay in ₹ with UPI
        </p>
      </section>

      {/* DASHBOARD PREVIEW IMAGE */}
      <section
        id="sample-report"
        className="relative mx-auto w-full max-w-[1320px] scroll-mt-28 px-5 py-16 sm:px-8">
        <div className="relative mx-auto w-full max-w-[1112px]">
          <img
            src="/PRODUCT%20SHOT%20(1).png"
            alt="SiteCare agency dashboard and WhatsApp report preview"
            className="h-auto w-full rounded-[28px] object-contain opacity-100 shadow-[0px_40px_80px_-24px_#0A0F1A59,0px_0px_0px_1px_#0A0F1A0F]"
            loading="lazy"
          />
        </div>
      </section>

      {/* PLUGINS & TOOLS SLIDER */}
       <PluginsSection />

      {/* THE MONTHLY GRIND SECTION */}
      <section className="w-full bg-[#F7F6F2] px-5 py-16 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
          {/* LEFT CONTENT */}
          <div className="flex flex-col">
            <p className="mb-5 font-mono text-[12px] font-normal uppercase leading-4 tracking-[2.16px] text-[#0B9B57]">
              — The monthly grind
            </p>

            <h2 className="max-w-[440px] font-sans text-[36px] font-semibold leading-[0.96] tracking-[-0.04em] text-[#0A0F1A] sm:text-[44.1px]">
              Selling a care plan is easy.{" "}
              <span className="font-serif font-normal italic text-[#6B7280]">
                Proving it
              </span>{" "}
              is the hard part.
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col border-t border-[#E7E5DE]">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 gap-3 border-b border-[#E7E5DE] py-7 sm:grid-cols-[180px_1fr] sm:gap-6">
              <h3 className="font-sans text-[16px] font-semibold leading-7 text-[#0A0F1A]">
                Reports eat weekends
              </h3>

              <p className="font-sans text-[16px] font-normal leading-6 text-[#3B4252]">
                Screenshots from five dashboards, pasted into Canva, exported,
                emailed. Times twenty clients.
              </p>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 gap-3 border-b border-[#E7E5DE] py-7 sm:grid-cols-[180px_1fr] sm:gap-6">
              <h3 className="font-sans text-[16px] font-semibold leading-7 text-[#0A0F1A]">
                Clients never read them
              </h3>

              <p className="font-sans text-[16px] font-normal leading-6 text-[#3B4252]">
                Jargon in a PDF nobody opens, until the invoice arrives and they
                ask, “What am I paying for?”
              </p>
            </div>

            {/* ROW 3 */}
            <div className="grid grid-cols-1 gap-3 py-7 sm:grid-cols-[180px_1fr] sm:gap-6">
              <h3 className="font-sans text-[16px] font-semibold leading-7 text-[#0A0F1A]">
                Tools bill in dollars
              </h3>

              <p className="font-sans text-[16px] font-normal leading-6 text-[#3B4252]">
                Per-site USD pricing, forex markup, foreign cards, and no
                WhatsApp. Painful at Indian margins.
              </p>
            </div>
          </div>
        </div>
      </section>

     
<section
  id="sample-reports"
  className="relative mx-auto w-full max-w-full py-0"
>
  <div className="relative mx-auto w-full max-w-[1320px] overflow-hidden rounded-[28px] bg-[#090e1a]">

    {/* SECTION HEADING */}
    <div className="px-6 pt-12 pb-6 sm:px-8 md:px-10">
      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-emerald-400">
        — Features
      </p>

      <h2 className="max-w-[500px] text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl">
        Monitor quietly.
        <br />
        Report beautifully.
      </h2>
    </div>

    {/* DASHBOARD IMAGE */}
    <div className="w-full px-0">
      <img
        src="/Featured-img.png"
        alt="SiteCare agency dashboard and WhatsApp report preview"
        className="block h-auto w-full object-contain"
        loading="lazy"
      />
    </div>

  </div>
</section>


      {/* HOW IT WORKS SECTION */}

      <section
        id="how-it-works"
        className="w-full bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="max-w-[490px]">
            <p className="mb-5 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[2px] text-[#0B9B57]">
              <span className="h-px w-6 bg-[#0B9B57]" />
              How it works
            </p>

            <h2 className="max-w-[460px] text-[36px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#0A0F1A] sm:text-[46px]">
              Connected in minutes.
              <span className="block text-[#89929E]">Then it runs itself.</span>
            </h2>

            <p className="mt-5 max-w-[390px] text-[14px] leading-7 text-[#737D8C]">
              Get your website connected once. SiteCare takes care of
              monitoring, updates and reporting in the background.
            </p>

            {/* INTERACTIVE STEPS */}
            <div className="mt-10 space-y-3">
              {[
                {
                  number: "01",
                  title: "Add your website",
                  description:
                    "Paste your URL, install the plugin and connect using your secure site key.",
                  tag: "5 MINUTES",
                },
                {
                  number: "02",
                  title: "We monitor everything",
                  description:
                    "Health, updates, backups and uptime flow into one clear monitoring timeline.",
                  tag: "AUTOMATED",
                },
                {
                  number: "03",
                  title: "Reports go out automatically",
                  description:
                    "Review once. Your monthly reports reach clients through WhatsApp and email.",
                  tag: "EVERY MONTH",
                },
              ].map((step, index) => (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`group flex w-full gap-5 rounded-[16px] border p-5 text-left transition-all duration-300 ${
                    activeStep === index
                      ? "border-[#E7E5DE] bg-white shadow-[0_12px_30px_-18px_rgba(10,15,26,0.25)]"
                      : "border-transparent bg-transparent hover:border-[#E7E5DE] hover:bg-white/70"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-[11px] font-semibold transition-all ${
                      activeStep === index
                        ? "bg-[#0A0F1A] text-[#19D27A]"
                        : "border border-[#E7E5DE] bg-white text-[#89929E]"
                    }`}
                  >
                    {step.number}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="text-[15px] font-semibold text-[#0A0F1A]">
                        {step.title}
                      </span>

                      {activeStep === index && (
                        <span className="rounded-full bg-[#E0F8EC] px-2 py-1 text-[9px] font-semibold tracking-wide text-[#079653]">
                          {step.tag}
                        </span>
                      )}
                    </span>

                    <span className="block max-w-[320px] text-[12px] leading-[20px] text-[#737D8C]">
                      {step.description}
                    </span>
                  </span>

                  <span
                    className={`mt-1 h-2 w-2 shrink-0 rounded-full transition ${
                      activeStep === index ? "bg-[#19D27A]" : "bg-transparent"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-2 text-[11px] text-[#737D8C]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0F8EC] text-[#079653]">
                ✓
              </span>
              No complicated setup. No daily manual work.
            </div>
          </div>

          {/* RIGHT DYNAMIC PREVIEW */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-[#19D27A]/[0.08] blur-[55px]" />

            <div className="relative rounded-[22px] border border-[#E3E1DB] bg-[#EAE9E5] p-2 sm:p-3">
              <div className="overflow-hidden rounded-[15px] border border-[#E7E5DE] bg-white shadow-[0_20px_50px_-25px_rgba(10,15,26,0.22)]">
                {/* BROWSER BAR */}
                <div className="flex h-[48px] items-center justify-between border-b border-[#E7E5DE] bg-[#FBFBF9] px-4 sm:px-5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B65]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F5C451]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#45C88A]" />
                  </div>

                  <div className="flex h-[25px] w-[55%] items-center justify-center rounded-md border border-[#E7E5DE] bg-white px-2 text-[9px] text-[#89929E]">
                    sitecare.app /{" "}
                    {activeStep === 0
                      ? "connect"
                      : activeStep === 1
                      ? "monitoring"
                      : "reports"}
                  </div>

                  <span className="text-[10px] text-[#89929E]">•••</span>
                </div>

                {/* STEP 1 PREVIEW */}
                {activeStep === 0 && (
                  <div className="min-h-[420px] p-5 sm:p-8">
                    <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[1.3px] text-[#89929E]">
                          Website integration
                        </p>
                        <h3 className="mt-1 text-[18px] font-semibold text-[#0A0F1A]">
                          Connect your website
                        </h3>
                      </div>
                      <span className="rounded-full border border-[#E7E5DE] bg-[#F7F6F2] px-3 py-1.5 font-mono text-[9px] text-[#737D8C]">
                        STEP 01 / 03
                      </span>
                    </div>

                    <div className="mb-5">
                      <label className="mb-2 block text-[10px] font-semibold text-[#3B4252]">
                        Website URL
                      </label>
                      <div className="flex h-[46px] items-center rounded-[9px] border border-[#E7E5DE] bg-white px-4 text-[11px] text-[#0A0F1A]">
                        https://sharmadental.in
                      </div>
                    </div>

                    <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[10px] font-semibold text-[#3B4252]">
                          Site key
                        </label>
                        <div className="flex h-[46px] items-center rounded-[9px] border border-[#E7E5DE] bg-[#F7F6F2] px-3 font-mono text-[10px] text-[#0A0F1A]">
                          sk_9fK2Lq8...a81
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-[10px] font-semibold text-[#3B4252]">
                          Secret key
                        </label>
                        <div className="flex h-[46px] items-center rounded-[9px] border border-[#E7E5DE] bg-[#F7F6F2] px-3 text-[11px] tracking-[3px] text-[#0A0F1A]">
                          ••••••••••••
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-[11px] border border-[#B8EBD0] bg-[#E9F9F0] p-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#19D27A] text-[15px] font-bold text-[#064B30]">
                          ✓
                        </span>
                        <div>
                          <p className="text-[11px] font-semibold text-[#087A48]">
                            Connected successfully
                          </p>
                          <p className="mt-0.5 text-[9px] text-[#47956E]">
                            Your website is ready to monitor
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1.5 font-mono text-[9px] text-[#079653]">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                )}

                {/* STEP 2 PREVIEW */}
                {activeStep === 1 && (
                  <div className="min-h-[420px] p-5 sm:p-8">
                    <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[1.3px] text-[#89929E]">
                          Live website monitoring
                        </p>
                        <h3 className="mt-1 text-[18px] font-semibold text-[#0A0F1A]">
                          Website health overview
                        </h3>
                      </div>
                      <span className="flex items-center gap-2 rounded-full bg-[#E0F8EC] px-3 py-1.5 text-[9px] font-semibold text-[#079653]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#19D27A]" />
                        ALL SYSTEMS OK
                      </span>
                    </div>

                    <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {[
                        {
                          label: "Health score",
                          value: "98/100",
                          color: "text-[#079653]",
                        },
                        {
                          label: "Uptime",
                          value: "99.97%",
                          color: "text-[#079653]",
                        },
                        {
                          label: "Updates",
                          value: "04",
                          color: "text-[#0A0F1A]",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-xl border border-[#E7E5DE] bg-[#FBFBF9] p-4"
                        >
                          <p className="text-[9px] text-[#89929E]">
                            {item.label}
                          </p>
                          <p
                            className={`mt-2 text-[21px] font-semibold tracking-tight ${item.color}`}
                          >
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl border border-[#E7E5DE] p-4">
                      <div className="mb-5 flex items-center justify-between">
                        <p className="text-[11px] font-semibold text-[#0A0F1A]">
                          Monitoring activity
                        </p>
                        <span className="text-[9px] text-[#89929E]">
                          Latest checks
                        </span>
                      </div>

                      {[
                        {
                          name: "Website uptime",
                          detail: "Website responding normally",
                        },
                        {
                          name: "SSL certificate",
                          detail: "Certificate is valid",
                        },
                        {
                          name: "WordPress updates",
                          detail: "Updates checked successfully",
                        },
                        {
                          name: "Backup monitoring",
                          detail: "Backup status verified",
                        },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between gap-3 border-t border-[#F0EFEB] py-3"
                        >
                          <div>
                            <p className="text-[10px] font-semibold text-[#0A0F1A]">
                              {item.name}
                            </p>
                            <p className="mt-1 text-[9px] text-[#89929E]">
                              {item.detail}
                            </p>
                          </div>
                          <span className="shrink-0 rounded-full bg-[#E0F8EC] px-2 py-1 text-[8px] font-semibold text-[#079653]">
                            HEALTHY
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3 PREVIEW */}
                {activeStep === 2 && (
                  <div className="min-h-[420px] p-5 sm:p-8">
                    <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[1.3px] text-[#89929E]">
                          Automated client reporting
                        </p>
                        <h3 className="mt-1 text-[18px] font-semibold text-[#0A0F1A]">
                          Your monthly report
                        </h3>
                      </div>
                      <span className="rounded-full bg-[#E0F8EC] px-3 py-1.5 text-[9px] font-semibold text-[#079653]">
                        READY TO SEND
                      </span>
                    </div>

                    <div className="rounded-xl border border-[#E7E5DE] bg-[#FBFBF9] p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[10px] text-[#89929E]">
                            REPORT FOR
                          </p>
                          <h4 className="mt-1 text-[16px] font-semibold text-[#0A0F1A]">
                            Sharma Dental
                          </h4>
                          <p className="mt-1 text-[10px] text-[#89929E]">
                            Monthly website performance
                          </p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A0F1A] text-[18px] font-bold text-[#19D27A]">
                          S
                        </div>
                      </div>

                      <div className="my-5 grid grid-cols-2 gap-3">
                        <div className="rounded-lg border border-[#E7E5DE] bg-white p-3">
                          <p className="text-[9px] text-[#89929E]">
                            Website uptime
                          </p>
                          <p className="mt-2 text-[22px] font-semibold text-[#079653]">
                            99.97%
                          </p>
                        </div>
                        <div className="rounded-lg border border-[#E7E5DE] bg-white p-3">
                          <p className="text-[9px] text-[#89929E]">
                            Health score
                          </p>
                          <p className="mt-2 text-[22px] font-semibold text-[#0A0F1A]">
                            98/100
                          </p>
                        </div>
                      </div>

                      <div className="rounded-lg border border-[#B8EBD0] bg-[#E9F9F0] p-4">
                        <p className="text-[11px] font-semibold text-[#087A48]">
                          Monthly report is ready
                        </p>
                        <p className="mt-1 text-[10px] leading-5 text-[#47956E]">
                          Website performance and maintenance summary prepared
                          for your client.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 rounded-xl border border-[#E7E5DE] p-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E0F8EC] text-[13px] text-[#079653]">
                          W
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold text-[#0A0F1A]">
                            WhatsApp
                          </p>
                          <p className="text-[9px] text-[#89929E]">
                            Delivery ready
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl border border-[#E7E5DE] p-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F0F1F4] text-[13px] text-[#0A0F1A]">
                          @
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold text-[#0A0F1A]">
                            Email
                          </p>
                          <p className="text-[9px] text-[#89929E]">
                            Delivery ready
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* FLOATING STATUS */}
            <div className="absolute -bottom-7 left-4 flex items-center gap-3 rounded-xl border border-[#E7E5DE] bg-white p-3 shadow-[0_12px_35px_-15px_rgba(10,15,26,0.25)] sm:-left-7 sm:p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E0F8EC] text-[16px] text-[#079653]">
                ✓
              </div>
              <div>
                <p className="text-[10px] font-semibold text-[#0A0F1A]">
                  {activeStep === 0
                    ? "Setup complete"
                    : activeStep === 1
                    ? "Monitoring active"
                    : "Report prepared"}
                </p>
                <p className="mt-0.5 text-[9px] text-[#737D8C]">
                  {activeStep === 0
                    ? "Ready for monitoring"
                    : activeStep === 1
                    ? "Website health checked"
                    : "Ready for delivery"}
                </p>
              </div>
              <span className="ml-2 h-2 w-2 rounded-full bg-[#19D27A]" />
            </div>
          </div>
        </div>
      </section>

      {/* THE DELIVERABLE SECTION */}
      <section className="w-full overflow-hidden bg-[#EFEDE6] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* LEFT CONTENT */}
          <div className="max-w-[700px]">
            <p className="mb-5 font-mono text-[12px] font-normal uppercase tracking-[2.16px] text-[#0B9B57]">
              — The deliverable
            </p>

            <h2 className="max-w-[680px] font-sans text-[38px] font-semibold leading-[0.98] tracking-[-1.8px] text-[#0A0F1A] sm:text-[48px] lg:text-[50px]">
              Short. Clear.
              <span className="font-serif font-normal italic tracking-[-1.5px] text-[#0B9B57]">
                Obviously
                <br />
                worth paying for.
              </span>
            </h2>

            <p className="mt-8 max-w-[700px] text-[18px] leading-[1.65] text-[#3B4252]">
              Every report opens with a one-sentence verdict, then shows the
              proof. If something needs attention, it says exactly what.
            </p>

            {/* CHECKLIST */}
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#16D17B] text-[16px] font-bold text-[#07121A]">
                  ✓
                </span>
                <p className="pt-0.5 text-[18px] leading-7 text-[#3B4252]">
                  <strong className="font-semibold text-[#0A0F1A]">
                    Plain language.
                  </strong>{" "}
                  No plugin-slug soup.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#16D17B] text-[16px] font-bold text-[#07121A]">
                  ✓
                </span>
                <p className="pt-0.5 text-[18px] leading-7 text-[#3B4252]">
                  <strong className="font-semibold text-[#0A0F1A]">
                    Honest status.
                  </strong>{" "}
                  “Plugin not reporting” is never confused with “site down”.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#16D17B] text-[16px] font-bold text-[#07121A]">
                  ✓
                </span>
                <p className="pt-0.5 text-[18px] leading-7 text-[#3B4252]">
                  <strong className="font-semibold text-[#0A0F1A]">
                    Your brand.
                  </strong>{" "}
                  Logo and colours on every page.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFB51B] text-[18px] font-medium text-[#0A0F1A]">
                  +
                </span>

                <p className="text-[18px] font-semibold text-[#0A0F1A]">
                  Hindi reports
                </p>

                <span className="rounded-full bg-[#FFF0C9] px-3 py-1 text-[11px] font-semibold text-[#A66B00]">
                  coming soon
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[550px] px-3 py-8 sm:px-6">
            <div className="relative w-full overflow-hidden rounded-[20px]">
              <img
                src="/div.reveal.png"
                alt="SiteCare website care report preview"
                className="block h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY SITECARE - COMPARISON SECTION */}
      <section className="w-full bg-[#F7F6F2] px-5 py-16 sm:px-8">
        <div className="mx-auto w-full max-w-[1320px]">
          {/* Section Heading */}
          <div className="mb-14 text-center">
            <p className="mb-5 font-sans text-[13px] font-semibold uppercase tracking-[2.5px] text-[#16D17B]">
              — WHY SITECARE
            </p>

            <h2 className="mx-auto max-w-[800px] font-sans text-[36px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#0A0F1A] sm:text-[48px] lg:text-[54px]">
              Built for how Indian agencies
              <br className="hidden sm:block" />
              actually work
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="overflow-hidden rounded-[24px] bg-white">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-[#0A0F1A] px-5 py-6 text-[14px] font-semibold text-white sm:px-10 sm:text-[16px]">
              <div>Features</div>
              <div>SiteCare</div>
              <div className="font-medium text-[#9CA3AF]">Global tools</div>
            </div>

            {/* Table Rows */}
            {[
              {
                feature: "Pricing",
                sitecare: "₹ + GST invoice",
                global: "USD",
              },
              {
                feature: "Payment",
                sitecare: "UPI, cards, netbanking",
                global: "Intl. cards",
              },
              {
                feature: "Delivery",
                sitecare: "WhatsApp + email",
                global: "Email only",
              },
              {
                feature: "Plugin access",
                sitecare: "Read-only",
                global: "Often full control",
              },
              {
                feature: "Support",
                sitecare: "Local, your timezone",
                global: "Overseas queue",
              },
            ].map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 items-center px-5 py-[21px] text-[14px] sm:px-10 sm:text-[16px] ${
                  index !== 4 ? "border-b border-[#E7E5DE]" : ""
                }`}
              >
                <div className="font-semibold text-[#0A0F1A]">
                  {item.feature}
                </div>

                <div className="font-semibold text-[#00A85A]">
                  {item.sitecare}
                </div>

                <div className="font-medium text-[#6B7280]">{item.global}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />
      <FAQSection />
      <CTASection />
    </SiteLayout>
  );
}


