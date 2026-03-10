'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const POPULAR_COUNTRIES = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Canada",
  "Australia",
  "Netherlands",
  "Switzerland",
  "Sweden",
  "Norway",
  "Denmark",
  "Singapore"
];

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

export default function SiteHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsDrawerOpen(false);
    };

    if (isDrawerOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  return (
    <>
      <div className="fixed top-0 z-50 w-full pt-[14px] px-3">
        <header
          className="flex items-center justify-between px-8 h-[67px] border border-black/[0.06] bg-white/20 backdrop-blur backdrop-saturate-150 shadow-[0_1px_3px_rgba(0,0,0,0.06)] rounded-[14px]"
        >
          {/* Left — Logo + wordmark */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/mindacc_logo.png"
              alt="mindacc logo"
              className="h-[22px] w-auto"
            />
            <span
              className="text-[18px] font-medium tracking-[0.02em] text-neutral-700 uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              MINDACC
            </span>
          </Link>

          {/* Right — Controls cluster */}
          <div className="flex items-center gap-3">
            {/* Get Started CTA */}
            <button
              onClick={() => setIsContactOpen(true)}
              className="flex items-center justify-center min-w-[190px] border border-black/30 bg-white/80 text-[#1e1f2b] text-[15px] font-normal tracking-tight px-8 h-[40px] hover:bg-[#1e2124] hover:text-white hover:border-[#1e2124] transition-colors cursor-pointer"
            >
              Get Started
            </button>

            {/* Search icon */}
            <button
              className="flex items-center justify-center w-[40px] h-[40px] border border-black/30 bg-white/80 text-[#1e1f2b] hover:bg-[#1e2124] hover:text-white hover:border-[#1e2124] transition-colors cursor-pointer"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Menu icon */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="flex items-center justify-center w-[40px] h-[40px] border border-black/30 bg-white/80 text-[#1e1f2b] hover:bg-[#1e2124] hover:text-white hover:border-[#1e2124] transition-colors cursor-pointer"
              aria-label="Menu"
            >
              <div className="relative w-[18px] h-[14px]">
                {/* top line */}
                <span
                  className={`absolute left-0 top-0 w-full h-px bg-current transition-[top,transform] duration-200 ${
                    isDrawerOpen ? 'top-[6px] rotate-45' : ''
                  }`}
                />
                {/* middle line */}
                <span
                  className={`absolute left-0 top-[6px] w-full h-px bg-current transition-opacity duration-200 ${
                    isDrawerOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {/* bottom line */}
                <span
                  className={`absolute left-0 bottom-0 w-full h-px bg-current transition-[bottom,transform] duration-200 ${
                    isDrawerOpen ? 'bottom-[6px] -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </header>
      </div>

      {/* Background overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 top-0 z-40 bg-black/18 transition-opacity duration-160"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Background overlay for contact drawer */}
      {isContactOpen && (
        <div
          className="fixed inset-0 top-0 z-40 bg-black/18 transition-opacity duration-160"
          onClick={() => setIsContactOpen(false)}
        />
      )}

      {/* Navigation drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen bg-[#fafafb] shadow-[-8px_0_24px_rgba(0,0,0,0.06)] transition-transform duration-220 ease-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          width: '45vw',
        }}
      >
        {/* Drawer header controls */}
        <div className="flex items-center justify-end gap-3 h-[67px] px-8">

          <button
            className="flex items-center justify-center min-w-[190px] border border-black/30 bg-white/80 text-[#1e1f2b] text-[15px] font-normal tracking-tight px-8 h-[40px] hover:bg-[#1e2124] hover:text-white hover:border-[#1e2124] transition-colors cursor-pointer"
          >
            Get Started
          </button>

          <button
            className="flex items-center justify-center w-[40px] h-[40px] border border-black/30 bg-white/80 text-[#1e1f2b] hover:bg-[#1e2124] hover:text-white hover:border-[#1e2124] transition-colors cursor-pointer"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button
            onClick={() => setIsDrawerOpen(false)}
            className="flex items-center justify-center w-[40px] h-[40px] border border-black/30 bg-white/80 text-[#1e1f2b] hover:bg-[#1e2124] hover:text-white hover:border-[#1e2124] transition-colors cursor-pointer"
          >
            <div className="relative w-[18px] h-[14px]">
              <span className="absolute left-0 top-[6px] w-full h-px bg-current rotate-45"></span>
              <span className="absolute left-0 top-[6px] w-full h-px bg-current -rotate-45"></span>
            </div>
          </button>

        </div>

        {/* Navigation content */}
        <nav className="pt-[48px] px-[48px]">
          <div
            className={`transition-all duration-700 ease-out will-change-[opacity,transform] ${
              isDrawerOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            style={{ transitionDelay: isDrawerOpen ? '180ms' : '0ms' }}
          >
            {/* Platform section */}
            <div className="mb-[64px]">
              <h3
                className="text-[12px] font-medium tracking-[0.05em] text-neutral-500 uppercase mb-[20px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Platform
              </h3>
              <div className="space-y-8">
                <Link href="/atlas/professional" className="block group">
                  <span
                    className="text-[32px] font-medium tracking-tight text-neutral-900 relative inline-block transition-all duration-[380ms] ease-out group-hover:translate-x-[2px] group-hover:tracking-[0.005em]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Atlas Professional
                  </span>
                </Link>
                <Link href="/atlas/teams" className="block group">
                  <span
                    className="text-[32px] font-medium tracking-tight text-neutral-900 relative inline-block transition-all duration-[380ms] ease-out group-hover:translate-x-[2px] group-hover:tracking-[0.005em]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Atlas Teams
                  </span>
                </Link>
                <Link href="/atlas/global" className="block group">
                  <span
                    className="text-[32px] font-medium tracking-tight text-neutral-900 relative inline-block transition-all duration-[380ms] ease-out group-hover:translate-x-[2px] group-hover:tracking-[0.005em]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Atlas Global
                  </span>
                </Link>
              </div>
            </div>

            {/* Company section */}
            <div className="mb-[64px]">
              <h3
                className="text-[12px] font-medium tracking-[0.05em] text-neutral-500 uppercase mb-[20px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Company
              </h3>
              <div className="space-y-8">
                <a href="#" className="block group">
                  <span
                    className="text-[32px] font-medium tracking-tight text-neutral-900 relative inline-block transition-all duration-[380ms] ease-out group-hover:translate-x-[2px] group-hover:tracking-[0.005em]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Mission
                  </span>
                </a>
                <a href="/cognitive-systems-lab" className="block group">
                  <span
                    className="text-[32px] font-medium tracking-tight text-neutral-900 relative inline-block transition-all duration-[380ms] ease-out group-hover:translate-x-[2px] group-hover:tracking-[0.005em]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Cognitive Systems Lab
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Contact Form drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen overflow-y-auto bg-[#fafafb] shadow-[-8px_0_24px_rgba(0,0,0,0.06)] transition-transform duration-220 ease-out ${
          isContactOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: 'clamp(460px, 45vw, 640px)' }}
      >
        {/* Drawer header controls */}
        <div className="flex items-center justify-between h-[67px] px-8">
          <div
            className="text-[12px] uppercase tracking-[0.11em] text-[#7B8087]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            CONTACT / DEMO REQUEST
          </div>
          <button
            onClick={() => setIsContactOpen(false)}
            className="flex items-center justify-center w-[40px] h-[40px] border border-black/30 bg-white/80 text-[#1e1f2b] hover:bg-[#1e2124] hover:text-white hover:border-[#1e2124] transition-colors cursor-pointer"
          >
            X
          </button>
        </div>

        {/* Form container */}
        <div className="px-[48px] pt-6 md:pt-8 pb-12">
          <h2
            className="text-[34px] font-medium tracking-tight text-neutral-900 mb-[48px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Interested in solving your problems with Atlas?
          </h2>

          {/* Form fields */}
          <div className="space-y-10">
            <div>
              <label className="text-[12px] uppercase tracking-[0.05em] text-neutral-500">
                First Name
                <span className="text-[#E5484D] text-[10px] ml-1 align-super">*</span>
              </label>
              <input className="w-full border-b border-black/30 bg-transparent h-[40px] outline-none" />
            </div>

            <div>
              <label className="text-[12px] uppercase tracking-[0.05em] text-neutral-500">
                Last Name
                <span className="text-[#E5484D] text-[10px] ml-1 align-super">*</span>
              </label>
              <input className="w-full border-b border-black/30 bg-transparent h-[40px] outline-none" />
            </div>

            <div>
              <label className="text-[12px] uppercase tracking-[0.05em] text-neutral-500">
                Business Email
                <span className="text-[#E5484D] text-[10px] ml-1 align-super">*</span>
              </label>
              <input className="w-full border-b border-black/30 bg-transparent h-[40px] outline-none" />
            </div>

            <div>
              <label className="text-[12px] uppercase tracking-[0.05em] text-neutral-500">
                Phone Number
                <span className="text-[#E5484D] text-[10px] ml-1 align-super">*</span>
              </label>
              <input className="w-full border-b border-black/30 bg-transparent h-[40px] outline-none" />
            </div>

            <div>
              <label className="text-[12px] uppercase tracking-[0.05em] text-neutral-500">
                Job Title
                <span className="text-[#E5484D] text-[10px] ml-1 align-super">*</span>
              </label>
              <input className="w-full border-b border-black/30 bg-transparent h-[40px] outline-none" />
            </div>

            <div>
              <label className="text-[12px] uppercase tracking-[0.05em] text-neutral-500">
                Company / Institution
                <span className="text-[#E5484D] text-[10px] ml-1 align-super">*</span>
              </label>
              <input className="w-full border-b border-black/30 bg-transparent h-[40px] outline-none" />
            </div>

            <div className="pb-6 md:pb-7 border-b border-black/45">
              <label className="block text-[12px] md:text-[13px] font-normal uppercase tracking-[0.10em] text-[#6F747B] mb-5">
                Country
                <span className="text-[#E5484D] text-[10px] ml-1 align-super">*</span>
              </label>
              <select className="w-full bg-transparent outline-none py-1.5">
                <option value="">Select...</option>
                {POPULAR_COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
                <option disabled>──────────</option>
                {COUNTRIES.filter(
                  (country) => !POPULAR_COUNTRIES.includes(country)
                ).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[12px] uppercase tracking-[0.05em] text-neutral-500">
                Message
              </label>
              <input className="w-full border-b border-black/30 bg-transparent h-[40px] outline-none" />
            </div>

            <div className="pt-6 pb-6">
              <label className="block text-[12px] md:text-[13px] font-normal uppercase tracking-[0.10em] leading-[1.25] text-[#6F747B] mb-5">
                Message
                <span className="text-[#E5484D] text-[10px] ml-1 align-super">*</span>
              </label>
              <textarea
                rows={5}
                className="w-full border border-black/45 bg-transparent outline-none px-4 py-3 resize-none"
              />
            </div>

            <div className="pt-10">
              <button
                className="flex items-center justify-center min-w-[220px] border border-black/30 bg-white/80 text-[#1e1f2b] text-[15px] tracking-tight px-8 h-[44px] hover:bg-[#1e2124] hover:text-white hover:border-[#1e2124] transition-colors cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
