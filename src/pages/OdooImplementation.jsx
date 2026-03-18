import React from "react";
import Odoo1 from "../components/Odoo1";
import Odoo2 from "../components/Odoo2";
import Odoo3 from "../components/Odoo3";
import Odoo4 from "../components/Odoo4";
import Odoo5 from "../components/Odoo5";

const OdooImplementation = () => {
  return (
    <>
      <section
        className="relative h-[35vh] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/odoo.jpg')`,
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
            ERP Solutions
          </span>
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white mt-3">
            Odoo Implementation
          </h2>
          <p
            className="mt-3 text-sm md:text-base"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Scalable, future-ready ERP tailored to your business
          </p>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          // style={{ background: "linear-gradient(to top, #0000080, #000000)" }}
        ></div>
      </section>

      <Odoo1 />
      <Odoo2 />
      {/* <Odoo3 /> */}
      <Odoo4 />
      <Odoo5 />
    </>
  );
};

export default OdooImplementation;