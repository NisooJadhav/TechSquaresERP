import React from "react";
import whyChooseUsData from "../data/whyChooseUsData";

const WhyChooseUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="mt-[96px] relative h-[25vh] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/question.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content */}
        <div className="relative z-20 px-6">
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white my-12">
            Why Choose Us?
          </h2>
        </div>
      </section>

      {/* Why Choose Us Content */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Makes Us Stand Out?
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Discover why businesses trust us to drive their digital
            transformation. Our expertise, innovation, and commitment to
            excellence set us apart.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:ring-4 hover:ring-sky-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-sky-800 to-sky-500 opacity-0 group-hover:opacity-80 transition-opacity"></div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors shadow-md">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 group-hover:text-gray-200 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;