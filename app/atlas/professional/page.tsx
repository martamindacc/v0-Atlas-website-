import SiteHeader from "@/components/site-header";

export default function AtlasProfessional() {
  return (
    <div className="bg-[#fafafb] min-h-screen w-full">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/atlas-professional.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/atlas-professional.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center text-center px-6">
            <h1
              className="text-[64px] font-medium tracking-tight text-white"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Atlas Professional
            </h1>
            <p
              className="mt-6 max-w-[640px] text-[20px] text-white/80 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Personal behavioral intelligence
            </p>
          </div>
        </div>
        <div className="absolute bottom-20 left-20 z-20 pointer-events-none">
          <h1 className="font-[Inter] text-[88px] leading-[0.98] tracking-[-0.035em] font-semibold text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
            Atlas Professional
          </h1>
        </div>
      </section>
    </div>
  );
}
