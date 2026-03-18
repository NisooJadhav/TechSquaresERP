import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Zap, TrendingUp, Shield, Users, CheckCircle2 } from "lucide-react";

// ── Brand tokens (extracted from Suktam logo)
// Orange: #F97316 → #EA580C | Blue: #1B3A7A → #1E40AF | Sky: #0EA5E9
const C = {
  orange: "#F97316",
  orangeD: "#EA580C",
  blue: "#1B3A7A",
  blueM: "#1E40AF",
  blueL: "#2563EB",
  sky: "#0EA5E9",
  dark: "#0A0F1E",
  darkM: "#0D1526",
  white: "#FFFFFF",
};

// ── Animated orbital ring SVG
const OrbitalRing = ({ size = 300, delay = 0, duration = 18, clockwise = true }) => (
  <motion.div
    style={{ width: size, height: size, position: "absolute" }}
    animate={{ rotate: clockwise ? 360 : -360 }}
    transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    className="pointer-events-none"
  >
    <svg viewBox="0 0 300 300" width="100%" height="100%">
      <ellipse cx="150" cy="150" rx="145" ry="60"
        fill="none" stroke="url(#orb)" strokeWidth="1" strokeDasharray="8 6" opacity="0.35"
        transform="rotate(-20, 150, 150)" />
      <defs>
        <linearGradient id="orb" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={C.orange} stopOpacity="0" />
          <stop offset="50%" stopColor={C.orange} stopOpacity="1" />
          <stop offset="100%" stopColor={C.sky} stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="295" cy="150" r="5" fill={C.orange} />
    </svg>
  </motion.div>
);

