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
    const timeoutIds = new WeakMap();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const fullText = el.dataset.text;

          if (entry.isIntersecting) {
            if (typingState.get(el)) return; // prevent duplicate loops

            // Clear any existing timeout
            const existingTimeout = timeoutIds.get(el);
            if (existingTimeout) {
              clearTimeout(existingTimeout);
              timeoutIds.delete(el);
            }

            typingState.set(el, true);

            let i = 0;
            el.textContent = "";

            const type = () => {
              // Check if animation was cancelled
              if (!typingState.get(el)) {
                return;
              }
              if (i < fullText.length) {
                el.textContent = fullText.substring(0, i + 1);
                i++;
                const timeoutId = setTimeout(type, 35);
                timeoutIds.set(el, timeoutId);
              } else {
                typingState.set(el, false);
                timeoutIds.delete(el);
              }
            };

            type();
          } else {
            // Clear timeout when element leaves viewport
            const existingTimeout = timeoutIds.get(el);
            if (existingTimeout) {
              clearTimeout(existingTimeout);
              timeoutIds.delete(el);
            }
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
        <div className="absolute bottom-8 left-4 md:bottom-16 md:left-16 z-20 pointer-events-none">
          <h1 className="font-sans text-[36px] md:text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-white">
            Atlas Professional
          </h1>
          <p className="block md:hidden text-[14px] leading-[1.6] text-white/85 max-w-[280px]" style={{ fontFamily: "Inter, sans-serif", marginTop: "0.75rem" }}>
            Decisions break where understanding of people is incomplete.
          </p>
          <p className="text-[14px] md:text-[clamp(1rem,2vw,1.25rem)] leading-[1.6] text-white/85 max-w-[280px] md:max-w-2xl" style={{ fontFamily: "Inter, sans-serif", marginTop: "0.75rem" }}>
            <span className="block">Support for meetings, feedback, and workplace performance.</span>
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
              <p className="text-white/95 text-[15px] leading-relaxed">Alex, how are you approaching your meeting with Ana tomorrow?</p>
            </div>

            {/* Bubble 2 - User */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-[18px] px-5 py-4 ml-8">
              <p className="text-xs font-medium text-white/70 mb-1">Alex</p>
              <p className="text-white/95 text-[15px] leading-relaxed">My idea is solid, but I'm not sure the presentation will land. I expect pushback from Ana.</p>
            </div>

            {/* Bubble 3 - Atlas */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-[18px] px-5 py-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(56, 94, 113, 0.7)' }}></div>
                <p className="text-xs font-medium text-white/70">Atlas</p>
              </div>
              <p className="text-white/95 text-[15px] leading-relaxed">You hold many options open under pressure — it's an asset, but Ana may read it as hesitation. Can I share talking points that lead with strengths so you feel more confident in the conversation?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Editorial product section */}
      <section className="bg-[#fafafb] pb-[60px] md:pb-[100px] pt-16 md:pt-32 lg:pt-36">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8">
          
          {/* Top Row - Headline on left, text on right */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-16 items-start mb-[120px]">
            {/* LEFT - Animated Header */}
            <div>
              <h3 className="font-sans text-[32px] md:text-[64px] leading-[1.05] tracking-[-0.03em] font-medium" style={{color: '#202426'}}>
                <span
                  data-text="Perform at your best at work"
                  className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
                ></span>
              </h3>
            </div>
            {/* RIGHT - Text */}
            <div className="flex items-start md:items-center md:pt-4">
              <div className="max-w-[420px]">
                <p
                  className="text-[16px] md:text-[18px] leading-[1.6] text-[#383838] font-semibold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Atlas helps leaders, managers, and employees navigate difficult decisions, workplace pressure, and career challenges — from everyday situations to high-stakes moments at work.
                </p>
              </div>
            </div>
          </div>

          {/* Image Row - Centered */}
          <div className="w-full flex items-center justify-center">
            <img
              src="/images/atlas_network_pink_v2.png"
              alt="Atlas capabilities diagram"
              className="w-full h-auto max-w-[900px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full bg-[#fafafb] py-8 md:py-10 lg:py-12">
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
      <section className="bg-[#fafafb] pt-16 md:pt-[100px] pb-24 md:pb-48">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24 overflow-x-clip">

          {/* LEFT COLUMN (HEADER) */}
          <div
            className={`md:sticky md:top-32 md:h-fit self-start min-w-0 transition-transform duration-[900ms] ease-out translate-y-0`}
          >
            <h3 className="font-sans text-[32px] md:text-[64px] leading-[1.05] tracking-[-0.03em] font-medium" style={{color: '#202426'}}>
              <span
                data-text="Surface your competitive edge — in the moments that matter most"
                className="typed-header after:content-['|'] after:ml-1 after:animate-pulse"
              ></span>
            </h3>
          </div>

          {/* RIGHT COLUMN (SCROLL CONTENT) */}
          <div className="min-w-0">
            <div className="text-[16px] md:text-[18px] leading-[1.6] text-[#383838] space-y-6 max-w-[520px]" style={{fontFamily: "Inter, sans-serif"}}>
              <p className="font-semibold">
                Atlas adapts to your work style — so you can perform at your best in modern work environments.
              </p>
              <p className="font-medium">
                Atlas helps you:
              </p>
              <ul className="space-y-2">
                <li>• Prepare for high-stakes meetings</li>
                <li>• Navigate difficult workplace situations faster</li>
                <li>• Communicate more effectively across teams</li>
                <li>• Handle feedback, conflict, and pressure with confidence</li>
                <li>• Prevent burnout</li>
              </ul>
              <p className="font-semibold">
                Always available. Always in context. Built to support how modern work actually happens.
              </p>
            </div>
          </div>

        </div>

        {/* Anticipate. Adapt. Advance. Header - Centered */}
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 mt-2 md:mt-5">
          <div className="w-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="mb-3 md:mb-5">
                <span className="text-[36px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] font-bold">
                  <span style={{ color: "#5736D3" }}>Anticipate.</span>{" "}
                  <span style={{ color: "#0066FF" }}>Adapt.</span>{" "}
                  <span style={{ color: "#FF1B6D" }}>Advance.</span>
                </span>
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#383838] font-medium" style={{fontFamily: "Inter, sans-serif"}}>
                Atlas uses predictive intelligence to help you stay ahead, make better decisions, and drive results in complex environments.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Diagram - Centered Full Width */}
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 mt-2 md:mt-10 w-full flex items-center justify-center -mb-[100px]">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wwww-vohqmT9Ra62sSRYFa50K5YX70vGpGc.jpg"
            alt="Atlas Anticipate Adapt Advance diagram"
            className="w-full h-auto max-w-[1100px] object-contain"
          />
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
          </div>
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('openContactDrawer'));
            }}
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-[#202426] text-white font-medium rounded-md hover:bg-[#1a1b22] transition-colors cursor-pointer"
          >
            Book a Demo
          </button>
        </div>
      </section>

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
