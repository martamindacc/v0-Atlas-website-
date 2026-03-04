export default function Home() {
  return (
    <main style={{ backgroundColor: "#fafafb" }}>
      {/* ── Sticky header wrapper ── */}
      <div className="sticky top-0 z-50 w-full pt-[14px] px-6">
        <header
          className="flex items-center justify-between px-8 h-[67px] border border-black/[0.06] backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_3px_rgba(0,0,0,0.06)] rounded-[14px]"
          style={{ backgroundColor: "rgba(250,250,251,0.55)" }}
        >
          {/* Left — Logo + wordmark */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/images/mindacc_logo.png"
              alt="mindacc logo"
              className="h-7 w-auto"
            />
            <span
              className="text-[18px] font-medium tracking-[0.06em] text-neutral-700 uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              MINDACC
            </span>
          </a>

          {/* Right — Controls cluster */}
          <div className="flex items-center gap-3">
            {/* Get Started CTA */}
            <button
              className="flex items-center justify-center border border-black/30 bg-white/80 text-[#1e1f2b] text-[15px] font-medium tracking-tight px-6 h-[40px] hover:bg-[#1e2124] hover:text-white hover:border-[#1e2124] transition-colors cursor-pointer"
            >
              Get Started
            </button>

            {/* Search icon */}
            <button
              className="flex items-center justify-center w-[40px] h-[40px] border border-black/30 bg-white/80 text-[#1e1f2b] hover:bg-[#1e2124] hover:text-white hover:border-[#1e2124] transition-colors cursor-pointer"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Menu icon */}
            <button
              className="flex items-center justify-center w-[40px] h-[40px] border border-black/30 bg-white/80 text-[#1e1f2b] hover:bg-[#1e2124] hover:text-white hover:border-[#1e2124] transition-colors cursor-pointer"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </header>
      </div>

      {/* Section 1 — Full-screen video */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          {/* Replace src with your actual video file */}
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay so logo stays readable */}
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* Section 2 — Big central statement */}
      <section
        className="w-full min-h-screen flex items-center justify-center px-6 py-24"
        style={{ backgroundColor: "#fafafb" }}
      >
        <div className="max-w-6xl w-full text-center">
          <h2
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-bold leading-[1.08] tracking-tight text-balance"
            style={{
              color: "#1e1f2b",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Behavioral AI that understands{" "}
            <span style={{ color: "#a0a3b1" }}>why</span> people do what they do.
          </h2>
          <p
            className="mt-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#6b6e85" }}
          >
            mindacc is a behavioral AI software platform that predicts,
            explains, and influences human decision-making — at scale.
          </p>
        </div>
      </section>
    </main>
  );
}
