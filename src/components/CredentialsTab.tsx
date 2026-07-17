/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { certificationsList, achievementsList } from "../resumeData";
import { Award, Trophy, ShieldCheck, CheckCircle, Activity, Medal } from "lucide-react";

export default function CredentialsTab() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {/* Certifications Box */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="font-display text-lg font-bold text-white tracking-tight">
            Professional Certifications
          </h2>
        </div>

        <div className="space-y-4">
          {certificationsList.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/60 rounded-2xl p-4 flex items-center gap-4 transition-all group"
            >
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/10 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wider block font-mono">
                  {cert.issuer}
                </span>
                <h3 className="font-display text-sm font-bold text-white truncate leading-snug">
                  {cert.title}
                </h3>
                {cert.date && (
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">
                    Issued: {cert.date}
                  </span>
                )}
              </div>
              <div className="text-emerald-400 text-xs flex items-center gap-1 font-mono font-bold bg-emerald-500/5 px-2 py-0.5 border border-emerald-500/10 rounded-md select-none shrink-0">
                <CheckCircle className="w-3 h-3" />
                <span>Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Box */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">
            <Trophy className="w-5 h-5" />
          </div>
          <h2 className="font-display text-lg font-bold text-white tracking-tight">
            Key Achievements
          </h2>
        </div>

        <div className="space-y-4">
          {achievementsList.map((ach) => (
            <motion.div
              key={ach.id}
              variants={itemVariants}
              className="bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/60 rounded-2xl p-5 transition-all flex gap-4"
            >
              <div className="shrink-0">
                {ach.category === "Athletics" ? (
                  <div className="p-3 bg-rose-500/10 text-rose-400 rounded-xl border border-rose-500/10">
                    <Medal className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/10">
                    <Activity className="w-5 h-5" />
                  </div>
                )}
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3 className="font-display text-sm font-bold text-white leading-tight">
                    {ach.title}
                  </h3>
                  <span className="px-2 py-0.5 bg-slate-950 border border-slate-800 text-slate-400 font-mono text-[9px] rounded-full uppercase">
                    {ach.category}
                  </span>
                </div>
                <p className="text-slate-300 text-xs font-light leading-relaxed">
                  {ach.description}
                </p>
                {ach.date && (
                  <span className="text-[10px] text-slate-400 font-mono block pt-1">
                    Timeline: {ach.date}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
