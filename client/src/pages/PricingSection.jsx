import React from "react";
import { CheckCircle2, Zap, Sparkles } from "lucide-react";

export default function PricingSection() {
  const acceleratorPerks = [
    "8 Weeks 1:1 Live Founder Mentoring",
    "Full-Stack & No-Code App Architecture",
    "Product Hunt & Global Launch Sprint",
    "Investor-Grade Pitch Deck & Video",
    "Ivy League / UC Portfolio Documentation",
    "100% Money-Back If No Live App Shipped",
  ];

  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#090A0F] text-[#F8FAFC] relative overflow-x-hidden py-16 px-5 md:px-8 lg:px-12 selection:bg-[#FF6B00] selection:text-[#090A0F]"
    >
      {/* Level 0 Ambient Radial Blooms */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 15% 15%, rgba(157, 78, 221, 0.10), transparent 45%), radial-gradient(circle at 85% 85%, rgba(255, 107, 0, 0.08), transparent 45%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* ================= INVEST IN SKILLS / PRICING CONTAINER ================= */}
        <div className="bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] rounded-3xl p-6 sm:p-10 lg:px-12 lg:py-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#FF6B00]/15 border border-[#FF6B00]/30 rounded-full px-3.5 py-1.5 mb-5">
                <Zap className="w-3 h-3 text-[#FF6B00] fill-[#FF6B00]" />
                <span className="text-[11px] font-semibold tracking-[0.06em] text-[#FFB693] uppercase">
                  START YOUR TEEN&apos;S JOURNEY
                </span>
              </div>

              <h3
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[32px] sm:text-[40px] font-extrabold text-[#F8FAFC] tracking-[-0.025em]"
              >
                Invest in Skills That Last a <br className="hidden sm:block" />
                Lifetime.
              </h3>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[26px] text-[#94A3B8]">
                The complete 8-week intensive accelerator where your teenager
                builds, launches, and monetizes a sovereign tech app with direct
                1:1 engineering mentorship.
              </p>

              {/* Perks Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {acceleratorPerks.map((perk, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="text-[13px] sm:text-[14px] text-[#F8FAFC] font-medium">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Pricing Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#1A1B21]/90 border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase">
                    ACCELERATOR COHORT
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#FF6B00]/20 border border-[#FF6B00]/40 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-[#FFB693] uppercase">
                    <Sparkles className="w-3 h-3 text-[#FF6B00]" />
                    ONLY 15 SPOTS
                  </span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3">
                  <span
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="text-[34px] sm:text-[38px] font-extrabold text-[#F8FAFC]"
                  >
                    ₹16,000
                  </span>
                  <span className="text-[20px] font-bold text-[#94A3B8] line-through">
                    ₹25,000
                  </span>
                </div>
                <div className="mt-1 text-[11px] font-semibold tracking-[0.04em] text-[#00F0FF] uppercase">
                  SAVE 36% • LIMITED TIME EARLY-BIRD TUITION
                </div>

                {/* Enroll CTA Button */}
                <a
                  href="#enroll"
                  className="mt-6 w-full inline-flex items-center justify-center text-[#090A0F] font-semibold text-[14px] py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,107,0,0.45)] active:scale-[0.98]"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
                  }}
                >
                  Enroll Now — ₹16,000
                </a>

                {/* Secondary Consultation Action */}
                <a
                  href="#consultation"
                  className="mt-3 w-full inline-flex items-center justify-center bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.12] text-[#F8FAFC] font-medium text-[13px] py-3 rounded-full transition-colors"
                >
                  Book Free 15-Min Strategy Call
                </a>

                {/* Footer Guarantee */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] text-center text-[11px] font-medium text-[#94A3B8]">
                  🔒 100% Launch Guarantee • Zero Financial Risk
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
