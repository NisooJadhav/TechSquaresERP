import React from "react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="mt-[96px] relative h-[25vh] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/about.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-transparent"></div>

        {/* Content */}
        <div className="relative z-20 px-6">
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white my-12">
            About Us
          </h2>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        {/* First Paragraph */}
        <div className="mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
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
          <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:ring-4 hover:ring-sky-500">
            <div className="absolute inset-0 bg-gradient-to-t from-sky-800 to-sky-500 opacity-0 group-hover:opacity-80 transition-opacity"></div>
            <div className="p-6 relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors shadow-md">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600 group-hover:text-gray-200 transition-colors">
                Our mission is simple — to help you embrace digital solutions
                that streamline operations, enhance customer experiences, and
                improve overall productivity. In fact, our clients have seen
                productivity increases of up to 50% through our tailored
                strategies and cutting-edge technologies.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:ring-4 hover:ring-sky-500">
            <div className="absolute inset-0 bg-gradient-to-t from-sky-800 to-sky-500 opacity-0 group-hover:opacity-80 transition-opacity"></div>
            <div className="p-6 relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors shadow-md">
                Building Partnerships
              </h3>
              <p className="mt-4 text-gray-600 group-hover:text-gray-200 transition-colors">
                We don’t just deliver services — we build long-term partnerships
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