import React from "react";
import {
  Zap,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Globe,
  Sparkles,
} from "lucide-react";

export default function SuccessStories() {
  const ventures = [
    {
      category: "AGRICULTURE AI",
      founderMeta: "17-Year-Old Founder",
      title: "KrishiDrishti AI",
      description:
        "Soil diagnostic and crop recommendation engine designed for rural Indian farming cooperatives. Runs machine learning inference locally on low-cost smartphones without cellular data connectivity.",
      badge: "$45,000 Youth Agritech Grant Recipient & CM Recognition",
      metricsTitle: "ACTIVE FARMERS",
      metricsValue: "12,000+",
      subMetricsTitle: "COOPERATIVES",
      subMetricsValue: "45+ Rural",
      techStack: ["React Native", "FastAPI", "TensorFlow Lite", "Supabase"],
      imageSrc: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop",
      imageTag: "FastAPI + TensorFlow",
      shippedBadge: "Shipped in 7 wks",
      spanClass: "lg:col-span-8",
    },
    {
      category: "E-COMMERCE SAAS",
      founderMeta: "13y Grade 8 Founder",
      title: "One Last Chapter",
      description:
        "Personalized monthly literary subscription box curating indie novels for young avid readers with interactive digital reading companions.",
      metricsTitle: "MONTHLY RECURRING REVENUE",
      metricsValue: "₹100,000 / mo",
      subMetricsTitle: "ACTIVE SUBSCRIBERS",
      subMetricsValue: "850+",
      techStack: ["Next.js", "Stripe", "PostgreSQL"],
      imageSrc: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
      footerNote: "Admitted to Stanford OHS",
      spanClass: "lg:col-span-4",
    },
    {
      category: "COMMUNITY TECH",
      founderMeta: "16y Grade 11 Founder",
      title: "Paws of Promise",
      description:
        "Intelligent pet adoption matching platform linking verified urban animal rescue centers with prospective adopters via verified vet telemetry.",
      metricsTitle: "SUCCESSFUL ADOPTIONS",
      metricsValue: "3,400+",
      badge: "PRESS FEATURE: The Hindu & NDTV",
      techStack: ["React Native", "AWS S3", "100+ Shelters"],
      imageSrc: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop",
      spanClass: "lg:col-span-4",
    },
    {
      category: "VOICE AI",
      founderMeta: "Age 16 Founder",
      title: "Converza AI",
      description:
        "Zero-latency conversational phone assistant automating clinic intake calls for regional dental practices with automated booking workflows.",
      metricsTitle: "CLINIC PARTNERS",
      metricsValue: "42 Active",
      badge: "AI Automation Award Winner",
      footerNote: "42 Dental Clinics Active",
      techStack: ["WebRTC", "ElevenLabs", "Python"],
      spanClass: "lg:col-span-4",
      imageSrc: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "SUSTAINABLE D2C",
      founderMeta: "Age 17 Founder",
      title: "Elenor Handbags",
      description:
        "Luxury plant-leather goods made from upcycled pineapple agro-waste, powered by a custom Shopify headless store engine.",
      metricsTitle: "Q1 GROSS REVENUE",
      metricsValue: "₹3.8L Gross",
      badge: "Featured In Vogue India",
      footerNote: "₹3.8L First-Quarter Gross",
      techStack: ["Shopify", "Tailwind", "Custom Engine"],
      spanClass: "lg:col-span-4",
      imageSrc: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="stories"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#090A0F] text-[#F8FAFC] relative overflow-x-hidden py-16 px-5 md:px-8 lg:px-12 selection:bg-[#FF6B00] selection:text-[#090A0F]"
    >
      {/* Level 0 Ambient Radial Blooms */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(157, 78, 221, 0.10), transparent 45%), radial-gradient(circle at 85% 75%, rgba(255, 107, 0, 0.08), transparent 45%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 bg-[#FF6B00]/15 border border-[#FF6B00]/30 rounded-full px-3.5 py-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#FFB693] uppercase">
                PROOF OF VELOCITY
              </span>
            </div>
            <h2
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              className="text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] font-bold text-[#F8FAFC] tracking-[-0.025em]"
            >
              Real Students. Real Apps. Real Success.
            </h2>
            <p className="mt-3 text-[16px] leading-[26px] text-[#94A3B8] max-w-[620px]">
              Not sandbox mockups or school science fairs. Teen builders launching
              functional tech ventures generating verifiable revenue, impact,
              and admission leverage.
            </p>
          </div>

          {/* Top Right Live Spotlight Badge */}
          <div className="inline-flex items-center gap-2 bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] px-4 py-2 rounded-full self-start md:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase">
              5 SHIPPED VENTURES SPOTLIGHTED
            </span>
          </div>
        </div>

        {/* ================= BENTO GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {ventures.map((item, idx) => (
            <div
              key={idx}
              className={`${item.spanClass} group bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] hover:border-[#FF6B00]/35 hover:-translate-y-0.5 transition-all duration-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5)]`}
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.06em] uppercase bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FFB693]">
                    {item.category}
                  </span>
                  <span className="text-[12px] font-medium text-[#94A3B8]">
                    {item.founderMeta}
                  </span>
                </div>

                {/* Title & Description */}
                <h3
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  className="text-[20px] sm:text-[22px] font-bold text-[#F8FAFC] tracking-[-0.015em]"
                >
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[22px] text-[#94A3B8]">
                  {item.description}
                </p>

                {/* Illustrated Media Preview Banner */}
                {item.imageSrc && (
                  <div className="mt-5 relative h-[160px] sm:h-[180px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F2438] via-[#14293D] to-[#090A0F] border border-white/[0.08]">
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,107,0,0.18),transparent_55%),linear-gradient(to_top,rgba(9,10,15,0.9)_10%,transparent_70%)]" />

                    {item.imageTag && (
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#FFB693]">
                        <span>{item.imageTag}</span>
                        <span className="text-[#00F0FF]">{item.shippedBadge}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Special Highlight Badge (Grants / Press) */}
                {item.badge && (
                  <div className="mt-5 bg-[#1A1B21]/90 border border-white/[0.08] rounded-xl px-3.5 py-2.5 flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="text-[12px] font-medium text-[#F8FAFC]">
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Metrics Blocks for Cards (Populates KrishiDrishti and others) */}
                {item.metricsValue && (
                  <div className="mt-5 grid grid-cols-2 gap-3 bg-[#1A1B21]/90 border border-white/[0.08] rounded-2xl p-4">
                    <div>
                      <div className="text-[10px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase">
                        {item.metricsTitle || "BENCHMARK METRIC"}
                      </div>
                      <div
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        className="mt-1 text-[20px] sm:text-[22px] font-extrabold text-[#00F0FF]"
                      >
                        {item.metricsValue}
                      </div>
                    </div>
                    {item.subMetricsValue && (
                      <div>
                        <div className="text-[10px] font-semibold tracking-[0.06em] text-[#94A3B8] uppercase">
                          {item.subMetricsTitle}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                          }}
                          className="mt-1 text-[20px] sm:text-[22px] font-extrabold text-[#FF6B00]"
                        >
                          {item.subMetricsValue}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card Bottom Footer: Tech Stack Chips & Action Links */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.techStack &&
                    item.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-white/[0.05] border border-white/[0.08] text-[#94A3B8] text-[11px] px-2.5 py-1 rounded-[6px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                {idx === 0 ? (
                  <a
                    href="#architecture"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#FFB693] hover:text-[#FF6B00] transition-colors shrink-0"
                  >
                    <span>View Live Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  item.footerNote && (
                    <span className="text-[12px] font-medium text-[#FFB693] shrink-0">
                      {item.footerNote}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}