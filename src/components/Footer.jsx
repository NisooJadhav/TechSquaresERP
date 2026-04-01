import React, { useState } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
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
  company: [
    { name: "Home", path: "/" },
    { name: "Web Development", path: "/web-development" },
    { name: "UI/UX", path: "/ui-ux-design" },
    { name: "Process", path: "/process" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About Us", path: "/about" },
  ],
  odooServices: [
    { name: "Odoo Migration", path: "/services/migration" },
    { name: "Odoo Customization", path: "/services/customization" },
    { name: "Odoo Integration", path: "/services/integration" },
    { name: "Odoo Web/App Development", path: "/services/development" },
    { name: "Odoo Training", path: "/services/training" },
    { name: "Support & Maintenance", path: "/services/support" },
  ],
  otherServices: [
    { name: "Web Development", path: "/web-development" },
    { name: "Mobile App Development", path: "/mobile-app-development" },
    { name: "UI/UX Design", path: "/ui-ux-design" },
    { name: "Graphic Design", path: "/graphic-design" },
  ],
};

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/suktamtechnologies",
    color: "#0A66C2",
  },
  { icon: FaTwitter, label: "Twitter", href: "#", color: "#1DA1F2" },
  { icon: FaYoutube, label: "YouTube", href: "#", color: "#FF0000" },
  { icon: FaInstagram, label: "Instagram", href: "#", color: "#E1306C" },
];

const FooterCol = ({ title, links }) => (
  <div>
    <h5
      style={{
        fontFamily: "'Sora', sans-serif",
        fontWeight: 700,
        color: "#fff",
        fontSize: "0.88rem",
        marginBottom: 16,
        paddingBottom: 10,
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {title}
    </h5>

    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 9,
      }}
    >
      {links.map((link, i) => (
        <li key={i}>
          <NavLink
            to={link.path}
            onClick={scrollTop}
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.82rem",
              textDecoration: "none",
              transition: "color 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.orange)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
            }
          >
            <span style={{ color: "rgba(249,115,22,0.4)", fontSize: 10 }}>›</span>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer
      style={{
        background: "#060B17",
        color: "rgba(255,255,255,0.5)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${C.orange}, ${C.sky}, ${C.blueL})`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "5%",
          width: 350,
          height: 350,
          background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "60px 5% 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* CTA Banner */}
        <div
          style={{
            background: `linear-gradient(135deg, ${C.blueM}55, rgba(249,115,22,0.15))`,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "28px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 52,
            backdropFilter: "blur(8px)",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                color: "#fff",
                fontSize: "1.15rem",
                marginBottom: 6,
              }}
            >
              Ready to Transform Your Business?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}>
              Talk to our experts today — free 30-min consultation, no commitment.
            </p>
          </div>
          <a href="mailto:contact@suktamtech.com">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: `0 12px 32px ${C.orange}50` }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                background: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "11px 24px",
                fontSize: "0.88rem",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'Sora', sans-serif",
                boxShadow: `0 6px 20px ${C.orange}35`,
                whiteSpace: "nowrap",
              }}
            >
              Book Free Consultation →
            </motion.button>
          </a>
        </div>

        {/* Main grid: Brand | Company | Odoo Services | Other Services */}
        <div
          className="footer-main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand col */}
          <div>
            <NavLink to="/" onClick={scrollTop}>
              <img
                src={logo}
                alt="Suktam Technologies"
                style={{ height: 64, width: "auto", marginBottom: 16 }}
              />
            </NavLink>

            <p
              style={{
                fontSize: "0.86rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.4)",
                maxWidth: 260,
                marginBottom: 20,
              }}
            >
              Delivering tailored technology solutions — from Odoo implementations
              to web development and digital transformation — that help businesses
              grow smarter.
            </p>

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
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    transition: "background 0.2s, color 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${s.color}20`;
                    e.currentTarget.style.color = s.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <s.icon size={15} />
                </motion.a>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="mailto:contact@suktamtech.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.83rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.sky)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                }
              >
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 7,
                    background: `${C.sky}15`,
                    border: `1px solid ${C.sky}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaEnvelope size={11} color={C.sky} />
                </span>
                contact@suktamtech.com
              </a>
            </div>
          </div>

          {/* Company col first */}
          <FooterCol title="Company" links={footerLinks.company} />

          {/* Odoo Services col */}
          <FooterCol title="Odoo Services" links={footerLinks.odooServices} />

          {/* Other Services col */}
          <FooterCol title="Other Services" links={footerLinks.otherServices} />
        </div>

        {/* Newsletter */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 16,
            padding: "24px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                color: "#fff",
                fontSize: "0.97rem",
                marginBottom: 4,
              }}
            >
              Stay Ahead with Tech Insights
            </div>
            <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.82rem" }}>
              Subscribe for tips, case studies, and industry updates — no spam.
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!subscribed ? (
              <motion.div
                key="form"
                exit={{ opacity: 0 }}
                style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 9,
                    padding: "10px 16px",
                    color: "#fff",
                    fontSize: "0.86rem",
                    outline: "none",
                    width: 240,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSubscribe}
                  style={{
                    background: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
                    color: "#fff",
                    border: "none",
                    borderRadius: 9,
                    padding: "10px 20px",
                    fontSize: "0.86rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "'Sora', sans-serif",
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
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  borderRadius: 9,
                  padding: "10px 18px",
                  color: "#22C55E",
                  fontWeight: 700,
                  fontSize: "0.86rem",
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                ✓ You're subscribed! Welcome aboard.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "20px 0 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.3)",
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} Suktam Technologies. All rights reserved.
          </span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap');
        input::placeholder { color: rgba(255,255,255,0.28); }

        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 560px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;