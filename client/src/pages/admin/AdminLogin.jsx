import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import {
  Zap,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import axios from "axios"

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("https://project-tactyqal-backend.onrender.com/api/auth/login", {
        email,
        password
      })
      const {token} = await response.data
      localStorage.setItem('token', token)
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Authentication server unreachable. Please try again.");
    } finally {
      setLoading(false);
    }

  };

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#090A0F] text-[#F8FAFC] relative overflow-hidden flex flex-col justify-between p-5 sm:p-8 selection:bg-[#FF6B00] selection:text-[#090A0F]"
    >
      {/* Level 0 Ambient Radial Blooms */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(157, 78, 221, 0.12), transparent 45%), radial-gradient(circle at 80% 80%, rgba(255, 107, 0, 0.10), transparent 45%)",
        }}
      />

      {/* Top Navigation Return Bar */}
      <div className="max-w-[1440px] w-full mx-auto relative z-10 flex items-center justify-between">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Public Site</span>
        </a>

        <div className="inline-flex items-center gap-2 bg-[#12141D]/80 border border-white/[0.08] rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="text-[10.5px] font-mono tracking-[0.06em] text-[#00F0FF] uppercase">
            ENCRYPTED GATEWAY
          </span>
        </div>
      </div>

      {/* Center Login Card */}
      <div className="w-full max-w-[440px] mx-auto my-auto py-8 relative z-10">
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(255,107,0,0.4)] mb-4"
            style={{
              background: "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
            }}
          >
            <Zap className="w-6 h-6 text-[#090A0F] fill-[#090A0F]" />
          </div>

          <div
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="tracking-wider font-extrabold text-[18px] flex items-center gap-1.5"
          >
            <span className="text-[#F8FAFC]">TACTYQAL</span>
            <span className="text-[#FF6B00]">LABS</span>
          </div>

          <h1
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="mt-3 text-[26px] sm:text-[30px] font-extrabold text-[#F8FAFC] tracking-[-0.02em]"
          >
            Command Center Access
          </h1>
          <p className="mt-1.5 text-[14px] text-[#94A3B8]">
            Authenticate to manage cohort applications, dispatches, and telemetry.
          </p>
        </div>

        {/* Elevation 1 Glass Form Container */}
        <div className="bg-[#12141D]/75 backdrop-blur-[20px] border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2.5 text-[13px] text-red-300">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="admin-email"
                className="block text-[12px] font-semibold tracking-[0.04em] text-[#94A3B8] uppercase mb-2"
              >
                Admin Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="admin-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@tactyqallabs.com"
                  className="w-full bg-[#1A1B21]/90 border border-white/[0.10] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 rounded-xl pl-10 pr-4 py-3 text-[14px] text-[#F8FAFC] placeholder-[#475569] outline-none transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="admin-password"
                  className="block text-[12px] font-semibold tracking-[0.04em] text-[#94A3B8] uppercase"
                >
                  Security Key
                </label>
                <a
                  href="#reset"
                  className="text-[12px] font-medium text-[#FFB693] hover:text-[#FF6B00] transition-colors"
                >
                  Forgot key?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#1A1B21]/90 border border-white/[0.10] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 rounded-xl pl-10 pr-11 py-3 text-[14px] text-[#F8FAFC] placeholder-[#475569] outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Session Persistence Checkbox */}
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-white/[0.15] bg-[#1A1B21] text-[#FF6B00] focus:ring-[#FF6B00]/30 accent-[#FF6B00]"
                />
                <span className="text-[13px] text-[#94A3B8]">
                  Keep session active for 7 days
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 text-[#090A0F] font-semibold text-[14px] py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_0_24px_rgba(255,107,0,0.45)] active:scale-[0.98] disabled:opacity-60 cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
              }}
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Initialize Session</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Security Footer Note */}
          <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-center gap-2 text-[11.5px] text-[#94A3B8]">
            <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
            <span>Protected by JWT Role-Based Access Control</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-[12px] text-[#475569] relative z-10">
        Tactyqal Labs Internal Operations • Unauthorized access is logged
      </div>
    </div>
  );
}