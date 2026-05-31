import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero hero--refined" id="home">
      <div className="hero-bg" />
      <div className="hero-color-wash" />

      <div className="hero-content">
        <span className="eyebrow">Dubai-based consulting firm</span>

        <h1>
          Strategic advisory.
          <br />
          Financial clarity.
          <br />
          <em>Sustainable growth.</em>
        </h1>

        <p>
          We partner with businesses across the UAE and beyond to deliver
          financial clarity, operational efficiency, and strategic growth.
        </p>

        <div className="hero-actions">
          <a className="primary-btn" href="mailto:info@novasphereconsulting.com">
            Book a Consultation
            <ArrowRight size={15} />
          </a>

          <a className="secondary-btn" href="#services">
            Explore Our Services
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <style>{`
        .hero--refined {
          min-height: clamp(660px, 88vh, 860px);
          padding: 150px 24px 140px;
          position: relative;
          isolation: isolate;
          margin-bottom: clamp(104px, 8vw, 132px);
        }

        .hero--refined .hero-bg {
          filter: saturate(1.12) contrast(1.02) brightness(0.92);
          opacity: 0.92;
        }

        .hero--refined .hero-color-wash {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(248, 250, 252, 0.92) 0%, rgba(248, 250, 252, 0.78) 36%, rgba(248, 250, 252, 0.32) 70%, rgba(248, 250, 252, 0.16) 100%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.08) 48%, rgba(245, 247, 250, 0.62) 100%);
        }

        .hero--refined .hero-content {
          max-width: 760px;
          margin-left: clamp(28px, 5vw, 78px);
          animation: heroFadeUp 900ms ease both;
        }

        .hero--refined .eyebrow {
          font-size: 12px;
          letter-spacing: 0.15em;
          margin-bottom: 22px;
          animation: heroFadeUp 800ms ease both;
        }

        .hero--refined h1 {
          max-width: 740px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(44px, 5.8vw, 76px);
          font-weight: 400;
          line-height: 1.02;
          letter-spacing: -0.045em;
          margin: 0;
          color: #121826;
          animation: heroFadeUp 950ms ease 80ms both;
        }

        .hero--refined h1 em {
          display: inline-block;
          font-style: italic;
          font-weight: 400;
          letter-spacing: -0.035em;
          color: #384152;
        }

        .hero--refined p {
          max-width: 590px;
          margin-top: 28px;
          font-size: clamp(16px, 1.45vw, 19px);
          line-height: 1.65;
          animation: heroFadeUp 950ms ease 160ms both;
        }

        .hero--refined .hero-actions {
          margin-top: 34px;
          gap: 14px;
          animation: heroFadeUp 950ms ease 240ms both;
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero--refined .hero-content,
          .hero--refined .eyebrow,
          .hero--refined h1,
          .hero--refined p,
          .hero--refined .hero-actions {
            animation: none;
          }
        }

        @media (max-width: 760px) {
          .hero--refined {
            min-height: clamp(580px, 88svh, 680px);
            padding: 112px 18px 84px;
            margin-bottom: 76px;
          }

          .hero--refined .hero-content {
            margin-left: 0;
          }

          .hero--refined .hero-color-wash {
            background:
              linear-gradient(180deg, rgba(248, 250, 252, 0.9) 0%, rgba(248, 250, 252, 0.76) 48%, rgba(248, 250, 252, 0.58) 100%);
          }

          .hero--refined h1 {
            font-size: clamp(34px, 9.4vw, 44px);
            line-height: 1.08;
            letter-spacing: -0.032em;
          }

          .hero--refined p {
            margin-top: 22px;
            font-size: 15.5px;
            line-height: 1.65;
          }

          .hero--refined .hero-actions {
            margin-top: 28px;
          }
        }

        @media (max-width: 420px) {
          .hero--refined {
            padding-inline: 14px;
          }

          .hero--refined .eyebrow {
            font-size: 10px;
            letter-spacing: 0.12em;
          }
        }
      `}</style>
    </section>
  );
}
