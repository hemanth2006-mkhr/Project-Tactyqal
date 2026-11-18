import React from "react";
import {
  Lightbulb,
  PieChart,
  FileText,
  Users2,
  Target,
  GitCommit,
  Activity,
  Layout,
  ArrowRight,
} from "lucide-react";

export default function DiagnosticTools() {
  const diagnosticTools = [
    {
      icon: Lightbulb,
      tag: "AI Engine",
      title: "Startup Idea Generator",
      description: "AI-assisted prompt analyzer for problem-space discovery.",
      tagColor: "text-[#FFB693] bg-[#FF6B00]/15 border-[#FF6B00]/30",
    },
    {
      icon: PieChart,
      tag: "Readiness",
      title: "Fundability Assessment",
      description: "20-point angel readiness rubric & valuation calculator.",
      tagColor: "text-[#00F0FF] bg-[#00F0FF]/15 border-[#00F0FF]/30",
    },
    {
      icon: FileText,
      tag: "Audit",
      title: "Pitch Deck Analyzer",
      description: "Slide-by-slide narrative evaluation with YC heuristics.",
      tagColor: "text-[#E0B6FF] bg-[#9D4EDD]/15 border-[#9D4EDD]/30",
    },
    {
      icon: Users2,
      tag: "Team",
      title: "Team Evaluation Tool",
      description: "Skill complementarity & role allocation simulator.",
      tagColor: "text-[#FFB693] bg-[#FF6B00]/15 border-[#FF6B00]/30",
    },
    {
      icon: Target,
      tag: "Demand",
      title: "Problem-Solution Fit",
      description: "Customer interview sentiment and willingness-to-pay tester.",
      tagColor: "text-[#00F0FF] bg-[#00F0FF]/15 border-[#00F0FF]/30",
    },
    {
      icon: GitCommit,
      tag: "Founder Fit",
      title: "Cofounder Compatibility",
      description: "Equity breakdown & long-term vision alignment index.",
      tagColor: "text-[#FFB693] bg-[#FF6B00]/15 border-[#FF6B00]/30",
    },
    {
      icon: Activity,
      tag: "Psychometric",
      title: "Top 10 Founder Traits",
      description: "Resilience, speed, and execution propensity benchmark.",
      tagColor: "text-[#E0B6FF] bg-[#9D4EDD]/15 border-[#9D4EDD]/30",
    },
    {
      icon: Layout,
      tag: "Conversion",
      title: "Landing Page Assessment",
      description: "Copy clarity, visual hierarchy, and CTA conversion grader.",
      tagColor: "text-[#00F0FF] bg-[#00F0FF]/15 border-[#00F0FF]/30",
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
        {/* ================= FREE DIAGNOSTIC SUITE CONTAINER ================= */}
        <div className="bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Suite Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#FFB693] uppercase mb-2">
                FREE DIAGNOSTIC SUITE
              </div>
              <h3
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[28px] sm:text-[36px] font-bold text-[#F8FAFC] tracking-[-0.02em]"
              >
                Explore Our Startup Assessment Tools
              </h3>
              <p className="mt-2 text-[15px] leading-[24px] text-[#94A3B8] max-w-[600px]">
                Used by 1,000+ aspiring entrepreneurs before enrolling. Test your
                venture conviction, team alignment, and pitch readiness.
              </p>
            </div>

            <a
              href="#tools"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.12] hover:border-[#FF6B00]/50 text-[#F8FAFC] font-semibold text-[13px] px-6 py-3 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,107,0,0.25)] shrink-0"
            >
              <span>Access All 8 Diagnostic Tools Free</span>
              <ArrowRight className="w-4 h-4 text-[#FFB693]" />
            </a>
          </div>

          {/* 8 Diagnostic Tools Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {diagnosticTools.map((tool, tIdx) => {
              const ToolIcon = tool.icon;
              return (
                <div
                  key={tIdx}
                  className="bg-[#1A1B21]/90 border border-white/[0.06] hover:border-white/[0.15] transition-all rounded-2xl p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#F8FAFC]">
                        <ToolIcon className="w-4 h-4 text-[#FFB693]" />
                      </div>
                      <span
                        className={`text-[10px] font-semibold tracking-[0.06em] px-2.5 py-0.5 rounded-full uppercase border ${tool.tagColor}`}
                      >
                        {tool.tag}
                      </span>
                    </div>
                    <h4
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      className="text-[15px] font-bold text-[#F8FAFC] tracking-tight"
                    >
                      {tool.title}
                    </h4>
                    <p className="mt-1 text-[12px] leading-[18px] text-[#94A3B8]">
                      {tool.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}