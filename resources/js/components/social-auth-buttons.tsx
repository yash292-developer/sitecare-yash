const GOOGLE_AUTH_URL = '/auth/google/redirect';
const GITHUB_AUTH_URL = '/auth/github/redirect';

const socialButtonClass =
    'flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#DEDDD3] bg-white px-2 text-[13px] font-medium text-[#10120F] transition hover:bg-[#F7F6F2] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#18B96B]/30';

function withInvitation(url: string, invitation?: string | null) {
    return invitation
        ? `${url}?invitation=${encodeURIComponent(invitation)}`
        : url;
}

type Props = {
    invitation?: string | null;
};

// Divider + Google / GitHub buttons in one row.
// Plain <a> links on purpose: they leave the app (not an Inertia visit).
export default function SocialAuthButtons({ invitation }: Props) {
    return (
        <div className="mt-6">
            <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-[#DEDDD3]" />
                <span className="whitespace-nowrap text-[11px] font-medium text-[#85877E]">
                    OR CONTINUE WITH
                </span>
                <div className="h-px flex-1 bg-[#DEDDD3]" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                    href={withInvitation(GOOGLE_AUTH_URL, invitation)}
                    data-test="google-auth-button"
                    className={socialButtonClass}
                >
                    <svg
                        viewBox="0 0 48 48"
                        className="size-5 shrink-0"
                        aria-hidden="true"
                    >
                        <path
                            fill="#4285F4"
                            d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
                        />
                        <path
                            fill="#34A853"
                            d="M24 44c5.6 0 10.3-1.8 13.7-4.9l-6.6-5.1c-1.8 1.2-4.1 1.9-7.1 1.9-5.4 0-10-3.6-11.7-8.4H5.5v5.3A20 20 0 0 0 24 44Z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M12.3 27.5a12 12 0 0 1 0-7V15.2H5.5a20 20 0 0 0 0 17.6l6.8-5.3Z"
                        />
                        <path
                            fill="#EA4335"
                            d="M24 12.1c3.1 0 5.9 1.1 8.1 3.3l6.1-6.1C34.5 5.9 29.6 4 24 4A20 20 0 0 0 5.5 15.2l6.8 5.3c1.7-4.8 6.3-8.4 11.7-8.4Z"
                        />
                    </svg>
                    <span className="truncate">Google</span>
                </a>

                <a
                    href={withInvitation(GITHUB_AUTH_URL, invitation)}
                    data-test="github-auth-button"
                    className={socialButtonClass}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 shrink-0"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .4.2.7.8.6A11.1 11.1 0 0 0 12 .9Z"
                        />
                    </svg>
                    <span className="truncate">GitHub</span>
                </a>
            </div>
        </div>
    );
}
