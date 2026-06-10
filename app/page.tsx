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
              People Intelligence for Modern Teams
            </h1>
            <p className="text-[clamp(0.875rem,2vw,1.25rem)] leading-[1.6] text-white/85 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              Atlas helps organizations improve hiring, talent development, team effectiveness, and organizational performance.
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
            Atlas helps teams better understand how people work, communicate, and collaborate.
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
              <span className="px-2 md:px-2.5 py-[4px] border border-[#D1D5DB] rounded-md bg-gradient-to-b from-[#fde4f5] to-[#f8cae6]">Team Dynamics</span>
              <span className="text-[#D1D5DB] hidden md:inline">—</span>
              <span className="px-2 md:px-2.5 py-[4px] border border-[#D1D5DB] rounded-md bg-gradient-to-b from-[#fde4f5] to-[#f8cae6]">Communication Support</span>
              <span className="text-[#D1D5DB] hidden md:inline">—</span>
              <span className="px-2 md:px-2.5 py-[4px] border border-[#D1D5DB] rounded-md bg-gradient-to-b from-[#fde4f5] to-[#f8cae6]">Execution Support</span>
              <span className="text-[#D1D5DB] hidden md:inline">—</span>
              <span className="px-2 md:px-2.5 py-[4px] border border-[#D1D5DB] rounded-md bg-gradient-to-b from-[#fde4f5] to-[#f8cae6]">Talent Mapping</span>
              <span className="text-[#D1D5DB] hidden md:inline">—</span>
              <span className="px-2 md:px-2.5 py-[4px] border border-[#D1D5DB] rounded-md bg-gradient-to-b from-[#fde4f5] to-[#f8cae6]">Leadership Development</span>
              <span className="text-[#D1D5DB] hidden md:inline">—</span>
              <span className="px-2 md:px-2.5 py-[4px] border border-[#D1D5DB] rounded-md bg-gradient-to-b from-[#fde4f5] to-[#f8cae6]">Succession Planning</span>
            </div>
            <h3
              className="text-[22px] md:text-[28px] font-medium tracking-tight text-neutral-900 mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Atlas
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
              description: "Team Intelligence\nUnderstand how people work together — improve team performance, productivity, and collaboration",
              title: "Atlas Teams",
              href: "/atlas/teams",
            },
            {
              description: "Organizational Intelligence\nImprove hiring, talent development, and organizational effectiveness at scale",
              title: "Atlas Global",
              href: "/atlas/global",
            },
          ].map((module) => (
            <Link href={module.href} key={module.title} className="relative z-10 block">
              <div className="mx-2 md:mx-4 h-px bg-black/10 opacity-60" />
              <div
                className="group -mx-2 md:-mx-4 px-2 md:px-4 cursor-pointer transition-colors duration-200 hover:bg-[#f7f7f7]"
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
          ))}

          {/* Last row bottom border */}
          <div className="relative z-20 mx-2 md:mx-4 h-px bg-black/10 opacity-60" />
        </div>
      </section>

      {/* Section — Visual Explanation */}
      <section className="w-full bg-[#fafafb] py-6 md:py-8 px-4 md:px-6 -mt-[98px] md:-mt-[250px] pb-0 md:pb-0">
        <div className="max-w-[1200px] mx-auto space-y-[32px] md:space-y-[60px]">
          {/* Row 1: Text (left) | Image (right) — on mobile: image first, then text */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Card */}
            <div className="flex items-center">
              <div className="max-w-[420px]">
                <h3
                  className="text-[18px] md:text-[20px] font-semibold leading-[1.4] text-[#383838] mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Most organizations still rely on surveys, reviews, and static reports to understand performance.
                </h3>
                <p
                  className="text-[16px] md:text-[18px] leading-[1.6] text-[#383838]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  But these systems are slow, generic, and disconnected from how work actually happens. By the time problems surface, teams have already lost time, alignment, and momentum.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="w-full md:w-auto flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cycle_diagram_fixed-2vUC894dOB7Cj5PDsCgcL5CrxnEo7J.svg"
                alt="Survey and performance review cycle"
                className="w-full h-auto md:w-[709px] md:h-[709px] object-contain"
              />
            </div>
          </div>

          {/* Row 2: Image (left) | Text (right) — on mobile: image first, then text */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-0 md:-mt-[270px]">
            {/* Image */}
            <div className="w-full md:w-auto flex items-center justify-center order-first md:order-none">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/atlas_network_scattered-qDnGy6QYlJ6tHF9730GtU5avMfFVW7.svg"
                alt="Atlas organizational network diagram"
                className="w-full h-auto md:w-[709px] md:h-[709px] object-contain"
              />
            </div>
            {/* Text Card */}
            <div className="flex items-center md:ml-auto order-last md:order-none">
              <div className="max-w-[420px]">
                <h3
                  className="text-[18px] md:text-[20px] font-semibold leading-[1.4] text-[#383838] mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  What actually drives performance are the thousands of conversations, decisions, and interactions happening across the organization every day.
                </h3>
                <p
                  className="text-[16px] md:text-[18px] leading-[1.6] text-[#383838]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Atlas helps organizations understand how people work, communicate, and collaborate — turning everyday workplace dynamics into better hiring, talent development, team effectiveness, and organizational performance.
                </p>
                <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#383838] font-semibold mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  No survey, review process, or static report can realistically provide that level of understanding, guidance, and support at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section — Results */}
      <section className="w-full bg-[#fafafb] pt-9 pb-24 md:pt-[68px] md:pb-32 -mt-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          {/* Results Heading */}
          <h3
            className="text-[22px] md:text-[28px] font-medium tracking-tight text-neutral-900 mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Results
          </h3>

          {/* Cards Row */}
          <div className="flex flex-nowrap gap-6 overflow-x-auto overscroll-x-contain pb-2 pr-4 md:pr-8 mt-12 md:mt-16">
            {/* Card 1 */}
            <div
              className="min-w-[calc(100vw-48px)] md:min-w-[360px] md:w-[360px] h-[440px] bg-[#eeeeee] text-[#2f3033] p-6 md:p-8 flex flex-col"
              style={{
                clipPath: "polygon(0 0, calc(100% - 56px) 0, 100% 56px, 100% 100%, 0 100%)",
              }}
            >
              <div className="h-[200px]">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/images/oslo-kommune-badge-v2.png"
                  alt=""
                  aria-hidden="true"
                  className="h-7 w-7 shrink-0 object-contain"
                />
                <p className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] font-semibold text-[#383838]" style={{ fontFamily: "Inter, sans-serif" }}>
                  CITY OF OSLO
                </p>
              </div>
                <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#383838] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                  "Atlas helped us structure development conversations and identify strengths, development areas, and team dynamics more clearly."
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] font-semibold text-[#383838] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  Key Outcomes
                </p>
                <ul className="space-y-2 text-[16px] md:text-[18px] leading-[1.6] text-[#383838]" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>• Faster preparation</li>
                  <li>• Clearer development priorities</li>
                  <li>• Better visibility into team dynamics</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="min-w-[calc(100vw-48px)] md:min-w-[360px] md:w-[360px] h-[440px] bg-[#eeeeee] text-[#2f3033] p-6 md:p-8 flex flex-col"
              style={{
                clipPath: "polygon(0 0, calc(100% - 56px) 0, 100% 56px, 100% 100%, 0 100%)",
              }}
            >
              <div className="h-[200px]">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/images/nasa-badge-v2.png"
                  alt=""
                  aria-hidden="true"
                  className="h-7 w-7 shrink-0 object-contain"
                />
                <p className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] font-semibold text-[#383838]" style={{ fontFamily: "Inter, sans-serif" }}>
                  NASA
                </p>
              </div>
                <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#383838] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                  "Atlas made it easier to translate people insights into practical development actions."
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] font-semibold text-[#383838] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  Key Outcomes
                </p>
                <ul className="space-y-2 text-[16px] md:text-[18px] leading-[1.6] text-[#383838]" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>• More focused development planning</li>
                  <li>• Stronger leadership visibility</li>
                  <li>• Better decision support</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="min-w-[calc(100vw-48px)] md:min-w-[360px] md:w-[360px] h-[440px] bg-[#eeeeee] text-[#2f3033] p-6 md:p-8 flex flex-col"
              style={{
                clipPath: "polygon(0 0, calc(100% - 56px) 0, 100% 56px, 100% 100%, 0 100%)",
              }}
            >
              <div className="h-[200px]">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/images/tomra-wordmark-v2.png"
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-auto max-w-[96px] shrink-0 object-contain"
                />
                <p className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] font-semibold text-[#383838]" style={{ fontFamily: "Inter, sans-serif" }}>
                  TOMRA
                </p>
              </div>
                <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#383838] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                  "Atlas helped surface patterns that supported clearer reflection, decision-making, and personal development."
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] font-semibold text-[#383838] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  Key Outcomes
                </p>
                <ul className="space-y-2 text-[16px] md:text-[18px] leading-[1.6] text-[#383838]" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>• Improved self-awareness</li>
                  <li>• More structured insight</li>
                  <li>• Faster clarity around next steps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Human intelligence, understood by machines */}
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
              <p className="text-[12px] text-[#6B7280] mt-8 md:mt-0 hidden md:block">© 2026 Mindacc. All rights reserved.</p>
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
    </main>
  );
}
