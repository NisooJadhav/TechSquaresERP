import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const C = {
  orange: "#F97316", orangeD: "#EA580C",
  blue: "#1B3A7A", blueM: "#1E40AF", blueL: "#2563EB",
  sky: "#0EA5E9", dark: "#0A0F1E", white: "#FFFFFF",
  light: "#F8FAFC", mid: "#64748B", border: "#E2E8F0",
};

const industries = [
  {
    icon: "🏭",
    title: "Manufacturing",
    tagline: "Production to Dispatch",
    desc: "End-to-end ERP solutions covering production planning, quality control, MRP, shop floor management, and supply chain optimization.",
    features: ["MRP & production scheduling", "Quality & traceability", "Real-time inventory sync", "Cost sheet & BOM management"],
    gradient: `linear-gradient(135deg, ${C.blueM}, ${C.blueL})`,
    accent: C.blueL,
    bg: "#EFF6FF",
  },
  {
    icon: "🛒",
    title: "Retail & Distribution",
    tagline: "Omnichannel Commerce",
    desc: "Omnichannel ERP solutions with integrated POS, inventory management, customer loyalty programs, and e-commerce synchronization.",
    features: ["Multi-store POS", "E-commerce sync", "Loyalty programs", "Smart replenishment"],
    gradient: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
    accent: C.orange,
    bg: "#FFF7ED",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    tagline: "Patient-First Systems",
    desc: "ERP solutions for patient management, inventory tracking, appointment scheduling, and compliant clinical billing systems.",
    features: ["Patient records & EMR", "Prosthetics inventory", "Billing & compliance", "Clinical staff coordination"],
    gradient: `linear-gradient(135deg, #DC2626, #EF4444)`,
    accent: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    icon: "🎓",
    title: "Education",
    tagline: "Campus to Cloud",
    desc: "ERP-enabled student information systems, admissions workflows, fee management, and academic planning solutions.",
    features: ["Student lifecycle management", "Fee & billing automation", "Faculty & HR tools", "Accreditation reporting"],
    gradient: `linear-gradient(135deg, #7C3AED, #A855F7)`,
    accent: "#A855F7",
    bg: "#F5F3FF",
  },
  {
    icon: "🚚",
    title: "Logistics & Supply Chain",
    tagline: "Move Smarter",
    desc: "ERP-driven logistics solutions including real-time tracking, route optimization, warehouse management, and multi-carrier integration.",
    features: ["Live shipment tracking", "Route optimization", "Barcode-driven warehouse", "Multi-carrier integration"],
    gradient: `linear-gradient(135deg, #D97706, #F59E0B)`,
    accent: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: "💼",
    title: "Professional Services",
    tagline: "Deliver on Time",
    desc: "ERP solutions for project accounting, resource planning, timesheet tracking, and client billing for service-based organizations.",
    features: ["Project & task management", "Timesheet & payroll", "Client invoicing", "Resource utilization"],
    gradient: `linear-gradient(135deg, #059669, #10B981)`,
    accent: "#10B981",
    bg: "#F0FDF4",
  },
];

const IndustryTab = ({ ind, isActive, onClick, i }) => (
  <motion.button
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.07 }}
    onClick={onClick}
    style={{
      display: "flex", alignItems: "center", gap: 10,
      padding: "12px 18px", borderRadius: 12, border: "none",
      cursor: "pointer", textAlign: "left", width: "100%",
      background: isActive ? ind.bg : "transparent",
      boxShadow: isActive ? `inset 0 0 0 1.5px ${ind.accent}40` : "none",
      transition: "background 0.2s, box-shadow 0.2s",
      fontFamily: "'DM Sans', sans-serif",
    }}
  >
    <div style={{
      width: 40, height: 40, borderRadius: 10,
      background: isActive ? ind.gradient : "#F1F5F9",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 18, transition: "background 0.25s",
      boxShadow: isActive ? `0 4px 14px ${ind.accent}35` : "none",
    }}>
      {ind.icon}
    </div>
    <div>
      <div style={{
        fontFamily: "'Sora', sans-serif", fontWeight: 700,
        fontSize: "0.9rem", color: isActive ? C.dark : C.mid,
        transition: "color 0.2s",
      }}>
        {ind.title}
      </div>
      <div style={{ fontSize: "0.72rem", color: isActive ? ind.accent : "#94A3B8", fontWeight: 600 }}>
        {ind.tagline}
      </div>
    </div>
    {isActive && (
      <motion.div layoutId="tab-arrow" style={{ marginLeft: "auto", color: ind.accent, fontSize: 14 }}>
        ›
      </motion.div>
    )}
  </motion.button>
);

