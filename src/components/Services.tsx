"use client";

import { Droplet, Wrench, Wind, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Droplet,
    title: "Leak Repair",
    description: "Quick detection and repair of water leaks to prevent damage and save on water bills.",
    features: ["Same-day service", "Non-invasive detection", "Warranty included"],
  },
  {
    icon: Wrench,
    title: "Pipe Installation",
    description: "Expert installation of new plumbing systems for renovations and new construction.",
    features: ["Modern materials", "Building code compliant", "Full warranty"],
  },
  {
    icon: Wind,
    title: "Drain Cleaning",
    description: "Professional drain cleaning to eliminate clogs and improve water flow throughout your home.",
    features: ["Eco-friendly methods", "Video inspection", "Fast results"],
  },
  {
    icon: AlertCircle,
    title: "Emergency Plumbing",
    description: "24/7 emergency response for burst pipes, flooding, and other urgent plumbing crises.",
    features: ["24/7 availability", "1-hour response", "Emergency rates available"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section className="relative py-20 md:py-32 bg-white" id="services">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Plumbing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From routine maintenance to emergency repairs, we handle every plumbing need with professionalism and expertise.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 shadow hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}