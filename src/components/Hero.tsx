"use client";

import { ArrowRight, Phone, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-32 pb-16 overflow-hidden">
      {/* Full-bleed background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/hero-aquaflow.png')" }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" aria-hidden="true" />

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-10 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full opacity-10 -ml-32 -mb-32"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center md:text-left md:max-w-xl lg:max-w-2xl mx-auto md:mx-0"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Licensed • Insured • 24/7 Available</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              Professional Plumbing When You Need It Most
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-lg mx-auto md:mx-0">
              Same-day service, transparent pricing, and guaranteed workmanship. From emergency repairs to major installations, 4-AquaFlow delivers excellence.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fast Response</p>
                  <p className="text-sm text-gray-600">1-2 hour service window</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Expert Team</p>
                  <p className="text-sm text-gray-600">15+ years experience</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary group bg-white text-blue-700 shadow-lg px-6 py-3"
              >
                Book Service
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+254712345678"
                className="btn btn-secondary group items-center border border-white/30 text-white px-5 py-3 bg-white/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
          {/* Spacer column kept for visual balance on wide screens (background is full-bleed) */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}