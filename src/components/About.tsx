import {
  BarChart3,
  BriefcaseBusiness,
  ClipboardCheck,
  ShieldCheck,
  Target,
} from "lucide-react";

const focusAreas = [
  {
    icon: BarChart3,
    title: "Financial clarity",
    text: "Turn fragmented numbers into forecasts, reporting packs, and margin visibility leadership can use.",
  },
  {
    icon: Target,
    title: "Growth priorities",
    text: "Define the next commercial moves with realistic milestones, ownership, and operating discipline.",
  },
  {
    icon: ShieldCheck,
    title: "Stronger controls",
    text: "Improve planning routines, cost review, and decision governance before growth adds complexity.",
  },
];

const engagementSteps = [
  "Diagnose current performance and pressure points",
  "Build the financial and strategic roadmap",
  "Track execution with a practical leadership rhythm",
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-section__copy">
        <span className="section-label">How we work</span>
        <h2>Practical advisory for sharper business decisions.</h2>
        <p>
          NovaSphere Consulting supports owners and leadership teams with clear
          financial thinking, structured planning, and hands-on execution support.
        </p>
      </div>

      <div className="about-section__content">
        <article className="about-section__summary">
          <div className="about-section__mark">
            <BriefcaseBusiness size={24} />
          </div>

          <span>Engagement model</span>
          <h3>Focused support from diagnosis to execution.</h3>
          <p>
            We translate financial data, operating constraints, and growth goals
            into a plan your team can actually manage.
          </p>

          <ol className="about-section__steps">
            {engagementSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </article>

        <div className="about-section__cards">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article className="about-card" key={area.title}>
                <div className="icon-box">
                  <Icon size={22} />
                </div>

                <div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </div>
              </article>
            );
          })}

          <a className="about-section__link" href="#contact">
            <ClipboardCheck size={19} />
            Start with a business review
          </a>
        </div>
      </div>
    </section>
  );
}
