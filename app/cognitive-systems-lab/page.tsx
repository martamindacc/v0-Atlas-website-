"use client";

import { useEffect, useState, useRef } from "react";
import SiteHeader from "@/components/site-header";

export default function CognitiveSystemsLab() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);

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
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallaxOffset(scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (heroImageRef.current) {
      heroImageRef.current.style.transform = `translateY(${parallaxOffset}px)`;
    }
  }, [parallaxOffset]);

  return (
    <div className="bg-[#fafafb] min-h-screen w-full">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden bg-[#e5e5e5]">
        <img
          ref={heroImageRef}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cog1-f6WFrce5rff43mP4y5KraAyCixOJ2U.jpg"
          alt="Cognitive Systems Lab"
          className="absolute inset-0 w-full h-full object-cover"
        />
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
          <h2 className={`font-sans text-[68px] leading-[1.03] tracking-[-0.04em] font-medium text-[#111] transition-all duration-[900ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            Computational model
            <br />
            of your reasoning patterns
          </h2>
          <p
            className={`mt-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-[900ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ color: "#6b6e85" }}
          >
            Our work explores how computational systems can augment human reasoning, decision-making, and strategic thinking.
          </p>
        </div>
      </section>

      {/* Footer */}
      <section className="w-full bg-[#efefef] py-[140px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-12 gap-x-12 items-start">
            {/* Left — headline */}
            <div className="col-span-6 flex flex-col justify-between">
              <h2
                className="text-[52px] font-medium tracking-tight text-neutral-900 max-w-[520px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Human intelligence,<br />amplified.
              </h2>
              <p className="text-[12px] text-[#6B7280]">© 2026 Mindacc. All rights reserved.</p>
            </div>

            {/* Right — explanatory text */}
            <div className="col-span-5 col-start-8 text-[18px] leading-[1.6] text-[#383838] max-w-[420px] space-y-6">
              <p>Atlas understands how people think and work across your organization — anticipating patterns, revealing misalignment, and helping you act with precision when it matters.</p>
              <p>Always on. Always in context.</p>
              <p>Built to support how work actually unfolds.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
