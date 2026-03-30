"use client";

import { useEffect, useState, useRef } from "react";
import SiteHeader from "@/components/site-header";

export default function AtlasGlobal() {
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
      { threshold: 0.45 }
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
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/board-CP9WmvjtOQ1EMUKe3EyIcWZVpp9V2N.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-8 left-4 md:bottom-16 md:left-16 z-10 pointer-events-none">
          <h1 className="font-sans text-[36px] md:text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-white">
            Atlas Global
          </h1>
          <p className="text-[14px] md:text-[clamp(1rem,2vw,1.25rem)] leading-[1.6] text-white/85 max-w-[280px] md:max-w-2xl" style={{ fontFamily: "Inter, sans-serif", marginTop: "0.75rem" }}>
            Support teamwork and organizational change at enterprise scale.
          </p>
        </div>

        {/* Chat Bubbles Overlay - hidden on mobile */}
        <div className="hidden md:flex absolute inset-0 items-end justify-end pb-24 pr-[28px] z-10 pointer-events-none">
          <div className="flex flex-col gap-4 max-w-[420px]">
            {/* Bubble 1 - Atlas */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-[18px] px-5 py-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(56, 94, 113, 0.7)' }}></div>
                <p className="text-xs font-medium text-white/70">Atlas</p>
              </div>
              <p className="text-white/95 text-[15px] leading-relaxed">Jane, how do you feel going into the global restructuring?</p>
            </div>

            {/* Bubble 2 - User */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-[18px] px-5 py-4 ml-8">
              <p className="text-xs font-medium text-white/70 mb-1">Jane</p>
              <p className="text-white/95 text-[15px] leading-relaxed">We're ready, but I'm worried about the impact on the global product teams.</p>
            </div>

            {/* Bubble 3 - Atlas */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-[18px] px-5 py-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(56, 94, 113, 0.7)' }}></div>
                <p className="text-xs font-medium text-white/70">Atlas</p>
              </div>
              <p className="text-white/95 text-[15px] leading-relaxed">Based on recent stress patterns, teams in Germany and China are most overloaded. Do you want me to map where restructuring pressure will hit execution first — and where it's likely to stall?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Editorial product section */}
      <section className="bg-[#fafafb] pb-[60px] md:pb-[100px] pt-16 md:pt-24 lg:pt-36">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24 overflow-x-clip">

          {/* LEFT COLUMN (HEADER) */}
          <div
            className={`md:sticky md:top-32 self-start min-w-0 transition-transform duration-[900ms] ease-out translate-y-0`}
          >
            <h3 className="font-sans text-[32px] md:text-[64px] leading-[1.05] tracking-[-0.03em] font-medium" style={{color: '#202426'}}>
              <span
                data-text="Understand your organization at scale"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="md:min-h-[140vh] min-w-0">
            <div className="text-[18px] md:text-[24px] leading-[1.75] space-y-6 max-w-[520px]" style={{color: '#4f4f4f'}}>
              <p>
                Atlas makes patterns across teams visible — from how decisions form and leadership emerges to where alignment breaks down at enterprise level.
              </p>
            </div>

            <div className="mt-8 md:mt-16">
              <img
                src="/images/atlas_org_scale.svg"
                alt="Atlas interface"
                className="w-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="w-full bg-[#fafafb] py-8 md:py-16 lg:py-20">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8">
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
      <section className="bg-[#fafafb] pt-16 md:pt-[100px] pb-24 md:pb-48">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24 overflow-x-clip">

          {/* LEFT COLUMN (HEADER) */}
          <div
            className={`md:sticky md:top-32 self-start min-w-0 transition-transform duration-[900ms] ease-out translate-y-0`}
          >
            <h3 className="font-sans text-[32px] md:text-[64px] leading-[1.05] tracking-[-0.03em] font-medium" style={{color: '#202426'}}>
              <span
                data-text="See what's forming — before it becomes a problem"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="md:min-h-[140vh] min-w-0">
            <div className="text-[18px] md:text-[24px] leading-[1.75] space-y-6 max-w-[520px]" style={{color: '#4f4f4f'}}>
              <p>
                Atlas surfaces patterns in how people work, interpret situations, and make decisions across teams, regions, and levels — so leaders catch misalignment, risk, and bottlenecks early, before they cascade into enterprise-wide problems.
              </p>
              <p className="font-medium">
                This means:
              </p>
              <ul className="space-y-3 list-none">
                <li>Spot risks early — identify where thinking diverges or leadership gaps emerge before they scale</li>
                <li>Align faster — turn fragmented perspectives into coherent organization-wide understanding</li>
                <li>Execute at speed — reduce delays, rework, and hidden friction across global operations</li>
                <li>Build resilience — strengthen leadership pipelines and decision quality so the enterprise moves as one powerful system</li>
              </ul>
              <p>
                Always in context. Always up to date. Built for how large organizations actually work — so scale becomes your greatest advantage, not your biggest liability.
              </p>
            </div>

            <div className="mt-8 md:mt-16">
              <img
                src="/images/atlas_enterprise_signal.svg"
                alt="Atlas interface"
                className="w-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#fafafb] py-16 md:py-[100px] lg:py-[140px]">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <h2 className="font-sans text-[32px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.03em] font-medium text-[#202426] mb-4 md:mb-6">
            Start making better people decisions
          </h2>
          <p className="text-[16px] md:text-[20px] leading-[1.6] text-[#4f4f4f] max-w-[600px] mb-8 md:mb-12">
            Orient. Adapt. Act — with clarity.
          </p>
          <a
            href="/get-started"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-[#202426] text-white font-medium rounded-md hover:bg-[#1a1b22] transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* Footer */}
      <section className="w-full bg-[#efefef] py-16 md:py-[140px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-x-12 items-start">
            {/* Left — headline */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <h2
                className="text-[32px] md:text-[52px] font-medium tracking-tight text-neutral-900 max-w-[520px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Human intelligence,<br />amplified.
              </h2>
              <p className="text-[12px] text-[#6B7280] mt-8 hidden md:block">© 2026 Mindacc. All rights reserved.</p>
            </div>

            {/* Right — explanatory text */}
            <div className="md:col-span-5 md:col-start-8 text-[16px] md:text-[18px] leading-[1.6] text-[#383838] max-w-[420px] space-y-4 md:space-y-6">
              <p>Atlas understands how people think and work across your organization — anticipating patterns, revealing misalignment, and helping you act with precision when it matters.</p>
              <p>Always on. Always in context.</p>
              <p>Built to support how work actually unfolds.</p>
            </div>
            
            <p className="text-[12px] text-[#6B7280] md:hidden">© 2026 Mindacc. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
