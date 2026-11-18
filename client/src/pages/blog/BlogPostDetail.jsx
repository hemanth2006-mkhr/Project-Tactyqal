import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Sparkles,
  Tag,
  BookOpen,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Match your backend API URL base
const API_BASE_URL = "https://project-tactyqal-backend.onrender.com/";

export default function BlogPostDetail() {
  const { slug } = useParams(); // Matches route like /blog/:slug
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPostDetail = async () => {
      setLoading(true);
      setError("");
      try {
        // You can fetch by slug or ID depending on your backend route setup
        const response = await axios.get(`${API_BASE_URL}/${slug}`);
        const data = response.data.blog || response.data.post || response.data;
        setPost(data);
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        setError("Could not load this dispatch. It may have been moved or removed.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPostDetail();
    }
  }, [slug]);

  const formatDate = (isoDate) => {
    if (!isoDate) return "July 8, 2025";
    return new Date(isoDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getInitials = (name) => {
    if (!name) return "VK";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="bg-[#090A0F] text-[#F8FAFC] min-h-screen">
      <Header />

      <div
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="relative overflow-x-hidden pt-8 pb-24 px-5 md:px-8 lg:px-12 selection:bg-[#FF6B00] selection:text-[#090A0F]"
      >
        {/* Ambient Radial Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(157, 78, 221, 0.08), transparent 45%), radial-gradient(circle at 85% 75%, rgba(255, 107, 0, 0.06), transparent 45%)",
          }}
        />

        <div className="max-w-[960px] mx-auto relative z-10">
          {/* Breadcrumbs & Back Button */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-[12px] text-[#94A3B8]">
              <Link to="/" className="hover:text-[#F8FAFC] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#475569]" />
              <Link to="/blog" className="hover:text-[#F8FAFC] transition-colors">
                Knowledge Hub
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#475569]" />
              <span className="text-[#FFB693] truncate max-w-[200px]">
                {post?.title || "Dispatch"}
              </span>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#94A3B8] hover:text-[#FF6B00] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Hub</span>
            </Link>
          </div>

          {loading ? (
            <div className="py-32 text-center">
              <div className="inline-block w-8 h-8 border-4 border-[#FF6B00] border-t-transparent rounded-full animate-spin" />
              <p className="mt-4 text-[14px] text-[#94A3B8]">
                Loading full playbook dispatch...
              </p>
            </div>
          ) : error || !post ? (
            <div className="py-24 text-center bg-[#12141D]/65 border border-white/[0.08] rounded-3xl">
              <BookOpen className="w-12 h-12 text-[#475569] mx-auto mb-3" />
              <h2 className="text-[20px] font-bold text-[#F8FAFC]">
                Dispatch Not Found
              </h2>
              <p className="text-[14px] text-[#94A3B8] mt-1 mb-6">
                {error || "The requested article could not be located."}
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-[#FF6B00] text-[#090A0F] font-semibold text-[13.5px] px-6 py-2.5 rounded-full"
              >
                Return to Knowledge Hub
              </Link>
            </div>
          ) : (
            <article>
              {/* Category & Metadata */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[11px] font-semibold tracking-[0.06em] uppercase px-3.5 py-1 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FFB693]">
                  {post.category || "Action Dispatch"}
                </span>
                <div className="flex items-center gap-3 text-[13px] text-[#94A3B8]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#FFB693]" />
                    {formatDate(post.createdAt)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#00F0FF]" />
                    {post.readTime || "5 min read"}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.15] font-extrabold text-[#F8FAFC] tracking-[-0.03em]"
              >
                {post.title}
              </h1>

              {/* Excerpt Subtitle */}
              {post.excerpt && (
                <p className="mt-4 text-[17px] sm:text-[18px] leading-[28px] text-[#94A3B8]">
                  {post.excerpt}
                </p>
              )}

              {/* Author & Share Bar */}
              <div className="mt-8 pt-6 pb-8 border-y border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FFA726] text-[#090A0F] text-[13px] font-bold flex items-center justify-center shadow-[0_0_15px_rgba(255,107,0,0.3)]">
                    {getInitials(post.author)}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#F8FAFC]">
                      {post.author || "Varun K."}
                    </div>
                    <div className="text-[11.5px] text-[#94A3B8]">
                      Sovereign Product Architect &amp; Mentor
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }}
                    className="inline-flex items-center gap-1.5 bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.08] text-[#94A3B8] hover:text-[#F8FAFC] text-[12.5px] px-3.5 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Optional Cover Image */}
              {post.coverimage && (
                <div className="mt-8 rounded-3xl overflow-hidden border border-white/[0.08] max-h-[480px] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  <img
                    src={post.coverimage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Main Content Body */}
              <div className="mt-10 text-[16px] leading-[30px] text-[#CBD5E1] space-y-6 whitespace-pre-line">
                {post.content}
              </div>

              {/* Tags Section */}
              {Array.isArray(post.tags) && post.tags.length > 0 && (
                <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                  <span className="text-[12px] font-mono text-[#94A3B8] uppercase flex items-center gap-1.5 mr-2">
                    <Tag className="w-3.5 h-3.5 text-[#FF6B00]" /> Tags:
                  </span>
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white/[0.05] border border-white/[0.08] text-[#FFB693] text-[12px] px-3 py-1 rounded-lg font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Bottom Author Box */}
              <div className="mt-12 bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FFA726] text-[#090A0F] text-[20px] font-extrabold flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,107,0,0.35)]">
                  {getInitials(post.author)}
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#FFB693] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3 text-[#FF6B00]" /> About the Author
                  </div>
                  <h3
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="text-[18px] font-bold text-[#F8FAFC]"
                  >
                    {post.author || "Varun K."}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[22px] text-[#94A3B8]">
                    Building Tactyqal Labs to empower teenage founders with real revenue, architecture sprints, and admission leverage.
                  </p>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}