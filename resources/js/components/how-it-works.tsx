
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

// Steps
const steps = [
    {
        title: 'Tell us about your website',
        text: 'Share your website and what you need help with, in your own words.',
    },
    {
        title: 'We understand the situation',
        text: 'We review the issue and identify practical next steps.',
    },
    {
        title: 'Get a clear plan',
        text: 'We explain the recommended work before moving forward.',
    },
    {
        title: 'We take care of the details',
        text: 'We work through the agreed tasks and keep communication clear.',
    },
];

// Section component
function Section({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <section
            className={`relative px-5 py-16 sm:px-8 md:py-20 ${className}`}
        >
            <div className="mx-auto w-full max-w-[1320px]">
                {children}
            </div>
        </section>
    );
}

// Em component
function Em({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <span
            className={`font-serif font-normal italic ${className}`}
        >
            {children}
        </span>
    );
}

// Main component
function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [disableTransition, setDisableTransition] = useState(false);

    const stepCount = steps.length;

    // Each card height + gap = 164px
    const stepHeight = 164;

    // Automatic infinite slider
    useEffect(() => {
        if (isPaused || stepCount <= 1) return;

        const interval = window.setInterval(() => {
            setActiveStep((current) => current + 1);
        }, 1500);

        return () => window.clearInterval(interval);
    }, [isPaused, stepCount]);

    // Reset transition after seamless loop
    useEffect(() => {
        if (!disableTransition) return;

        const timeout = window.setTimeout(() => {
            setDisableTransition(false);
        }, 50);

        return () => window.clearTimeout(timeout);
    }, [disableTransition]);

    // Handle infinite loop reset
    const handleTransitionEnd = () => {
        if (activeStep >= stepCount) {
            setDisableTransition(true);
            setActiveStep(0);
        }
    };

    return (
        <Section
            className="relative flex flex-col justify-center overflow-hidden bg-[#080D18] !py-16 sm:!py-24"
        >
            {/* Green glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#19D27A]/10 blur-[120px]"
            />

            {/* Main content */}
            <div className="relative grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">

                {/* Left heading */}
                <div className="flex flex-col justify-center self-center">

                    {/* Section label */}
                    <p className="mb-5 flex items-center gap-3 text-[13px] font-medium text-[#19D27A]">
                        <span className="h-[2px] w-7 bg-[#19D27A]" />
                        How it works
                    </p>

                    {/* Heading */}
                    <h2 className="font-heading text-[34px] font-semibold leading-[1.12] tracking-[-1.3px] text-white sm:text-[44px] sm:tracking-[-1.8px]">
                        Simple steps.
                        <br />

                        <Em className="text-[#19D27A]">
                            Clear communication.
                        </Em>
                    </h2>

                    {/* Description */}
                    <p className="mt-5 max-w-[340px] text-[15px] leading-7 text-[#A8B1BD] sm:text-[16px]">
                        We keep the process straightforward so you know
                        what is happening and what comes next.
                    </p>

                    {/* Steps count */}
                    <p className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] text-[#A8B1BD]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#19D27A]" />

                        {stepCount} steps, start to finish
                    </p>

                </div>

                {/* Right vertical slider */}
                <div
                    className="relative h-[400px] overflow-hidden sm:h-[440px]"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={(event) => {
                        if (
                            !event.currentTarget.contains(
                                event.relatedTarget as Node | null
                            )
                        ) {
                            setIsPaused(false);
                        }
                    }}
                >

                    {/* Top fade */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-[#080D18] to-transparent"
                    />

                    {/* Bottom fade */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-[#080D18] to-transparent"
                    />

                    {/* Infinite slider track */}
                    <div
                        onTransitionEnd={handleTransitionEnd}
                        className={`absolute inset-x-0 top-1/2 flex flex-col gap-6 ${
                            disableTransition
                                ? 'transition-none'
                                : 'transition-transform duration-500 ease-linear'
                        } motion-reduce:transition-none`}
                        style={{
                            transform: `translateY(calc(-${activeStep * stepHeight}px - 70px))`,
                        }}
                    >

                        {/* Original steps + duplicated steps */}
                        {[...steps, ...steps].map((step, i) => {

                            const originalIndex = i % stepCount;

                            const isActive =
                                activeStep % stepCount === originalIndex;

                            return (
                                <div
                                    key={`${i}-${step.title}`}
                                    aria-hidden={
                                        i >= stepCount || !isActive
                                    }
                                    className="relative flex h-[140px] shrink-0 gap-5 pl-14 sm:pl-16"
                                >

                                    {/* Step number */}
                                    <span
                                        className={`absolute left-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border font-heading text-[13px] font-semibold tabular-nums transition-colors duration-300 sm:h-10 sm:w-10 ${
                                            isActive
                                                ? 'border-[#19D27A] bg-[#19D27A] text-[#080D18]'
                                                : 'border-[#19D27A]/40 bg-[#0C1626] text-[#19D27A]'
                                        }`}
                                    >
                                        {String(originalIndex + 1).padStart(2, '0')}
                                    </span>

                                    {/* Step card */}
                                    <div
                                        className={`flex flex-1 flex-col justify-center rounded-2xl border p-5 transition-colors duration-300 sm:p-6 ${
                                            isActive
                                                ? 'border-[#19D27A]/40 bg-[#151D28]'
                                                : 'border-white/10 bg-[#111722]'
                                        }`}
                                    >

                                        {/* Title */}
                                        <h3 className="font-heading text-[18px] font-semibold tracking-[-0.3px] text-white sm:text-[20px]">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-2 max-w-[460px] text-[14px] leading-7 text-[#A8B1BD] sm:text-[15px]">
                                            {step.text}
                                        </p>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </Section>
    );
}

export default HowItWorks;
