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

function buildDots(projection: ReturnType<typeof geoOrthographic>) {
  const rand = mulberry32(77);
  const clusters = [
    { lon: 12, lat: 50, sLon: 16, sLat: 9, w: 2.2 },
    { lon: -88, lat: 38, sLon: 18, sLat: 10, w: 1.8 },
    { lon: -74, lat: -15, sLon: 16, sLat: 11, w: 1.2 },
    { lon: 126, lat: 34, sLon: 14, sLat: 10, w: 1.0 },
    { lon: 26, lat: -29, sLon: 13, sLat: 9, w: 0.7 },
  ];

  const weighted = clusters.flatMap((c) =>
    Array.from({ length: Math.round(c.w * 10) }, () => c)
  );

  const out: Dot[] = [];
  let tries = 0;

  while (out.length < 2200 && tries < 100000) {
    tries++;
    const c = weighted[Math.floor(rand() * weighted.length)];
    const lon = c.lon + gaussian(rand) * c.sLon;
    const lat = c.lat + gaussian(rand) * c.sLat;
    const p = projection([lon, lat]);
    if (!p) continue;

    const dx = p[0] - 500;
    const dy = p[1] - 500;
    if (dx * dx + dy * dy > 430 * 430) continue;

    out.push({
      x: p[0],
      y: p[1],
      r: 0.65 + rand() * 1.1,
      o: 0.3 + rand() * 0.5,
    });
  }

  return out;
}

export default function MissionGlobeVisual({ className = "" }: { className?: string }) {
  const [countries, setCountries] = useState<Feature<Geometry>[]>([]);

  const projection = useMemo(
    () =>
      geoOrthographic()
        .translate([500, 500])
        .scale(430)
        .rotate([18, -16, 0])
        .clipAngle(90)
        .precision(0.2),
    []
  );

  const path = useMemo(() => geoPath(projection), [projection]);
  const graticule = useMemo(() => geoGraticule().step([10, 10])(), []);
  const dots = useMemo(() => buildDots(projection), [projection]);

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
          // try next
        }
      }
    }

    loadWorld();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={`relative aspect-square ${className}`}>
      <svg viewBox="0 0 1000 1000" className="h-full w-full" aria-hidden="true">
        <defs>
          <clipPath id="globeClip">
            <circle cx="500" cy="500" r="430" />
          </clipPath>
        </defs>

        <circle cx="500" cy="500" r="430" fill="#f3f3ef" />
        <g clipPath="url(#globeClip)">
          <path d={path(graticule) ?? ""} fill="none" stroke="#d7d7d2" strokeWidth="1" />
          {countries.map((c, i) => (
            <path
              key={i}
              d={path(c) ?? ""}
              fill="none"
              stroke="#c6c6c0"
              strokeWidth="1.02"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {dots.map((d, i) => (
            <circle
              key={i}
              cx={d.x}
              cy={d.y}
              r={d.r}
              fill="#73b424"
              fillOpacity={Math.min(0.82, d.o)}
            />
          ))}
        </g>

        <circle cx="500" cy="500" r="430" fill="none" stroke="#d0d0cb" strokeWidth="2" />
      </svg>
    </div>
  );
}
