import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Zap, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/#home", sectionId: "home" },
    { name: "Success Stories", href: "/#stories", sectionId: "stories" },
    { name: "Program", href: "/#program", sectionId: "program" },
    { name: "Why Us", href: "/#why-us", sectionId: "why-us" },
    { name: "Tools", href: "/#tools", sectionId: "tools" },
    { name: "Blog", href: "/blog", sectionId: null },
    { name: "Pricing", href: "/#pricing", sectionId: "pricing" },
    { name: "FAQ", href: "/#faq", sectionId: "faq" },
  ];

  const handleNavClick = (e, link) => {
    setMobileMenuOpen(false);

    // If it's a separate page link (like /blog), let normal navigation happen
    if (!link.sectionId) return;

    e.preventDefault();

    const scrollToSection = () => {
      const element = document.getElementById(link.sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // If already on the home page, scroll directly; otherwise navigate home first
    if (location.pathname === "/") {
      scrollToSection();
    } else {
      navigate("/");
      // Small timeout to allow the home page to render before scrolling
      setTimeout(scrollToSection, 150);
    }
  };

  return (
    <header className="relative z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-[1440px] mx-auto bg-[#12141D]/80 backdrop-blur-[20px] border border-white/[0.08] hover:border-white/[0.16] transition-colors rounded-2xl px-4 sm:px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/#home"
          onClick={(e) => handleNavClick(e, { sectionId: "home" })}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          <div
            className="w-9 h-9 rounded-[10px] flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.35)]"
            style={{
              background: "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
            }}
          >
            <Zap className="w-5 h-5 text-[#090A0F] fill-[#090A0F]" />
          </div>
          <div
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="tracking-wider font-extrabold text-[14px] sm:text-base flex items-center gap-1.5"
          >
            <span className="text-[#F8FAFC]">TACTYQAL</span>
            <span className="text-[#FF6B00]">LABS</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="text-[13px] font-medium text-[#94A3B8] hover:text-[#FF6B00] transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Desktop CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="/#consultation"
            onClick={(e) => handleNavClick(e, { sectionId: "consultation" })}
            className="hidden lg:inline-flex items-center justify-center bg-[#F8FAFC] hover:bg-white text-[#090A0F] text-[13px] font-semibold px-5 sm:px-6 py-2 rounded-full transition-all active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] whitespace-nowrap"
          >
            Contact
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-[8px] text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.05] cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {mobileMenuOpen && (
        <nav className="lg:hidden max-w-[1440px] mx-auto mt-2 bg-[#12141D]/95 backdrop-blur-[20px] border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="text-[13px] px-3 py-2 rounded-[8px] text-[#94A3B8] hover:text-[#FF6B00] hover:bg-white/[0.05] transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 mt-1 border-t border-white/[0.08]">
            <a
              href="/#consultation"
              onClick={(e) => handleNavClick(e, { sectionId: "consultation" })}
              className="w-full inline-flex items-center justify-center bg-[#F8FAFC] hover:bg-white text-[#090A0F] text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all active:scale-95"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}