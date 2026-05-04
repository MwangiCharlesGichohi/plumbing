"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Toilet Repair & Unclogging",
    description: "Complete diagnosis and repair for blocked drains and faulty toilet systems.",
    image: "/assets/images/Toilet Sink.png"
  },
  {
    title: "Bathroom Renovations",
    description: "Full bathroom upgrades including fittings, plumbing lines, and finishing.",
    image: "/assets/images/Bathroom Renovation.png"
  },
  {
    title: "Glass Shower Installation",
    description: "Leak-proof shower cubicle installation with clean, modern finishes.",
    image: "/assets/images/glass shower.png"
  },
  {
    title: "Water Heater Services",
    description: "Installation and maintenance of efficient hot water systems.",
    image: "/assets/images/Water Heater Install.png"
  },
  {
    title: "Low Water Pressure Fixes",
    description: "Pressure diagnostics and targeted repairs for steady flow.",
    image: "/assets/images/Low Water Pressure.png"
  },
  {
    title: "Leak Detection",
    description: "Quick leak tracing and pipe repair to prevent costly damage.",
    image: "/assets/images/Leaking Pipe.png"
  }
];

export default function ServicesPage() {
  return (
    <div>
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="section-title">4-AQUAFLOW Services</h1>
          <p className="section-subtitle">
            Trusted repair, installation, and renovation services for every property.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-3">
          {services.map((service) => (
            <article key={service.title} className="card service-card">
              <Image src={service.image} alt={service.title} width={600} height={380} className="thumb" />
              <div className="card-body">
                <h3 style={{ marginTop: 0 }}>{service.title}</h3>
                <p className="section-subtitle">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="container" style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <Link href="/#contact" className="btn btn-primary">
            Book a Service
          </Link>
        </div>
      </section>
    </div>
  );
}