const Industries = () => {
  const [active, setActive] = useState(0);
  const ind = industries[active];
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section style={{
      padding: "90px 5%",
      background: C.white,
      overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            style={{
              display: "inline-block",
              background: `linear-gradient(135deg, rgba(249,115,22,0.1), rgba(37,99,235,0.08))`,
              border: "1px solid rgba(249,115,22,0.22)",
              color: C.orangeD, fontWeight: 700, fontSize: "0.75rem",
              padding: "5px 16px", borderRadius: 30, marginBottom: 14,
              letterSpacing: "0.06em", textTransform: "uppercase",
            }}
          >
            Industry Expertise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Sora', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: C.dark, marginBottom: 12,
            }}
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{ color: C.mid, fontSize: "1rem", maxWidth: 520, margin: "0 auto" }}
          >
            Deep domain expertise combined with ERP and business process automation
            to deliver solutions tailored to your sector.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 28, alignItems: "start" }}
          className="industries-grid">
          {/* Sidebar tabs */}
          <div style={{
            background: C.light, borderRadius: 18, padding: "14px 12px",
            border: `1px solid ${C.border}`,
            display: "flex", flexDirection: "column", gap: 4,
          }}>
            {industries.map((ind, i) => (
              <IndustryTab key={i} ind={ind} i={i} isActive={active === i} onClick={() => setActive(i)} />
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: ind.bg,
                border: `1px solid ${ind.accent}25`,
                borderRadius: 20, padding: "36px 36px 32px",
                position: "relative", overflow: "hidden",
              }}
            >
              {/* BG decoration */}
              <div style={{
                position: "absolute", top: -60, right: -60, width: 220, height: 220,
                background: `radial-gradient(circle, ${ind.accent}15 0%, transparent 70%)`,
                borderRadius: "50%", pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", bottom: -40, left: "30%", width: 140, height: 140,
                background: `radial-gradient(circle, ${ind.accent}10 0%, transparent 70%)`,
                borderRadius: "50%", pointerEvents: "none",
              }} />

              {/* Icon + title row */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 22 }}>
                <div style={{
                  width: 68, height: 68, borderRadius: 18,
                  background: ind.gradient,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 30, flexShrink: 0,
                  boxShadow: `0 12px 30px ${ind.accent}35`,
                }}>
                  {ind.icon}
                </div>
                <div>
                  <div style={{
                    display: "inline-block",
                    background: `${ind.accent}18`, color: ind.accent,
                    fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px",
                    borderRadius: 20, marginBottom: 6, letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}>
                    {ind.tagline}
                  </div>
                  <h3 style={{
                    fontFamily: "'Sora', sans-serif", fontWeight: 800,
                    fontSize: "1.55rem", color: C.dark,
                  }}>
                    {ind.title}
                  </h3>
                </div>
              </div>

              <p style={{
                color: C.mid, fontSize: "0.97rem", lineHeight: 1.75,
                marginBottom: 28, maxWidth: 560,
              }}>
                {ind.desc}
              </p>

              {/* Feature chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
                {ind.features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.07 }}
                    style={{
                      display: "flex", alignItems: "center", gap: 7,
                      background: C.white, border: `1px solid ${ind.accent}25`,
                      borderRadius: 30, padding: "7px 14px",
                      fontSize: "0.83rem", fontWeight: 600, color: C.dark,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    <span style={{ color: ind.accent, fontWeight: 700 }}>✓</span>
                    {f}
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: ind.gradient,
                  color: "#fff", border: "none", borderRadius: 10,
                  padding: "11px 24px", fontSize: "0.88rem", fontWeight: 700,
                  cursor: "pointer", fontFamily: "'Sora', sans-serif",
                  boxShadow: `0 6px 18px ${ind.accent}35`,
                }}
              >
                Explore {ind.title} Solutions →
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center", color: C.mid, fontSize: "0.88rem",
            marginTop: 32,
          }}
        >
          Don't see your industry?{" "}
          <span style={{ color: C.blueL, fontWeight: 700, cursor: "pointer" }}>
            We work with businesses across all sectors →
          </span>
        </motion.p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap');
        @media(max-width:860px){.industries-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
};

export default Industries;