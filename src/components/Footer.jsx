import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.jpeg";

const C = {
  orange: "#F97316",
  orangeD: "#EA580C",
  blue: "#1B3A7A",
  blueM: "#1E40AF",
  blueL: "#2563EB",
  sky: "#0EA5E9",
};

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const footerLinks = {
  services: [
    { name: "Odoo Migration", path: "/services/migration" },
    { name: "ERP Implementation", path: "/odoo-implementation" },
    { name: "Customization", path: "/services/customization" },
    { name: "Data Migration", path: "/services/migration" },
    { name: "Support & Maintenance", path: "/services/support" },
    { name: "Training", path: "/services/training" },
  ],
  moreServices: [
    { name: "Web Design & Development", path: "/services/web-development" },
    { name: "Automation Testing", path: "/services/automation-testing" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Graphic Designing", path: "/services/graphic-designing" },
    { name: "RPA", path: "/services/rpa" },
  ],
  company: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Why Choose Us", path: "/why-choose-us" },
  ],
};

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/suktamtechnologies", color: "#0A66C2" },
  { icon: FaTwitter, label: "Twitter", href: "#", color: "#1DA1F2" },
  { icon: FaYoutube, label: "YouTube", href: "#", color: "#FF0000" },
  { icon: FaInstagram, label: "Instagram", href: "#", color: "#E1306C" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer style={{
      background: "#060B17",
      color: "rgba(255,255,255,0.5)",
      fontFamily: "'DM Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Top gradient divider */}
      <div style={{
        height: 3,
        background: `linear-gradient(90deg, ${C.orange}, ${C.sky}, ${C.blueL})`,
      }} />

      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "-80px", left: "10%",
        width: 400, height: 400,
        background: `radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)`,
        borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "-60px", right: "5%",
        width: 350, height: 350,
        background: `radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)`,
        borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 5% 0", position: "relative", zIndex: 2 }}>

        {/* ── CTA Banner ── */}
        <div style={{
          background: `linear-gradient(135deg, ${C.blueM}55, rgba(249,115,22,0.15))`,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 20, padding: "28px 36px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 20, marginBottom: 52,
          backdropFilter: "blur(8px)",
        }}>
          <div>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, color: "#fff", fontSize: "1.15rem", marginBottom: 6 }}>
              Ready to Transform Your Business Operations?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}>
              Talk to a certified Odoo expert today — free 30-min consultation.
            </p>
          </div>
          <a href="mailto:contact@suktamtech.com">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: `0 12px 32px ${C.orange}50` }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex", alignItems: "center", gap: 7,
                background: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
                color: "#fff", border: "none", borderRadius: 10,
                padding: "11px 24px", fontSize: "0.88rem", fontWeight: 700,
                cursor: "pointer", fontFamily: "'Sora', sans-serif",
                boxShadow: `0 6px 20px ${C.orange}35`,
                whiteSpace: "nowrap",
              }}
            >
              Talk to Our ERP Experts →
            </motion.button>
          </a>
        </div>

        {/* ── Main grid ── */}
        <div
          className="footer-main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand col */}
          <div>
            <NavLink to="/" onClick={scrollTop}>
              <img src={logo} alt="Suktam Technologies" style={{ height: 64, width: "auto", marginBottom: 16 }} />
            </NavLink>
            <p style={{ fontSize: "0.86rem", lineHeight: 1.7, color: "rgba(255,255,255,0.4)", maxWidth: 240, marginBottom: 20 }}>
              15+ years of expertise in delivering enterprise ERP solutions that drive operational excellence and business growth.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    transition: "background 0.2s, color 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${s.color}20`; e.currentTarget.style.color = s.color; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                >
                  <s.icon size={15} />
                </motion.a>
              ))}
            </div>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { Icon: FaEnvelope, text: "contact@suktamtech.com", href: "mailto:contact@suktamtech.com", color: C.sky },
              ].map((c, i) => (
                <a key={i} href={c.href}
                  style={{
                    display: "flex", alignItems: "center", gap: 9,
                    color: "rgba(255,255,255,0.45)", fontSize: "0.83rem",
                    textDecoration: "none", transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = c.color}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                >
                  <span style={{
                    width: 28, height: 28, borderRadius: 7,
                    background: `${c.color}15`, border: `1px solid ${c.color}25`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <c.Icon size={11} color={c.color} />
                  </span>
                  {c.text}
                </a>
              ))}
            </div>
          </div>

          {/* Odoo Services */}
          <FooterCol title="Odoo Services" links={footerLinks.services} />

          {/* More Services */}
          <FooterCol title="More Services" links={footerLinks.moreServices} />

          {/* Company */}
          <FooterCol title="Company" links={footerLinks.company} />
        </div>

        {/* ── Newsletter ── */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16, padding: "24px 28px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 20, marginBottom: 40,
        }}>
          <div>
            <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.97rem", marginBottom: 4 }}>
              Stay Updated with ERP Insights
            </div>
            <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.82rem" }}>
              Subscribe for Odoo tips, industry updates, and case studies.
            </div>
          </div>
          <AnimatePresence mode="wait">
            {!subscribed ? (
              <motion.div key="form" exit={{ opacity: 0 }} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 9, padding: "10px 16px",
                    color: "#fff", fontSize: "0.86rem",
                    outline: "none", width: 240,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSubscribe}
                  style={{
                    background: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
                    color: "#fff", border: "none", borderRadius: 9,
                    padding: "10px 20px", fontSize: "0.86rem", fontWeight: 700,
                    cursor: "pointer", fontFamily: "'Sora', sans-serif",
                    whiteSpace: "nowrap",
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
                  display: "flex", alignItems: "center", gap: 8,
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  borderRadius: 9, padding: "10px 18px",
                  color: "#22C55E", fontWeight: 700, fontSize: "0.86rem",
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                ✓ You're subscribed! Welcome aboard.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "20px 0 28px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", textAlign: "center", flex: "1 1 100%" }}>
            © {new Date().getFullYear()} Suktam Technologies. All rights reserved.
          </span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap');
        input::placeholder { color: rgba(255,255,255,0.28); }
        @media (max-width: 1024px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

// ── Footer link column
const FooterCol = ({ title, links }) => (
  <div>
    <h5 style={{
      fontFamily: "'Sora', sans-serif", fontWeight: 700,
      color: "#fff", fontSize: "0.88rem", marginBottom: 16,
      paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.07)",
    }}>
      {title}
    </h5>
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
      {links.map((link, i) => (
        <li key={i}>
          <NavLink
            to={link.path}
            onClick={scrollTop}
            style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s", display: "inline-flex", alignItems: "center", gap: 5 }}
            onMouseEnter={e => e.currentTarget.style.color = C.orange}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
          >
            <span style={{ color: "rgba(249,115,22,0.4)", fontSize: 10 }}>›</span>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;