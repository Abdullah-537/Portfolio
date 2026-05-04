"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  liveLinks?: { url: string; label: string }[];
  details?: {
    intro: string;
    keyFeatures: string[];
    techStack: string;
  };
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Khareed.pk (E-Commerce Platform)",
      description: "A full-featured online store with product catalog, cart, order management, and admin dashboard; implemented secure checkout flow and role-based access.",
      tags: ["ASP.NET Core 8", "C#", "EF Core", "SQL Server"],
      link: "#",
      liveLinks: [{ url: "http://khareed.runasp.net/", label: "Live Store" }],
      details: {
        intro: "Khareed.pk is a fully-featured, production-ready e-commerce web application developed using ASP.NET Core 8 MVC and C#.",
        keyFeatures: [
          "Customer Portal: browse dynamic catalog, filter by category/price, manage cart, checkout with COD and Bank Transfer.",
          "Admin Portal: inventory control, centralized order processing, category management, inquiry dashboard.",
          "Role-based access control leveraging ASP.NET Identity.",
          "Automated delivery fee calculation (e.g. free delivery on orders > PKR 2,000)."
        ],
        techStack: "ASP.NET Core 8 MVC · C# · Entity Framework Core · SQL Server · Azure Identity · Bootstrap."
      }
    },
    {
      title: "FitCore Pro (Gym Management)",
      description: "Member registration, subscription tracking, attendance logging, and trainer assignment modules relying on Code-First EF Core migrations and T-SQL.",
      tags: ["ASP.NET Core MVC", "EF Core 8", "SQL Server"],
      link: "#",
      liveLinks: [
        { url: "http://fit-core-pro.runasp.net/", label: "FitCore Pro Live" },
        { url: "http://fitness-gym.runasp.net/", label: "Gym Demo Live" }
      ],
      details: {
        intro: "A complete, production-ready Gym Management System built with ASP.NET Core MVC 8.0 and Entity Framework Core Code-First. The system implements a three-role architecture with fully isolated portals for Admins, Trainers, and Members.",
        keyFeatures: [
          "Security: BCrypt password hashing, role-scoped session keys, CSRF anti-forgery tokens on POSTs, multi-level input validation.",
          "Admin approval workflow with CNIC identity verification.",
          "Gender-filtered AJAX-driven trainer assignment & dual-mode equipment logging.",
          "Statistics engine: Top-5 equipment usage, trainer & member activity.",
          "Full CRUD across 5 entities, 6 controllers, 41 action methods."
        ],
        techStack: "ASP.NET Core MVC · C# · Entity Framework Core · SQL Server · BCrypt · Bootstrap 5 · LINQ · REST / AJAX."
      }
    },
    {
      title: "WelfareHub (Community Portal)",
      description: "A multi-role welfare portal for aid requests, approvals, and distribution tracking; RESTful service layer and dynamic dashboards.",
      tags: ["ASP.NET Core", "SQL Server", "EF Core"],
      link: "#",
      liveLinks: [{ url: "http://welfarehub.somee.com/Admin", label: "Admin Portal Live" }],
      details: {
        intro: "A full-stack Welfare Management System built with ASP.NET Core MVC & SQL Server. This application digitizes operations by connecting Donors, Receivers, NGOs, and Admins.",
        keyFeatures: [
          "Multi-Role Authentication: distinct portals for Admin, Donor, Receiver, NGO with role-based access.",
          "Donor Portal: Contribute Money, Food, Clothes, Shelter with explicit Admin approval workflows.",
          "Receiver Portal: Requests for Food, Clothes, Loans, Shelter (Pending → Approved → Fulfilled).",
          "Automated Monthly Allocation: Background service mathematically replenishes welfare fund."
        ],
        techStack: "ASP.NET Core MVC · C# · Entity Framework Core · SQL Server (MSSQL) · JavaScript · CSS3."
      }
    },
    {
      title: "Brew & Co \u2014 Cafe POS & App",
      description: "Desktop POS built with WPF and XAML; features include menu management, order processing, billing, and sales summaries with MVVM-inspired UI.",
      tags: [".NET 8", "WPF", "MS SQL Server", "MVVM"],
      link: "#",
      details: {
        intro: "A production-ready desktop Point-of-Sale and Shop Management System built specifically for coffee shops using WPF (.NET 8).",
        keyFeatures: [
          "Full POS system with category-filtered menu cards, smart cart, and order lifecycle.",
          "Role-Based Access: Manager, Barista, Cashier, Waiter, Kitchen roles (each with permissions).",
          "Table Management: Automatic status updates (Occupied on order, Available on payment).",
          "Customer Loyalty & Reservations: Bronze/Silver/Gold tiers, points, time slots, guest count tracking.",
          "Inventory & Reporting: Low-stock alerts, CSV export, Net Profit margins."
        ],
        techStack: "WPF · .NET 8 · MS SQL Server · Entity Framework Core 8 (Code-First) · MVVM · CommunityToolkit.Mvvm · BCrypt."
      }
    },
    {
      title: "Data Structures in C++",
      description: "Built a Welfare Management System applying OOP principles, linked lists, hash tables, trees, and file-based persistence.",
      tags: ["C++", "OOP", "File I/O"],
      link: "#",
      details: {
        intro: "Developed an architectural Welfare Organization Management System as a semester project, demonstrating advanced implementation of multiple data structures natively in C++.",
        keyFeatures: [
          "Hash Tables: User authentication with O(1) lookup performance.",
          "Max Heaps: Donor ranking and prioritization system.",
          "Binary Search Trees: Beneficiary search optimization and volunteer records in O(log n).",
          "Doubly/Singly Linked Lists: Transaction logs and multi-level assistance queueing.",
          "File-based persistence handling across 2,500+ lines of object-oriented code."
        ],
        techStack: "C++ · Object-Oriented Programming · Data Structures · Algorithms · File I/O."
      }
    },
    {
      title: "Edu-DB SQL Schema",
      description: "Designed a comprehensive relational database solution for educational institutions focusing on optimal querying and normalisation.",
      tags: ["SQL Server", "DB Design", "PL/SQL"],
      link: "#",
      details: {
        intro: "Designed and implemented a comprehensive relational database solution for educational institutions with integrated grading and attendance management modules.",
        keyFeatures: [
          "Schema Normalisation: Fully normalized to 3NF involving 8+ interconnected tables.",
          "Advanced Procedures: Automated grading calculations, GPA computations via logic flows.",
          "Triggers & Constraints: Real-time attendance notifications, constraint enforcement, cascading behaviors.",
          "Optimized retrieval techniques scaling for 1000+ linked student records."
        ],
        techStack: "Database Design · Relational Databases · MS SQL Server · T-SQL · Stored Procedures."
      }
    }
  ];

  return (
    <>
      <section className="relative z-20 min-h-screen pt-48 pb-32 px-[5%] md:px-[10%] -mt-[10vh]" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(10,22,40,0.7) 12%, rgba(10,22,40,0.9) 22%, #0a1628 32%)' }}>
        {/* Sunset gradient overlay beneath the fade */}
        <div className="absolute inset-0 top-[18%]" style={{ background: 'linear-gradient(90deg, #0a1628 0%, #0f1a30 12%, #1a2540 25%, #3d2208 42%, #8B3500 55%, #CC5500 65%, #FF6B00 78%, #FF8C00 90%, #FF9500 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Abdullah Shabbir.
            </h2>
            <p className="text-[#ff9d00] mt-4 text-lg md:text-xl max-w-xl font-medium">
              Undergraduate Student | Air University Multan Campus
            </p>
            <p className="text-gray-400 mt-2 text-md md:text-lg max-w-xl">
              A collection of detailed systems focusing on full-stack web, heavy desktop, and foundational databases. Click a card to read more.
            </p>
          </div>

          <div className="mb-12 flex items-center gap-6">
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Projects.</h3>
            <div className="flex-grow h-px bg-white/10 mt-2 md:mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer relative flex flex-col justify-between p-8 h-80 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
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
                  <div className="p-3 rounded-full bg-[#ff9d00]/15 group-hover:bg-[#ff9d00] text-[#ff9d00] group-hover:text-[#0a1628] transition-colors duration-300 ml-4 shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-3 mt-auto">
                  {project.liveLinks?.map((link, j) => (
                    <a 
                      key={`live-${j}`}
                      href={link.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-mono px-4 py-1 rounded-full bg-[#ff9d00] text-[#0a1628] font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(255,157,0,0.3)] hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all flex items-center gap-1.5 shrink-0"
                    >
                      {link.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-mono px-3 py-1 rounded-full bg-[#ff9d00]/10 text-[#ff9d00] tracking-wider uppercase border border-[#ff9d00]/25">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Detail Modal overlay using Framer Motion */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ rotateX: 90, scale: 0.8, opacity: 0 }}
              animate={{ rotateX: 0, scale: 1, opacity: 1 }}
              exit={{ rotateX: 90, scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a1628] rounded-3xl border border-white/20 shadow-[0_0_80px_rgba(255,157,0,0.15)] p-8 md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10 hover:border-white/30"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 pr-10">{selectedProject.title}</h3>
              <div className="flex flex-wrap gap-3 mb-8 border-b border-white/10 pb-8 items-center">
                {selectedProject.liveLinks?.map((link, j) => (
                    <a 
                      key={`live-modal-${j}`}
                      href={link.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-mono px-5 py-1.5 rounded-full bg-[#ff9d00] text-[#0a1628] font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(255,157,0,0.4)] hover:bg-white hover:scale-105 transition-all flex items-center gap-2 shrink-0 mr-2"
                    >
                      {link.label} <ExternalLink className="w-4 h-4" />
                    </a>
                ))}
                {selectedProject.tags.map((tag: string, j: number) => (
                  <span key={j} className="text-sm font-mono px-4 py-1.5 rounded-full bg-[#ff9d00]/10 text-[#ff9d00] tracking-wider uppercase border border-[#ff9d00]/25">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="space-y-8 text-gray-300">
                <p className="text-xl leading-relaxed font-light text-white text-opacity-90">
                  {selectedProject.details?.intro}
                </p>
                
                {selectedProject.details?.keyFeatures && (
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
                    <h4 className="text-sm font-mono text-[#ff9d00] uppercase tracking-widest mb-4">Key Features</h4>
                    <ul className="space-y-4">
                      {selectedProject.details.keyFeatures.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="text-[#ff9d00] font-bold mt-0.5">•</span>
                          <span className="leading-relaxed font-light text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedProject.details?.techStack && (
                  <div>
                    <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-3">Tech Stack</h4>
                    <p className="text-white/70 leading-relaxed font-mono text-sm p-4 bg-black/40 rounded-xl border border-white/5">{selectedProject.details.techStack}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
