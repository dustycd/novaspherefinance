const footerLinks = {
  company: [
    { label: "Home", href: "/" },
    { label: "Financial Advisory", href: "/financial-advisory" },
    { label: "Food & Beverage Consulting", href: "/food-beverage-consulting" },
    { label: "Client Approach", href: "/#services" },
  ],
  services: [
    { label: "Financial Planning", href: "/financial-advisory" },
    { label: "Forecasting & Reporting", href: "/financial-advisory" },
    { label: "F&B Strategy", href: "/food-beverage-consulting" },
    { label: "Operations Advisory", href: "/food-beverage-consulting" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Use", href: "#terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="footer__shell">
        <div className="footer__cta">
          <div>
            <span className="footer__kicker">Dubai-based consulting firm</span>
            <h2 id="footer-title">Advisory built for clearer business decisions.</h2>
          </div>

          <a className="footer__ctaButton" href="mailto:info@novasphereconsulting.com">
            Start a conversation
          </a>
        </div>

        <div className="footer__main">
          <div className="footer__brandBlock">
            <a className="footer__logo" href="#home" aria-label="NovaSphere Consulting home">
              <span className="footer__logoMark">NS</span>
              <span>
                <strong>NovaSphere</strong>
                <small>Consulting</small>
              </span>
            </a>

            <p>
              Strategic financial advisory and food & beverage consulting for
              companies looking to improve structure, visibility, and long-term
              performance.
            </p>

            <div className="footer__contactCard">
              <span>Contact</span>
              <a href="mailto:info@novasphereconsulting.com">
                info@novasphereconsulting.com
              </a>
              <p>Dubai, United Arab Emirates · Serving international clients</p>
            </div>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__column">
              <h3>Company</h3>
              {footerLinks.company.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="footer__column">
              <h3>Services</h3>
              {footerLinks.services.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="footer__column">
              <h3>Legal</h3>
              {footerLinks.legal.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© 2026 NovaSphere Consulting. All rights reserved.</span>
          <span>Financial advisory · F&amp;B consulting · Dubai</span>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 10% 0%, rgba(255, 255, 255, 0.95), transparent 34%),
            linear-gradient(135deg, #ffffff 0%, #f7f8fa 44%, #eef1f5 100%);
          color: #111827;
          border-top: 1px solid rgba(17, 24, 39, 0.08);
          margin-top: 0;
        }

        .footer::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(17, 24, 39, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 24, 39, 0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent 78%);
        }

        .footer__shell {
          position: relative;
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 48px 0 26px;
        }

        .footer__cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding: 34px;
          border: 1px solid rgba(17, 24, 39, 0.08);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.74);
          box-shadow: 0 24px 70px rgba(17, 24, 39, 0.08);
          backdrop-filter: blur(18px);
        }

        .footer__kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: #6b7280;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .footer__kicker::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #9ca3af;
          box-shadow: 0 0 0 6px rgba(156, 163, 175, 0.16);
        }

        .footer__cta h2 {
          margin: 0;
          max-width: 720px;
          font-size: clamp(28px, 4vw, 48px);
          line-height: 0.98;
          letter-spacing: -0.055em;
          color: #111827;
        }

        .footer__ctaButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 22px;
          border-radius: 999px;
          background: #111827;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 16px 34px rgba(17, 24, 39, 0.18);
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }

        .footer__ctaButton:hover {
          transform: translateY(-2px);
          background: #1f2937;
          box-shadow: 0 20px 44px rgba(17, 24, 39, 0.22);
        }

        .footer__main {
          display: grid;
          grid-template-columns: minmax(280px, 1.05fr) 1.55fr;
          gap: 64px;
          padding: 62px 0 42px;
        }

        .footer__brandBlock p {
          max-width: 430px;
          margin: 22px 0 0;
          color: #5b6472;
          font-size: 15px;
          line-height: 1.75;
        }

        .footer__logo {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: #111827;
          text-decoration: none;
        }

        .footer__logoMark {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border-radius: 16px;
          background: linear-gradient(145deg, #111827, #3f4652);
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 16px 32px rgba(17, 24, 39, 0.18);
        }

        .footer__logo strong,
        .footer__logo small {
          display: block;
        }

        .footer__logo strong {
          font-size: 18px;
          letter-spacing: -0.035em;
        }

        .footer__logo small {
          margin-top: 2px;
          color: #6b7280;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .footer__contactCard {
          margin-top: 30px;
          padding: 20px;
          border: 1px solid rgba(17, 24, 39, 0.08);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.62);
        }

        .footer__contactCard span {
          display: block;
          margin-bottom: 8px;
          color: #818998;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .footer__contactCard a {
          color: #111827;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .footer__contactCard a:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .footer__contactCard p {
          margin: 8px 0 0;
          color: #6b7280;
          font-size: 13px;
          line-height: 1.55;
        }

        .footer__nav {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 36px;
        }

        .footer__column h3 {
          margin: 0 0 18px;
          color: #111827;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .footer__column a {
          display: block;
          width: fit-content;
          margin-top: 12px;
          color: #5b6472;
          font-size: 14px;
          line-height: 1.45;
          text-decoration: none;
          transition: color 160ms ease, transform 160ms ease;
        }

        .footer__column a:hover {
          color: #111827;
          transform: translateX(3px);
        }

        .footer__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 24px;
          border-top: 1px solid rgba(17, 24, 39, 0.08);
          color: #7b8493;
          font-size: 13px;
        }

        @media (max-width: 860px) {
          .footer {
            margin-top: 0;
          }

          .footer__shell {
            width: min(100% - 28px, 1180px);
            padding-top: 32px;
          }

          .footer__cta,
          .footer__main,
          .footer__bottom {
            display: grid;
            grid-template-columns: 1fr;
          }

          .footer__cta {
            padding: 26px;
            border-radius: 22px;
          }

          .footer__ctaButton {
            width: 100%;
          }

          .footer__main {
            gap: 38px;
            padding: 46px 0 34px;
          }

          .footer__nav {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .footer__bottom {
            align-items: start;
          }
        }

        @media (max-width: 520px) {
          .footer__shell {
            width: min(100% - 28px, 1180px);
            padding: 28px 0 22px;
          }

          .footer__cta {
            gap: 22px;
            padding: 22px;
          }

          .footer__kicker {
            font-size: 10px;
            line-height: 1.5;
            letter-spacing: 0.12em;
          }

          .footer__cta h2 {
            font-size: clamp(26px, 8vw, 34px);
            line-height: 1.04;
            letter-spacing: -0.04em;
          }

          .footer__ctaButton {
            text-align: center;
            white-space: normal;
          }

          .footer__main {
            gap: 34px;
            padding: 38px 0 30px;
          }

          .footer__contactCard {
            padding: 18px;
            border-radius: 18px;
          }

          .footer__nav {
            gap: 24px;
          }

          .footer__bottom {
            gap: 12px;
            font-size: 12px;
            line-height: 1.5;
          }
        }
      `}</style>
    </footer>
  );
}
