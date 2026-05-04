"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: ".NET Intern — ASP.NET Core MVC",
      company: "Air University Multan",
      date: "April 2026 – Present",
      location: "Multan, Pakistan",
      description: [
        "Building enterprise-grade web features using ASP.NET Core MVC, applying clean MVC architecture for separation of concerns.",
        "Implemented Entity Framework Core (Code-First migrations) for ORM; designed relational schemas and stored procedures in MS SQL Server.",
        "Built and consumed RESTful APIs; integrated ASP.NET Core Identity for role-based authentication and endpoint security.",
        "Created dynamic Razor views with HTML5, CSS3, and JavaScript for interactive, data-driven user interfaces."
      ]
    },
    {
      role: "Full-Stack Intern — MERN Stack",
      company: "Decodelabs",
      date: "March 2026 – Present",
      location: "Lucknow, India (Remote)",
      description: [
        "Engineered RESTful APIs with Node.js and Express; managed data flow between client and MongoDB with optimized schema design.",
        "Built responsive front-end interfaces using JavaScript (ES6+); maintained codebase integrity via Git and code reviews."
      ]
    },
    {
      role: "CS Student — Independent Projects & Self-Directed Learning",
      company: "Air University Multan",
      date: "September 2024 – Present",
      location: "Multan, Pakistan",
      description: [
        "2+ years building full-stack and systems-level projects beyond coursework; self-studied cloud computing, distributed systems, and modern web frameworks."
      ]
    }
  ];

  return (
    <section className="relative z-20 pt-24 pb-32 px-[5%] md:px-[10%] bg-[#0a1628]">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Experience.
          </h2>
          <div className="w-24 h-1 bg-[#ff9d00] mt-4 rounded-full"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[-40px] top-2 w-4 h-4 rounded-full bg-[#ff9d00] border-4 border-[#0a1628] shadow-[0_0_10px_rgba(255,157,0,0.5)]"></div>
              <div className="hidden md:block absolute left-[-33px] top-6 bottom-[-48px] w-0.5 bg-white/10"></div>
              
              <div className="p-8 rounded-3xl border border-white/10 backdrop-blur-xl shadow-xl hover:border-white/20 transition-all duration-300" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-[#ff9d00] font-medium text-lg">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 font-mono text-sm">{exp.date}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-300 font-light flex items-start gap-3">
                      <span className="text-[#ff9d00] mt-1.5 opacity-50">▹</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
