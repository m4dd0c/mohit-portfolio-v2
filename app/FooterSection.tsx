import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="w-full relative overflow-hidden bg-white pt-24 font-sans border border-gray-200">
      {/* Star Left */}
      <svg
        className="absolute left-0 md:-left-5 top-8 w-20 h-20 md:w-28 md:h-28 hidden sm:block z-0 animate-star"
        viewBox="0 0 100 100"
      >
        <path
          d="M50 5 L56 35 L82 18 L64 43 L95 50 L64 57 L82 82 L56 65 L50 95 L44 65 L18 82 L36 57 L5 50 L36 43 L18 18 L44 35 Z"
          fill="#99D6FF"
          stroke="black"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>

      {/* Star Right */}
      <svg
        className="absolute right-0 md:-right-5 bottom-0 w-24 h-24 md:w-32 md:h-32 hidden sm:block z-0 animate-star"
        viewBox="0 0 100 100"
      >
        <path
          d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z"
          fill="#99D6FF"
          stroke="black"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>



        {/* connect with me card */}
      <div className="max-w-7xl mx-auto px-5 pt-10 relative z-10">

        {/* Main CTA Box */}
        <div className="w-full border-2 border-black bg-[#fafafa] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 md:px-12 md:py-6 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 relative z-20">
          
          {/* Dotted Box Left (Attached to card) */}
          <div 
            className="absolute -left-44 -bottom-3 w-40 h-[65%] border border-black bg-white -z-10 hidden md:block rounded-md"
            style={{
              backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
              backgroundSize: '9px 9px',
            }}
          ></div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-[35px] font-semibold text-black flex items-center flex-wrap gap-4">
              Connect With Me
              <br />
              Have a project idea? Let&apos;s talk about it!
            </h2>
          </div>

          <button className="flex items-center gap-2 bg-[#99D6FF] text-black px-8 font-semibold py-4 text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all w-full lg:w-auto justify-center duration-500">
            Connect With me
            <FiArrowUpRight className="text-2xl" strokeWidth={3} />
          </button>
        </div>

        {/* Footer Bottom Links */}
        <div className="mt-7 flex flex-col gap-6 w-full z-10 relative pb-2">
          {/* Centered Email */}
          <div className="flex justify-center w-full">
            <div className="flex items-center gap-2 text-black hover:opacity-80 transition-opacity cursor-pointer">
                <FaLinkedin className="text-xl" />
              <span className="font-medium text-[16px]">
                Mohitjangid1377@gmail.com
              </span>
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
