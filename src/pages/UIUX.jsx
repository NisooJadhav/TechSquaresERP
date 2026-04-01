import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const tools = [
  {
    icon: "🎨",
    name: "Figma",
    desc: "Our primary design tool for UI screens, design systems, and collaborative workflows.",
  },
  {
    icon: "🖋️",
    name: "Adobe Illustrator",
    desc: "Used for vector graphics, iconography, and brand-aligned visual elements.",
  },
  {
    icon: "📐",
    name: "Wireframing",
    desc: "Low-fidelity sketches and digital wireframes to rapidly map out structure and user flows.",
  },
  {
    icon: "▶️",
    name: "Prototyping",
    desc: "Interactive click-through prototypes to test experiences before development begins.",
  },
  {
    icon: "🧪",
    name: "Usability Testing",
    desc: "User testing sessions to validate designs against real user behaviour and expectations.",
  },
  {
    icon: "📦",
    name: "Design Systems",
    desc: "Scalable component libraries that keep products consistent and teams aligned.",
  },
];

const process = [
  { step: "01", title: "Discover", desc: "We start with a deep-dive into your goals, users, and existing pain points through research and stakeholder interviews." },
  { step: "02", title: "Define", desc: "Personas, user journeys, and information architecture are mapped out to align everyone on the problem we're solving." },
  { step: "03", title: "Design", desc: "Wireframes evolve into high-fidelity UI screens built in Figma, with a polished design system ready for handoff." },
  { step: "04", title: "Prototype & Test", desc: "Clickable prototypes are tested with real users. We iterate fast based on feedback before a dev line is written." },
];

const capabilities = [
  "Mobile & web app design",
  "Landing page & marketing UI",
  "Dashboard & data visualisation",
  "Brand identity & style guides",
  "Responsive & accessible design",
  "Developer-ready Figma handoff",
];

