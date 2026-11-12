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

const SECTIONS: { id: string; title: string; body: ReactNode }[] = [
    {
        id: 'overview',
        title: 'Overview',
        body: (
            <>
                <P>
                    SiteCare helps WordPress professionals manage website
                    maintenance and share clear, branded monthly reports with
                    their clients. This Privacy Policy explains what personal
                    information we collect, how we use it, and the choices you
                    have.
                </P>
                <div className="mt-3" />
                <P>
                    By using SiteCare, you agree to the practices described in
                    this policy. If you do not agree, please do not use the
                    service.
                </P>
            </>
        ),
    },
    {
        id: 'information-we-collect',
        title: 'Information we collect',
        body: (
            <>
                <P>We collect the following types of information:</P>
                <List
                    items={[
                        <>
                            <strong className="font-semibold text-[#10120F]">
                                Account information:
                            </strong>{' '}
                            your name, email address and password, or the
                            details provided by Google or a passkey if you sign
                            in that way.
                        </>,
                        <>
                            <strong className="font-semibold text-[#10120F]">
                                Website and maintenance information:
                            </strong>{' '}
                            the addresses of the WordPress websites you add and
                            the maintenance activity used to build your reports.
                        </>,
                        <>
                            <strong className="font-semibold text-[#10120F]">
                                Client contact details:
                            </strong>{' '}
                            names, email addresses or phone numbers you enter so
                            reports can be delivered to your clients.
                        </>,
                        <>
                            <strong className="font-semibold text-[#10120F]">
                                Billing information:
                            </strong>{' '}
                            subscription and payment details, which are handled
                            by our payment provider.
                        </>,
                        <>
                            <strong className="font-semibold text-[#10120F]">
                                Usage and device information:
                            </strong>{' '}
                            pages visited, features used, browser type and
                            approximate location, collected automatically.
                        </>,
                        <>
                            <strong className="font-semibold text-[#10120F]">
                                Messages to us:
                            </strong>{' '}
                            anything you send when you contact support,
                            including the website address you ask us about.
                        </>,
                    ]}
                />
            </>
        ),
    },
    {
        id: 'how-we-use-information',
        title: 'How we use your information',
        body: (
            <>
                <P>We use your information to:</P>
                <List
                    items={[
                        'Create and manage your account and provide the SiteCare service.',
                        'Prepare and deliver branded monthly reports to you and your clients.',
                        'Process payments and manage your free trial or subscription.',
                        'Respond to support requests and help when a website has an issue.',
                        'Keep the service secure, prevent misuse and fix problems.',
                        'Understand how SiteCare is used so we can improve it.',
                        'Send important service messages, such as account and billing notices.',
                    ]}
                />
            </>
        ),
    },
    {
        id: 'report-delivery',
        title: 'Report delivery and your clients’ data',
        body: (
            <>
                <P>
                    SiteCare can deliver reports by email and through WhatsApp.
                    When you add a client’s contact details, you are responsible
                    for having the right to share them with us and to contact
                    that person.
                </P>
                <div className="mt-3" />
                <P>
                    We use your clients’ details only to deliver the reports you
                    ask us to send. Messages sent through WhatsApp are also
                    subject to WhatsApp’s own terms and privacy policy.
                </P>
            </>
        ),
    },
    {
        id: 'sharing',
        title: 'How we share information',
        body: (
            <>
                <P>
                    We do not sell your personal information. We share it only
                    in these situations:
                </P>
                <List
                    items={[
                        'With service providers that help us run SiteCare, such as hosting, payments, email, messaging and analytics, who may only use it to provide their services to us.',
                        'When required by law, or to respond to valid legal requests.',
                        'To protect the rights, safety and security of SiteCare, our users or others.',
                        'As part of a merger, acquisition or sale of the business, in which case we will let you know.',
                    ]}
                />
            </>
        ),
    },
    {
        id: 'cookies',
        title: 'Cookies and similar technologies',
        body: (
            <>
                <P>
                    We use cookies and similar technologies to keep you signed
                    in, remember your preferences, protect against fraud and
                    understand how the site is used. You can control cookies
                    through your browser settings, but some parts of SiteCare may
                    not work properly if you block them.
                </P>
            </>
        ),
    },
    {
        id: 'retention',
        title: 'How long we keep information',
        body: (
            <>
                <P>
                    We keep your information for as long as your account is
                    active or as needed to provide the service. If you close
                    your account, we delete or anonymize your personal
                    information within a reasonable period, unless we need to
                    keep some of it to meet legal, tax or security obligations.
                </P>
            </>
        ),
    },
    {
        id: 'security',
        title: 'Security',
        body: (
            <>
                <P>
                    We use reasonable technical and organizational measures to
                    protect your information, including encrypted connections
                    and options such as passkeys for signing in. No system is
                    completely secure, so we cannot guarantee absolute security.
                    Please use a strong, unique password and keep your login
                    details private.
                </P>
            </>
        ),
    },
    {
        id: 'your-rights',
        title: 'Your rights and choices',
        body: (
            <>
                <P>
                    Depending on where you live, you may have the right to:
                </P>
                <List
                    items={[
                        'Access the personal information we hold about you.',
                        'Correct information that is inaccurate or incomplete.',
                        'Delete your information or close your account.',
                        'Object to or limit certain uses of your information.',
                        'Receive a copy of your information in a portable format.',
                        'Withdraw consent where we rely on it.',
                    ]}
                />
                <div className="mt-3" />
                <P>
                    To make a request, contact us using the details below. We
                    may need to verify your identity before we respond.
                </P>
            </>
        ),
    },
    {
        id: 'children',
        title: 'Children’s privacy',
        body: (
            <>
                <P>
                    SiteCare is built for professionals and businesses and is
                    not intended for children. We do not knowingly collect
                    personal information from anyone under 18. If you believe a
                    child has given us information, please contact us and we
                    will delete it.
                </P>
            </>
        ),
    },
    {
        id: 'changes',
        title: 'Changes to this policy',
        body: (
            <>
                <P>
                    We may update this policy from time to time. When we make
                    important changes, we will update the date at the top of this
                    page and, where appropriate, let you know by email or inside
                    your account.
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
                    If you have questions about this policy or how your
                    information is handled, email us at{' '}
                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="font-semibold text-[#10120F] underline decoration-[#18B96B] decoration-2 underline-offset-4"
                    >
                        {CONTACT_EMAIL}
                    </a>{' '}
                    or use our{' '}
                    <Link
                        href="/contact"
                        className="font-semibold text-[#10120F] underline decoration-[#18B96B] decoration-2 underline-offset-4"
                    >
                        Contact page
                    </Link>
                    .
                </P>
            </>
        ),
    },
];

