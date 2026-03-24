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
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pro_te-E1pnzsrNdaJdeJ4hzjjmQSg2uqRQ6f.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-16 left-16 z-20 pointer-events-none">
          <h1 className="font-sans text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-white">
            Atlas Teams
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] leading-[1.6] text-white/85 max-w-2xl" style={{ fontFamily: "Inter, sans-serif", marginTop: "0.75rem" }}>
            Align how teams think, decide, and work — with clarity across roles, dynamics, and execution.
          </p>
        </div>

        {/* Chat Bubbles Overlay */}
        <div className="absolute inset-0 flex items-center justify-end pr-12 z-10 pointer-events-none">
          <div className="flex flex-col gap-4 max-w-[420px] md:max-w-[420px] w-[90%] md:w-auto">
            {/* Bubble 1 - Atlas */}
            <div className="bg-white/[0.45] backdrop-blur-lg border border-white/5 rounded-[18px] px-5 py-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(56, 94, 113, 0.7)' }}></div>
                <p className="text-xs font-medium text-white/70">Atlas</p>
              </div>
              <p className="text-white/95 text-[15px] leading-relaxed">Kris, how is the new team member integrating so far?</p>
            </div>

            {/* Bubble 2 - User */}
            <div className="bg-white/[0.45] backdrop-blur-lg border border-white/5 rounded-[18px] px-5 py-4 ml-8">
              <p className="text-xs font-medium text-white/70 mb-1">Kris</p>
              <p className="text-white/95 text-[15px] leading-relaxed">Strong on paper, but I'm not sure how well they're aligning with the team yet.</p>
            </div>

            {/* Bubble 3 - Atlas */}
            <div className="bg-white/[0.45] backdrop-blur-lg border border-white/5 rounded-[18px] px-5 py-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(56, 94, 113, 0.7)' }}></div>
                <p className="text-xs font-medium text-white/70">Atlas</p>
              </div>
              <p className="text-white/95 text-[15px] leading-relaxed">Their profile shows a preference for independent execution, while your team operates with frequent alignment loops — this can create early friction. Want me to suggest ways to integrate them faster?</p>
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
                data-text="A shared reasoning layer for teams"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-h-[140vh] min-w-0">
            <div className="text-[24px] leading-[1.75] space-y-6 max-w-[520px]" style={{color: '#4f4f4f'}}>
              <p>
                Atlas creates a shared layer that surfaces how perspectives converge — or clash — across a team.
              </p>
            </div>

            <div className="mt-16">
              <img
                src="/images/atlas_team_workstyles.svg"
                alt="Team work styles visualization"
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
                data-text="Align thinking before it turns into friction"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-h-[140vh] min-w-0">
            <div className="text-[24px] leading-[1.75] space-y-6 max-w-[520px]" style={{color: '#4f4f4f'}}>
              <p>
                Atlas surfaces differences in how people work, interpret situations, and make decisions — so teams catch misalignment early, before it becomes conflict or wasted effort.
              </p>
              <p className="font-medium">
                This means:
              </p>
              <ul className="space-y-3">
                <li>Resolve conflict faster — spot where perspectives diverge and why</li>
                <li>Coordinate more smoothly — turn scattered views into shared understanding</li>
                <li>Move forward with confidence — even in complex, high-stakes projects</li>
                <li>Execute as one — reduce rework, delays, and hidden roadblocks</li>
              </ul>
            </div>

            <div className="mt-16">
              <img
                src="/images/atlas_early_signal.svg"
                alt="Early signal detection"
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
