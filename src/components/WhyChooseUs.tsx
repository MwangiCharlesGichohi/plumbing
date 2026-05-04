"use client";

import { CheckCircle, Users, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Clock,
    title: "Rapid Response Time",
    description: "We arrive within 1-2 hours of your call, minimizing damage and inconvenience.",
  },
  {
    icon: Users,
    title: "Certified Professionals",
    description: "All technicians are licensed, insured, and continuously trained on latest plumbing tech.",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No surprises. We provide detailed quotes upfront with no hidden fees or markups.",
  },
  {
    icon: CheckCircle,
    title: "Guaranteed Work",
    description: "Every job comes with a 100% satisfaction guarantee and comprehensive warranty.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-700 rounded-full opacity-10 -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full opacity-10 -mr-48 -mb-48"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose 4-AquaFlow?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're not just plumbers—we're your trusted partners in maintaining a safe, efficient home.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-400/20 text-blue-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <p className="text-blue-100 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-16 md:mt-20 pt-16 md:pt-20 border-t border-white/20"
        >
          <div className="text-center">
            <div className="text-xl font-bold mb-2">Licensed & Insured</div>
            <p className="text-blue-100">Our technicians are fully certified and insured for your protection.</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold mb-2">Transparent Estimates</div>
            <p className="text-blue-100">We provide clear, itemized quotes—no hidden fees or surprises.</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold mb-2">Workmanship Guarantee</div>
            <p className="text-blue-100">We guarantee our workmanship and offer a comprehensive warranty.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
