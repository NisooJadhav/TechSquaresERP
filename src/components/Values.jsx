import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const C = {
  orange: "#F97316", orangeD: "#EA580C",
  blue: "#1B3A7A", blueM: "#1E40AF", blueL: "#2563EB",
  sky: "#0EA5E9", dark: "#0A0F1E", darkM: "#0D1526",
  white: "#FFFFFF", mid: "#64748B", border: "#E2E8F0",
};

const processSteps = [
  {
    n: "01",
    title: "Gap Analysis",
    desc: "Structured discovery and ERP consulting to analyze business processes, challenges, and automation opportunities.",
    icon: "🎯",
    color: C.orange,
  },
  {
    n: "02",
    title: "Solution Design & Architecture",
    desc: "Design of scalable ERP architecture supporting automation, reporting, and long-term business growth.",
    icon: "🏗",
    color: C.blueL,
  },
  {
    n: "03",
    title: "Development & Customization",
    desc: "Custom development and configuration to align the ERP system with your operational workflows.",
    icon: "</>",
    color: "#A855F7",
  },
  {
    n: "04",
    title: "Data Loading & Verification",
    desc: "Secure data migration with rigorous validation to ensure accuracy, integrity, and system stability.",
    icon: "🗄",
    color: "#10B981",
  },
  {
    n: "05",
    title: "Role-Based Accountability",
    desc: "Smooth ERP deployment supported by hands-on role-based training for fast user adoption across all teams.",
    icon: "⚡",
    color: C.sky,
  },
  {
    n: "06",
    title: "User Training & Production Support",
    desc: "Continuous support and maintenance to optimize performance and adapt to evolving business needs.",
    icon: "🎧",
    color: "#F59E0B",
  },
];

const coreValues = [
  { icon: "🤝", title: "Customer-Centric Excellence", desc: "Every solution is designed with your business outcomes at the forefront." },
  { icon: "💡", title: "Innovation-Driven Approach", desc: "Constantly evolving our methods to leverage the latest ERP advancements." },
  { icon: "🔒", title: "Integrity & Transparency", desc: "Honest timelines, clear pricing, and open communication at every stage." },
  { icon: "🏆", title: "Commitment to Quality", desc: "Rigorous QA, meticulous code review, and performance benchmarking." },
  { icon: "🚀", title: "Collaborative Growth", desc: "We grow with your business — long-term partnership over short-term delivery." },
  { icon: "🌏", title: "Global Mindset", desc: "Multi-timezone support and multi-lingual capabilities for global businesses." },
];

const StepCard = ({ step, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "flex", gap: 22, position: "relative",
        paddingBottom: i < processSteps.length - 1 ? 36 : 0,
      }}
    >
      {/* Vertical line */}
      {i < processSteps.length - 1 && (
        <div style={{
          position: "absolute", left: 24, top: 56, bottom: -12,
          width: 2,
          background: `linear-gradient(to bottom, ${step.color}, rgba(255,255,255,0.05))`,
        }} />
      )}

      {/* Circle */}
      <div style={{
        width: 50, height: 50, borderRadius: "50%", flexShrink: 0,
        background: `linear-gradient(135deg, ${step.color}22, ${step.color}10)`,
        border: `2px solid ${step.color}55`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "monospace", fontWeight: 700,
        fontSize: step.icon === "</>" ? 16 : 22,
        color: step.color,
        boxShadow: `0 0 20px ${step.color}20`,
        zIndex: 2,
      }}>
        {step.icon === "</>" ? step.icon : step.icon}
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 14, padding: "16px 20px",
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8, marginBottom: 6,
        }}>
          <span style={{
            fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "0.72rem",
            color: step.color, letterSpacing: "0.08em",
            background: `${step.color}18`, padding: "2px 8px", borderRadius: 20,
          }}>
            STEP {step.n}
          </span>
          <h4 style={{
            fontFamily: "'Sora', sans-serif", fontWeight: 700,
            fontSize: "1rem", color: C.white,
          }}>
            {step.title}
          </h4>
        </div>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.86rem", lineHeight: 1.6 }}>
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
};

const ValueCard = ({ v, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16, padding: "22px 20px",
        cursor: "default",
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 10 }}>{v.icon}</div>
      <h4 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.95rem", marginBottom: 7 }}>{v.title}</h4>
      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.84rem", lineHeight: 1.6 }}>{v.desc}</p>
    </motion.div>
  );
};

