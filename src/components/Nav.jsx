import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaAngleDown, FaDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOdooServicesOpen, setIsOdooServicesOpen] = useState(false);
  const [isOtherServicesOpen, setIsOtherServicesOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { name: "Odoo Migration", path: "/services/migration" },
    { name: "Odoo Customization", path: "/services/customization" },
    { name: "Odoo Integration", path: "/services/integration" },
    { name: "Odoo Web/App Development", path: "/services/development" },
    { name: "Odoo Training", path: "/services/training" },
    { name: "Support & Maintenance", path: "/services/support" },
  ];

  const otherServices = [
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Graphic Desiging", path: "/services/graphic-designing" },
    { name: "Web/App Development", path: "/services/development" },
    { name: "Automation Testing", path: "/services/automation-testing" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Odoo Implementation", path: "/odoo-implementation" },
  ];

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md bg-white" : "bg-white"
      }`}
    >
      <nav className={`transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                className="h-12 md:h-16 w-auto"
                alt="TechSquareERP Logo"
              />
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-black hover:text-sky-600 transition duration-300 ${
                    isActive ? "font-semibold text-sky-600" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Odoo Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsOdooServicesOpen(true)}
              onMouseLeave={() => setIsOdooServicesOpen(false)}
            >
              <button
                className={`flex items-center text-black hover:text-sky-600 transition duration-300 ${
                  isOdooServicesOpen ? "font-semibold text-sky-600" : ""
                }`}
              >
                Odoo Services
                <FaAngleDown className="ml-1" />
              </button>
              <div
                className={`absolute left-0 mt-1 w-64 bg-white shadow-lg z-50 transition-all duration-200 ${
                  isOdooServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-sky-500 transition duration-200"
                    onClick={() => {
                      setIsOdooServicesOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Other Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsOtherServicesOpen(true)}
              onMouseLeave={() => setIsOtherServicesOpen(false)}
            >
              <button
                className={`flex items-center text-black hover:text-sky-600 transition duration-300 ${
                  isOtherServicesOpen ? "font-semibold text-sky-600" : ""
                }`}
              >
                Other Services
                <FaAngleDown className="ml-1" />
              </button>
              <div
                className={`absolute left-0 mt-1 w-64 bg-white shadow-lg z-50 transition-all duration-200 ${
                  isOtherServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {otherServices.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-sky-500 transition duration-200"
                    onClick={() => {
                      setIsOtherServicesOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink
              to="/contact"
              className="bg-sky-800 text-white px-5 py-2 rounded hover:bg-sky-900 transition"
            >
              Talk to Our Experts
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden bg-white border-t border-gray-200`}
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-gray-700 py-2 px-2 rounded hover:text-sky-600 transition ${
                    isActive ? "text-sky-600 font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Services Dropdown (Mobile) */}
            <div>
              <button
                onClick={() =>
                  setActiveMobileDropdown((prev) =>
                    prev === "services" ? null : "services"
                  )
                }
                className="flex justify-between w-full items-center py-2 text-gray-700 hover:text-sky-600"
              >
                Odoo Services
                <FaAngleDown
                  className={`transition-transform duration-200 ${
                    activeMobileDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 overflow-hidden transition-all duration-300 space-y-2 ${
                  activeMobileDropdown === "services" ? "max-h-64" : "max-h-0"
                }`}
              >
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="block text-gray-600 hover:text-sky-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Other Services Dropdown (Mobile) */}
            <div>
              <button
                onClick={() =>
                  setActiveMobileDropdown((prev) =>
                    prev === "other-services" ? null : "other-services"
                  )
                }
                className="flex justify-between w-full items-center py-2 text-gray-700 hover:text-sky-600"
              >
                Other Services
                <FaAngleDown
                  className={`transition-transform duration-200 ${
                    activeMobileDropdown === "other-services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 overflow-hidden transition-all duration-300 space-y-2 ${
                  activeMobileDropdown === "other-services" ? "max-h-64" : "max-h-0"
                }`}
              >
                {otherServices.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="block text-gray-600 hover:text-sky-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                // handleDownloadBrochure(); <-- implement this if needed
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
            >
              <FaDownload className="mr-2" />
              Download Brochure
            </button>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-sky-800 text-white py-3 rounded hover:bg-sky-900 transition"
            >
              Talk to Our Experts
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
