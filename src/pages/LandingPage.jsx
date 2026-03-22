import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">AZ Service</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <a href="#contactus">Contact US</a>
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Build Your Portfolio in Minutes 🚀
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Create a stunning personal portfolio with your unique username. Share
          your work, skills, and experience with the world.
        </p>
        <div className="flex justify-center gap-4">
          <input
            type="text"
            placeholder="Enter username"
            className="px-4 py-2 rounded-lg text-black w-60"
          />
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Create Portfolio
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">What We Offer</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Custom URL</h4>
            <p>
              Get your own portfolio link like{" "}
              <span className="text-blue-600">domain.in/yourname</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Beautiful Templates</h4>
            <p>
              Professionally designed layouts to showcase your work and skills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Easy to Use</h4>
            <p>
              No coding required. Just add your details and your portfolio is
              ready.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16 px-8 text-center">
        <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
        <p className="max-w-3xl mx-auto text-lg">
          We help developers, designers, and professionals create stunning
          portfolios effortlessly. Our platform is fast, customizable, and
          designed to help you stand out in today’s competitive world.
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-blue-600 text-white">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Build Your Portfolio?
        </h3>
        <p className="mb-6">
          Start now and get your personal portfolio live instantly.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Create Now
        </button>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-16 px-8" id="contactus">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
          <p className="mb-10 text-gray-300">
            Have questions or need help setting up your portfolio? Reach out to
            us anytime.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Phone */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2">📞 Phone</h4>
              <p className="text-gray-300">+91 9000245681</p>
            </div>

            {/* Email */}
            {/* <div className="bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2">📧 Email</h4>
              <p className="text-gray-300">support@portify.in</p>
            </div> */}

            {/* WhatsApp */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h4 className="flex items-center gap-2 text-xl font-semibold mb-2">
                <FaWhatsappSquare className="text-green-400 text-3xl" />
                <span>WhatsApp</span>
              </h4>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white border-t">
        <p>© 2026 azservice. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
