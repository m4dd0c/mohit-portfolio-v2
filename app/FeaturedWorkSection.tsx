import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export default function FeaturedWorkSection() {
  return (
    <section className="w-full font-sans relative overflow-hidden py-10 mt-20">
      {/* Background Half Circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[100vw] md:h-[60vw] bg-[#F0FAFF] rounded-t-[100%] z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-32">
        <div 
          className="w-full rounded-2xl border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative"
        >
        {/* Grid Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '25px 25px',
            backgroundPosition: 'center top'
          }}
        ></div>

        <div className="p-8 relative z-10">
          {/* Tag */}
          <div className="relative inline-flex mb-3 bg-white z-10 ml-1.5 mt-1.5">
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-3 border-l-3 border-[#0F1A37]"></div>
            <div className="absolute -top-px -left-px w-3 h-3 border-t-3 border-l-3 border-[#0F1A37]"></div>
            <div className="border-[1.5px] border-[#0F1A37] px-4 py-1 bg-[#E2F6FF]">
              <span className="text-black font-semibold tracking-wide text-[20px]">Featured Work</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2">
            {/* Left Content */}
            <div className="flex-[0.6] flex flex-col items-start justify-start">
              {/* Title & Badge */}
              <div className="flex items-center gap-4 flex-wrap z-10">
                <h2 className="text-[35px] font-bold text-black tracking-tight">Coachify</h2>
                <span className="border-[1.5px] border-dotted border-[#896600] bg-[#FFEFC1] text-[#A67C00] px-3 py-1.5 text-[14px] font-semibold rounded-none shadow-sm">
                  EdTech Platform
                </span>
              </div>

              {/* Description */}
              <p className="text-[#555] text-[18px] font-normal mb-6 max-w-[90%] leading-relaxed z-10 relative">
                Coachify is a modern EdTech platform designed to help CAT aspirants prepare through live classes, recorded courses, mock tests, practice questions, and free learning resources.
              </p>

              {/* Button */}
              <a href="" className="group flex items-center gap-2 bg-black text-white px-4 py-1.5 font-semibold text-lg hover:bg-gray-800 transition-colors z-10 relative rounded-none">
                View Project
                <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform duration-300" strokeWidth={2.5} />
              </a>
            </div>

            {/* Right Image Area (Browser Mockup) */}
            <div className="flex-[1.2] flex items-center justify-center w-full z-10">
              <div className="w-full bg-white border-2 border-[#90DDF0] rounded-xl flex flex-col relative overflow-hidden shadow-[2px_2px_15px_rgba(144,221,240,0.3)]">
                {/* Browser Title Bar */}
                <div className="h-10 border-b-2 border-[#90DDF0] flex items-center px-4 justify-between bg-white">
                  {/* Window Buttons */}
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  
                  {/* Address Bar */}
                  <div className="flex-1 flex justify-center">
                     <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#00b6e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                        <span className="text-[#00b6e3] text-xs font-semibold">Coachifylive.com</span>
                     </div>
                  </div>

                  {/* Right Badge */}
                  <div className="bg-[#00b6e3] text-white text-[10px] font-bold px-3 py-0.5 rounded-full">
                    Live
                  </div>
                </div>
                
                {/* Image Area */}
                <div className="w-full relative aspect-15/7 bg-[#f5f6ff]">
                  <img 
                    src="/coachify.png" 
                    alt="Coachify Preview" 
                    className="absolute inset-0 w-full h-full object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
