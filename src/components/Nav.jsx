import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaAngleDown, FaDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo-2.PNG";

// ── Brand tokens
const C = {
  orange: "#F97316",
  orangeD: "#EA580C",
  blue: "#1B3A7A",
  blueM: "#1E40AF",
  blueL: "#2563EB",
  sky: "#0EA5E9",
  dark: "#0F172A",
  mid: "#64748B",
};

const serviceLinks = [
  { name: "Odoo Migration", path: "/services/migration", icon: "🔄" },
  { name: "Odoo Customization", path: "/services/customization", icon: "🛠" },
  { name: "Odoo Integration", path: "/services/integration", icon: "🔗" },
  { name: "Odoo Web/App Development", path: "/services/development", icon: "</>" },
  { name: "Odoo Training", path: "/services/training", icon: "🎓" },
  { name: "Support & Maintenance", path: "/services/support", icon: "🎧" },
];

const otherServices = [
  { name: "Web Design & Development", path: "/services/web-development", icon: "🌐" },
  { name: "Automation Testing", path: "/services/automation-testing", icon: "⚙️" },
  { name: "Digital Marketing", path: "/services/digital-marketing", icon: "📈" },
  { name: "Graphic Designing", path: "/services/graphic-designing", icon: "🎨" },
  { name: "RPA", path: "/services/rpa", icon: "🤖" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Odoo Implementation", path: "/odoo-implementation" },
];

// ── Desktop Dropdown
const DesktopDropdown = ({ label, links, isOpen, onOpen, onClose }) => (
  <div
    className="relative"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        fontSize: "0.9rem",
        fontWeight: isOpen ? 700 : 500,
        color: isOpen ? C.orange : C.dark,
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif",
        padding: "6px 2px",
        transition: "color 0.2s",
        whiteSpace: "nowrap",
      }}
    >
      {label}
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.22 }}
        style={{ display: "inline-flex", color: isOpen ? C.orange : C.mid }}
      >
        <FaAngleDown size={12} />
      </motion.span>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.97 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            left: 0,
            top: "calc(100% + 8px)",
            minWidth: 240,
            background: "#fff",
            borderRadius: 14,
            boxShadow: "0 16px 48px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
            border: "1px solid rgba(0,0,0,0.06)",
            overflow: "hidden",
            zIndex: 200,
            padding: "6px",
          }}
        >
          {/* Top accent */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg, ${C.orange}, ${C.blueL})`,
          }} />

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={onClose}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 12px",
                borderRadius: 9,
                textDecoration: "none",
                color: isActive ? C.orange : C.dark,
                fontSize: "0.875rem",
                fontWeight: isActive ? 700 : 500,
                background: isActive ? `${C.orange}0e` : "transparent",
                transition: "background 0.15s, color 0.15s",
                fontFamily: "'DM Sans', sans-serif",
              })}
              onMouseEnter={e => { e.currentTarget.style.background = `${C.orange}0a`; e.currentTarget.style.color = C.orange; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.dark; }}
            >
              <span style={{
                width: 30, height: 30, borderRadius: 8,
                background: `linear-gradient(135deg, ${C.orange}18, ${C.blueL}10)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, flexShrink: 0, fontFamily: "monospace",
              }}>
                {link.icon}
              </span>
              {link.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ── Mobile Accordion
const MobileAccordion = ({ label, links, isOpen, onToggle }) => (
  <div>
    <button
      onClick={onToggle}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "12px 0",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: isOpen ? C.orange : C.dark,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.95rem",
        fontWeight: isOpen ? 700 : 500,
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {label}
      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
        <FaAngleDown size={13} color={isOpen ? C.orange : C.mid} />
      </motion.span>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div style={{ padding: "8px 0 8px 12px", display: "flex", flexDirection: "column", gap: 2 }}>
            {links.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => ({
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "9px 12px", borderRadius: 9,
                  textDecoration: "none",
                  color: isActive ? C.orange : C.mid,
                  fontSize: "0.875rem",
                  fontWeight: isActive ? 700 : 400,
                  fontFamily: "'DM Sans', sans-serif",
                })}
              >
                <span style={{ fontSize: 14, fontFamily: "monospace" }}>{link.icon}</span>
                {link.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ── Main Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [odooOpen, setOdooOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .nav-link {
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #0F172A;
          transition: color 0.2s;
          padding: 6px 2px;
          white-space: nowrap;
        }
        .nav-link:hover { color: #F97316; }
        .nav-link.active { color: #F97316; font-weight: 700; }

        /* Responsive: show desktop links only on lg+ */
        .desktop-links { display: none; }
        @media (min-width: 1024px) {
          .desktop-links { display: flex; align-items: center; gap: 24px; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 1023px) {
          .mobile-toggle { display: flex !important; }
        }

        /* Tighter gaps on smaller desktop screens */
        @media (min-width: 1024px) and (max-width: 1180px) {
          .desktop-links { gap: 16px; }
          .nav-link { font-size: 0.82rem; }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.96)" : "#fff",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "0 1px 0 rgba(0,0,0,0.06)",
          transition: "box-shadow 0.3s, background 0.3s",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Top accent line */}
        <div style={{
          height: 3,
          background: `linear-gradient(90deg, ${C.orange}, ${C.sky}, ${C.blueL})`,
        }} />

        <nav style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: scrolled ? "8px 4%" : "12px 4%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.3s",
          gap: 12,
        }}>
          {/* Logo */}
          <NavLink
            to="/"
            onClick={scrollTop}
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}
          >
            <img
              src={logo}
              alt="Suktam Technologies Logo"
              style={{ height: scrolled ? 56 : 64, width: "auto", transition: "height 0.3s" }}
            />
          </NavLink>

          {/* Desktop links */}
          <div className="desktop-links">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={scrollTop}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              >
                {link.name}
              </NavLink>
            ))}

            <DesktopDropdown
              label="Odoo Services"
              links={serviceLinks}
              isOpen={odooOpen}
              onOpen={() => { setOdooOpen(true); setOtherOpen(false); }}
              onClose={() => setOdooOpen(false)}
            />

            <DesktopDropdown
              label="More Services"
              links={otherServices}
              isOpen={otherOpen}
              onOpen={() => { setOtherOpen(true); setOdooOpen(false); }}
              onClose={() => setOtherOpen(false)}
            />

            <a href="/suktam_odoo.pdf" style={{ flexShrink: 0 }}>
              <button
                // onClick={() => setIsOpen(false)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)",
                  color: "#16A34A", borderRadius: 10, padding: "12px",
                  fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
                  fontFamily: "'Sora', sans-serif",
                  width: "100%",
                }}
              >
                <FaDownload size={14} /> Brochure
              </button>
            </a>

            {/* CTA */}
            <a href="mailto:contact@suktamtech.com" style={{ flexShrink: 0 }}>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: `0 10px 28px ${C.orange}40` }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  background: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
                  color: "#fff", border: "none", borderRadius: 9,
                  padding: "10px 18px", fontSize: "0.85rem", fontWeight: 700,
                  cursor: "pointer", fontFamily: "'Sora', sans-serif",
                  boxShadow: `0 4px 16px ${C.orange}35`,
                  position: "relative",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{
                  position: "absolute", top: -4, right: -4,
                  width: 9, height: 9, borderRadius: "50%",
                  background: "#22C55E",
                  boxShadow: "0 0 0 2px #fff",
                }} />
                Book Free Consultation
              </motion.button>
            </a>
          </div>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: C.dark, padding: 6, borderRadius: 8,
              alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <AnimatePresence mode="wait">
              {isOpen
                ? <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}><FaTimes size={22} /></motion.span>
                : <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}><FaBars size={22} /></motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              style={{
                overflow: "hidden",
                background: "#fff",
                borderTop: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ padding: "12px 5% 20px", display: "flex", flexDirection: "column", gap: 0 }}>
                {navLinks.map(link => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => { setIsOpen(false); scrollTop(); }}
                    style={({ isActive }) => ({
                      display: "block",
                      padding: "12px 0",
                      textDecoration: "none",
                      color: isActive ? C.orange : C.dark,
                      fontSize: "0.95rem",
                      fontWeight: isActive ? 700 : 500,
                      borderBottom: "1px solid rgba(0,0,0,0.06)",
                      fontFamily: "'DM Sans', sans-serif",
                    })}
                  >
                    {link.name}
                  </NavLink>
                ))}

                <MobileAccordion
                  label="Odoo Services"
                  links={serviceLinks}
                  isOpen={mobileDropdown === "odoo"}
                  onToggle={() => setMobileDropdown(p => p === "odoo" ? null : "odoo")}
                />

                <MobileAccordion
                  label="More Services"
                  links={otherServices}
                  isOpen={mobileDropdown === "other"}
                  onToggle={() => setMobileDropdown(p => p === "other" ? null : "other")}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
                  <center>

                    <a href="/suktam_odoo.pdf" className="w-full " target="_blank" rel="noopener noreferrer">
                      <button
                        // onClick={() => setIsOpen(false)}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                          background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)",
                          color: "#16A34A", borderRadius: 10, padding: "12px",
                          fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
                          fontFamily: "'Sora', sans-serif",
                          width: "100%",
                        }}
                      >
                        <FaDownload size={14} /> Download Brochure
                      </button>
                    </a>
                  </center>

                  <a
                    href="mailto:contact@suktamtech.com"
                    style={{
                      display: "block", textAlign: "center",
                      background: `linear-gradient(135deg, ${C.orange}, ${C.orangeD})`,
                      color: "#fff", borderRadius: 10, padding: "12px",
                      fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
                      fontFamily: "'Sora', sans-serif",
                      boxShadow: `0 4px 16px ${C.orange}35`,
                    }}
                  >
                    Book Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer so content doesn't sit under fixed nav */}
      <div style={{ height: scrolled ? 63 : 71, transition: "height 0.3s" }} />
    </>
  );
};

export default Navbar;