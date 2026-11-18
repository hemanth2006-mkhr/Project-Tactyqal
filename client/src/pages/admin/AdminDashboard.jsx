import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Zap,
  Plus,
  Edit3,
  Trash2,
  X,
  Check,
  LogOut,
  FileText,
  AlertCircle,
  Search,
  Image as ImageIcon,
  Tag,
} from "lucide-react";

// Base URL points to http://localhost:5000/api/blog
const API_BASE_URL = "https://project-tactyqal-backend.onrender.com/api/blog";

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Modal & Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverimage: "",
    author: "Varun K.",
    category: "Startup Business Ideas",
    tags: "",
    status: "draft",
  });

  const categories = [
    "Startup Business Ideas",
    "Problem Solving",
    "Sovereign Models",
    "AI & App Tech",
    "Teen Founder Stories",
  ];

  const getAuthHeaders = () => {
    const token = localStorage.getItem("adminToken");
    return {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
      },
    };
  };

  const generateSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // GET all blog posts
  const fetchPosts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${API_BASE_URL}`, getAuthHeaders());
      // Handle different array responses from controllers (e.g. res.data, res.data.blog, res.data.posts)
      const data = Array.isArray(response.data)
        ? response.data
        : response.data.blog || response.data.posts || [];
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError(
        err.response?.data?.message ||
          "Failed to fetch blog posts from backend API."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // CREATE or UPDATE blog post
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const payload = {
      title: formData.title.trim(),
      slug: formData.slug.trim() || generateSlug(formData.title),
      excerpt: formData.excerpt.trim(),
      content: formData.content.trim(),
      coverimage: formData.coverimage.trim() || undefined,
      author: formData.author.trim(),
      category: formData.category,
      tags: formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      status: formData.status,
    };

    try {
      if (editingPostId) {
        // FIXED: Correct endpoint URL structure (${API_BASE_URL}/${id})
        const response = await axios.put(
          `${API_BASE_URL}/${editingPostId}`,
          payload,
          getAuthHeaders()
        );
        const updatedPost = response.data.post || response.data.blog || response.data;
        setPosts((prev) =>
          prev.map((p) => (p._id === editingPostId ? updatedPost : p))
        );
      } else {
        const response = await axios.post(
          `${API_BASE_URL}`,
          payload,
          getAuthHeaders()
        );
        const createdPost = response.data.post || response.data.blog || response.data;
        setPosts((prev) => [createdPost, ...prev]);
      }
      closeModal();
      fetchPosts(); // Refresh list to ensure consistency
    } catch (err) {
      console.error("Error saving post:", err);
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to save blog post. Check fields."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // DELETE blog post
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to permanently delete this post?"))
      return;

    setError("");
    try {
      // FIXED: Correct endpoint URL structure (${API_BASE_URL}/${id})
      await axios.delete(`${API_BASE_URL}/${id}`, getAuthHeaders());
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error deleting post:", err);
      setError(err.response?.data?.message || "Failed to delete blog post.");
    }
  };

  const openModalForCreate = () => {
    setEditingPostId(null);
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      coverimage: "",
      author: "Varun K.",
      category: "Startup Business Ideas",
      tags: "",
      status: "draft",
    });
    setIsModalOpen(true);
  };

  const openModalForEdit = (post) => {
    setEditingPostId(post._id);
    setFormData({
      title: post.title || "",
      slug: post.slug || "",
      excerpt: post.excerpt || "",
      content: post.content || "",
      coverimage: post.coverimage || "",
      author: post.author || "",
      category: post.category || "Startup Business Ideas",
      tags: Array.isArray(post.tags) ? post.tags.join(", ") : post.tags || "",
      status: post.status || "draft",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingPostId(null);
  };

  const handleTitleChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      title: value,
      slug: !editingPostId ? generateSlug(value) : prev.slug,
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  const formatDate = (isoDate) => {
    if (!isoDate) return "—";
    return new Date(isoDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const filteredPosts = posts.filter((p) => {
    const matchesSearch =
      p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.slug?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || p.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#090A0F] text-[#F8FAFC] relative overflow-x-hidden selection:bg-[#FF6B00] selection:text-[#090A0F]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 10% 10%, rgba(157, 78, 221, 0.10), transparent 45%), radial-gradient(circle at 90% 90%, rgba(255, 107, 0, 0.08), transparent 45%)",
        }}
      />

      {/* Admin Header */}
      <header className="relative z-40 px-5 md:px-8 lg:px-12 pt-4">
        <div className="max-w-[1440px] mx-auto bg-[#12141D]/85 backdrop-blur-[20px] border border-white/[0.08] rounded-2xl px-6 py-3.5 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-[10px] flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.35)]"
              style={{
                background: "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
              }}
            >
              <Zap className="w-5 h-5 text-[#090A0F] fill-[#090A0F]" />
            </div>
            <div>
              <div
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="font-extrabold text-[15px] text-[#F8FAFC] tracking-wider"
              >
                TACTYQAL <span className="text-[#FF6B00]">ADMIN</span>
              </div>
              <div className="text-[11px] text-[#94A3B8]">
                Knowledge Hub CMS
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.12] text-[#94A3B8] hover:text-[#F8FAFC] text-[13px] px-4 py-2 rounded-xl transition-all"
            >
              <span>View Blog</span>
            </a>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-[13px] font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-10 relative z-10">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-between gap-3 text-[13.5px] text-red-300">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
            <button
              onClick={() => setError("")}
              className="text-red-400 hover:text-red-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              className="text-[28px] font-extrabold text-[#F8FAFC]"
            >
              Blog Dispatches ({posts.length})
            </h1>
            <p className="text-[14px] text-[#94A3B8] mt-1">
              Create, update, publish, or remove articles from your knowledge hub.
            </p>
          </div>

          <button
            onClick={openModalForCreate}
            className="inline-flex items-center justify-center gap-2 text-[#090A0F] font-semibold text-[13.5px] px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,107,0,0.45)] active:scale-95 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
            }}
          >
            <Plus className="w-4 h-4" />
            <span>New Blog Post</span>
          </button>
        </div>

        {/* Search & Status Filter */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="flex-1 bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] rounded-2xl px-4 py-3 flex items-center gap-3">
            <Search className="w-4 h-4 text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, slug, or category..."
              className="w-full bg-transparent text-[14px] text-[#F8FAFC] placeholder-[#475569] outline-none"
            />
          </div>

          <div className="flex items-center gap-2 bg-[#12141D]/65 border border-white/[0.08] rounded-2xl p-1.5">
            {["all", "published", "draft"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-xl text-[12.5px] font-semibold capitalize transition-colors cursor-pointer ${
                  statusFilter === status
                    ? "bg-[#FF6B00] text-[#090A0F]"
                    : "text-[#94A3B8] hover:text-[#F8FAFC]"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Table */}
        <div className="bg-[#12141D]/65 backdrop-blur-[16px] border border-white/[0.08] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block w-8 h-8 border-4 border-[#FF6B00] border-t-transparent rounded-full animate-spin" />
              <p className="mt-3 text-[14px] text-[#94A3B8]">
                Loading blog posts...
              </p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-20 text-center">
              <FileText className="w-10 h-10 text-[#475569] mx-auto mb-3" />
              <h3 className="text-[17px] font-bold text-[#F8FAFC]">
                No blog posts found
              </h3>
              <p className="text-[14px] text-[#94A3B8] mt-1">
                Create a new post or adjust your search filter.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.02] text-[11px] font-mono tracking-wider text-[#94A3B8] uppercase">
                    <th className="py-4 px-6">Post &amp; Slug</th>
                    <th className="py-4 px-6">Category &amp; Tags</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6">Author</th>
                    <th className="py-4 px-6">Updated</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {filteredPosts.map((post) => (
                    <tr
                      key={post._id}
                      className="hover:bg-white/[0.03] transition-colors"
                    >
                      <td className="py-4 px-6 max-w-[360px]">
                        <div className="flex items-center gap-3">
                          {post.coverimage && (
                            <img
                              src={post.coverimage}
                              alt={post.title}
                              className="w-11 h-11 rounded-lg object-cover border border-white/[0.1] shrink-0"
                            />
                          )}
                          <div className="min-w-0">
                            <div
                              style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                              }}
                              className="font-bold text-[15px] text-[#F8FAFC] truncate"
                            >
                              {post.title}
                            </div>
                            <div className="text-[11.5px] font-mono text-[#00F0FF] truncate mt-0.5">
                              /{post.slug}
                            </div>
                            <div className="text-[12.5px] text-[#94A3B8] truncate mt-0.5">
                              {post.excerpt}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FFB693] uppercase tracking-wider">
                          {post.category}
                        </span>
                        {Array.isArray(post.tags) && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {post.tags.slice(0, 3).map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-[10.5px] text-[#94A3B8] bg-white/[0.05] px-2 py-0.5 rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>

                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                            post.status === "published"
                              ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                              : "bg-amber-500/15 border border-amber-500/30 text-amber-300"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              post.status === "published"
                                ? "bg-emerald-400"
                                : "bg-amber-400"
                            }`}
                          />
                          {post.status}
                        </span>
                      </td>

                      <td className="py-4 px-6 text-[13.5px] text-[#F8FAFC]">
                        {post.author}
                      </td>

                      <td className="py-4 px-6 text-[12.5px] text-[#94A3B8]">
                        <div>{formatDate(post.updatedAt || post.createdAt)}</div>
                        {post.createdAt && (
                          <div className="text-[11px] text-[#475569]">
                            Created {formatDate(post.createdAt)}
                          </div>
                        )}
                      </td>

                      <td className="py-4 px-6 text-right">
                        <div className="inline-flex items-center gap-2">
                          <button
                            onClick={() => openModalForEdit(post)}
                            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] text-[#00F0FF] transition-colors cursor-pointer"
                            title="Edit Post"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(post._id)}
                            className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors cursor-pointer"
                            title="Delete Post"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* CREATE / EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#090A0F]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#12141D] border border-white/[0.12] rounded-3xl w-full max-w-[760px] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)] my-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
              <h3
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[20px] font-bold text-[#F8FAFC]"
              >
                {editingPostId ? "Update Blog Post" : "Create New Blog Post"}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 rounded-xl text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.05] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11.5px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Zero-to-One SaaS Architecture"
                    className="w-full bg-[#1A1B21] border border-white/[0.10] focus:border-[#FF6B00] rounded-xl px-4 py-2.5 text-[14px] text-[#F8FAFC] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11.5px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    Slug *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        slug: generateSlug(e.target.value),
                      })
                    }
                    placeholder="zero-to-one-saas-architecture"
                    className="w-full bg-[#1A1B21] border border-white/[0.10] focus:border-[#FF6B00] rounded-xl px-4 py-2.5 text-[14px] font-mono text-[#00F0FF] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11.5px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full bg-[#1A1B21] border border-white/[0.10] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-[14px] text-[#F8FAFC] outline-none transition-all"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#12141D]">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11.5px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    Author *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                    placeholder="Author name"
                    className="w-full bg-[#1A1B21] border border-white/[0.10] focus:border-[#FF6B00] rounded-xl px-4 py-2.5 text-[14px] text-[#F8FAFC] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11.5px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    Status *
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full bg-[#1A1B21] border border-white/[0.10] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-[14px] text-[#F8FAFC] outline-none transition-all"
                  >
                    <option value="draft" className="bg-[#12141D]">
                      Draft
                    </option>
                    <option value="published" className="bg-[#12141D]">
                      Published
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Cover Image URL (Optional)</span>
                  </label>
                  <input
                    type="url"
                    value={formData.coverimage}
                    onChange={(e) =>
                      setFormData({ ...formData, coverimage: e.target.value })
                    }
                    placeholder="https://res.cloudinary.com/..."
                    className="w-full bg-[#1A1B21] border border-white/[0.10] focus:border-[#FF6B00] rounded-xl px-4 py-2.5 text-[14px] text-[#F8FAFC] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Tags (Comma-separated)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) =>
                      setFormData({ ...formData, tags: e.target.value })
                    }
                    placeholder="saas, mvp, teen-founders"
                    className="w-full bg-[#1A1B21] border border-white/[0.10] focus:border-[#FF6B00] rounded-xl px-4 py-2.5 text-[14px] text-[#F8FAFC] outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11.5px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                  Excerpt *
                </label>
                <textarea
                  required
                  rows="2"
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  placeholder="Short summary displayed on blog preview cards..."
                  className="w-full bg-[#1A1B21] border border-white/[0.10] focus:border-[#FF6B00] rounded-xl px-4 py-2.5 text-[14px] text-[#F8FAFC] outline-none transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-[11.5px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                  Content (Markdown / HTML / Plain Text) *
                </label>
                <textarea
                  required
                  rows="6"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="Write the full dispatch body here..."
                  className="w-full bg-[#1A1B21] border border-white/[0.10] focus:border-[#FF6B00] rounded-xl px-4 py-3 text-[14px] text-[#F8FAFC] outline-none transition-all"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] text-[#94A3B8] text-[13.5px] font-semibold transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-[#090A0F] font-semibold text-[13.5px] transition-all hover:shadow-[0_0_20px_rgba(255,107,0,0.45)] disabled:opacity-60 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
                  }}
                >
                  <Check className="w-4 h-4" />
                  <span>
                    {submitting
                      ? "Saving..."
                      : editingPostId
                      ? "Update Post"
                      : "Create Post"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}