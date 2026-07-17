/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, RefreshCw, Mail, Phone, Calendar, MessageSquare, AlertCircle } from "lucide-react";
import { ContactMessage } from "../types";

export default function ContactTab() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: "",
    email: "",
    subject: "Internship Opportunity",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedMessages, setSubmittedMessages] = useState<ContactMessage[]>([]);

  // Load existing submitted messages on mount
  useEffect(() => {
    const saved = localStorage.getItem("mounika_portfolio_messages");
    if (saved) {
      try {
        setSubmittedMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed parsing saved messages", e);
      }
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in all fields before sending.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      const updated = [...submittedMessages, formData];
      setSubmittedMessages(updated);
      localStorage.setItem("mounika_portfolio_messages", JSON.stringify(updated));

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "Internship Opportunity",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Tab Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
        <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">
          <MessageSquare className="w-5 h-5" />
        </div>
        <h2 className="font-display text-lg font-bold text-white tracking-tight">
          Get in Touch
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Contact Form */}
        <div className="md:col-span-3 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-display text-[10px] font-bold uppercase tracking-wider block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full text-xs text-white bg-slate-950 border border-slate-850 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-3.5 py-2.5 transition-colors placeholder:text-slate-600 outline-none"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-display text-[10px] font-bold uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full text-xs text-white bg-slate-950 border border-slate-850 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-3.5 py-2.5 transition-colors placeholder:text-slate-600 outline-none"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-1.5">
                  <label className="text-slate-400 font-display text-[10px] font-bold uppercase tracking-wider block">
                    Subject / Reason
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full text-xs text-white bg-slate-950 border border-slate-850 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-3.5 py-2.5 transition-colors outline-none cursor-pointer"
                  >
                    <option value="Internship Opportunity">Internship Opportunity</option>
                    <option value="Collaboration Project">Collaboration Project</option>
                    <option value="LeetCode / Coding Discuss">LeetCode / Coding Discuss</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="text-slate-400 font-display text-[10px] font-bold uppercase tracking-wider block">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your opportunity or inquiry..."
                    className="w-full text-xs text-white bg-slate-950 border border-slate-850 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-3.5 py-2.5 transition-colors placeholder:text-slate-600 outline-none resize-none"
                  />
                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <div className="flex items-center gap-2 p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:text-slate-400 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/15 cursor-pointer active:scale-[0.99] transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Dispatching Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-screen"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-slate-400 text-xs font-light mt-1 max-w-sm">
                    Thank you for reaching out. Your message has been saved in local memory and would be dispatched to Mounika's inbox.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold rounded-xl cursor-pointer transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Local Persistence Inbox Logs */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Recruiter Sandbox Logs
              </h3>
              <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                As a client-only dashboard, any messages you submit on this form are safely persisted in your browser's local sandbox memory below:
              </p>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {submittedMessages.length === 0 ? (
                  <div className="text-center py-6 border border-dashed border-slate-800 rounded-xl">
                    <span className="text-[10px] text-slate-600 font-mono">No messages logged yet</span>
                  </div>
                ) : (
                  submittedMessages.map((msg, index) => (
                    <div
                      key={index}
                      className="p-2.5 bg-slate-950/60 border border-slate-850 rounded-xl text-[10px] space-y-1"
                    >
                      <div className="flex justify-between items-start font-mono text-slate-400 font-semibold">
                        <span className="text-slate-200 truncate max-w-[100px]">{msg.name}</span>
                        <span className="text-indigo-400 text-[9px]">{msg.subject}</span>
                      </div>
                      <p className="text-slate-300 font-light truncate">{msg.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {submittedMessages.length > 0 && (
              <button
                onClick={() => {
                  localStorage.removeItem("mounika_portfolio_messages");
                  setSubmittedMessages([]);
                }}
                className="w-full py-1.5 mt-4 border border-dashed border-rose-500/10 hover:border-rose-500/20 text-rose-400/80 hover:text-rose-400 bg-slate-950/30 rounded-lg text-[10px] font-mono cursor-pointer transition-colors"
              >
                Clear Saved Messages
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