export default function PrivacyPolicy() {
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
        <SiteLayout title="Privacy Policy">
            <Head title="Privacy Policy | SiteCare" />

            <main className="bg-[#F0EFE9] px-0 pb-14 pt-0 font-sans sm:px-8 sm:pb-20 sm:pt-0">
                <div className="mx-auto w-full max-w-[1320px]">
                    {/* HERO */}
                    <section className="relative isolate flex flex-col items-center overflow-hidden bg-[#F0EFE9] px-0 py-14 text-center sm:px-5 sm:py-20 md:py-24">
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
                            Privacy Policy
                        </h1>

                        <p className="relative mx-auto mt-5 max-w-[550px] text-[15px] font-medium leading-relaxed tracking-[-0.02em] text-[#3b4252] sm:mt-6 sm:text-lg">
                            How SiteCare collects, uses and protects your
                            information, explained in plain language.
                        </p>
                    </section>

                    {/* CONTENT */}
                    <div className="mt-2 grid grid-cols-[minmax(0,1fr)] gap-6 px-5 mt-10 sm:mt-0 sm:gap-8 lg:grid-cols-[272px_minmax(0,1fr)] lg:items-start lg:gap-10">
                        {/* TABLE OF CONTENTS */}
                        <aside className="min-w-0 lg:sticky lg:top-28">
                            <p className="mb-3 px-1 text-[13px] font-semibold text-[#10120F]">
                                On this page
                            </p>

                            <nav
                                aria-label="Privacy policy sections"
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
