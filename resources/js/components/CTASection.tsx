import { useState } from "react";
import type { FormEvent } from "react";

type FormStatus = {
  type: "success" | "error" | "";
  message: string;
};

// FORM SUBMIT FUNCTION - OUTSIDE COMPONENT
async function handleTrialSubmit(
  email: string,
  setStatus: (status: FormStatus) => void,
  setLoading: (loading: boolean) => void
) {
  setLoading(true);
  setStatus({ type: "", message: "" });

  try {
    const response = await fetch("/start-free-trial", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRF-TOKEN":
          document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')
            ?.content ?? "",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.errors?.email?.[0] ||
          data.message ||
          "Something went wrong. Please try again."
      );
    }

    setStatus({
      type: "success",
      message:
        data.message || "Successfully submitted! We will contact you soon.",
    });
  } catch (error) {
    setStatus({
      type: "error",
      message:
        error instanceof Error
          ? error.message
          : "Unable to submit. Please try again.",
    });
  } finally {
    setLoading(false);
  }
}

// CTA COMPONENT
export default function CTASection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleTrialSubmit(email, setStatus, setLoading);
  };

  return (
    <section className="w-full px-0 py-16 sm:px-8">
      <div className="relative mx-auto flex min-h-[504px] w-full max-w-[1320px] flex-col items-center justify-center overflow-hidden rounded-[40px] bg-[#0A0F1A] px-5 py-[110px] text-center sm:px-12">
        {/* GREEN BACKGROUND GLOW */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[380px] w-[820px] -translate-x-1/2 rounded-full bg-[#19D27A33] blur-[120px]"
        />

        {/* CONTENT */}
        <div className="relative z-10 flex w-full flex-col items-center">
          {/* HEADING */}
          <h2 className="max-w-[929px] font-['Bricolage_Grotesque'] text-[42px] font-semibold leading-[1.06] tracking-[-2.1px] text-white sm:text-[56.8px] sm:leading-[60px]">
            Give your clients{" "}
            <span className="font-serif font-normal italic tracking-[-2px] text-[#16D17B]">
              proof,
            </span>{" "}
            not promises.
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-[545px] font-sans text-[18px] font-normal leading-7 text-white/60">
            Connect your first site in five minutes and send your first report
            this month.
          </p>

          {/* EMAIL FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex h-[68px] w-full max-w-[512px] items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.10] p-2"
          >
            <input
              type="email"
              required
              disabled={loading}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus({ type: "", message: "" });
              }}
              placeholder="you@youragency.in"
              className="cta-email-input h-full min-w-0 flex-1 bg-none px-4 font-sans text-[14px] text-white outline-none placeholder:text-white/40 disabled:opacity-50 sm:px-5"
            />

            <button
              type="submit"
              disabled={loading}
              className="h-full shrink-0 rounded-full bg-[#16D17B] px-5 font-sans text-[13px] font-semibold text-[#07121A] transition-colors hover:bg-[#12BD6D] disabled:cursor-not-allowed disabled:opacity-60 sm:px-7"
            >
              {loading ? "Sending..." : "Start free trial"}
            </button>
          </form>

          {/* SUCCESS / ERROR MESSAGE */}
          {status.message && (
            <div
              role="status"
              aria-live="polite"
              className={`mt-4 max-w-[512px] text-[13px] font-medium ${
                status.type === "success" ? "text-[#16D17B]" : "text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}

          {/* FOOTNOTE */}
          <p className="mt-4 text-center font-sans text-[12px] leading-5 text-white/40">
            Design partners get free beta access and direct founder support on
            WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
