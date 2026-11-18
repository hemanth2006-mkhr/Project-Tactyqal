import React from "react";
import {
  UserCheck,
  Layers,
  GraduationCap,
  DollarSign,
  Presentation,
  Infinity as InfinityIcon,
} from "lucide-react";

export default function CompetitiveValue() {
  const valueProps = [
    {
      icon: UserCheck,
      title: "1:1 Personalized Mentoring",
      description:
        "Zero diluted webinars or 80-student Zoom calls. Every student is paired with a dedicated founder-mentor who has shipped real software at scale.",
      accentColor: "#FF6B00",
      bgGradient: "from-[#FF6B00]/15 to-[#FF6B00]/5",
    },
    {
      icon: Layers,
      title: "Full Stack & Modern Tooling",
      description:
        "Build production-ready codebases with React, Next.js, Supabase, Tailwind, combined with no-code acceleration engines for unmatched velocity.",
      accentColor: "#9D4EDD",
      bgGradient: "from-[#9D4EDD]/15 to-[#9D4EDD]/5",
    },
    {
      icon: GraduationCap,
      title: "University Admission Edge",
      description:
        "Admissions officers are exhausted by cookie-cutter Model UN tracks. Real user metrics, press features, and revenue put applicants in the top 1%.",
      accentColor: "#00F0FF",
      bgGradient: "from-[#00F0FF]/15 to-[#00F0FF]/5",
    },
    {
      icon: DollarSign,
      title: "Real Revenue Generation",
      description:
        "We integrate Stripe, Lemon Squeezy, or Razorpay in Week 6. Students learn unit economics, customer acquisition cost, and how to charge real money.",
      accentColor: "#FF6B00",
      bgGradient: "from-[#FF6B00]/15 to-[#FF6B00]/5",
    },
    {
      icon: Presentation,
      title: "Pitch & Demo Day",
      description:
        "Every cohort culminates in an investor-grade Demo Day streamed live to angel investors, venture syndicates, and corporate venture leaders.",
      accentColor: "#9D4EDD",
      bgGradient: "from-[#9D4EDD]/15 to-[#9D4EDD]/5",
    },
    {
      icon: InfinityIcon,
      title: "Lifetime Alumni Network",
      description:
        "Graduation is only Day 1. Receive permanent access to our sovereign builder Discord, investor introductions, and ongoing co-founder office hours.",
      accentColor: "#00F0FF",
      bgGradient: "from-[#00F0FF]/15 to-[#00F0FF]/5",
    },
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
            "radial-gradient(circle at 10% 20%, rgba(157, 78, 221, 0.10), transparent 45%), radial-gradient(circle at 90% 80%, rgba(255, 107, 0, 0.08), transparent 45%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-[720px] mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#FFB693] uppercase">
              COMPETITIVE VALUE
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="text-[32px] leading-[40px] sm:text-[44px] sm:leading-[52px] font-bold text-[#F8FAFC] tracking-[-0.025em]"
          >
            Why Parents &amp; Builders Choose Tactyqal Labs
          </h2>
          <p className="mt-3 text-[16px] leading-[26px] text-[#94A3B8]">
            Traditional high school clubs and generic coding bootcamps teach
            syntax that ChatGPT can already replicate. We teach sovereign founder
            ownership.
          </p>
        </div>

        {/* ================= 6-CARD VALUE PROPS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, idx) => {
            const IconComponent = prop.icon;
            return (
              <div
                key={idx}
                className="group bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] hover:border-[#FF6B00]/35 hover:-translate-y-1 transition-all duration-300 rounded-3xl p-7 flex flex-col justify-between shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${prop.bgGradient} border border-white/[0.08] flex items-center justify-center mb-6 shadow-sm`}
                  >
                    <IconComponent
                      className="w-6 h-6"
                      style={{ color: prop.accentColor }}
                    />
                  </div>
                  <h3
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="text-[20px] leading-[28px] font-bold text-[#F8FAFC] tracking-[-0.015em]"
                  >
                    {prop.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[22px] text-[#94A3B8]">
                    {prop.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}