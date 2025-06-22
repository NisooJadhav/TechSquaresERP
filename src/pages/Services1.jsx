// import React, { useState, useEffect } from "react";
// import {
//   FaCheckCircle,
//   FaCog,
//   FaDatabase,
//   FaCode,
//   FaGraduationCap,
//   FaHeadset,
//   FaRocket,
//   FaPalette,
//   FaGlobe,
//   FaRobot,
//   FaArrowRight,
//   FaUsers,
//   FaClock,
//   FaShieldAlt,
// } from "react-icons/fa";

// const Services1 = () => {
//   const [activeService, setActiveService] = useState(null);

//   useEffect(() => {
//     // Initialize AOS if available
//     if (typeof AOS !== "undefined") {
//       AOS.init({ duration: 1000 });
//     }
//   }, []);

//   const odooServices = [
//     {
//       id: "migration",
//       title: "Odoo Migration",
//       icon: <FaDatabase className="text-4xl text-sky-600" />,
//       description:
//         "Seamlessly upgrade to the latest Odoo version or migrate from legacy ERP systems with minimal downtime.",
//       features: [
//         "Module Migration & Compatibility Assessment",
//         "Data Migration with Integrity Validation",
//         "Legacy ERP to Odoo Migration",
//         "Migration Testing & Quality Assurance",
//         "Post-Migration Support & Monitoring",
//       ],
//       benefits: [
//         "Access to New Features",
//         "Enhanced Security Measures",
//         "Improved Performance & Speed",
//         "Bug Fixes & Increased Stability",
//         "Streamlined Integration Capabilities",
//       ],
//     },
//     {
//       id: "customization",
//       title: "Odoo Customization",
//       icon: <FaCog className="text-4xl text-sky-600" />,
//       description:
//         "Tailor Odoo ERP to match your unique business processes and requirements perfectly.",
//       features: [
//         "Custom Module Development",
//         "Workflow Automation",
//         "User Interface Customization",
//         "Business Process Optimization",
//         "Custom Reports & Dashboards",
//       ],
//       benefits: [
//         "Enhanced User Experience",
//         "Reduced Training Time",
//         "Improved Operational Efficiency",
//         "Better Data Visibility",
//         "Streamlined Business Processes",
//       ],
//     },
//     {
//       id: "integration",
//       title: "Odoo Integration",
//       icon: <FaCode className="text-4xl text-sky-600" />,
//       description:
//         "Connect Odoo with third-party applications and systems for seamless data flow.",
//       features: [
//         "Third-party API Integration",
//         "E-commerce Platform Integration",
//         "Payment Gateway Integration",
//         "CRM & Marketing Tool Integration",
//         "Real-time Data Synchronization",
//       ],
//       benefits: [
//         "Centralized Data Management",
//         "Reduced Manual Data Entry",
//         "Improved Data Accuracy",
//         "Enhanced Productivity",
//         "Better Business Intelligence",
//       ],
//     },
//     {
//       id: "development",
//       title: "Odoo Web/App Development",
//       icon: <FaGlobe className="text-4xl text-sky-600" />,
//       description:
//         "Build custom web applications and mobile apps integrated with your Odoo system.",
//       features: [
//         "Custom Web Application Development",
//         "Mobile App Development",
//         "Progressive Web Apps (PWA)",
//         "API Development & Documentation",
//         "User Portal Development",
//       ],
//       benefits: [
//         "Extended Functionality",
//         "Mobile Accessibility",
//         "Enhanced User Engagement",
//         "Scalable Solutions",
//         "Modern User Experience",
//       ],
//     },
//     {
//       id: "training",
//       title: "Odoo Training",
//       icon: <FaGraduationCap className="text-4xl text-sky-600" />,
//       description:
//         "Comprehensive training programs to maximize your team's productivity with Odoo.",
//       features: [
//         "End-user Training Programs",
//         "Administrator Training",
//         "Developer Training",
//         "Customized Training Modules",
//         "Ongoing Learning Support",
//       ],
//       benefits: [
//         "Faster User Adoption",
//         "Reduced Support Requests",
//         "Improved System Utilization",
//         "Enhanced Team Productivity",
//         "Better ROI on Odoo Investment",
//       ],
//     },
//     {
//       id: "support",
//       title: "Support & Maintenance",
//       icon: <FaHeadset className="text-4xl text-sky-600" />,
//       description:
//         "24/7 technical support and maintenance services to keep your Odoo system running smoothly.",
//       features: [
//         "24/7 Technical Support",
//         "System Monitoring & Maintenance",
//         "Regular Updates & Patches",
//         "Performance Optimization",
//         "Backup & Security Management",
//       ],
//       benefits: [
//         "Minimal Downtime",
//         "Enhanced Security",
//         "Optimal Performance",
//         "Peace of Mind",
//         "Continuous Improvement",
//       ],
//     },
//   ];

