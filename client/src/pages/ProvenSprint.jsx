import React from "react";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";

export default function ProvenSprint() {
  const phases = [
    {
      phaseNumber: "PHASE 01",
      weeks: "Weeks 1-2",
      title: "Ideation & Market Research",
      description:
        "Validation frameworks, customer discovery sprints, founder-problem fit diagnostics, and zero-capital market stress testing.",
      deliverables: [
        "20 customer interviews",
        "Competitor moat analysis",
        "Problem hypothesis signed",
      ],
      accentColor: "#FF6B00",
    },
    {
      phaseNumber: "PHASE 02",
      weeks: "Weeks 3-4",
      title: "Design & Prototyping",
      description:
        "Figma design systems, interactive UX wireframing, high-fidelity clickable mockups, and technical architecture signoff.",
      deliverables: [
        "Complete design system",
        "Usability test on 15 users",
        "DB schema architecture",
      ],
      accentColor: "#9D4EDD",
    },
    {
      phaseNumber: "PHASE 03",
      weeks: "Weeks 5-6",
      title: "Full-Stack Development",
      description:
        "Building live software with code & no-code engines, database pipelines, Stripe payments, and OpenAI/Claude API integrations.",
      deliverables: [
        "Live staging deployment",
        "Payment gateway live",
        "AI agent endpoints synced",
      ],
      accentColor: "#00F0FF",
    },
    {
      phaseNumber: "PHASE 04",
      weeks: "Weeks 7-8",
      title: "Launch & Marketing",
      description:
        "Product Hunt launch sprint, national press release outreach, university portfolio showcase, and customer acquisition.",
      deliverables: [
        "First 100 organic users",
        "Live Demo Day to Angels",
        "Ivy League Common App packet",
      ],
      accentColor: "#FFB693",
    },
  ];

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
            "radial-gradient(circle at 20% 15%, rgba(157, 78, 221, 0.10), transparent 45%), radial-gradient(circle at 80% 80%, rgba(255, 107, 0, 0.08), transparent 45%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-[760px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#FFB693] uppercase">
              THE PROVEN SPRINT
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="text-[32px] leading-[40px] sm:text-[44px] sm:leading-[52px] font-extrabold text-[#F8FAFC] tracking-[-0.025em]"
          >
            From Blank Canvas to Shipped Startup in <br className="hidden sm:block" />
            8 Weeks
          </h2>
          <p className="mt-4 text-[16px] leading-[26px] text-[#94A3B8]">
            A rigorous, founder-grade execution framework engineered specifically
            for ambitious teenagers with zero prior coding experience required.
          </p>
        </div>

        {/* ================= 4-PHASE GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="group bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] hover:border-[#FF6B00]/35 hover:-translate-y-1 transition-all duration-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Phase Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[11px] font-semibold tracking-[0.06em] text-[#FFB693] uppercase">
                    {phase.phaseNumber}
                  </span>
                  <span className="bg-white/[0.05] border border-white/[0.08] text-[#94A3B8] text-[11px] px-2.5 py-0.5 rounded-full font-medium">
                    {phase.weeks}
                  </span>
                </div>

                {/* Title & Description */}
                <h3
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  className="text-[20px] leading-[28px] font-bold text-[#F8FAFC] tracking-[-0.015em]"
                >
                  {phase.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[22px] text-[#94A3B8]">
                  {phase.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-3">
                  {phase.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: phase.accentColor }}
                      />
                      <span className="text-[13px] leading-[18px] text-[#F8FAFC] font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM QUOTE BANNER ================= */}
        <div className="bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] rounded-3xl p-6 sm:p-8 lg:px-10 lg:py-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5)]">
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 mt-1 shadow-[0_0_20px_rgba(255,107,0,0.3)]"
              style={{
                background:
                  "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
              }}
            >
              <Quote className="w-5 h-5 text-[#090A0F] fill-[#090A0F]" />
            </div>
            <div>
              <blockquote
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[16px] sm:text-[18px] leading-[26px] font-semibold text-[#F8FAFC] italic"
              >
                &ldquo;Learn to sell. Learn to build. If you can do both, you will
                be unstoppable.&rdquo;
              </blockquote>
              <p className="mt-1 text-[13px] text-[#94A3B8]">
                — Naval Ravikant, Co-founder of AngelList &amp; Philosopher-Investor
              </p>
            </div>
          </div>

          {/* Action Trigger Button */}
          <a
            href="#upcoming-sprint"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.12] hover:border-[#FF6B00]/50 text-[#F8FAFC] font-semibold text-[14px] px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,107,0,0.25)] active:scale-[0.98] shrink-0 w-full lg:w-auto"
          >
            <span>Join Upcoming Sprint</span>
            <ArrowRight className="w-4 h-4 text-[#FFB693]" />
          </a>
        </div>
      </div>
    </section>
  );
}