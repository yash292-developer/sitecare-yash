import CTASection from '@/components/CTASection';
import { Head, Link } from '@inertiajs/react';
import { useMemo, useState } from 'react';
import {
    ChevronDown,
    CreditCard,
    FileText,
    Globe,
    Info,
    LayoutGrid,
    LifeBuoy,
    Search,
    MessageCircle,
    type LucideIcon,
} from 'lucide-react';
import SiteLayout from '@/layouts/site-layout';

const CATEGORIES = [
    'All questions',
    'General',
    'SiteCare',
    'Reports',
    'Billing',
    'Support',
];

const CATEGORY_ICONS: Record<string, LucideIcon> = {
    'All questions': LayoutGrid,
    General: Info,
    SiteCare: Globe,
    Reports: FileText,
    Billing: CreditCard,
    Support: LifeBuoy,
};

const FAQS = [
    {
        category: 'General',
        question: 'What is SiteCare?',
        answer: 'SiteCare helps WordPress professionals manage website maintenance and share clear, branded monthly reports with their clients. It helps you keep clients informed without having to explain technical details every month.',
    },
    {
        category: 'General',
        question: 'Who is SiteCare for?',
        answer: 'SiteCare is designed for freelancers, WordPress developers, agencies and website maintenance professionals who manage multiple client websites.',
    },
    {
        category: 'General',
        question: 'Do I need technical knowledge to use SiteCare?',
        answer: 'You should be comfortable managing WordPress websites. SiteCare is designed to make reporting easier and more understandable, even for clients who are not technical.',
    },
    {
        category: 'SiteCare',
        question: 'Which websites can I manage?',
        answer: 'SiteCare is built for WordPress websites. You can use it for the client websites you manage and maintain.',
    },
    {
        category: 'SiteCare',
        question: 'What does SiteCare monitor?',
        answer: 'SiteCare monitors the WordPress websites you manage and helps turn maintenance information into reports your clients can understand.',
    },
    {
        category: 'SiteCare',
        question: 'Can I manage multiple client websites?',
        answer: 'Yes. SiteCare is designed for professionals managing multiple WordPress websites, so you can keep client maintenance and reporting organized.',
    },
    {
        category: 'Reports',
        question: 'What is included in a client report?',
        answer: 'Reports provide a plain-language summary of your website maintenance activity. The goal is to help clients understand what is being looked after without needing to interpret technical details.',
    },
    {
        category: 'Reports',
        question: 'Can reports be branded for my business?',
        answer: 'SiteCare is designed to help you deliver branded reports to your clients, making your maintenance service feel consistent and professional.',
    },
    {
        category: 'Reports',
        question: 'How are reports delivered?',
        answer: 'SiteCare supports monthly reporting and reports delivered through WhatsApp, helping clients receive their updates in a familiar place.',
    },
    {
        category: 'Billing',
        question: 'Is there a free trial?',
        answer: 'SiteCare offers a 14-day free trial. You can try the service before deciding whether it is right for your business.',
    },
    {
        category: 'Billing',
        question: 'Do I need a credit card to start?',
        answer: 'No credit card is required to start the free trial.',
    },
    {
        category: 'Billing',
        question: 'Can I cancel anytime?',
        answer: 'Yes. You can cancel anytime. Check your account billing details for the applicable subscription terms.',
    },
    {
        category: 'Support',
        question: 'How can I contact support?',
        answer: 'You can contact our team through the Contact page or email support@sitecare.com. Tell us what you need help with and include your website address when relevant.',
    },
    {
        category: 'Support',
        question: 'My website is down. Can SiteCare help?',
        answer: 'If your website is down, contact our team and include your website address along with what happened. This helps us understand the issue and determine the next step.',
    },
];

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState('All questions');
    const [search, setSearch] = useState('');
    // Track open items by a stable key (not by list index), so filtering never opens the wrong item
    const [openItems, setOpenItems] = useState<string[]>([
        `${FAQS[0].category}-${FAQS[0].question}`,
    ]);

    const searchMatches = (faq: (typeof FAQS)[number]) =>
        `${faq.question} ${faq.answer} ${faq.category}`
            .toLowerCase()
            .includes(search.toLowerCase());

    const filteredFAQs = useMemo(
        () =>
            FAQS.filter(
                (faq) =>
                    (activeCategory === 'All questions' ||
                        faq.category === activeCategory) &&
                    searchMatches(faq),
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [activeCategory, search],
    );

    // Count per category (respects the current search)
    const counts = useMemo(() => {
        const result: Record<string, number> = {};
        for (const category of CATEGORIES) {
            result[category] = FAQS.filter(
                (faq) =>
                    (category === 'All questions' ||
                        faq.category === category) &&
                    searchMatches(faq),
            ).length;
        }
        return result;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const toggleFAQ = (key: string) => {
        setOpenItems((current) =>
            current.includes(key)
                ? current.filter((item) => item !== key)
                : [...current, key],
        );
    };

    return (
        <SiteLayout title="Frequently Asked Questions">
            <Head title="FAQ | SiteCare">
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

            <main className="bg-[#F0EFE9] px-0 pb-14 pt-00 font-sans sm:px-8 sm:pb-20 sm:pt-0">

                <div className="mx-auto w-full max-w-[1320px]">

                    {/* HERO (unchanged) */}
                    <section
                        id="faq"
                        className="relative isolate flex min-h-0 flex-col items-center overflow-hidden bg-[#F0EFE9] px-5 py-14 text-center sm:min-h-[570px] sm:px-5 sm:py-24 md:min-h-[590px] md:py-28"
                    >
                        {/* Green Background Glow */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[420px] w-[min(820px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18B96B26] opacity-100 blur-[120px]"
                        />

                        {/* Announcement Badge */}
                        <a
                            href="#faq-questions"
                            className="relative inline-flex max-w-full items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1.5 text-[11px] sm:gap-3 font-medium text-[#10120F] shadow-sm transition hover:shadow-md sm:text-xs"
                        >
                            <span className="shrink-0 rounded-full bg-[#18B96B] px-3 py-1 font-bold text-[#071b11]">
                                HELP
                            </span>
                            <span className="min-w-0 truncate">Answers to your SiteCare questions</span>
                            <span className="shrink-0 pr-2 text-base">→</span>
                        </a>

                        {/* Main Heading */}
                        <h1 className="relative mx-auto mt-7 max-w-5xl text-[clamp(36px,8.5vw,80px)] sm:text-[clamp(42px,6.2vw,80px)] font-bold leading-[0.98] tracking-[-0.065em] text-[#10120F]">
                            Got questions?
                            <br className="hidden sm:block" />
                            {" "}We've got answers.
                        </h1>

                        {/* Description */}
                        <p className="relative mx-auto mt-5 max-w-[550px] text-[15px] font-medium leading-relaxed tracking-[-0.02em] text-[#3b4252] sm:mt-6 sm:text-lg">
                            Everything you need to know about SiteCare,
                            website maintenance reports and keeping your
                            clients in the loop.
                        </p>

                        {/* Search bar */}
                        <div className="relative mt-7 flex h-[52px] sm:mt-9 sm:h-[56px] w-full max-w-[520px] items-center gap-3 rounded-full border border-gray-200 bg-white px-5 shadow-sm transition focus-within:border-[#18B96B] focus-within:shadow-md">
                            <Search
                                size={18}
                                className="shrink-0 text-[#72766C]"
                            />
                            <input
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search for a question..."
                                aria-label="Search frequently asked questions"
                                className="h-full min-w-0 flex-1 bg-transparent text-[13px] text-[#10120F] outline-none placeholder:text-[#85877E]"
                            />
                            <span className="hidden rounded-full bg-[#F1F4EF] px-3 py-1 text-[10px] text-[#72766C] sm:block">
                                Search
                            </span>
                        </div>

                        {/* Helpful note */}
                        <p className="relative mt-5 font-['Figtree'] text-[13px] font-normal leading-[19.5px] tracking-normal text-center text-[#6B7280] px-4">
                            Can't find it? Contact our team and we'll help.
                        </p>
                    </section>

                    {/* FAQ CONTENT */}
                    <section
                        id="faq-questions"
                        className="mt-2 grid scroll-mt-24 grid-cols-[minmax(0,1fr)] gap-6 px-5 sm:mt-6 sm:gap-8 lg:grid-cols-[288px_minmax(0,1fr)] lg:items-start lg:gap-10"
                    >

                        {/* SIDEBAR */}
                        <aside className="min-w-0 lg:sticky lg:top-24">
                            <p className="mb-3 px-1 text-[13px] font-semibold text-[#10120F]">
                                Browse topics
                            </p>

                            <nav
                                aria-label="FAQ categories"
                                className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 lg:flex-col lg:flex-nowrap lg:gap-1 lg:rounded-[24px] lg:border lg:border-[#E2E1D8] lg:bg-white lg:p-2 lg:pb-2 lg:shadow-[0_1px_2px_rgba(16,18,15,0.04)]"
                            >
                                {CATEGORIES.map((category) => {
                                    const active = activeCategory === category;
                                    const Icon = CATEGORY_ICONS[category];

                                    return (
                                        <button
                                            key={category}
                                            type="button"
                                            aria-pressed={active}
                                            onClick={() =>
                                                setActiveCategory(category)
                                            }
                                            className={`group flex shrink-0 items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-4 text-left text-[13.5px] outline-none focus-visible:ring-2 focus-visible:ring-[#18B96B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0EFE9] sm:gap-3 sm:text-[14px] font-semibold transition lg:w-full lg:rounded-2xl lg:py-2 lg:pr-3 ${
                                                active
                                                    ? 'border-[#10120F] bg-[#10120F] text-white'
                                                    : 'border-[#E2E1D8] bg-white text-[#2B2F27] hover:border-[#18B96B]/50 lg:border-transparent lg:bg-transparent lg:hover:bg-[#F6F5EF]'
                                            }`}
                                        >
                                            <span
                                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition lg:h-9 lg:w-9 lg:rounded-xl ${
                                                    active
                                                        ? 'bg-[#18B96B] text-[#071b11]'
                                                        : 'bg-[#F0EFE9] text-[#5B6157] group-hover:bg-[#E3F4EA] group-hover:text-[#16834D]'
                                                }`}
                                            >
                                                <Icon size={16} />
                                            </span>

                                            <span className="whitespace-nowrap lg:flex-1">
                                                {category}
                                            </span>

                                            <span
                                                className={`hidden min-w-[26px] rounded-full px-2 py-0.5 text-center text-[11px] font-semibold tabular-nums sm:block ${
                                                    active
                                                        ? 'bg-white/15 text-white'
                                                        : 'bg-[#F0EFE9] text-[#5B6157]'
                                                }`}
                                            >
                                                {counts[category]}
                                            </span>
                                        </button>
                                    );
                                })}
                            </nav>

                            {/* CONTACT CARD (desktop) */}
                            <div className="mt-4 hidden rounded-[24px] border border-[#18B96B]/25 bg-[#E3F4EA] p-5 lg:block">
                                <h3 className="text-[17px] font-semibold tracking-[-0.3px] text-[#10120F]">
                                    Still have questions?
                                </h3>

                                <p className="mt-1.5 text-[14px] leading-6 text-[#3F5448]">
                                    Our team is happy to help you out.
                                </p>

                                <Link
                                    href="/contact"
                                    className="mt-4 inline-flex h-10 items-center gap-2 rounded-full bg-[#10120F] px-4 text-[13px] font-semibold text-white transition hover:bg-[#18B96B] hover:text-[#10120F]"
                                >
                                    <MessageCircle size={15} />
                                    Contact our team
                                </Link>
                            </div>
                        </aside>

                        {/* QUESTIONS */}
                        <div className="min-w-0">
                            <div className="mb-4 flex flex-col items-start gap-3 px-1 sm:mb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                                <div>
                                    <h2 className="text-[24px] font-bold leading-tight tracking-[-0.04em] text-[#10120F] sm:text-[32px]">
                                        {activeCategory === 'All questions'
                                            ? 'Frequently asked questions'
                                            : activeCategory}
                                    </h2>
                                    <p className="mt-1 text-[14px] text-[#5B6157]">
                                        Tap a question to see the answer.
                                    </p>
                                </div>

                                <span className="shrink-0 rounded-full border border-[#DDE9E0] bg-[#E3F4EA] px-3 py-1 text-[12px] font-semibold text-[#16834D]">
                                    {filteredFAQs.length}{' '}
                                    {filteredFAQs.length === 1
                                        ? 'question'
                                        : 'questions'}
                                </span>
                            </div>

                            <div className="space-y-3">
                                {filteredFAQs.map((faq) => {
                                    const key = `${faq.category}-${faq.question}`;
                                    const isOpen = openItems.includes(key);
                                    const panelId = `faq-panel-${key.replace(/[^a-z0-9]+/gi, '-')}`;
                                    const Icon = CATEGORY_ICONS[faq.category];

                                    return (
                                        <article
                                            key={key}
                                            className={`rounded-2xl border bg-white transition-all ${
                                                isOpen
                                                    ? 'border-[#18B96B]/60 shadow-[0_16px_36px_-22px_rgba(24,185,107,0.55)]'
                                                    : 'border-[#E2E1D8] hover:border-[#18B96B]/40'
                                            }`}
                                        >
                                            <button
                                                type="button"
                                                aria-expanded={isOpen}
                                                aria-controls={panelId}
                                                onClick={() => toggleFAQ(key)}
                                                className="flex w-full items-center gap-3 rounded-2xl p-3.5 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#18B96B] sm:gap-4 sm:p-5"
                                            >
                                                <span
                                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition sm:h-11 sm:w-11 ${
                                                        isOpen
                                                            ? 'bg-[#18B96B] text-[#071b11]'
                                                            : 'bg-[#F0EFE9] text-[#5B6157]'
                                                    }`}
                                                >
                                                    <Icon size={19} />
                                                </span>

                                                <span className="min-w-0 flex-1">
                                                    {activeCategory ===
                                                        'All questions' && (
                                                        <span className="block text-[12px] font-medium text-[#16834D]">
                                                            {faq.category}
                                                        </span>
                                                    )}
                                                    <span className="block text-[15px] font-semibold leading-[22px] tracking-[-0.01em] text-[#10120F] sm:text-[17px] sm:leading-6">
                                                        {faq.question}
                                                    </span>
                                                </span>

                                                <span
                                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                                                        isOpen
                                                            ? 'bg-[#10120F] text-white'
                                                            : 'bg-[#F0EFE9] text-[#5B6157]'
                                                    }`}
                                                >
                                                    <ChevronDown
                                                        size={16}
                                                        className={`transition-transform duration-200 ${
                                                            isOpen
                                                                ? 'rotate-180'
                                                                : ''
                                                        }`}
                                                    />
                                                </span>
                                            </button>

                                            {/* Smooth expand */}
                                            <div
                                                id={panelId}
                                                role="region"
                                                className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                                                    isOpen
                                                        ? 'grid-rows-[1fr]'
                                                        : 'grid-rows-[0fr]'
                                                }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="px-3.5 pb-4 sm:px-5 sm:pb-5 sm:pl-[80px]">
                                                        <p className="max-w-[640px] break-words text-[14.5px] leading-[26px] text-[#4A5046] sm:text-[15px] sm:leading-7">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>

                            {/* EMPTY SEARCH */}
                            {filteredFAQs.length === 0 && (
                                <div className="rounded-2xl border border-[#E2E1D8] bg-white px-5 py-12 text-center sm:px-6 sm:py-14">
                                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#F0EFE9] text-[#72766C]">
                                        <Search size={20} />
                                    </div>

                                    <h3 className="mt-4 text-[17px] font-semibold text-[#10120F]">
                                        No questions found
                                    </h3>

                                    <p className="mt-1.5 text-[14px] text-[#5B6157]">
                                        Try another search or choose a different
                                        category.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSearch('');
                                            setActiveCategory('All questions');
                                        }}
                                        className="mt-5 text-[13px] font-semibold text-[#10120F] underline decoration-[#18B96B] decoration-2 underline-offset-4"
                                    >
                                        Clear filters
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* CONTACT CARD (mobile) */}
                        <div className="rounded-[24px] border border-[#18B96B]/25 bg-[#E3F4EA] p-5 lg:hidden">
                            <h3 className="text-[17px] font-semibold text-[#10120F]">
                                Still have questions?
                            </h3>
                            <p className="mt-1.5 text-[14px] leading-6 text-[#3F5448]">
                                Our team is happy to help you out.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#10120F] px-4 text-[13px] font-semibold text-white sm:w-auto"
                            >
                                <MessageCircle size={15} />
                                Contact our team
                            </Link>
                        </div>
                    </section>

                    {/* BOTTOM CTA */}

                    <section className="px-5">
                    <CTASection />
                     </section>


                </div>
            </main>

        </SiteLayout>
    );
}
