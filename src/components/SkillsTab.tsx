/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { skillCategories } from "../resumeData";
import { CheckCircle2, Cpu, Database, Layout, Terminal, Code2, Users } from "lucide-react";

export default function SkillsTab() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 110 } }
  };

  // Helper to resolve icon categories
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "skill-lang":
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case "skill-back":
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case "skill-front":
        return <Layout className="w-4 h-4 text-amber-400" />;
      case "skill-db":
        return <Database className="w-4 h-4 text-purple-400" />;
      case "skill-core":
        return <Code2 className="w-4 h-4 text-pink-400" />;
      case "skill-soft":
        return <Users className="w-4 h-4 text-sky-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Tab Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
        <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">
          <Code2 className="w-5 h-5" />
        </div>
        <h2 className="font-display text-lg font-bold text-white tracking-tight">
          Skills Ecosystem & Expertise
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            className="bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/50 rounded-2xl p-5 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-slate-950/80 rounded-lg border border-slate-800">
                  {getCategoryIcon(category.id)}
                </div>
                <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 group">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-light group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden p-[1px] border border-slate-900/60">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          category.id === "skill-lang"
                            ? "from-emerald-500 to-teal-500"
                            : category.id === "skill-back"
                            ? "from-indigo-500 to-purple-500"
                            : category.id === "skill-front"
                            ? "from-amber-500 to-orange-500"
                            : category.id === "skill-db"
                            ? "from-purple-500 to-pink-500"
                            : category.id === "skill-core"
                            ? "from-pink-500 to-rose-500"
                            : "from-sky-500 to-indigo-500"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
