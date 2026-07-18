import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className="w-full relative overflow-hidden bg-white pt-24 pb-8 font-sans border-t-[1.5px] border-gray-200">
      {/* Star Left */}
      <svg className="absolute left-0 md:left-2 top-24 w-20 h-20 md:w-28 md:h-28 hidden sm:block rotate-[15deg] z-0" viewBox="0 0 100 100">
        <path d="M50 5 L56 35 L82 18 L64 43 L95 50 L64 57 L82 82 L56 65 L50 95 L44 65 L18 82 L36 57 L5 50 L36 43 L18 18 L44 35 Z" fill="#99D6FF" stroke="black" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      
      {/* Star Right */}
      <svg className="absolute right-0 md:right-2 top-24 w-24 h-24 md:w-32 md:h-32 hidden sm:block rotate-[25deg] z-0" viewBox="0 0 100 100">
        <path d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z" fill="#99D6FF" stroke="black" strokeWidth="2" strokeLinejoin="round" />
      </svg>

      <div className="w-full px-6 md:px-12 relative z-10">

        {/* Dotted Box Left */}
        <div className="absolute left-0 -bottom-8 w-24 h-24 border-[2px] border-black border-dashed rounded-lg hidden md:block bg-gray-50/50 -z-10"></div>

        {/* Main CTA Box */}
        <div className="w-full border-[2px] border-black bg-[#fafafa] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 md:p-14 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 relative z-20">
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-[35px] font-bold text-black flex items-center flex-wrap gap-4">
              Connect With Me 
              <svg width="48" height="38" viewBox="0 0 48 40" className="inline-block flex-shrink-0">
                <path d="M2 2 H40 V28 H30 V38 L22 28 H2 Z" fill="#99D6FF" stroke="black" strokeWidth="2.5" strokeLinejoin="round" />
                <circle cx="14" cy="15" r="2.5" fill="black" />
                <circle cx="21" cy="15" r="2.5" fill="black" />
                <circle cx="28" cy="15" r="2.5" fill="black" />
              </svg>
            </h2>
            <p className="text-2xl md:text-3xl font-medium text-black mt-2">
              Have a project idea? Let's talk about it!
            </p>
          </div>

          <button className="flex items-center gap-2 bg-[#99D6FF] text-black px-8 py-4 font-bold text-lg border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all w-full lg:w-auto justify-center">
            Connect With me
            <FiArrowUpRight className="text-2xl" strokeWidth={3} />
          </button>
        </div>

        {/* Footer Bottom Links */}
        <div className="mt-20 flex flex-col gap-6 w-full z-10 relative pb-2">
          {/* Centered Email */}
          <div className="flex justify-center w-full">
            <div className="flex items-center gap-2 text-black hover:opacity-80 transition-opacity cursor-pointer">
              <div className="bg-black text-white p-1 rounded-sm flex items-center justify-center">
                <FaLinkedin className="text-sm" />
              </div>
              <span className="font-semibold text-[16px]">Mohitjangid1377@gmail.com</span>
            </div>
          </div>

          {/* Left aligned text */}
          <div className="w-full flex justify-start">
            <p className="text-black/80 text-[14px]">
              2026 Design By Mohit Jangid
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