//   const otherServices = [
//     {
//       id: "digital-marketing",
//       title: "Digital Marketing",
//       icon: <FaRocket className="text-4xl text-green-600" />,
//       description:
//         "Comprehensive digital marketing solutions to boost your online presence and drive growth.",
//       features: [
//         "Search Engine Optimization (SEO)",
//         "Pay-Per-Click (PPC) Advertising",
//         "Social Media Marketing",
//         "Content Marketing & Strategy",
//         "Email Marketing Campaigns",
//         "Marketing Analytics & Reporting",
//       ],
//       benefits: [
//         "Increased Online Visibility",
//         "Higher Lead Generation",
//         "Better Brand Recognition",
//         "Improved ROI",
//         "Data-Driven Insights",
//       ],
//     },
//     {
//       id: "graphic-designing",
//       title: "Graphic Designing",
//       icon: <FaPalette className="text-4xl text-green-600" />,
//       description:
//         "Creative graphic design services to enhance your brand identity and visual communication.",
//       features: [
//         "Logo Design & Branding",
//         "Marketing Collateral Design",
//         "Web & Mobile UI/UX Design",
//         "Packaging Design",
//         "Print Design Services",
//         "Brand Identity Development",
//       ],
//       benefits: [
//         "Professional Brand Image",
//         "Enhanced Visual Appeal",
//         "Better Customer Engagement",
//         "Consistent Brand Identity",
//         "Increased Market Impact",
//       ],
//     },
//     {
//       id: "web-app-development",
//       title: "Web/App Development",
//       icon: <FaGlobe className="text-4xl text-green-600" />,
//       description:
//         "Custom web and mobile application development solutions for your business needs.",
//       features: [
//         "Responsive Web Development",
//         "Mobile App Development (iOS/Android)",
//         "Progressive Web Applications",
//         "E-commerce Development",
//         "Custom Software Solutions",
//         "API Development & Integration",
//       ],
//       benefits: [
//         "Enhanced Digital Presence",
//         "Improved Customer Experience",
//         "Increased Business Efficiency",
//         "Scalable Solutions",
//         "Competitive Advantage",
//       ],
//     },
//     {
//       id: "automation-testing",
//       title: "Automation Testing",
//       icon: <FaRobot className="text-4xl text-green-600" />,
//       description:
//         "Comprehensive automation testing services to ensure software quality and reliability.",
//       features: [
//         "Test Strategy & Planning",
//         "Automated Test Script Development",
//         "Continuous Integration Testing",
//         "Performance Testing",
//         "API Testing Automation",
//         "Test Reporting & Analytics",
//       ],
//       benefits: [
//         "Improved Software Quality",
//         "Faster Time to Market",
//         "Reduced Testing Costs",
//         "Enhanced Test Coverage",
//         "Reliable Software Performance",
//       ],
//     },
//   ];

//   const ServiceCard = ({ service, category }) => (
//     <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
//       <div className="p-8">
//         <div className="flex items-center justify-center mb-6">
//           {service.icon}
//         </div>
//         <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//           {service.title}
//         </h3>
//         <p className="text-gray-600 mb-6 text-center leading-relaxed">
//           {service.description}
//         </p>

