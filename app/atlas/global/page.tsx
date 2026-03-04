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
        <div className="absolute bottom-[48px] left-[48px] z-20 pointer-events-none">
          <h1 className="font-sans text-[64px] font-medium tracking-[-0.02em] leading-[1.05] text-white">
            Atlas Global
          </h1>
        </div>
      </section>
    </div>
  );
}
