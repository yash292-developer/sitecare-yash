import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import HowItWorks from '@/components/how-it-works';

import {
  ArrowUpRight,
  Check,
  LifeBuoy,
  MonitorCheck,
  Plus,
  RefreshCw,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

import SiteLayout from "@/layouts/site-layout";

/*
 * Palette (SiteCare brand)
 * paper #F7F6F2 · white · ink #080D18 · green #19D27A · mint #E0F8EC
 * muted #5A6473 (text on light)
 * Sections alternate paper / white / mint instead of using borders.
 */

const services = [
  {
    icon: RefreshCw,
    title: "WordPress maintenance",
    text: "Keep your core, themes and plugins updated with thoughtful maintenance and attention to compatibility.",
    tags: ["Core", "Plugins", "Themes"],
  },
  {
    icon: ShieldCheck,
    title: "Website security",
    text: "A proactive approach to security, with regular checks and attention to potential issues.",
    tags: ["Security checks", "Protection"],
  },
  {
    icon: Zap,
    title: "Speed and performance",
    text: "Identify performance concerns and practical ways to make your website feel smoother.",
    tags: ["Speed review", "Optimization"],
  },
  {
    icon: Wrench,
    title: "Website fixes",
    text: "Get help investigating errors, broken functionality and unexpected problems.",
    tags: ["Troubleshooting", "Bug fixes"],
  },
  {
    icon: MonitorCheck,
    title: "Website health",
    text: "Regular attention to the important details that support your website’s reliability.",
    tags: ["Health checks", "Functionality"],
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    text: "Straightforward guidance when you need help understanding an issue or planning maintenance.",
    tags: ["Guidance", "Support"],
  },
];

const problems = [
  "WordPress updates and plugin compatibility",
  "Security concerns that go unnoticed",
  "Unexpected errors and broken functionality",
];

const principles = [
  {
    title: "People come first",
    text: "We listen to what you need, make room for questions, and explain technical details in a way that makes sense.",
  },
  {
    title: "Thoughtful work",
    text: "Website changes deserve attention. We consider the impact of updates and fixes before moving forward.",
  },
  {
    title: "Keep things simple",
    text: "Practical solutions and clear communication, instead of making website care more complicated.",
  },
];

const steps = [
  {
    title: "Tell us about your website",
    text: "Share your website and what you need help with, in your own words.",
  },
  {
    title: "We understand the situation",
    text: "We review the issue and identify practical next steps.",
  },
  {
    title: "Get a clear plan",
    text: "We explain the recommended work before moving forward.",
  },
  {
    title: "We take care of the details",
    text: "We work through the agreed tasks and keep communication clear.",
  },
];

const checklist = [
  "WordPress core updates",
  "Plugin and theme updates",
  "Security-focused checks",
  "Website functionality checks",
  "Performance review",
  "Website troubleshooting",
  "Technical guidance",
  "Ongoing maintenance",
];

const faqs = [
  {
    question: "What does SiteCare help with?",
    answer:
      "SiteCare focuses on WordPress website maintenance and support. This can include updates, website health checks, security-focused maintenance, performance improvements, troubleshooting, and technical guidance.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. You can describe your website issue in your own words. We aim to explain technical details clearly and help you understand what needs attention.",
  },
  {
    question: "Can you help with an existing website problem?",
    answer:
      "Yes. Contact us with details about your website and the issue you are experiencing. We can review the situation and discuss an appropriate next step.",
  },
  {
    question: "Why does WordPress need maintenance?",
    answer:
      "WordPress, themes, and plugins change over time. Regular maintenance helps keep components current, monitor website health, and identify issues that need attention.",
  },
  {
    question: "Can I get ongoing website support?",
    answer:
      "SiteCare focuses on website care and maintenance needs. Contact us with details about your website and the support you are looking for.",
  },
];

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19D27A]";

const h2 =
  "font-heading text-[28px] font-semibold leading-[1.15] tracking-[-0.8px] sm:text-[36px]";

