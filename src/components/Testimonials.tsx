import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "NovaSphere’s financial insights transformed the way we plan and operate. Highly professional and results-driven.",
    name: "Ahmad Al Mansoori",
    role: "CEO, Retail Group",
  },
  {
    quote:
      "Their reporting rhythm helped us see performance clearly and act faster. A truly strategic partner.",
    name: "Laura Mitchell",
    role: "Founder, Growth Company",
  },
  {
    quote:
      "The team brings clarity to complex decisions and delivers practical solutions that drive growth.",
    name: "Ravi Sharma",
    role: "Managing Director",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonial-heading">
        <span className="section-label">Client testimonials</span>
        <h2>
          Trusted by leaders.
          <br />
          Proven by results.
        </h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <article
            className={`testimonial-card ${index === 1 ? "featured" : ""}`}
            key={item.name}
          >
            <Quote size={30} />

            <blockquote>{item.quote}</blockquote>

            <div className="person">
              <div className="avatar" />
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
