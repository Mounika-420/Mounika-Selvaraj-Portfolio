/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, Briefcase, Code, Award, Trophy, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

interface OverviewTabProps {
  onSelectTab: (tab: string) => void;
}

export default function OverviewTab({ onSelectTab }: OverviewTabProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Welcome Banner */}
      <motion.div
        variants={itemVariants}
        className="relative bg-gradient-to-r from-indigo-950 to-slate-900 border border-indigo-500/20 rounded-2xl p-6 overflow-hidden group shadow-lg"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 group-hover:bg-indigo-500/20 transition-all duration-700"></div>
        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl -z-10"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] rounded-full uppercase tracking-widest font-semibold">
                Welcome to my Portfolio
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Active student"></span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400">Technology & Business Systems</span>
            </h2>
            <p className="text-slate-300 text-sm font-light max-w-xl">
              I specialize in combining core computer science logic with commercial business systems, specializing in robust Spring Boot backends, Java engineering, and smart NLP application systems.
            </p>
          </div>
          <button
            onClick={() => onSelectTab("contact")}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-amber-500/20 whitespace-nowrap active:scale-95"
          >
            Hire as Intern
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Bento Grid Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Academic Standout",
            value: "8.46 CGPA",
            sub: "B.Tech CSBS",
            icon: GraduationCap,
            color: "text-indigo-400",
            bg: "bg-indigo-500/5",
            border: "border-indigo-500/15"
          },
          {
            label: "Practical Projects",
            value: "2+ Major AI",
            sub: "NLP & Tracking Platforms",
            icon: Code,
            color: "text-amber-400",
            bg: "bg-amber-500/5",
            border: "border-amber-500/15"
          },
          {
            label: "Industry Experience",
            value: "Full-Stack",
            sub: "Web ordering platform",
            icon: Briefcase,
            color: "text-purple-400",
            bg: "bg-purple-500/5",
            border: "border-purple-500/15"
          },
          {
            label: "Validated Skills",
            value: "3 Certifications",
            sub: "Infosys & NPTEL",
            icon: Award,
            color: "text-teal-400",
            bg: "bg-teal-500/5",
            border: "border-teal-500/15"
          }
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`p-4 rounded-2xl border ${stat.bg} ${stat.border} flex flex-col justify-between h-28 hover:bg-slate-800/30 transition-colors`}
            >
              <div className="flex justify-between items-start">
                <span className="text-slate-400 text-[10px] font-mono tracking-wider uppercase font-semibold">{stat.label}</span>
                <div className={`p-1.5 rounded-lg bg-slate-950/40 ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-slate-400 text-[10px] truncate font-light">{stat.sub}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Secondary Bento Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Core Specialization Details */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700/60 transition-colors flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider">
                Why Computer Science & Business Systems?
              </h3>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed font-light">
              Unlike traditional CS programs, my specialization blends engineering rigor with crucial business principles. This allows me to not only write optimized algorithms and manage databases but also analyze market usability, project timelines, and customer onboarding journeys.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-[10px] text-slate-400">
              <div className="p-2.5 bg-slate-950/40 border border-slate-800/40 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span>System Architecture</span>
              </div>
              <div className="p-2.5 bg-slate-950/40 border border-slate-800/40 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Business Economics</span>
              </div>
              <div className="p-2.5 bg-slate-950/40 border border-slate-800/40 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Data Analytics (DBMS)</span>
              </div>
              <div className="p-2.5 bg-slate-950/40 border border-slate-800/40 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Agile SDLC Methods</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Holistic / Well-Rounded Card */}
        <motion.div
          variants={itemVariants}
          className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700/60 transition-colors flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-amber-500/10 text-amber-400 rounded-lg">
                <Trophy className="w-4 h-4" />
              </div>
              <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider">
                Off the Keyboard
              </h3>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed font-light">
              I believe in holistic growth and persistent discipline. I apply the same dedication required for competitive coding challenges to high-performing athletics.
            </p>
            
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-3 p-2 bg-slate-950/30 border border-slate-800/30 rounded-xl">
                <div className="text-lg">☄️</div>
                <div className="font-sans text-xs">
                  <div className="font-semibold text-slate-200">District Athlete</div>
                  <div className="text-[10px] text-slate-400 font-mono">Discus Throw & Shot Put (2020)</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 bg-slate-950/30 border border-slate-800/30 rounded-xl">
                <div className="text-lg">🎯</div>
                <div className="font-sans text-xs">
                  <div className="font-semibold text-slate-200">LeetCode Solver</div>
                  <div className="text-[10px] text-slate-400 font-mono">Active algorithmic solver</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
