/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { educationList, experienceList } from "../resumeData";
import { GraduationCap, Briefcase, Calendar, MapPin, Award } from "lucide-react";

export default function EducationExperienceTab() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 90 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {/* Experience Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="font-display text-lg font-bold text-white tracking-tight">
            Professional Experience
          </h2>
        </div>

        <div className="relative border-l border-slate-800 ml-4 pl-6 space-y-8">
          {experienceList.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <span className="absolute -left-10 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 border-2 border-amber-500 ring-4 ring-slate-900 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors text-amber-400">
                <Briefcase className="w-3.5 h-3.5" />
              </span>

              <div className="bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/60 rounded-2xl p-5 transition-all">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <div>
                    <h3 className="font-display text-base font-bold text-white leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-amber-400 font-sans text-xs font-semibold mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-950/60 border border-slate-800 px-2.5 py-1 rounded-full text-[10px] text-slate-400 font-mono">
                    <Calendar className="w-3 h-3 text-amber-500" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-4 font-light">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{exp.location}</span>
                </div>

                {/* Tech tags used in the role */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-indigo-500/5 hover:bg-indigo-500/10 border border-indigo-500/10 text-indigo-300 font-mono text-[9px] rounded-md transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-xs text-slate-300 font-light leading-relaxed">
                  {exp.points.map((pt, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-amber-400 shrink-0 select-none mt-1">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h2 className="font-display text-lg font-bold text-white tracking-tight">
            Education Credentials
          </h2>
        </div>

        <div className="relative border-l border-slate-800 ml-4 pl-6 space-y-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <span className="absolute -left-10 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 border-2 border-indigo-500 ring-4 ring-slate-900 group-hover:bg-indigo-500 group-hover:text-slate-950 transition-colors text-indigo-400">
                <GraduationCap className="w-3.5 h-3.5" />
              </span>

              <div className="bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/60 rounded-2xl p-5 transition-all">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <div>
                    <h3 className="font-display text-sm font-bold text-white leading-snug">
                      {edu.institution}
                    </h3>
                    <p className="text-indigo-400 font-sans text-xs font-semibold mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-950/60 border border-slate-800 px-2.5 py-1 rounded-full text-[10px] text-slate-400 font-mono">
                    <Calendar className="w-3 h-3 text-indigo-500" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-1.5 text-[11px] text-slate-400 mb-4 font-light">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.grade && (
                    <div className="flex items-center gap-1 font-mono text-amber-400 font-semibold text-xs">
                      <Award className="w-3.5 h-3.5" />
                      <span>{edu.grade}</span>
                    </div>
                  )}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-xs text-slate-300 font-light leading-relaxed">
                  {edu.highlights?.map((hl, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-indigo-400 shrink-0 select-none mt-1">▪</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
