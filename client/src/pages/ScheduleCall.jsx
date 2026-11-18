import React, { useState } from "react";
import { MessageSquare, ShieldCheck, Clock, ChevronDown, ArrowRight } from "lucide-react";

export default function ScheduleCall() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    grade: "Grade 11 (Junior — Prime Admissions Window)",
    passion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#090A0F] text-[#F8FAFC] relative overflow-x-hidden py-16 px-5 md:px-8 lg:px-12 selection:bg-[#FF6B00] selection:text-[#090A0F]"
    >
      {/* Level 0 Ambient Radial Blooms (DESIGN.md) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(255, 107, 0, 0.08), transparent 45%), radial-gradient(circle at 90% 85%, rgba(157, 78, 221, 0.10), transparent 45%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN: INFO & WHATSAPP CARD ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#FFB693] uppercase">
                  SCHEDULE ADMISSIONS CALL
                </span>
              </div>
              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[32px] leading-[40px] sm:text-[44px] sm:leading-[52px] font-bold text-[#F8FAFC] tracking-[-0.025em]"
              >
                Let&apos;s Talk About Your Teen&apos;s Potential.
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[26px] text-[#94A3B8]">
                Book a 15-minute 1:1 strategy consultation with our Admissions
                Director. We review your student&apos;s interests, evaluate problem
                feasibility, and outline their tailored 8-week build blueprint.
              </p>
            </div>

            {/* Direct WhatsApp Callout Card (Level-1 Glass) */}
            <div className="mt-8 bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] rounded-2xl p-5 shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5)]">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#00F0FF]/15 border border-[#00F0FF]/30 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <div>
                  <h4
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="text-[15px] font-bold text-[#F8FAFC]"
                  >
                    Prefer Direct WhatsApp?
                  </h4>
                  <p className="mt-0.5 text-[13px] text-[#94A3B8]">
                    Instant response from our founder team
                  </p>
                  <a
                    href="https://wa.me/919304772106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.04em] text-[#00F0FF] uppercase hover:underline"
                  >
                    <span>CHAT ON +91-93047-72106</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Bullet Points */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span className="text-[13px] text-[#94A3B8]">
                  Zero obligation. Completely free 1:1 assessment.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#00F0FF] shrink-0" />
                <span className="text-[13px] text-[#94A3B8]">
                  Slots scheduled within 24 hours of submission.
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: APPLICATION FORM ================= */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-6"
            >
              {/* Row 1: Parent Name & Student Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase mb-2">
                    PARENT / GUARDIAN NAME
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    required
                    className="w-full bg-[#1A1B21]/90 border border-white/[0.10] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 rounded-xl px-4 py-3 text-[14px] text-[#F8FAFC] placeholder-[#475569] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase mb-2">
                    STUDENT NAME &amp; AGE
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="e.g. Rohan Sharma (16y)"
                    required
                    className="w-full bg-[#1A1B21]/90 border border-white/[0.10] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 rounded-xl px-4 py-3 text-[14px] text-[#F8FAFC] placeholder-[#475569] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="parent@domain.com"
                    required
                    className="w-full bg-[#1A1B21]/90 border border-white/[0.10] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 rounded-xl px-4 py-3 text-[14px] text-[#F8FAFC] placeholder-[#475569] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase mb-2">
                    PHONE / WHATSAPP NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full bg-[#1A1B21]/90 border border-white/[0.10] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 rounded-xl px-4 py-3 text-[14px] text-[#F8FAFC] placeholder-[#475569] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Student Grade / Academic Level */}
              <div>
                <label className="block text-[11px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase mb-2">
                  STUDENT GRADE / ACADEMIC LEVEL
                </label>
                <div className="relative">
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full bg-[#1A1B21]/90 border border-white/[0.10] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 rounded-xl px-4 py-3 text-[14px] text-[#F8FAFC] outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="Grade 11 (Junior — Prime Admissions Window)">
                      Grade 11 (Junior — Prime Admissions Window)
                    </option>
                    <option value="Grade 10 (Sophomore)">
                      Grade 10 (Sophomore)
                    </option>
                    <option value="Grade 12 (Senior)">
                      Grade 12 (Senior)</option>
                    <option value="Grade 8 - 9 (Middle School Explorer)">
                      Grade 8 - 9 (Middle School Explorer)
                    </option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
                </div>
              </div>

              {/* Row 4: Rough App Idea or Passion */}
              <div>
                <label className="block text-[11px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase mb-2">
                  ROUGH APP IDEA OR AREA OF PASSION (OPTIONAL)
                </label>
                <textarea
                  name="passion"
                  rows="3"
                  value={formData.passion}
                  onChange={handleChange}
                  placeholder="Tell us what they care about (e.g. climate AI, sports telemetry, healthcare accessibility, or 'No idea yet, wants to explore')..."
                  className="w-full bg-[#1A1B21]/90 border border-white/[0.10] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 rounded-xl p-4 text-[14px] text-[#F8FAFC] placeholder-[#475569] outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center text-[#090A0F] font-semibold text-[15px] py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_25px_rgba(255,107,0,0.45)] active:scale-[0.98] cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
                }}
              >
                Request Free Consultation Call
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}