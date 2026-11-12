import { AlertCircle, Check, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

/**
 * SETUP (2 minutes, no backend needed):
 * 1. Go to https://web3forms.com and enter the email that should RECEIVE the enquiries.
 * 2. They email you an Access Key. Paste it below.
 * That's it. Messages arrive in that inbox; "Reply" goes to the visitor.
 */
const WEB3FORMS_ACCESS_KEY = 'cc33a882-b847-4c2b-9586-d22b0c73781f';

const TOPICS = [
    'Question about SiteCare',
    'My site is down',
    'Site hacked or has malware',
    'Move my site to you',
    'Something else',
];

const COUNTRIES = [
    { iso: 'IN', name: 'India', code: '+91' },
    { iso: 'US', name: 'United States', code: '+1' },
    { iso: 'CA', name: 'Canada', code: '+1' },
    { iso: 'GB', name: 'United Kingdom', code: '+44' },
    { iso: 'AU', name: 'Australia', code: '+61' },
    { iso: 'NZ', name: 'New Zealand', code: '+64' },
    { iso: 'IE', name: 'Ireland', code: '+353' },
    { iso: 'AE', name: 'United Arab Emirates', code: '+971' },
    { iso: 'SA', name: 'Saudi Arabia', code: '+966' },
    { iso: 'QA', name: 'Qatar', code: '+974' },
    { iso: 'KW', name: 'Kuwait', code: '+965' },
    { iso: 'PK', name: 'Pakistan', code: '+92' },
    { iso: 'BD', name: 'Bangladesh', code: '+880' },
    { iso: 'LK', name: 'Sri Lanka', code: '+94' },
    { iso: 'NP', name: 'Nepal', code: '+977' },
    { iso: 'SG', name: 'Singapore', code: '+65' },
    { iso: 'MY', name: 'Malaysia', code: '+60' },
    { iso: 'ID', name: 'Indonesia', code: '+62' },
    { iso: 'PH', name: 'Philippines', code: '+63' },
    { iso: 'TH', name: 'Thailand', code: '+66' },
    { iso: 'JP', name: 'Japan', code: '+81' },
    { iso: 'KR', name: 'South Korea', code: '+82' },
    { iso: 'CN', name: 'China', code: '+86' },
    { iso: 'HK', name: 'Hong Kong', code: '+852' },
    { iso: 'DE', name: 'Germany', code: '+49' },
    { iso: 'FR', name: 'France', code: '+33' },
    { iso: 'ES', name: 'Spain', code: '+34' },
    { iso: 'IT', name: 'Italy', code: '+39' },
    { iso: 'NL', name: 'Netherlands', code: '+31' },
    { iso: 'SE', name: 'Sweden', code: '+46' },
    { iso: 'CH', name: 'Switzerland', code: '+41' },
    { iso: 'ZA', name: 'South Africa', code: '+27' },
    { iso: 'NG', name: 'Nigeria', code: '+234' },
    { iso: 'KE', name: 'Kenya', code: '+254' },
    { iso: 'EG', name: 'Egypt', code: '+20' },
    { iso: 'BR', name: 'Brazil', code: '+55' },
    { iso: 'MX', name: 'Mexico', code: '+52' },
    { iso: 'AR', name: 'Argentina', code: '+54' },
];

const display = 'font-sans';

const fieldClass =
    'w-full rounded-[10px] border border-[#E5E7E1] bg-[#FAFAF8] px-4 text-[14px] text-[#0A0F1A] outline-none transition placeholder:text-[#9AA29B] hover:border-[#C5CEC5] focus:border-[#0A0F1A] focus:bg-white focus:ring-[3px] focus:ring-[#19D27A]/20';

const labelClass = 'mb-2 block text-[12px] font-semibold text-[#18251C]';

type Props = {
    supportEmail?: string;
    replyTime?: string;
    /** Default country dial code, e.g. "+91" */
    defaultCountryCode?: string;
    className?: string;
};

type FormData = {
    name: string;
    email: string;
    country_code: string;
    phone: string;
    subject: string;
    message: string;
    botcheck: boolean; // honeypot
};

type Errors = Partial<Record<keyof FormData | 'form', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(d: FormData): Errors {
    const errors: Errors = {};

    if (!d.name.trim()) errors.name = 'Please enter your name.';

    if (!d.email.trim()) errors.email = 'Please enter your email address.';
    else if (!EMAIL_RE.test(d.email.trim()))
        errors.email = 'Enter a valid email address.';

    const digits = d.phone.replace(/[\s-]/g, '');
    if (digits && !/^\d{6,14}$/.test(digits))
        errors.phone = 'Enter a valid phone number (6 to 14 digits).';

    if (!d.subject.trim()) errors.subject = 'Please pick a topic or write a subject.';

    if (d.message.trim().length < 10)
        errors.message = 'Please write at least 10 characters.';

    return errors;
}

export default function ContactForm({
    supportEmail = 'support@sitecare.com',
    replyTime = 'one working day',
    defaultCountryCode = '+91',
    className = '',
}: Props) {
    const emptyForm: FormData = {
        name: '',
        email: '',
        country_code: defaultCountryCode,
        phone: '',
        subject: '',
        message: '',
        botcheck: false,
    };

    const [data, setDataState] = useState<FormData>(emptyForm);
    const [errors, setErrors] = useState<Errors>({});
    const [processing, setProcessing] = useState(false);

    // First name of the person who just sent a message (null = show the form)
    const [sentTo, setSentTo] = useState<string | null>(null);

    const setData = <K extends keyof FormData>(key: K, value: FormData[K]) => {
        setDataState((prev) => ({ ...prev, [key]: value }));
        // clear that field's error as soon as the person edits it
        setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (processing) return;

        const found = validate(data);
        setErrors(found);
        if (Object.keys(found).length > 0) return;

        // Honeypot filled = bot. Pretend success, send nothing.
        if (data.botcheck) {
            setSentTo('there');
            return;
        }

        if (WEB3FORMS_ACCESS_KEY === 'PASTE_YOUR_ACCESS_KEY_HERE') {
            setErrors({
                form: 'Form is not connected yet: add your Web3Forms access key at the top of ContactForm.tsx.',
            });
            return;
        }

        const firstName = data.name.trim().split(' ')[0] || 'there';
        const phoneDigits = data.phone.replace(/[\s-]/g, '');
        const phoneFull = phoneDigits
            ? `${data.country_code} ${phoneDigits}`
            : 'Not provided';

        setProcessing(true);
        setErrors({});

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    from_name: 'SiteCare Website',
                    subject: `[SiteCare Contact] ${data.subject.trim()}`,
                    name: data.name.trim(),
                    email: data.email.trim(),
                    phone: phoneFull,
                    message: data.message.trim(),
                    botcheck: '',
                }),
            });

            const result = await res.json().catch(() => null);

            if (res.ok && result?.success) {
                setDataState(emptyForm);
                setSentTo(firstName);
            } else {
                setErrors({
                    form:
                        result?.message ||
                        `We could not send your message. Please try again or email ${supportEmail} directly.`,
                });
            }
        } catch {
            setErrors({
                form: `Network problem. Check your connection and try again, or email ${supportEmail} directly.`,
            });
        } finally {
            setProcessing(false);
        }
    };

    const phoneError = errors.phone;

    return (
        <div
            className={`rounded-[18px] border border-[#E2E5DE] bg-white p-5 shadow-[0_12px_40px_-30px_rgba(10,15,26,0.25)] sm:p-8 lg:p-9 ${className}`}
        >
            {sentTo ? (
                /* SUCCESS STATE */
                <div role="status" className="py-10 text-center sm:py-16">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DDF4E5] text-[#087A48]">
                        <Check size={25} strokeWidth={2.5} />
                    </span>

                    <h2
                        className={`${display} mt-6 text-[32px] font-semibold tracking-[-1px] text-[#12241B]`}
                    >
                        Got it, {sentTo}.
                    </h2>

                    <p className="mx-auto mt-3 max-w-[380px] text-[14px] leading-7 text-[#68766C]">
                        Your message is with the team. Expect a reply from{' '}
                        {supportEmail} within {replyTime}. Check spam if you
                        don't see it.
                    </p>

                    <button
                        type="button"
                        onClick={() => setSentTo(null)}
                        className="mt-8 text-[13px] font-semibold text-[#12241B] underline decoration-[#19D27A] decoration-2 underline-offset-4"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                /* FORM */
                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="relative space-y-6"
                >
                    {/* FORM HEADER */}
                    <div className="flex items-start justify-between gap-4 border-b border-[#E9ECE6] pb-6">
                        <div>
                            <p className="font-mono text-[10px] font-medium uppercase tracking-[1.5px] text-[#0B9B57]">
                                Send an enquiry
                            </p>

                            <h2
                                className={`${display} mt-3 text-[27px] font-semibold tracking-[-0.8px] text-[#0A0F1A]`}
                            >
                                Tell us what's going on.
                            </h2>

                            <p className="mt-2 text-[13px] leading-6 text-[#849087]">
                                A few details will help us get started.
                            </p>
                        </div>

                        <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#0B9B57] sm:flex">
                            <Mail size={17} />
                        </span>
                    </div>

                    {/* SEND ERROR */}
                    {errors.form && (
                        <div
                            role="alert"
                            className="flex items-start gap-3 rounded-[10px] border border-[#F4C7C3] bg-[#FEF3F2] px-4 py-3 text-[13px] leading-6 text-[#B42318]"
                        >
                            <AlertCircle size={16} className="mt-1 shrink-0" />
                            <span>{errors.form}</span>
                        </div>
                    )}

                    {/* HONEYPOT - hidden from humans, bots tick it */}
                    <div
                        aria-hidden="true"
                        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                    >
                        <label htmlFor="contact-botcheck">Leave empty</label>
                        <input
                            id="contact-botcheck"
                            type="checkbox"
                            tabIndex={-1}
                            autoComplete="off"
                            checked={data.botcheck}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setData('botcheck', e.target.checked)
                            }
                        />
                    </div>

                    {/* TOPIC */}
                    <fieldset>
                        <legend className={labelClass}>What's it about?</legend>

                        <div className="flex flex-wrap gap-2">
                            {TOPICS.map((topic) => {
                                const active = data.subject === topic;

                                return (
                                    <button
                                        key={topic}
                                        type="button"
                                        aria-pressed={active}
                                        onClick={() => setData('subject', topic)}
                                        className={`rounded-full border px-3.5 py-2.5 text-[12px] font-medium transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#19D27A]/20 ${
                                            active
                                                ? 'border-[#12241B] bg-[#12241B] text-white'
                                                : 'border-[#E0E5DE] bg-[#FAFBF9] text-[#536157] hover:border-[#A8B5A9] hover:bg-[#F2F6F1]'
                                        }`}
                                    >
                                        {topic}
                                    </button>
                                );
                            })}
                        </div>
                    </fieldset>

                    {/* NAME + EMAIL */}
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label htmlFor="contact-name" className={labelClass}>
                                Your name
                            </label>

                            <input
                                id="contact-name"
                                type="text"
                                autoComplete="name"
                                maxLength={100}
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="What should we call you?"
                                aria-invalid={!!errors.name}
                                className={`${fieldClass} h-[49px]`}
                            />

                            {errors.name && (
                                <p className="mt-1.5 text-[12px] text-[#B42318]">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="contact-email" className={labelClass}>
                                Email address
                            </label>

                            <input
                                id="contact-email"
                                type="email"
                                autoComplete="email"
                                maxLength={150}
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Where should we reply?"
                                aria-invalid={!!errors.email}
                                className={`${fieldClass} h-[49px]`}
                            />

                            {errors.email && (
                                <p className="mt-1.5 text-[12px] text-[#B42318]">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* PHONE (country code + number) */}
                    <div>
                        <label htmlFor="contact-phone" className={labelClass}>
                            Phone number{' '}
                            <span className="font-normal text-[#879187]">
                                (optional)
                            </span>
                        </label>

                        <div className="grid grid-cols-[132px_1fr] gap-3 sm:grid-cols-[170px_1fr]">
                            <select
                                id="contact-country-code"
                                aria-label="Country code"
                                autoComplete="tel-country-code"
                                value={data.country_code}
                                onChange={(e) =>
                                    setData('country_code', e.target.value)
                                }
                                className={`${fieldClass} h-[49px] cursor-pointer truncate pr-8`}
                            >
                                {COUNTRIES.map((c) => (
                                    <option key={c.iso} value={c.code}>
                                        {c.iso} ({c.code}) {c.name}
                                    </option>
                                ))}
                            </select>

                            <input
                                id="contact-phone"
                                type="tel"
                                inputMode="tel"
                                autoComplete="tel-national"
                                maxLength={15}
                                value={data.phone}
                                onChange={(e) =>
                                    // keep digits, spaces and dashes only
                                    setData(
                                        'phone',
                                        e.target.value.replace(/[^\d\s-]/g, ''),
                                    )
                                }
                                placeholder="98765 43210"
                                aria-invalid={!!phoneError}
                                className={`${fieldClass} h-[49px]`}
                            />
                        </div>

                        {phoneError && (
                            <p className="mt-1.5 text-[12px] text-[#B42318]">
                                {phoneError}
                            </p>
                        )}
                    </div>

                    {/* SUBJECT (also filled by the topic chips above) */}
                    <div>
                        <label htmlFor="contact-subject" className={labelClass}>
                            Subject
                        </label>

                        <input
                            id="contact-subject"
                            type="text"
                            maxLength={150}
                            value={data.subject}
                            onChange={(e) => setData('subject', e.target.value)}
                            placeholder="Pick a topic above or write your own"
                            aria-invalid={!!errors.subject}
                            className={`${fieldClass} h-[49px]`}
                        />

                        {errors.subject && (
                            <p className="mt-1.5 text-[12px] text-[#B42318]">
                                {errors.subject}
                            </p>
                        )}
                    </div>

                    {/* MESSAGE */}
                    <div>
                        <label htmlFor="contact-message" className={labelClass}>
                            What's going on?
                        </label>

                        <textarea
                            id="contact-message"
                            rows={5}
                            maxLength={5000}
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                            placeholder="Tell us about your website and what you need help with..."
                            aria-invalid={!!errors.message}
                            className={`${fieldClass} min-h-[145px] resize-y py-3.5 leading-6`}
                        />

                        {errors.message ? (
                            <p className="mt-1.5 text-[12px] text-[#B42318]">
                                {errors.message}
                            </p>
                        ) : (
                            <p className="mt-2 text-[12px] leading-5 text-[#879187]">
                                Your website address and what you last changed
                                help us the most.
                            </p>
                        )}
                    </div>

                    {/* SUBMIT */}
                    <div className="flex flex-col gap-4 border-t border-[#E9ECE6] pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-[290px] text-[12px] leading-5 text-[#879187]">
                            We only use your details to respond to your message.
                        </p>

                        <button
                            type="submit"
                            disabled={processing}
                            className="group inline-flex h-[49px] shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#12241B] px-7 text-[13px] font-semibold text-white transition hover:bg-[#19D27A] hover:text-[#12241B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#19D27A]/30 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {processing ? 'Sending...' : 'Send message'}

                            {!processing && (
                                <Send
                                    size={15}
                                    className="transition-transform group-hover:translate-x-0.5"
                                />
                            )}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
