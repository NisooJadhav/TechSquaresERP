import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Settings, Globe, Smartphone, Layers, LifeBuoy, BookOpen } from "lucide-react";

// ─── Brand Tokens (matches Hero theme) ───────────────────────────────────────
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

// ─── Three service pillars from strategy doc ──────────────────────────────────
const pillars = [
  {
    id: "erp",
    eyebrow: "Core Offering",
    title: "Odoo ERP Solutions",
    desc: "End-to-end ERP implementation for Australian SMEs — from business analysis and module setup to GST compliance and go-live support.",
    icon: Layers,
    color: T.navy,
    light: "#EBF0FF",
    services: [
      { icon: Settings, label: "Implementation & Configuration" },
      { icon: BookOpen,  label: "GST / BAS & ATO Compliance" },
      { icon: LifeBuoy,  label: "Custom Modules & Integrations" },
      { icon: ArrowRight,label: "Data Migration & Training" },
    ],
    cta: "Explore ERP Services",
  },
  {
    id: "web",
    eyebrow: "Digital Presence",
    title: "Website Development",
    desc: "Fast, conversion-focused websites for Australian businesses — built to generate leads, rank on Google, and reflect your brand with confidence.",
    icon: Globe,
    color: T.orange,
    light: T.orangeLight,
    services: [
      { icon: Globe,      label: "Business & Corporate Websites" },
      { icon: ArrowRight, label: "Landing Pages & Lead Funnels" },
      { icon: Settings,   label: "SEO & Performance Optimisation" },
      { icon: LifeBuoy,   label: "CMS & Ongoing Maintenance" },
    ],
    cta: "Explore Web Services",
  },
  {
    id: "app",
    eyebrow: "Mobile Solutions",
    title: "Mobile App Development",
    desc: "Native and cross-platform apps for iOS & Android — purpose-built for field teams, logistics operations, and customer-facing experiences.",
    icon: Smartphone,
    color: "#0891B2",
    light: "#E0F7FA",
    services: [
      { icon: Smartphone, label: "iOS & Android Development" },
      { icon: Layers,     label: "ERP-Connected Field Apps" },
      { icon: Settings,   label: "UI / UX Design & Prototyping" },
      { icon: LifeBuoy,   label: "App Maintenance & Support" },
    ],
    cta: "Explore App Services",
  },
];

// ─── Supporting ERP services (detail grid) ───────────────────────────────────
const erpServices = [
  {
    icon: "01",
    title: "ERP Consulting & Strategy",
    desc: "We analyse your business processes, identify gaps, and design an ERP roadmap aligned with your growth objectives.",
    accent: T.navy,
  },
  {
    icon: "02",
    title: "Implementation & Go-Live",
    desc: "Structured deployment of Odoo modules — Accounting, Inventory, CRM, Payroll, Projects — with minimal disruption.",
    accent: T.orange,
  },
  {
    icon: "03",
    title: "Custom Development",
    desc: "Bespoke modules, workflow automation, and API integrations tailored to your exact operational requirements.",
    accent: "#7C3AED",
  },
  {
    icon: "04",
    title: "Data Migration",
    desc: "Secure, validated migration from legacy systems — spreadsheets, MYOB, Xero, or any previous ERP platform.",
    accent: "#0891B2",
  },
  {
    icon: "05",
    title: "Support & Maintenance",
    desc: "Ongoing system monitoring, bug fixes, Odoo version upgrades, and performance enhancements post go-live.",
    accent: "#16A34A",
  },
  {
    icon: "06",
    title: "Training & Onboarding",
    desc: "Role-based training sessions and documentation to ensure confident adoption across your entire team.",
    accent: "#D97706",
  },
];

