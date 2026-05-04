"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Contact request", formData);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact 4-AQUAFLOW</h2>
        <p className="section-subtitle">
          Tell us what you need and our team will call you back shortly.
        </p>

        <form className="card form" onSubmit={handleSubmit} style={{ marginTop: "1.25rem" }}>
          <div className="form-grid">
            <input
              className="input"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
              required
            />
            <input
              className="input"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              required
            />
            <input
              className="input"
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
              required
            />
            <textarea
              className="textarea"
              placeholder="How can we help?"
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              required
            />
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}