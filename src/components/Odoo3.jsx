import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import odooLogo from "/odoo-2.avif";

const Odoo3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Text */}
        <div className="lg:w-2/3" data-aos="fade-right">
          <h2 className="head text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose an Odoo Official Partner?
          </h2>

          <p className="text-gray-700 mb-4">
            Successful Odoo implementation requires the right strategy,
            technical expertise, and industry understanding. Partnering with an
            official Odoo Partner ensures you work with certified professionals
            who bring proven experience in delivering scalable and reliable ERP
            solutions across diverse business domains.
          </p>

          <p className="text-gray-700">
            While initial costs may seem higher, official partners deliver
            long-term value through structured implementation, reduced risks,
            and optimized system performance. Their expertise ensures smoother
            deployment, better customization, and an ERP system that truly
            supports your business growth.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/3" data-aos="fade-left">
          <img
            src={odooLogo}
            alt="Odoo Logo"
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Odoo3;