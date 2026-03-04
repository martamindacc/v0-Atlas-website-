import SiteHeader from "@/components/site-header";

export default function AtlasGlobal() {
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
          poster="/images/atlas-global.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/atlas-global.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-16 left-16 z-10">
          <h1
            className="text-[80px] leading-[1.02] tracking-[-0.03em] font-medium text-white"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Atlas Global
          </h1>
        </div>
      </section>
    </div>
  );
}
