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

const linkClass =
    'font-semibold text-[#10120F] underline decoration-[#18B96B] decoration-2 underline-offset-4';

function CookieType({
    title,
    status,
    always = false,
    children,
}: {
    title: string;
    status: string;
    always?: boolean;
    children: ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-[#E2E1D8] bg-[#FAFAF6] p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-[#10120F]">
                    {title}
                </h3>
                <span
                    className={`rounded-full px-3 py-1 text-[12px] font-semibold ${
                        always
                            ? 'bg-[#E3F4EA] text-[#16834D]'
                            : 'bg-[#ECEBE3] text-[#5B6157]'
                    }`}
                >
                    {status}
                </span>
            </div>
            <p className="mt-2 break-words text-[14.5px] leading-[26px] text-[#4A5046]">
                {children}
            </p>
        </div>
    );
}

const SECTIONS: { id: string; title: string; body: ReactNode }[] = [
    {
        id: 'what-are-cookies',
        title: 'What are cookies?',
        body: (
            <>
                <P>
                    Cookies are small text files that a website saves on your
                    device when you visit it. They help the site remember who you
                    are, keep you signed in and work properly. Similar
                    technologies, such as local storage, do the same job and are
                    covered by this policy too.
                </P>
            </>
        ),
    },
    {
        id: 'how-we-use-cookies',
        title: 'How we use cookies',
        body: (
            <>
                <P>SiteCare uses cookies to:</P>
                <List
                    items={[
                        'Keep you signed in to your account and protect it from misuse.',
                        'Remember your choices and settings.',
                        'Understand how the site is used so we can improve it.',
                        'Keep our forms and sign-in options secure.',
                    ]}
                />
            </>
        ),
    },
    {
        id: 'types-of-cookies',
        title: 'Types of cookies we use',
        body: (
            <div className="grid max-w-[700px] gap-3">
                <CookieType
                    title="Essential cookies"
                    status="Always active"
                    always
                >
                    Needed for SiteCare to work. They keep you logged in, protect
                    forms against cross-site attacks and support features such
                    as “Remember me”. The service cannot work properly without
                    them, so they cannot be switched off.
                </CookieType>

                <CookieType title="Preference cookies" status="Optional">
                    Remember choices you make, so you do not have to set them
                    again on your next visit.
                </CookieType>

                <CookieType title="Analytics cookies" status="Optional">
                    Help us understand which pages are visited and how people use
                    SiteCare. We use this information in aggregate to improve the
                    service.
                </CookieType>

                <CookieType title="Third-party cookies" status="Optional">
                    Set by services we work with, for example when you choose to
                    sign in with Google. These providers have their own cookie
                    and privacy policies.
                </CookieType>
            </div>
        ),
    },
    {
        id: 'third-party-cookies',
        title: 'Third-party services',
        body: (
            <>
                <P>
                    Some features rely on services run by other companies, such
                    as Google sign-in and our payment provider. When you use
                    them, those companies may set their own cookies. We do not
                    control these cookies, so please read the policies of those
                    providers to learn how they use them.
                </P>
            </>
        ),
    },
    {
        id: 'managing-cookies',
        title: 'Managing your cookie choices',
        body: (
            <>
                <P>
                    You can control or delete cookies through your browser
                    settings. Most browsers let you:
                </P>
                <List
                    items={[
                        'See which cookies are stored and delete them one by one or all at once.',
                        'Block cookies from specific websites or from all websites.',
                        'Choose to be warned before a cookie is saved.',
                    ]}
                />
                <div className="mt-3" />
                <P>
                    If you block essential cookies, you may not be able to sign
                    in, and parts of SiteCare may stop working. Deleting cookies
                    will sign you out and clear any saved preferences.
                </P>
            </>
        ),
    },
    {
        id: 'your-data',
        title: 'Cookies and your personal data',
        body: (
            <>
                <P>
                    Some cookies can collect personal information. How we handle
                    that information is explained in our{' '}
                    <Link href="/privacy-policy" className={linkClass}>
                        Privacy Policy
                    </Link>
                    .
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
                    We may update this Cookie Policy from time to time, for
                    example when we add a new feature or service. When we make
                    important changes, we will update the date at the top of this
                    page.
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
                    If you have questions about how we use cookies, email us at{' '}
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

export default function CookiePolicy() {
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
        <SiteLayout title="Cookie Policy">
            <Head title="Cookie Policy | SiteCare" />

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
                            Cookie Policy
                        </h1>

                        <p className="relative mx-auto mt-5 max-w-[550px] text-[15px] font-medium leading-relaxed tracking-[-0.02em] text-[#3b4252] sm:mt-6 sm:text-lg">
                            What cookies are, how SiteCare uses them and how you
                            can control them.
                        </p>
                    </section>

                    {/* CONTENT */}
                    <div className="mt-2 grid grid-cols-[minmax(0,1fr)] gap-6 sm:mt-6 sm:gap-8 px-5 mt-10 lg:grid-cols-[272px_minmax(0,1fr)] lg:items-start lg:gap-10">
                        {/* TABLE OF CONTENTS */}
                        <aside className="min-w-0 lg:sticky lg:top-28">
                            <p className="mb-3 px-1 text-[13px] font-semibold text-[#10120F]">
                                On this page
                            </p>

                            <nav
                                aria-label="Cookie policy sections"
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
