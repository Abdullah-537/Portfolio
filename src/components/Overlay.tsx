"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}

export default function Overlay() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -200]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [200, -200]);

  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.9], [200, -200]);

  return (
    <div ref={container} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }} 
          className="absolute inset-0 flex flex-col items-start justify-end pb-[15vh] px-[10%]"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
            Abdullah Shabbir.
          </h1>
          <p className="text-lg md:text-2xl mt-6 text-white/80 font-light tracking-[0.2em] uppercase drop-shadow-md max-w-2xl px-1">
            Full Stack Web Developer.
          </p>
          <div className="flex gap-4 mt-8 pointer-events-auto z-50">
            <a href="mailto:abdullahhhh.166@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff9d00] transition-colors p-3 hover:bg-white/10 rounded-full bg-[#0a1628]/80 backdrop-blur-sm border border-white/10 shadow-lg">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/abdullah-shabbir-245859347" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff9d00] transition-colors p-3 hover:bg-white/10 rounded-full bg-[#0a1628]/80 backdrop-blur-sm border border-white/10 shadow-lg">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Abdullah-537" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff9d00] transition-colors p-3 hover:bg-white/10 rounded-full bg-[#0a1628]/80 backdrop-blur-sm border border-white/10 shadow-lg">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://wa.me/923327660123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff9d00] transition-colors p-3 hover:bg-white/10 rounded-full bg-[#0a1628]/80 backdrop-blur-sm border border-white/10 shadow-lg">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }} 
          className="absolute inset-0 flex flex-col justify-center items-start px-[10%] md:px-[15%]"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl max-w-2xl leading-tight">
            CS Undergrad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">@ Air University.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }} 
          className="absolute inset-0 flex flex-col justify-center items-end text-right px-[10%] md:px-[15%]"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl max-w-2xl leading-tight">
            ASP.NET Core MVC <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">&amp; MERN Stack.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
