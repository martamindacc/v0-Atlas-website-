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
          <h2 className={`font-sans text-[68px] leading-[1.04] tracking-[-0.035em] font-medium text-[#111] transition-all duration-[900ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
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
    </div>
  );
}
