
const plugins = [
  {
    name: "WooCommerce",
    color: "#96588A",
    svg: (
      <>
        <rect x="4" y="10" width="56" height="40" rx="12" />
        <path d="M12 20h7l4 17 6-13h6l6 13 5-17h7L45 42h-7l-6-12-6 12h-7z" fill="white" />
      </>
    ),
  },
  {
    name: "Elementor",
    color: "#92003B",
    svg: (
      <>
        <rect x="6" y="6" width="52" height="52" rx="10" />
        <path d="M16 16h5v32h-5zM27 16h21v5H27zM27 29h21v5H27zM27 43h21v5H27z" fill="white" />
      </>
    ),
  },
  {
    name: "Yoast SEO",
    color: "#A4286A",
    svg: (
      <>
        <rect x="5" y="5" width="54" height="54" rx="12" />
        <path d="M15 15h10l13 23-12 14H16l12-14z" fill="white" />
        <circle cx="44" cy="18" r="5" fill="white" />
        <path d="M40 28h8v24h-8z" fill="white" />
      </>
    ),
  },
  {
    name: "UpdraftPlus",
    color: "#1684C7",
    svg: (
      <>
        <path d="M32 5 8 33h16v18h16V33h16z" />
        <path d="M10 53h44v6H10z" />
      </>
    ),
  },
  {
    name: "Rank Math",
    color: "#F5A623",
    svg: (
      <>
        <path d="M8 8h28c13 0 20 7 20 17 0 8-5 13-12 15l14 16H44L30 40h-8v16H8z" />
        <path d="M22 17v16h14c5 0 8-3 8-8s-3-8-8-8z" fill="white" />
      </>
    ),
  },
  {
    name: "Contact Form 7",
    color: "#2479B8",
    svg: (
      <>
        <rect x="5" y="5" width="54" height="54" rx="10" />
        <path d="M14 15h36v7H21v7h27v7H21v9h29v7H14z" fill="white" />
      </>
    ),
  },
  {
    name: "WPForms",
    color: "#2B70C9",
    svg: (
      <>
        <rect x="5" y="5" width="54" height="54" rx="10" />
        <path d="M15 16h34v6H15zM15 29h23v6H15zM15 42h17v6H15z" fill="white" />
        <path d="m37 42 5 5 9-12" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    name: "Divi",
    color: "#6C2EB9",
    svg: (
      <>
        <circle cx="32" cy="32" r="27" />
        <path d="M17 17h16c12 0 18 6 18 15s-6 15-18 15H17z" fill="white" />
        <path d="M26 25h7c5 0 8 3 8 7s-3 7-8 7h-7z" fill="#6C2EB9" />
      </>
    ),
  },
  {
    name: "Jetpack",
    color: "#0694DD",
    svg: (
      <>
        <path d="M8 8h20v20H8zM36 8h20v20H36zM8 36h20v20H8zM36 36h20v20H36z" />
        <path d="M28 18h8v28h-8z" fill="white" />
      </>
    ),
  },
  {
    name: "Wordfence",
    color: "#B3262D",
    svg: (
      <>
        <path d="M32 4 56 14v17c0 14-10 24-24 29C18 55 8 45 8 31V14z" />
        <path d="M19 17h26v6H25v8h15v6H25v14h-6z" fill="white" />
      </>
    ),
  },
];

export default function PluginsSection() {
  return (
    <section
      id="product"
      className="w-full overflow-hidden border-y border-[#E7E5DE] bg-white py-20"
    >
      <div className="mx-auto flex w-full flex-col items-center gap-8">

        <p className="text-center font-sans text-[11px] font-semibold uppercase leading-[16.5px] tracking-[1.98px] text-[#6B7280]">
          Tracks the plugins and tools you already run
        </p>

        <div className="relative w-full overflow-hidden">

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

          <div className="flex w-max animate-[plugin-scroll_30s_linear_infinite] items-center hover:[animation-play-state:paused]">

            {[1, 2].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center gap-12 px-8 sm:gap-16"
                aria-hidden={group === 2 ? "true" : undefined}
              >
                {plugins.map((plugin) => (
                  <div
                    key={`${group}-${plugin.name}`}
                    className="group flex shrink-0 items-center gap-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      width="40"
                      height="40"
                      fill={plugin.color}
                      className="h-9 w-9 shrink-0 opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-10 sm:w-10"
                    >
                      {plugin.svg}
                    </svg>

                    <span className="whitespace-nowrap font-sans text-[18px] font-semibold leading-7 tracking-[-0.5px] text-[#0a0f1a]/50 transition-colors duration-300 group-hover:text-[#0A0F1A]">
                      {plugin.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
