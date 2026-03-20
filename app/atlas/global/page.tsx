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
    <div className="bg-[#fafafb] min-h-screen w-full">
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
        <div className="absolute bottom-16 left-16 z-10 pointer-events-none">
          <h1 className="font-sans text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-white">
            Atlas Global
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] leading-[1.6] text-white/85 max-w-2xl" style={{ fontFamily: "Inter, sans-serif", marginTop: "0.75rem" }}>
            Support teamwork and change — across teams, roles, and regions.
          </p>
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
              A reasoning partner
              <br />
              <span
                data-text="for complex decisions"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-h-[140vh] min-w-0">
            <div className="text-[24px] leading-[1.75] space-y-6 max-w-[520px]" style={{color: '#4f4f4f'}}>
              <p>
                Atlas is designed to help people think through problems that do not have obvious answers.
              </p>
              <p>
                Because the system is grounded in your cognitive model, the dialogue evolves with the way you naturally reason.
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
              A reasoning partner
              <br />
              <span
                data-text="for complex decisions"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-h-[140vh] min-w-0">
            <div className="text-[24px] leading-[1.75] space-y-6 max-w-[520px]" style={{color: '#4f4f4f'}}>
              <p>
                Atlas is designed to help people think through problems that do not have obvious answers.
              </p>
              <p>
                Because the system is grounded in your cognitive model, the dialogue evolves with the way you naturally reason.
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

      {/* CTA Section */}
      <section className="w-full bg-[#fafafb] py-[100px] md:py-[140px]">
        <div className="max-w-[1300px] mx-auto px-8 flex flex-col items-center text-center">
          <h2 className="font-sans text-[56px] md:text-[64px] leading-[1.1] tracking-[-0.03em] font-medium text-[#202426] mb-6">
            Start making better people decisions
          </h2>
          <p className="text-[20px] leading-[1.6] text-[#4f4f4f] max-w-[600px] mb-12">
            Atlas helps you think through complexity, navigate people dynamics, and act with clarity when it matters most.
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
