"use client";

import { useEffect, useMemo, useState } from "react";
import { geoGraticule, geoOrthographic, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, Geometry } from "geojson";

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
  const rand = mulberry32(77);
  const clusters = [
    { x: 0.63, y: 0.42, s: 0.07 }, // Europe
    { x: 0.21, y: 0.33, s: 0.08 }, // North America
    { x: 0.18, y: 0.74, s: 0.08 }, // South America
    { x: 0.92, y: 0.45, s: 0.07 }, // East Asia edge
    { x: 0.80, y: 0.83, s: 0.08 }, // South Africa edge
  ];

  const dots: Dot[] = [];
  while (dots.length < count) {
    const c = clusters[Math.floor(rand() * clusters.length)];
    const x = c.x + gaussian(rand) * c.s;
    const y = c.y + gaussian(rand) * c.s;
    const dx = x - 0.5;
    const dy = y - 0.5;
    if (dx * dx + dy * dy > 0.245) continue; // inside circle
    dots.push({ x, y, r: 0.7 + rand() * 1.15, o: 0.35 + rand() * 0.45 });
  }
  return dots;
}

export default function MissionGlobe() {
  const [countries, setCountries] = useState<Feature<Geometry>[]>([]);
  const dots = useMemo(() => makeDots(2200), []);

  const projection = useMemo(
    () =>
      geoOrthographic()
        .translate([500, 500])
        .scale(470)
        .rotate([18, -18, 0])
        .clipAngle(90)
        .precision(0.2),
    []
  );

  const path = useMemo(() => geoPath(projection), [projection]);
  const graticule = useMemo(() => geoGraticule().step([10, 10])(), []);

  useEffect(() => {
    let mounted = true;

    async function loadWorld() {
      const urls = [
        "/data/countries-110m.json",
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
      ];

      for (const url of urls) {
        try {
          const res = await fetch(url);
          if (!res.ok) continue;
          const topo = await res.json();
          const fc = feature(topo, topo.objects.countries) as {
            features: Feature<Geometry>[];
          };
          if (mounted) setCountries(fc.features);
          return;
        } catch {
          // try next url
        }
      }
    }

    loadWorld();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="w-full bg-[#fafafb] py-10 md:py-16">
      <div className="mx-auto max-w-[1500px] px-4">
        <div className="relative mx-auto aspect-square w-[min(90vw,1220px)]">
          <svg viewBox="0 0 1000 1000" className="h-full w-full" aria-hidden="true">
            <defs>
              <clipPath id="globeClip">
                <circle cx="500" cy="500" r="470" />
              </clipPath>

              <radialGradient id="globeFill" cx="50%" cy="44%" r="60%">
                <stop offset="0%" stopColor="#f9f9f6" />
                <stop offset="65%" stopColor="#f2f2ee" />
                <stop offset="100%" stopColor="#ecece8" />
              </radialGradient>

              <radialGradient id="vignette" cx="50%" cy="50%" r="58%">
                <stop offset="76%" stopColor="rgba(0,0,0,0)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.07)" />
              </radialGradient>
            </defs>

            <circle cx="500" cy="500" r="470" fill="url(#globeFill)" />

            <g clipPath="url(#globeClip)">
              <path d={path(graticule) ?? ""} fill="none" stroke="#d7d7d2" strokeWidth="1.05" />

              {countries.map((c, i) => (
                <path
                  key={i}
                  d={path(c) ?? ""}
                  fill="none"
                  stroke="#c5c5bf"
                  strokeWidth="1.05"
                  vectorEffect="non-scaling-stroke"
                />
              ))}

              {dots.map((d, i) => (
                <circle
                  key={i}
                  cx={d.x * 1000}
                  cy={d.y * 1000}
                  r={d.r}
                  fill="#73b424"
                  fillOpacity={Math.min(0.82, d.o)}
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
