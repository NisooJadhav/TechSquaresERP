import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// ─── Theme Tokens ────────────────────────────────────────────────────────────
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
  gray800: "#5A6482",
  gray900: "#151C35",
};

// ─── Testimonials (Enhanced) ──────────────────────────────────────
const testimonials = [
  {
    quote: "We replaced multiple disconnected tools with one system. The visibility we have now is a game changer.",
    role: "Operations Manager",
    industry: "Construction",
  },
  {
    quote: "Invoicing became significantly faster and more accurate after implementation. Cash flow improved immediately.",
    role: "Finance Head",
    industry: "Services",
  },
  {
    quote: "Inventory and operations are now fully aligned. We finally have real-time data to make decisions.",
    role: "Director",
    industry: "Manufacturing",
  },
  {
    quote: "The ERP implementation streamlined our entire workflow — what used to take hours now takes minutes.",
    role: "CEO",
    industry: "Retail",
  },
];


// ─── Testimonial Card (Premium UI) ────────────────────────────────
const TestimonialCard = ({ t, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (

    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08 }}
      whileHover={{ y: -6 }}
      style={{
        position: "relative",
        background: T.white,
        border: `1px solid ${T.gray100}`,
        borderRadius: 18,
        padding: "22px",
        boxShadow: "0 10px 30px rgba(26,47,110,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Accent top line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${T.orange}, ${T.navyLight})`,
        }}
      />

      {/* Quote Icon */}
      <div
        style={{
          fontSize: 28,
          color: T.orange,
          opacity: 0.15,
          marginBottom: 6,
        }}
      >
        “
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize: "0.9rem",
          color: T.gray800,
          lineHeight: 1.7,
          marginBottom: 16,
          fontStyle: "italic",
        }}
      >
        {t.quote}
      </p>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: T.gray100,
          marginBottom: 12,
        }}
      />

      {/* Role */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span
          style={{
            fontWeight: 700,
            fontSize: "0.85rem",
            color: T.gray900,
          }}
        >
          {t.role}
        </span>

        <span
          style={{
            fontSize: "0.75rem",
            color: T.gray800,
          }}
        >
          {t.industry}
        </span>
      </div>
    </motion.div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
const AboveFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        background: T.gray100,
        padding: "100px 5%",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* ── CTA Header ── */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
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
            Get Started
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontSize: "clamp(2rem, 3vw, 2.6rem)",
              fontWeight: 900,
              color: T.gray900,
              marginBottom: 14,
            }}
          >
            Ready to Streamline Your Business?
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
            Replace disconnected tools, improve visibility, and automate operations
            with a fully integrated ERP system built for your business.
          </motion.p>
        </div>

        {/* ── CTA Buttons ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            marginBottom: 50,
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: T.orange,
              color: "#fff",
              borderRadius: 10,
              padding: "14px 26px",
              fontSize: "0.9rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: `0 8px 24px ${T.orange}35`,
            }}
          >
            Book Free ERP Audit
            <ArrowRight size={16} />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: T.white,
              color: T.navy,
              border: `1px solid ${T.gray200}`,
              borderRadius: 10,
              padding: "14px 24px",
              fontSize: "0.9rem",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Schedule Demo
          </motion.a>
        </div>

        {/* ── Trust Indicators ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
            marginBottom: 60,
          }}
        >
          {[
            "15–25% cost reduction",
            "30% faster invoicing",
            "Full business visibility",
          ].map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: "0.85rem",
                color: T.gray800,
              }}
            >
              <CheckCircle2 size={16} color={T.orange} />
              {t}
            </div>
          ))}
        </div>

        {/* ── Testimonials ── */}
        <center>
          <h2 className="block w-full text-2xl font-bold text-gray-900">What Our Clients Say</h2>
          <br />
        </center>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboveFooter;