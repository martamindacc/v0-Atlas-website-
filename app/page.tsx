export default function Home() {
  return (
    <main style={{ backgroundColor: "#fafafb" }}>
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
        {/* Logo / wordmark */}
        <div className="absolute top-8 left-8 z-10">
          <span
            className="text-xl font-semibold tracking-tight text-white"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            mindacc
          </span>
        </div>
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