/* Serif italic accent. Swap `font-serif` for your home page's italic font class. */
function Em({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-serif font-normal italic ${className}`}>
      {children}
    </span>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-8 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-[1320px]">{children}</div>
    </section>
  );
}

function Button({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  const styles =
    variant === "dark"
      ? "bg-[#080D18] text-white hover:bg-[#19D27A] hover:text-[#080D18]"
      : "bg-white text-[#080D18] hover:bg-[#E0F8EC]";

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition ${styles} ${focus}`}
    >
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

export default function About() {
  return (
    <SiteLayout title="About SiteCare">
      <div className="bg-[#F7F6F2] text-[#080D18]">
       
        {/* HERO */}
        <section
  id="product"
  className="relative isolate flex min-h-[570px] flex-col items-center overflow-hidden bg-[#F7F6F2] px-5 py-16 text-center md:min-h-[590px] md:py-35"
>
  {/* Green Background Glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[420px] w-[min(820px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19D27A33] opacity-100 blur-[120px]"
  />

  {/* Announcement */}
  <a
    href="/contact"
    className={`group inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#E7E5DE] bg-white p-1.5 pr-4 shadow-[0_3px_10px_rgba(8,13,24,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(8,13,24,0.10)] ${focus}`}
  >
    <span className="rounded-full bg-[#19D27A] px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-[#080D18]">
      SITECARE
    </span>

    <span className="truncate text-[12px] font-medium text-[#3F4A5A] sm:text-[13px]">
      WordPress care made simple
    </span>

    <ArrowUpRight
      size={15}
      className="shrink-0 text-[#080D18] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  </a>

  {/* Main Heading */}
  <h1 className="relative mx-auto mt-9 max-w-[920px] font-heading text-[42px] font-semibold leading-[1.04] tracking-[-2.2px] text-[#080D18] sm:text-[58px] sm:tracking-[-3px] md:text-[76px] md:leading-[1.02]">
    Your website deserves
    <br className="hidden sm:block" />
    <span className="text-[#19A968]">better care.</span>
  </h1>

  {/* Description */}
  <p className="relative mx-auto mt-6 max-w-[570px] text-[16px] leading-7 text-[#5A6473] sm:text-[18px] sm:leading-8">
    We help businesses keep their WordPress websites updated, secure
    and running smoothly.
    <br className="hidden sm:block" />
    Reliable website care, without the technical stress.
  </p>

  {/* CTA Buttons */}
  <div className="relative mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">

    {/* Primary CTA */}
    <a
      href="/contact"
      className={`group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#080D18] px-7 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(8,13,24,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19D27A] hover:text-[#080D18] hover:shadow-[0_10px_24px_rgba(25,210,122,0.18)] ${focus}`}
    >
      Talk to SiteCare

      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>

    {/* Secondary CTA */}
    <a
      href="#services"
      className={`group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-[#E7E5DE] bg-white px-7 text-[14px] font-semibold text-[#080D18] shadow-[0_3px_8px_rgba(8,13,24,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#19D27A] hover:bg-[#E0F8EC] ${focus}`}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E0F8EC] text-[#19A968]">
        <ShieldCheck size={15} />
      </span>

      Explore our services

      <ArrowUpRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  </div>

  {/* Supporting Text */}
  <div className="relative mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[12px] text-[#737D8C] sm:text-[13px]">
    <span>WordPress maintenance</span>
    <span className="text-[#19A968]">·</span>
    <span>Security</span>
    <span className="text-[#19A968]">·</span>
    <span>Performance</span>
    <span className="text-[#19A968]">·</span>
    <span>Support</span>
  </div>
</section>

        

   
     

        {/* SERVICES */}
        <Section id="services" className="bg-[#F7F6F2] !py-16">
          {/* Heading */}
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[600px]">
              <p className="mb-4 text-[12px] font-semibold uppercase tracking-[1.4px] text-[#737D8C]">
                OUR SERVICES
              </p>

              <h2 className="font-heading text-[34px] font-semibold leading-[1.1] tracking-[-1.5px] text-[#080D18] sm:text-[46px] sm:tracking-[-2px]">
                What we <Em>take care of.</Em>
              </h2>
            </div>

            <p className="max-w-[380px] text-[15px] leading-7 text-[#5A6473]">
              Everything your WordPress website needs to stay secure, dependable
              and running smoothly.
            </p>
          </div>

          {/* Services */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => {
              const Icon = s.icon;

              return (
                <article
                  key={s.title}
                  className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[20px] border border-[#E7E5DE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5E8D5] hover:shadow-[0_12px_32px_rgba(8,13,24,0.06)] sm:p-7"
                >
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#E0F8EC] text-[#087A46]">
                      <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                    </span>

                    <span className="text-[12px] font-medium text-[#A0A5AD]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <h3 className="font-heading text-[19px] font-semibold tracking-[-0.4px] text-[#080D18]">
                      {s.title}
                    </h3>

                    <p className="mt-2 max-w-[340px] text-[14px] leading-7 text-[#5A6473]">
                      {s.text}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#F7F6F2] px-3 py-1.5 text-[11px] font-medium text-[#5A6473]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#19D27A] transition-all duration-300 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </Section>

        {/* HOW IT WORKS */}

     <HowItWorks />

        {/* CHECKLIST */}
        <Section>
          <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <h2 className={h2}>
                The details <Em>that matter.</Em>
              </h2>
              <p className="mt-4 max-w-[400px] text-[16px] leading-7 text-[#5A6473]">
                Every website is different. What your site needs depends on its
                setup, functionality and requirements.
              </p>
            </div>

            <ul className="grid gap-x-8 gap-y-4 rounded-3xl bg-white p-7 sm:grid-cols-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#19D27A]">
                    <Check size={14} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <FAQSection />
        <CTASection />
      </div>
    </SiteLayout>
  );
}