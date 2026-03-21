import { useEffect, useState, useRef } from 'react';
import SiteHeader from '@/components/site-header';
import MissionGlobeScroll from '@/components/mission-globe-scroll';

export default function AtlasMission() {
  const [heroVisible, setHeroVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#fafafb]">
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

      {/* Section 1 — Concept hero text */}
      <section
        ref={heroRef}
        className="bg-[#fafafb] py-40 flex items-center justify-center"
      >
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <h2 className={`font-sans text-[68px] leading-[1.03] tracking-[-0.04em] font-medium text-[#111] transition-all duration-[900ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            Transforming how
            <br />
            people think and decide
          </h2>
        </div>
      </section>

      {/* Mission Globe Scroll */}
      <MissionGlobeScroll />

      {/* Mission Editorial Section */}
      <section className="bg-[#fafafb] py-32">
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
