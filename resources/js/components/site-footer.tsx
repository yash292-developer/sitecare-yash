
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from '@inertiajs/react';

const COLUMNS = [
    {
        title: 'Product',
        links: [
            { label: 'Overview', href: '/#product' },
            { label: 'Features', href: '/#features' },
            { label: 'How it works', href: '/#how-it-works' },
            { label: 'Sample report', href: '/sample-report' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Start free trial', href: '/register' },
        ],
    },
    {
        title: 'Monitoring',
        links: [
            { label: 'Uptime & SSL', href: '/#uptime' },
            { label: 'Health score', href: '/#health-score' },
            { label: 'Downtime alerts', href: '/#downtime' },
            { label: 'WordPress updates', href: '/#updates' },
            { label: 'Plugin update log', href: '/#plugin-log' },
            { label: 'Backup monitoring', href: '/#backups' },
            { label: 'Site security', href: '/#security' },
        ],
    },
    {
        title: 'Reporting',
        links: [
            { label: 'Monthly reports', href: '/#reports' },
            { label: 'White-label PDFs', href: '/#white-label' },
            { label: 'WhatsApp delivery', href: '/#whatsapp' },
            { label: 'Email reports', href: '/#email' },
            { label: 'Review & send', href: '/#review-send' },
            { label: 'Client branding', href: '/#branding' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Documentation', href: '/docs' },
            { label: 'Getting started', href: '/#getting-started' },
            { label: 'Plugin setup', href: '/#plugin-setup' },
            { label: 'Supported plugins', href: '/#plugins' },
            { label: 'About SiteCare', href: '/about' },
            { label: 'Contact support', href: '/contact' },
            { label: 'Log in', href: '/login' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms-and-conditions' },
            { label: 'Data processing', href: '/data-processing' },
            { label: 'Billing & Cancellation', href: '/billing' },
            { label: 'Cookie Policy', href: '/cookie-policy' },
        ],
    },
];

type Props = {
    brand?: string;
};

export default function SiteFooter({ brand = 'SiteCare' }: Props) {
    const [mounted, setMounted] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        let frame = 0;

        const handleScroll = () => {
            cancelAnimationFrame(frame);

            frame = requestAnimationFrame(() => {
                const scrollableHeight =
                    document.documentElement.scrollHeight -
                    window.innerHeight;

                const progress =
                    scrollableHeight > 0
                        ? (window.scrollY / scrollableHeight) * 100
                        : 0;

                setScrollProgress(
                    Math.min(100, Math.max(0, progress))
                );
            });
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        window.addEventListener('resize', handleScroll);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Progress ring calculation
    const radius = 21;
    const circumference = 2 * Math.PI * radius;

    const progressOffset =
        circumference * (1 - scrollProgress / 100);

    const showBackToTop = scrollProgress > 0;

    return (
        <>
            <footer className="w-full overflow-hidden bg-[#F7F6F2] text-[#0A0F1A]">
                {/* FOOTER LINKS */}
                <div className="mx-auto grid w-full max-w-[1320px] grid-cols-2 gap-x-8 gap-y-10 px-6 py-14 sm:grid-cols-3 sm:gap-x-10 sm:py-16 lg:grid-cols-5 lg:gap-8 lg:px-0 lg:py-[58px]">
                    {COLUMNS.map((col) => (
                        <div key={col.title}>
                            <h2 className="mb-6 text-[16px] font-semibold leading-6 tracking-[-0.3px] text-[#0A0F1A]">
                                {col.title}
                            </h2>

                            <ul className="space-y-[13px]">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-[16px] font-normal leading-[25px] tracking-[-0.2px] text-[#737D8C] transition-colors hover:text-[#0A0F1A]"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* COPYRIGHT BAR */}
                <div className="border-t border-[#0A0F1A]/[0.08]">
                    <div className="mx-auto flex min-h-[100px] w-full max-w-[1320px] flex-col items-start justify-center gap-3 px-6 py-6 text-[14px] text-[#737D8C] sm:flex-row sm:items-center sm:justify-between lg:px-0">
                        <span>
                            © {new Date().getFullYear()} {brand}. All rights reserved.
                        </span>

                        <span className="flex items-center gap-1">
                            Made in India
                            <span className="text-[11px]">IN</span>
                        </span>
                    </div>
                </div>

                {/* LARGE BOTTOM BRAND IMAGE */}
                <div className="w-full overflow-hidden">
                    <img
                        src="/p.select-none-v2.png"
                        alt="SiteCare"
                        className="block h-full w-full select-none object-cover object-center"
                    />
                </div>
            </footer>

            {/* PAGE PROGRESS + BACK TO TOP */}
            {mounted &&
                createPortal(
                    <button
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        title="Back to top"
                        style={{
                            position: 'fixed',
                            right: '24px',
                            bottom: '24px',
                            zIndex: 999999,
                            opacity: showBackToTop ? 1 : 0,
                            visibility: showBackToTop
                                ? 'visible'
                                : 'hidden',
                            pointerEvents: showBackToTop
                                ? 'auto'
                                : 'none',
                        }}
                        className="group relative flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#0A0F1A] text-white shadow-md transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0A0F1A] focus:ring-offset-2"
                    >
                        {/* PROGRESS RING */}
                        <svg
                            className="absolute inset-0 h-full w-full -rotate-90"
                            viewBox="0 0 48 48"
                            fill="none"
                            aria-hidden="true"
                        >
                            {/* Background ring */}
                            <circle
                                cx="24"
                                cy="24"
                                r={radius}
                                stroke="rgba(255,255,255,0.18)"
                                strokeWidth="2"
                            />

                            {/* Scroll progress */}
                            <circle
                                cx="24"
                                cy="24"
                                r={radius}
                                stroke="#A7F3D0"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={progressOffset}
                                className="transition-[stroke-dashoffset] duration-150"
                            />
                        </svg>

                        {/* ARROW ICON */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className="relative"
                        >
                            <path d="m18 15-6-6-6 6" />
                        </svg>
                    </button>,
                    document.body
                )}
        </>
    );
}
