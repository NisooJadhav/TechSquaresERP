import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaQuoteLeft, FaClock, FaTag } from "react-icons/fa";

const cases = [
  {
    id: 1,
    tag: "ERP Implementation",
    color: "#F97316",
    title: "End-to-End Odoo ERP Rollout for a Mid-Size Manufacturer",
    client: "Manotron Industries",
    industry: "Manufacturing",
    duration: "4 months",
    summary:
      "Manotron Industries was running their operations across six disconnected spreadsheets. We implemented Odoo ERP covering inventory, production, accounting, and HR — cutting manual effort by 60%.",
    results: ["60% reduction in manual data entry", "Real-time inventory visibility", "Reduced month-end close from 5 days to 1 day"],
    quote: "The team delivered exactly what they promised, on time and within budget. Our operations are a completely different world now.",
    quotePerson: "Operations Head, Manotron Industries",
    featured: true,
  },
  {
    id: 2,
    tag: "Web Development",
    color: "#2563EB",
    title: "B2B Marketplace Platform for a Trade & Logistics Company",
    client: "TradeSwift",
    industry: "Logistics / FinTech",
    duration: "3 months",
    summary:
      "TradeSwift needed a web platform where buyers and suppliers could connect, negotiate, and close deals. We built a full-stack React + Node.js marketplace with real-time dashboards and invoice management.",
    results: ["Launched MVP in 10 weeks", "300+ active users in month 1", "Integrated with 2 payment gateways"],
    quote: "They understood our business model instantly and built exactly the right product without over-engineering it.",
    quotePerson: "CEO, TradeSwift",
    featured: false,
  },
  {
    id: 3,
    tag: "UI / UX Design",
    color: "#0EA5E9",
    title: "Mobile-First Redesign for an EdTech Mentoring App",
    client: "Mentorius",
    industry: "Education",
    duration: "6 weeks",
    summary:
      "Mentorius had a functional product but a confusing user experience that was hurting retention. We redesigned the entire app flow in Figma — from onboarding to session booking — and validated it through usability testing.",
    results: ["Session booking conversion up 42%", "Onboarding drop-off reduced by 35%", "4.8★ rating post-redesign launch"],
    quote: "The redesign felt like night and day. Our users now actually enjoy using the app.",
    quotePerson: "Product Manager, Mentorius",
    featured: false,
  },
  {
    id: 4,
    tag: "ERP Implementation",
    color: "#F97316",
    title: "Odoo Finance & Accounting Module for a Retail Chain",
    client: "BizSavvy",
    industry: "Retail",
    duration: "2 months",
    summary:
      "BizSavvy's finance team was spending two weeks each quarter reconciling accounts manually. We configured Odoo's accounting module with custom reports, bank sync, and automated tax computation.",
    results: ["Quarterly reconciliation time cut by 80%", "Automated GST filing reports", "Live P&L and cash flow dashboards"],
    quote: "Our accountants finally have time to do actual analysis instead of data entry. Game changer.",
    quotePerson: "Finance Manager, BizSavvy",
    featured: false,
  },
  {
    id: 5,
    tag: "Web Development",
    color: "#2563EB",
    title: "Luxury E-Commerce Store for a Jewellery Brand",
    client: "WishnPearl",
    industry: "Retail / Luxury",
    duration: "6 weeks",
    summary:
      "WishnPearl needed an online store that matched the elegance of their physical showroom. We built a Shopify-based store with custom theme design, product filtering, wishlist, and WhatsApp inquiry flow.",
    results: ["Online sales live within 6 weeks", "Mobile-first design, 68% mobile traffic", "Avg. session duration increased by 2.4×"],
    quote: "The store looks absolutely stunning. Our customers keep complimenting how easy and beautiful it is to shop.",
    quotePerson: "Founder, WishnPearl",
    featured: false,
  },
  {
    id: 6,
    tag: "UI / UX Design",
    color: "#0EA5E9",
    title: "SaaS Dashboard Design for a Project Management Tool",
    client: "Internal Product",
    industry: "SaaS / Productivity",
    duration: "8 weeks",
    summary:
      "We designed and iterated on a full SaaS project management dashboard — kanban views, timeline/Gantt, team workload visualisation, and a notification centre — across two versions based on user feedback.",
    results: ["Two full versions shipped", "Task completion rate improved 28%", "Positive usability scores across all tested flows"],
    quote: "The iterative approach meant we got something genuinely usable, not just visually nice.",
    quotePerson: "Product Lead, Internal Team",
    featured: false,
  },
  {
    id: 7,
    tag: "ERP Implementation",
    color: "#F97316",
    title: "Odoo CRM & Sales Automation for a B2B Distribution Company",
    client: "GavGada",
    industry: "Distribution / Wholesale",
    duration: "3 months",
    summary:
      "GavGada's sales team was managing leads in a mix of WhatsApp chats and Excel files, with no visibility into pipeline health. We implemented Odoo CRM with automated lead scoring, follow-up sequences, and a live sales dashboard.",
    results: ["Pipeline visibility across 4 sales regions", "Lead-to-close cycle reduced by 30%", "Sales team onboarded in under 2 weeks"],
    quote: "For the first time, our sales managers can see everything in one place. The follow-up automation alone saved hours every week.",
    quotePerson: "Sales Director, GavGada",
    featured: false,
  },
  {
    id: 8,
    tag: "Web Development",
    color: "#2563EB",
    title: "Corporate Website & Brand Presence for a UAE-Based Firm",
    client: "Aban.ae",
    industry: "Corporate / Professional Services",
    duration: "5 weeks",
    summary:
      "Aban needed a polished corporate web presence that reflected their brand authority in the UAE market. We designed and built a fast, bilingual-ready website with a service showcase, team section, and integrated contact workflows.",
    results: ["Launched on time in 5 weeks", "Core Web Vitals score above 90", "Inquiry volume up 3× in first month post-launch"],
    quote: "The site looks exactly how we imagined our brand — premium, clean, and professional. Very happy with the outcome.",
    quotePerson: "Managing Director, Aban.ae",
    featured: false,
  },
];