// ── Floating particle
const Particle = ({ x, y, delay, size = 3, color }) => (
  <motion.div
    style={{ position: "absolute", left: `${x}%`, top: `${y}%`, width: size, height: size, borderRadius: "50%", background: color, filter: `blur(${size > 3 ? 1 : 0}px)` }}
    animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
    transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

// ── Dashboard mockup card
const DashboardMockup = () => {
  const modules = [
    { label: "Sales", icon: "📈", color: "#F97316" },
    { label: "CRM", icon: "🤝", color: "#0EA5E9" },
    { label: "Inventory", icon: "📦", color: "#22C55E" },
    { label: "HR", icon: "👥", color: "#A855F7" },
    { label: "Finance", icon: "💰", color: "#F59E0B" },
    { label: "Projects", icon: "🚀", color: "#1E40AF" },
    { label: "Purchase", icon: "🛒", color: "#EF4444" },
    { label: "Reports", icon: "📊", color: "#06B6D4" },
  ];
  const bars = [40, 65, 45, 80, 55, 90, 70, 60, 85, 50, 75, 95];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: -12 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 24,
        padding: 24,
        backdropFilter: "blur(20px)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Inner glow */}
      <div style={{
        position: "absolute", top: -60, right: -60, width: 200, height: 200,
        background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      {/* Window bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{
          background: "rgba(255,255,255,0.06)", padding: "3px 12px", borderRadius: 20,
          color: "rgba(255,255,255,0.5)", fontSize: 11, fontFamily: "monospace",
        }}>
          odoo.suktam.com
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {[C.orange, C.sky, "#22C55E"].map((c, i) => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: c, animation: `pulse ${1.5 + i * 0.3}s infinite` }} />
          ))}
        </div>
      </div>

      {/* KPI row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
        {[
          { label: "Revenue", val: "₹2.4Cr", up: "+23%", color: C.orange },
          { label: "Orders", val: "1,847", up: "+18%", color: C.sky },
          { label: "Efficiency", val: "+47%", up: "↗ Live", color: "#22C55E" },
        ].map((k, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            style={{
              background: `linear-gradient(135deg, ${k.color}20, ${k.color}08)`,
              border: `1px solid ${k.color}30`, borderRadius: 12, padding: "10px 12px",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, marginBottom: 4 }}>{k.label}</div>
            <div style={{ color: "#fff", fontSize: 17, fontWeight: 700, fontFamily: "'Clash Display', 'Sora', sans-serif" }}>{k.val}</div>
            <div style={{ color: k.color, fontSize: 10, fontWeight: 600 }}>{k.up}</div>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <div style={{
        background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 12, padding: "12px 14px", marginBottom: 14,
      }}>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginBottom: 8 }}>MONTHLY GROWTH</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 52 }}>
          {bars.map((h, i) => (
            <motion.div key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1 + i * 0.05, ease: "easeOut" }}
              style={{
                flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", transformOrigin: "bottom",
                background: i === 11
                  ? `linear-gradient(to top, ${C.orange}, #FCD34D)`
                  : `linear-gradient(to top, ${C.blueL}, ${C.sky})`,
                opacity: i === 11 ? 1 : 0.6,
              }}
            />
          ))}
        </div>
      </div>

      {/* Module grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
        {modules.map((m, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.05 }}
            whileHover={{ scale: 1.06, background: "rgba(255,255,255,0.12)" }}
            style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 10, padding: "8px 4px", textAlign: "center", cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            <div style={{ fontSize: 16, marginBottom: 3 }}>{m.icon}</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 9, fontWeight: 600 }}>{m.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// ── Main Hero
const TechSquareHero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bgX = useTransform(mouseX, [0, window.innerWidth || 1200], [-20, 20]);
  const bgY = useTransform(mouseY, [0, window.innerHeight || 800], [-20, 20]);

  const features = [
    { icon: Zap, text: "End-to-End Implementation", color: C.orange },
    { icon: TrendingUp, text: "Strong Odoo ERP Expertise", color: C.sky },
    { icon: Shield, text: "Customization & Integration Specialists", color: "#22C55E" },
    { icon: Users, text: "Client-First Delivery Approach", color: "#A855F7" },
  ];

  const particles = Array.from({ length: 22 }, (_, i) => ({
    x: Math.random() * 100, y: Math.random() * 100,
    delay: i * 0.3, size: Math.random() * 3 + 1,
    color: i % 3 === 0 ? C.orange : i % 3 === 1 ? C.sky : "rgba(255,255,255,0.4)",
  }));

  useEffect(() => {
    setMounted(true);
    const iv = setInterval(() => setCurrentFeature(p => (p + 1) % 4), 2800);
    return () => clearInterval(iv);
  }, []);

  const handleMouse = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      onMouseMove={handleMouse}
      style={{
        minHeight: "100vh",
        background: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(27,58,122,0.9) 0%, ${C.dark} 65%)`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "'Sora', 'DM Sans', sans-serif",
      }}
    >
      {/* ── Ambient blobs ── */}
      <motion.div style={{ x: bgX, y: bgY, position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "15%", left: "8%", width: 420, height: 420,
          background: `radial-gradient(circle, ${C.orange}18 0%, transparent 70%)`,
          borderRadius: "50%", filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "5%", width: 500, height: 500,
          background: `radial-gradient(circle, ${C.blueL}20 0%, transparent 70%)`,
          borderRadius: "50%", filter: "blur(50px)",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "40%", width: 300, height: 300,
          background: `radial-gradient(circle, ${C.sky}12 0%, transparent 70%)`,
          borderRadius: "50%", filter: "blur(30px)",
        }} />
      </motion.div>

      {/* ── Grid texture ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* ── Particles ── */}
      {mounted && particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* ── Orbital rings (desktop) ── */}
      <div style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
        <OrbitalRing size={480} delay={0} duration={22} clockwise={true} />
        <OrbitalRing size={340} delay={0.5} duration={16} clockwise={false} />
        <OrbitalRing size={200} delay={1} duration={10} clockwise={true} />
      </div>

      {/* ── Main content ── */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 48, alignItems: "center",
        maxWidth: 1280, margin: "0 auto",
        padding: "100px 5% 80px",
        width: "100%",
      }}
      className="hero-grid"
      >
        {/* LEFT */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.3)",
              padding: "6px 16px", borderRadius: 30, marginBottom: 24,
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: C.orange, display: "inline-block" }}
            />
            <span style={{ color: C.orange, fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              14+ Years of ERP Excellence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
              fontWeight: 800, lineHeight: 1.1,
              color: "#fff", marginBottom: 8,
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Transform Your
            <br />Business with{" "}
            <span style={{
              background: `linear-gradient(135deg, ${C.orange} 0%, #FCD34D 50%, ${C.sky} 100%)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Expert
              <br />ERP Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              color: "rgba(255,255,255,0.62)", fontSize: "1.05rem",
              lineHeight: 1.75, maxWidth: 480, margin: "16px 0 32px",
            }}
          >
            Suktam Technologies helps businesses streamline operations, gain real-time visibility,
            and scale efficiently with{" "}
            <span style={{ color: C.sky, fontWeight: 600 }}>Odoo ERP</span>{" "}
            implementation, customization, and automation.
          </motion.p>

          {/* Rotating feature pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14, padding: "12px 18px", marginBottom: 28,
              minWidth: 280, maxWidth: 380,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div key={currentFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                {React.createElement(features[currentFeature].icon, {
                  size: 20, color: features[currentFeature].color,
                })}
                <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>
                  {features[currentFeature].text}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: `0 16px 40px ${C.orange}50` }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
                color: "#fff", border: "none", borderRadius: 12,
                padding: "13px 26px", fontSize: "0.92rem", fontWeight: 700,
                cursor: "pointer", fontFamily: "inherit",
                boxShadow: `0 8px 28px ${C.orange}40`,
              }}
            >
              Talk to Our Experts
              <ArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.06)", backdropFilter: "blur(10px)",
                color: "#fff", border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 12, padding: "13px 26px",
                fontSize: "0.92rem", fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              }}
            >
              Get Free Trial
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ display: "flex", gap: 20, flexWrap: "wrap" }}
          >
            {[
              { val: "14+", label: "Years Experience" },
              { val: "Global", label: "ERP Delivery" },
              { val: "24/7", label: "Support Coverage" },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 30, padding: "7px 16px",
                }}
              >
                <CheckCircle2 size={14} color={C.orange} />
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, color: "#fff", fontSize: "0.95rem" }}>{s.val}</span>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Dashboard */}
        <div style={{ position: "relative" }}>
          {/* Glow behind card */}
          <div style={{
            position: "absolute", inset: -40,
            background: `radial-gradient(ellipse, ${C.blueM}30 0%, transparent 70%)`,
            filter: "blur(30px)", pointerEvents: "none",
          }} />
          <DashboardMockup />

          {/* Floating badge TL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            animate2={{ y: [0, -6, 0] }}
            style={{
              position: "absolute", top: -18, left: -24,
              background: "#fff", borderRadius: 12, padding: "8px 14px",
              display: "flex", alignItems: "center", gap: 8,
              boxShadow: "0 8px 28px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg, ${C.orange}, #FCD34D)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚡</div>
            <div>
              <div style={{ fontSize: 9, color: "#94A3B8", fontWeight: 600 }}>EFFICIENCY</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: C.dark, fontFamily: "'Sora', sans-serif" }}>+47%</div>
            </div>
          </motion.div>

          {/* Floating badge BR */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            style={{
              position: "absolute", bottom: -18, right: -20,
              background: "#fff", borderRadius: 12, padding: "8px 14px",
              display: "flex", alignItems: "center", gap: 8,
              boxShadow: "0 8px 28px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg, ${C.blueM}, ${C.sky})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🌐</div>
            <div>
              <div style={{ fontSize: 9, color: "#94A3B8", fontWeight: 600 }}>GLOBAL USERS</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: C.dark, fontFamily: "'Sora', sans-serif" }}>10K+</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Trust band ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{
          position: "relative", zIndex: 10,
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(10px)",
          padding: "24px 5%",
          display: "flex", justifyContent: "center",
          gap: 48, flexWrap: "wrap",
        }}
      >
        {[
          { val: "14+", label: "Years on the Market", icon: "🏆" },
          { val: "ERP Experts", label: "Team Members", icon: "👥" },
          { val: "Global", label: "Satisfaction Rate", icon: "⭐" },
          { val: "24/7", label: "Senior Specialists", icon: "🎯" },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 22 }}>{s.icon}</span>
            <div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, color: "#fff", fontSize: "1.25rem" }}>{s.val}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>{s.label}</div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      {/* <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
          color: "rgba(255,255,255,0.3)", fontSize: 11, zIndex: 10,
        }}
      >
        <span style={{ letterSpacing: "0.1em" }}>SCROLL</span>
        <ChevronDown size={16} />
      </motion.div> */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes pulse { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.3)} }
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important;padding-top:80px!important}
          .hero-grid>div:last-child{display:none}
        }
      `}</style>
    </section>
  );
};

export default TechSquareHero;