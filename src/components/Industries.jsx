import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";

// ─── Brand Tokens (matches Hero + Features) ───────────────────────────────────
const T = {
  navy:        "#1A2F6E",
  navyLight:   "#2442A0",
  orange:      "#F47B20",
  orangeLight: "#FEF0E4",
  white:       "#FFFFFF",
  gray50:      "#F8F9FC",
  gray100:     "#EEF1F8",
  gray200:     "#E2E7F4",
  gray400:     "#9AA3BE",
  gray600:     "#5A6482",
  gray900:     "#151C35",
};

// ─── Industries — AU-focused per strategy doc ─────────────────────────────────
const industries = [
  {
    icon: "🏗️",
    title: "Construction",
    tagline: "Project Cost to Completion",
    desc: "Manage complex construction projects with job costing, subcontractor management, procurement, and GST-compliant invoicing — all in one place.",
    features: [
      "Job costing & budget tracking",
      "Subcontractor management",
      "GST & progress billing",
      "Project scheduling & milestones",
    ],
    color:  "#1A2F6E",
    light:  "#EBF0FF",
    pill:   "rgba(26,47,110,0.08)",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    tagline: "Production to Dispatch",
    desc: "Streamline your production floor with MRP, BOM management, real-time inventory sync, and quality control built directly into your ERP.",
    features: [
      "MRP & production scheduling",
      "BOM & quality traceability",
      "Real-time inventory sync",
      "Cost sheet management",
    ],
    color:  "#0891B2",
    light:  "#E0F7FA",
    pill:   "rgba(8,145,178,0.08)",
  },
  {
    icon: "🛒",
    title: "Retail & E-commerce",
    tagline: "Omnichannel Commerce",
    desc: "Connect your physical stores and online channels with unified inventory, smart replenishment, POS, and customer loyalty tools.",
    features: [
      "Multi-store POS",
      "E-commerce & inventory sync",
      "Customer loyalty programs",
      "Smart replenishment",
    ],
    color:  T.orange,
    light:  T.orangeLight,
    pill:   "rgba(244,123,32,0.08)",
  },
  {
    icon: "🚚",
    title: "Logistics",
    tagline: "Move Smarter, Track Better",
    desc: "Real-time shipment visibility, route optimisation, barcode-driven warehouse management, and multi-carrier integrations for logistics operations.",
    features: [
      "Live shipment tracking",
      "Route optimisation",
      "Barcode warehouse management",
      "Multi-carrier integration",
    ],
    color:  "#d9069d",
    light:  "#FFFBEB",
    pill:   "rgba(217,119,6,0.08)",
  },
  {
    icon: "💼",
    title: "Professional Services",
    tagline: "Deliver on Time, Bill Accurately",
    desc: "Project accounting, resource planning, timesheet tracking, and client billing tools for consultancies, agencies, and service firms.",
    features: [
      "Project & task management",
      "Timesheet & payroll",
      "Client invoicing & retainers",
      "Resource utilisation reports",
    ],
    color:  "#059669",
    light:  "#F0FDF4",
    pill:   "rgba(5,150,105,0.08)",
  },
];

// ─── Tab button (sidebar) ─────────────────────────────────────────────────────
const TabItem = ({ ind, isActive, onClick, i }) => (
  <motion.button
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.07, duration: 0.45 }}
    onClick={onClick}
    style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "12px 14px", borderRadius: 12, border: "none",
      cursor: "pointer", textAlign: "left", width: "100%",
      background: isActive ? ind.light : "transparent",
      outline: isActive ? `1.5px solid ${ind.color}25` : "none",
      transition: "background 0.2s",
      fontFamily: "'Outfit', sans-serif",
    }}
  >
    {/* Icon box */}
    <div style={{
      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
      background: isActive ? ind.color : T.gray100,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: "1.1rem",
      transition: "background 0.25s",
      boxShadow: isActive ? `0 4px 14px ${ind.color}30` : "none",
    }}>
      {ind.icon}
    </div>

    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        fontWeight: 700, fontSize: "0.88rem",
        color: isActive ? T.gray900 : T.gray800,
        transition: "color 0.2s",
        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
      }}>
        {ind.title}
      </div>
      <div style={{
        fontSize: "0.7rem", fontWeight: 600,
        color: isActive ? ind.color : T.gray800,
        marginTop: 2,
      }}>
        {ind.tagline}
      </div>
    </div>

    <ChevronRight
      size={14}
      strokeWidth={2.5}
      color={isActive ? ind.color : T.gray800}
      style={{ flexShrink: 0, opacity: isActive ? 1 : 0, transition: "opacity 0.2s" }}
    />
  </motion.button>
);

