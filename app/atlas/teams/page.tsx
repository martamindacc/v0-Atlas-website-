import SiteHeader from "@/components/site-header";

export default function AtlasTeams() {
  return (
    <div className="bg-[#fafafb] min-h-screen w-full">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/images/atlas-teams.jpg"
          alt="Atlas Teams"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center text-center px-6">
            <h1
              className="text-[64px] font-medium tracking-tight text-white"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Atlas Teams
            </h1>
            <p
              className="mt-6 max-w-[640px] text-[20px] text-white/80 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Team intelligence
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
