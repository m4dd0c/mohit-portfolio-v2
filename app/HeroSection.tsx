import Image from "next/image";
import React from "react";
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
            {/* Inner Circle */}
            <div className="w-[380px] h-[380px] rounded-full border border-white/40 absolute">
              {/* Product Designer Dot & Badge */}
              <div
                className="absolute pointer-events-auto"
                style={{
                  top: "25%",
                  left: "116.7%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <LiquidGlassBadge className="absolute bottom-full -translate-x-1/2 mb-3">
                  Product Designer
                </LiquidGlassBadge>
                <div className="relative w-2.5 h-2.5 rounded-full bg-white">
                  <div className="absolute inset-0 rounded-full bg-white blur-md opacity-80 scale-[2.8]" />
                </div>
              </div>
            </div>

            {/* Middle Circle */}
            <div className="w-[460px] h-[460px] rounded-full border border-white/40 absolute">
              {/* Video Editor Dot & Badge */}
              <div
                className="absolute pointer-events-auto"
                style={{
                  top: "0%",
                  left: "86.5%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <LiquidGlassBadge className="absolute bottom-full -translate-x-1/2 mb-3">
                  Video Editor
                </LiquidGlassBadge>
                <div className="relative w-2.5 h-2.5 rounded-full bg-white">
                  <div className="absolute inset-0 rounded-full bg-white blur-md opacity-80 scale-[2.8]" />
                </div>
              </div>
            </div>

            {/* Outer Circle */}
            <div className="w-[540px] h-[540px] rounded-full border border-white/40 absolute">
              {/* UI/UX Designer Dot & Badge */}
              <div
                className="absolute pointer-events-auto"
                style={{
                  top: "25%",
                  left: "16.5%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <LiquidGlassBadge className="absolute bottom-full -translate-x-1/2 mb-3">
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
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 py-4 flex items-center justify-between mt-4 z-50">
      {/* Logo */}
      <div
        className="px-6 py-3 rounded-md shadow-lg backdrop-blur-sm flex-1 flex justify-between items-center"
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

        <ul className="hidden md:flex items-center gap-8 text-gray-300 text-[18px] font-medium">
          <li className="hover:text-white cursor-pointer transition-colors">
            About me
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Project
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Resume
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};