// ─── Pillar Card ──────────────────────────────────────────────────────────────
const PillarCard = ({ p, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = p.icon;
  const isPrimary = i === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: isPrimary ? p.color : T.white,
        border: `1px solid ${isPrimary ? "transparent" : T.gray100}`,
        borderRadius: 20,
        padding: "36px 32px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: isPrimary
          ? `0 24px 56px ${p.color}30`
          : "0 4px 20px rgba(26,47,110,0.06)",
      }}
    >
      {/* Background pattern for primary card */}
      {isPrimary && (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: -60, right: -60,
            width: 220, height: 220,
            background: "rgba(255,255,255,0.06)",
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute", bottom: -40, left: -40,
            width: 160, height: 160,
            background: "rgba(255,255,255,0.04)",
            borderRadius: "50%",
          }} />
          <svg style={{ position: "absolute", bottom: 0, right: 0, width: 140, height: 140, opacity: 0.06 }} viewBox="0 0 140 140">
            {[0,1,2].map(i => (
              <circle key={i} cx="140" cy="140" r={40 + i * 30} fill="none" stroke="white" strokeWidth="1" />
            ))}
          </svg>
        </div>
      )}

      {/* Eyebrow */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 7,
        background: isPrimary ? "rgba(255,255,255,0.12)" : p.light,
        borderRadius: 6, padding: "5px 11px",
        marginBottom: 20, alignSelf: "flex-start",
      }}>
        <span style={{
          fontSize: "0.65rem", fontWeight: 700,
          color: isPrimary ? "rgba(255,255,255,0.9)" : p.color,
          letterSpacing: "0.1em", textTransform: "uppercase",
        }}>
          {p.eyebrow}
        </span>
      </div>

      {/* Icon + title */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: isPrimary ? "rgba(255,255,255,0.15)" : p.light,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <Icon size={22} color={isPrimary ? "#fff" : p.color} strokeWidth={1.8} />
        </div>
        <h3 style={{
          fontWeight: 800, fontSize: "1.2rem",
          color: isPrimary ? T.white : T.gray900,
          lineHeight: 1.2, letterSpacing: "-0.01em",
        }}>
          {p.title}
        </h3>
      </div>

      {/* Description */}
      <p style={{
        fontSize: "0.88rem", lineHeight: 1.75,
        color: isPrimary ? "rgba(255,255,255,0.72)" : T.gray800,
        marginBottom: 24,
      }}>
        {p.desc}
      </p>

      {/* Service list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flex: 1 }}>
        {p.services.map((s, j) => {
          const SIcon = s.icon;
          return (
            <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                background: isPrimary ? "rgba(255,255,255,0.1)" : p.light,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <SIcon size={13} color={isPrimary ? "rgba(255,255,255,0.8)" : p.color} strokeWidth={2} />
              </div>
              <span style={{
                fontSize: "0.82rem", fontWeight: 500,
                color: isPrimary ? "rgba(255,255,255,0.82)" : T.gray800,
              }}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: isPrimary ? "rgba(255,255,255,0.12)" : p.light,
          border: isPrimary ? "1px solid rgba(255,255,255,0.2)" : `1px solid ${p.color}25`,
          borderRadius: 8, padding: "11px 18px",
          fontSize: "0.82rem", fontWeight: 700,
          color: isPrimary ? T.white : p.color,
          textDecoration: "none", alignSelf: "flex-start",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = isPrimary ? "rgba(255,255,255,0.2)" : p.color;
          e.currentTarget.style.color = isPrimary ? T.white : T.white;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = isPrimary ? "rgba(255,255,255,0.12)" : p.light;
          e.currentTarget.style.color = isPrimary ? T.white : p.color;
        }}
      >
        {p.cta}
        <ArrowRight size={14} />
      </a>
    </motion.div>
  );
};

// ─── Detail Card ──────────────────────────────────────────────────────────────
const DetailCard = ({ s, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: T.white,
        border: `1px solid ${T.gray100}`,
        borderRadius: 16,
        padding: "26px 24px",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.2s, transform 0.2s",
        cursor: "default",
      }}
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(26,47,110,0.1)" }}
    >
      {/* Left accent */}
      <div style={{
        position: "absolute", left: 0, top: 24, bottom: 24,
        width: 3, borderRadius: "0 3px 3px 0",
        background: s.accent,
      }} />

      {/* Number */}
      <div style={{
        fontSize: "0.65rem", fontWeight: 800,
        color: s.accent, letterSpacing: "0.1em",
        textTransform: "uppercase", marginBottom: 12,
        fontFamily: "'Outfit', sans-serif",
      }}>
        {s.icon}
      </div>

      <h4 style={{
        fontWeight: 800, fontSize: "0.95rem",
        color: T.gray900, marginBottom: 10,
        lineHeight: 1.3, letterSpacing: "-0.01em",
      }}>
        {s.title}
      </h4>

      <p style={{
        fontSize: "0.82rem", lineHeight: 1.7,
        color: T.gray800,
      }}>
        {s.desc}
      </p>
    </motion.div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const Features = () => {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <section style={{
        background: T.gray100,
        padding: "100px 5%",
        fontFamily: "'Outfit', sans-serif",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: 1260, margin: "0 auto" }}>

          {/* ── Section header ── */}
          <div ref={headRef} style={{ marginBottom: 60 }}>
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
                What We Deliver
              </span>
            </motion.div>

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.08 }}
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 3rem)",
                  fontWeight: 900, color: T.gray900,
                  lineHeight: 1.1, letterSpacing: "-0.025em",
                  maxWidth: 540,
                }}
              >
                Three Ways We Help
                <br />
                <span style={{ color: T.orange }}>Your Business Grow</span>
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
                From ERP implementation and business websites to mobile apps —
                each service line is designed to work independently or together
                as a fully integrated solution.
              </motion.p>
            </div>
          </div>

          {/* ── Pillar cards ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20, marginBottom: 80,
          }}>
            {pillars.map((p, i) => <PillarCard key={p.id} p={p} i={i} />)}
          </div>

          {/* ── ERP detail divider ── */}
          {/* <div style={{
            display: "flex", alignItems: "center", gap: 20, marginBottom: 40,
          }}>
            <div style={{ flex: 1, height: 1, background: T.gray100 }} />
            <div style={{
              background: T.white, border: `1px solid ${T.gray100}`,
              borderRadius: 20, padding: "8px 20px",
              fontSize: "0.72rem", fontWeight: 700,
              color: T.navy, letterSpacing: "0.08em", textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>
              ERP Service Breakdown
            </div>
            <div style={{ flex: 1, height: 1, background: T.gray100 }} />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16, marginBottom: 64,
          }}>
            {erpServices.map((s, i) => <DetailCard key={i} s={s} i={i} />)}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            style={{
              background: T.navy,
              borderRadius: 20,
              padding: "40px 48px",
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap", gap: 24,
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", right: -40, top: -40, width: 200, height: 200, background: "rgba(255,255,255,0.04)", borderRadius: "50%", pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 60, bottom: -60, width: 160, height: 160, background: `${T.orange}18`, borderRadius: "50%", pointerEvents: "none" }} />

            <div style={{ position: "relative" }}>
              <div style={{
                fontSize: "0.68rem", fontWeight: 700,
                color: `${T.orange}`, letterSpacing: "0.1em",
                textTransform: "uppercase", marginBottom: 10,
              }}>
                Ready to get started?
              </div>
              <h3 style={{
                fontWeight: 800, fontSize: "1.4rem",
                color: T.white, lineHeight: 1.2,
                letterSpacing: "-0.015em", marginBottom: 8,
              }}>
                Transform your operations
                <br />with the right technology.
              </h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem" }}>
                Talk to our team — no obligations, just a clear plan.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", position: "relative" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: T.orange, color: T.white,
                  border: "none", borderRadius: 8,
                  padding: "13px 24px", fontSize: "0.88rem", fontWeight: 700,
                  cursor: "pointer", textDecoration: "none",
                  boxShadow: `0 6px 24px ${T.orange}45`,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#E06510"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = T.orange; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Book Free ERP Audit
                <ArrowRight size={15} />
              </a>
              <a
                href="#services"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: T.white, borderRadius: 8,
                  padding: "13px 24px", fontSize: "0.88rem", fontWeight: 600,
                  cursor: "pointer", textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              >
                View All Services
              </a>
            </div>
          </motion.div> */}

        </div>
      </section>
    </>
  );
};

export default Features;