const Values = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section
      ref={sectionRef}
      style={{
        background: C.dark,
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* ── Mission / Vision ── */}
      <div style={{ padding: "90px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Mission */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 56, alignItems: "center", marginBottom: 80,
          }}
          className="mv-grid">
            <motion.div style={{ y: y1 }}>
              <span style={{
                display: "inline-block",
                background: `linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))`,
                border: "1px solid rgba(249,115,22,0.25)",
                color: C.orange, fontWeight: 700, fontSize: "0.72rem",
                padding: "4px 14px", borderRadius: 20, marginBottom: 14,
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}>
                Our Mission
              </span>
              <h2 style={{
                fontFamily: "'Sora', sans-serif", fontWeight: 800,
                fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", color: "#fff",
                lineHeight: 1.15, marginBottom: 18,
              }}>
                Empowering Businesses<br />
                <span style={{
                  background: `linear-gradient(135deg, ${C.orange}, #FCD34D)`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  Through Intelligent ERP
                </span>
              </h2>
              <p style={{
                color: "rgba(255,255,255,0.58)", fontSize: "1rem",
                lineHeight: 1.75, maxWidth: 460,
              }}>
                To empower businesses with scalable ERP solutions that streamline operations,
                improve visibility, and drive sustainable growth through Odoo.
              </p>

              <div style={{ display: "flex", gap: 20, marginTop: 28, flexWrap: "wrap" }}>
                {[
                   { val: "14+", label: "Years Experience", color: C.orange },
                   { val: "Global", label: "Client Presence", color: C.sky },
                   { val: "ERP", label: "Implementation Experts", color: "#A855F7" },
                   { val: "24/7", label: "Support Coverage", color: "#10B981" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      textAlign: "center",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 12, padding: "12px 20px",
                    }}
                  >
                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, color: s.color, fontSize: "1.4rem" }}>{s.val}</div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem" }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{
                background: `linear-gradient(145deg, rgba(30,64,175,0.35), rgba(249,115,22,0.15))`,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 24, padding: 32,
                backdropFilter: "blur(12px)",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: -30, right: -30, width: 180, height: 180,
                  background: `radial-gradient(circle, ${C.orange}25 0%, transparent 70%)`,
                  borderRadius: "50%",
                }} />
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, color: "#fff", fontSize: "1.1rem", marginBottom: 20 }}>
                  Our Vision
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: 24 }}>
                  To become a global leader in delivering innovative ERP services that help
                  businesses of all sizes digitally transform and scale with confidence.
                </p>
                {["Global ERP Leadership", "Digital Transformation", "Scalable Growth", "Long-Term Partnership"].map((v, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: "50%",
                      background: `linear-gradient(135deg, ${C.orange}, ${C.blueL})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontSize: 11, fontWeight: 700, flexShrink: 0,
                    }}>✓</div>
                    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem" }}>{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div ref={headRef} style={{ marginBottom: 40, textAlign: "center" }}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={headInView ? { opacity: 1 } : {}}
              style={{
                display: "inline-block",
                background: `rgba(14,165,233,0.12)`,
                border: "1px solid rgba(14,165,233,0.25)",
                color: C.sky, fontWeight: 700, fontSize: "0.72rem",
                padding: "4px 14px", borderRadius: 20, marginBottom: 14,
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}
            >
              Core Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", color: "#fff" }}
            >
              What Drives Us
            </motion.h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 18 }}>
            {coreValues.map((v, i) => <ValueCard key={i} v={v} i={i} />)}
          </div>
        </div>
      </div>

      {/* ── How We Work ── */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "80px 5%",
        background: "rgba(255,255,255,0.02)",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{
              display: "inline-block",
              background: `rgba(249,115,22,0.12)`,
              border: "1px solid rgba(249,115,22,0.22)",
              color: C.orange, fontWeight: 700, fontSize: "0.72rem",
              padding: "4px 14px", borderRadius: 20, marginBottom: 14,
              letterSpacing: "0.06em", textTransform: "uppercase",
            }}>
              Our Process
            </span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", marginBottom: 12 }}>
              How We Work
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: 500, margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.7 }}>
              A proven, systematic ERP implementation approach designed to minimise risk,
              accelerate adoption, and enable long-term success.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }}
            className="process-grid">
            {processSteps.map((step, i) => (
              <StepCard key={i} step={step} i={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginTop: 48 }}
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: `0 16px 40px ${C.orange}50` }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
                color: "#fff", border: "none", borderRadius: 12,
                padding: "14px 32px", fontSize: "0.95rem", fontWeight: 700,
                cursor: "pointer", fontFamily: "'Sora', sans-serif",
                boxShadow: `0 8px 28px ${C.orange}40`,
              }}
            >
              Talk to Our ERP Experts →
            </motion.button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap');
        @media(max-width:900px){
          .mv-grid{grid-template-columns:1fr!important}
          .process-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </section>
  );
};

export default Values;