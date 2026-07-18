import React from 'react';
import { SiFigma, SiFramer } from 'react-icons/si';
import { RiOpenaiFill } from 'react-icons/ri';

const tools = [
  {
    name: "Figma",
    description: "Design & Prototype",
    icon: <SiFigma className="text-[2.25rem] text-black" />,
  },
  {
    name: "ChatGPT",
    description: "Research & Strategy",
    icon: <RiOpenaiFill className="text-[2.25rem] text-black" />,
  },
  {
    name: "PhotoShop",
    description: "For Graphical Assets",
    icon: (
      <div className="bg-black rounded-lg w-[2.25rem] h-[2.25rem] flex items-center justify-center text-white font-bold text-lg">
        Ps
      </div>
    ),
  },
  {
    name: "Claude",
    description: "User Research & WireFraming",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5l-10 14M22 12H2M19 19L5 5" />
      </svg>
    ),
  },
  {
    name: "Framer",
    description: "Website creation",
    icon: <SiFramer className="text-[2.25rem] text-black" />,
  },
  {
    name: "Lottie",
    description: "Motion & Animation",
    icon: (
      <div className="bg-black rounded-lg w-[2.25rem] h-[2.25rem] flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12c4-12 12 12 16 0" />
        </svg>
      </div>
    ),
  }
];

export default function TechStackSection() {
  return (
    <section className="w-full font-sans relative py-24 border-t-[1.5px] border-gray-200 mt-10">
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
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Tag */}
        <div className="relative inline-flex mb-8 bg-white">
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-black"></div>
          <div className="border-[1.5px] border-black px-4 py-1.5 bg-[#E6F4F1]">
            <span className="text-black font-semibold tracking-wide text-sm">Tech Stack</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 tracking-tight">
          Tools Behind the Process
        </h2>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <div 
              key={idx}
              className="bg-[#DDF3FF] border-[2px] border-black p-6 sm:p-8 flex items-center gap-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12">
                {tool.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-black">{tool.name}</h3>
                <p className="text-black/70 text-sm font-medium mt-0.5">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
