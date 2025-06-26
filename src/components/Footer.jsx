import React from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "/logo.jpg"; // Update if stored elsewhere

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <img src={logo} alt="TechSquareERP Logo" className="h-12 mb-4" />
          <p className="text-sm">
            Transforming Businesses with Smart ERP Solutions
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-white transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-white transition">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-white transition">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/why-choose-us"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-white transition"
              >
                Why Choose Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" />
              <a href="tel:+918208103515" className="hover:underline">
                +91 82081 03515
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope className="text-sky-400" /> contact@techsquareerp.com
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-sky-500" />
              <a
                href="https://www.linkedin.com/company/tech-square-erp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / CTA (optional) */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Let’s Talk</h4>
          <p className="text-sm mb-4">
            Looking for ERP solutions tailored to your business?
          </p>
          <NavLink
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block bg-sky-700 hover:bg-sky-800 text-white px-5 py-2 rounded transition"
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      <div className="mt-10 border-t border-white pt-4 text-center text-sm text-white">
        © {new Date().getFullYear()} TechSquareERP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
