import React from "react";

const advantages = [
  {
    title: "10+ Years ERP Experience",
    description: "Deep domain expertise across industries and ERP platforms.",
    icon: "⚡",
  },
  {
    title: "End-to-End Solutions",
    description: "From strategy and implementation to support and optimization.",
    icon: "🔗",
  },
  {
    title: "Fast Implementation",
    description: "Agile delivery methodology that gets you live faster.",
    icon: "🚀",
  },
  {
    title: "Client-First Mindset",
    description: "Your success is our success — we're invested in your outcomes.",
    icon: "🤝",
  },
  {
    title: "Cost-Effective & Long-Term Support",
    description: "Transparent pricing with dedicated post-go-live support.",
    icon: "💰",
  },
];

const beyondERP = [
  {
    icon: "🌐",
    title: "Web Design & Development",
    description:
      "Modern, high-performance websites and web applications built to convert visitors into customers.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description:
      "SEO, social media, and paid campaigns — data-driven strategies that grow your brand and revenue.",
  },
  {
    icon: "🎨",
    title: "Graphic Designing",
    description:
      "Brand identities, marketing materials, and digital assets that make your business unforgettable.",
  },
  {
    icon: "⚙️",
    title: "Automation Testing",
    description:
      "Robust automated test suites integrated into your CI/CD pipeline for faster, bug-free releases.",
  },
  {
    icon: "🤖",
    title: "RPA",
    description:
      "Robotic Process Automation that eliminates repetitive manual tasks and delivers ROI in weeks.",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[25vh] bg-center bg-cover flex items-center justify-center text-center"
        style={{ backgroundImage: `url('/question.jpg')` }}
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
            Our Edge
          </span>
          <h2
            className="head text-4xl md:text-6xl font-extrabold text-white mt-3"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Why Choose Us?
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-16 lg:px-24">

        {/* Section intro */}
        <div className="max-w-3xl mb-14">
          <span
            className="inline-block mb-4 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(37,99,235,0.08))",
              border: "1px solid rgba(249,115,22,0.22)",
              color: "#EA580C",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Why Suktam
          </span>
          <h3
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
          >
            Why Choose Suktam Technologies?
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
            Discover why businesses trust us to drive their digital transformation. Our expertise,
            innovation, and commitment to excellence set us apart.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Competitive Advantages */}
          <div>
            <h4
              className="text-xl font-bold mb-8"
              style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
            >
              Our Competitive Advantages
            </h4>
            <div className="space-y-6">
              {advantages.map((adv, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 group"
                >
                  {/* Arrow */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(37,99,235,0.08))",
                      border: "1px solid rgba(249,115,22,0.22)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h5
                      className="font-bold mb-1 text-base"
                      style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
                    >
                      {adv.title}
                    </h5>
                    <p style={{ color: "#64748B", fontSize: "0.92rem", lineHeight: 1.6 }}>
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Beyond ERP */}
          <div>
            <h4
              className="text-xl font-bold mb-8"
              style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
            >
              Beyond ERP — Our Full Service Suite
            </h4>
            <div className="space-y-4">
              {beyondERP.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 bg-white rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{
                      background: "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(37,99,235,0.08))",
                      border: "1px solid rgba(249,115,22,0.18)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h5
                      className="font-bold mb-1 text-sm"
                      style={{ fontFamily: "'Sora', sans-serif", color: "#0A0F1E" }}
                    >
                      {item.title}
                    </h5>
                    <p style={{ color: "#64748B", fontSize: "0.84rem", lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-16 text-white rounded-2xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1B3A7A, #2563EB)",
            boxShadow: "0 24px 60px rgba(30,64,175,0.28)",
          }}
        >
          <div
            style={{
              position: "absolute", top: -60, right: -60, width: 220, height: 220,
              background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)",
              borderRadius: "50%", pointerEvents: "none",
            }}
          />
          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Ready to Experience the Difference?
          </h3>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            Let's discuss how Suktam Technologies can transform your business — free 30-min consultation.
          </p>
          <a
            href="mailto:contact@suktamtech.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #F97316, #EA580C)",
              color: "#fff",
              fontFamily: "'Sora', sans-serif",
              boxShadow: "0 8px 24px rgba(249,115,22,0.4)",
              textDecoration: "none",
            }}
          >
            Talk to Our Experts
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;