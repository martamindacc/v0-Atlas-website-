'use client';

import { useEffect, useState, useRef } from 'react';
import SiteHeader from '@/components/site-header';
import MissionGlobeScroll from '@/components/mission-globe-scroll';

export default function AtlasMission() {
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

  useEffect(() => {
    const typingState = new WeakMap();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const fullText = el.dataset.text;

          if (entry.isIntersecting) {
            if (typingState.get(el)) return;

            typingState.set(el, true);

            let i = 0;
            el.textContent = '';

            const type = () => {
              if (i < fullText.length) {
                el.textContent += fullText.charAt(i);
                i++;
                setTimeout(type, 35);
              } else {
                typingState.set(el, false);
              }
            };

            type();
          } else {
            el.textContent = '';
            typingState.set(el, false);
          }
        });
      },
      { threshold: 0.45 }
    );

    const typedElements = document.querySelectorAll('.typed-header');
    typedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#fafafb] min-h-screen w-full">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden bg-[#e5e5e5]">
        <img
          ref={heroImageRef}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cog1-CmUG27pwNrSS461m6T1rwIV7KU7Tig.jpg"
          alt="Mission"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-4 md:bottom-16 md:left-16 z-10 pointer-events-none">
          <h1 className="font-sans text-[36px] md:text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-white">
            Mission
          </h1>
        </div>
      </section>

      {/* Section 1 — Concept hero text */}
      <section
        ref={heroRef}
        className="bg-[#fafafb] py-12 md:py-40 flex items-center justify-center"
      >
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 text-center">
          <h2 className={`font-sans text-[28px] md:text-[68px] leading-[1.1] md:leading-[1.03] tracking-[-0.04em] font-medium text-[#111] transition-all duration-[900ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            Transforming how people work together
          </h2>
        </div>
      </section>

      {/* Mission Globe Scroll */}
      <MissionGlobeScroll />

      {/* Mission Editorial Section */}
      <section className="w-full bg-[#efefef] py-12 md:py-[60px] pt-16 md:pt-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-x-12 items-start">
            {/* Left — headline */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <h2
                className="text-[32px] md:text-[52px] font-medium tracking-tight text-neutral-900 max-w-[520px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                People Intelligence for Modern Teams
              </h2>
              <p className="text-[12px] text-[#6B7280] mt-8 hidden md:block">© 2026 Mindacc. All rights reserved.</p>
            </div>

            {/* Right — explanatory text */}
            <div className="md:col-span-5 md:col-start-8 text-[16px] md:text-[18px] leading-[1.6] text-[#383838] max-w-[420px] space-y-4 md:space-y-6">
              <p>Atlas helps organizations understand how people work, communicate, and collaborate — turning people intelligence into better decisions and stronger teams.</p>
              <p className="font-semibold">Always available. Always in context.</p>
              <p className="font-semibold">Built for how work actually happens.</p>
            </div>
            
            <p className="text-[12px] text-[#6B7280] md:hidden">© 2026 Mindacc. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
