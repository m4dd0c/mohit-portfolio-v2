import React from 'react';
import { SiFigma, SiFramer, SiLottiefiles } from 'react-icons/si';
import { RiClaudeFill, RiOpenaiFill } from 'react-icons/ri';

const tools = [
  {
    name: "Figma",
    description: "Design & Prototype",
    icon: <SiFigma className="text-[3.3rem] text-black" />,
  },
  {
    name: "ChatGPT",
    description: "Research & Strategy",
    icon: <RiOpenaiFill className="text-[3.3rem] text-black" />,
  },
  {
    name: "PhotoShop",
    description: "For Graphical Assets",
    icon: (
      <div className="bg-black font-extrabold rounded-xl w-12 h-12 flex items-center justify-center text-white text-2xl">
        Ps
      </div>
    ),
  },
  {
    name: "Claude",
    description: "User Research & WireFraming",
    icon: <RiClaudeFill className="text-[3.3rem] text-black" />,
  },
  {
    name: "Framer",
    description: "Website creation",
    icon: <SiFramer className="text-[3.3rem] text-black" />,
  },
  {
    name: "Lottie",
    description: "Motion & Animation",
    icon: <SiLottiefiles className="text-[3.3rem] text-black" />,
  }
];

export default function TechStackSection() {
  return (
    <section className="w-full font-sans relative py-24">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Tag */}
        <div className="relative inline-flex mb-8 bg-white ml-1.5 mt-1.5">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-3 border-l-3 border-[#0F1A37]"></div>
          <div className="absolute -top-px -left-px w-3 h-3 border-t-3 border-l-3 border-[#0F1A37]"></div>
          <div className="border-[1.5px] border-[#0F1A37] px-4 py-1.5 bg-[#E2F6FF]">
            <span className="text-black font-semibold tracking-wide text-[20px]">Tech Stack</span>
          </div>
        </div>

        <h2 className="text-[35px] font-bold text-black mb-6 tracking-tight">
          Tools Behind the Process
        </h2>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <div 
              key={idx}
              className="bg-[#DDF3FF] border border-black p-6 sm:pl-5 sm:py-6 flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <div className="shrink-0 flex items-center justify-center">
                {tool.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-[20px] font-bold text-black">{tool.name}</h3>
                <p className="text-black/70 text-[16px] font-medium">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
