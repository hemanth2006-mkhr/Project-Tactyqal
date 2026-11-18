import React, { useState } from "react";
import { Zap, Mail, Phone, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log("Subscribed:", email);
    setEmail("");
  };

  const platformLinks = [
    { name: "Success Stories", href: "#stories" },
    { name: "Programs", href: "#programs" },
    { name: "Tools & Sandbox", href: "#tools" },
    { name: "Dispatches & Blog", href: "#blog" },
    { name: "Accelerator FAQ", href: "#faq" },
  ];

  const governanceLinks = [
    { name: "Academic Integrity", href: "#academic-integrity" },
    { name: "Cohort Charter", href: "#cohort-charter" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "IP Framework", href: "#ip-framework" },
  ];

  return (
    <footer
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-[#090A0F] text-[#F8FAFC] border-t border-white/[0.08] relative overflow-hidden selection:bg-[#FF6B00] selection:text-[#090A0F]"
    >
      {/* Subtle Ambient Bottom Glow (DESIGN.md) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 25% 0%, rgba(157, 78, 221, 0.08), transparent 45%), radial-gradient(circle at 80% 100%, rgba(255, 107, 0, 0.06), transparent 45%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pt-14 pb-10 relative z-10">
        {/* ================= TOP MULTI-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* COLUMN 1: BRAND & CONTACT INFO (4 Cols on lg) */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <div
                className="w-9 h-9 rounded-[10px] flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.35)]"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
                }}
              >
                <Zap className="w-5 h-5 text-[#090A0F] fill-[#090A0F]" />
              </div>
              <div
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="tracking-wider font-extrabold text-[15px] sm:text-base flex items-center gap-1.5"
              >
                <span className="text-[#F8FAFC]">TACTYQAL</span>
                <span className="text-[#FF6B00]">LABS</span>
              </div>
            </a>

            <p className="mt-4 text-[13px] leading-[20px] text-[#94A3B8] max-w-[320px]">
              Architecting high-conviction ventures, sovereign engineering
              ecosystems, and hyper-velocity acceleration pipelines for next-gen
              teenage founders.
            </p>

            {/* Contact Details */}
            <div className="mt-6 space-y-3 text-[13px] text-[#94A3B8]">
              <a
                href="mailto:tactyqal.labs@gmail.com"
                className="flex items-center gap-2.5 hover:text-[#F8FAFC] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>tactyqal.labs@gmail.com</span>
              </a>

              <a
                href="tel:+919304772106"
                className="flex items-center gap-2.5 hover:text-[#F8FAFC] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00F0FF] shrink-0" />
                <span>+91-93047-72106</span>
              </a>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E0B6FF] shrink-0" />
                <span>Mon–Sat 9am–7pm IST</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: PLATFORM LINKS (2 Cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#FFB693] uppercase mb-4">
              PLATFORM
            </h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[13px] leading-[18px] text-[#94A3B8] hover:text-[#FF6B00] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: GOVERNANCE LINKS (2 Cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#E0B6FF] uppercase mb-4">
              GOVERNANCE
            </h3>
            <ul className="space-y-3">
              {governanceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[13px] leading-[18px] text-[#94A3B8] hover:text-[#E0B6FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: BUILDER DISPATCH NEWSLETTER (4 Cols on lg) */}
          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#00F0FF] uppercase mb-4">
              BUILDER DISPATCH
            </h3>
            <p className="text-[13px] leading-[20px] text-[#94A3B8] max-w-[340px]">
              Receive unredacted technical postmortems, venture telemetry, and
              cohort sprint breakthroughs.
            </p>

            {/* Newsletter Input + Submit Button */}
            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex items-center gap-2 max-w-[360px]"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="builder@domain.com"
                className="w-full bg-[#12141D]/80 border border-white/[0.10] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 rounded-[10px] px-3.5 py-2.5 text-[13px] text-[#F8FAFC] placeholder-[#475569] outline-none transition-all"
              />
              <button
                type="submit"
                aria-label="Subscribe to Builder Dispatch"
                className="shrink-0 w-10 h-10 rounded-[10px] bg-white/[0.06] hover:bg-[#FF6B00] border border-white/[0.12] hover:border-[#FF6B00] text-[#F8FAFC] hover:text-[#090A0F] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Live Status Indicator */}
            <div className="mt-4 inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase">
                COHORT 2026 APPLICATIONS LIVE
              </span>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM COPYRIGHT BAR ================= */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#94A3B8]">
          <p>© 2026 Tactyqal Labs Inc. All sovereign rights reserved.</p>
          <p className="text-[11px] font-semibold tracking-[0.08em] text-[#94A3B8] uppercase">
            Elite Startup Studio & Mentorship for Young Builders
          </p>
        </div>
      </div>
    </footer>
  );
}