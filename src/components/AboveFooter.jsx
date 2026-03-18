import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";

const C = {
  orange: "#F97316", orangeD: "#EA580C",
  blue: "#1B3A7A", blueM: "#1E40AF", blueL: "#2563EB",
  sky: "#0EA5E9", dark: "#0A0F1E",
};

const testimonials = [
  {
    quote: "The team at Suktam understands our business as well as we do. They can help with almost anything.",
    name: "ERP Head", company: "TAAT Global", role: "Manufacturing",
    rating: 5,
  },
  {
    quote: "Super responsive team — they not only develop but also take time to understand what your business needs.",
    name: "CEO", company: "Synergy Innovation", role: "E-commerce",
    rating: 5,
  },
  {
    quote: "A very reliable partner. They keep the dates, are open to changes, and understand the business logic.",
    name: "VP Products", company: "Indasoge SpA", role: "IT Services",
    rating: 5,
  },
];

const TestimonialCard = ({ t, i, active }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.12 }}
    style={{
      background: "rgba(255,255,255,0.06)",
      border: `1px solid ${active ? "rgba(249,115,22,0.35)" : "rgba(255,255,255,0.08)"}`,
      borderRadius: 16, padding: "22px 22px 18px",
      transition: "border-color 0.3s",
    }}
  >
    {/* Stars */}
    <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
      {Array.from({ length: t.rating }).map((_, i) => (
        <Star key={i} size={12} fill={C.orange} color={C.orange} />
      ))}
    </div>
    <p style={{
      color: "rgba(255,255,255,0.75)", fontSize: "0.88rem",
      lineHeight: 1.65, marginBottom: 14, fontStyle: "italic",
    }}>
      "{t.quote}"
    </p>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: 34, height: 34, borderRadius: "50%",
        background: `linear-gradient(135deg, ${C.orange}, ${C.blueL})`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff", fontWeight: 800, fontSize: 13, flexShrink: 0,
      }}>
        {t.name[0]}
      </div>
      <div>
        <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.82rem", fontFamily: "'Sora', sans-serif" }}>
          {t.name} · {t.company}
        </div>
        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem" }}>{t.role}</div>
      </div>
    </div>
  </motion.div>
);

const AboveFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section ref={ref} style={{
      position: "relative", overflow: "hidden",
      background: C.dark,
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* ── Animated gradient mesh ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: "10%", left: "5%",
            width: 500, height: 500,
            background: `radial-gradient(circle, ${C.blueM}30 0%, transparent 70%)`,
            borderRadius: "50%", filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            position: "absolute", bottom: "5%", right: "10%",
            width: 400, height: 400,
            background: `radial-gradient(circle, ${C.orange}25 0%, transparent 70%)`,
            borderRadius: "50%", filter: "blur(50px)",
          }}
        />
      </div>

      {/* ── Diagonal divider top ── */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${C.orange}, ${C.sky}, ${C.blueL})`,
      }} />

      {/* ── CTA Section ── */}
      <div style={{ position: "relative", zIndex: 2, padding: "80px 5% 60px", maxWidth: 1280, margin: "0 auto" }}>

        {/* Split layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 72 }}
          className="cta-grid">

          {/* Left text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-block",
                background: `rgba(249,115,22,0.12)`, border: "1px solid rgba(249,115,22,0.25)",
                color: C.orange, fontWeight: 700, fontSize: "0.72rem",
                padding: "4px 14px", borderRadius: 20, marginBottom: 16,
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}
            >
              Ready to Transform?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Sora', sans-serif", fontWeight: 800,
                fontSize: "clamp(1.8rem, 3vw, 2.7rem)", color: "#fff",
                lineHeight: 1.15, marginBottom: 18,
              }}
            >
              Ready to Transform<br />
              <span style={{
                background: `linear-gradient(135deg, ${C.orange} 0%, #FCD34D 50%, ${C.sky} 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Your Business Operations?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
              style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 440, marginBottom: 32 }}
            >
              Whether you're planning a new Odoo ERP implementation, migrating legacy systems,
              or optimizing workflows — Suktam Technologies is your partner in designing,
              implementing, and scaling ERP solutions that deliver measurable business impact.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: `0 16px 40px ${C.orange}55` }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
                  color: "#fff", border: "none", borderRadius: 12,
                  padding: "13px 26px", fontSize: "0.92rem", fontWeight: 700,
                  cursor: "pointer", fontFamily: "'Sora', sans-serif",
                  boxShadow: `0 8px 24px ${C.orange}40`, position: "relative",
                }}
              >
                <span style={{
                  position: "absolute", top: -6, right: -6,
                  width: 12, height: 12, borderRadius: "50%",
                  background: "#22C55E", boxShadow: "0 0 0 2px #0A0F1E",
                }}>
                  <motion.span
                    animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    style={{
                      position: "absolute", inset: 0, borderRadius: "50%",
                      background: "#22C55E",
                    }}
                  />
                </span>
                Talk to Our ERP Experts
                <ArrowRight size={15} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)",
                  color: "#fff", border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 12, padding: "13px 24px", fontSize: "0.92rem", fontWeight: 600,
                  cursor: "pointer", fontFamily: "inherit",
                }}
              >
                <MessageCircle size={16} />
                Schedule a Demo
              </motion.button>
            </motion.div>

            {/* Trust micro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              style={{ display: "flex", gap: 20, marginTop: 28, flexWrap: "wrap" }}
            >
              {["No credit card required", "Free 30-min consultation", "24/7 support included"].map((t, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 6,
                  color: "rgba(255,255,255,0.4)", fontSize: "0.78rem",
                }}>
                  <span style={{ color: "#22C55E", fontWeight: 700 }}>✓</span> {t}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
              Client Success Stories
            </div>
            {testimonials.map((t, i) => <TestimonialCard key={i} t={t} i={i} active={i === 1} />)}
          </motion.div>
        </div>

        {/* ── Stats banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            background: `linear-gradient(135deg, ${C.blueM}80, ${C.blue}80)`,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 20, padding: "30px 40px",
            display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24,
            backdropFilter: "blur(10px)",
          }}
        >
          {[
            { val: "14+", label: "Years Experience", icon: "🏆" },
            { val: "Global", label: "Client Base", icon: "🌏" },
            { val: "ERP", label: "Implementation Experts", icon: "🤝" },
            { val: "24/7", label: "Support Coverage", icon: "🛡" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              style={{ textAlign: "center" }}
            >
              <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
              <div style={{
                fontFamily: "'Sora', sans-serif", fontWeight: 900,
                fontSize: "2rem", color: "#fff",
                background: i === 0
                  ? `linear-gradient(135deg, ${C.orange}, #FCD34D)`
                  : i === 1 ? `linear-gradient(135deg, ${C.sky}, #6EE7F7)`
                  : i === 2 ? `linear-gradient(135deg, #A855F7, #C084FC)`
                  : `linear-gradient(135deg, #10B981, #34D399)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                {s.val}
              </div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", marginTop: 2 }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Newsletter ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 48, textAlign: "center",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", marginBottom: 14, letterSpacing: "0.03em" }}>
            Stay updated with ERP insights & Odoo updates
          </p>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                exit={{ opacity: 0, scale: 0.95 }}
                style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 10, padding: "11px 18px", color: "#fff", fontSize: "0.88rem",
                    outline: "none", width: 280, fontFamily: "inherit",
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => email && setSubmitted(true)}
                  style={{
                    background: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
                    color: "#fff", border: "none", borderRadius: 10,
                    padding: "11px 22px", fontSize: "0.88rem", fontWeight: 700,
                    cursor: "pointer", fontFamily: "'Sora', sans-serif",
                  }}
                >
                  Subscribe →
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)",
                  borderRadius: 10, padding: "11px 22px",
                  color: "#22C55E", fontWeight: 700, fontSize: "0.9rem",
                }}
              >
                ✓ You're subscribed! Welcome to the Suktam community.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800;900&family=DM+Sans:wght@400;500&display=swap');
        @media(max-width:860px){.cta-grid{grid-template-columns:1fr!important}}
        input::placeholder{color:rgba(255,255,255,0.3)}
      `}</style>
    </section>
  );
};

export default AboveFooter;