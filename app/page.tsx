"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteHeader from "@/components/site-header";

export default function Home() {
  const [atlasSystemVisible, setAtlasSystemVisible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const atlasSystemRef = useRef(null);
  const section2Ref = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAtlasSystemVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (atlasSystemRef.current) observer.observe(atlasSystemRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSection2Visible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (section2Ref.current) observer.observe(section2Ref.current);

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
  return (
    <main className="overflow-x-hidden" style={{ backgroundColor: "#fafafb" }}>
      <SiteHeader />

      {/* Section 1 — Full-screen hero */}
      <section className="relative w-full h-screen overflow-hidden bg-white">
        <video
          ref={heroImageRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gprod-yEdnnDREclP1h7D6ESUIMsD8Tp2I8V.mp4" type="video/mp4" />
        </video>
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-[clamp(2rem,6vw,5rem)] font-semibold leading-[1.1] tracking-tight text-white mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              AI Coach for Every Team
            </h1>
            <p className="text-[clamp(0.875rem,2vw,1.25rem)] leading-[1.6] text-white/85 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              Atlas supports communication, teamwork and organizational performance at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Big central statement */}
      <section
        className="w-full flex items-center justify-center px-4 md:px-6 pt-16 md:pt-24 pb-6"
        style={{ backgroundColor: "#fafafb" }}
      >
        <div
          ref={section2Ref}
          className={`max-w-[900px] w-full text-center transition-all duration-[700ms] ease-out ${
            section2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="font-sans text-[clamp(2rem,8vw,86px)] leading-[1.02] tracking-[-0.045em] font-semibold"
            style={{
              color: "#1d1f2b",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Better teamwork starts with better understanding
          </h2>
          <p
            className="mt-4 md:mt-6 mb-8 md:mb-12 text-base md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Atlas helps teams navigate collaboration, resolve conflict, and improve performance
          </p>
        </div>
      </section>

      {/* Section 4 — ATLAS system */}
      <section className="bg-[#fafafb] pt-0 pb-20 md:pb-[160px]">
        <div className="w-full px-4 md:px-6">

          {/* Atlas System Label */}
          <div
            ref={atlasSystemRef}
            className={`max-w-[1200px] mx-auto mb-[24px] transition-all duration-[700ms] ease-out ${
              atlasSystemVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-full flex flex-wrap justify-center items-center gap-x-2 md:gap-x-3 gap-y-2 mt-6 mb-16 md:mb-40 text-[13px] md:text-[15px] tracking-[-0.01em] text-[#374151] font-medium">
              <span className="px-2 md:px-2.5 py-[4px] border border-[#D1D5DB] rounded-md bg-white">Team Dynamics</span>
              <span className="text-[#D1D5DB] hidden md:inline">—</span>
              <span className="px-2 md:px-2.5 py-[4px] border border-[#D1D5DB] rounded-md bg-white">Communication Support</span>
              <span className="text-[#D1D5DB] hidden md:inline">—</span>
              <span className="px-2 md:px-2.5 py-[4px] border border-[#D1D5DB] rounded-md bg-white">Execution Support</span>
              <span className="text-[#D1D5DB] hidden md:inline">—</span>
              <span className="px-2 md:px-2.5 py-[4px] border border-[#D1D5DB] rounded-md bg-white">Talent Composition</span>
              <span className="text-[#D1D5DB] hidden md:inline">—</span>
              <span className="px-2 md:px-2.5 py-[4px] border border-[#D1D5DB] rounded-md bg-white">Development Plans</span>
              <span className="text-[#D1D5DB] hidden md:inline">—</span>
              <span className="px-2 md:px-2.5 py-[4px] border border-[#D1D5DB] rounded-md bg-white">Succession Planning</span>
            </div>
            <h3
              className="text-[22px] md:text-[28px] font-medium tracking-tight text-neutral-900 mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Atlas AI Coach
            </h3>
          </div>

          {/* Module rows */}
          {[
            {
              description: "Individual Intelligence\nGet support in your own work situations — feedback, decisions, conflicts",
              title: "Atlas Professional",
              href: "/atlas/professional",
            },
            {
              description: "Team Intelligence\nUnderstand how people work together — improve team performance, communication, and decision-making",
              title: "Atlas Teams",
              href: "/atlas/teams",
            },
            {
              description: "Organizational Intelligence\nRoll out AI coaching across global teams with shared context and insights",
              title: "Atlas Global",
              href: "/atlas/global",
              showImages: true,
            },
          ].map((module) => (
            <div key={module.title}>
              <Link href={module.href} className="block">
                <div className="mx-2 md:mx-4 h-px bg-black/10 opacity-60" />
                <div
                  className="group -mx-[8px] md:-mx-[16px] px-[8px] md:px-[16px] cursor-pointer transition-colors duration-200 hover:bg-[#f7f7f7]"
                >
                  <div className="max-w-[1200px] mx-auto py-10 md:py-[80px] flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-x-12">
                    {/* Left — description */}
                    <div className="md:col-span-5 order-2 md:order-1">
                      <p
                        className="text-[16px] md:text-[20px] leading-relaxed max-w-[520px] whitespace-pre-line"
                        style={{ fontFamily: "Inter, sans-serif", color: "#383838" }}
                      >
                        {module.description}
                      </p>
                    </div>

                    {/* Right — product name */}
                    <div className="md:col-span-7 flex items-center md:justify-end overflow-hidden order-1 md:order-2">
                      <span
                        className="inline-block text-[32px] md:text-[72px] font-medium tracking-tight md:text-right transition-all duration-[380ms] ease-out group-hover:translate-x-[2px] group-hover:tracking-[0.005em] will-change-transform"
                        style={{ color: "#1e1f2b", fontFamily: "Inter, sans-serif" }}
                      >
                        {module.title}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              {module.showImages && (
                <div className="mx-2 md:mx-4 py-10 md:py-16" style={{ backgroundColor: "#fafafb" }}>
                  <div className="max-w-[1200px] mx-auto px-0 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      {/* Left image — Surveys */}
                      <div className="flex items-center justify-center bg-white rounded-lg overflow-hidden">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2025%2C%202026%20at%2007_47_48%20PM-bzXmUW5budETHPRiA568m9288XTnM0.png"
                          alt="Survey workflow diagram"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {/* Right image — Network nodes */}
                      <div className="flex items-center justify-center bg-white rounded-lg overflow-hidden">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2025%2C%202026%20at%2008_45_51%20PM-Xj24Z492aHPHMMsc52kNmUIM9esLox.png"
                          alt="Organizational network diagram"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Last row bottom border */}
          <div className="mx-2 md:mx-4 h-px bg-black/10 opacity-60" />
        </div>
      </section>
      {/* Section 3 — Human intelligence, understood by machines */}
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
              <p className="text-[12px] text-[#6B7280] mt-8 md:mt-0 hidden md:block">© 2026 Mindacc. All rights reserved.</p>
            </div>

            {/* Right — explanatory text */}
            <div className="md:col-span-5 md:col-start-8 text-[16px] md:text-[18px] leading-[1.6] text-[#383838] max-w-[420px] space-y-4 md:space-y-6">
              <p>Atlas supports performance, collaboration, and day-to-day teamwork across your organization. It helps employees and managers navigate real work situations — from feedback conversations and coordination challenges to conflict resolution and team support.</p>
              <p>Always available. Always in context.</p>
              <p>Built for how work actually happens.</p>
            </div>
            
            <p className="text-[12px] text-[#6B7280] md:hidden">© 2026 Mindacc. All rights reserved.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
