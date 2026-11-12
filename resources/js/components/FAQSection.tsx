
import { useState } from 'react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const questions = [
        {
            q: "Is the plugin safe on client sites?",
            a: "Yes. SiteCare uses read-only access to monitor your WordPress sites. It does not make changes to your client's website or modify your plugins and themes.",
        },
        {
            q: "Do clients really get reports on WhatsApp?",
            a: "Yes. Reports can be delivered directly to your clients through WhatsApp, along with email delivery, so they can easily stay updated.",
        },
        {
            q: "Can I send reports under my own brand?",
            a: "Yes. Agency plans include white-label PDF reports that you can share with clients using your own agency branding.",
        },
        {
            q: "What if the host blocks outbound requests?",
            a: "Some hosting environments restrict outbound requests. SiteCare checks connectivity and reports when a hosting restriction prevents monitoring.",
        },
        {
            q: "How do I pay?",
            a: "You can pay using UPI, credit cards, debit cards and netbanking. GST invoices are included.",
        },
        {
            q: "Is there a free trial?",
            a: "Yes. Every plan includes a 14-day free trial. You can explore the service before choosing a paid plan.",
        },
    ];

    return (
        <section className="w-full bg-[#F7F6F2] px-5 py-16 sm:px-8">
            <div className="mx-auto w-full max-w-[800px]">

                {/* SECTION HEADING */}
                <div className="mb-10 text-center sm:mb-14">
                    <p className="mb-5 font-sans text-[12px] font-semibold uppercase tracking-[2.5px] text-[#16D17B]">
                        — FAQ
                    </p>

                    <h2 className="font-sans text-[36px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#0A0F1A] sm:text-[48px]">
                        Questions agencies ask.
                    </h2>
                </div>

                {/* FAQ ACCORDION */}
                <div className="w-full border-t border-[#E7E5DE]">
                    {questions.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={item.q}
                                className="border-b border-[#E7E5DE]"
                            >
                                <button
                                    type="button"
                                    onClick={() => {
                                        setOpenIndex(isOpen ? null : index);
                                    }}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-6 py-7 text-left sm:py-8"
                                >
                                    <span className="font-sans text-[17px] font-semibold tracking-[-0.4px] text-[#0A0F1A] sm:text-[20px]">
                                        {item.q}
                                    </span>

                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[25px] font-normal leading-none text-[#0A0F1A]">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="max-w-[850px] pb-7 pr-10 font-sans text-[15px] leading-7 text-[#6B7280] sm:pb-8">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
