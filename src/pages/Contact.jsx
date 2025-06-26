import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSend = (e) => {
    e.preventDefault();

    const { name, email, phone, comments } = form;

    if (!name || !email || !phone || !comments) {
      alert("Please fill out all fields.");
      return;
    }

    const message = `Hello TechSquareERP,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nComments: ${comments}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "918208103515";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      <section
        className="mt-[96px] relative h-[25vh] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/contact.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-20 px-6" data-aos="fade-down">
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white my-12">
            Contact Us
          </h2>
        </div>
      </section>

      <center>
        <div className="md:w-1/2 py-8 px-4" data-aos="fade-up">
          <form className="space-y-6" onSubmit={handleSend}>
            <div className="text-left">
              <label className="block mb-1 font-semibold">
                <FaUser className="inline mr-2" />
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name*"
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 focus:outline-none"
                required
              />
            </div>

            <div className="text-left">
              <label className="block mb-1 font-semibold">
                <FaEnvelope className="inline mr-2" />
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email*"
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 focus:outline-none"
                required
              />
            </div>

            <div className="text-left">
              <label className="block mb-1 font-semibold">
                <FaPhone className="inline mr-2" />
                Phone:
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 focus:outline-none"
                required
              />
            </div>

            <div className="text-left">
              <label className="block mb-1 font-semibold">
                <FaCommentDots className="inline mr-2" />
                Comments:
              </label>
              <textarea
                name="comments"
                placeholder="Comments*"
                rows="4"
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 focus:outline-none"
                required
              ></textarea>
            </div>

            <div className="flex w-full justify-center mt-6">
              <button
                type="reset"
                className="w-[10vw] cursor-pointer border border-red-500 text-red-500 px-6 py-2 hover:bg-red-500 hover:text-white transition"
              >
                Reset
              </button>
              <button
                type="submit"
                className="ml-4 w-[10vw] cursor-pointer border border-sky-500 text-sky-500 px-6 py-2 hover:bg-sky-500 hover:text-white transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
};

export default Contact;
