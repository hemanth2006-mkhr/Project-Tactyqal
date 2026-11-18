import React, { useState } from "react";
import { ChevronUp, ChevronDown, HelpCircle, ArrowRight, MessageSquare } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default as shown in screenshot

  const faqs = [
    {
      question: "Who is the Tactyqal Labs accelerator designed for?",
      answer:
        "Tactyqal Labs is tailored for ambitious high school students (Grades 9–12) and early college builders eager to build real venture software rather than generic classroom toy projects. No prior deep coding background is mandatory; our 1:1 mentorship adapts to each founder's technical baseline.",
    },
    {
      question: "How does the 1:1 founder mentorship work?",
      answer:
        "Every student is assigned a dedicated 1:1 mentor who has built and shipped software at scale (Stanford, MIT, Y Combinator alumni). Students receive weekly live strategy sprints, asynchronous PR code reviews, and constant direct Slack/WhatsApp guidance.",
    },
    {
      question: "Do students really launch live apps with paying customers?",
      answer:
        "Yes. By Week 6, students integrate live payment rails (Stripe, Razorpay, or Lemon Squeezy) and launch on platforms like Product Hunt and targeted niche communities. Over 88% of students deploy a public, functional app by graduation.",
    },
    {
      question: "How does this provide a decisive edge in university admissions?",
      answer:
        "Admissions committees at Ivy League and top-tier engineering universities evaluate thousands of cookie-cutter Model UN titles and standard club presidencies. A verifiable software product with real users, live telemetry, and sovereign founder ownership is the ultimate extracurricular differentiator.",
    },
    {
      question: "What is the expected weekly time commitment?",
      answer:
        "The accelerator demands approximately 6–8 hours per week. Sprints are designed to integrate seamlessly alongside demanding high school workloads, exams, and extracurricular schedules.",
    },
    {
      question: "How does the 100% Launch Guarantee work?",
      answer:
        "If a student attends scheduled mentor sessions and follows the roadmap but does not launch a functional, production-deployed web application by Week 8, we issue a 100% money-back refund. Zero financial risk.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
            "radial-gradient(circle at 50% 10%, rgba(157, 78, 221, 0.08), transparent 45%), radial-gradient(circle at 50% 90%, rgba(255, 107, 0, 0.06), transparent 45%)",
        }}
      />

      <div className="max-w-[1040px] mx-auto relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] rounded-full px-3.5 py-1 mb-4">
            <span className="text-[10.5px] font-semibold leading-[14px] tracking-[0.06em] text-[#FFB693] uppercase">
              FAQ &amp; ADMISSIONS INTELLIGENCE
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="text-[32px] leading-[40px] sm:text-[44px] sm:leading-[52px] font-extrabold text-[#F8FAFC] tracking-[-0.025em]"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] leading-[26px] text-[#94A3B8]">
            Clear, transparent answers about our 1:1 mentorship model, university
            admission impact, launch guarantee, and weekly commitment.
          </p>
        </div>

        {/* ================= ACCORDION LIST ================= */}
        <div className="space-y-4 mb-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-200 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="text-[16px] sm:text-[17px] font-bold text-[#F8FAFC] tracking-tight"
                  >
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 text-[#94A3B8]">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#FFB693]" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-[14px] sm:text-[14.5px] leading-[24px] text-[#94A3B8] border-t border-white/[0.04]">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM SUPPORT BANNER ================= */}
        <div className="bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5)]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5 text-[#FFB693]" />
            </div>
            <div>
              <h4
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[17px] font-bold text-[#F8FAFC] tracking-tight"
              >
                Still have questions?
              </h4>
              <p className="mt-1 text-[13.5px] text-[#94A3B8]">
                Connect with our admissions team on WhatsApp or book a free 15-minute
                diagnostic call.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/919304772106"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1A1B21]/90 hover:bg-[#252630] border border-white/[0.10] text-[#00F0FF] font-semibold text-[13px] px-5 py-3 rounded-xl transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP US</span>
            </a>

            <a
              href="#consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center text-[#090A0F] font-semibold text-[13px] px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,107,0,0.45)] active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
              }}
            >
              Book Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
