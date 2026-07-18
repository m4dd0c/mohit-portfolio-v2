import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section 
      className="relative w-full min-h-[55vh] overflow-hidden font-sans flex flex-col"
      style={{ background: 'radial-gradient(51.25% 50.34% at 50% 49.89%, #42A8E4 0%, #000000 100%)' }}
    >

      {/* Navbar */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 py-4 flex items-center justify-between mt-6 z-50">
        {/* Logo */}
        <div 
          className="px-6 py-3 rounded-md shadow-lg backdrop-blur-sm flex-1 flex justify-between items-center"
          style={{ backgroundColor: 'rgba(13, 32, 42, 0.5)' }}
        >
          <div className="text-white font-black text-2xl tracking-wider flex items-center">
            {/* Custom MJ Logo using repeating linear gradient for striped effect */}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 2px, transparent 2px, transparent 4px)',
                WebkitBackgroundClip: 'text',
              }}
            >
              MJ
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-gray-300 text-[18px] font-medium">
            <li className="hover:text-white cursor-pointer transition-colors">About me</li>
            <li className="hover:text-white cursor-pointer transition-colors">Project</li>
            <li className="hover:text-white cursor-pointer transition-colors">Resume</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-6 flex-1 flex flex-col md:flex-row items-center justify-center relative z-10 pb-20 w-full gap-10 mt-10 md:mt-0">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="text-[40px] font-bold text-white leading-[1.1]">
            Hi, <span className="text-[#03E6FF]">Mohit Jangid</span> Here <span className="inline-block w-16 h-1 bg-white align-middle ml-2"></span>
            <br className="hidden md:block" />
            <span className="mt-3 block">Designing Products That Scale</span>
          </h1>
          
          <p className="text-gray-300 text-[18px] max-w-lg leading-relaxed mt-2 font-light">
            Product Designer having Exp of 1.5 Years ,focused on UX Strategy, Interface Design, and Growth-Driven Experiences.
          </p>
          
          <button className="mt-4 flex items-center gap-2 bg-white text-black px-6 py-3.5 font-bold text-[18px] hover:bg-gray-200 transition-colors shadow-lg shadow-white/10 rounded-none">
            <FaLinkedin className="text-xl" />
            My Linkedin
            <FiArrowUpRight className="text-xl ml-1" strokeWidth={3} />
          </button>
        </div>

        {/* Right Side: Visuals (Concentric circles, image, badges) */}
        <div className="flex-1 relative w-full h-[500px] flex justify-center items-center mt-12 md:mt-0">
          
          {/* Concentric Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
             <div className="w-[300px] h-[300px] rounded-full border-[0.5px] border-white/20 absolute"></div>
             <div className="w-[450px] h-[450px] rounded-full border-[0.5px] border-white/15 absolute"></div>
             <div className="w-[600px] h-[600px] rounded-full border-[0.5px] border-white/10 absolute hidden md:block"></div>
          </div>
          
          {/* Glowing Dots on circles */}
          <div className="absolute top-[10%] left-[60%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] z-10"></div>
          <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] z-10"></div>
          <div className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] z-10"></div>
          
          {/* Floating Badges */}
          <div 
            className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 backdrop-blur-md text-white px-5 py-2 text-sm z-20 shadow-xl"
            style={{ backgroundColor: 'rgba(217, 217, 217, 0.2)', borderRadius: '10px' }}
          >
            Product Designer
          </div>
          
          <div 
            className="absolute right-8 md:right-12 top-1/4 backdrop-blur-md text-white px-5 py-2 text-sm z-20 shadow-xl"
            style={{ backgroundColor: 'rgba(217, 217, 217, 0.2)', borderRadius: '10px' }}
          >
            Video Editor
          </div>
          
          <div 
            className="absolute right-0 md:-right-8 bottom-[35%] backdrop-blur-md text-white px-5 py-2 text-sm z-20 shadow-xl"
            style={{ backgroundColor: 'rgba(217, 217, 217, 0.2)', borderRadius: '10px' }}
          >
            UI/UX Designer
          </div>

          {/* User Image */}
          <div className="relative z-10 w-[300px] h-[380px] mt-24 flex items-end justify-center">
            <img src="/mohit.png" alt="Mohit Jangid" className="w-full h-auto object-cover object-bottom" />
          </div>

        </div>
      </div>
    </section>
  );
}
