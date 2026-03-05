"use client";

import { useEffect, useState, useRef } from "react";
import SiteHeader from "@/components/site-header";

export default function AtlasProfessional() {
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);
  const [visibleHeaders, setVisibleHeaders] = useState({});
  const headerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.45 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          setVisibleHeaders((prev) => ({
            ...prev,
            [index]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.45 }
    );

    headerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

      {/* Section 1 — Concept hero text */}
      <section
        ref={heroRef}
        className="bg-[#fafafb] py-56 flex items-center justify-center"
      >
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <h2 className={`font-sans text-[96px] leading-[1.04] tracking-[-0.035em] font-medium text-[#111] transition-all duration-[900ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            Computational model
            <br />
            of your reasoning patterns
          </h2>
        </div>
      </section>

      {/* Section 2 — Editorial product section */}
      <section className="bg-[#fafafb] pb-[100px] pt-48">
        <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-2 gap-24 overflow-x-clip">

          {/* LEFT COLUMN (HEADER) */}
          <div
            ref={(el) => (headerRefs.current[0] = el)}
            data-index="0"
            className={`sticky top-32 self-start min-w-0 transition-transform duration-[900ms] ease-out ${
              visibleHeaders[0] ? "translate-y-0" : "translate-y-16"
            }`}
          >
            <h3 className="font-sans text-[64px] leading-[1.05] tracking-[-0.03em] font-medium text-[#111]">
              A reasoning partner
              <br />
              for complex decisions
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-h-[140vh] min-w-0">
            <div className="text-[24px] leading-[1.75] text-[#374151] space-y-6 max-w-[520px]">
              <p>
                Atlas is designed to help people think through problems that do not have obvious answers.
              </p>
              <p>
                Because the system is grounded in your cognitive model, the dialogue evolves with the way you naturally reason.
              </p>
            </div>

            <div className="mt-16">
              <img
                src="/images/atlas-interface-placeholder.jpg"
                alt="Atlas interface"
                className="w-full max-w-[900px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Section 3 — Editorial product section */}
      <section className="bg-[#fafafb] pt-[100px] pb-48">
        <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-2 gap-24 overflow-x-clip">

          {/* LEFT COLUMN (HEADER) */}
          <div
            ref={(el) => (headerRefs.current[1] = el)}
            data-index="1"
            className={`sticky top-32 self-start min-w-0 transition-transform duration-[900ms] ease-out ${
              visibleHeaders[1] ? "translate-y-0" : "translate-y-16"
            }`}
          >
            <h3 className="font-sans text-[64px] leading-[1.05] tracking-[-0.03em] font-medium text-[#111]">
              A reasoning partner
              <br />
              for complex decisions
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-h-[140vh] min-w-0">
            <div className="text-[24px] leading-[1.75] text-[#374151] space-y-6 max-w-[520px]">
              <p>
                Atlas is designed to help people think through problems that do not have obvious answers.
              </p>
              <p>
                Because the system is grounded in your cognitive model, the dialogue evolves with the way you naturally reason.
              </p>
            </div>

            <div className="mt-16">
              <img
                src="/images/atlas-interface-placeholder.png"
                alt="Atlas interface"
                className="w-full max-w-[900px]"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
