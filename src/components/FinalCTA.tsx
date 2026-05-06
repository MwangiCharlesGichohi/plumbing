"use client";

import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-800 to-blue-700 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">Need Help Right Now?</h3>
            <p className="text-lg text-blue-100">Get a transparent quote or speak to a certified plumber — available 24/7.</p>
          </div>

          <div className="flex-shrink-0 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-amber-400 text-gray-900 rounded-lg font-bold shadow-lg"
            >
              Get a Quote
              <ArrowRight className="ml-3 w-5 h-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/254743239214"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-white/20 rounded-lg text-white bg-white/5"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
