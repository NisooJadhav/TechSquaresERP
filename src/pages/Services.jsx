import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaArrowRight,
  FaCheckCircle,
  FaArrowLeft,
  FaLightbulb,
  FaCog,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import servicesData from "./odooServices.json";

const Services = () => {
  const { type } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, [type]);

  // Get service data based on the type parameter
  const serviceData = servicesData.services[type];
  console.log("serviceData", serviceData);
  // If service type doesn't exist, redirect to 404 or services page
  if (!serviceData) {
    return <Navigate to="/services" replace />;
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-sky-600 hover:text-sky-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="text-sky-600 hover:text-sky-800">
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{serviceData.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1200/600')] bg-cover bg-center"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <Link
              to="/"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition"
              data-aos="fade-right"
            >
              <FaArrowLeft className="mr-2" />
              Back to All Services
            </Link>

            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              data-aos="fade-up"
            >
              {serviceData.title}
            </h1>

            <p
              className="text-xl md:text-2xl mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {serviceData.subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105 inline-flex items-center justify-center"
              >
                Get Started
                <FaArrowRight className="ml-2" />
              </Link>
              <button
                onClick={() => setActiveTab("process")}
                className="border-2 border-white text-white hover:bg-white hover:text-sky-900 px-8 py-4 rounded-lg font-semibold transition"
              >
                View Our Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { id: "overview", label: "Overview", icon: FaLightbulb },
              { id: "features", label: "Key Features", icon: FaCog },
              { id: "process", label: "Our Process", icon: FaChartLine },
              { id: "benefits", label: "Benefits", icon: FaShieldAlt },
              { id: "faq", label: "FAQ", icon: FaQuestionCircle },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-sky-500 text-sky-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <tab.icon className="mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        {activeTab === "overview" && (
          <div className="space-y-12" data-aos="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  {serviceData.overview.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {serviceData.overview.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {serviceData.overview.fullDescription}
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Technologies We Use:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {serviceData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <img
                  src={serviceData.heroImage}
                  alt={serviceData.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Industries */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Industries We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {serviceData.industries.map((industry, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <div className="text-2xl mb-2">🏢</div>
                    <span className="text-sm font-medium text-gray-700">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Key Features Section */}
        {activeTab === "features" && (
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Key Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the powerful features that make our{" "}
                {serviceData.title.toLowerCase()} stand out from the
                competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Section */}
        {activeTab === "process" && (
          <div className="space-y-12" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven methodology ensures successful project delivery with
                minimal disruption to your business.
              </p>
            </div>

            <div className="relative">
              {/* Process Timeline */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sky-200 hidden lg:block"></div>

              <div className="space-y-8">
                {serviceData.process.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex items-start space-x-8"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Benefits Section */}
        {activeTab === "benefits" && (
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the tangible benefits your business will gain from our{" "}
                {serviceData.title.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex-shrink-0">
                    <FaCheckCircle className="text-green-500 text-2xl" />
                  </div>
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-8 rounded-xl text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6 opacity-90">
                Transform your business with our expert{" "}
                {serviceData.title.toLowerCase()}. Contact us today for a free
                consultation.
              </p>
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105 inline-flex items-center"
              >
                Contact Us Now
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to the most common questions about our{" "}
                {serviceData.title.toLowerCase()}.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {serviceData.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">
                      {faq.question}
                    </span>
                    {activeFaq === index ? (
                      <FaChevronUp className="text-sky-500 flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-sky-500 flex-shrink-0" />
                    )}
                  </button>

                  {activeFaq === index && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-12 bg-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team of experts is here to help you with any additional
                questions about our services.
              </p>
              <Link
                to="/contact"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center"
              >
                <FaUsers className="mr-2" />
                Contact Our Team
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
