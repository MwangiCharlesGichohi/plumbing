"use client";

import { ArrowRight, Phone, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Full-bleed background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/hero-aquaflow.png')" }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" aria-hidden="true" />

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
            className="space-y-6 text-center md:text-left md:max-w-lg lg:max-w-2xl mx-auto md:mx-0"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <Zap className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-semibold text-amber-100">Licensed • Insured • 24/7 Response</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
              Fast, Trusted Plumbing — Fixed Right, First Time
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-md mx-auto md:mx-0">
              24/7 emergency response, certified plumbers, and transparent quotes — same‑day repairs and installations that last.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 justify-center md:justify-start">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Fast Response</p>
                  <p className="text-sm text-blue-200">1-2 hour arrival window</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v2a6 6 0 0012 0V8a6 6 0 00-6-6z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Certified Plumbers</p>
                  <p className="text-sm text-blue-200">Licensed & insured technicians</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 10a7 7 0 1014 0 7 7 0 00-14 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Reliable Service</p>
                  <p className="text-sm text-blue-200">Quality workmanship guaranteed</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-400 text-gray-900 font-bold rounded-lg shadow-2xl text-lg"
              >
                Get a Quote
                <ArrowRight className="ml-3 w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+254743239214"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded-lg bg-white/10"
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