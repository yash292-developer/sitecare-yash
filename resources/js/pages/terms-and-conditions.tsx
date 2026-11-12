import CTASection from '@/components/CTASection';
import { Head, Link } from '@inertiajs/react';
import {
    useEffect,
    useState,
    type MouseEvent as ReactMouseEvent,
    type ReactNode,
} from 'react';
import SiteLayout from '@/layouts/site-layout';

const LAST_UPDATED = 'November 4, 2026';
const CONTACT_EMAIL = 'support@sitecare.com';
// Replace with your country or state, for example "India"
const GOVERNING_LAW = '[your country or state]';

function P({ children }: { children: ReactNode }) {
    return (
        <p className="max-w-[700px] break-words text-[15px] leading-7 text-[#4A5046]">
            {children}
        </p>
    );
}

function List({ items }: { items: ReactNode[] }) {
    return (
        <ul className="mt-3 max-w-[700px] space-y-2.5">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="flex items-start gap-3 text-[15px] leading-7 text-[#4A5046]"
                >
                    <span
                        aria-hidden="true"
                        className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#18B96B]"
                    />
                    <span className="min-w-0 break-words">{item}</span>
                </li>
            ))}
        </ul>
    );
}

const Strong = ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold text-[#10120F]">{children}</strong>
);

const linkClass =
    'font-semibold text-[#10120F] underline decoration-[#18B96B] decoration-2 underline-offset-4';

