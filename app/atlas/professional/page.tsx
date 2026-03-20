"use client";

import { useEffect, useState, useRef } from "react";
import SiteHeader from "@/components/site-header";

export default function AtlasProfessional() {
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
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product_pro-ijCm9qkPopmgIfPyr8zbDEWDSnZLFR.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-16 left-16 z-20 pointer-events-none">
          <h1 className="font-sans text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-white">
            Atlas Professional
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] leading-[1.6] text-white/85 max-w-2xl" style={{ fontFamily: "Inter, sans-serif", marginTop: "0.75rem" }}>
            Make better people decisions — with clarity on how others think, respond, and work.
          </p>
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
              Atlas turns ambiguity into clarity — in the moments that matter most.
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-h-[140vh] min-w-0">
            <div className="text-[24px] leading-[1.75] text-[#374151] space-y-6 max-w-[520px]">
              <p>
                It preps you for high-stakes meetings, stress-tests your options before you commit, sharpens feedback conversations, and helps you navigate tough trade-offs with confidence.
              </p>
              <p>
                Always on, always in your context — so you make better calls, faster, and with less second-guessing.
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
            <div className="text-[24px] leading-[1.75] text-[#374151] space-y-6 max-w-[520px]">
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
    </div>
  );
}
