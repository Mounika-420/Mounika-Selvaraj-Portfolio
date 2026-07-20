/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsList } from "../resumeData";
import { FileText, Car, ExternalLink, Github, ChevronDown, ChevronUp, Sparkles, FolderGit2 } from "lucide-react";

export default function ProjectsTab() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedProj, setExpandedProj] = useState<string | null>("proj-1"); // Default expand the first project for better initial visualization

  const categories = ["All", "AI/NLP", "Web Development"];

  const filteredProjects = activeCategory === "All"
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedProj(expandedProj === id ? null : id);
  };

  const getProjIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText":
        return <FileText className="w-5 h-5" />;
      case "Car":
        return <Car className="w-5 h-5" />;
      default:
        return <FolderGit2 className="w-5 h-5" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Tab Header with Category Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-white tracking-tight">
              Engineering Projects
            </h2>
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-900">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedProj(null); // Reset expand on change filter
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/15"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List with Expandable details */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="space-y-4"
        >
          {filteredProjects.map((proj) => {
            const isExpanded = expandedProj === proj.id;
            return (
              <motion.div
                key={proj.id}
                layout
                variants={itemVariants}
                className={`bg-slate-900/40 border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? "border-indigo-500/30 shadow-xl shadow-indigo-950/10"
                    : "border-slate-800/80 hover:border-slate-700/60"
                }`}
              >
                {/* Project Header clickable bar */}
                <div
                  onClick={() => toggleExpand(proj.id)}
                  className="p-5 flex justify-between items-center cursor-pointer select-none hover:bg-slate-800/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl border ${
                      isExpanded
                        ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                        : "bg-slate-950/80 border-slate-800 text-slate-300"
                    }`}>
                      {getProjIcon(proj.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-slate-950 border border-slate-800 text-slate-400 font-mono text-[9px] rounded-full uppercase">
                          {proj.category}
                        </span>
                        {proj.category === "AI/NLP" && (
                          <span className="flex items-center gap-1 text-[9px] text-amber-400 font-mono font-semibold uppercase">
                            <Sparkles className="w-3 h-3 text-amber-500" />
                            LLM Summary
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-base font-bold text-white mt-1 group-hover:text-indigo-400 transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-slate-400 p-2 rounded-xl bg-slate-950/50 border border-slate-800/40">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Collapsible details wrapper */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 border-t border-slate-800/40 pt-4 bg-slate-950/20 space-y-4">
                        <p className="text-slate-300 text-xs font-light leading-relaxed">
                          {proj.description}
                        </p>

                        {/* Technical Highlights bullets */}
                        <div className="space-y-2">
                          <h4 className="text-slate-400 font-display text-[10px] font-bold uppercase tracking-wider">
                            Key Highlights & Implementations
                          </h4>
                          <ul className="space-y-2 text-xs text-slate-300 font-light leading-relaxed">
                            {proj.details.map((detail, index) => (
                              <li key={index} className="flex gap-2">
                                <span className="text-indigo-400 shrink-0 select-none mt-1">✦</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Tags */}
                        <div className="pt-2">
                          <h4 className="text-slate-400 font-display text-[10px] font-bold uppercase tracking-wider mb-2">
                            Technologies Applied
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {proj.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 bg-slate-950 border border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700 transition-all font-mono text-[9px] rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
