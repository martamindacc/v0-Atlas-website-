'use client';

import { useEffect, useState, useRef } from 'react';
import SiteHeader from '@/components/site-header';

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
      <section className="relative h-screen w-full overflow-hidden bg-[#e5e5e5]">
        <img
          ref={heroImageRef}
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
          <h2 className={`font-sans text-[52px] md:text-[68px] lg:text-[92px] leading-[1.02] tracking-[-0.03em] font-light text-[#111] transition-all duration-[900ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            Transforming how
            <br />
            people think and decide
          </h2>
        </div>
      </section>

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
            Yet the tools we rely on were designed for a different world — a world where problems were smaller, slower, and easier to isolate.
          </p>

          <p className="text-[20px] leading-[1.8] font-light">
            We help people see complexity more clearly. Not by reducing it, but by understanding it.
          </p>

          <div className="pt-8">
            <h3 className="text-[24px] font-medium text-[#111] mb-6">From Tools to Systems</h3>

            <p className="text-[20px] leading-[1.8] font-light">
              For centuries, human progress has been driven by tools that extend our physical abilities: engines that multiply our strength, machines that amplify our reach, computers that accelerate calculation.
            </p>

            <p className="text-[20px] leading-[1.8] font-light mt-6">
              But the defining challenge of our era is not physical. It is cognitive.
            </p>

            <p className="text-[20px] leading-[1.8] font-light mt-6">
              We are surrounded by information, yet the structure beneath it often remains invisible — the relationships between signals, incentives, and outcomes that shape how the world actually behaves.
            </p>

            <p className="text-[20px] leading-[1.8] font-light mt-6">
              What is needed now are systems that help people reason. Systems that illuminate connections, reveal patterns, and allow ideas to evolve through dialogue.
            </p>
          </div>

          <div className="pt-8">
            <h3 className="text-[24px] font-medium text-[#111] mb-6">Designing for Thinking</h3>

            <p className="text-[20px] leading-[1.8] font-light">
              Just as architecture shapes how people inhabit space, intellectual systems shape how people think.
            </p>

            <p className="text-[20px] leading-[1.8] font-light mt-6">
              Designing such systems requires more than engineering alone. It requires the integration of disciplines that rarely meet: computation, behavioral science, philosophy, decision theory, and design.
            </p>

            <p className="text-[20px] leading-[1.8] font-light mt-6">
              The goal is not to automate judgment. It is to augment it.
            </p>

            <p className="text-[20px] leading-[1.8] font-light mt-6">
              To create environments where ideas can be explored more deeply, trade-offs understood more clearly, and decisions made with greater awareness of their consequences.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
