import { useEffect, useMemo, useRef, useState } from "react";
import { geoGraticule, geoOrthographic, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, Geometry } from "geojson";

type Story = { title: string; body: string };
type Cluster = { lon: number; lat: number; spreadLon: number; spreadLat: number; weight: number };
type Dot = { x: number; y: number; r: number; o: number };

const stories: Story[] = [
  {
    title: "Atlas Changes That",
    body: "AI's greatest power is unlocking insight at scale — and we're using it to reveal how people, teams, and organizations actually think and work together. Until now, that kind of visibility was rare — limited to intuition, occasional feedback, or expensive consultants who could only be in one place at a time. Atlas changes that.",
  },
  {
    title: "Clarity for Every Level",
    body: "Every leader, every team, every company deserves to understand what's really happening beneath the surface. Atlas brings clear, real-time visibility into patterns of thinking and alignment — from individual judgment to team dynamics to enterprise-wide flow — right when and where it matters most.",
  },
  {
    title: "Real Patterns, Not Reports",
    body: "The difference between a tool and true understanding is visibility into how patterns form, decisions emerge, and alignment builds — across people and systems. We've spent years solving the hard problems of surfacing those live patterns in a way that feels immediately useful. That's what sets Atlas apart.",
  },
  {
    title: "Augmenting Human Strength",
    body: "Giving augmentative AI to every person and every team is one of the highest-leverage things any organization can do. Not AI that replaces human judgment — AI that makes it clearer, faster, and more powerful. The companies that win in the next decade will be the ones that help their people see and align better — not just the ones that add more tools.",
  },
  {
    title: "Ambition with Care",
    body: "This moment calls for both bold vision and serious responsibility. AI should make work more human, more aligned, more intelligent — not less. Every choice we make is guided by that principle. We're here to turn invisible dynamics into visible strength — so individuals, teams, and organizations don't just hope for better performance... they see it, understand it, and build it.",
  },
];

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

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function MissionGlobeScroll() {
  const [countries, setCountries] = useState<Feature<Geometry>[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLArticleElement | null)[]>([]);

  const projection = useMemo(
    () =>
      geoOrthographic()
        .translate([500, 500])
        .scale(440)
        .rotate([18, -16, 0])
        .clipAngle(90)
        .precision(0.2),
    []
  );

  const path = useMemo(() => geoPath(projection), [projection]);
  const graticule = useMemo(() => geoGraticule().step([10, 10])(), []);

  const dots = useMemo(() => {
    const rand = mulberry32(77);
    const clusters: Cluster[] = [
      { lon: 12, lat: 50, spreadLon: 16, spreadLat: 9, weight: 2.2 },
      { lon: -88, lat: 38, spreadLon: 18, spreadLat: 10, weight: 1.8 },
      { lon: -74, lat: -15, spreadLon: 16, spreadLat: 11, weight: 1.2 },
      { lon: 126, lat: 34, spreadLon: 14, spreadLat: 10, weight: 1.0 },
      { lon: 26, lat: -29, spreadLon: 13, spreadLat: 9, weight: 0.7 },
    ];

    const weighted = clusters.flatMap((c) =>
      Array.from({ length: Math.round(c.weight * 10) }, () => c)
    );
    const out: Dot[] = [];
    let attempts = 0;

    while (out.length < 2200 && attempts < 90000) {
      attempts++;
      const c = weighted[Math.floor(rand() * weighted.length)];
      const lon = c.lon + gaussian(rand) * c.spreadLon;
      const lat = c.lat + gaussian(rand) * c.spreadLat;
      const p = projection([lon, lat]);
      if (!p) continue;

      const dx = p[0] - 500;
      const dy = p[1] - 500;
      if (dx * dx + dy * dy > 440 * 440) continue;

      out.push({
        x: p[0],
        y: p[1],
        r: 0.65 + rand() * 1.1,
        o: 0.3 + rand() * 0.5,
      });
    }

    return out;
  }, [projection]);

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
          const fc = feature(topo, topo.objects.countries) as { features: Feature<Geometry>[] };
          if (mounted) setCountries(fc.features);
          return;
        } catch {}
      }
    }

    loadWorld();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = section.offsetHeight - vh;
      if (scrollable <= 0) return;

      const progressed = clamp(-rect.top, 0, scrollable);
      const progress = progressed / scrollable; // 0..1 across whole section
      const n = stories.length;
      const segment = 1 / n;

      for (let i = 0; i < n; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        const start = i * segment;
        const local = clamp((progress - start) / segment, 0, 1);

        const y = 38 - local * 52; // bottom -> over globe -> slightly above
        const scale = 0.985 + local * 0.03;

        let opacity = 0;
        if (local > 0 && local < 1) {
          if (local < 0.18) opacity = local / 0.18;
          else if (local > 0.82) opacity = (1 - local) / 0.18;
          else opacity = 1;
        }

        el.style.transform = `translate(-50%, ${y}vh) scale(${scale})`;
        el.style.opacity = String(clamp(opacity, 0, 1));
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#fafafb]"
      style={{ height: `${stories.length * 110}vh` }}
    >
      <div className="sticky top-0 z-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="relative aspect-square w-[min(82vw,1080px)]">
          <svg viewBox="0 0 1000 1000" className="h-full w-full" aria-hidden="true">
            <defs>
              <clipPath id="globeClip">
                <circle cx="500" cy="500" r="440" />
              </clipPath>
              <radialGradient id="globeFill" cx="50%" cy="44%" r="60%">
                <stop offset="0%" stopColor="#f9f9f6" />
                <stop offset="66%" stopColor="#f2f2ee" />
                <stop offset="100%" stopColor="#ecece8" />
              </radialGradient>
              <radialGradient id="vignette" cx="50%" cy="50%" r="58%">
                <stop offset="78%" stopColor="rgba(0,0,0,0)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.07)" />
              </radialGradient>
            </defs>

            <circle cx="500" cy="500" r="440" fill="url(#globeFill)" />

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

            <circle cx="500" cy="500" r="440" fill="url(#vignette)" />
            <circle cx="500" cy="500" r="440" fill="none" stroke="#d0d0cb" strokeWidth="2" />
          </svg>

          <div className="pointer-events-none absolute inset-0">
            {stories.map((story, i) => (
              <article
                key={story.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute left-1/2 top-0 w-[min(92%,760px)] text-center opacity-0 will-change-transform"
                style={{ transform: "translate(-50%, 38vh) scale(0.985)" }}
              >
                <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#1a1a1a]/80">
                  {story.title}
                </h3>
                <p className="text-[24px] leading-[1.75]" style={{ color: "#202426" }}>
                  {story.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}