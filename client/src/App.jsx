import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HeroSection from './pages/HeroSection'
import SuccessStories from './pages/SuccessStories'
import ProvenSprint from './pages/ProvenSprint'
import CompetitiveValue from './pages/CompetitiveValue'
import DiagnosticTools from './pages/DiagnosticTools'
import KnowledgeHub from './pages/KnowledgeHub'
import PricingSection from './pages/PricingSection'
import ScheduleCall from './pages/ScheduleCall'
import Footer from './components/Footer'
import FAQSection from './pages/FAQSection'
import BlogKnowledgeHub from './pages/blog/BlogKnowledgeHub'
import AdminLogin from './pages/admin/AdminLogin'
import AdminIndex from './pages/admin/AdminIndex'
import BlogPostDetail from './pages/blog/BlogPostDetail'


function App() {
  function LandingPage() {
  return (
    <div className="bg-[#090A0F] min-h-screen">
      <div id="home">
        <HeroSection />
      </div>
      <div id="stories">
        <SuccessStories />
      </div>
      <div id="program">
        <ProvenSprint />
      </div>
      <div id="why-us">
        <CompetitiveValue />
      </div>
      <div id="tools">
        <DiagnosticTools />
      </div>
      <div id="blog">
        <KnowledgeHub />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="consultation">
        <ScheduleCall />
      </div>
      <Footer />
    </div>
  );
}

  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* Main SPA Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Dedicated Admin URL Route */}
        <Route path="/admin/*" element={<AdminIndex />} />

        {/* Dedicated Blog URL Route */}
        <Route path="/blog/*" element={<BlogKnowledgeHub />} />

        <Route path="/blog/:slug" element={<BlogPostDetail />} />

        {/* Redirect unknown routes back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
