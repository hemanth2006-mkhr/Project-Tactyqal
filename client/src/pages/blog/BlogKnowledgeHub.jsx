import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Search,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

// Match your backend API URL
const API_BASE_URL = "https://project-tactyqal-backend.onrender.com/";

export default function BlogKnowledgeHub() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Action Dispatches");
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const categories = [
    "All Action Dispatches",
    "Startup Business Ideas",
    "Problem Solving",
    "Sovereign Models",
    "AI & App Tech",
    "Teen Founder Stories",
  ];

  // Fetch blog posts from backend API using Axios
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`${API_BASE_URL}`);
        // Supports responses structured as an array, { blog: [...] }, or { posts: [...] }
        const data = Array.isArray(response.data)
          ? response.data
          : response.data.blog || response.data.posts || [];

        // Optional: Filter only published posts for the public blog view (if desired)
        const publishedPosts = data.filter(
          (p) => !p.status || p.status === "published"
        );

        setPosts(publishedPosts);
      } catch (err) {
        console.error("Failed to fetch blog posts from backend", err);
        setError("Failed to load blog posts from server.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    console.log("Subscribed email:", newsletterEmail);
    setNewsletterEmail("");
  };

  // Filter posts based on category and search query
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Action Dispatches" ||
      post.category === selectedCategory;
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (isoDate) => {
    if (!isoDate) return "July 8, 2025";
    return new Date(isoDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-[#090A0F] text-[#F8FAFC] pt-1">
      <Header />
      <div
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="min-h-screen bg-[#090A0F] text-[#F8FAFC] relative overflow-x-hidden pt-12 pb-20 px-5 md:px-8 lg:px-12 selection:bg-[#FF6B00] selection:text-[#090A0F]"
      >
        {/* Level 0 Ambient Radial Blooms */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 20% 15%, rgba(157, 78, 221, 0.10), transparent 45%), radial-gradient(circle at 80% 75%, rgba(255, 107, 0, 0.08), transparent 45%)",
          }}
        />

        <div className="max-w-[1440px] mx-auto relative z-10">
          {/* ================= BREADCRUMBS & TOP TAG ================= */}
          <div className="flex items-center gap-2 text-[12px] text-[#94A3B8] mb-4">
            <a href="/" className="hover:text-[#F8FAFC] transition-colors">
              Home
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-[#475569]" />
            <span className="text-[#FFB693]">Sovereign Founder Knowledge Hub</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#FF6B00]/15 border border-[#FF6B00]/30 rounded-full px-3.5 py-1 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span className="text-[11px] font-semibold leading-[14px] tracking-[0.06em] text-[#FFB693] uppercase">
              ACTIONABLE TRANSFORMATION &amp; PLAYBOOK DISPATCHES
            </span>
          </div>

          {/* ================= HERO TITLE ================= */}
          <h1
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="text-[36px] leading-[44px] sm:text-[48px] sm:leading-[56px] xl:text-[56px] xl:leading-[64px] font-extrabold text-[#F8FAFC] tracking-[-0.03em] max-w-[920px]"
          >
            Actionable Intelligence for{" "}
            <span className="bg-gradient-to-r from-[#FF6B00] via-[#FFA726] to-[#E0B6FF] bg-clip-text text-transparent">
              Teenage &amp; Next-Gen Founders
            </span>
          </h1>
          <p className="mt-4 text-[16px] leading-[26px] text-[#94A3B8] max-w-[800px]">
            Deep-dives on venture validation, full-stack engineering architectures,
            business model breakdowns, and sovereign founder playbooks tested in live
            accelerator cohorts.
          </p>

          {/* ================= FEATURED HERO BENTO ARTICLE CARD (PRESERVED) ================= */}
          <div className="mt-10 bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] hover:border-[#FF6B00]/35 transition-all duration-300 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Post Content */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10.5px] font-semibold tracking-[0.06em] uppercase px-3 py-1 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FFB693]">
                    Startup Business Ideas
                  </span>
                  <div className="flex items-center gap-2 text-[12px] text-[#94A3B8]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FFB693]" /> July 8, 2025
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#00F0FF]" /> 5 min read
                    </span>
                  </div>
                </div>

                <h2
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  className="text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.2] font-bold text-[#F8FAFC] tracking-[-0.02em]"
                >
                  50 No-Code Startup Ideas You Can Build Without Programming Skills in
                  2025
                </h2>

                <p className="mt-4 text-[15px] leading-[26px] text-[#94A3B8]">
                  You’re sitting in a coffee shop, laptop open, and you come across
                  another ‘Learn To Code in 6 Months’ tutorial. Here is how ambitious
                  builders are leveraging modern AI orchestration, Bubble,
                  Supabase, and no-code software in days instead of months.
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF6B00] text-[#090A0F] text-[11px] font-bold flex items-center justify-center">
                    VK
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#F8FAFC]">
                      Varun K.
                    </div>
                    <div className="text-[11px] text-[#94A3B8]">
                      Lead Mentor &amp; Sovereign Product Architect
                    </div>
                  </div>
                </div>

                <a
                  href="#read-playbook"
                  className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#ff7b33] text-[#090A0F] font-semibold text-[13.5px] px-6 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] active:scale-95"
                >
                  <span>Read Full Playbook</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Live Telemetry Dashboard Widget */}
            <div className="lg:col-span-5">
              <div className="bg-[#1A1B21]/90 border border-white/[0.08] rounded-2xl p-5 shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFA726]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF]" />
                    <span className="text-[10.5px] font-mono text-[#94A3B8] uppercase ml-1">
                      ATLAS • API SPRINT // PROD-2025
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/30 text-[#00F0FF]">
                    PAID ARR
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-[11px] font-mono text-[#94A3B8] uppercase">
                    Target: Velocity &amp; First Revenue
                  </div>
                  <div
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="text-[20px] font-extrabold text-[#F8FAFC] mt-0.5"
                  >
                    88% ARR
                  </div>
                  <div className="mt-2.5 h-[4px] w-full bg-white/[0.08] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "88%",
                        background:
                          "linear-gradient(90deg, #FF6B00 0%, #00F0FF 100%)",
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 mt-4">
                  <div className="bg-[#12141D] border border-white/[0.06] rounded-xl p-3 text-center">
                    <div className="text-[9.5px] font-mono text-[#94A3B8] uppercase">
                      AI Usage
                    </div>
                    <div className="mt-1 text-[16px] font-extrabold text-[#00F0FF]">
                      4.8GB
                    </div>
                  </div>

                  <div className="bg-[#12141D] border border-white/[0.06] rounded-xl p-3 text-center">
                    <div className="text-[9.5px] font-mono text-[#94A3B8] uppercase">
                      ARR Run
                    </div>
                    <div className="mt-1 text-[16px] font-extrabold text-[#FF6B00]">
                      $12Dev
                    </div>
                  </div>

                  <div className="bg-[#12141D] border border-white/[0.06] rounded-xl p-3 text-center">
                    <div className="text-[9.5px] font-mono text-[#94A3B8] uppercase">
                      Scale
                    </div>
                    <div className="mt-1 text-[16px] font-extrabold text-[#E0B6FF]">
                      0 Blueprints
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                  <span>Tactyqal Foundry</span>
                  <span className="text-[#00F0FF]">System Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SEARCH & CATEGORY FILTER BAR ================= */}
          <div className="mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
            {/* Search Input */}
            <div className="relative w-full lg:w-[320px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dispatches..."
                className="w-full bg-[#12141D]/80 border border-white/[0.10] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 rounded-xl pl-10 pr-4 py-3 text-[13.5px] text-[#F8FAFC] placeholder-[#475569] outline-none transition-all"
              />
            </div>

            {/* Category Pill Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all shrink-0 cursor-pointer ${isActive
                        ? "bg-[#FF6B00] text-[#090A0F] font-semibold shadow-[0_0_20px_rgba(255,107,0,0.35)]"
                        : "bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/[0.15]"
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="hidden xl:flex items-center gap-2 text-[12px] font-mono text-[#00F0FF]">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
              <span>Sorted by: Backend Database</span>
            </div>
          </div>

          {/* ================= POSTS GRID (DYNAMIC FROM BACKEND API) ================= */}
          {loading ? (
            <div className="py-24 text-center">
              <div className="inline-block w-8 h-8 border-4 border-[#FF6B00] border-t-transparent rounded-full animate-spin" />
              <p className="mt-4 text-[14px] text-[#94A3B8]">
                Fetching action dispatches from backend...
              </p>
            </div>
          ) : error ? (
            <div className="py-20 text-center bg-red-500/10 rounded-3xl border border-red-500/30 mt-8">
              <h3 className="text-[17px] font-bold text-red-300">{error}</h3>
              <p className="text-[13.5px] text-red-400 mt-1">
                Make sure your backend server is running on port 5000.
              </p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-24 text-center bg-[#12141D]/40 rounded-3xl border border-white/[0.08] mt-8">
              <BookOpen className="w-10 h-10 text-[#475569] mx-auto mb-3" />
              <h3 className="text-[18px] font-bold text-[#F8FAFC]">
                No dispatches found
              </h3>
              <p className="mt-1 text-[14px] text-[#94A3B8]">
                Try adjusting your search query or category filter.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                const postId = post._id || post.id;
                const authorName = post.author || "Admin";
                const authorInitials = authorName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2);

                return (
                  <article
                    key={postId}
                    className="group bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] hover:border-[#FF6B00]/35 hover:-translate-y-1 transition-all duration-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5)]"
                  >
                    <div>
                      {post.coverimage && (
                        <div className="mb-4 h-[140px] w-full rounded-2xl overflow-hidden border border-white/[0.08]">
                          <img
                            src={post.coverimage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[10px] font-semibold tracking-[0.06em] uppercase px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#FFB693]">
                          {post.category || "General"}
                        </span>
                        <span className="text-[12px] text-[#94A3B8]">
                          {formatDate(post.createdAt)}
                        </span>
                      </div>

                      <h3
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        className="text-[19px] sm:text-[21px] leading-[28px] font-bold text-[#F8FAFC] tracking-[-0.015em] group-hover:text-[#FFB693] transition-colors"
                      >
                        {post.title}
                      </h3>

                      <p className="mt-3 text-[14px] leading-[22px] text-[#94A3B8] line-clamp-3">
                        {post.excerpt || post.content}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-white/[0.1] text-[10px] font-bold text-[#F8FAFC] flex items-center justify-center">
                          {authorInitials}
                        </div>
                        <span className="text-[12px] font-medium text-[#94A3B8]">
                          {authorName}
                        </span>
                      </div>

                      <Link
                        to={`/blog/${post.slug || post._id}`}
                        className="text-[12px] font-mono text-[#00F0FF] flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        Read Post <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* ================= PAGINATION CONTROLS ================= */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <span className="text-[13px] text-[#94A3B8]">
              Showing {filteredPosts.length} published dispatches
            </span>

            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((pg, pIdx) => {
                const isSelected = pg === currentPage;
                return (
                  <button
                    key={pIdx}
                    type="button"
                    onClick={() => setCurrentPage(pg)}
                    className={`w-9 h-9 rounded-xl text-[13px] font-semibold transition-all flex items-center justify-center cursor-pointer ${isSelected
                        ? "bg-[#FF6B00] text-[#090A0F] shadow-[0_0_15px_rgba(255,107,0,0.4)]"
                        : "bg-[#12141D] border border-white/[0.08] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/[0.15]"
                      }`}
                  >
                    {pg}
                  </button>
                );
              })}

              <button
                type="button"
                className="px-3.5 h-9 rounded-xl bg-[#12141D] border border-white/[0.08] text-[13px] font-semibold text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/[0.15] transition-all ml-1 cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>

          {/* ================= BOTTOM NEWSLETTER CTA BANNER ================= */}
          <div className="mt-16 bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] rounded-3xl p-6 sm:p-10 lg:px-12 lg:py-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-[#FF6B00]/15 border border-[#FF6B00]/30 rounded-full px-3.5 py-1.5 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span className="text-[11px] font-semibold tracking-[0.06em] text-[#FFB693] uppercase">
                    WEEKLY FOUNDER MASTERCLASS
                  </span>
                </div>
                <h3
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  className="text-[28px] sm:text-[34px] font-bold text-[#F8FAFC] tracking-[-0.02em]"
                >
                  Love reading? Turn theory into a live startup in 8 weeks.
                </h3>
                <p className="mt-3 text-[15px] leading-[26px] text-[#94A3B8] max-w-[600px]">
                  Data-driven venture blueprints are delivered to your inbox every
                  Thursday, plus early access to Tactyqal Founder Mentorship cohort
                  admissions and private round tables.
                </p>
              </div>

              <div className="lg:col-span-5">
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="bg-[#1A1B21]/90 border border-white/[0.08] rounded-2xl p-5 shadow-[0_12px_36px_rgba(0,0,0,0.5)]"
                >
                  <div className="relative mb-3">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="builder@domain.com"
                      className="w-full bg-[#12141D] border border-white/[0.10] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 rounded-xl px-4 py-3 text-[13.5px] text-[#F8FAFC] placeholder-[#475569] outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center text-[#090A0F] font-semibold text-[14px] py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,107,0,0.45)] active:scale-[0.98] cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
                    }}
                  >
                    Subscribe →
                  </button>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#94A3B8]">
                    <span>🔒 Zero spam</span>
                    <span>Unsubscribe anytime</span>
                    <span className="text-[#00F0FF]">Join 8,400+ Teen Builders</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}