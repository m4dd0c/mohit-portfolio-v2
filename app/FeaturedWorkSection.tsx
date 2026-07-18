import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export default function FeaturedWorkSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 w-full font-sans relative">
      <div 
        className="w-full rounded-2xl border-[2px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative"
      >
        {/* Grid Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center top'
          }}
        ></div>

        <div className="flex flex-col lg:flex-row p-8 md:p-14 gap-12 relative z-10">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start justify-center">
            {/* Tag */}
            <div className="relative inline-flex mb-8 bg-white z-10">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-black"></div>
              <div className="border-[1.5px] border-black px-4 py-1.5 bg-[#E6F4F1]">
                <span className="text-black font-semibold tracking-wide text-sm">Featured Work</span>
              </div>
            </div>

            {/* Title & Badge */}
            <div className="flex items-center gap-4 mb-6 flex-wrap z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">Coachify</h2>
              <span className="border-[1.5px] border-dashed border-[#D4AF37] bg-[#FFF9E6] text-[#A67C00] px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-sm shadow-sm">
                EdTech Platform
              </span>
            </div>

            {/* Description */}
            <p className="text-[#555] text-lg mb-10 max-w-[90%] leading-relaxed z-10 relative font-medium">
              Coachify is a modern EdTech platform designed to help CAT aspirants prepare through live classes, recorded courses, mock tests, practice questions, and free learning resources.
            </p>

            {/* Button */}
            <button className="flex items-center gap-2 bg-black text-white px-8 py-3.5 font-semibold text-lg hover:bg-gray-800 transition-colors z-10 relative rounded-sm">
              View Project
              <FiArrowUpRight className="text-xl" strokeWidth={2.5} />
            </button>
          </div>

          {/* Right Image Area */}
          <div className="flex-1 flex items-center justify-center w-full z-10">
            {/* Placeholder container */}
            <div className="w-full aspect-[4/3] bg-white border-[2px] border-black rounded-xl flex items-center justify-center text-gray-400 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
              <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-lg text-gray-500">Image Placeholder</span>
                <span className="text-sm text-gray-400">Replace this div with your &lt;img /&gt;</span>
              </div>
              
              {/* Instructions for user to add image later */}
              {/* 
                <img 
                  src="/your-image-path.png" 
                  alt="Coachify Preview" 
                  className="absolute inset-0 w-full h-full object-cover" 
                /> 
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
