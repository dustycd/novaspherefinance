import { Building2, Globe2, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "50+",
    label: "Businesses Advised",
    text: "Across diverse industries in the UAE and beyond.",
  },
  {
    icon: Globe2,
    value: "7+",
    label: "Countries Served",
    text: "Supporting local and international clients.",
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Client Commitment",
    text: "Focused on measurable results and long-term partnerships.",
  },
];

export default function Stats() {
  return (
    <section className="stats-panel" id="about">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article key={stat.label}>
            <div className="stat-icon">
              <Icon size={21} />
            </div>

            <strong>{stat.value}</strong>
            <h3>{stat.label}</h3>
            <p>{stat.text}</p>
          </article>
        );
      })}
    </section>
  );
}
