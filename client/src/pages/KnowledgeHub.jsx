import React from "react";
import { ArrowRight } from "lucide-react";

export default function KnowledgeHub() {
  const articles = [
    {
      category: "STARTUP IDEAS",
      categoryColor: "text-[#FFB693] bg-[#FF6B00]/15 border-[#FF6B00]/30",
      date: "Oct 24, 2024",
      readTime: "5 min read",
      title: "50 No-Code Startup Ideas You Can Build Without Programming In 2025",
      description:
        "Why high schoolers don't need to spend two years learning C++ before shipping revenue-generating web apps.",
      author: "By Tactyqal Venture Labs",
      authorBg: "bg-[#FF6B00] text-[#090A0F]",
      imageSrc: "", // Replace with your image path when ready
    },
    {
      category: "PITCHING",
      categoryColor: "text-[#E0B6FF] bg-[#9D4EDD]/15 border-[#9D4EDD]/30",
      date: "Nov 12, 2024",
      readTime: "3 min read",
      title: "The 60-Second Elevator Pitch for Teenage Tech Entrepreneurs",
      description:
        "How our students hook angel investors and national journalists before their coffee gets cold.",
      author: "By Varun K., Lead Mentor",
      authorBg: "bg-[#9D4EDD] text-[#F8FAFC]",
      imageSrc: "", // Replace with your image path when ready
    },
    {
      category: "ADMISSIONS",
      categoryColor: "text-[#00F0FF] bg-[#00F0FF]/15 border-[#00F0FF]/30",
      date: "Dec 04, 2024",
      readTime: "6 min read",
      title:
        "Demystifying Top University Extracurriculars: Real Revenue vs Club Presidencies",
      description:
        "An unredacted breakdown of why Ivy League admission committees rank deployed software above standard student council titles.",
      author: "By Ananya D., Admissions Strategist",
      authorBg: "bg-[#00F0FF] text-[#090A0F]",
      imageSrc: "", // Replace with your image path when ready
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
            "radial-gradient(circle at 15% 15%, rgba(157, 78, 221, 0.10), transparent 45%), radial-gradient(circle at 85% 85%, rgba(255, 107, 0, 0.08), transparent 45%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#FFB693] uppercase">
                KNOWLEDGE HUB
              </span>
            </div>
            <h2
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              className="text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] font-bold text-[#F8FAFC] tracking-[-0.025em]"
            >
              Actionable Playbooks &amp; Founder <br className="hidden sm:block" />
              Insights
            </h2>
            <p className="mt-3 text-[16px] leading-[26px] text-[#94A3B8] max-w-[620px]">
              Deep-dive technical postmortems, venture validation playbooks, and
              university admissions intelligence.
            </p>
          </div>

          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#FFB693] hover:text-[#FF6B00] transition-colors shrink-0"
          >
            <span>Explore All Articles In Blog</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* ================= ARTICLES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="group bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] hover:border-[#FF6B00]/35 hover:-translate-y-1 transition-all duration-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Category & Metadata */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[10px] font-semibold tracking-[0.06em] uppercase px-3 py-1 rounded-full border ${art.categoryColor}`}
                  >
                    {art.category}
                  </span>
                  <span className="text-[12px] text-[#94A3B8]">
                    {art.date} • {art.readTime}
                  </span>
                </div>

                {/* Article Image Placeholder Banner */}
                <div className="relative h-[150px] sm:h-[165px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F2438] via-[#14293D] to-[#090A0F] border border-white/[0.08] mb-5">
                  <img
                    src={art.imageSrc}
                    alt={art.title}
                    className="w-full h-full object-cover opacity-0"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,107,0,0.18),transparent_55%),linear-gradient(to_top,rgba(9,10,15,0.85)_10%,transparent_70%)]" />
                </div>

                {/* Title & Description */}
                <h3
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  className="text-[18px] sm:text-[20px] leading-[26px] font-bold text-[#F8FAFC] tracking-[-0.015em]"
                >
                  {art.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[22px] text-[#94A3B8]">
                  {art.description}
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2.5">
                <div
                  className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 ${art.authorBg}`}
                >
                  {art.author.replace("By ", "").charAt(0)}
                </div>
                <span className="text-[12px] font-medium text-[#94A3B8]">
                  {art.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}