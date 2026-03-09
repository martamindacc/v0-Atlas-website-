"use client";

import { useEffect, useState, useRef } from "react";
import SiteHeader from "@/components/site-header";

export default function CognitiveSystemsLab() {
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);

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

  return (
    <div className="bg-[#fafafb] min-h-screen w-full">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden bg-[#e5e5e5]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/cognitive-systems-lab.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-16 left-16 z-20 pointer-events-none">
          <h1 className="font-sans text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-white">
            Cognitive Systems Lab
          </h1>
        </div>
      </section>

      {/* Section 1 — Concept hero text */}
      <section
        ref={heroRef}
        className="bg-[#fafafb] py-40 flex items-center justify-center"
      >
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <h2 className={`font-sans text-[96px] leading-[1.04] tracking-[-0.035em] font-medium text-[#111] transition-all duration-[900ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            Research on human cognition
            <br />
            and intelligent systems
          </h2>
          <p
            className={`mt-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-[900ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ color: "#6b6e85" }}
          >
            Our work explores how computational systems can augment human reasoning, decision-making, and strategic thinking.
          </p>
        </div>
      </section>
    </div>
  );
}
