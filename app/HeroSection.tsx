"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export function LiquidGlassDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <filter
          id="liquid-glass-distortion"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.012"
            numOctaves="2"
            seed="8"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="3" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="45"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function LiquidGlassBadge({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div
      className={`liquid-glass-badge relative inline-flex items-center px-5 py-2 text-[15px] text-white rounded-xl whitespace-nowrap ${className}`}
    >
      {/* specular highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 60%)",
          mixBlendMode: "overlay",
        }}
      />
      {/* beveled edge */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -1px 1px rgba(0,0,0,0.25)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </div>
  );
}

export default function HeroSection() {
  const dot1Ref = useRef<HTMLDivElement>(null);
  const dot2Ref = useRef<HTMLDivElement>(null);
  const dot3Ref = useRef<HTMLDivElement>(null);
  const mouseXRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // mouseXRef.current = (e.clientX / window.innerWidth) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let startTime: number | null = null;
    let rafId: number;

    const updateDot = (
      ref: React.RefObject<HTMLDivElement | null>,
      baseAngleDeg: number,
      radius: number,
      period: number,
      delay: number,
      mousePx: number,
      t: number,
      mx: number
    ) => {
      if (!ref.current) return;
      const baseAngle = (baseAngleDeg * Math.PI) / 180;
      // 10px arc oscillation → convert to angle delta
      const boomerangAngle =
        (10 / radius) * Math.sin(((t - delay) * 2 * Math.PI) / period);
      // Mouse parallax → convert px to angle delta
      const mouseAngle = (mousePx / radius) * mx;
      const finalAngle = baseAngle + boomerangAngle + mouseAngle;
      // Position on circle border (angle from 12 o'clock, clockwise)
      const left = 50 + 50 * Math.sin(finalAngle);
      const top = 50 - 50 * Math.cos(finalAngle);
      ref.current.style.left = `${left}%`;
      ref.current.style.top = `${top}%`;
    };

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const t = (timestamp - startTime) / 1000;
      const mx = mouseXRef.current;
      //                     baseAngle  radius  period  delay  mousePx
      // updateDot(dot1Ref,     60,        190,    3,      0,     15, t, mx);
      // updateDot(dot2Ref,     42,        230,    3.5,    1,     20, t, mx);
      // updateDot(dot3Ref,     315,       270,    4,      0.5,   12, t, mx);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      className="relative w-full min-h-[50vh] overflow-hidden font-sans flex flex-col"
      style={{
        background:
          "radial-gradient(51.25% 50.34% at 50% 49.89%, #42A8E4 0%, #000000 100%)",
      }}
    >
      <LiquidGlassDefs />
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 flex-1 flex flex-col md:flex-row items-center justify-center relative z-10 w-full gap-10 mt-20 md:mt-26">
        {/* Left Side: Text Content */}
        <div className="flex-1 flex flex-col items-start gap-3">
          <h1 className="text-[40px] font-bold text-white leading-[1.1]">
            Hi, <span className="text-[#03E6FF]">Mohit Jangid</span> Here{" "}
            <span className="inline-block w-16 h-1 bg-white align-middle ml-2"></span>
            <br className="hidden md:block" />
            <span className="mt-3 block">Designing Products That Scale</span>
          </h1>

          <p className="text-gray-300 text-[18px] font-light">
            Product Designer having Exp of 1.5 Years ,focused on UX Strategy,
            <br />
            Interface Design, and Growth-Driven Experiences.
          </p>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohit-jangid-04mj711/"
            className="group mt-4 flex items-center gap-2 bg-white text-black px-3 py-1.5 font-bold text-[18px] hover:bg-gray-200 transition-colors shadow-lg shadow-white/10 rounded-none"
          >
            <FaLinkedin className="text-xl" />
            My Linkedin
            <FiArrowUpRight
              className="text-xl ml-1 group-hover:rotate-45 transition-all duration-300"
              strokeWidth={3}
            />
          </a>
        </div>

        {/* Right Side: Visuals (Concentric circles, image, badges) */}
        <div className="flex-1 relative w-full flex justify-center items-center mt-12 md:mt-0">
          {/* Concentric Circles with Dots and Badges */}
          <div className="absolute inset-0 -bottom-38 flex items-center justify-center pointer-events-none z-0">
            {/* Inner Circle (380px, r=190) */}
            <div className="w-[380px] h-[380px] rounded-full border border-white/40 absolute">
              <div
                ref={dot1Ref}
                className="absolute pointer-events-auto"
                style={{ top: "25%", left: "117%", transform: "translate(-50%, -50%)" }}
              >
                <LiquidGlassBadge className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3">
                  Product Designer
                </LiquidGlassBadge>
                <div className="relative w-2.5 h-2.5 rounded-full bg-white">
                  <div className="absolute inset-0 rounded-full bg-white blur-md opacity-80 scale-[2.8]" />
                </div>
              </div>
            </div>

            {/* Middle Circle (460px, r=230) */}
            <div className="w-[460px] h-[460px] rounded-full border border-white/40 absolute">
              <div
                ref={dot2Ref}
                className="absolute pointer-events-auto"
                style={{ top: "0", left: "39.5%", transform: "translate(-50%, -50%)" }}
              >
                <LiquidGlassBadge className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3">
                  Video Editor
                </LiquidGlassBadge>
                <div className="relative w-2.5 h-2.5 rounded-full bg-white">
                  <div className="absolute inset-0 rounded-full bg-white blur-md opacity-80 scale-[2.8]" />
                </div>
              </div>
            </div>

            {/* Outer Circle (540px, r=270) */}
            <div className="w-[540px] h-[540px] rounded-full border border-white/40 absolute">
              <div
                ref={dot3Ref}
                className="absolute pointer-events-auto"
                style={{ top: "30%", left: "15%", transform: "translate(-50%, -50%)" }}
              >
                <LiquidGlassBadge className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3">
                  UI/UX Designer
                </LiquidGlassBadge>
                <div className="relative w-2.5 h-2.5 rounded-full bg-white">
                  <div className="absolute inset-0 rounded-full bg-white blur-md opacity-80 scale-[2.8]" />
                </div>
              </div>
            </div>
          </div>

          {/* User Image */}
          <div className="relative z-10 w-[444px] flex items-end justify-center">
            <Image
              src="/mohit.png"
              alt="Mohit Jangid"
              width={444}
              height={600}
              priority
              className="w-full h-auto object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 py-4 flex items-center justify-between mt-4 z-50">
      {/* Logo */}
      <div
        className="px-6 py-3 rounded-md shadow-lg backdrop-blur-sm flex-1 flex justify-between items-center relative"
        style={{ backgroundColor: "rgba(13, 32, 42, 0.5)" }}
      >
        <div className="text-white font-black text-2xl tracking-wider flex items-center">
          {/* Custom MJ Logo using repeating linear gradient for striped effect */}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 2px, transparent 2px, transparent 4px)",
              WebkitBackgroundClip: "text",
            }}
          >
            MJ
          </span>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 text-[18px] font-medium">
          <li onClick={() => scrollToSection('about')} className="hover:text-white cursor-pointer transition-colors">
            About me
          </li>
          <li onClick={() => scrollToSection('projects')} className="hover:text-white cursor-pointer transition-colors">
            Project
          </li>
          <li onClick={() => scrollToSection('skills')} className="hover:text-white cursor-pointer transition-colors">
            Skills
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            <a href="https://drive.google.com/file/d/1DBRlRUcCKhm_tk4NycV995AzEZKjl1dB/view" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li onClick={() => scrollToSection('contact')} className="hover:text-white cursor-pointer transition-colors">
            Contact
          </li>
        </ul>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-md shadow-lg backdrop-blur-md md:hidden flex flex-col gap-4 border border-white/10"
               style={{ backgroundColor: "rgba(13, 32, 42, 0.95)" }}>
            <div onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white cursor-pointer transition-colors font-medium text-lg">
              About me
            </div>
            <div onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white cursor-pointer transition-colors font-medium text-lg">
              Project
            </div>
            <div onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white cursor-pointer transition-colors font-medium text-lg">
              Skills
            </div>
            <a href="https://drive.google.com/file/d/1DBRlRUcCKhm_tk4NycV995AzEZKjl1dB/view" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white cursor-pointer transition-colors font-medium text-lg">
              Resume
            </a>
            <div onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white cursor-pointer transition-colors font-medium text-lg">
              Contact
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
