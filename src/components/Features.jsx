import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const C = {
  orange: "#F97316", orangeD: "#EA580C",
  blue: "#1B3A7A", blueM: "#1E40AF", blueL: "#2563EB",
  sky: "#0EA5E9", dark: "#0A0F1E", white: "#FFFFFF",
  light: "#F8FAFC", mid: "#64748B",
};

const services = [
  {
    icon: "⚙️",
    title: "ERP Consulting & Strategy",
    desc: "We analyze business processes, identify gaps, and design ERP roadmaps aligned with your operational and growth objectives.",
    gradient: `linear-gradient(135deg, ${C.blueM}, ${C.blueL})`,
    accent: C.blueL,
  },
  {
    icon: "</>",
    title: "ERP Implementation",
    desc: "End-to-end Odoo ERP implementation ensuring scalable, secure, and efficient system deployment with minimal disruption.",
    gradient: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
    accent: C.orange,
  },
  {
    icon: "🛠",
    title: "Customization & Development",
    desc: "Custom modules, workflow automation, and integrations tailored to meet your unique business requirements.",
    gradient: `linear-gradient(135deg, #7C3AED, #A855F7)`,
    accent: "#A855F7",
  },
  {
    icon: "🔄",
    title: "Data Migration & Integration",
    desc: "Secure data migration from legacy systems with seamless integration across third-party platforms and tools.",
    gradient: `linear-gradient(135deg, #0EA5E9, #06B6D4)`,
    accent: C.sky,
  },
  {
    icon: "🎧",
    title: "Support & Maintenance",
    desc: "Continuous Odoo support including system monitoring, performance optimization, and post-implementation enhancements.",
    gradient: `linear-gradient(135deg, #059669, #10B981)`,
    accent: "#10B981",
  },
  {
    icon: "🎓",
    title: "Training & Knowledge Transfer",
    desc: "Structured training and documentation to ensure smooth adoption and maximize long-term ERP value.",
    gradient: `linear-gradient(135deg, #D97706, #F59E0B)`,
    accent: "#F59E0B",
  },
];

const ServiceCard = ({ s, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      style={{
        background: C.white,
        border: "1px solid #E2E8F0",
        borderRadius: 18,
        padding: "28px 26px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Hover shimmer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at top left, ${s.accent}0e 0%, transparent 60%)`,
          pointerEvents: "none",
          transition: "opacity 0.3s",
        }}
      />

      {/* Bottom accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
          background: s.gradient, transformOrigin: "left", borderRadius: "0 0 18px 18px",
        }}
        transition={{ duration: 0.35 }}
      />

      {/* Icon */}
      <div style={{
        width: 54, height: 54, borderRadius: 14,
        background: s.gradient,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: s.icon === "</>" ? 18 : 24,
        fontFamily: "monospace", fontWeight: 700, color: "#fff",
        marginBottom: 18,
        boxShadow: `0 8px 20px ${s.accent}35`,
      }}>
        {s.icon}
      </div>

      <h3 style={{
        fontFamily: "'Sora', sans-serif", fontWeight: 700,
        fontSize: "1.02rem", color: C.dark, marginBottom: 10,
      }}>
        {s.title}
      </h3>
      <p style={{ color: C.mid, fontSize: "0.87rem", lineHeight: 1.65 }}>
        {s.desc}
      </p>

      {/* Learn more link */}
      <motion.div
        initial={{ opacity: 0, x: -6 }}
        whileHover={{ opacity: 1, x: 0 }}
        style={{
          marginTop: 16, display: "flex", alignItems: "center", gap: 5,
          color: s.accent, fontSize: "0.83rem", fontWeight: 700,
          fontFamily: "'Sora', sans-serif",
        }}
        transition={{ duration: 0.2 }}
      >
        Learn more <span style={{ fontSize: 14 }}>→</span>
      </motion.div>
    </motion.div>
  );
};

const Features = () => {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section style={{
      padding: "90px 5%",
      background: C.light,
      fontFamily: "'DM Sans', sans-serif",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-block",
              background: `linear-gradient(135deg, rgba(249,115,22,0.1), rgba(37,99,235,0.08))`,
              border: "1px solid rgba(249,115,22,0.22)",
              color: C.orangeD, fontWeight: 700, fontSize: "0.75rem",
              padding: "5px 16px", borderRadius: 30, marginBottom: 14,
              letterSpacing: "0.06em", textTransform: "uppercase",
            }}
          >
            What We Do
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Sora', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: C.dark, marginBottom: 14,
            }}
          >
            Comprehensive Odoo ERP Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: C.mid, fontSize: "1rem", lineHeight: 1.7,
              maxWidth: 560, margin: "0 auto",
            }}
          >
            End-to-end ERP services covering consulting, implementation, customization,
            and support — designed to streamline operations and deliver long-term business value.
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 22,
        }}>
          {services.map((s, i) => <ServiceCard key={i} s={s} i={i} />)}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: 48,
            background: `linear-gradient(135deg, ${C.blue} 0%, ${C.blueL} 100%)`,
            borderRadius: 20, padding: "32px 40px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 20,
            boxShadow: `0 20px 50px ${C.blueM}35`,
          }}
        >
          <div>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, color: "#fff", fontSize: "1.3rem", marginBottom: 6 }}>
              Ready to transform your business operations?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem" }}>
              Connect with our ERP experts to discuss your business requirements.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: `0 12px 32px ${C.orange}55` }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
              color: "#fff", border: "none", borderRadius: 12,
              padding: "12px 26px", fontSize: "0.92rem", fontWeight: 700,
              cursor: "pointer", fontFamily: "'Sora', sans-serif",
              boxShadow: `0 6px 20px ${C.orange}40`,
              whiteSpace: "nowrap",
            }}
          >
            Schedule a Demo →
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
    </section>
  );
};

export default Features;