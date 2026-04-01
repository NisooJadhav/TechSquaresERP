import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// ─── Theme Tokens (Aligned with Industries) ───────────────────────────────────
const T = {
  navy: "#1A2F6E",
  navyLight: "#2442A0",
  orange: "#F47B20",
  orangeLight: "#FEF0E4",
  white: "#FFFFFF",
  gray50: "#F8F9FC",
  gray100: "#EEF1F8",
  gray200: "#E2E7F4",
  gray400: "#9AA3BE",
  gray600: "#5A6482",
  gray900: "#151C35",
};

// ─── Core Values (AU SME + Generic Positioning) ──────────────────────────────
const coreValues = [
  {
    icon: "🌏",
    title: "Australia-Focused Solutions",
    desc: "Built for Australian businesses with GST compliance, local workflows, and SME scalability in mind.",
  },
  {
    icon: "🎯",
    title: "Outcome-Focused Delivery",
    desc: "We focus on measurable business outcomes like cost reduction, efficiency, and faster operations — not just software delivery.",
  },
  {
    icon: "📊",
    title: "Business-First Approach",
    desc: "Every solution starts with understanding your operations, ensuring the system fits your workflows — not the other way around.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    desc: "We work as an extension of your team, supporting your growth beyond initial implementation.",
  },
  {
    icon: "🔒",
    title: "Transparency & Trust",
    desc: "Clear timelines, honest communication, and predictable pricing at every stage of engagement.",
  },
  {
    icon: "⚡",
    title: "Speed & Efficiency",
    desc: "Lean implementation approach designed to deliver working systems quickly without unnecessary delays.",
  },
  {
    icon: "🧩",
    title: "Scalable & Flexible Systems",
    desc: "Our solutions are designed to grow with your business, adapting easily to new processes, integrations, and future expansion.",
  },
  {
    icon: "🔄",
    title: "Continuous Improvement",
    desc: "We don’t stop at delivery — we continuously refine and optimize systems based on feedback, performance, and evolving business needs.",
  },
];

// ─── Process Steps (Aligned with Strategy Doc) ────────────────────────────────
const processSteps = [
  {
    title: "Business Analysis",
    desc: "We analyse your current systems, workflows, and challenges to identify automation and optimisation opportunities.",
  },
  {
    title: "Solution Design",
    desc: "Design a scalable ERP or digital solution tailored to your business processes and growth goals.",
  },
  {
    title: "Implementation",
    desc: "Configure and deploy systems including ERP modules, integrations, and custom workflows.",
  },
  {
    title: "Data Setup & Migration",
    desc: "Securely migrate your existing data and ensure accuracy before going live.",
  },
  {
    title: "Training & Go-Live",
    desc: "Train your team and ensure smooth adoption with minimal operational disruption.",
  },
  {
    title: "Support & Optimisation",
    desc: "Ongoing support, improvements, and scaling as your business evolves.",
  },
];

// ─── Value Card ──────────────────────────────────────────────────────────────
const ValueCard = ({ v, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.06 }}
      whileHover={{ y: -4 }}
      style={{
        background: T.white,
        border: `1px solid ${T.gray100}`,
        borderRadius: 16,
        padding: "22px 20px",
        boxShadow: "0 6px 20px rgba(26,47,110,0.06)",
      }}
    >
      <div style={{ fontSize: 26, marginBottom: 10 }}>{v.icon}</div>
      <h4
        style={{
          fontWeight: 800,
          fontSize: "0.95rem",
          color: T.gray900,
          marginBottom: 6,
        }}
      >
        {v.title}
      </h4>
      <p
        style={{
          color: T.gray800,
          fontSize: "0.84rem",
          lineHeight: 1.6,
        }}
      >
        {v.desc}
      </p>
    </motion.div>
  );
};

// ─── Step Card ───────────────────────────────────────────────────────────────
const StepCard = ({ step, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08 }}
      style={{
        display: "flex",
        gap: 14,
        background: T.white,
        border: `1px solid ${T.gray100}`,
        borderRadius: 14,
        padding: "18px",
        boxShadow: "0 6px 20px rgba(26,47,110,0.05)",
      }}
    >
      <CheckCircle2
        size={18}
        color={T.orange}
        style={{ flexShrink: 0, marginTop: 2 }}
      />
      <div>
        <h4
          style={{
            fontWeight: 800,
            fontSize: "0.95rem",
            color: T.gray900,
            marginBottom: 4,
          }}
        >
          {step.title}
        </h4>
        <p
          style={{
            fontSize: "0.84rem",
            color: T.gray800,
            lineHeight: 1.6,
          }}
        >
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
const Values = () => {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true });

  return (
    <section
      style={{
        background: T.gray100,
        padding: "100px 5%",
        paddingBottom: 0,
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* ── Header ── */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 60 }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            style={{
              display: "inline-block",
              background: T.orangeLight,
              border: `1px solid ${T.orange}30`,
              color: T.orange,
              fontWeight: 700,
              fontSize: "0.7rem",
              padding: "6px 14px",
              borderRadius: 6,
              marginBottom: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Our Approach
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontSize: "clamp(2rem, 3vw, 2.6rem)",
              fontWeight: 900,
              color: T.gray900,
              marginBottom: 12,
            }}
          >
            Built for Real Business Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            style={{
              color: T.gray800,
              maxWidth: 520,
              margin: "0 auto",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            We combine ERP, web, and mobile solutions to help businesses streamline
            operations, improve visibility, and scale efficiently.
          </motion.p>
        </div>

        {/* ── Values Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 18,
            marginBottom: 70,
          }}
        >
          {coreValues.map((v, i) => (
            <ValueCard key={i} v={v} i={i} />
          ))}
        </div>
      </div>

      {/* Full-width white process section */}
      <div
        style={{
          width: "99vw",
          marginLeft: "calc(50% - 50vw)",
          background: T.white,
          padding: "88px 5%",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          {/* ── Process ── */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: T.navy,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Our Process
            </span>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: 900,
                color: T.gray900,
                marginTop: 8,
              }}
            >
              How We Deliver
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {processSteps.map((step, i) => (
              <StepCard key={i} step={step} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;