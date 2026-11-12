import { Head } from '@inertiajs/react';
import { ArrowUpRight, ChevronDown, Mail, TriangleAlert } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import SiteLayout from '@/layouts/site-layout';

const SUPPORT_EMAIL = 'support@sitecare.com';
const WORKING_DAYS = 'Monday to Friday';
const REPLY_TIME = 'one working day';

const TEAM = [
    { name: 'Aarav', bg: 'bg-[#DDECE1]', text: 'text-[#245B3D]' },
    { name: 'Meera', bg: 'bg-[#E7E4D8]', text: 'text-[#665B36]' },
    { name: 'Rohan', bg: 'bg-[#DCE5ED]', text: 'text-[#36516B]' },
];

const STEPS = [
    {
        title: 'A person reads it',
        body: 'Someone from the team reviews your message and understands what you need.',
    },
    {
        title: 'We reply by email',
        body: `Usually within ${REPLY_TIME}, from ${SUPPORT_EMAIL}.`,
    },
    {
        title: 'We figure out the next step',
        body: "If it's easier to talk it through, we'll suggest a time.",
    },
];



export default function Contact() {
    const display = 'font-sans';
    const bodyFont = 'font-sans';

    return (
        <SiteLayout title="Contact Us">
            <Head title="Contact Us">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap"
                />
            </Head>

            <section
                className={`${bodyFont} bg-[#F7F6F2] px-0 pb-20 pt-0 sm:px-8 sm:pt-0`}>
                <div className="mx-auto max-w-[1320px]">
                    {/* HERO */}
                    <header className="relative isolate flex  flex-col px-5 items-center overflow-hidden pt-12 pb-12 text-center sm:pt-30">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[420px] w-[min(820px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19D27A33] opacity-100 blur-[120px]"
                        />

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

                        <h1
                            className={`${display} mx-auto mt-8 max-w-[950px] text-[44px] font-semibold leading-[0.98] tracking-[-2.8px] text-[#080D18] sm:text-[64px] md:text-[76px] lg:text-[80px]`}
                        >
                            Something up with your website?
                        </h1>

                        <p className="mt-7 max-w-[540px] text-[15px] leading-[1.9] text-[#354052] sm:text-[17px]">
                            Broken plugin, slow pages, a warning from Google, or
                            just a question before you sign up. Tell us what's
                            going on. We'll take it from there.
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <a
                                href="/register"
                                className="group inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-[#080D18] px-7 text-[13px] font-semibold text-white shadow-[0_5px_12px_rgba(8,13,24,0.12)] transition hover:bg-[#19D27A] hover:text-[#080D18]"
                            >
                                Start 14-day free trial
                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                            <a
                                href="#sample-report"
                                className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full border border-[#E2E5E0] bg-white px-7 text-[13px] font-medium text-[#080D18] shadow-[0_2px_5px_rgba(8,13,24,0.06)] transition hover:border-[#19D27A]"
                            >
                                <span className="text-[15px] text-[#0B9B57]">
                                    ▤
                                </span>
                                See a sample report
                            </a>
                        </div>

                        <p className="mt-5 text-[12px] text-[#697385]">
                            No credit card · Cancel anytime · Pay in ₹ with UPI
                        </p>
                    </header>

                    {/* MAIN CONTENT
                        Desktop: info column on the LEFT, form on the RIGHT.
                        Mobile: form first (DOM order), info below. */}
                    <div className="mt-10 grid gap-8 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
                        {/* CONTACT FORM (right on desktop) */}
                        <ContactForm
                            supportEmail={SUPPORT_EMAIL}
                            replyTime={REPLY_TIME}
                            className="lg:order-2"
                        />

                        {/* INFO COLUMN (left on desktop) */}
                        <aside className="space-y-8 lg:order-1 lg:pt-1">
                            {/* SUPPORT NOTE */}
                            <div className="relative overflow-hidden rounded-[16px] border border-[#DCE5DA] bg-[#EAF1E8] p-6 sm:p-7">
                                <div className="mb-6 flex items-center gap-2">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#0B9B57]">
                                        <Mail size={15} />
                                    </span>

                                    <span className="font-mono text-[10px] font-medium uppercase tracking-[1.3px] text-[#54705B]">
                                        A note from our team
                                    </span>
                                </div>

                                <p
                                    className={`${display} text-[25px] font-semibold leading-[1.2] tracking-[-0.6px] text-[#12241B] sm:text-[29px]`}
                                >
                                    No question is too small.
                                </p>

                                <p className="mt-4 text-[13px] leading-7 text-[#5B6E60]">
                                    Plugin broke after an update? Not sure what
                                    a staging site is? Just write it down in
                                    your own words. We'll figure it out
                                    together.
                                </p>

                                <div className="mt-6 flex items-center gap-3 border-t border-[#D1DED0] pt-5">
                                    <div className="flex -space-x-2">
                                        {TEAM.map((member) => (
                                            <span
                                                key={member.name}
                                                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#EAF1E8] text-[11px] font-semibold ${member.bg} ${member.text}`}
                                            >
                                                {member.name[0]}
                                            </span>
                                        ))}
                                    </div>

                                    <span className="text-[11px] text-[#647568]">
                                        Team SiteCare
                                    </span>
                                </div>
                            </div>

                            {/* WHAT HAPPENS NEXT */}
                            <div className="px-1">
                                <div className="mb-5 flex items-center justify-between">
                                    <h3
                                        className={`${display} text-[20px] font-semibold tracking-[-0.5px] text-[#12241B]`}
                                    >
                                        What happens next
                                    </h3>

                                    <span className="font-mono text-[10px] text-[#8B968D]">
                                        01 — 03
                                    </span>
                                </div>

                                <ol className="space-y-5">
                                    {STEPS.map((step, index) => (
                                        <li
                                            key={step.title}
                                            className="flex gap-3.5"
                                        >
                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D5DDD3] bg-white font-mono text-[10px] text-[#516255]">
                                                0{index + 1}
                                            </span>

                                            <div>
                                                <p className="text-[13px] font-semibold text-[#12241B]">
                                                    {step.title}
                                                </p>

                                                <p className="mt-1 text-[12px] leading-6 text-[#718075]">
                                                    {step.body}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* URGENT */}
                            <div className="flex gap-3 rounded-xl border border-[#E8D9C6] bg-[#FBF3E8] p-4">
                                <TriangleAlert
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#A46524]"
                                />

                                <p className="text-[12px] leading-6 text-[#76502A]">
                                    <span className="font-semibold">
                                        Website down right now?
                                    </span>{' '}
                                    Choose "My site is down" and include your
                                    web address so we understand the issue.
                                </p>
                            </div>

                            {/* EMAIL */}
                            <a
                                href={`mailto:${SUPPORT_EMAIL}`}
                                className="group flex items-center gap-3 rounded-xl border border-[#E0E4DD] bg-white p-4 transition hover:border-[#B9C7B9]"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF4EC] text-[#0B9B57]">
                                    <Mail size={17} />
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-[11px] text-[#849087]">
                                        Prefer email?
                                    </span>

                                    <span className="mt-1 block break-all text-[13px] font-semibold text-[#12241B]">
                                        {SUPPORT_EMAIL}
                                    </span>
                                </span>

                                <ArrowUpRight
                                    size={16}
                                    className="shrink-0 text-[#879187] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#12241B]"
                                />
                            </a>
                        </aside>
                    </div>

                    {/* FAQ */}
              

                    {/* BOTTOM NOTE */}
                    <div className="mt-8 flex flex-col px-5 justify-between gap-2 text-[11px] text-[#879187] sm:flex-row">
                        <span>SiteCare · WordPress care, simplified.</span>

                        <span>
                            Prefer email?{' '}
                            <a
                                href={`mailto:${SUPPORT_EMAIL}`}
                                className="font-semibold text-[#12241B] underline decoration-[#19D27A] underline-offset-4"
                            >
                                {SUPPORT_EMAIL}
                            </a>
                        </span>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
