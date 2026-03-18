import React from "react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[35vh] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/about.jpg')`,
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,15,30,0.82) 0%, rgba(27,58,122,0.75) 50%, rgba(249,115,22,0.2) 100%)",
          }}
        ></div>

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Content */}
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
          <p
            className="mt-3 text-sm md:text-base"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Driving digital transformation for businesses worldwide
          </p>
        </div>

        {/* Bottom fade into white */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          // style={{ background: "linear-gradient(to top, #fff, transparent)" }}
        ></div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        {/* First Paragraph */}
        <div className="mb-14 max-w-4xl">
          <span
            className="inline-block mb-4 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(37,99,235,0.08))",
              border: "1px solid rgba(249,115,22,0.22)",
              color: "#EA580C",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Our Story
          </span>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#475569" }}>
            We specialize in driving digital transformation for businesses of
            all sizes. With over a decade of experience in the IT industry, our
            expert team brings deep technical knowledge and a results-driven
            approach to every project. Our on-growing projects reflect our
            commitment to delivering excellence and innovation.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div
            className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2"
            style={{
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #1B3A7A, #2563EB)" }}
            ></div>
            {/* Bottom accent bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ background: "linear-gradient(90deg, #F97316, #EA580C)" }}
            ></div>
            <div className="p-8 relative z-10">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{
                  background: "linear-gradient(135deg, #F97316, #EA580C)",
                  boxShadow: "0 8px 20px rgba(249,115,22,0.35)",
                }}
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
                Our mission is simple — to help you embrace digital solutions
                that streamline operations, enhance customer experiences, and
                improve overall productivity. In fact, our clients have seen
                productivity increases of up to 50% through our tailored
                strategies and cutting-edge technologies.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2"
            style={{
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #1B3A7A, #2563EB)" }}
            ></div>
            {/* Bottom accent bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ background: "linear-gradient(90deg, #F97316, #EA580C)" }}
            ></div>
            <div className="p-8 relative z-10">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{
                  background: "linear-gradient(135deg, #1E40AF, #2563EB)",
                  boxShadow: "0 8px 20px rgba(37,99,235,0.35)",
                }}
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
                We don't just deliver services — we build long-term partnerships
                by understanding your unique challenges and providing scalable,
                efficient, and future-ready solutions. Whether you're just
                starting your digital journey or looking to optimize existing
                systems, we're here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;