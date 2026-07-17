/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { X, Printer, Mail, Phone, MapPin, Globe, Award, Sparkles, Trophy } from "lucide-react";
import { personalInfo, educationList, experienceList, projectsList, skillCategories, certificationsList, achievementsList } from "../resumeData";

interface PrintableResumeModalProps {
  onClose: () => void;
}

export default function PrintableResumeModal({ onClose }: PrintableResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto print:bg-white print:p-0">
      {/* Modal Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden print:border-none print:shadow-none print:rounded-none print:max-h-full print:static print:w-full"
      >
        {/* Controls Header (Hidden on print) */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800 print:hidden shrink-0">
          <div className="flex items-center gap-2">
            <span className="p-1 bg-amber-500/10 text-amber-400 rounded-md">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="font-display text-sm font-semibold text-white">Print-Ready Resume Sheet</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/10 transition-colors active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save as PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700/80 hover:border-slate-600 rounded-xl cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-950 print:bg-white print:text-black print:p-0 print:overflow-visible">
          {/* Paper Mockup (Standard A4 Feel on screen) */}
          <div id="printable-resume" className="mx-auto bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl max-w-3xl space-y-6 print:border-none print:bg-white print:p-0 print:rounded-none">
            {/* Header / Contact block */}
            <div className="text-center space-y-3 pb-4 border-b border-slate-800 print:border-slate-300">
              <h1 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight print:text-slate-900">
                {personalInfo.name}
              </h1>
              
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 text-xs text-slate-300 font-light font-mono print:text-slate-700">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-600" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-600" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-600" />
                  <span>{personalInfo.address}</span>
                </div>
              </div>

              {/* Objective Block */}
              <div className="text-left bg-slate-950/40 p-4 border border-slate-800/80 rounded-xl mt-3 print:bg-slate-50 print:border-slate-200">
                <h3 className="font-display text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-1 print:text-indigo-800">
                  Career Objective
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light print:text-slate-700">
                  {personalInfo.objective}
                </p>
              </div>
            </div>

            {/* Grid Split */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column (Skills, Certifications, Achievements) */}
              <div className="md:col-span-1 space-y-6">
                {/* Technical Skills block */}
                <div className="space-y-3">
                  <h2 className="font-display text-xs font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 print:text-slate-900 print:border-slate-300">
                    Technical Skills
                  </h2>
                  <div className="space-y-3 font-sans text-xs">
                    {skillCategories.map((cat) => (
                      <div key={cat.id} className="space-y-1">
                        <span className="font-semibold text-slate-400 block text-[10px] uppercase font-mono print:text-slate-800">
                          {cat.name}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {cat.skills.map((skill) => (
                            <span
                              key={skill.name}
                              className="px-1.5 py-0.5 bg-slate-950/60 border border-slate-850 text-slate-300 font-mono text-[9px] rounded print:border-slate-200 print:text-slate-800 print:bg-slate-50"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications block */}
                <div className="space-y-3">
                  <h2 className="font-display text-xs font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 print:text-slate-900 print:border-slate-300">
                    Certifications
                  </h2>
                  <div className="space-y-2 text-xs">
                    {certificationsList.map((cert) => (
                      <div key={cert.id} className="leading-snug">
                        <span className="text-[10px] text-amber-400 font-mono font-semibold block print:text-indigo-800">
                          {cert.issuer}
                        </span>
                        <span className="text-slate-300 font-medium block print:text-slate-800">
                          {cert.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements block */}
                <div className="space-y-3">
                  <h2 className="font-display text-xs font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 print:text-slate-900 print:border-slate-300">
                    Achievements
                  </h2>
                  <div className="space-y-3 text-xs leading-relaxed font-light">
                    {achievementsList.map((ach) => (
                      <div key={ach.id} className="space-y-0.5">
                        <span className="font-semibold text-slate-200 block print:text-slate-800">
                          {ach.title}
                        </span>
                        <p className="text-slate-400 text-[11px] leading-snug print:text-slate-600">
                          {ach.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (Education, Experience, Projects) */}
              <div className="md:col-span-2 space-y-6">
                {/* Education section */}
                <div className="space-y-4">
                  <h2 className="font-display text-xs font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 print:text-slate-900 print:border-slate-300">
                    Education
                  </h2>
                  <div className="space-y-4">
                    {educationList.map((edu) => (
                      <div key={edu.id} className="space-y-1">
                        <div className="flex justify-between items-start text-xs font-medium">
                          <div>
                            <span className="text-white font-bold block print:text-slate-900">
                              {edu.institution}
                            </span>
                            <span className="text-indigo-400 font-semibold block print:text-indigo-800">
                              {edu.degree}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-slate-400 shrink-0 print:text-slate-700">
                            {edu.duration}
                          </span>
                        </div>
                        {edu.grade && (
                          <span className="font-mono text-[10px] text-amber-400 font-semibold block print:text-indigo-900">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience section */}
                <div className="space-y-4">
                  <h2 className="font-display text-xs font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 print:text-slate-900 print:border-slate-300">
                    Internship Experience
                  </h2>
                  <div className="space-y-3">
                    {experienceList.map((exp) => (
                      <div key={exp.id} className="space-y-1.5">
                        <div className="flex justify-between items-start text-xs font-medium">
                          <div>
                            <span className="text-white font-bold block print:text-slate-900">
                              {exp.role}
                            </span>
                            <span className="text-amber-400 font-semibold block print:text-indigo-800">
                              {exp.company}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-slate-400 shrink-0 print:text-slate-700">
                            {exp.duration}
                          </span>
                        </div>
                        
                        <ul className="list-disc pl-4 text-xs text-slate-300 font-light space-y-1 print:text-slate-700">
                          {exp.points.map((pt, idx) => (
                            <li key={idx}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects section */}
                <div className="space-y-4">
                  <h2 className="font-display text-xs font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 print:text-slate-900 print:border-slate-300">
                    Technical Projects
                  </h2>
                  <div className="space-y-3">
                    {projectsList.map((proj) => (
                      <div key={proj.id} className="space-y-1">
                        <span className="font-bold text-white block text-xs print:text-slate-900">
                          {proj.title}
                        </span>
                        <ul className="list-disc pl-4 text-xs text-slate-300 font-light space-y-1 print:text-slate-700">
                          {proj.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
