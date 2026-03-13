"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteHeader from "@/components/site-header";

export default function Home() {
  const [atlasSystemVisible, setAtlasSystemVisible] = useState(false);
  const atlasSystemRef = useRef(null);

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
  return (
    <main style={{ backgroundColor: "#fafafb" }}>
      <SiteHeader />

      {/* Section 1 — Full-screen video */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vvid-i42tSdGD2TCvkbvcPPapKXyobgSixb.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay so logo stays readable */}
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* Section 2 — Big central statement */}
      <section
        className="w-full min-h-screen flex items-center justify-center px-6 py-24"
        style={{ backgroundColor: "#fafafb" }}
      >
        <div className="max-w-6xl w-full text-center">
          <h2
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-bold leading-[1.08] tracking-tight text-balance"
            style={{
              color: "#1e1f2b",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Behavioral AI that understands{" "}
            <span style={{ color: "#a0a3b1" }}>why</span> people do what they do.
          </h2>
          <p
            className="mt-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#6b6e85" }}
          >
            Mindacc is a behavioral intelligence platform that models how people think,
            explains how they decide, and helps individuals and organizations
            make better decisions — at scale.
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
              description: "Personal behavioral intelligence\nBuild your cognitive model and work with Atlas\nas a reasoning partner for decisions and planning.",
              title: "Atlas Professional",
              href: "/atlas/professional",
            },
            {
              description: "Team intelligence\nUnderstand how people think together and improve\ncommunication, coordination, and decision dynamics.",
              title: "Atlas Teams",
              href: "/atlas/teams",
            },
            {
              description: "Organizational intelligence\nAnalyze behavioral patterns across the workforce\nto support leadership and strategic decision making.",
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
                      className="text-[20px] text-neutral-600 leading-relaxed max-w-[520px] whitespace-pre-line"
                      style={{ fontFamily: "Inter, sans-serif" }}
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
                className="text-[42px] leading-[1.15] tracking-tight font-medium text-neutral-900 max-w-[520px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Human intelligence,<br />understood by machines.
              </h2>
            </div>

            {/* Right — explanatory text */}
            <div className="col-span-5 col-start-8 text-[18px] leading-[1.6] text-neutral-600 max-w-[420px] space-y-6">
              <p>Atlas bridges behavioral science and artificial intelligence.</p>
              <p>
                By modeling how people think and decide, it enables a new form
                of collaboration between human judgment and machine reasoning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
