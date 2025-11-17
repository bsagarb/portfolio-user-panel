import React from "react";
import { FiLinkedin, FiExternalLink } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-gray-300 border-t border-gray-800 mt-20">
      <p className="mb-2">
        Designed with passion by{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-300 text-transparent bg-clip-text font-semibold">
          Vinay Kumar Mudidana
        </span>{" "}
        © 2025
      </p>

      <p className="text-sm mb-6 text-gray-400">
        Crafted for clarity, creativity & connection.
      </p>

      <div className="flex justify-center gap-6 text-xl">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FiLinkedin />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FiExternalLink />
        </a>
      </div>
    </footer>
  );
}
