import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="contact">
      <div>
        <h2>
          Ready to take the <span>next step?</span>
        </h2>
        <p>Let’s build your roadmap to sustainable growth.</p>
      </div>

      <a className="primary-btn" href="mailto:info@novasphereconsulting.com">
        Book a Consultation
        <ArrowRight size={16} />
      </a>
    </section>
  );
}