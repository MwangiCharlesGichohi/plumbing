"use client";

import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-md transition-shadow">
              4A
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:inline">4-AquaFlow</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+254712345678"
              className="flex items-center gap-2 px-4 py-2 text-blue-600 font-semibold hover:text-blue-700"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+254 712 345 678</span>
            </a>
            <button className="btn btn-primary text-sm">Book Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 py-6 space-y-4 border-t border-gray-200">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+254712345678"
                className="flex items-center gap-2 px-4 py-2 text-blue-600 font-semibold"
              >
                <Phone className="w-4 h-4" />
                +254 712 345 678
              </a>
              <button className="w-full btn btn-primary">Book Now</button>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}