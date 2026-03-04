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
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-16 left-16 z-10">
          <h1
            className="text-[80px] leading-[1.02] tracking-[-0.03em] font-medium text-white"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Atlas Teams
          </h1>
        </div>
      </section>
    </div>
  );
}
