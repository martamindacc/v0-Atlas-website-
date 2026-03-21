"use client";

import { useEffect, useRef } from "react";
import SiteHeader from "@/components/site-header";
import MissionGlobeVisual from "@/components/mission-globe-visual";

export default function AtlasMission() {
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const globeSectionRef = useRef<HTMLElement | null>(null);
  const globeWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const section = globeSectionRef.current;
      const heroText = heroTextRef.current;
      const globeWrap = globeWrapRef.current;
      if (!section || !heroText || !globeWrap) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh * 0.95;
      const end = -vh * 0.2;
      const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));

      const translateY = (1 - p) * 14; // starts slightly below viewport
      const scale = 1 + p * 0.1; // 1 -> 1.1

      globeWrap.style.transform = `translate3d(0, ${translateY}vh, 0) scale(${scale})`;
      heroText.style.opacity = String(1 - Math.min(1, p * 1.25));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="bg-[#fafafb] min-h-screen w-full">
      <SiteHeader />

      {/* Hero image */}
      <section className="relative h-screen w-full overflow-hidden bg-[#e5e5e5]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mission-99w9ZKc7axAKIuSGaKNwiSSArBvB8C.jpg"
          alt="Mission"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-16 left-16 z-10 pointer-events-none">
          <h1 className="font-sans text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-white">
            Mission
          </h1>
        </div>
      </section>

      {/* Hero statement (calm, static, slight bottom breathing space) */}
      <section className="relative z-20 bg-[#fafafb] min-h-[90vh] pb-24 flex items-center justify-center">
        <div
          ref={heroTextRef}
          className="max-w-[1100px] mx-auto px-8 text-center transition-opacity duration-500 ease-out"
        >
          <h2 className="font-sans text-[68px] leading-[1.03] tracking-[-0.04em] font-medium text-[#111]">
            Transforming how
            <br />
            people think and decide
          </h2>
        </div>
      </section>

      {/* Globe rises under hero */}
      <section
        ref={globeSectionRef}
        className="relative z-10 -mt-[22vh] min-h-[120vh] bg-[#fafafb]"
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          <div
            ref={globeWrapRef}
            className="will-change-transform transition-transform duration-500 ease-out"
          >
            <MissionGlobeVisual className="w-[min(82vh,90vw)]" />
          </div>
        </div>
      </section>

      {/* Mission text section (static) */}
      <section className="relative z-20 bg-[#fafafb] py-32">
        <div className="max-w-[800px] mx-auto px-8 space-y-8 text-[#374151]">
          <p className="text-[20px] leading-[1.8] font-light">
            The problems shaping our future are no longer simple.
          </p>
          <p className="text-[20px] leading-[1.8] font-light">
            They unfold across networks of people, incentives, information, and time. Decisions ripple outward, influencing systems that extend far beyond the moment in which they are made.
          </p>
          <p className="text-[20px] leading-[1.8] font-light">
            Yet the tools we rely on were designed for a different world - a world where problems were smaller, slower, and easier to isolate.
          </p>
          <p className="text-[20px] leading-[1.8] font-light">
            We help people see complexity more clearly. Not by reducing it, but by understanding it.
          </p>
        </div>
      </section>
    </div>
  );
}
