/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { personalInfo } from "../resumeData";
import { Mail, Phone, MapPin, Linkedin, Github, Cloud, Code, Printer, Send, Camera, RefreshCw } from "lucide-react";
// @ts-ignore
import avatarUrl from "../assets/images/mounika.jpg";

interface ProfileCardProps {
  onOpenPrintModal: () => void;
  onSelectTab: (tab: string) => void;
}

export default function ProfileCard({ onOpenPrintModal, onSelectTab }: ProfileCardProps) {
  const [currentAvatar, setCurrentAvatar] = useState<string>(avatarUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("mounika_portfolio_avatar");
    if (saved) {
      setCurrentAvatar(saved);
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        alert("Please upload an image smaller than 3MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        try {
          localStorage.setItem("mounika_portfolio_avatar", base64String);
          setCurrentAvatar(base64String);
        } catch (err) {
          alert("Image is too large to save. Try a smaller resolution photo!");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  const resetAvatar = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem("mounika_portfolio_avatar");
    setCurrentAvatar(avatarUrl);
  };

  const hasCustomAvatar = currentAvatar !== avatarUrl;

  return (
    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between h-full shadow-2xl relative overflow-hidden group">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -z-10 group-hover:bg-indigo-500/20 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-amber-500/5 rounded-full blur-2xl -z-10"></div>

      <div className="space-y-6">
        {/* Profile Header Image */}
        <div className="flex flex-col items-center text-center">
          <div className="relative group/avatar cursor-pointer" onClick={triggerUpload} title="ஃபோட்டோவை மாற்ற கிளிக் செய்யவும்">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-amber-500 rounded-2xl blur opacity-30 group-hover/avatar:opacity-80 transition duration-500"></div>
            
            <img
              src={currentAvatar}
              alt="Mounika Selvaraj Avatar"
              className="relative w-36 h-36 object-cover rounded-2xl border border-slate-700 shadow-xl transition-all duration-300 group-hover/avatar:brightness-75"
              referrerPolicy="no-referrer"
            />
            
            {/* Upload Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-2xl opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300">
              <Camera className="w-6 h-6 text-amber-400 mb-1" />
              <span className="text-[10px] text-white font-medium px-2 text-center leading-tight">
                Upload Photo
              </span>
            </div>

            {/* Hidden Input File */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Reset button if custom avatar exists */}
          {hasCustomAvatar && (
            <button
              onClick={resetAvatar}
              className="mt-2 px-2.5 py-1 bg-slate-800/80 hover:bg-slate-700 text-[10px] text-slate-300 hover:text-white rounded-lg border border-slate-750 transition-all flex items-center gap-1 cursor-pointer"
              title="Reset to default avatar"
            >
              <RefreshCw className="w-3 h-3 text-amber-400" />
              Reset Photo
            </button>
          )}

          <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-white leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-amber-400 font-mono text-xs mt-1 uppercase tracking-wider font-semibold">
            {personalInfo.title}
          </p>
        </div>

        {/* Objective Section */}
        <div className="bg-slate-950/40 border border-slate-800/60 rounded-2xl p-4">
          <h3 className="text-slate-400 font-display text-xs font-semibold uppercase tracking-wider mb-2">
            Career Objective
          </h3>
          <p className="text-slate-300 text-xs leading-relaxed font-light">
            {personalInfo.objective}
          </p>
        </div>

        {/* Contact Info List */}
        <div className="space-y-3 font-sans text-xs">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors p-2.5 rounded-xl hover:bg-slate-800/40 border border-transparent hover:border-slate-800/40"
          >
            <div className="p-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg">
              <Mail className="w-4 h-4" />
            </div>
            <span className="truncate">{personalInfo.email}</span>
          </a>

          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors p-2.5 rounded-xl hover:bg-slate-800/40 border border-transparent hover:border-slate-800/40"
          >
            <div className="p-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg">
              <Phone className="w-4 h-4" />
            </div>
            <span>{personalInfo.phone}</span>
          </a>

          <div className="flex items-start gap-3 text-slate-300 p-2.5 rounded-xl border border-transparent">
            <div className="p-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="leading-tight font-light">{personalInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Social Links & Action Button */}
      <div className="mt-8 space-y-4">
        {/* Social Badges Grid */}
        <div className="grid grid-cols-4 gap-2">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-indigo-400 text-slate-400 transition-all group/icon"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
            <span className="text-[10px] mt-1 font-mono">LinkedIn</span>
          </a>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-white text-slate-400 transition-all group/icon"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
            <span className="text-[10px] mt-1 font-mono">GitHub</span>
          </a>

          <a
            href={personalInfo.socials.salesforce}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-sky-400 text-slate-400 transition-all group/icon"
            title="Salesforce Trailblazer"
          >
            <Cloud className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
            <span className="text-[10px] mt-1 font-mono">Salesforce</span>
          </a>

          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-amber-500 text-slate-400 transition-all group/icon"
            title="LeetCode Profile"
          >
            <Code className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
            <span className="text-[10px] mt-1 font-mono">LeetCode</span>
          </a>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <button
            onClick={() => onSelectTab("contact")}
            className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-95 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            Contact Me
          </button>
          
          <button
            onClick={onOpenPrintModal}
            className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 active:scale-95 transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-amber-400" />
            Print Resume
          </button>
        </div>
      </div>
    </div>
  );
}
