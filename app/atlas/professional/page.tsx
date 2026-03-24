"use client";

import { useEffect, useState, useRef } from "react";
import SiteHeader from "@/components/site-header";

export default function AtlasProfessional() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const heroRef = useRef(null);
  const heroVideoRef = useRef(null);

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
    if (heroVideoRef.current) {
      heroVideoRef.current.style.transform = `translateY(${parallaxOffset}px)`;
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
            if (typingState.get(el)) return; // prevent duplicate loops

            typingState.set(el, true);

            let i = 0;
            el.textContent = "";

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
            el.textContent = "";
            typingState.set(el, false);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    const typedElements = document.querySelectorAll(".typed-header");
    typedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#fafafb] min-h-screen w-full overflow-x-hidden">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden bg-[#e5e5e5]">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product_pro-ijCm9qkPopmgIfPyr8zbDEWDSnZLFR.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-16 left-16 z-20 pointer-events-none md:bottom-16 md:left-16 sm:bottom-8 sm:left-6">
          <h1 className="font-sans text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-white md:text-[88px] sm:text-[48px] xs:text-[36px]">
            Atlas Professional
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] leading-[1.6] text-white/85 max-w-2xl md:text-[clamp(1rem,2vw,1.25rem)] sm:text-[14px]" style={{ fontFamily: "Inter, sans-serif", marginTop: "0.75rem" }}>
            Make better people decisions — with clarity on how others think, respond, and work.
          </p>
        </div>

        {/* Chat Bubbles Overlay */}
        <div className="absolute inset-0 flex items-end justify-end pb-24 pr-[28px] z-10 pointer-events-none md:pb-24 md:pr-[28px] sm:pb-6 sm:pr-4 sm:bottom-0 sm:left-0 sm:right-0 sm:flex sm:flex-col sm:items-center sm:justify-center">
          <div className="flex flex-col gap-4 max-w-[420px] md:max-w-[420px] sm:w-[95%] sm:max-w-none">
            {/* Bubble 1 - Atlas */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-[18px] px-5 py-4 md:px-5 md:py-4 sm:px-4 sm:py-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(56, 94, 113, 0.7)' }}></div>
                <p className="text-xs font-medium text-white/70 sm:text-[12px]">Atlas</p>
              </div>
              <p className="text-white/95 text-[15px] leading-relaxed md:text-[15px] sm:text-[14px]">How do you feel about your high-stakes meeting tomorrow?</p>
            </div>

            {/* Bubble 2 - User */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-[18px] px-5 py-4 ml-8 md:ml-8 sm:ml-0 sm:px-4 sm:py-3">
              <p className="text-xs font-medium text-white/70 mb-1 sm:text-[12px]">You</p>
              <p className="text-white/95 text-[15px] leading-relaxed md:text-[15px] sm:text-[14px]">My idea is solid, but I'm not sure the presentation will land. I expect pushback from Ana.</p>
            </div>

            {/* Bubble 3 - Atlas */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-[18px] px-5 py-4 md:px-5 md:py-4 sm:px-4 sm:py-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(56, 94, 113, 0.7)' }}></div>
                <p className="text-xs font-medium text-white/70 sm:text-[12px]">Atlas</p>
              </div>
              <p className="text-white/95 text-[15px] leading-relaxed md:text-[15px] sm:text-[14px]">Your profile shows you hold many options open under pressure — it's an asset, but Ana may read it as hesitation. Can I share talking points that leverage your strengths so you feel more confident in the discussion?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Editorial product section */}
      <section className="bg-[#fafafb] pb-[100px] pt-24 md:pt-32 lg:pt-36">
        <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-2 gap-24 overflow-x-clip">

          {/* LEFT COLUMN (HEADER) */}
          <div
            className={`sticky top-32 self-start min-w-0 transition-transform duration-[900ms] ease-out translate-y-0`}
          >
            <h3 className="font-sans text-[64px] leading-[1.05] tracking-[-0.03em] font-medium" style={{color: '#202426'}}>
              <span
                data-text="Meet your thinking partner"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-h-[140vh] min-w-0">
            <div className="text-[24px] leading-[1.75] space-y-6 max-w-[520px]" style={{color: '#4f4f4f'}}>
              <p>
                Atlas helps you think through high-stakes problems that don't have obvious answers — from strategic choices and tough trade-offs to difficult conversations and career-defining moves.
              </p>
            </div>

            <div className="mt-16">
              <img
                src="/images/atlas_individual_outcomes.svg"
                alt="Atlas thinking partner"
                className="w-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="w-full bg-[#fafafb] py-16 md:py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-8">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-x-0 h-px bg-neutral-300/40"></div>
            <div className="relative flex justify-between w-full px-0 text-xs text-neutral-400">
              <span>0.1</span>
              <span>[0.2]</span>
              <span>0.3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 — Editorial product section */}
      <section className="bg-[#fafafb] pt-[100px] pb-48">
        <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-2 gap-24 overflow-x-clip">

          {/* LEFT COLUMN (HEADER) */}
          <div
            className={`sticky top-32 self-start min-w-0 transition-transform duration-[900ms] ease-out translate-y-0`}
          >
            <h3 className="font-sans text-[64px] leading-[1.05] tracking-[-0.03em] font-medium" style={{color: '#202426'}}>
              <span
                data-text="Surface your competitive edge — in the moments that matter most"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-h-[140vh] min-w-0">
            <div className="text-[24px] leading-[1.75] space-y-6 max-w-[520px]" style={{color: '#4f4f4f'}}>
              <p>
                Atlas adapts to how you naturally reason, anticipate your next question, and sharpen your judgment — so every decision lands with greater clarity, confidence, and speed.
              </p>
              <p className="font-medium">
                Atlas helps you:
              </p>
              <ul className="space-y-2">
                <li>Prepare for critical meetings with precise insight into stakeholders</li>
                <li>Navigate hard choices without second-guessing</li>
                <li>Handle feedback and conflict with calm precision</li>
                <li>Move forward faster, knowing you've seen the full picture</li>
              </ul>
              <p>
                Always on. Always in your context. Built for the way real work — and real thinking — actually happens.
              </p>
            </div>

            <div className="mt-16">
              <img
                src="/images/atlas_capability_colleagues.svg"
                alt="Atlas competitive edge"
                className="w-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#fafafb] py-[100px] md:py-[140px]">
        <div className="max-w-[1300px] mx-auto px-8 flex flex-col items-center text-center">
          <h2 className="font-sans text-[56px] md:text-[64px] leading-[1.1] tracking-[-0.03em] font-medium text-[#202426] mb-6">
            Start making better people decisions
          </h2>
          <p className="text-[20px] leading-[1.6] text-[#4f4f4f] max-w-[600px] mb-12">
            Orient. Adapt. Act — with clarity.
          </p>
          <a
            href="/get-started"
            className="inline-block px-8 py-4 bg-[#202426] text-white font-medium rounded-md hover:bg-[#1a1b22] transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

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
