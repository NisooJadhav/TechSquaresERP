import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, CheckCircle, ChevronRight, Sparkles } from "lucide-react";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────
const T = {
  navy:        "#1A2F6E",
  navyLight:   "#2442A0",
  orange:      "#F47B20",
  orangeLight: "#FEF0E4",
  sky:         "#EBF4FF",
  white:       "#FFFFFF",
  gray50:      "#F8F9FC",
  gray100:     "#EEF1F8",
  gray400:     "#9AA3BE",
  gray600:     "#5A6482",
  gray900:     "#151C35",
};

const caps = [
  "Odoo ERP Implementation",
  "GST & BAS Compliance",
  "Custom Web Development",
  "Mobile App Development",
  "ERP System Integration",
  "Business Process Automation",
];

// ─── Animated number ──────────────────────────────────────────────────────────
const AnimNum = ({ to, suffix = "", duration = 1400 }) => {
  const [val, setVal] = useState(0);
  const [fired, setFired] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !fired) setFired(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [fired]);

  useEffect(() => {
    if (!fired) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [fired, to, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
};

// ─── Dashboard visual ─────────────────────────────────────────────────────────
const Dashboard = () => {
  const bars = [42, 58, 51, 73, 62, 88, 70, 82, 91, 77, 85, 96];
  const [active, setActive] = useState(11);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % 12), 1100);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      background: T.white,
      borderRadius: 20,
      boxShadow: "0 24px 64px rgba(26,47,110,0.13), 0 4px 16px rgba(26,47,110,0.07)",
      overflow: "hidden",
      border: `1px solid ${T.gray100}`,
      width: "100%",
    }}>
      {/* Top bar */}
      <div style={{
        background: T.navy,
        padding: "14px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#FF5F57","#FEBC2E","#28C840"].map((c, i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{
          background: "rgba(255,255,255,0.1)", borderRadius: 20,
          padding: "3px 14px", color: "rgba(255,255,255,0.6)",
          fontSize: "0.68rem", fontFamily: "monospace",
        }}>
          suktam.odoo.com
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }}
          />
          <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.5)" }}>Live</span>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        {/* KPI strip */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
          {[
            { label: "Revenue",  val: "A$2.4M", up: "+23%",  color: T.orange },
            { label: "Orders",   val: "1,847",  up: "+18%",  color: T.navyLight },
            { label: "GST Filed",val: "100%",   up: "✓ ATO", color: "#16A34A" },
          ].map((k, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              style={{
                background: T.gray50,
                border: `1px solid ${T.gray100}`,
                borderRadius: 12, padding: "12px",
                borderBottom: `3px solid ${k.color}`,
              }}
            >
              <div style={{ fontSize: "0.6rem", color: T.gray800, marginBottom: 5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{k.label}</div>
              <div style={{ fontWeight: 800, fontSize: "1rem", color: T.gray900, fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>{k.val}</div>
              <div style={{ color: k.color, fontSize: "0.62rem", fontWeight: 700, marginTop: 4 }}>{k.up}</div>
            </motion.div>
          ))}
        </div>

        {/* Bar chart */}
        <div style={{
          background: T.gray50, borderRadius: 12,
          padding: "14px", marginBottom: 14,
          border: `1px solid ${T.gray100}`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: "0.62rem", color: T.gray800, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>Monthly Growth</span>
            <span style={{ fontSize: "0.62rem", color: T.orange, fontWeight: 700 }}>+34% YoY ↑</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 52 }}>
            {bars.map((h, i) => (
              <motion.div key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6 + i * 0.04, ease: "easeOut" }}
                style={{
                  flex: 1, height: `${h}%`,
                  borderRadius: "3px 3px 0 0",
                  transformOrigin: "bottom",
                  background: i === active
                    ? `linear-gradient(to top, ${T.orange}, #FDE68A)`
                    : `linear-gradient(to top, ${T.navy}50, ${T.navyLight}80)`,
                  transition: "background 0.35s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Module chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {[
            { n: "Accounting", c: T.orange },
            { n: "Inventory",  c: T.navyLight },
            { n: "CRM",        c: "#7C3AED" },
            { n: "GST / BAS",  c: "#16A34A" },
            { n: "Payroll",    c: "#DB2777" },
            { n: "Projects",   c: "#0EA5E9" },
          ].map((m, i) => (
            <div key={i} style={{
              background: `${m.c}12`,
              border: `1px solid ${m.c}30`,
              borderRadius: 20, padding: "4px 11px",
              fontSize: "0.63rem", color: m.c, fontWeight: 600,
            }}>
              {m.n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [capIdx, setCapIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCapIdx(p => (p + 1) % caps.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .h-btn-primary {
          display: inline-flex; align-items: center; gap: 9px;
          background: ${T.orange}; color: #fff;
          border: none; border-radius: 8px;
          padding: 14px 26px; font-size: 0.9rem; font-weight: 700;
          cursor: pointer; font-family: 'Outfit', sans-serif;
          box-shadow: 0 6px 24px ${T.orange}45;
          transition: all 0.22s ease; text-decoration: none; white-space: nowrap;
        }
        .h-btn-primary:hover { background: #E06510; transform: translateY(-2px); box-shadow: 0 12px 32px ${T.orange}50; }

        .h-btn-ghost {
          display: inline-flex; align-items: center; gap: 9px;
          background: transparent; color: ${T.navy};
          border: 1.5px solid ${T.gray100}; border-radius: 8px;
          padding: 13px 24px; font-size: 0.9rem; font-weight: 600;
          cursor: pointer; font-family: 'Outfit', sans-serif;
          transition: all 0.22s ease; text-decoration: none; white-space: nowrap;
        }
        .h-btn-ghost:hover { border-color: ${T.navy}40; background: ${T.gray50}; }

        @media (max-width: 980px) {
          .h-grid  { grid-template-columns: 1fr !important; }
          .h-right { display: none !important; }
          .h-head  { font-size: clamp(2.2rem, 8vw, 3.2rem) !important; }
          .h-outer { padding: 90px 6% 60px !important; }
        }
      `}</style>

      <section style={{
        background: T.white,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Outfit', sans-serif",
      }}>

        {/* ── Background decoration ── */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: -160, right: -120,
            width: 720, height: 720,
            background: `radial-gradient(circle, ${T.sky} 0%, transparent 68%)`,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute", bottom: -80, left: -80,
            width: 360, height: 360,
            background: `radial-gradient(circle, ${T.orangeLight} 0%, transparent 68%)`,
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `
              linear-gradient(${T.gray100} 1px, transparent 1px),
              linear-gradient(90deg, ${T.gray100} 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px",
            opacity: 0.5,
          }} />
          <svg style={{ position: "absolute", top: 0, right: 0, width: 420, height: 420, opacity: 0.035 }} viewBox="0 0 420 420">
            {[0,1,2,3,4,5].map(i => (
              <line key={i} x1={420} y1={i * 70} x2={420 - i * 70} y2={0} stroke={T.navy} strokeWidth="1" />
            ))}
          </svg>
        </div>

        {/* ── Main content ── */}
        <div className="h-outer" style={{
          position: "relative", zIndex: 2,
          maxWidth: 1260, margin: "0 auto",
          padding: "120px 5% 80px",
        }}>
          <div className="h-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72, alignItems: "center",
          }}>

            {/* LEFT */}
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: T.orangeLight,
                  border: `1px solid ${T.orange}30`,
                  borderRadius: 6, padding: "6px 14px", marginBottom: 24,
                }}
              >
                <Sparkles size={13} color={T.orange} />
                <span style={{ fontSize: "0.7rem", color: T.orange, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Trusted by Australian Businesses 🇦🇺
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="h-head"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: "clamp(2.6rem, 3.8vw, 4rem)",
                  fontWeight: 900, lineHeight: 1.08,
                  color: T.gray900, letterSpacing: "-0.025em",
                  marginBottom: 20,
                }}
              >
                Run Your Business<br />
                on One{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span style={{ color: T.orange }}>Powerful</span>
                  <motion.svg
                    viewBox="0 0 200 12"
                    style={{ position: "absolute", bottom: -5, left: 0, width: "100%", overflow: "visible" }}
                  >
                    <motion.path
                      d="M 4 9 Q 100 2 196 7"
                      fill="none" stroke={T.orange} strokeWidth="3" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 0.85, duration: 0.7 }}
                    />
                  </motion.svg>
                </span>
                {" "}Platform
              </motion.h1>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.65 }}
                style={{
                  fontSize: "1rem", lineHeight: 1.8,
                  color: T.gray800, maxWidth: 460, marginBottom: 28,
                }}
              >
                We help Australian 🇦🇺 SMEs eliminate operational chaos with{" "}
                <strong style={{ color: T.navy, fontWeight: 700 }}>Odoo ERP</strong>,
                Custom <strong style={{ color: T.navy, fontWeight: 700 }}>Websites</strong>, and 
                <strong style={{ color: T.navy, fontWeight: 700 }}> Mobile Apps</strong> — fully integrated,
                GST‑compliant, and live in as little as 14 days.
              </motion.p>

              {/* Rotating capability line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  marginBottom: 32, height: 26,
                }}
              >
                <ChevronRight size={15} color={T.orange} strokeWidth={2.5} />
                <div style={{ overflow: "hidden", height: 22 }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={capIdx}
                      initial={{ y: 22, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -22, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{ display: "block", fontSize: "0.88rem", fontWeight: 600, color: T.navy }}
                    >
                      {caps[capIdx]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.6 }}
                style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}
              >
                <a href="#contact" className="h-btn-primary">
                  Book Free ERP Audit
                  <ArrowRight size={16} />
                </a>
                <a href="#demo" className="h-btn-ghost">
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%",
                    background: T.navy,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Play size={10} style={{ fill: "#fff", color: "#fff", marginLeft: 2 }} />
                  </div>
                  Watch Demo
                </a>
              </motion.div>

              {/* Stats bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.52 }}
                style={{
                  display: "flex", gap: 0, flexWrap: "wrap",
                  background: T.gray50,
                  border: `1px solid ${T.gray100}`,
                  borderRadius: 14, overflow: "hidden",
                }}
              >
                {[
                  { val: 14, suffix: "+",    label: "Years Experience" },
                  { val: 25, suffix: "%",    label: "Avg Cost Saved" },
                  { val: 14, suffix: " days",label: "Go-Live Time" },
                ].map((s, i) => (
                  <div key={i} style={{
                    flex: 1, padding: "18px 20px",
                    borderRight: i < 2 ? `1px solid ${T.gray100}` : "none",
                    textAlign: "center", minWidth: 100,
                  }}>
                    <div style={{
                      fontSize: "1.85rem", fontWeight: 900,
                      color: T.navy, lineHeight: 1, marginBottom: 4,
                    }}>
                      <AnimNum to={s.val} suffix={s.suffix} />
                    </div>
                    <div style={{ fontSize: "0.68rem", color: T.gray800, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="h-right" style={{ position: "relative" }}>
              {/* Soft color backdrop */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "108%", height: "108%",
                borderRadius: 28,
                background: `linear-gradient(140deg, ${T.sky} 0%, ${T.orangeLight} 100%)`,
                zIndex: 0,
              }} />

              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "relative", zIndex: 1 }}
              >
                <Dashboard />
              </motion.div>

              {/* Floating badge – top left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "absolute", top: -20, left: -28, zIndex: 5,
                  background: T.white, borderRadius: 12,
                  padding: "10px 14px",
                  display: "flex", alignItems: "center", gap: 10,
                  boxShadow: "0 8px 28px rgba(26,47,110,0.13)",
                  border: `1px solid ${T.gray100}`,
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10, background: T.orangeLight,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem",
                }}>⚡</div>
                <div>
                  <div style={{ fontSize: "0.58rem", color: T.gray800, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>Live In</div>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: T.gray900 }}>14 Days</div>
                </div>
              </motion.div>

              {/* Floating badge – bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "absolute", bottom: -20, right: -24, zIndex: 5,
                  background: T.white, borderRadius: 12,
                  padding: "10px 14px",
                  display: "flex", alignItems: "center", gap: 10,
                  boxShadow: "0 8px 28px rgba(26,47,110,0.13)",
                  border: `1px solid ${T.gray100}`,
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10, background: "#DCFCE7",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem",
                }}>🇦🇺</div>
                <div>
                  <div style={{ fontSize: "0.58rem", color: T.gray800, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>GST Ready</div>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: "#16A34A" }}>ATO Compliant</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Industry strip ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            position: "relative", zIndex: 2,
            borderTop: `1px solid ${T.gray100}`,
            background: T.gray50,
            padding: "18px 5%",
          }}
        >
          <div style={{
            maxWidth: 1260, margin: "0 auto",
            display: "flex", alignItems: "center",
            gap: 10, flexWrap: "wrap",
          }}>
            <span style={{
              fontSize: "0.68rem", color: T.gray800, fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.08em",
              marginRight: 8, whiteSpace: "nowrap",
            }}>
              Industries we serve
            </span>

            {[
              { icon: "🏗️", name: "Construction" },
              { icon: "🏭", name: "Manufacturing" },
              { icon: "🛒", name: "Retail" },
              { icon: "🚚", name: "Logistics" },
              { icon: "💼", name: "Professional Services" },
            ].map((ind, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 6,
                background: T.white, border: `1px solid ${T.gray100}`,
                borderRadius: 20, padding: "5px 12px",
                fontSize: "0.78rem", color: T.gray800, fontWeight: 500,
              }}>
                <span style={{ fontSize: "0.88rem" }}>{ind.icon}</span>
                {ind.name}
              </div>
            ))}

            <div style={{ marginLeft: "auto" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 7,
                background: T.orangeLight, border: `1px solid ${T.orange}30`,
                borderRadius: 20, padding: "6px 14px",
              }}>
                <CheckCircle size={13} color={T.orange} />
                <span style={{ fontSize: "0.7rem", color: T.orange, fontWeight: 700 }}>Odoo Certified Partner</span>
              </div>
            </div>
          </div>
        </motion.div> */}
      </section>
    </>
  );
};

export default Hero;