// ─── Detail panel ─────────────────────────────────────────────────────────────
const DetailPanel = ({ ind }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={ind.title}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: T.white,
        border: `1px solid ${T.gray100}`,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(26,47,110,0.07)",
      }}
    >
      {/* Coloured top band */}
      <div style={{
        background: ind.color,
        padding: "28px 32px 24px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -40, right: -40, width: 180, height: 180,
          background: "rgba(255,255,255,0.07)", borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -50, right: 80, width: 140, height: 140,
          background: "rgba(255,255,255,0.04)", borderRadius: "50%", pointerEvents: "none",
        }} />

        <div style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
          <div style={{
            width: 60, height: 60, borderRadius: 16,
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.75rem", flexShrink: 0,
          }}>
            {ind.icon}
          </div>
          <div>
            <div style={{
              fontSize: "0.65rem", fontWeight: 700,
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4,
            }}>
              {ind.tagline}
            </div>
            <h3 style={{
              fontWeight: 900, fontSize: "1.55rem",
              color: T.white, lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}>
              {ind.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "30px 32px" }}>
        <p style={{
          fontSize: "0.95rem", lineHeight: 1.78,
          color: T.gray800, marginBottom: 28,
        }}>
          {ind.desc}
        </p>

        {/* Feature list */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12, marginBottom: 32,
        }}>
          {ind.features.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
              style={{
                display: "flex", alignItems: "flex-start", gap: 10,
                background: ind.light,
                border: `1px solid ${ind.color}18`,
                borderRadius: 10, padding: "12px 14px",
              }}
            >
              <CheckCircle2
                size={15} strokeWidth={2.5}
                color={ind.color}
                style={{ flexShrink: 0, marginTop: 1 }}
              />
              <span style={{
                fontSize: "0.82rem", fontWeight: 600,
                color: T.gray900, lineHeight: 1.4,
              }}>
                {f}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: ind.color, color: T.white,
            border: "none", borderRadius: 8,
            padding: "12px 22px", fontSize: "0.86rem", fontWeight: 700,
            cursor: "pointer", textDecoration: "none",
            boxShadow: `0 6px 20px ${ind.color}35`,
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Explore {ind.title} Solutions
          <ArrowRight size={15} />
        </a>
      </div>
    </motion.div>
  </AnimatePresence>
);

// ─── Main Section ─────────────────────────────────────────────────────────────
const Industries = () => {
  const [active, setActive] = useState(0);
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 860px) {
          .ind-layout { grid-template-columns: 1fr !important; }
          .ind-sidebar { flex-direction: row !important; overflow-x: auto !important; gap: 8px !important; padding: 10px !important; }
          .ind-sidebar button { min-width: 140px !important; }
        }
      `}</style>

      <section style={{
        background: T.white,
        padding: "100px 5%",
        fontFamily: "'Outfit', sans-serif",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: 1260, margin: "0 auto" }}>

          {/* ── Header ── */}
          <div ref={headRef} style={{ marginBottom: 56 }}>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: T.orangeLight, border: `1px solid ${T.orange}30`,
                borderRadius: 6, padding: "6px 14px", marginBottom: 20,
              }}
            >
              <span style={{
                fontSize: "0.7rem", color: T.orange, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                Industry Expertise
              </span>
            </motion.div>

            <div style={{
              display: "flex", alignItems: "flex-end",
              justifyContent: "space-between", gap: 24, flexWrap: "wrap",
            }}>
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.08 }}
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 3rem)",
                  fontWeight: 900, color: T.gray900,
                  lineHeight: 1.1, letterSpacing: "-0.025em",
                  maxWidth: 480,
                }}
              >
                Solutions Built for
                <br />
                <span style={{ color: T.orange }}>Your Industry</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.18 }}
                style={{
                  fontSize: "0.95rem", lineHeight: 1.75,
                  color: T.gray800, maxWidth: 380,
                }}
              >
                We combine deep sector knowledge with ERP and digital expertise
                to deliver solutions that fit the way your business actually works.
              </motion.p>
            </div>
          </div>

          {/* ── Two-column layout ── */}
          <div
            className="ind-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "260px 1fr",
              gap: 20, alignItems: "start",
            }}
          >
            {/* Sidebar */}
            <div
              className="ind-sidebar"
              style={{
                background: T.gray50,
                border: `1px solid ${T.gray100}`,
                borderRadius: 16,
                padding: "10px",
                display: "flex", flexDirection: "column", gap: 4,
              }}
            >
              {industries.map((ind, i) => (
                <TabItem
                  key={ind.title}
                  ind={ind} i={i}
                  isActive={active === i}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>

            {/* Detail */}
            <DetailPanel ind={industries[active]} />
          </div>

          {/* ── Bottom note ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              marginTop: 36, textAlign: "center",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}
          >
            <span style={{ fontSize: "0.88rem", color: T.gray800 }}>
              Don't see your industry?
            </span>
            <a
              href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontSize: "0.88rem", fontWeight: 700,
                color: T.navy, textDecoration: "none",
                borderBottom: `1.5px solid ${T.navy}30`,
                paddingBottom: 1,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.navy; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = `${T.navy}30`; }}
            >
              We work across all sectors
              <ArrowRight size={13} />
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Industries;