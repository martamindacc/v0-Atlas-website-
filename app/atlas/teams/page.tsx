"use client";

import { useEffect, useState, useRef } from "react";
import SiteHeader from "@/components/site-header";

export default function AtlasTeams() {
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
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pro_te-E1pnzsrNdaJdeJ4hzjjmQSg2uqRQ6f.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-8 left-4 md:bottom-16 md:left-16 z-20 pointer-events-none">
          <h1 className="font-sans text-[36px] md:text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-white">
            Atlas Teams
          </h1>
          <p className="text-[14px] md:text-[clamp(1rem,2vw,1.25rem)] leading-[1.6] text-white/85 max-w-[280px] md:max-w-2xl" style={{ fontFamily: "Inter, sans-serif", marginTop: "0.75rem" }}>
            AI coach for team performance, productivity, and wellbeing
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
              <p className="text-white/95 text-[15px] leading-relaxed">Kris, how is the new team member integrating so far?</p>
            </div>

            {/* Bubble 2 - User */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-[18px] px-5 py-4 ml-8">
              <p className="text-xs font-medium text-white/70 mb-1">Kris</p>
              <p className="text-white/95 text-[15px] leading-relaxed">Strong on paper, but I'm not sure how well they're aligning with the team yet.</p>
            </div>

            {/* Bubble 3 - Atlas */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-[18px] px-5 py-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(56, 94, 113, 0.7)' }}></div>
                <p className="text-xs font-medium text-white/70">Atlas</p>
              </div>
              <p className="text-white/95 text-[15px] leading-relaxed">They default to independent execution, but your team relies on continuous alignment — this mismatch may slow integration. Want to adjust onboarding to close the gap early?</p>
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
                data-text="Better teamwork starts with better understanding"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-w-0">
            <div className="text-[16px] md:text-[18px] leading-[1.6] text-[#383838] space-y-6 max-w-[520px]" style={{fontFamily: "Inter, sans-serif"}}>
              <p className="font-semibold">
                Atlas helps teams strengthen communication, reduce friction, and execute more effectively together. It helps teams understand how they work, where collaboration breaks down, and how to perform better under pressure.
              </p>
            </div>
          </div>

        </div>

        {/* Team Work Styles Diagram - Centered Full Width */}
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 mt-12 md:mt-20 w-full flex items-center justify-center">
          <img
            src="/images/atlas_team_workstyles_v2.png"
            alt="Team work styles visualization"
            className="w-full h-auto max-w-[1100px] object-contain"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full bg-[#fafafb] py-8 md:py-10 lg:py-12">
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
                data-text="Stronger teams, better execution"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="md:min-h-[140vh] min-w-0">
            <div className="text-[16px] md:text-[18px] leading-[1.6] text-[#383838] space-y-6 max-w-[520px]" style={{fontFamily: "Inter, sans-serif"}}>
              <p className="font-semibold">
                Atlas helps teams understand each other's work styles — so they can work more effectively together.
              </p>
              <p className="font-medium">
                Atlas helps teams:
              </p>
              <ul className="space-y-2">
                <li>• Improve cross-team communication</li>
                <li>• Reduce delays and execution bottlenecks</li>
                <li>• Improve onboarding and integration of new employees</li>
                <li>• Prepare development plans, performance reviews, and feedback conversations</li>
                <li>• Support better decisions in high-pressure situations</li>
                <li>• Prevent burnout</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#fafafb] py-8 md:py-[70px]">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <div className="mb-4 md:mb-6">
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] font-semibold text-[#6B7280] mb-4 md:mb-6">
              ATLAS BY MINDACC
            </p>
            <h2 className="font-sans text-[36px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] font-bold text-[#212527] mb-4 md:mb-6">
              The future of work belongs to organizations that bet on <span style={{ color: "#f4a4d2" }}>people and AI.</span>
            </h2>
            <p className="text-[14px] md:text-[16px] leading-[1.6] text-[#212527]/70" style={{ fontFamily: "Inter, sans-serif" }}>
              AI coaching powered by organizational context and workplace dynamics.
            </p>
          </div>
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('openContactDrawer'));
            }}
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-[#202426] text-white font-medium rounded-md hover:bg-[#1a1b22] transition-colors cursor-pointer"
          >
            Get started
          </button>
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
              <p>Atlas supports performance, collaboration, and day-to-day teamwork across your organization. It helps employees and managers navigate real work situations — from feedback conversations and coordination challenges to conflict resolution and team support.</p>
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
