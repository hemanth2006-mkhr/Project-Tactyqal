import React from "react";
import {
  Zap,
  ArrowDown,
  Users,
  ScanLine,
} from "lucide-react";
import Header from "../components/Header";

export default function HeroSection() {
  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#090A0F] text-[#F8FAFC] relative overflow-x-hidden selection:bg-[#FF6B00] selection:text-[#090A0F]"
    >
      {/* Level 0 Ambient Radial Blooms */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(157, 78, 221, 0.12), transparent 50%), radial-gradient(circle at bottom left, rgba(255, 107, 0, 0.08), transparent 45%), radial-gradient(circle at 82% 15%, rgba(255, 107, 0, 0.12), transparent 40%)",
        }}
      />

      {/* Floating Independent Header */}
      <Header />

      {/* Fluid 12-Column Container with pt-28 top padding to account for fixed header */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pb-16 relative z-10">
        {/* ================= HERO SECTION ================= */}
        <main className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
          {/* LEFT COLUMN (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 bg-[#FF6B00]/15 border border-[#FF6B00]/40 rounded-full px-3.5 py-1.5 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00F0FF]" />
              </span>
              <span className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#FFB693] uppercase flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#FF6B00] fill-[#FF6B00]" />
                NEXT COHORT OPEN — LIMITED TO 15 SPOTS
              </span>
            </div>

            {/* Display Hero Headline */}
            <h1
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              className="text-[36px] leading-[44px] tracking-[-0.02em] sm:text-[48px] sm:leading-[56px] xl:text-[56px] xl:leading-[64px] xl:tracking-[-0.03em] font-extrabold text-[#F8FAFC]"
            >
              Empower The Next <br className="hidden sm:block" />
              Generation To Build Apps <br className="hidden sm:block" />
              That{" "}
              <span className="bg-gradient-to-r from-[#FF6B00] via-[#FFA726] to-[#E0B6FF] bg-clip-text text-transparent">
                Impact Millions
              </span>
              <span className="text-[#E0B6FF]">.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-[16px] leading-[26px] text-[#94A3B8] max-w-[540px] font-normal">
              1:1 expert mentoring, full-stack app engineering, university
              admissions edge, and real revenue generation in 8 weeks.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center text-[#090A0F] font-semibold text-[14px] px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,107,0,0.45)] active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
                }}
              >
                Book Free Consultation
              </a>

              <a
                href="#stories"
                className="inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-[#1C1F2E]/85 border border-white/[0.12] hover:border-[#9D4EDD]/50 hover:shadow-[0_0_20px_rgba(157,78,221,0.22)] text-[#F8FAFC] font-medium text-[14px] px-6 py-3.5 rounded-full transition-all duration-200 active:scale-[0.98]"
              >
                <span>Explore Student Apps</span>
                <ArrowDown className="w-4 h-4 text-[#94A3B8]" />
              </a>
            </div>

            {/* Social Proof Avatars + Text */}
            <div className="mt-7 flex items-center gap-3.5">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#FF6B00] text-[#090A0F] text-[10px] font-bold flex items-center justify-center ring-2 ring-[#090A0F]">
                  AY
                </div>
                <div className="w-7 h-7 rounded-full bg-[#9D4EDD] text-[#F8FAFC] text-[10px] font-bold flex items-center justify-center ring-2 ring-[#090A0F]">
                  SK
                </div>
                <div className="w-7 h-7 rounded-full bg-[#00F0FF] text-[#090A0F] text-[10px] font-bold flex items-center justify-center ring-2 ring-[#090A0F]">
                  RM
                </div>
                <div className="w-7 h-7 rounded-full bg-[#1E1F25] text-[#94A3B8] text-[10px] font-semibold flex items-center justify-center ring-2 ring-[#090A0F]">
                  +87
                </div>
              </div>
              <p className="text-[13px] leading-[18px] text-[#94A3B8]">
                Guided by MIT, Stanford, &amp; YC-alumni engineers
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: KRISHIDRISHTI AI CARD */}
          <div className="lg:col-span-5">
            <div className="group bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] hover:border-[#FF6B00]/35 hover:-translate-y-0.5 transition-all duration-300 rounded-2xl p-5 shadow-[0_12px_36px_-10px_rgba(255,107,0,0.12)]">
              {/* Top Window Controls & Status */}
              <div className="flex items-center justify-between gap-2 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFA726]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF]" />
                  </div>
                  <span className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#94A3B8] uppercase ml-1">
                    KRISHIDRISHTI AI • V2.4
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-[#00F0FF]/10 border border-[#00F0FF]/30 rounded-full px-2.5 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                  <span className="text-[10px] font-semibold tracking-[0.06em] text-[#00F0FF] uppercase">
                    OFFLINE SYNC
                  </span>
                </div>
              </div>

              {/* Image Placeholder Banner */}
              <div className="relative h-[170px] sm:h-[185px] w-full rounded-xl overflow-hidden bg-[#0F2438] border border-white/[0.08]">
                <img
                  src="https://res.cloudinary.com/apkrtok1/image/upload/KrishiDrishti-ai.webp"
                  alt="Soil Analysis & Crop Recommendation Preview"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/95 via-[#090A0F]/35 to-transparent"
                />

                <div className="relative z-10 h-full flex flex-col justify-end p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <ScanLine className="w-3.5 h-3.5 text-[#FFB693]" />
                    <span className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#FFB693] uppercase">
                      SOIL ANALYSIS &amp; CROP RECOMMENDATION
                    </span>
                  </div>
                  <h3
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="text-[18px] leading-[26px] tracking-[-0.01em] font-semibold text-[#F8FAFC]"
                  >
                    Real-time Spectral Diagnostic
                  </h3>
                </div>
              </div>

              {/* 3 Telemetry Metric Boxes */}
              <div className="grid grid-cols-3 gap-2.5 mt-3.5">
                <div className="bg-[#1A1B21]/90 border border-white/[0.08] rounded-xl p-3 text-center">
                  <div className="text-[10px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase">
                    CONFIDENCE
                  </div>
                  <div
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="mt-1 text-[18px] sm:text-[20px] font-extrabold text-[#00F0FF]"
                  >
                    98.4%
                  </div>
                  <div className="mt-2.5 h-[4px] w-full bg-white/[0.08] rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-[#00F0FF] rounded-full" />
                  </div>
                </div>

                <div className="bg-[#1A1B21]/90 border border-white/[0.08] rounded-xl p-3 text-center">
                  <div className="text-[10px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase">
                    NITROGEN N-P-K
                  </div>
                  <div
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="mt-1 text-[18px] sm:text-[20px] font-extrabold text-[#FF6B00]"
                  >
                    Optimal
                  </div>
                  <div className="mt-2.5 h-[4px] w-full bg-white/[0.08] rounded-full overflow-hidden">
                    <div
                      className="h-full w-[78%] rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #FF6B00 0%, #FFA726 100%)",
                      }}
                    />
                  </div>
                </div>

                <div className="bg-[#1A1B21]/90 border border-white/[0.08] rounded-xl p-3 text-center">
                  <div className="text-[10px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase">
                    SOIL PH INDEX
                  </div>
                  <div
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="mt-1 text-[18px] sm:text-[20px] font-extrabold text-[#E0B6FF]"
                  >
                    6.82
                  </div>
                  <div className="mt-2.5 h-[4px] w-full bg-white/[0.08] rounded-full overflow-hidden">
                    <div className="h-full w-[68%] bg-[#9D4EDD] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Active Farmers Banner */}
              <div className="mt-3.5 bg-[#FF6B00]/10 border border-[#FF6B00]/25 rounded-xl px-3.5 py-2.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
                    }}
                  >
                    <Users className="w-3.5 h-3.5 text-[#090A0F]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.04em] text-[#F8FAFC] uppercase">
                      12,000+ ACTIVE FARMERS
                    </div>
                    <div className="text-[12px] text-[#94A3B8]">
                      Validated in Punjab &amp; Maharashtra
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-semibold tracking-[0.06em] text-[#00F0FF] uppercase shrink-0">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Card Footer Metadata */}
              <div className="mt-3.5 pt-1 flex items-center justify-between text-[12px] leading-[16px] text-[#94A3B8]">
                <span>Shipped by Aryan P. (17y)</span>
                <span className="text-[#FFB693] font-medium">
                  Batch #04 • 8 Weeks
                </span>
              </div>
            </div>
          </div>
        </main>

        {/* ================= BOTTOM METRICS CARD ================= */}
        <section className="mt-12 sm:mt-16 bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] rounded-3xl p-6 sm:p-8 lg:px-10 lg:py-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            <div>
              <div
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[32px] sm:text-[36px] font-extrabold tracking-[-0.02em] text-[#FFB693]"
              >
                100+
              </div>
              <h2 className="mt-1.5 text-[15px] font-semibold text-[#F8FAFC]">
                Students Mentored
              </h2>
              <p className="mt-1.5 text-[13px] leading-[18px] text-[#94A3B8]">
                Zero cookie-cutter lectures. Dedicated 1:1 founder guidance.
              </p>
            </div>

            <div>
              <div
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[32px] sm:text-[36px] font-extrabold tracking-[-0.02em] text-[#E0B6FF]"
              >
                Top Tier
              </div>
              <h2 className="mt-1.5 text-[15px] font-semibold text-[#F8FAFC]">
                University Admits
              </h2>
              <p className="mt-1.5 text-[13px] leading-[18px] text-[#94A3B8]">
                Stanford, MIT, Harvard, CMU, Oxford &amp; Imperial acceptance.
              </p>
            </div>

            <div>
              <div
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[32px] sm:text-[36px] font-extrabold tracking-[-0.02em] text-[#00F0FF]"
              >
                ₹Thousands+
              </div>
              <h2 className="mt-1.5 text-[15px] font-semibold text-[#F8FAFC]">
                Real Revenue
              </h2>
              <p className="mt-1.5 text-[13px] leading-[18px] text-[#94A3B8]">
                Real recurring MRR collected by teenage founders in school.
              </p>
            </div>

            <div>
              <div
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[32px] sm:text-[36px] font-extrabold tracking-[-0.02em] text-[#FF6B00]"
              >
                100%
              </div>
              <h2 className="mt-1.5 text-[15px] font-semibold text-[#F8FAFC]">
                Live Launch Rate
              </h2>
              <p className="mt-1.5 text-[13px] leading-[18px] text-[#94A3B8]">
                Every graduate ships a live, functional, public application.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
