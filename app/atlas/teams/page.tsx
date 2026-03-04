import SiteHeader from "@/components/site-header";

export default function AtlasTeams() {
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
          poster="/images/atlas-teams.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/atlas-teams.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-16 left-16 z-20 pointer-events-none">
          <h1 className="font-sans text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-white">
            Atlas Teams
          </h1>
        </div>
      </section>
    </div>
  );
}