const UIUX = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="uiux-page min-h-screen" style={{ background: "#F8FAFC" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .uiux-page { font-family: 'DM Sans', sans-serif; }

        /* Hero */
        .uiux-hero {
          position: relative; overflow: hidden;
          padding: 88px 0 72px;
          background: linear-gradient(135deg, #0A0F1E 0%, #1B3A7A 55%, #0A0F1E 100%);
        }
        .uiux-hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 52px 52px;
        }
        .uiux-orb {
          position: absolute; border-radius: 50%; pointer-events: none;
          filter: blur(60px);
        }
        .uiux-badge {
          display: inline-block; margin-bottom: 16px;
          font-family: 'Sora', sans-serif; font-size: 0.72rem;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 5px 16px; border-radius: 999px;
          background: rgba(249,115,22,0.15); border: 1px solid rgba(249,115,22,0.35); color: #F97316;
        }
        .uiux-hero h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 800; color: #fff; line-height: 1.15; margin-bottom: 18px;
        }
        .uiux-hero h1 span {
          background: linear-gradient(90deg, #F97316, #FB923C);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .uiux-hero p {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: rgba(255,255,255,0.6); max-width: 560px; line-height: 1.75; margin-bottom: 32px;
        }
        .uiux-hero-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 12px;
          background: linear-gradient(135deg, #F97316, #EA580C);
          color: #fff; font-family: 'Sora', sans-serif;
          font-size: 0.9rem; font-weight: 700; text-decoration: none;
          box-shadow: 0 8px 24px rgba(249,115,22,0.38);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .uiux-hero-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(249,115,22,0.48); }

        /* Section labels */
        .uiux-sec-label {
          display: inline-block; margin-bottom: 12px;
          font-family: 'Sora', sans-serif; font-size: 0.72rem;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 5px 16px; border-radius: 999px;
          background: linear-gradient(135deg, rgba(249,115,22,0.1), rgba(37,99,235,0.08));
          border: 1px solid rgba(249,115,22,0.22); color: #EA580C;
        }
        .uiux-sec-h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800; color: #0A0F1E; margin-bottom: 10px;
        }
        .uiux-sec-sub { color: #64748B; font-size: 0.97rem; max-width: 520px; line-height: 1.7; }

        /* Tool cards */
        .uiux-tools-grid {
          display: grid; gap: 22px;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        }
        .uiux-tool-card {
          background: #fff; border-radius: 18px; padding: 26px 24px;
          border: 1px solid #E2E8F0; box-shadow: 0 4px 18px rgba(0,0,0,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .uiux-tool-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
        .uiux-tool-icon {
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem; margin-bottom: 16px;
          background: linear-gradient(135deg, #F97316, #EA580C);
          box-shadow: 0 6px 18px rgba(249,115,22,0.3);
        }
        .uiux-tool-name {
          font-family: 'Sora', sans-serif; font-size: 1rem;
          font-weight: 700; color: #0A0F1E; margin-bottom: 8px;
        }
        .uiux-tool-desc { font-size: 0.875rem; color: #64748B; line-height: 1.65; }

        /* Process */
        .uiux-process-grid {
          display: grid; gap: 20px;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        }
        .uiux-step-card {
          background: #fff; border-radius: 18px; padding: 26px 24px;
          border: 1px solid #E2E8F0; box-shadow: 0 4px 18px rgba(0,0,0,0.05);
          position: relative; overflow: hidden;
        }
        .uiux-step-num {
          font-family: 'Sora', sans-serif; font-size: 2.5rem;
          font-weight: 800; line-height: 1;
          background: linear-gradient(135deg, rgba(249,115,22,0.12), rgba(37,99,235,0.08));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          margin-bottom: 12px;
        }
        .uiux-step-title {
          font-family: 'Sora', sans-serif; font-size: 1.05rem;
          font-weight: 700; color: #0A0F1E; margin-bottom: 10px;
        }
        .uiux-step-desc { font-size: 0.875rem; color: #64748B; line-height: 1.65; }
        .uiux-step-bar {
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #F97316, #1E40AF);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .uiux-step-card:hover .uiux-step-bar { transform: scaleX(1); }

        /* Capabilities */
        .uiux-cap-grid {
          display: grid; gap: 12px;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        }
        .uiux-cap-item {
          display: flex; align-items: center; gap: 12px;
          background: #fff; border-radius: 12px; padding: 14px 18px;
          border: 1px solid #E2E8F0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          font-size: 0.9rem; font-weight: 500; color: #0A0F1E;
          transition: border-color 0.2s, transform 0.2s;
        }
        .uiux-cap-item:hover { border-color: rgba(249,115,22,0.3); transform: translateY(-2px); }

        /* CTA */
        .uiux-cta {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #1B3A7A 0%, #2563EB 100%);
          border-radius: 22px; padding: 52px 40px; text-align: center;
          box-shadow: 0 20px 56px rgba(30,64,175,0.26);
        }
        .uiux-cta-orb {
          position: absolute; top: -60px; right: -60px;
          width: 200px; height: 200px; border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 70%);
        }
        .uiux-cta h2 {
          font-family: 'Sora', sans-serif; font-size: clamp(1.35rem, 3vw, 1.9rem);
          font-weight: 800; color: #fff; margin-bottom: 12px;
        }
        .uiux-cta p { color: rgba(255,255,255,0.62); font-size: 0.97rem; margin-bottom: 26px; }
        .uiux-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 30px; border-radius: 12px;
          background: linear-gradient(135deg, #F97316, #EA580C);
          color: #fff; font-family: 'Sora', sans-serif;
          font-size: 0.9rem; font-weight: 700; text-decoration: none;
          box-shadow: 0 8px 22px rgba(249,115,22,0.38);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .uiux-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 32px rgba(249,115,22,0.48); }

        @media (max-width: 640px) {
          .uiux-hero { padding: 60px 0 50px; }
          .uiux-cta { padding: 38px 20px; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="uiux-hero">
        <div className="uiux-hero-grid" />
        <div className="uiux-orb" style={{ top: "-90px", right: "-90px", width: 380, height: 380, background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)" }} />
        <div className="uiux-orb" style={{ bottom: "-70px", left: "-70px", width: 280, height: 280, background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 relative z-10">
          <span className="uiux-badge" data-aos="fade-up">UI / UX Design</span>
          <h1 data-aos="fade-up" data-aos-delay="80">
            Design That <span>Feels Right</span>,<br />
            Experiences That <span>Convert</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="160">
            We design interfaces that are intuitive, beautiful, and backed by solid user research —
            from early wireframes all the way to polished, developer-ready screens.
          </p>
          <Link to="/contact" className="uiux-hero-btn" data-aos="fade-up" data-aos-delay="240">
            Start a Project <FaArrowRight />
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-14 space-y-20">

        {/* ── Tools & Skills ── */}
        <section>
          <div className="mb-8" data-aos="fade-up">
            <span className="uiux-sec-label">What We Use</span>
            <h2 className="uiux-sec-h2">Tools & Capabilities</h2>
            <p className="uiux-sec-sub">
              We use industry-standard tools to move from idea to polished design efficiently and collaboratively.
            </p>
          </div>
          <div className="uiux-tools-grid">
            {tools.map((t, i) => (
              <div
                key={t.name}
                className="uiux-tool-card"
                data-aos="fade-up"
                data-aos-delay={i * 70}
              >
                <div className="uiux-tool-icon">{t.icon}</div>
                <div className="uiux-tool-name">{t.name}</div>
                <p className="uiux-tool-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Our Process ── */}
        <section>
          <div className="mb-8" data-aos="fade-up">
            <span className="uiux-sec-label">How We Work</span>
            <h2 className="uiux-sec-h2">Our Design Process</h2>
            <p className="uiux-sec-sub">
              A clear, repeatable process that keeps projects on track and stakeholders informed at every step.
            </p>
          </div>
          <div className="uiux-process-grid">
            {process.map((s, i) => (
              <div
                key={s.step}
                className="uiux-step-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="uiux-step-num">{s.step}</div>
                <div className="uiux-step-title">{s.title}</div>
                <p className="uiux-step-desc">{s.desc}</p>
                <div className="uiux-step-bar" />
              </div>
            ))}
          </div>
        </section>

        {/* ── Capabilities ── */}
        <section>
          <div className="mb-8" data-aos="fade-up">
            <span className="uiux-sec-label">What We Deliver</span>
            <h2 className="uiux-sec-h2">Service Scope</h2>
          </div>
          <div className="uiux-cap-grid" data-aos="fade-up" data-aos-delay="80">
            {capabilities.map((cap, i) => (
              <div key={i} className="uiux-cap-item">
                <FaCheckCircle style={{ color: "#F97316", flexShrink: 0, fontSize: "0.95rem" }} />
                {cap}
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section data-aos="fade-up">
          <div className="uiux-cta">
            <div className="uiux-cta-orb" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2>Got a Product to Design?</h2>
              <p>Share your brief and we'll get back to you within 24 hours.</p>
              <Link to="/contact" className="uiux-cta-btn">
                Let's Talk <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default UIUX;
