"use client";

import { motion } from "framer-motion";

export default function Courses() {
  const categories = [
    {
      category: "Computer Science Core",
      items: ["Programming Fundamentals (PF)", "Object-Oriented Programming (OOP)", "Data Structures (C++)", "Computer Networks", "Database Management Systems", "Software Engineering"]
    },
    {
      category: "Tools & Technologies",
      items: ["MS SQL Server", "Cisco Packet Tracer", "Information and Communication Technology (ICT)", "Digital Logic Design (DLD)", "Git & GitHub"]
    },
    {
      category: "Frameworks & Development",
      items: ["Visual Programming", "ASP.NET Core MVC", "Windows Forms", "C# & WPF Apps", "Full Stack Web Development (MERN)"]
    }
  ];

  return (
    <section className="relative z-20 py-24 px-[5%] md:px-[10%] bg-[#0a1628]">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Education & Skills.
          </h2>
          <div className="w-24 h-1 bg-[#ff9d00] mt-4 rounded-full"></div>
        </div>

        <div className="mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-[#ff9d00]/20 backdrop-blur-xl bg-white/5 shadow-[0_0_20px_rgba(255,157,0,0.05)]"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-[#ff9d00] text-lg font-medium">Air University Multan</p>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <p className="text-gray-300 font-mono">September 2024 – June 2028</p>
                <p className="text-gray-400 text-sm">Multan, Pakistan</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-white/10 backdrop-blur-xl bg-white/[0.02]"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-bold text-white">FSc, Pre-Medical Studies</h3>
                <p className="text-[#ff9d00] text-base font-medium">Govt Higher Secondary School Ladhana</p>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <p className="text-gray-300 font-mono text-sm">March 2021 – March 2023</p>
                <p className="text-gray-400 text-xs">Punjab, Pakistan</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-white/10 backdrop-blur-xl bg-white/[0.02]"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-bold text-white">Matriculation, Science</h3>
                <p className="text-[#ff9d00] text-base font-medium">Fazaia Inter College (FIC)</p>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <p className="text-gray-300 font-mono text-sm">March 2019 – March 2021</p>
                <p className="text-gray-400 text-xs">Punjab, Pakistan</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#ff9d00] inline-block"></span>
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item, i) => (
                  <li key={i} className="text-gray-400 hover:text-gray-200 transition-colors flex items-center justify-between group">
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
