
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { X, ArrowUpRight } from 'lucide-react';

const NAV = [
    { label: 'Product', href: '/#product', menu: true },
    { label: 'About', href: '/about' },
    { label: 'Sample report', href: '/sample-report' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
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

type Props = {
    brand?: string;
    cta?: string;
    language?: string;
};

export default function SiteHeader({
    brand = 'Sitecare',
    cta = 'Start free',
}: Props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = originalPaddingRight;
            window.removeEventListener('keydown', handleEscape);
        };
    }, [menuOpen]);

    // CLOSE MENU ON DESKTOP
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // HEADER SHRINK ON SCROLL
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            {/* BACKGROUND BLUR OVERLAY */}
            <div
                aria-hidden="true"
                onClick={closeMenu}
                className={`fixed inset-0 z-40 backdrop-blur-[6px] transition-all duration-300 nav:hidden ${
                    menuOpen
                        ? 'visible pointer-events-auto bg-[#F5F5F3]/75 opacity-100'
                        : 'invisible pointer-events-none bg-[#F5F5F3]/0 opacity-0'
                }`}
            />

            {/* HEADER */}
            <header
                data-scrolled={scrolled ? 'true' : undefined}
                className="group pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-2 pt-3 sm:px-4 sm:pt-4"
            >
                <div className="pointer-events-auto relative w-full max-w-[1320px] transition-[max-width] duration-300 ease-in-out group-data-[scrolled=true]:max-w-[1100px]">

                    {/* HEADER BAR */}
                    <div
                        className={`relative flex h-[58px] items-center justify-between gap-1.5 px-2.5 backdrop-blur-md transition-all duration-300 ease-in-out min-[375px]:gap-3 min-[375px]:px-3.5 sm:px-4 group-data-[scrolled=true]:h-[50px] group-data-[scrolled=true]:gap-1.5 group-data-[scrolled=true]:px-2.5 ${
                            menuOpen
                                ? 'rounded-t-[28px] rounded-b-none border border-b-0 border-ink/10 bg-[#F5F5F3] shadow-none'
                                : 'rounded-full border border-ink/10 bg-white/95 shadow-sm'
                        }`}
                    >

                        {/* ORIGINAL LOGO */}
                        <Link
                            href="/"
                            aria-label={`${brand} home`}
                            className={`flex min-w-0 shrink items-center gap-1.5 text-[17px] font-semibold tracking-tight text-ink outline-hidden min-[375px]:gap-2 min-[375px]:text-xl ${focusRing}`}
                        >
                            <LogoMark />
                            <span className="whitespace-nowrap">{brand}</span>
                        </Link>

                        {/* DESKTOP NAVIGATION */}
                        <nav
                            aria-label="Main"
                            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 transition-all duration-300 nav:flex group-data-[scrolled=true]:gap-0"
                        >
                            {NAV.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-sm text-ink-soft outline-hidden transition-all duration-300 hover:bg-ink/5 hover:text-ink group-data-[scrolled=true]:px-2 group-data-[scrolled=true]:py-1.5 group-data-[scrolled=true]:text-[13px] ${focusRing}`}
                                >
                                    {item.label}

                                    {item.menu && (
                                        <svg
                                            className="size-3"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="m1.5 4 4.5 4.5L10.5 4"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </nav>

                        {/* DESKTOP ACTIONS */}
                        <div className="hidden shrink-0 items-center gap-2 nav:flex">
                            <Link
                                href="/login"
                                className={`rounded-full px-3.5 py-2 text-sm text-ink-soft outline-hidden transition-all duration-300 hover:bg-ink/5 group-data-[scrolled=true]:px-2.5 group-data-[scrolled=true]:py-1.5 ${focusRing}`}
                            >
                                Log in
                            </Link>

                            <Link
                                href="/register"
                                className={`inline-flex h-10 items-center justify-center gap-1 rounded-full bg-ink px-7 text-sm font-medium text-white outline-hidden transition-all duration-300 hover:bg-ink/85 group-data-[scrolled=true]:h-9 group-data-[scrolled=true]:px-5 ${focusRing}`}
                            >
                                {cta}
                                <ArrowUpRight className="size-4" />
                            </Link>
                        </div>

                        {/* MOBILE ACTIONS */}
                        <div className="flex shrink-0 items-center gap-1.5 nav:hidden min-[375px]:gap-2">
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
                                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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

                    {/* MOBILE MENU */}
                    <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out nav:hidden ${
                            menuOpen
                                ? 'visible grid-rows-[1fr] opacity-100'
                                : 'invisible grid-rows-[0fr] opacity-0'
                        }`}
                    >
                        <div className="min-h-0 overflow-hidden">
                            <div className="rounded-b-[28px] border border-t-0 border-ink/10 bg-[#F5F5F3] px-6 pb-6 pt-5 shadow-none">

                                {/* NAVIGATION */}
                                <nav
                                    aria-label="Mobile navigation"
                                    className="relative flex min-h-[265px] flex-col items-start gap-[21px] overflow-hidden"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute right-[-15px] top-[-5px] size-[245px] rounded-full bg-[radial-gradient(ellipse_at_center,#16D17B20_0%,#16D17B12_48%,transparent_72%)] blur-[2px]"
                                    />

                                    {NAV.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={closeMenu}
                                            className={`relative z-10 inline-flex items-center gap-2 text-[19px] font-medium tracking-[-0.4px] text-[#374151] hover:text-ink ${focusRing}`}
                                        >
                                            {item.label}

                                            {item.menu && (
                                                <svg
                                                    className="size-3.5"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="m1.5 4 4.5 4.5L10.5 4"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            )}
                                        </a>
                                    ))}
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
                                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                            INSTAGRAM
                                        </a>
                                        <a href="https://x.com" target="_blank" rel="noreferrer">
                                            X
                                        </a>
                                        <a href="https://meta.com" target="_blank" rel="noreferrer">
                                            META
                                        </a>
                                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
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
