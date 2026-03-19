import React from "react";

const About = () => {
  const expertTeam = [
    "ERP Consultants",
    "Technical Architects",
    "Developers & QA Experts",
    "Business Analysts",
    "Functional Consultants",
    "DevOps Engineers",
    "SME Accounting",
  ];

  const expertise = [
    "Strong Odoo ERP ecosystem knowledge",
    "End-to-end implementation capability",
    "Customization & integration specialists",
    "Agile delivery methodology",
  ];

  const globalDelivery = [
    "India-based delivery center",
    "Serving USA & Canada",
    "UK & Middle East clients",
    "24/7 support coverage",
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[35vh] bg-center bg-cover flex items-center justify-center text-center"
        style={{ backgroundImage: `url('/about.jpg')` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,15,30,0.82) 0%, rgba(27,58,122,0.75) 50%, rgba(249,115,22,0.2) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative z-20 px-6">
          <span
            className="inline-block mb-4 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full"
            style={{
              background: "rgba(249,115,22,0.15)",
              border: "1px solid rgba(249,115,22,0.35)",
              color: "#F97316",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Who We Are
          </span>
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white mt-3">
            About Us
          </h2>
          <p className="mt-3 text-sm md:text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
            Driving digital transformation for businesses worldwide
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 md:px-16 lg:px-24">

        {/* Our Story */}
        <div className="mb-14 max-w-8xl">
          <span
            className="inline-block mb-4 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(37,99,235,0.08))",
              border: "1px solid rgba(249,115,22,0.22)",
              color: "#EA580C",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Our Story
          </span>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#475569" }}>
            Suktam Technologies is a dynamic startup powered by seasoned ERP professionals with over{" "}
            <strong style={{ color: "#0A0F1E" }}>14+ years of hands-on industry experience</strong>. We
            combine deep technical expertise with a client-first mindset to deliver transformative ERP
            solutions globally.
          </p>
        </div>

        {/* Info Cards — Our Expert Team & Our Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Our Expert Team */}
          <div
            className="bg-white rounded-2xl p-8"
            style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #F97316, #EA580C)", boxShadow: "0 6px 16px rgba(249,115,22,0.3)" }}
              >
                👥
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
              >
                Our Expert Team
              </h3>
            </div>
            <ul className="space-y-2">
              {expertTeam.map((item, i) => (
                <li key={i} className="flex items-center gap-3" style={{ color: "#475569", fontSize: "0.95rem" }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)" }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <circle cx="4" cy="4" r="3" fill="#F97316" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Expertise */}
          <div
            className="bg-white rounded-2xl p-8"
            style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #1E40AF, #2563EB)", boxShadow: "0 6px 16px rgba(37,99,235,0.3)" }}
              >
                🎯
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
              >
                Our Expertise
              </h3>
            </div>
            <ul className="space-y-2">
              {expertise.map((item, i) => (
                <li key={i} className="flex items-center gap-3" style={{ color: "#475569", fontSize: "0.95rem" }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.25)" }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <circle cx="4" cy="4" r="3" fill="#2563EB" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global Delivery */}
        <div
          className="bg-white rounded-2xl p-8 mb-14"
          style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #0EA5E9, #2563EB)", boxShadow: "0 6px 16px rgba(14,165,233,0.3)" }}
            >
              🌐
            </div>
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
            >
              Global Delivery
            </h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {globalDelivery.map((item, i) => (
              <li key={i} className="flex items-center gap-3" style={{ color: "#475569", fontSize: "0.95rem" }}>
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.25)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="3" fill="#0EA5E9" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Mission & Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div
            className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2"
            style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #1B3A7A, #2563EB)" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ background: "linear-gradient(90deg, #F97316, #EA580C)" }}
            />
            <div className="p-8 relative z-10">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: "linear-gradient(135deg, #F97316, #EA580C)", boxShadow: "0 8px 20px rgba(249,115,22,0.35)" }}
              >
                🎯
              </div>
              <h3
                className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-white"
                style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
              >
                Our Mission
              </h3>
              <p
                className="leading-relaxed transition-colors duration-300 group-hover:text-blue-100"
                style={{ color: "#64748B", fontSize: "0.95rem" }}
              >
                Our mission is simple — to help you embrace digital solutions that streamline operations,
                enhance customer experiences, and improve overall productivity. In fact, our clients have
                seen productivity increases of up to 50% through our tailored strategies and cutting-edge
                technologies.
              </p>
            </div>
          </div>

          {/* Building Partnerships */}
          <div
            className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2"
            style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #1B3A7A, #2563EB)" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ background: "linear-gradient(90deg, #F97316, #EA580C)" }}
            />
            <div className="p-8 relative z-10">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: "linear-gradient(135deg, #1E40AF, #2563EB)", boxShadow: "0 8px 20px rgba(37,99,235,0.35)" }}
              >
                🤝
              </div>
              <h3
                className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-white"
                style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
              >
                Building Partnerships
              </h3>
              <p
                className="leading-relaxed transition-colors duration-300 group-hover:text-blue-100"
                style={{ color: "#64748B", fontSize: "0.95rem" }}
              >
                We don't just deliver services — we build long-term partnerships by understanding your
                unique challenges and providing scalable, efficient, and future-ready solutions. Whether
                you're just starting your digital journey or looking to optimize existing systems, we're
                here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;