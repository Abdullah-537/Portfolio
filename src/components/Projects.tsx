"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "ActiveFit Pro: Enterprise Gym Ecosystem",
      description: "A comprehensive ASP.NET Core MVC platform managing class attendance, trainer schedules, and a high-integrity monetary/financial module.",
      tags: ["ASP.NET Core MVC", "C#", "SQL Server"],
      link: "#",
    },
    {
      title: "IronCore Dynamics: Equipment & Logistics",
      description: "Specialized equipment-centric gym system for tracking hardware usage, maintenance logs, and trainer-to-machine routines.",
      tags: ["ASP.NET", "Entity Framework", "C#"],
      link: "#",
    },
    {
      title: "The Nexus: NGO & Donor Bridge",
      description: "Platform linking NGOs, donors, and receivers. Admin roles, transparent logs.",
      tags: ["Full Stack", ".NET MVC", "C#"],
      link: "#",
    },
    {
      title: "Data Structures in C++",
      description: "Academic projects: Welfare Data Management & Student Grading/Attendance OOP logic.",
      tags: ["C++", "OOP", "DSA"],
      link: "#",
    },
    {
      title: "CampusLogic: Windows System UI",
      description: "Desktop UI built with Windows Forms & SQL Server to manage campus entities.",
      tags: ["WinForms", "UI Base", "Database"],
      link: "#",
    },
    {
      title: "Modern Web Stack",
      description: "HTML, CSS, JavaScript (ES6+), and Node.js Full Stack Development.",
      tags: ["Next.js", "Node.js", "HTML/CSS"],
      link: "#",
    }
  ];

  return (
    <section className="relative z-20 min-h-screen pt-48 pb-32 px-[5%] md:px-[10%] -mt-[10vh]" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(10,22,40,0.7) 12%, rgba(10,22,40,0.9) 22%, #0a1628 32%)' }}>
      {/* Sunset gradient overlay beneath the fade */}
      <div className="absolute inset-0 top-[18%]" style={{ background: 'linear-gradient(90deg, #0a1628 0%, #0f1a30 12%, #1a2540 25%, #3d2208 42%, #8B3500 55%, #CC5500 65%, #FF6B00 78%, #FF8C00 90%, #FF9500 100%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Selected Work.
          </h2>
          <p className="text-[#ff9d00] mt-4 text-lg md:text-xl max-w-xl font-medium">
            Undergraduate Student | Air University Multan Campus
          </p>
          <p className="text-gray-400 mt-2 text-md md:text-lg max-w-xl">
            A collection of recent projects focusing on full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, i) => (
            <motion.a 
              href={project.link}
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col justify-between p-8 h-80 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
              style={{ background: 'rgba(10, 22, 40, 0.45)' }}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                  <p className="text-gray-300 mt-2 font-light">{project.description}</p>
                </div>
                {/* Amber icon accent */}
                <div className="p-3 rounded-full bg-[#ff9d00]/15 group-hover:bg-[#ff9d00] text-[#ff9d00] group-hover:text-[#0a1628] transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-xs font-mono px-3 py-1 rounded-full bg-[#ff9d00]/10 text-[#ff9d00] tracking-wider uppercase border border-[#ff9d00]/25">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
