import { Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import type { ComponentType } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import {
    Activity,
    ArrowRight,
    ArrowUpRight,
    ChevronDown,
    DatabaseBackup,
    FileText,
    LayoutDashboard,
    MessageCircle,
    ShieldCheck,
    X,
} from 'lucide-react';

type NavItem = {
    label: string;
    href: string;
    menu?: boolean;
};

const NAV: NavItem[] = [
    { label: 'Product', href: '/#product', menu: true },
    { label: 'About', href: '/about' },
    { label: 'Sample report', href: '/sample-report' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
];

type ProductItem = {
    title: string;
    text: string;
    href: string;
    icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

// Change the hrefs to match the sections / pages you create
const PRODUCT_ITEMS: ProductItem[] = [
    {
        title: 'Site monitoring',
        text: 'Uptime checks and instant alerts when something breaks.',
        href: '/#monitoring',
        icon: Activity,
    },
    {
        title: 'Updates and backups',
        text: 'Safe plugin and theme updates, with a restore point.',
        href: '/#updates',
        icon: DatabaseBackup,
    },
    {
        title: 'Security checks',
        text: 'Malware and vulnerability scans across every site.',
        href: '/#security',
        icon: ShieldCheck,
    },
    {
        title: 'Branded reports',
        text: 'Monthly reports in plain language, with your logo.',
        href: '/#reports',
        icon: FileText,
    },
    {
        title: 'WhatsApp delivery',
        text: 'Clients get their report where they already chat.',
        href: '/#whatsapp',
        icon: MessageCircle,
    },
    {
        title: 'All sites, one place',
        text: 'Manage every WordPress site and client in one dashboard.',
        href: '/#dashboard',
        icon: LayoutDashboard,
    },
];

const focusRing =
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

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
                    id="hdr-g"
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
                fill="url(#hdr-g)"
            />

            <path
                d="m40.613 25.049 1.036-5.26H24.528c-3.868.505-4.846 4.054-5.13 5.062-.284 1.008-.237 1.831-.126 2.76.209 1.754 1.686 3.867 2.706 3.943h17.266v-2.442c-.027-1.729-.508-2.245-2.15-2.403H25.706c-.502-.486-.502-.865 0-1.343l14.907-.318Z"
                fill="url(#hdr-g)"
            />
        </svg>
    );
}

/* ------------------------------------------------------------------ */
/* Mini report preview shown inside the mega menu's dark card         */
/* ------------------------------------------------------------------ */
function ReportPreview() {
    const rows = [
        { label: 'Uptime', value: '99.98%', width: 'w-[96%]' },
        { label: 'Updates done', value: '12', width: 'w-[78%]' },
        { label: 'Threats found', value: '0', width: 'w-[12%]' },
    ];

    return (
        <div className="rounded-2xl bg-white p-3.5 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#10120F]">
                    mysite.com · October
                </span>
                <span className="rounded-full bg-[#DDF4E5] px-2 py-0.5 text-[10px] font-semibold text-[#087A48]">
                    All good
                </span>
            </div>

            <div className="mt-3 space-y-2.5">
                {rows.map((row) => (
                    <div key={row.label}>
                        <div className="flex items-center justify-between text-[10px] text-[#5B6157]">
                            <span>{row.label}</span>
                            <span className="font-semibold text-[#10120F]">
                                {row.value}
                            </span>
                        </div>
                        <div className="mt-1 h-1.5 rounded-full bg-[#EEF0EA]">
                            <div
                                className={`h-full rounded-full bg-[#19D27A] ${row.width}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

type Props = {
    brand?: string;
    cta?: string;
};

export default function SiteHeader({
    brand = 'Sitecare',
    cta = 'Start free',
}: Props) {
    const { url } = usePage();
    const currentPath = url.split('?')[0].split('#')[0];

    const [menuOpen, setMenuOpen] = useState(false); // mobile menu
    const [productOpenMobile, setProductOpenMobile] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false); // desktop mega menu
    const [scrolled, setScrolled] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // LOCK BACKGROUND SCROLL WHEN MOBILE MENU IS OPEN
    useEffect(() => {
        if (!menuOpen) return;

        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;

        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = 'hidden';

        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = originalPaddingRight;
        };
    }, [menuOpen]);

    // ESCAPE CLOSES BOTH MENUS
    useEffect(() => {
        if (!menuOpen && !megaOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
                setMegaOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [menuOpen, megaOpen]);

    // CLICK OUTSIDE CLOSES THE MEGA MENU
    useEffect(() => {
        if (!megaOpen) return;

        const handleClick = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setMegaOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [megaOpen]);

    // CLOSE MOBILE MENU ON DESKTOP
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
        setProductOpenMobile(false);
    };
    const closeMega = () => setMegaOpen(false);

    // pill = floating rounded bar (after scroll, or while a menu is open)
    const pill = scrolled || megaOpen || menuOpen;

    const isActive = (item: NavItem) =>
        !item.menu && currentPath === item.href;

    return (
        <>
            {/* MOBILE: BACKGROUND BLUR OVERLAY */}
            <div
                aria-hidden="true"
                onClick={closeMenu}
                className={`fixed inset-0 z-40 backdrop-blur-[6px] transition-all duration-300 nav:hidden ${
                    menuOpen
                        ? 'visible pointer-events-auto bg-[#F5F5F3]/75 opacity-100'
                        : 'invisible pointer-events-none bg-[#F5F5F3]/0 opacity-0'
                }`}
            />

            {/* DESKTOP: SOFT DIM BEHIND THE MEGA MENU (doesn't block the mouse) */}
            <div
                aria-hidden="true"
                className={`pointer-events-none fixed inset-0 z-40 hidden bg-[#10120F]/[0.08] backdrop-blur-[2px] transition-opacity duration-200 nav:block ${
                    megaOpen ? 'opacity-100' : 'opacity-0'
                }`}
            />

            {/* HEADER */}
            <header
                className={`sticky z-50 w-full transition-[background-color,top] duration-300 ${
                    pill ? 'top-2 bg-transparent' : 'top-[2px] bg-white/85 backdrop-blur-xl'
                }`}
            >
                <div
                    ref={containerRef}
                    onMouseLeave={closeMega}
                    className="relative mx-auto w-full max-w-[1320px]"
                >
                    {/* HEADER BAR */}
                    <div
                        className={`relative flex h-[68px] w-full items-center justify-between gap-1.5 px-2 backdrop-blur-xl transition-[border-radius,border-color,background-color,box-shadow] duration-300 min-[375px]:gap-3 min-[375px]:px-2 sm:px-4 ${
                            menuOpen
                                ? 'rounded-t-[20px] rounded-b-none border border-b-0 border-ink/10 bg-white/95 shadow-none'
                                : scrolled || megaOpen
                                  ? 'rounded-[40px] border border-ink/10 bg-white/95 shadow-[0_10px_30px_-12px_rgba(10,15,26,0.28)]'
                                  : 'rounded-none border border-transparent bg-transparent shadow-none'
                        }`}
                    >
                        {/* LOGO */}
                        <Link
                            href="/"
                            aria-label={`${brand} home`}
                            className={`flex min-w-0 shrink items-center gap-1.5 text-[17px] font-semibold tracking-tight text-ink outline-hidden min-[375px]:gap-2 min-[375px]:text-xl sm:pl-1 ${focusRing}`}
                        >
                            <LogoMark />
                            <span className="whitespace-nowrap">{brand}</span>
                        </Link>

                        {/* DESKTOP NAVIGATION */}
                        <nav
                            aria-label="Main"
                            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 nav:flex"
                        >
                            {NAV.map((item) =>
                                item.menu ? (
                                    <button
                                        key={item.label}
                                        type="button"
                                        aria-expanded={megaOpen}
                                        aria-controls="product-mega-menu"
                                        onMouseEnter={() => setMegaOpen(true)}
                                        onClick={() => setMegaOpen((o) => !o)}
                                        className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-sm outline-hidden transition-colors ${focusRing} ${
                                            megaOpen
                                                ? 'bg-ink/5 text-ink'
                                                : 'text-ink-soft hover:bg-ink/5 hover:text-ink'
                                        }`}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            className={`size-3.5 transition-transform duration-200 ${
                                                megaOpen ? 'rotate-180' : ''
                                            }`}
                                            strokeWidth={2}
                                        />
                                    </button>
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onMouseEnter={closeMega}
                                        aria-current={
                                            isActive(item) ? 'page' : undefined
                                        }
                                        className={`relative inline-flex items-center whitespace-nowrap rounded-full px-3.5 py-2 text-sm outline-hidden transition-colors ${focusRing} ${
                                            isActive(item)
                                                ? 'font-medium text-ink'
                                                : 'text-ink-soft hover:bg-ink/5 hover:text-ink'
                                        }`}
                                    >
                                        {item.label}
                                        {isActive(item) && (
                                            <span
                                                aria-hidden="true"
                                                className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-[#19D27A]"
                                            />
                                        )}
                                    </Link>
                                ),
                            )}
                        </nav>

                        {/* DESKTOP ACTIONS */}
                        <div
                            onMouseEnter={closeMega}
                            className="hidden shrink-0 items-center gap-2 nav:flex"
                        >
                            <Link
                                href="/login"
                                className={`rounded-full px-3.5 py-2 text-sm text-ink-soft outline-hidden transition-colors hover:bg-ink/5 hover:text-ink ${focusRing}`}
                            >
                                Log in
                            </Link>

                            <Link
                                href="/register"
                                className={`group inline-flex h-10 items-center justify-center gap-1 rounded-full bg-ink px-6 text-sm font-medium text-white outline-hidden transition-colors hover:bg-[#19D27A] hover:text-[#10120F] ${focusRing}`}
                            >
                                {cta}
                                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                        </div>

                        {/* MOBILE ACTIONS */}
                        <div className="flex shrink-0 items-center gap-1.5 min-[375px]:gap-2 nav:hidden">
                            <Link
                                href="/register"
                                className={`inline-flex h-9 shrink-0 items-center justify-center gap-1 rounded-full bg-ink px-3 text-[11px] font-medium text-white min-[375px]:h-10 min-[375px]:px-5 min-[375px]:text-[13px] ${focusRing}`}
                            >
                                {cta}
                                <ArrowUpRight className="size-3 min-[375px]:size-3.5" />
                            </Link>

                            {/* HAMBURGER / CLOSE */}
                            <button
                                type="button"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label={
                                    menuOpen ? 'Close menu' : 'Open menu'
                                }
                                aria-expanded={menuOpen}
                                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:bg-ink/5 min-[375px]:size-10"
                            >
                                {menuOpen ? (
                                    <X className="size-5" strokeWidth={1.6} />
                                ) : (
                                    <RiMenu3Fill className="size-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* ============================================ */}
                    {/* DESKTOP MEGA MENU                            */}
                    {/* ============================================ */}
                    <div
                        id="product-mega-menu"
                        className={`absolute inset-x-0 top-full z-50 mx-auto hidden w-[min(940px,calc(100%-16px))] pt-3 transition-all duration-200 ease-out nav:block ${
                            megaOpen
                                ? 'visible translate-y-0 opacity-100'
                                : 'pointer-events-none invisible -translate-y-1.5 opacity-0'
                        }`}
                    >
                        <div className="grid grid-cols-[1.45fr_1fr] gap-3 rounded-[24px] border border-ink/10 bg-white p-3 shadow-[0_30px_80px_-30px_rgba(10,15,26,0.35),0_2px_6px_rgba(10,15,26,0.04)]">
                            {/* LEFT: features */}
                            <div className="flex flex-col">
                                <p className="px-3.5 pb-1 pt-3 text-[13px] font-semibold text-ink">
                                    Everything you need to look after client
                                    sites
                                </p>

                                <div className="mt-1 grid grid-cols-2 gap-1">
                                    {PRODUCT_ITEMS.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <a
                                                key={item.title}
                                                href={item.href}
                                                onClick={closeMega}
                                                className={`group flex items-start gap-3 rounded-2xl p-3 outline-hidden transition-colors hover:bg-[#F5F6F2] ${focusRing}`}
                                            >
                                                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#0B9B57] transition-colors group-hover:bg-[#19D27A] group-hover:text-[#10120F]">
                                                    <Icon
                                                        className="size-[18px]"
                                                        strokeWidth={1.8}
                                                    />
                                                </span>

                                                <span className="min-w-0">
                                                    <span className="block text-[13.5px] font-semibold text-ink">
                                                        {item.title}
                                                    </span>
                                                    <span className="mt-0.5 block text-[12px] leading-5 text-ink-soft">
                                                        {item.text}
                                                    </span>
                                                </span>
                                            </a>
                                        );
                                    })}
                                </div>

                                {/* footer strip */}
                                <div className="mt-auto flex items-center justify-between rounded-2xl bg-[#F5F6F2] px-4 py-3">
                                    <span className="text-[12px] text-ink-soft">
                                        14-day free trial · No credit card
                                    </span>

                                    <Link
                                        href="/pricing"
                                        onClick={closeMega}
                                        className={`group inline-flex items-center gap-1 text-[12px] font-semibold text-ink outline-hidden ${focusRing}`}
                                    >
                                        Compare plans
                                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT: featured dark card */}
                            <div className="relative isolate flex flex-col overflow-hidden rounded-[18px] bg-[#10120F] p-5">
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 -z-10"
                                    style={{
                                        background:
                                            'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(24,185,107,0.32), transparent 70%)',
                                    }}
                                />

                                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white">
                                    <span className="size-1.5 rounded-full bg-[#19D27A]" />
                                    Now on WhatsApp
                                </span>

                                <p className="mt-4 text-[22px] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
                                    See what your clients get every month.
                                </p>

                                <div className="mt-5">
                                    <ReportPreview />
                                </div>

                                <Link
                                    href="/sample-report"
                                    onClick={closeMega}
                                    className={`group mt-5 inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-[#19D27A] px-5 text-[13px] font-semibold text-[#10120F] outline-hidden transition-colors hover:bg-white ${focusRing}`}
                                >
                                    View sample report
                                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* ============================================ */}
                    {/* MOBILE MENU                                  */}
                    {/* ============================================ */}
                    <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out nav:hidden ${
                            menuOpen
                                ? 'visible grid-rows-[1fr] opacity-100'
                                : 'invisible grid-rows-[0fr] opacity-0'
                        }`}
                    >
                        <div className="min-h-0 overflow-hidden">
                            <div className="max-h-[calc(100dvh-84px)] overflow-y-auto rounded-b-[20px] border border-t-0 border-ink/10 bg-[#F5F5F3] px-6 pb-6 pt-5 shadow-none">
                                {/* NAVIGATION */}
                                <nav
                                    aria-label="Mobile navigation"
                                    className="relative flex flex-col items-stretch gap-[21px] overflow-hidden"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute right-[-15px] top-[-5px] size-[245px] rounded-full bg-[radial-gradient(ellipse_at_center,#16D17B20_0%,#16D17B12_48%,transparent_72%)] blur-[2px]"
                                    />

                                    {NAV.map((item) =>
                                        item.menu ? (
                                            <div
                                                key={item.label}
                                                className="relative z-10"
                                            >
                                                <button
                                                    type="button"
                                                    aria-expanded={
                                                        productOpenMobile
                                                    }
                                                    onClick={() =>
                                                        setProductOpenMobile(
                                                            (o) => !o,
                                                        )
                                                    }
                                                    className={`inline-flex w-full items-center justify-between gap-2 text-left text-[19px] font-medium tracking-[-0.4px] text-[#374151] hover:text-ink ${focusRing}`}
                                                >
                                                    {item.label}
                                                    <ChevronDown
                                                        className={`size-4 transition-transform duration-200 ${
                                                            productOpenMobile
                                                                ? 'rotate-180'
                                                                : ''
                                                        }`}
                                                        strokeWidth={2}
                                                    />
                                                </button>

                                                {/* Product accordion */}
                                                <div
                                                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                                                        productOpenMobile
                                                            ? 'grid-rows-[1fr] opacity-100'
                                                            : 'grid-rows-[0fr] opacity-0'
                                                    }`}
                                                >
                                                    <div className="min-h-0 overflow-hidden">
                                                        <div className="mt-3 space-y-1 rounded-2xl border border-ink/10 bg-white p-2">
                                                            {PRODUCT_ITEMS.map(
                                                                (sub) => {
                                                                    const Icon =
                                                                        sub.icon;

                                                                    return (
                                                                        <a
                                                                            key={
                                                                                sub.title
                                                                            }
                                                                            href={
                                                                                sub.href
                                                                            }
                                                                            onClick={
                                                                                closeMenu
                                                                            }
                                                                            className={`flex items-center gap-3 rounded-xl p-2.5 hover:bg-[#F5F6F2] ${focusRing}`}
                                                                        >
                                                                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF4EC] text-[#0B9B57]">
                                                                                <Icon
                                                                                    className="size-4"
                                                                                    strokeWidth={
                                                                                        1.8
                                                                                    }
                                                                                />
                                                                            </span>
                                                                            <span className="min-w-0">
                                                                                <span className="block text-[14px] font-semibold text-ink">
                                                                                    {
                                                                                        sub.title
                                                                                    }
                                                                                </span>
                                                                                <span className="block text-[12px] leading-5 text-ink-soft">
                                                                                    {
                                                                                        sub.text
                                                                                    }
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                    );
                                                                },
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={closeMenu}
                                                aria-current={
                                                    isActive(item)
                                                        ? 'page'
                                                        : undefined
                                                }
                                                className={`relative z-10 inline-flex items-center gap-2 text-[19px] font-medium tracking-[-0.4px] hover:text-ink ${focusRing} ${
                                                    isActive(item)
                                                        ? 'text-ink'
                                                        : 'text-[#374151]'
                                                }`}
                                            >
                                                {item.label}
                                                {isActive(item) && (
                                                    <span className="size-1.5 rounded-full bg-[#19D27A]" />
                                                )}
                                            </Link>
                                        ),
                                    )}
                                </nav>

                                {/* LOGIN */}
                                <Link
                                    href="/login"
                                    onClick={closeMenu}
                                    className="mt-8 flex h-[46px] w-full items-center justify-center rounded-full border border-[#0A0F1A]/15 bg-[#D0D0D0] text-[13px] font-medium text-[#0A0F1A] hover:bg-[#C5C5C5]"
                                >
                                    Login
                                </Link>

                                {/* START FREE */}
                                <Link
                                    href="/register"
                                    onClick={closeMenu}
                                    className="mt-2 flex h-[46px] w-full items-center justify-center gap-1 rounded-full bg-[#0A0F1A] text-[13px] font-medium text-white hover:bg-[#202938]"
                                >
                                    {cta}
                                    <ArrowUpRight className="size-3.5" />
                                </Link>

                                {/* SOCIAL FOOTER */}
                                <div className="mt-7 flex items-center justify-between border-t border-[#0A0F1A]/[0.06] pt-5">
                                    <Link
                                        href="/"
                                        onClick={closeMenu}
                                        aria-label="Home"
                                    >
                                        <LogoMark />
                                    </Link>

                                    <div className="flex items-center gap-2.5 text-[10px] font-semibold tracking-[1.3px] text-[#6B7280] sm:gap-3">
                                        <a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            INSTAGRAM
                                        </a>
                                        <a
                                            href="https://x.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            X
                                        </a>
                                        <a
                                            href="https://meta.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            META
                                        </a>
                                        <a
                                            href="https://youtube.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            YOUTUBE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
