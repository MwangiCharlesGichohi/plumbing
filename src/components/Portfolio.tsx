import Image from "next/image";

const portfolioItems = [
  {
    title: "Leak Detection & Pipe Repair",
    image: "/assets/images/Leaking Pipe.png"
  },
  {
    title: "Water Heater Installation",
    image: "/assets/images/Water Heater Install.png"
  },
  {
    title: "Shower Head Upgrade",
    image: "/assets/images/Shower Head.png"
  }
];

export default function Portfolio() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h2 className="section-title">Recent Work</h2>
        <p className="section-subtitle">A few projects completed by our team.</p>

        <div className="grid-3" style={{ marginTop: "1.25rem" }}>
          {portfolioItems.map((item) => (
            <article key={item.title} className="card portfolio-card">
              <Image src={item.image} alt={item.title} width={600} height={380} className="thumb" />
              <div className="card-body">
                <h3 style={{ margin: 0 }}>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}