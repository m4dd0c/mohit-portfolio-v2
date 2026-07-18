import React from 'react';
import { SiFigma, SiFramer } from 'react-icons/si';
import { RiOpenaiFill  } from "react-icons/ri";
import { DiPhotoshop } from "react-icons/di";
import { PiStarFourFill, PiSparkleFill } from 'react-icons/pi';
import { FiArrowUpRight } from 'react-icons/fi';

const skillsData = [
  {
    title: "Core Skills",
    skills: "UI/UX Design • Wireframing & Prototyping • Responsive Web Design • Interaction Design • Design Systems • User Flows & Journey Mapping • Accessibility • Visual Storytelling • Video Editing",
  },
  {
    title: "UX Reseach & Strategy",
    skills: "Usability Testing, Competitive Benchmarking, Heuristic Evaluation, Persona Development, UX Documentation & Stakeholder Presentations",
  },
  {
    title: "Workflow & Collaboration",
    skills: "Agile/Scrum Environments, Cross-Functional Collaboration, Developer Handoff, UX Deck Creation & Stakeholder Management",
  },
  {
    title: "User Flows & Information Architecture",
    skills: "Creating structured user flows, task paths, and information architecture to simplify navigation and ensure seamless user journeys across complex products.",
  }
];

export default function SkillsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 w-full font-sans bg-white">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-start">
          {/* Badge */}
          <div className="relative inline-flex w-fit mb-8">
            {/* Top-left corner accent similar to the design */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-black"></div>
            <div className="border-[1.5px] border-black px-4 py-1.5 bg-[#E6F4F1]">
              <span className="text-black font-semibold tracking-wide text-sm">My Skills</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-black leading-[1.1] mb-6">
            Solutions that bridge design and experience.
          </h2>
          
          <p className="text-[#555] text-lg mb-12 max-w-md leading-relaxed">
            Utilizing three years of experience in UI UX to deliver pixel-perfect digital products
          </p>
          
          {/* Tools Row */}
          <div className="flex w-fit border-[1.5px] border-black bg-white shadow-sm">
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border-r-[1.5px] border-black hover:bg-gray-50 transition-colors">
              <RiOpenaiFill className="text-2xl sm:text-3xl text-black" />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border-r-[1.5px] border-black hover:bg-gray-50 transition-colors">
              <SiFigma className="text-2xl sm:text-3xl text-black" />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border-r-[1.5px] border-black hover:bg-gray-50 transition-colors">
              <SiFramer className="text-2xl sm:text-3xl text-black" />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border-r-[1.5px] border-black hover:bg-gray-50 transition-colors">
              <PiStarFourFill className="text-2xl sm:text-3xl text-black" />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border-r-[1.5px] border-black bg-black">
              <DiPhotoshop className="text-2xl sm:text-3xl text-white" />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <PiSparkleFill className="text-2xl sm:text-3xl text-black" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-8">
          {skillsData.map((item, index) => (
            <div 
              key={index}
              className="bg-[#DDF3FF] border-[2px] border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                <FiArrowUpRight className="text-2xl text-black flex-shrink-0 mt-1" strokeWidth={3} />
              </div>
              <p className="text-black/80 text-base leading-relaxed pr-4 font-medium">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
