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
        <div className="absolute bottom-16 left-16 z-20 pointer-events-none">
          <h1 className="font-sans text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-white">
            Atlas Professional
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#fafafb] py-40">
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-2 gap-24 items-start">

          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-[48px] leading-[1.05] tracking-[-0.02em] font-medium text-[#111]">
              Atlas Professional
            </h2>

            <p className="text-[20px] text-[#6b7280] mt-6">
              Personal behavioral intelligence
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="text-[18px] leading-[1.75] text-[#374151] max-w-[520px] space-y-6">

            <p>
              Atlas Professional builds a computational model of your reasoning patterns.
            </p>

            <p>
              It becomes the foundation for how Atlas works with you, helping you explore decisions, examine alternatives, and understand the dynamics shaping your judgment.
            </p>

          </div>

        </div>
      </section>
    </div>
  );
}