const SECTIONS: { id: string; title: string; body: ReactNode }[] = [
    {
        id: 'agreement',
        title: 'Agreement to these terms',
        body: (
            <>
                <P>
                    These Terms and Conditions (“Terms”) are a legal agreement
                    between you and SiteCare. By creating an account or using
                    SiteCare, you confirm that you have read, understood and
                    agree to these Terms and our{' '}
                    <Link href="/privacy-policy" className={linkClass}>
                        Privacy Policy
                    </Link>
                    .
                </P>
                <div className="mt-3" />
                <P>
                    If you use SiteCare on behalf of a business, you confirm
                    that you have the authority to accept these Terms for that
                    business. If you do not agree, please do not use the
                    service.
                </P>
            </>
        ),
    },
    {
        id: 'the-service',
        title: 'The service',
        body: (
            <>
                <P>
                    SiteCare helps WordPress professionals manage website
                    maintenance and share clear, branded monthly reports with
                    their clients. Reports can be delivered by email and through
                    WhatsApp.
                </P>
                <div className="mt-3" />
                <P>
                    SiteCare is built for WordPress websites. You may use it
                    only for websites you own or are authorized to manage.
                </P>
            </>
        ),
    },
    {
        id: 'your-account',
        title: 'Your account',
        body: (
            <>
                <P>To use SiteCare, you agree to:</P>
                <List
                    items={[
                        'Provide accurate and up-to-date information when you sign up.',
                        'Keep your login details, including any passkey, private and secure.',
                        'Be responsible for all activity that happens under your account.',
                        'Tell us right away if you think your account has been accessed without your permission.',
                    ]}
                />
                <div className="mt-3" />
                <P>
                    You must be at least 18 years old, or the age of majority
                    where you live, to create an account.
                </P>
            </>
        ),
    },
    {
        id: 'trial-and-billing',
        title: 'Free trial, billing and cancellation',
        body: (
            <>
                <List
                    items={[
                        <>
                            <Strong>Free trial:</Strong> SiteCare offers a 14-day
                            free trial. No credit card is required to start it.
                        </>,
                        <>
                            <Strong>Paid plans:</Strong> if you continue after
                            the trial, you agree to pay the fees shown for your
                            plan. Fees are billed in advance for each billing
                            period.
                        </>,
                        <>
                            <Strong>Cancellation:</Strong> you can cancel
                            anytime. Check your account billing details for the
                            subscription terms that apply to you.
                        </>,
                        <>
                            <Strong>Changes to pricing:</Strong> we may change
                            our prices. We will give you reasonable notice
                            before a change applies to your plan.
                        </>,
                        <>
                            <Strong>Taxes:</Strong> fees may not include
                            applicable taxes, which you are responsible for
                            unless stated otherwise.
                        </>,
                    ]}
                />
            </>
        ),
    },
    {
        id: 'acceptable-use',
        title: 'Acceptable use',
        body: (
            <>
                <P>You agree not to:</P>
                <List
                    items={[
                        'Use SiteCare for anything unlawful, harmful or misleading.',
                        'Add websites you do not own or have permission to manage.',
                        'Send reports or messages to people who have not agreed to receive them, or use the service to spam.',
                        'Try to access other users’ accounts or data, or interfere with the security or operation of the service.',
                        'Copy, resell, reverse engineer or build a competing service from SiteCare, except where the law allows.',
                        'Upload malicious code or overload the service with automated requests.',
                    ]}
                />
            </>
        ),
    },
    {
        id: 'your-content',
        title: 'Your content and client data',
        body: (
            <>
                <P>
                    You keep ownership of the information you add to SiteCare,
                    including your website details, your branding and your
                    clients’ contact details. You give us permission to use it
                    only to run the service and deliver the reports you ask us to
                    send.
                </P>
                <div className="mt-3" />
                <P>
                    You are responsible for having the right to share your
                    clients’ information with us and to contact them, including
                    through WhatsApp.
                </P>
            </>
        ),
    },
    {
        id: 'third-party-services',
        title: 'Third-party services',
        body: (
            <>
                <P>
                    SiteCare works with services we do not control, such as
                    WordPress, WhatsApp, Google sign-in and payment providers.
                    Your use of those services is subject to their own terms, and
                    we are not responsible for their availability or actions.
                </P>
            </>
        ),
    },
    {
        id: 'intellectual-property',
        title: 'Intellectual property',
        body: (
            <>
                <P>
                    SiteCare, including its software, design, logo and
                    documentation, belongs to us and is protected by
                    intellectual property laws. These Terms give you a limited,
                    non-exclusive, non-transferable right to use the service
                    while your account is active. They do not transfer any
                    ownership to you.
                </P>
            </>
        ),
    },
    {
        id: 'availability-and-support',
        title: 'Availability and support',
        body: (
            <>
                <P>
                    We work to keep SiteCare reliable, but we cannot promise it
                    will always be available or error-free. We may carry out
                    maintenance or updates that cause short interruptions.
                </P>
                <div className="mt-3" />
                <P>
                    You can reach our support team through the{' '}
                    <Link href="/contact" className={linkClass}>
                        Contact page
                    </Link>
                    . If a website is down, include its address and what
                    happened so we can help you work out the next step.
                </P>
            </>
        ),
    },
    {
        id: 'disclaimers',
        title: 'Disclaimers',
        body: (
            <>
                <P>
                    SiteCare is provided “as is” and “as available”. To the
                    fullest extent allowed by law, we do not make promises that
                    the service will meet every need, be uninterrupted, or be
                    free of errors. Reports are intended to keep clients
                    informed and are not a guarantee about the security,
                    performance or uptime of any website.
                </P>
            </>
        ),
    },
    {
        id: 'liability',
        title: 'Limitation of liability',
        body: (
            <>
                <P>
                    To the fullest extent allowed by law, SiteCare will not be
                    liable for any indirect, incidental, special or
                    consequential damages, or for loss of profits, revenue, data
                    or business, arising from your use of the service. Our total
                    liability for any claim relating to the service is limited to
                    the amount you paid us in the 12 months before the claim.
                </P>
                <div className="mt-3" />
                <P>
                    Nothing in these Terms limits liability that cannot be
                    limited by law.
                </P>
            </>
        ),
    },
    {
        id: 'termination',
        title: 'Suspension and termination',
        body: (
            <>
                <P>
                    You can stop using SiteCare and close your account at any
                    time. We may suspend or end your access if you break these
                    Terms, put the service or other users at risk, or fail to
                    pay fees when due. When an account is closed, your right to
                    use the service ends, and we handle your data as described
                    in our Privacy Policy.
                </P>
            </>
        ),
    },
    {
        id: 'changes',
        title: 'Changes to these terms',
        body: (
            <>
                <P>
                    We may update these Terms from time to time. When we make
                    important changes, we will update the date at the top of this
                    page and, where appropriate, let you know by email or inside
                    your account. If you keep using SiteCare after changes take
                    effect, you accept the updated Terms.
                </P>
            </>
        ),
    },
    {
        id: 'governing-law',
        title: 'Governing law',
        body: (
            <>
                <P>
                    These Terms are governed by the laws of {GOVERNING_LAW}. Any
                    disputes will be handled by the courts of that location,
                    unless the law where you live gives you the right to bring a
                    claim elsewhere.
                </P>
            </>
        ),
    },
    {
        id: 'contact',
        title: 'Contact us',
        body: (
            <>
                <P>
                    If you have questions about these Terms, email us at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                        {CONTACT_EMAIL}
                    </a>{' '}
                    or use our{' '}
                    <Link href="/contact" className={linkClass}>
                        Contact page
                    </Link>
                    .
                </P>
            </>
        ),
    },
];

