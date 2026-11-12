import PricingSection from '@/components/pricing-section';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import SiteLayout from '@/layouts/site-layout';
import { Head, Link } from '@inertiajs/react';

export default function Pricing() {
    return (
        <SiteLayout>
            <Head title="WordPress Maintenance Pricing | SiteCare">
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

            {/* HERO (same as FAQ page hero) */}
            <div className="bg-[#F0EFE9] px-0 pb-6 pt-0 font-sans sm:px-8 sm:pb-10 sm:pt-0">
                <div className="mx-auto w-full max-w-[1320px]">
                    <section
                        id="pricing-hero"
                        className="relative isolate flex min-h-0 flex-col items-center overflow-hidden bg-[#F0EFE9] px-5 py-14 text-center sm:min-h-[570px] sm:px-5 sm:py-24 md:min-h-[590px] md:py-28"
                    >
                        {/* Green Background Glow */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[420px] w-[min(820px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18B96B26] opacity-100 blur-[120px]"
                        />

                        {/* Announcement Badge */}
                        <a
                            href="#plans"
                            className="relative inline-flex max-w-full items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1.5 text-[11px] font-medium text-[#10120F] shadow-sm transition hover:shadow-md sm:gap-3 sm:text-xs"
                        >
                            <span className="shrink-0 rounded-full bg-[#18B96B] px-3 py-1 font-bold text-[#071b11]">
                                PRICING
                            </span>
                            <span className="min-w-0 truncate">
                                Simple, transparent pricing
                            </span>
                            <span className="shrink-0 pr-2 text-base">→</span>
                        </a>

                        {/* Main Heading */}
                        <h1 className="relative mx-auto mt-7 max-w-5xl text-[clamp(36px,8.5vw,80px)] font-bold leading-[0.98] tracking-[-0.065em] text-[#10120F] sm:text-[clamp(42px,6.2vw,80px)]">
                            Website care.
                            <br className="hidden sm:block" />
                            {" "}Without the guesswork.
                        </h1>

                        {/* Description */}
                        <p className="relative mx-auto mt-5 max-w-[550px] text-[15px] font-medium leading-relaxed tracking-[-0.02em] text-[#3b4252] sm:mt-6 sm:text-lg">
                            Reliable WordPress maintenance, thoughtful support
                            and clear communication. Choose the level of care
                            that works for your website.
                        </p>

                        {/* Buttons */}
                       <div className="relative mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">

                    <Link
                        href="/register"
                        className="inline-flex h-[54px] w-full max-w-[250px] items-center justify-center gap-3 rounded-full bg-[#080d18] px-7 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#202a3a] sm:w-auto"
                    >
                        Explore Planes
                        <span className="text-lg">→</span>
                    </Link>

                    <a
                        href="#sample-report"
                        className="inline-flex h-[54px] w-full max-w-[250px] items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-7 text-sm font-semibold text-[#111827] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md sm:w-auto"
                    >
                        <span className="text-base text-[#19b875]">▤</span>
                        Talk to us
                    </a>
                </div>

                        {/* Helpful note */}
                        <p className="relative mt-5 px-4 text-center font-['Figtree'] text-[13px] font-normal leading-[19.5px] tracking-normal text-[#6B7280]">
                            No unnecessary extras. Just practical website care.
                        </p>
                    </section>
                </div>
            </div>

            <PricingSection />

            <FAQSection />
            <section className="px-5">
            <CTASection/>
            </section>
        </SiteLayout>
    );
}
