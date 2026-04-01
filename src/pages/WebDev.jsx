import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt, FaSearch, FaTimes } from "react-icons/fa";
import projectsData from "./webProjects.json";

const ALL = "All";

const WebDev = () => {
  const [activeFilter, setActiveFilter] = useState(ALL);
  const [search, setSearch] = useState("");
  const [lightbox, setLightbox] = useState(null); // project object or null
  const lightboxRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const categories = [
    ALL,
    ...Array.from(new Set(projectsData.projects.map((p) => p.category))),
  ];

  const filtered = projectsData.projects.filter((p) => {
    const matchesFilter = activeFilter === ALL || p.category === activeFilter;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesFilter && matchesSearch;
  });

  const featured = projectsData.projects.filter((p) => p.featured);

  return (
    <div className="webdev-page min-h-screen" style={{ background: "#F8FAFC" }}>

      {/* ── Scoped Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .webdev-page { font-family: 'DM Sans', sans-serif; }

        /* ── Hero ── */
        .wdv-hero {
          position: relative;
          padding: 88px 0 72px;
          overflow: hidden;
          background: linear-gradient(135deg, #0A0F1E 0%, #1B3A7A 55%, #0A0F1E 100%);
        }
        .wdv-hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 52px 52px;
        }
        .wdv-hero-orb1 {
          position: absolute; top: -100px; right: -100px;
          width: 420px; height: 420px; border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%);
          filter: blur(60px);
        }
        .wdv-hero-orb2 {
          position: absolute; bottom: -80px; left: -80px;
          width: 320px; height: 320px; border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%);
          filter: blur(50px);
        }
        .wdv-badge {
          display: inline-block; margin-bottom: 16px;
          font-family: 'Sora', sans-serif; font-size: 0.72rem;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 5px 16px; border-radius: 999px;
          background: rgba(249,115,22,0.15); border: 1px solid rgba(249,115,22,0.35); color: #F97316;
        }
        .wdv-hero h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 5vw, 3.6rem);
          font-weight: 800; color: #fff; line-height: 1.15; margin-bottom: 18px;
        }
        .wdv-hero h1 span {
          background: linear-gradient(90deg, #F97316, #FB923C);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .wdv-hero p {
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          color: rgba(255,255,255,0.6); max-width: 600px; line-height: 1.7;
        }
        .wdv-stats {
          display: flex; flex-wrap: wrap; gap: 28px; margin-top: 40px;
        }
        .wdv-stat {
          text-align: center;
        }
        .wdv-stat-num {
          font-family: 'Sora', sans-serif; font-size: 2rem; font-weight: 800;
          background: linear-gradient(135deg, #F97316, #FB923C);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .wdv-stat-label {
          font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-top: 2px;
        }

        /* ── Featured ── */
        .wdv-featured-track {
          display: grid; gap: 24px;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
        .wdv-feat-card {
          position: relative; border-radius: 20px; overflow: hidden;
          cursor: pointer; height: 260px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .wdv-feat-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(0,0,0,0.2); }
        .wdv-feat-card img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease;
        }
        .wdv-feat-card:hover img { transform: scale(1.07); }
        .wdv-feat-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.1) 55%, transparent 100%);
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 22px;
          opacity: 0; transition: opacity 0.35s ease;
        }
        .wdv-feat-card:hover .wdv-feat-overlay { opacity: 1; }
        .wdv-feat-always {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 16px 22px;
          background: linear-gradient(to top, rgba(10,15,30,0.88) 0%, transparent 100%);
        }
        .wdv-feat-title {
          font-family: 'Sora', sans-serif; font-size: 1.1rem;
          font-weight: 700; color: #fff; margin-bottom: 2px;
        }
        .wdv-feat-cat {
          font-size: 0.75rem; color: #F97316; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.07em;
        }

        /* ── Filter Bar ── */
        .wdv-filter-wrap {
          display: flex; flex-direction: column; gap: 16px;
          align-items: flex-start;
        }
        @media (min-width: 640px) {
          .wdv-filter-wrap { flex-direction: row; align-items: center; justify-content: space-between; }
        }
        .wdv-filters {
          display: flex; flex-wrap: wrap; gap: 8px;
        }
        .wdv-filter-btn {
          padding: 7px 18px; border-radius: 999px; font-size: 0.82rem;
          font-weight: 600; cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
          border: 1.5px solid #E2E8F0; background: #fff; color: #64748B;
          font-family: 'DM Sans', sans-serif;
        }
        .wdv-filter-btn:hover { border-color: #F97316; color: #F97316; transform: translateY(-1px); }
        .wdv-filter-btn.active {
          background: linear-gradient(135deg, #F97316, #EA580C);
          border-color: transparent; color: #fff;
          box-shadow: 0 4px 14px rgba(249,115,22,0.35);
        }
        .wdv-search {
          position: relative;
        }
        .wdv-search input {
          padding: 9px 16px 9px 40px; border-radius: 12px;
          border: 1.5px solid #E2E8F0; background: #fff;
          font-size: 0.88rem; color: #0A0F1E; outline: none;
          width: 220px; transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .wdv-search input:focus { border-color: #F97316; box-shadow: 0 0 0 3px rgba(249,115,22,0.1); }
        .wdv-search .search-icon {
          position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          color: #94A3B8; font-size: 0.85rem;
        }
        .wdv-search .clear-icon {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          color: #94A3B8; font-size: 0.8rem; cursor: pointer;
          transition: color 0.2s;
        }
        .wdv-search .clear-icon:hover { color: #F97316; }

        /* ── Grid Cards ── */
        .wdv-grid {
          display: grid; gap: 28px;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
        }
        .wdv-card {
          background: #fff; border-radius: 20px; overflow: hidden;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 18px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          display: flex; flex-direction: column;
        }
        .wdv-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.14);
        }
        .wdv-card-img-wrap {
          position: relative; overflow: hidden; height: 200px;
        }
        .wdv-card-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease;
        }
        .wdv-card:hover .wdv-card-img-wrap img { transform: scale(1.06); }
        .wdv-card-img-overlay {
          position: absolute; inset: 0;
          background: rgba(10,15,30,0.5);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.3s ease;
        }
        .wdv-card:hover .wdv-card-img-overlay { opacity: 1; }
        .wdv-card-view-btn {
          padding: 10px 22px; border-radius: 10px;
          background: linear-gradient(135deg, #F97316, #EA580C);
          color: #fff; font-family: 'Sora', sans-serif;
          font-size: 0.82rem; font-weight: 700;
          transform: translateY(10px); opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
          border: none; cursor: pointer;
        }
        .wdv-card:hover .wdv-card-view-btn {
          transform: translateY(0); opacity: 1;
        }
        .wdv-card-body { padding: 22px; flex: 1; display: flex; flex-direction: column; }
        .wdv-card-cat {
          font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: #F97316; margin-bottom: 8px;
        }
        .wdv-card-title {
          font-family: 'Sora', sans-serif; font-size: 1.1rem;
          font-weight: 700; color: #0A0F1E; margin-bottom: 10px;
          line-height: 1.3;
        }
        .wdv-card-desc {
          font-size: 0.88rem; color: #64748B; line-height: 1.65;
          flex: 1;
        }
        .wdv-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 16px; padding-top: 14px;
          border-top: 1px solid #F1F5F9;
        }
        .wdv-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .wdv-tag {
          font-size: 0.7rem; font-weight: 600; padding: 3px 10px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(249,115,22,0.08), rgba(37,99,235,0.06));
          border: 1px solid rgba(249,115,22,0.2); color: #1E40AF;
        }
        .wdv-card-link {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.82rem; font-weight: 600; color: #F97316;
          text-decoration: none; transition: gap 0.2s, opacity 0.2s;
          white-space: nowrap; flex-shrink: 0;
        }
        .wdv-card-link:hover { gap: 10px; opacity: 0.8; }

        /* ── Empty State ── */
        .wdv-empty {
          text-align: center; padding: 64px 24px;
        }
        .wdv-empty-icon {
          font-size: 3.5rem; margin-bottom: 16px;
        }

        /* ── Lightbox ── */
        .wdv-lightbox-backdrop {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(7,10,20,0.88);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          backdrop-filter: blur(6px);
          animation: lbFadeIn 0.22s ease;
        }
        @keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }
        .wdv-lightbox {
          background: #fff; border-radius: 24px; overflow: hidden;
          max-width: 900px; width: 100%; max-height: 90vh;
          display: flex; flex-direction: column;
          box-shadow: 0 32px 80px rgba(0,0,0,0.4);
          animation: lbSlideUp 0.28s ease;
        }
        @keyframes lbSlideUp {
          from { transform: translateY(24px); opacity: 0 }
          to   { transform: translateY(0);    opacity: 1 }
        }
        .wdv-lb-img-wrap {
          height: 360px; overflow: hidden; flex-shrink: 0;
          position: relative;
        }
        .wdv-lb-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .wdv-lb-close {
          position: absolute; top: 14px; right: 14px;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(10,15,30,0.7);
          border: none; cursor: pointer; color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.95rem; transition: background 0.2s;
          backdrop-filter: blur(4px);
        }
        .wdv-lb-close:hover { background: rgba(249,115,22,0.9); }
        .wdv-lb-body { padding: 28px 32px; overflow-y: auto; }
        .wdv-lb-cat {
          font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: #F97316; margin-bottom: 8px;
        }
        .wdv-lb-title {
          font-family: 'Sora', sans-serif; font-size: 1.6rem;
          font-weight: 800; color: #0A0F1E; margin-bottom: 12px;
        }
        .wdv-lb-desc {
          font-size: 0.95rem; color: #333333; line-height: 1.75; margin-bottom: 20px;
        }
        .wdv-lb-footer {
          display: flex; flex-wrap: wrap; align-items: center;
          justify-content: space-between; gap: 12px; margin-top: 8px;
        }
        .wdv-lb-link {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px; border-radius: 12px;
          background: linear-gradient(135deg, #F97316, #EA580C);
          color: #fff; font-family: 'Sora', sans-serif;
          font-size: 0.88rem; font-weight: 700;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(249,115,22,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .wdv-lb-link:hover {
          transform: translateY(-2px); box-shadow: 0 10px 28px rgba(249,115,22,0.45);
        }
        .wdv-lb-link.disabled {
          background: linear-gradient(135deg, #94A3B8, #64748B);
          box-shadow: none; pointer-events: none;
        }

        /* ── CTA ── */
        .wdv-cta {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #1B3A7A 0%, #2563EB 100%);
          border-radius: 24px; padding: 56px 40px; text-align: center;
          box-shadow: 0 24px 60px rgba(30,64,175,0.28);
        }
        .wdv-cta-orb {
          position: absolute; top: -60px; right: -60px;
          width: 220px; height: 220px; border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 70%);
        }
        .wdv-cta h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800; color: #fff; margin-bottom: 12px;
        }
        .wdv-cta p { color: rgba(255,255,255,0.65); font-size: 1rem; margin-bottom: 28px; }
        .wdv-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; border-radius: 14px;
          background: linear-gradient(135deg, #F97316, #EA580C);
          color: #fff; font-family: 'Sora', sans-serif;
          font-size: 0.92rem; font-weight: 700; text-decoration: none;
          box-shadow: 0 8px 24px rgba(249,115,22,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .wdv-cta-btn:hover {
          transform: translateY(-3px); box-shadow: 0 14px 36px rgba(249,115,22,0.5);
        }

        /* ── Section labels ── */
        .wdv-sec-label {
          display: inline-block; margin-bottom: 12px;
          font-family: 'Sora', sans-serif; font-size: 0.72rem;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 5px 16px; border-radius: 999px;
          background: linear-gradient(135deg, rgba(249,115,22,0.1), rgba(37,99,235,0.08));
          border: 1px solid rgba(249,115,22,0.22); color: #EA580C;
        }
        .wdv-sec-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800; color: #0A0F1E; margin-bottom: 10px;
        }

        /* ── Mobile tweaks ── */
        @media (max-width: 640px) {
          .wdv-hero { padding: 60px 0 50px; }
          .wdv-stats { gap: 20px; }
          .wdv-stat-num { font-size: 1.5rem; }
          .wdv-lb-img-wrap { height: 220px; }
          .wdv-lb-body { padding: 20px; }
          .wdv-lb-title { font-size: 1.25rem; }
          .wdv-cta { padding: 40px 22px; }
          .wdv-search input { width: 100%; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="wdv-hero">
        <div className="wdv-hero-grid" />
        <div className="wdv-hero-orb1" />
        <div className="wdv-hero-orb2" />
        <div className="container mx-auto px-4 relative z-10">
          <span className="wdv-badge" data-aos="fade-up">Web Development</span>
          <h1 data-aos="fade-up" data-aos-delay="80">
            Websites That <span>Inspire</span>,<br />
            Products That <span>Convert</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="160">
            From sleek landing pages to full-stack SaaS platforms — we craft digital experiences
            that are beautiful, fast, and built to grow with your business.
          </p>
          <div className="wdv-stats" data-aos="fade-up" data-aos-delay="240">
            {[
              { num: "15+", label: "Projects Delivered" },
              { num: "100%", label: "Client Satisfaction" },
              { num: "8+", label: "Industries Served" },
              { num: "5★", label: "Average Rating" },
            ].map((s, i) => (
              <div key={i} className="wdv-stat">
                <div className="wdv-stat-num">{s.num}</div>
                <div className="wdv-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-14 space-y-20">

        {/* ── Featured Projects ── */}
        <section data-aos="fade-up">
          <div className="mb-8">
            <span className="wdv-sec-label">Handpicked</span>
            <h2 className="wdv-sec-h2">Featured Projects</h2>
            <p style={{ color: "#64748B", fontSize: "0.97rem", maxWidth: 540 }}>
              A curated selection of our most impactful work — crafted with precision and passion.
            </p>
          </div>
          <div className="wdv-featured-track">
            {featured.map((p, i) => (
              <div
                key={p.id}
                className="wdv-feat-card"
                onClick={() => setLightbox(p)}
                data-aos="zoom-in"
                data-aos-delay={i * 80}
              >
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="wdv-feat-always">
                  <div className="wdv-feat-cat">{p.category}</div>
                  <div className="wdv-feat-title">{p.title}</div>
                </div>
                <div className="wdv-feat-overlay">
                  <div className="wdv-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="wdv-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── All Projects ── */}
        <section>
          <div className="mb-8" data-aos="fade-up">
            <span className="wdv-sec-label">Our Work</span>
            <h2 className="wdv-sec-h2">All Projects</h2>
          </div>

          {/* Filter + Search */}
          <div className="wdv-filter-wrap mb-10" data-aos="fade-up">
            <div className="wdv-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`wdv-filter-btn${activeFilter === cat ? " active" : ""}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="wdv-search">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search projects…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <FaTimes className="clear-icon" onClick={() => setSearch("")} />
              )}
            </div>
          </div>

          {/* Cards Grid */}
          {filtered.length === 0 ? (
            <div className="wdv-empty" data-aos="fade-up">
              <div className="wdv-empty-icon">🔍</div>
              <h3
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.2rem", color: "#0A0F1E", marginBottom: 8 }}
              >
                No projects found
              </h3>
              <p style={{ color: "#64748B" }}>Try adjusting your search or filter.</p>
            </div>
          ) : (
            <div className="wdv-grid">
              {filtered.map((p, i) => (
                <div
                  key={p.id}
                  className="wdv-card"
                  data-aos="fade-up"
                  data-aos-delay={(i % 3) * 80}
                  onClick={() => setLightbox(p)}
                >
                  <div className="wdv-card-img-wrap">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <div className="wdv-card-img-overlay">
                      <button className="wdv-card-view-btn">View Details</button>
                    </div>
                  </div>
                  <div className="wdv-card-body">
                    <div className="wdv-card-cat">{p.category}</div>
                    <div className="wdv-card-title">{p.title}</div>
                    <p className="wdv-card-desc">{p.description}</p>
                    <div className="wdv-card-footer">
                      <div className="wdv-tags">
                        {p.tags.slice(0, 2).map((t) => (
                          <span key={t} className="wdv-tag">{t}</span>
                        ))}
                      </div>
                      {p.url && p.url !== "#" ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="wdv-card-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Visit <FaExternalLinkAlt style={{ fontSize: "0.7rem" }} />
                        </a>
                      ) : (
                        <span className="wdv-card-link" style={{ opacity: 0.4, cursor: "default" }}>
                          Internal
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ── CTA ── */}
        <section data-aos="fade-up">
          <div className="wdv-cta">
            <div className="wdv-cta-orb" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <span
                style={{
                  display: "inline-block", marginBottom: 14,
                  fontFamily: "'Sora', sans-serif", fontSize: "0.72rem",
                  fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "5px 16px", borderRadius: "999px",
                  background: "rgba(249,115,22,0.18)", border: "1px solid rgba(249,115,22,0.4)",
                  color: "#F97316",
                }}
              >
                Let's Build Something
              </span>
              <h2>Ready to Launch Your Next Project?</h2>
              <p>
                From concept to deployment — our team turns your vision into a stunning,
                high-performance web experience.
              </p>
              <Link to="/contact" className="wdv-cta-btn">
                Start a Conversation <FaExternalLinkAlt style={{ fontSize: "0.75rem" }} />
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="wdv-lightbox-backdrop"
          onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
          ref={lightboxRef}
        >
          <div className="wdv-lightbox">
            <div className="wdv-lb-img-wrap">
              <img src={lightbox.image} alt={lightbox.title} />
              <button className="wdv-lb-close" onClick={() => setLightbox(null)}>
                <FaTimes />
              </button>
            </div>
            <div className="wdv-lb-body">
              <div className="wdv-lb-cat">{lightbox.category}</div>
              <div className="wdv-lb-title">{lightbox.title}</div>
              <p className="wdv-lb-desc">{lightbox.description}</p>
              <div className="wdv-tags" style={{ marginBottom: 20 }}>
                {lightbox.tags.map((t) => (
                  <span key={t} className="wdv-tag">{t}</span>
                ))}
              </div>
              <div className="wdv-lb-footer">
                {lightbox.url && lightbox.url !== "#" ? (
                  <a
                    href={lightbox.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wdv-lb-link"
                  >
                    Visit Website <FaExternalLinkAlt style={{ fontSize: "0.75rem" }} />
                  </a>
                ) : (
                  <span className="wdv-lb-link disabled">
                    Internal Project
                  </span>
                )}
                <button
                  onClick={() => setLightbox(null)}
                  style={{
                    padding: "11px 24px", borderRadius: 12,
                    border: "1.5px solid #E2E8F0", background: "#fff",
                    color: "#64748B", fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.88rem", fontWeight: 600, cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#F97316"; e.currentTarget.style.color = "#F97316"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.color = "#64748B"; }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default WebDev;
