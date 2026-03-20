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
    <main style={{ backgroundColor: "#fafafb" }}>
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
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.1] tracking-tight text-white mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              People Intelligence for Every Decision
            </h1>
            <p className="text-[clamp(1rem,2vw,1.25rem)] leading-[1.6] text-white/85 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              AI that maps how people think, decide, and collaborate — turning those patterns into strategic advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Big central statement */}
      <section
        className="w-full flex items-center justify-center px-6 py-32"
        style={{ backgroundColor: "#fafafb" }}
      >
        <div
          ref={section2Ref}
          className={`max-w-[900px] w-full text-center transition-all duration-[700ms] ease-out ${
            section2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="font-sans text-[86px] leading-[1.02] tracking-[-0.045em] font-semibold"
            style={{
              color: "#1d1f2b",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Better decisions start with better inputs
          </h2>
          <p
            className="mt-6 text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Atlas powers real-time, AI-driven people decisions across your organization — from strategic planning to day-to-day execution.
          </p>
        </div>
      </section>

      {/* Section 4 — ATLAS system */}
      <section className="bg-[#fafafb] pt-[80px] pb-[160px]">
        <div className="w-full px-6">

          {/* Atlas System Label */}
          <div
            ref={atlasSystemRef}
            className={`max-w-[1200px] mx-auto mb-[48px] transition-all duration-[700ms] ease-out ${
              atlasSystemVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-full flex flex-wrap justify-center items-center gap-x-5 gap-y-3 mt-8 mb-14 text-[13px] tracking-[-0.01em] text-[#6B7280]">
              <span className="px-3 py-1 border border-[#E5E7EB] rounded-full bg-white">Leadership Modeling</span>
              <span className="text-[#D1D5DB]">—</span>
              <span className="px-3 py-1 border border-[#E5E7EB] rounded-full bg-white">Team Dynamics</span>
              <span className="text-[#D1D5DB]">—</span>
              <span className="px-3 py-1 border border-[#E5E7EB] rounded-full bg-white">Execution Support</span>
              <span className="text-[#D1D5DB]">—</span>
              <span className="px-3 py-1 border border-[#E5E7EB] rounded-full bg-white">Development Plans</span>
              <span className="text-[#D1D5DB]">—</span>
              <span className="px-3 py-1 border border-[#E5E7EB] rounded-full bg-white">Talent Composition</span>
              <span className="text-[#D1D5DB]">—</span>
              <span className="px-3 py-1 border border-[#E5E7EB] rounded-full bg-white">Decision Flow</span>
            </div>
            <h3
              className="text-[28px] font-medium tracking-tight text-neutral-900 mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              The Atlas System
            </h3>
          </div>

          {/* Module rows */}
          {[
            {
              description: "Individual Intelligence\nLead sharper. Think clearer. Your reasoning partner — tuned precisely to how you think",
              title: "Atlas Professional",
              href: "/atlas/professional",
            },
            {
              description: "Team Intelligence\nUnderstand how people work together — improve communication, coordination, and decision dynamics",
              title: "Atlas Teams",
              href: "/atlas/teams",
            },
            {
              description: "Organizational Intelligence\nA continous view of how your organization operates — spot risk patterns, align faster, act with precision",
              title: "Atlas Global",
              href: "/atlas/global",
            },
          ].map((module) => (
            <Link href={module.href} key={module.title} className="block">
              <div className="mx-4 h-px bg-black/10 opacity-60" />
              <div
                className="group -mx-[16px] px-[16px] cursor-pointer transition-colors duration-200 hover:bg-[#f7f7f7]"
              >
                <div className="max-w-[1200px] mx-auto py-[80px] grid grid-cols-12 gap-x-12">
                  {/* Left — description */}
                  <div className="col-span-5">
                    <p
                      className="text-[20px] leading-relaxed max-w-[520px] whitespace-pre-line"
                      style={{ fontFamily: "Inter, sans-serif", color: "#383838" }}
                    >
                      {module.description}
                    </p>
                  </div>

                  {/* Right — product name */}
                  <div className="col-span-7 flex items-center justify-end overflow-hidden">
                    <span
                      className="inline-block text-[72px] font-medium tracking-tight text-right transition-all duration-[380ms] ease-out group-hover:translate-x-[2px] group-hover:tracking-[0.005em] will-change-transform"
                      style={{ color: "#1e1f2b", fontFamily: "Inter, sans-serif" }}
                    >
                      {module.title}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Last row bottom border */}
          <div className="mx-4 h-px bg-black/10 opacity-60" />
        </div>
      </section>
      {/* Section 3 — Human intelligence, understood by machines */}
      <section className="w-full bg-[#efefef] py-[140px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-12 gap-x-12 items-start">
            {/* Left — headline */}
            <div className="col-span-6">
              <h2
                className="text-[52px] font-medium tracking-tight text-neutral-900 max-w-[520px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Human intelligence,<br />amplified.
              </h2>
            </div>

            {/* Right — explanatory text */}
            <div className="col-span-5 col-start-8 text-[18px] leading-[1.6] text-neutral-600 max-w-[420px] space-y-6">
              <p>Atlas bridges behavioral science and artificial intelligence. It enables a new form of collaboration between human judgment and machine reasoning.</p>
              <p>Always on. Always in context.</p>
              <p>Built to support how work actually unfolds.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
