/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Terminal, Code2, Briefcase, GraduationCap, Award, MessageSquare, Menu, X } from "lucide-react";

// Components
import ProfileCard from "./components/ProfileCard";
import OverviewTab from "./components/OverviewTab";
import EducationExperienceTab from "./components/EducationExperienceTab";
import SkillsTab from "./components/SkillsTab";
import ProjectsTab from "./components/ProjectsTab";
import CredentialsTab from "./components/CredentialsTab";
import ContactTab from "./components/ContactTab";
import PrintableResumeModal from "./components/PrintableResumeModal";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const tabs = [
    { id: "overview", name: "Overview", icon: Sparkles },
    { id: "experience", name: "Education & Exp", icon: GraduationCap },
    { id: "skills", name: "Skills Ecosystem", icon: Code2 },
    { id: "projects", name: "Projects", icon: Terminal },
    { id: "credentials", name: "Credentials", icon: Award },
    { id: "contact", name: "Contact", icon: MessageSquare }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab onSelectTab={setActiveTab} />;
      case "experience":
        return <EducationExperienceTab />;
      case "skills":
        return <SkillsTab />;
      case "projects":
        return <ProjectsTab />;
      case "credentials":
        return <CredentialsTab />;
      case "contact":
        return <ContactTab />;
      default:
        return <OverviewTab onSelectTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background glow meshes */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -z-20 pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[80px] -z-20 pointer-events-none"></div>

      {/* Header Panel (Centered desktop/mobile) */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-30 px-4 md:px-8 py-4 shrink-0">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-br from-indigo-500 to-amber-500 rounded-lg text-slate-950">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display font-extrabold text-sm text-white tracking-tight uppercase">
                Mounika.S
              </span>
              <span className="text-[10px] text-slate-400 font-mono block leading-none">
                CS & Business Systems
              </span>
            </div>
          </div>

          {/* Tab Navigation Menu (Desktop Only) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute inset-0 bg-indigo-600 rounded-xl -z-10 shadow-lg shadow-indigo-600/25"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={() => setIsPrintModalOpen(true)}
              className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl text-[10px] font-semibold cursor-pointer active:scale-95 transition-all"
            >
              Resume PDF
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b border-slate-900 bg-slate-950/90 backdrop-blur-md px-4 py-3 space-y-1 z-20 sticky top-[61px] overflow-hidden shrink-0"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-3 transition-colors cursor-pointer ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Dashboard Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-6 items-stretch">
        {/* Left Side: Profile Card */}
        <section className="w-full md:w-[320px] shrink-0">
          <ProfileCard
            onOpenPrintModal={() => setIsPrintModalOpen(true)}
            onSelectTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </section>

        {/* Right Side: Navigation panel and Active Content Area */}
        <section className="flex-1 bg-slate-950/40 border border-slate-900 rounded-3xl p-6 md:p-8 relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full"
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      {/* Footer Block */}
      <footer className="border-t border-slate-900/60 py-6 text-center text-[10px] text-slate-500 font-mono max-w-6xl w-full mx-auto px-4 shrink-0">
        <div>&copy; {new Date().getFullYear()} Mounika Selvaraj. All rights reserved.</div>
        <div className="mt-1 font-light text-slate-600">Built with React, Tailwind CSS, & Motion</div>
      </footer>

      {/* Resume print/preview modal */}
      <AnimatePresence>
        {isPrintModalOpen && (
          <PrintableResumeModal onClose={() => setIsPrintModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
