"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
            Abdullah Shabbir.
          </h1>
          <p className="text-lg md:text-2xl mt-6 text-white/80 font-light tracking-[0.2em] uppercase drop-shadow-md">
            Full Stack Web Developer.
          </p>
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
            .NET, React <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">&amp; Node.js dev.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