export default function TermsAndConditions() {
    const [activeId, setActiveId] = useState(SECTIONS[0].id);

    // Highlight the section currently in view
    useEffect(() => {
        const elements = SECTIONS.map((section) =>
            document.getElementById(section.id),
        ).filter((el): el is HTMLElement => el !== null);

        if (elements.length === 0 || !('IntersectionObserver' in window)) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top -
                            b.boundingClientRect.top,
                    );

                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const goTo = (id: string) => (event: ReactMouseEvent) => {
        event.preventDefault();

        const el = document.getElementById(id);

        if (!el) return;

        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        el.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'start',
        });

        setActiveId(id);
        window.history.replaceState(null, '', `#${id}`);
    };

    return (
        <SiteLayout title="Terms and Conditions">
            <Head title="Terms and Conditions | SiteCare" />

            <main className="bg-[#F0EFE9] px-0 pb-14 pt-00 font-sans sm:px-8 sm:pb-20 sm:pt-0">
                <div className="mx-auto w-full max-w-[1320px]">
                    {/* HERO */}
                    <section className="relative isolate flex flex-col items-center overflow-hidden bg-[#F0EFE9] px-5 py-14 text-center sm:px-5 sm:py-20 md:py-24">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-[45%] -z-10 h-[360px] w-[min(820px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18B96B26] opacity-100 blur-[120px]"
                        />

                        <span className="relative inline-flex max-w-full items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1.5 text-[11px] font-medium text-[#10120F] shadow-sm sm:gap-3 sm:text-xs">
                            <span className="shrink-0 rounded-full bg-[#18B96B] px-3 py-1 font-bold text-[#071b11]">
                                LEGAL
                            </span>
                            <span className="min-w-0 truncate pr-2">
                                Last updated {LAST_UPDATED}
                            </span>
                        </span>

                        <h1 className="relative mx-auto mt-7 max-w-5xl text-[clamp(36px,8.5vw,80px)] font-bold leading-[0.98] tracking-[-0.065em] text-[#10120F] sm:text-[clamp(42px,6.2vw,80px)]">
                            Terms &amp; Conditions
                        </h1>

                        <p className="relative mx-auto mt-5 max-w-[550px] text-[15px] font-medium leading-relaxed tracking-[-0.02em] text-[#3b4252] sm:mt-6 sm:text-lg">
                            The rules for using SiteCare, explained in plain
                            language.
                        </p>
                    </section>

                    {/* CONTENT */}
                    <div className="mt-2 grid grid-cols-[minmax(0,1fr)] gap-6 px-5 sm:mt-0 sm:gap-8 lg:grid-cols-[272px_minmax(0,1fr)] lg:items-start lg:gap-10">
                        {/* TABLE OF CONTENTS */}
                        <aside className="min-w-0 lg:sticky lg:top-28">
                            <p className="mb-3 px-1 text-[13px] font-semibold text-[#10120F]">
                                On this page
                            </p>

                            <nav
                                aria-label="Terms and conditions sections"
                                className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 lg:flex-col lg:flex-nowrap lg:gap-0.5 lg:rounded-[24px] lg:border lg:border-[#E2E1D8] lg:bg-white lg:p-2 lg:shadow-[0_1px_2px_rgba(16,18,15,0.04)]"
                            >
                                {SECTIONS.map((section, index) => {
                                    const active = activeId === section.id;

                                    return (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            onClick={goTo(section.id)}
                                            aria-current={
                                                active ? 'true' : undefined
                                            }
                                            className={`flex shrink-0 items-center gap-3 rounded-full border px-4 py-2 text-[13.5px] font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-[#18B96B] lg:rounded-xl lg:border-transparent lg:py-2.5 ${
                                                active
                                                    ? 'border-[#10120F] bg-[#10120F] text-white lg:border-transparent'
                                                    : 'border-[#E2E1D8] bg-white text-[#2B2F27] hover:border-[#18B96B]/50 lg:bg-transparent lg:hover:bg-[#F6F5EF]'
                                            }`}
                                        >
                                            <span
                                                className={`hidden w-5 text-[12px] tabular-nums lg:block ${
                                                    active
                                                        ? 'text-[#18B96B]'
                                                        : 'text-[#85877E]'
                                                }`}
                                            >
                                                {index + 1}
                                            </span>
                                            <span className="whitespace-nowrap lg:whitespace-normal">
                                                {section.title}
                                            </span>
                                        </a>
                                    );
                                })}
                            </nav>
                        </aside>

                        {/* POLICY */}
                        <div className="min-w-0">

                            {/* Full policy */}
                            <div className="rounded-[24px] border border-[#E2E1D8] bg-white px-5 py-3 shadow-[0_1px_2px_rgba(16,18,15,0.04),0_20px_50px_-30px_rgba(16,18,15,0.15)] sm:px-9 sm:py-5">
                                {SECTIONS.map((section, index) => (
                                    <section
                                        key={section.id}
                                        id={section.id}
                                        className="scroll-mt-28 border-b border-[#ECEBE3] py-7 last:border-b-0 sm:py-9"
                                    >
                                        <h2 className="mb-4 flex items-baseline gap-3 text-[21px] font-bold leading-tight tracking-[-0.03em] text-[#10120F] sm:text-[24px]">
                                            <span className="text-[14px] font-semibold tabular-nums text-[#16834D]">
                                                {index + 1}
                                            </span>
                                            {section.title}
                                        </h2>
                                        {section.body}
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM CTA */}
                    <div className="px-5">
                        <CTASection />
                    </div>
                </div>
            </main>
        </SiteLayout>
    );
}
