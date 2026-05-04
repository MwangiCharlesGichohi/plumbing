import Image from "next/image";

export default function About() {
  return (
    <section className="section">
      <div className="container about-grid">
        <div>
          <h2 className="section-title">About 4-AQUAFLOW Plumbing Solutions</h2>
          <p className="section-subtitle">
            We are a Nairobi-based plumbing team focused on fast response, durable
            workmanship, and transparent communication from first call to final test.
          </p>
          <p className="section-subtitle" style={{ marginTop: "0.8rem" }}>
            Our mission is simple: solve plumbing problems correctly the first time,
            while keeping your space clean and your costs predictable.
          </p>
        </div>

        <div className="card" style={{ overflow: "hidden" }}>
          <Image
            src="/assets/images/Consultation.png"
            alt="4-AQUAFLOW Plumbing consultation"
            width={800}
            height={520}
            className="thumb"
          />
        </div>
      </div>
    </section>
  );
}