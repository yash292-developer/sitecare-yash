import { useState } from 'react';
export default function PricingSection() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

    const plans = [
        {
            name: "Personal",
            description: "Freelancers with a few sites.",
            monthly: 199,
            yearly: 1990,
            features: [
                "Up to 3 sites",
                "Uptime & SSL monitoring",
                "Monthly PDF report",
                "30 WhatsApp messages",
            ],
        },
        {
            name: "Agency",
            description: "Agencies running care plans.",
            monthly: 1499,
            yearly: 14990,
            popular: true,
            features: [
                "Up to 25 sites",
                "White-label PDF reports",
                "WhatsApp + email delivery",
                "Review-and-send workflow",
                "1-minute uptime checks",
            ],
        },
        {
            name: "Business",
            description: "Larger portfolios.",
            monthly: 3999,
            yearly: 39990,
            features: [
                "Up to 100 sites",
                "Everything in Agency",
                "Extra report recipients",
                "Higher WhatsApp allowance",
            ],
        },
    ];

    return (
       <section className="w-full bg-[#0A0F1A] px-5 py-16 text-white sm:px-8">
            <div className="mx-auto w-full max-w-[1320px]">

                {/* SECTION HEADING */}
                <div className="mb-9 text-center">
                    <p className="mb-4 font-sans text-[12px] font-semibold uppercase tracking-[2.5px] text-[#16D17B]">
                        — PRICING
                    </p>

                    <h2 className="font-sans text-[38px] font-semibold leading-tight tracking-[-1.8px] sm:text-[46px]">
                        Simple, in rupees
                    </h2>

                    <p className="mt-3 font-sans text-[16px] text-[#8B909B]">
                        14-day free trial on every plan. GST invoice included.
                    </p>
                </div>

                {/* BILLING TOGGLE */}
                <div className="mb-14 flex justify-center">
                    <div className="flex items-center gap-1 rounded-full bg-[#252B37] p-1">

                        <button
                            type="button"
                            onClick={() => setBilling("monthly")}
                            className={`rounded-full px-6 py-3 text-[13px] font-semibold transition ${
                                billing === "monthly"
                                    ? "bg-white text-[#0A0F1A]"
                                    : "text-[#A6A9B2] hover:text-white"
                            }`}
                        >
                            Monthly
                        </button>

                        <button
                            type="button"
                            onClick={() => setBilling("yearly")}
                            className={`flex items-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold transition ${
                                billing === "yearly"
                                    ? "bg-white text-[#0A0F1A]"
                                    : "text-[#A6A9B2] hover:text-white"
                            }`}
                        >
                            Yearly

                            <span className="rounded-full bg-[#16D17B] px-2.5 py-1 text-[10px] font-bold text-[#07121A]">
                                2 months free
                            </span>
                        </button>

                    </div>
                </div>

                {/* PRICING CARDS */}
                <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3">

                    {plans.map((plan) => {
                        const isPopular = plan.name === "Agency";

                        const price =
                            billing === "monthly"
                                ? plan.monthly
                                : plan.yearly;

                        return (
                            <div
                                key={plan.name}
                                className={`relative flex flex-col rounded-[24px] border p-8 sm:p-9 ${
                                    isPopular
                                        ? "border-[#16D17B] bg-[#16D17B] text-[#07121A]"
                                        : "border-white/[0.06] bg-[#131B2C] text-white"
                                }`}
                            >

                                {/* POPULAR BADGE */}
                                {isPopular && (
                                    <span className="absolute right-6 top-6 rounded-full bg-[#07121A] px-3 py-1.5 text-[11px] font-semibold text-[#16D17B]">
                                        Most popular
                                    </span>
                                )}

                                {/* PLAN NAME */}
                                <div>
                                    <h3 className="text-[19px] font-semibold">
                                        {plan.name}
                                    </h3>

                                    <p
                                        className={`mt-1 text-[14px] ${
                                            isPopular
                                                ? "text-[#075C38]"
                                                : "text-[#858B98]"
                                        }`}
                                    >
                                        {plan.description}
                                    </p>
                                </div>

                                {/* PRICE */}
                                <div className="mb-12 mt-8 flex items-baseline gap-2">
                                    <span className="text-[48px] font-semibold leading-none tracking-[-2.5px] sm:text-[54px]">
                                        ₹{price.toLocaleString("en-IN")}
                                    </span>

                                    <span
                                        className={`text-[15px] ${
                                            isPopular
                                                ? "text-[#075C38]"
                                                : "text-[#858B98]"
                                        }`}
                                    >
                                        /{billing === "monthly" ? "mo" : "yr"}
                                    </span>
                                </div>

                                {/* FEATURES */}
                                <ul className="mb-10 flex-1 space-y-4">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-3 text-[14px]"
                                        >
                                            <span
                                                className={`text-[17px] font-bold ${
                                                    isPopular
                                                        ? "text-[#07121A]"
                                                        : "text-[#16D17B]"
                                                }`}
                                            >
                                                ✓
                                            </span>

                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA BUTTON */}
                                <a
                                    href="#contact"
                                    className={`flex min-h-[48px] w-full items-center justify-center rounded-full text-[14px] font-semibold transition hover:opacity-90 ${
                                        isPopular
                                            ? "bg-[#07121A] text-white"
                                            : "bg-[#2B3343] text-white"
                                    }`}
                                >
                                    Start free trial
                                </a>

                            </div>
                        );
                    })}

                </div>

                {/* FOOTNOTE */}
                <p className="mt-8 text-center text-[12px] text-[#626875]">
                    Prices exclude GST. Limits are indicative and may change before launch.
                </p>

            </div>
        </section>
    );
}