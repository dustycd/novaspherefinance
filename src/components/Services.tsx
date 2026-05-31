import { useState } from "react";
import { ArrowLeft, ArrowRight, BarChart3, Target } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Financial Advisory",
    text: "Financial planning, analysis, and strategic advisory to strengthen your business foundation.",
    details: [
      "Financial planning, budgeting, and cash-flow forecasting",
      "Management reporting, KPI visibility, and decision support",
      "Profitability review, cost structure analysis, and growth planning",
    ],
  },
  {
    icon: Target,
    title: "Strategic Growth",
    text: "Market entry, operational structure, and growth strategies tailored to your business goals.",
    details: [
      "Market entry strategy and commercial opportunity assessment",
      "Business model refinement and operational roadmap planning",
      "Growth priorities, execution milestones, and performance tracking",
    ],
  },
];

const serviceDeepDives = [
  {
    icon: BarChart3,
    title: "Financial Advisory",
    text: "Go deeper into how we build forecasts, reporting rhythms, profitability reviews, and financial decision support.",
    href: "/financial-advisory",
  },
];

export default function Services() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  return (
    <section className="services" id="services">
      <div className="section-copy">
        <span className="section-label">What we do</span>

        <h2>
          Solutions that drive <span>real impact</span>
        </h2>

        <p>
          From financial strategy to growth planning, we help businesses build
          structure, improve profitability, and scale with confidence.
        </p>

        <a className="dark-btn" href="#about">
          Learn More About Us
          <ArrowRight size={16} />
        </a>
      </div>

      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon;
          const isFlipped = flippedCard === service.title;

          return (
            <article
              className={`service-card service-card--flip ${isFlipped ? "is-flipped" : ""}`}
              key={service.title}
            >
              <div className="service-card__inner">
                <div className="service-card__face service-card__front">
                  <div className="icon-box">
                    <Icon size={23} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <button
                    className="service-card__action"
                    type="button"
                    aria-label={`Learn more about ${service.title}`}
                    onClick={() => setFlippedCard(service.title)}
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </button>
                </div>

                <div className="service-card__face service-card__back">
                  <button
                    className="service-card__backButton"
                    type="button"
                    aria-label={`Go back to ${service.title} overview`}
                    onClick={() => setFlippedCard(null)}
                  >
                    <ArrowLeft size={15} />
                    Back
                  </button>

                  <span className="service-card__label">Service focus</span>
                  <h3>{service.title}</h3>

                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="service-info-grid" aria-label="Detailed service pages">
        {serviceDeepDives.map((service) => {
          const Icon = service.icon;

          return (
            <a className="service-info-card" href={service.href} key={service.title}>
              <div className="icon-box">
                <Icon size={22} />
              </div>

              <div>
                <span>Detailed service page</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>

              <ArrowRight size={17} />
            </a>
          );
        })}
      </div>

      <style>{`
        .service-card--flip {
          min-height: 360px;
          padding: 0;
          perspective: 1200px;
          background: transparent;
          box-shadow: none;
          border: 0;
        }

        .service-card__inner {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 360px;
          transform-style: preserve-3d;
          transition: transform 760ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .service-card--flip.is-flipped .service-card__inner {
          transform: rotateY(180deg);
        }

        .service-card__face {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          backface-visibility: hidden;
          border: 1px solid rgba(17, 24, 39, 0.08);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.78);
          box-shadow: 0 24px 70px rgba(17, 24, 39, 0.075);
          backdrop-filter: blur(18px);
        }

        .service-card__front {
          padding: 32px;
        }

        .service-card__back {
          justify-content: center;
          padding: 30px;
          transform: rotateY(180deg);
          background:
            radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.95), transparent 42%),
            linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(241, 244, 248, 0.9));
        }

        .service-card__action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          margin-top: auto;
          padding: 0;
          border: 0;
          background: transparent;
          color: #111827;
          font: inherit;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 180ms ease, color 180ms ease;
        }

        .service-card__action:hover {
          color: #4b5563;
          transform: translateX(4px);
        }

        .service-card__backButton {
          position: absolute;
          top: 22px;
          left: 24px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 12px;
          border: 1px solid rgba(17, 24, 39, 0.09);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          color: #4b5563;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 180ms ease, background 180ms ease, color 180ms ease;
        }

        .service-card__backButton:hover {
          transform: translateX(-2px);
          background: #ffffff;
          color: #111827;
        }

        .service-card__label {
          margin-bottom: 12px;
          color: #7b8493;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .service-card__back h3 {
          margin: 0 0 18px;
          color: #111827;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.08;
          letter-spacing: -0.03em;
        }

        .service-card__back ul {
          display: grid;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .service-card__back li {
          position: relative;
          padding-left: 20px;
          color: #4b5563;
          font-size: 14px;
          line-height: 1.55;
        }

        .service-card__back li::before {
          content: "";
          position: absolute;
          top: 0.72em;
          left: 0;
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #9ca3af;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card__inner {
            transition: none;
          }
        }

        @media (max-width: 760px) {
          .service-card--flip,
          .service-card__inner {
            min-height: 420px;
          }

          .service-card__front,
          .service-card__back {
            padding: 24px;
          }

          .service-card__back {
            justify-content: flex-start;
            padding-top: 76px;
          }

          .service-card__backButton {
            top: 20px;
            left: 20px;
          }

          .service-card__back h3 {
            font-size: 26px;
          }

          .service-card__back li {
            font-size: 13.5px;
            line-height: 1.5;
          }
        }

        @media (max-width: 420px) {
          .service-card--flip,
          .service-card__inner {
            min-height: 440px;
          }

          .service-card__front,
          .service-card__back {
            padding: 22px;
          }

          .service-card__back {
            padding-top: 74px;
          }
        }
      `}</style>
    </section>
  );
}
