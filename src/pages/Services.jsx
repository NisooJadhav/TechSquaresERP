import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaArrowRight,
  FaCheckCircle,
  FaArrowLeft,
  FaLightbulb,
  FaCog,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import servicesData from "../otherservices.json";

const Services = () => {
  const { type } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [activeFaq, setActiveFaq] = useState(null);

  const industryIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes("manufactur"))   return "🏭";
    if (n.includes("retail"))        return "🛍️";
    if (n.includes("healthcare") || n.includes("health")) return "🏥";
    if (n.includes("education") || n.includes("school"))  return "🎓";
    if (n.includes("logistics") || n.includes("supply"))  return "🚚";
    if (n.includes("finance") || n.includes("fintech") || n.includes("banking")) return "💹";
    if (n.includes("real estate") || n.includes("property")) return "🏠";
    if (n.includes("ecommerce") || n.includes("e-commerce")) return "🛒";
    if (n.includes("restaurant") || n.includes("f&b") || n.includes("food"))    return "🍽️";
    if (n.includes("hotel") || n.includes("hospitality"))   return "🏨";
    if (n.includes("professional") || n.includes("service")) return "💼";
    if (n.includes("startup"))       return "🚀";
    if (n.includes("saas") || n.includes("software"))       return "💻";
    if (n.includes("telecom"))       return "📡";
    if (n.includes("insurance"))     return "🛡️";
    if (n.includes("trading"))       return "📈";
    if (n.includes("pos"))           return "🖥️";
    if (n.includes("hr") || n.includes("payroll"))          return "👥";
    if (n.includes("all"))           return "🌐";
    return "🏢";
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
    setActiveTab("overview");
    setActiveFaq(null);
  }, [type]);

  const serviceData = servicesData.services[type];

  if (!serviceData) {
    return <Navigate to="/services" replace />;
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const categoryBadgeStyle =
    serviceData.category === "More Services"
      ? {
          background: "rgba(14,165,233,0.15)",
          border: "1px solid rgba(14,165,233,0.35)",
          color: "#0EA5E9",
        }
      : {
          background: "rgba(249,115,22,0.15)",
          border: "1px solid rgba(249,115,22,0.35)",
          color: "#F97316",
        };

  return (
    <div className="min-h-screen" style={{ background: "#F8FAFC" }}>

      {/* ── Mobile-only styles — all rules scoped to max-width 767px ── */}
      <style>{`
        @media (max-width: 767px) {

          /* Hero */
          .svc-hero { padding: 40px 0 36px !important; }
          .svc-hero h1 { font-size: 1.85rem !important; line-height: 1.2 !important; margin-bottom: 12px !important; }
          .svc-hero .svc-subtitle { font-size: 0.95rem !important; margin-bottom: 20px !important; }
          .svc-hero-btns { flex-direction: column !important; gap: 10px !important; }
          .svc-hero-btns > * { width: 100% !important; justify-content: center !important; padding: 13px 18px !important; font-size: 0.88rem !important; box-sizing: border-box !important; }

          /* Tabs */
          .svc-tabs nav { gap: 0 !important; -webkit-overflow-scrolling: touch; justify-content: flex-start !important; }
          .svc-tabs nav button { padding: 14px 12px !important; font-size: 0.8rem !important; gap: 6px !important; }
          .svc-tabs nav button svg { display: none !important; }

          /* Content padding */
          .svc-content { padding: 20px 14px !important; }

          /* Overview grid → single col */
          .svc-overview-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .svc-overview-img { order: -1; }
          .svc-overview-img img { height: 210px !important; object-fit: cover !important; }

          /* Section headings */
          .svc-section-h2 { font-size: 1.5rem !important; }
          .svc-section-h3 { font-size: 1.1rem !important; }

          /* Tech tags */
          .svc-tech-tags { gap: 6px !important; }
          .svc-tech-tags span { font-size: 0.72rem !important; padding: 4px 9px !important; }

          /* Industry grid → 2 col */
          .svc-industry-grid { grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
          .svc-industry-grid > div { padding: 10px 6px !important; }
          .svc-industry-grid .text-2xl { font-size: 1.2rem !important; margin-bottom: 4px !important; }
          .svc-industry-grid span { font-size: 0.72rem !important; }

          /* Industries card padding */
          .svc-industries-card { padding: 20px 16px !important; }

          /* Features grid → 1 col */
          .svc-features-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .svc-features-grid > div { padding: 18px !important; }
          .svc-features-grid .text-4xl { font-size: 1.8rem !important; margin-bottom: 10px !important; }

          /* Process steps */
          .svc-process-step { flex-direction: row !important; align-items: flex-start !important; gap: 14px !important; }
          .svc-step-circle { width: 44px !important; height: 44px !important; min-width: 44px !important; font-size: 0.82rem !important; }
          .svc-step-card { padding: 16px !important; }
          .svc-step-card h3 { font-size: 1rem !important; margin-bottom: 6px !important; }
          .svc-step-card p { font-size: 0.85rem !important; }
          .svc-process-line { display: none !important; }

          /* Benefits grid → 1 col */
          .svc-benefits-grid { grid-template-columns: 1fr !important; gap: 10px !important; }
          .svc-benefits-grid > div { padding: 14px 16px !important; }

          /* CTA banners */
          .svc-cta-banner { padding: 24px 18px !important; }
          .svc-cta-banner h3 { font-size: 1.15rem !important; margin-bottom: 10px !important; }
          .svc-cta-banner p  { font-size: 0.88rem !important; margin-bottom: 16px !important; }
          .svc-cta-banner a  { width: 100% !important; justify-content: center !important; padding: 13px 18px !important; font-size: 0.88rem !important; box-sizing: border-box !important; }

          /* FAQ */
          .svc-faq-btn { padding: 14px 14px !important; }
          .svc-faq-btn span { font-size: 0.85rem !important; }
          .svc-faq-answer { padding: 0 14px 16px !important; font-size: 0.84rem !important; }

          /* FAQ contact card */
          .svc-faq-contact { padding: 24px 16px !important; }
          .svc-faq-contact a { display: flex !important; width: 100% !important; justify-content: center !important; box-sizing: border-box !important; }

          /* Breadcrumb */
          .svc-breadcrumb nav { font-size: 0.72rem !important; }

          /* "Back" link in hero */
          .svc-back-link { font-size: 0.82rem !important; margin-bottom: 14px !important; }
        }
      `}</style>

      {/* Breadcrumb */}
      <div className="svc-breadcrumb bg-white" style={{ borderBottom: "1px solid #E2E8F0" }}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" style={{ color: "#F97316" }} className="hover:opacity-75 transition">Home</Link>
            <span style={{ color: "#CBD5E1" }}>/</span>
            <Link to="/services" style={{ color: "#F97316" }} className="hover:opacity-75 transition">Services</Link>
            <span style={{ color: "#CBD5E1" }}>/</span>
            <span style={{ color: "#64748B" }}>{serviceData.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="svc-hero relative text-white py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(27,58,122,0.92) 50%, rgba(249,115,22,0.25) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-80px", right: "-80px", width: 360, height: 360,
            background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
            borderRadius: "50%", filter: "blur(50px)",
          }}
        />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <Link
              to="/"
              className="svc-back-link inline-flex items-center mb-6 transition"
              style={{ color: "rgba(255,255,255,0.65)" }}
              data-aos="fade-right"
            >
              <FaArrowLeft className="mr-2" />
              Back to All Services
            </Link>

            <div data-aos="fade-up">
              <span
                className="inline-block mb-4 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full"
                style={{ fontFamily: "'Sora', sans-serif", ...categoryBadgeStyle }}
              >
                {serviceData.category}
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Sora', sans-serif" }}
              data-aos="fade-up"
            >
              {serviceData.title}
            </h1>

            <p
              className="svc-subtitle text-xl md:text-2xl mb-8 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {serviceData.subtitle}
            </p>

            <div
              className="svc-hero-btns flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition"
                style={{
                  background: "linear-gradient(135deg, #F97316, #EA580C)",
                  color: "#fff",
                  fontFamily: "'Sora', sans-serif",
                  boxShadow: "0 8px 24px rgba(249,115,22,0.4)",
                }}
              >
                Get Started <FaArrowRight className="ml-2" />
              </Link>
              <button
                onClick={() => setActiveTab("process")}
                className="px-8 py-4 rounded-xl font-semibold transition"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  backdropFilter: "blur(8px)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                View Our Process
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
          style={{ background: "linear-gradient(to top, #00000050, transparent)" }}
        />
      </section>

      {/* Navigation Tabs */}
      <div
        className="svc-tabs bg-white sticky top-0 z-40"
        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderBottom: "1px solid #E2E8F0" }}
      >
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-2 overflow-x-auto">
            {[
              { id: "overview",  label: "Overview",     icon: FaLightbulb     },
              { id: "features",  label: "Key Features", icon: FaCog           },
              { id: "process",   label: "Our Process",  icon: FaChartLine     },
              { id: "benefits",  label: "Benefits",     icon: FaShieldAlt     },
              { id: "faq",       label: "FAQ",          icon: FaQuestionCircle },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center py-5 px-6 border-b-2 transition-colors whitespace-nowrap"
                style={{
                  borderBottomColor: activeTab === tab.id ? "#F97316" : "transparent",
                  color: activeTab === tab.id ? "#F97316" : "#64748B",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  fontSize: "0.95rem",
                  gap: 8,
                }}
              >
                <tab.icon style={{ fontSize: "1rem" }} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="svc-content container mx-auto px-4 py-12">

        {/* ── Overview ── */}
        {activeTab === "overview" && (
          <div className="space-y-12" data-aos="fade-up">
            <div className="svc-overview-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="inline-block mb-4 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full"
                  style={{
                    background: "linear-gradient(135deg,rgba(249,115,22,0.1),rgba(37,99,235,0.08))",
                    border: "1px solid rgba(249,115,22,0.22)",
                    color: "#EA580C",
                    fontFamily: "'Sora',sans-serif",
                  }}
                >
                  Overview
                </span>
                <h2
                  className="svc-section-h2 text-3xl font-bold text-gray-800 mb-6"
                  style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
                >
                  {serviceData.overview.title}
                </h2>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: "#333333" }}>
                  {serviceData.overview.description}
                </p>
                <p className="leading-relaxed" style={{ color: "#64748B" }}>
                  {serviceData.overview.fullDescription}
                </p>

                <div className="mt-8">
                  <h3
                    className="svc-section-h3 text-xl font-semibold mb-4"
                    style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
                  >
                    Technologies We Use:
                  </h3>
                  <div className="svc-tech-tags flex flex-wrap gap-2">
                    {serviceData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          background: "linear-gradient(135deg,rgba(249,115,22,0.08),rgba(37,99,235,0.06))",
                          border: "1px solid rgba(249,115,22,0.2)",
                          color: "#1E40AF",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="svc-overview-img lg:order-first">
                <img
                  src={serviceData.heroImage}
                  alt={serviceData.title}
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}
                />
              </div>
            </div>

            {/* Industries */}
            <div
              className="svc-industries-card bg-white p-8 rounded-2xl"
              style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <span
                className="inline-block mb-4 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full"
                style={{
                  background: "rgba(14,165,233,0.1)",
                  border: "1px solid rgba(14,165,233,0.25)",
                  color: "#0EA5E9",
                  fontFamily: "'Sora',sans-serif",
                }}
              >
                Industry Expertise
              </span>
              <h3
                className="svc-section-h2 text-2xl font-bold mb-6"
                style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
              >
                Industries We Serve
              </h3>
              <div className="svc-industry-grid grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {serviceData.industries.map((industry, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl transition-all duration-200 hover:-translate-y-1"
                    style={{ border: "1px solid #E2E8F0", background: "#F8FAFC" }}
                  >
                    <div className="text-2xl mb-2">{industryIcon(industry)}</div>
                    <span className="text-sm font-medium" style={{ color: "#333333" }}>
                      {industry}
                    </span>
                  </div>
                ))}
                {/* & More card */}
                <div
                  className="text-center p-4 rounded-xl transition-all duration-200 hover:-translate-y-1"
                  style={{
                    border: "1px dashed rgba(249,115,22,0.4)",
                    background: "linear-gradient(135deg, rgba(249,115,22,0.05), rgba(37,99,235,0.04))",
                  }}
                >
                  <div className="text-2xl mb-2">✨</div>
                  <span className="text-sm font-semibold" style={{ color: "#F97316" }}>
                    &amp; More…
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Key Features ── */}
        {activeTab === "features" && (
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center mb-12">
              <span
                className="inline-block mb-4 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full"
                style={{
                  background: "linear-gradient(135deg,rgba(249,115,22,0.1),rgba(37,99,235,0.08))",
                  border: "1px solid rgba(249,115,22,0.22)",
                  color: "#EA580C",
                  fontFamily: "'Sora',sans-serif",
                }}
              >
                What We Offer
              </span>
              <h2
                className="svc-section-h2 text-3xl font-bold mb-4"
                style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
              >
                Key Features
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: "#64748B" }}>
                Discover the powerful features that make our{" "}
                {serviceData.title.toLowerCase()} stand out from the competition.
              </p>
            </div>

            <div className="svc-features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                    position: "relative", overflow: "hidden",
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3
                    className="svc-section-h3 text-xl font-semibold mb-3"
                    style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#64748B" }}>
                    {feature.description}
                  </p>
                  <div
                    style={{
                      position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
                      background: "linear-gradient(90deg, #F97316, #1E40AF)",
                      transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.3s",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Process ── */}
        {activeTab === "process" && (
          <div className="space-y-12" data-aos="fade-up">
            <div className="text-center mb-12">
              <span
                className="inline-block mb-4 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full"
                style={{
                  background: "rgba(14,165,233,0.1)",
                  border: "1px solid rgba(14,165,233,0.25)",
                  color: "#0EA5E9",
                  fontFamily: "'Sora',sans-serif",
                }}
              >
                How We Work
              </span>
              <h2
                className="svc-section-h2 text-3xl font-bold mb-4"
                style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
              >
                Our Process
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: "#64748B" }}>
                Our proven methodology ensures successful project delivery with
                minimal disruption to your business.
              </p>
            </div>

            <div className="relative">
              <div
                className="svc-process-line absolute left-8 top-0 bottom-0 w-0.5 hidden lg:block"
                style={{ background: "linear-gradient(to bottom, #F97316, #1E40AF)" }}
              />

              <div className="space-y-8">
                {serviceData.process.map((step, index) => (
                  <div
                    key={index}
                    className="svc-process-step relative flex items-start space-x-8"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="svc-step-circle w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg"
                        style={{
                          background: "linear-gradient(135deg, #F97316, #EA580C)",
                          color: "#fff",
                          boxShadow: "0 8px 20px rgba(249,115,22,0.35)",
                          fontFamily: "'Sora', sans-serif",
                        }}
                      >
                        {step.step}
                      </div>
                    </div>
                    <div
                      className="svc-step-card flex-grow bg-white p-6 rounded-2xl"
                      style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                    >
                      <h3
                        className="svc-section-h3 text-xl font-semibold mb-3"
                        style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
                      >
                        {step.title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: "#64748B" }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Benefits ── */}
        {activeTab === "benefits" && (
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center mb-12">
              <span
                className="inline-block mb-4 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full"
                style={{
                  background: "linear-gradient(135deg,rgba(249,115,22,0.1),rgba(37,99,235,0.08))",
                  border: "1px solid rgba(249,115,22,0.22)",
                  color: "#EA580C",
                  fontFamily: "'Sora',sans-serif",
                }}
              >
                Why Choose Us
              </span>
              <h2
                className="svc-section-h2 text-3xl font-bold mb-4"
                style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
              >
                Benefits
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: "#64748B" }}>
                Discover the tangible benefits your business will gain from our{" "}
                {serviceData.title.toLowerCase()}.
              </p>
            </div>

            <div className="svc-benefits-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white p-6 rounded-2xl transition-all duration-200 hover:-translate-y-1"
                  style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}
                    >
                      <FaCheckCircle style={{ color: "#22C55E", fontSize: 16 }} />
                    </div>
                  </div>
                  <span className="font-medium" style={{ color: "#0A0F1E" }}>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="svc-cta-banner text-white p-8 rounded-2xl text-center mt-12"
              style={{
                background: "linear-gradient(135deg, #1B3A7A, #2563EB)",
                boxShadow: "0 24px 60px rgba(30,64,175,0.3)",
                position: "relative", overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute", top: -60, right: -60, width: 200, height: 200,
                  background: "radial-gradient(circle,rgba(249,115,22,0.2) 0%,transparent 70%)",
                  borderRadius: "50%", pointerEvents: "none",
                }}
              />
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Ready to Get Started?
              </h3>
              <p className="text-lg mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
                Transform your business with our expert{" "}
                {serviceData.title.toLowerCase()}. Contact us today for a free consultation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl font-semibold transition"
                style={{
                  background: "linear-gradient(135deg, #F97316, #EA580C)",
                  color: "#fff",
                  fontFamily: "'Sora', sans-serif",
                  boxShadow: "0 6px 20px rgba(249,115,22,0.4)",
                }}
              >
                Contact Us Now <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        )}

        {/* ── FAQ ── */}
        {activeTab === "faq" && (
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center mb-12">
              <span
                className="inline-block mb-4 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full"
                style={{
                  background: "rgba(14,165,233,0.1)",
                  border: "1px solid rgba(14,165,233,0.25)",
                  color: "#0EA5E9",
                  fontFamily: "'Sora',sans-serif",
                }}
              >
                Got Questions?
              </span>
              <h2
                className="svc-section-h2 text-3xl font-bold mb-4"
                style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: "#64748B" }}>
                Get answers to the most common questions about our{" "}
                {serviceData.title.toLowerCase()}.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {serviceData.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden"
                  style={{
                    border: activeFaq === index ? "1px solid rgba(249,115,22,0.3)" : "1px solid #E2E8F0",
                    boxShadow: activeFaq === index ? "0 8px 24px rgba(249,115,22,0.1)" : "0 2px 8px rgba(0,0,0,0.05)",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="svc-faq-btn w-full px-6 py-4 text-left flex items-center justify-between transition-colors"
                    style={{ background: activeFaq === index ? "rgba(249,115,22,0.03)" : "transparent" }}
                  >
                    <span
                      className="font-semibold pr-4"
                      style={{
                        fontFamily: "'Sora', sans-serif",
                        color: activeFaq === index ? "#F97316" : "#0A0F1E",
                      }}
                    >
                      {faq.question}
                    </span>
                    {activeFaq === index ? (
                      <FaChevronUp style={{ color: "#F97316", flexShrink: 0 }} />
                    ) : (
                      <FaChevronDown style={{ color: "#94A3B8", flexShrink: 0 }} />
                    )}
                  </button>

                  {activeFaq === index && (
                    <div
                      className="svc-faq-answer px-6 pb-5"
                      style={{ borderTop: "1px solid rgba(249,115,22,0.12)" }}
                    >
                      <p className="leading-relaxed pt-4" style={{ color: "#64748B" }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div
              className="svc-faq-contact text-center mt-12 p-8 rounded-2xl"
              style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
            >
              <h3
                className="svc-section-h3 text-xl font-semibold mb-4"
                style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
              >
                Still Have Questions?
              </h3>
              <p className="mb-6" style={{ color: "#64748B" }}>
                Our team of experts is here to help you with any additional questions about our services.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-xl font-semibold transition"
                style={{
                  background: "linear-gradient(135deg, #F97316, #EA580C)",
                  color: "#fff",
                  fontFamily: "'Sora', sans-serif",
                  boxShadow: "0 6px 20px rgba(249,115,22,0.35)",
                }}
              >
                <FaUsers className="mr-2" />
                Contact Our Team
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;