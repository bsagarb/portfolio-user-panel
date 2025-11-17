import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Vinay<span className="text-purple-400">Kumar</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-purple-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 px-6 pb-6 pt-2 border-t border-gray-800">
          <div className="flex flex-col gap-4 text-gray-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-purple-400 transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