const tags = ["All", "ERP Implementation", "Web Development", "UI / UX Design"];

const tagColor = (tag) => {
  if (tag === "ERP Implementation") return { bg: "rgba(249,115,22,0.1)", border: "rgba(249,115,22,0.3)", color: "#EA580C" };
  if (tag === "Web Development") return { bg: "rgba(37,99,235,0.1)", border: "rgba(37,99,235,0.3)", color: "#2563EB" };
  return { bg: "rgba(14,165,233,0.1)", border: "rgba(14,165,233,0.3)", color: "#0EA5E9" };
};

const CaseStudies = () => {
  const [active, setActive] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const featured = cases.find((c) => c.featured);
  const filtered = cases.filter((c) => active === "All" || c.tag === active);

  return (
    <div className="cs-page min-h-screen" style={{ background: "#F8FAFC" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .cs-page { font-family: 'DM Sans', sans-serif; }

        /* Hero */
        .cs-hero {
          position: relative; overflow: hidden;
          padding: 88px 0 72px;
          background: linear-gradient(135deg, #0A0F1E 0%, #1B3A7A 55%, #0A0F1E 100%);
        }
        .cs-hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 52px 52px;
        }
        .cs-orb {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(60px);
        }
        .cs-badge {
          display: inline-block; margin-bottom: 16px;
          font-family: 'Sora', sans-serif; font-size: 0.72rem;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 5px 16px; border-radius: 999px;
          background: rgba(249,115,22,0.15); border: 1px solid rgba(249,115,22,0.35); color: #F97316;
        }
        .cs-hero h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 800; color: #fff; line-height: 1.15; margin-bottom: 18px;
        }
        .cs-hero h1 span {
          background: linear-gradient(90deg, #F97316, #FB923C);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .cs-hero p {
          // font-size: clamp(0.95rem, 2vw, 1.1rem);
          font-size: 25px;
          color: rgba(255,255,255,0.6); max-width: 560px; line-height: 1.75;
        }

        /* Sec labels */
        .cs-sec-label {
          display: inline-block; margin-bottom: 12px;
          font-family: 'Sora', sans-serif; font-size: 0.72rem;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 5px 16px; border-radius: 999px;
          background: linear-gradient(135deg, rgba(249,115,22,0.1), rgba(37,99,235,0.08));
          border: 1px solid rgba(249,115,22,0.22); color: #EA580C;
        }
        .cs-sec-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800; color: #0A0F1E; margin-bottom: 10px;
        }

        /* Featured card */
        .cs-featured {
          background: #fff; border-radius: 22px; overflow: hidden;
          border: 1px solid #E2E8F0; box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .cs-featured { grid-template-columns: 1fr 1fr; }
        }
        .cs-featured-left {
          padding: 40px; display: flex; flex-direction: column; justify-content: space-between;
        }
        .cs-featured-right {
          padding: 40px;
          background: linear-gradient(135deg, #0A0F1E 0%, #1B3A7A 100%);
          display: flex; flex-direction: column; justify-content: center; gap: 20px;
        }
        .cs-result-chip {
          display: flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px; padding: 12px 16px;
          font-size: 0.88rem; color: rgba(255,255,255,0.85);
          font-weight: 500;
        }
        .cs-result-dot {
          width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg, #F97316, #EA580C);
        }

        /* Quote */
        .cs-quote-block {
          margin-top: 24px; padding: 20px 22px;
          background: #F8FAFC; border-radius: 14px;
          border-left: 3px solid #F97316;
        }
        .cs-quote-text { font-size: 0.9rem; color: #333333; line-height: 1.7; margin-bottom: 8px; font-style: italic; }
        .cs-quote-person { font-size: 0.78rem; font-weight: 700; color: #0A0F1E; }

        /* Filter */
        .cs-filters { display: flex; flex-wrap: wrap; gap: 8px; }
        .cs-filter-btn {
          padding: 7px 18px; border-radius: 999px;
          font-size: 0.82rem; font-weight: 600; cursor: pointer;
          border: 1.5px solid #E2E8F0; background: #fff; color: #64748B;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .cs-filter-btn:hover { border-color: #F97316; color: #F97316; transform: translateY(-1px); }
        .cs-filter-btn.active {
          background: linear-gradient(135deg, #F97316, #EA580C);
          border-color: transparent; color: #fff;
          box-shadow: 0 4px 14px rgba(249,115,22,0.35);
        }

        /* Grid */
        .cs-grid {
          display: grid; gap: 24px;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
        .cs-card {
          background: #fff; border-radius: 20px; padding: 28px;
          border: 1px solid #E2E8F0; box-shadow: 0 4px 18px rgba(0,0,0,0.05);
          display: flex; flex-direction: column; gap: 14px;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .cs-card:hover { transform: translateY(-5px); box-shadow: 0 18px 44px rgba(0,0,0,0.1); }
        .cs-card-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; padding: 4px 12px; border-radius: 999px;
          font-family: 'Sora', sans-serif;
          width: fit-content;
        }
        .cs-card-title {
          font-family: 'Sora', sans-serif; font-size: 1.02rem;
          font-weight: 700; color: #0A0F1E; line-height: 1.4;
        }
        .cs-card-summary { font-size: 0.875rem; color: #64748B; line-height: 1.65; }
        .cs-card-meta {
          display: flex; flex-wrap: wrap; gap: 14px;
          font-size: 0.78rem; color: #94A3B8; font-weight: 500;
        }
        .cs-card-meta span { display: flex; align-items: center; gap: 5px; }
        .cs-card-results { display: flex; flex-direction: column; gap: 7px; margin-top: 2px; }
        .cs-card-result-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 0.82rem; color: #333333; font-weight: 500;
        }
        .cs-card-result-dot {
          width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; margin-top: 5px;
        }
        .cs-card-divider { height: 1px; background: #F1F5F9; }
        .cs-card-quote {
          font-size: 0.82rem; color: #64748B;
          font-style: italic; line-height: 1.6; position: relative; padding-left: 18px;
        }
        .cs-card-quote::before {
          content: '"'; position: absolute; left: 0; top: -4px;
          font-size: 1.8rem; color: #F97316; line-height: 1; font-style: normal; opacity: 0.5;
        }

        /* CTA */
        .cs-cta {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #1B3A7A 0%, #2563EB 100%);
          border-radius: 22px; padding: 52px 40px; text-align: center;
          box-shadow: 0 20px 56px rgba(30,64,175,0.26);
        }
        .cs-cta-orb {
          position: absolute; top: -60px; right: -60px;
          width: 200px; height: 200px; border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 70%);
        }
        .cs-cta h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(1.35rem, 3vw, 1.9rem);
          font-weight: 800; color: #fff; margin-bottom: 12px;
        }
        .cs-cta p { color: rgba(255,255,255,0.62); font-size: 1.25rem; margin-bottom: 26px; }
        .cs-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 30px; border-radius: 12px;
          background: linear-gradient(135deg, #F97316, #EA580C);
          color: #fff; font-family: 'Sora', sans-serif;
          font-size: 0.9rem; font-weight: 700; text-decoration: none;
          box-shadow: 0 8px 22px rgba(249,115,22,0.38);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cs-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 32px rgba(249,115,22,0.48); }

        @media (max-width: 640px) {
          .cs-hero { padding: 60px 0 50px; }
          .cs-featured-left, .cs-featured-right { padding: 26px 20px; }
          .cs-cta { padding: 38px 20px; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="cs-hero">
        <div className="cs-hero-grid" />
        <div className="cs-orb" style={{ top: "-90px", right: "-90px", width: 380, height: 380, background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)" }} />
        <div className="cs-orb" style={{ bottom: "-70px", left: "-70px", width: 280, height: 280, background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 relative z-10">
          <span className="cs-badge" data-aos="fade-up">Case Studies</span>
          <h1 data-aos="fade-up" data-aos-delay="80">
            Real Problems,<br /><span>Real Results</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="160">
            A look at how we've helped businesses across industries solve meaningful challenges
            through ERP, web development, and design.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-14 space-y-20">

        {/* ── Featured Case Study ── */}
        {featured && (
          <section>
            <div className="mb-8" data-aos="fade-up">
              <span className="cs-sec-label">Spotlight</span>
              <h2 className="cs-sec-h2">Featured Case Study</h2>
            </div>
            <div className="cs-featured" data-aos="fade-up" data-aos-delay="80">
              {/* Left */}
              <div className="cs-featured-left">
                <div>
                  <div
                    className="cs-card-tag"
                    style={{
                      background: tagColor(featured.tag).bg,
                      border: `1px solid ${tagColor(featured.tag).border}`,
                      color: tagColor(featured.tag).color,
                      marginBottom: 16,
                    }}
                  >
                    <FaTag style={{ fontSize: "0.65rem" }} />
                    {featured.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Sora', sans-serif", fontSize: "1.3rem",
                      fontWeight: 800, color: "#0A0F1E", lineHeight: 1.35, marginBottom: 14,
                    }}
                  >
                    {featured.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.75, marginBottom: 20 }}>
                    {featured.summary}
                  </p>
                  <div style={{ display: "flex", gap: 20, flexWrap: "wrap", fontSize: "0.8rem", color: "#94A3B8", fontWeight: 500 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <FaTag style={{ fontSize: "0.65rem" }} /> {featured.industry}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <FaClock style={{ fontSize: "0.65rem" }} /> {featured.duration}
                    </span>
                  </div>
                </div>
                <div className="cs-quote-block">
                  <FaQuoteLeft style={{ color: "#F97316", marginBottom: 8, fontSize: "0.9rem" }} />
                  <p className="cs-quote-text">{featured.quote}</p>
                  <p className="cs-quote-person">— {featured.quotePerson}</p>
                </div>
              </div>
              {/* Right */}
              <div className="cs-featured-right">
                <div>
                  <p
                    style={{
                      fontFamily: "'Sora', sans-serif", fontSize: "0.72rem", fontWeight: 700,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)", marginBottom: 16,
                    }}
                  >
                    Key Results
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {featured.results.map((r, i) => (
                      <div key={i} className="cs-result-chip">
                        <div className="cs-result-dot" />
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20,
                    fontSize: "0.82rem", color: "rgba(255,255,255,0.45)",
                  }}
                >
                  Client: <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{featured.client}</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── All Case Studies ── */}
        <section>
          <div
            style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", marginBottom: 32 }}
            data-aos="fade-up"
          >
            <div>
              <span className="cs-sec-label">All Work</span>
              <h2 className="cs-sec-h2">All Case Studies</h2>
            </div>
            <div className="cs-filters">
              {tags.map((t) => (
                <button
                  key={t}
                  className={`cs-filter-btn${active === t ? " active" : ""}`}
                  onClick={() => setActive(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="cs-grid">
            {filtered.map((c, i) => {
              const tc = tagColor(c.tag);
              return (
                <div
                  key={c.id}
                  className="cs-card"
                  data-aos="fade-up"
                  data-aos-delay={(i % 3) * 80}
                >
                  <div className="cs-card-tag" style={{ background: tc.bg, border: `1px solid ${tc.border}`, color: tc.color }}>
                    <FaTag style={{ fontSize: "0.6rem" }} />
                    {c.tag}
                  </div>
                  <div className="cs-card-title">{c.title}</div>
                  <div className="cs-card-meta">
                    <span><FaTag style={{ fontSize: "0.65rem" }} /> {c.industry}</span>
                    <span><FaClock style={{ fontSize: "0.65rem" }} /> {c.duration}</span>
                  </div>
                  <p className="cs-card-summary">{c.summary}</p>
                  <div className="cs-card-divider" />
                  <div className="cs-card-results">
                    {c.results.map((r, ri) => (
                      <div key={ri} className="cs-card-result-item">
                        <div className="cs-card-result-dot" style={{ background: c.color }} />
                        {r}
                      </div>
                    ))}
                  </div>
                  <div className="cs-card-divider" />
                  <div className="cs-card-quote">{c.quote}</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94A3B8" }}>
                    — {c.quotePerson}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── CTA ── */}
        <section data-aos="fade-up">
          <div className="cs-cta">
            <div className="cs-cta-orb" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2>Want Results Like These?</h2>
              <p>
                Tell us about your challenge and we'll figure out the best path forward — together.
              </p>
              <Link to="/contact" className="cs-cta-btn">
                Get in Touch <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CaseStudies;
