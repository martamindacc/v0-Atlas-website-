import React from "react";

type Dot = { x: number; y: number; r: number; o: number };

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gaussian(rand: () => number) {
  let u = 0;
  let v = 0;
  while (u === 0) u = rand();
  while (v === 0) v = rand();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function makeDots(count: number): Dot[] {
  const rand = mulberry32(42);
  const clusters = [
    { x: 0.63, y: 0.42, w: 2.3, s: 0.07 }, // Europe
    { x: 0.20, y: 0.33, w: 1.9, s: 0.08 }, // North America
    { x: 0.18, y: 0.74, w: 1.2, s: 0.08 }, // South America
    { x: 0.92, y: 0.45, w: 1.1, s: 0.07 }, // East Asia edge
    { x: 0.78, y: 0.83, w: 0.8, s: 0.08 }, // South Africa edge
  ];

  const dots: Dot[] = [];
  while (dots.length < count) {
    const c = clusters[Math.floor(rand() * clusters.length)];
    const x = c.x + gaussian(rand) * c.s;
    const y = c.y + gaussian(rand) * c.s;

    const dx = x - 0.5;
    const dy = y - 0.5;
    const inside = dx * dx + dy * dy < 0.245; // inside globe
    if (!inside) continue;

    dots.push({
      x,
      y,
      r: 0.8 + rand() * 1.15,
      o: 0.4 + rand() * 0.45 * c.w * 0.45,
    });
  }
  return dots;
}

const dots = makeDots(2200);

export default function MissionGlobe() {
  const meridians = Array.from({ length: 17 }, (_, i) => i - 8);
  const latitudes = Array.from({ length: 13 }, (_, i) => i - 6);

  return (
    <section className="w-full bg-[#fafafb] py-10 md:py-16">
      <div className="mx-auto max-w-[1500px] px-4">
        <div className="relative mx-auto aspect-square w-[min(90vw,1220px)]">
          <svg
            viewBox="0 0 1000 1000"
            className="h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="sphereClip">
                <circle cx="500" cy="500" r="470" />
              </clipPath>
              <radialGradient id="sphereBg" cx="50%" cy="44%" r="60%">
                <stop offset="0%" stopColor="#f9f9f6" />
                <stop offset="60%" stopColor="#f3f3ef" />
                <stop offset="100%" stopColor="#ecece8" />
              </radialGradient>
              <radialGradient id="vignette" cx="50%" cy="50%" r="58%">
                <stop offset="74%" stopColor="rgba(0,0,0,0)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
              </radialGradient>
            </defs>

            <circle cx="500" cy="500" r="470" fill="url(#sphereBg)" />
            <g clipPath="url(#sphereClip)" stroke="#d3d3cf" strokeWidth="1.2" fill="none">
              {meridians.map((m) => {
                const offset = m * 48;
                return (
                  <path
                    key={`m-${m}`}
                    d={`M 500 28 Q ${500 + offset * 0.56} 500 500 972`}
                    opacity={0.75}
                  />
                );
              })}

              {latitudes.map((l) => {
                const y = 500 + l * 66;
                const curve = Math.abs(l) * 4.5;
                return (
                  <path
                    key={`l-${l}`}
                    d={`M 28 ${y} Q 500 ${y + curve} 972 ${y}`}
                    opacity={0.72}
                  />
                );
              })}

              <ellipse cx="500" cy="500" rx="430" ry="468" opacity="0.35" />
              <ellipse cx="500" cy="500" rx="320" ry="468" opacity="0.28" />
              <ellipse cx="500" cy="500" rx="210" ry="468" opacity="0.22" />
            </g>

            <g clipPath="url(#sphereClip)">
              {dots.map((d, i) => (
                <circle
                  key={i}
                  cx={d.x * 1000}
                  cy={d.y * 1000}
                  r={d.r}
                  fill="#73b424"
                  fillOpacity={Math.min(0.86, d.o)}
                />
              ))}
            </g>

            <circle cx="500" cy="500" r="470" fill="url(#vignette)" />
            <circle cx="500" cy="500" r="470" fill="none" stroke="#d0d0cb" strokeWidth="2.2" />
          </svg>
        </div>
      </div>
    </section>
  );
}
