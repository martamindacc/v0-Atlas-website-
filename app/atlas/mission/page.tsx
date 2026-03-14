'use client';

import { useEffect, useState, useRef } from 'react';
import SiteHeader from '@/components/site-header';

export default function AtlasMission() {
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
          <h2 className={`font-sans text-[96px] leading-[1.04] tracking-[-0.035em] font-medium text-[#111] transition-all duration-[900ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            Transforming how
            <br />
            people think and decide
          </h2>
        </div>
      </section>

      {/* Section 2 — Editorial product section */}
      <section className="bg-[#fafafb] pb-[100px] pt-24">
        <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-2 gap-24 overflow-x-clip">

          {/* LEFT COLUMN (HEADER) */}
          <div
            className={`sticky top-32 self-start min-w-0 transition-transform duration-[900ms] ease-out translate-y-0`}
          >
            <h3 className="font-sans text-[64px] leading-[1.05] tracking-[-0.03em] font-medium text-[#111]">
              Advancing
              <br />
              <span
                data-text="cognitive systems"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-h-[140vh] min-w-0">
            <div className="text-[24px] leading-[1.75] text-[#374151] space-y-6 max-w-[520px]">
              <p>
                We believe that better thinking leads to better decisions and better outcomes.
              </p>
              <p>
                Our mission is to build systems that enhance human reasoning and unlock the potential in every person and organization.
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
            className={`sticky top-32 self-start min-w-0 transition-transform duration-[900ms] ease-out translate-y-0`}
          >
            <h3 className="font-sans text-[64px] leading-[1.05] tracking-[-0.03em] font-medium text-[#111]">
              Building for
              <br />
              <span
                data-text="the future"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-h-[140vh] min-w-0">
            <div className="text-[24px] leading-[1.75] text-[#374151] space-y-6 max-w-[520px]">
              <p>
                We invest in research and development to create cognitive technologies that are accessible to everyone.
              </p>
              <p>
                Through partnerships and innovation, we aim to democratize advanced reasoning capabilities and support human progress.
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
