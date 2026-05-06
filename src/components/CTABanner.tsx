"use client";

import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Fix Your Plumbing?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Don't wait for a small issue to become a major problem. Contact us today for a free consultation and transparent quote.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-amber-300 shadow-2xl transition-all duration-200 group"
            >
              <MessageSquare className="w-5 h-5 mr-3" />
              Get Quote
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+254743239214"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-200 group"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Now
            </motion.a>
          </div>

          {/* Trust Statement */}
          <div className="mt-10 flex items-center justify-center space-x-6 text-white text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <span>✓</span>
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✓</span>
              <span>Same-day service available</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✓</span>
              <span>100% satisfaction guaranteed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