//         <div className="mb-6">
//           <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
//             <FaCheckCircle className="text-green-500 mr-2" />
//             Key Features
//           </h4>
//           <ul className="space-y-2">
//             {service.features.slice(0, 3).map((feature, index) => (
//               <li key={index} className="flex items-start">
//                 <FaArrowRight className="text-sky-500 mt-1 mr-2 text-sm" />
//                 <span className="text-gray-600 text-sm">{feature}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <button
//           onClick={() =>
//             setActiveService(activeService === service.id ? null : service.id)
//           }
//           className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
//             category === "odoo"
//               ? "bg-sky-600 hover:bg-sky-700 text-white"
//               : "bg-green-600 hover:bg-green-700 text-white"
//           }`}
//         >
//           {activeService === service.id ? "Show Less" : "Learn More"}
//         </button>

//         {activeService === service.id && (
//           <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
//             <div className="grid md:grid-cols-2 gap-4">
//               <div>
//                 <h5 className="font-semibold text-gray-800 mb-3">
//                   All Features:
//                 </h5>
//                 <ul className="space-y-1">
//                   {service.features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <FaCheckCircle className="text-green-500 mt-1 mr-2 text-xs" />
//                       <span className="text-gray-600 text-sm">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h5 className="font-semibold text-gray-800 mb-3">Benefits:</h5>
//                 <ul className="space-y-1">
//                   {service.benefits.map((benefit, index) => (
//                     <li key={index} className="flex items-start">
//                       <FaCheckCircle className="text-blue-500 mt-1 mr-2 text-xs" />
//                       <span className="text-gray-600 text-sm">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section
//         className="mt-[96px] relative h-[40vh] bg-center bg-cover flex items-center justify-center text-center"
//         style={{
//           backgroundImage: `url('/services.jpg')`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black/70"></div>
//         <div className="relative z-20 px-6 max-w-4xl">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
//             Our Services
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
//             Comprehensive solutions to transform your business with cutting-edge
//             technology and expert guidance
//           </p>
//           <div className="flex flex-wrap justify-center gap-8 text-white">
//             <div className="flex items-center">
//               <FaUsers className="mr-2 text-sky-400" />
//               <span>Expert Team</span>
//             </div>
//             <div className="flex items-center">
//               <FaClock className="mr-2 text-sky-400" />
//               <span>24/7 Support</span>
//             </div>
//             <div className="flex items-center">
//               <FaShieldAlt className="mr-2 text-sky-400" />
//               <span>Secure Solutions</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Odoo Services Section */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//               Odoo Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Our Odoo experts guarantee flawless migration while implementing
//               security measures and ensuring minimal disruptions to your
//               business operations. From implementation to ongoing support, we
//               provide comprehensive Odoo solutions.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
//             {odooServices.map((service) => (
//               <ServiceCard key={service.id} service={service} category="odoo" />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Other Services Section */}
//       <section className="py-16 px-4 bg-gray-100">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//               Additional Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxing">
//               Beyond Odoo, we offer a complete suite of digital services to help
//               your business thrive in the modern marketplace.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {otherServices.map((service) => (
//               <ServiceCard
//                 key={service.id}
//                 service={service}
//                 category="other"
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-blue-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-6">
//               Why Choose TechSquareERP?
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We combine technical expertise with business acumen to deliver
//               solutions that drive real results.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center p-8 bg-white rounded-lg shadow-lg">
//               <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaUsers className="text-sky-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 Expert Team
//               </h3>
//               <p className="text-gray-600">
//                 Experienced professionals with deep knowledge in Odoo and modern
//                 technologies.
//               </p>
//             </div>

//             <div className="text-center p-8 bg-white rounded-lg shadow-lg">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaClock className="text-green-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 Timely Delivery
//               </h3>
//               <p className="text-gray-600">
//                 Committed to delivering projects on time without compromising on
//                 quality.
//               </p>
//             </div>

//             <div className="text-center p-8 bg-white rounded-lg shadow-lg">
//               <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaShieldAlt className="text-purple-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 Ongoing Support
//               </h3>
//               <p className="text-gray-600">
//                 Comprehensive post-implementation support to ensure your
//                 success.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 bg-gradient-to-r from-sky-600 to-blue-700">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Transform Your Business?
//           </h2>
//           <p className="text-xl text-sky-100 mb-8 leading-relaxed">
//             Let's discuss how our services can help you achieve your business
//             goals and drive growth.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
//               Get Free Consultation
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300">
//               View Our Portfolio
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services1;
