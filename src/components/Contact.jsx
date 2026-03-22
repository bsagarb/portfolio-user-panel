import {React,useContext} from "react";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import { FaWhatsappSquare } from "react-icons/fa";
import { PortfolioContext } from "../context/PortfolioContext";


export default function Contact() {
    const { portfolio, loading } = useContext(PortfolioContext);
    const contactDetails=portfolio.contact;
  
  return (
    <section id="contact" className="px-6 md:px-16 py-24 text-white">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">
        Let's Build Something{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-300 text-transparent bg-clip-text">
          Meaningful
        </span>{" "}
        Together
      </h2>

      <p className="text-center text-gray-300 mb-12">
        Have a project in mind? Let's discuss how we can create something
        amazing.
      </p>

      <div className="grid md:grid-cols-4 gap-2 max-w-6xl mx-auto items-start">
        {/* LEFT SIDE - Contact Info */}
        {/* <div className="flex flex-col gap-3"> */}
          {/* Email */}
          <a
            href="mailto:vinaykumarmudidana@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >
          <div className="p-6 p2 bg-[#11121A] border border-gray-800 rounded-xl hover:border-purple-500 transition duration-300">
            <FiMail className="text-red-400 text-3xl mb-3" />
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-300">{contactDetails.email}</p>
          </div>
          </a>

          {/* Phone */}
          <a href="tel:+919381807819">
          <div className="p-6 bg-[#11121A] border border-gray-800 rounded-xl hover:border-purple-500 transition duration-300">
            <FiPhone className="text-purple-400 text-3xl mb-3" />
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-300">+91 {contactDetails.phone}</p>
          </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            >
          <div className="p-6 bg-[#11121A] border border-gray-800 rounded-xl hover:border-purple-500 transition duration-300">
            <FiLinkedin className="text-blue-600 text-3xl mb-3" />
            <h3 className="font-semibold text-lg">LinkedIn</h3>
            <p className="text-gray-300">Connect with me</p>
          </div>
          </a>
          {/* whatsapp */}
          <a
            href={`https://wa.me/91${contactDetails.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            >
           <div className="p-6 bg-[#11121A] border border-gray-800 rounded-xl hover:border-purple-500 transition duration-300">
            <FaWhatsappSquare className="text-green-400 text-3xl mb-3" />
            <h3 className="font-semibold text-lg">Whatsapp</h3>
            <p className="text-gray-300">Connect with me</p>
          </div>
          </a>
        {/* </div> */}

        {/* RIGHT SIDE - Contact Form */}
        {/* <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 bg-[#11121A] border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 bg-[#11121A] border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="p-3 bg-[#11121A] border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500"
          ></textarea>

          <button
            type="submit"
            className="mt-2 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-400 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
}
