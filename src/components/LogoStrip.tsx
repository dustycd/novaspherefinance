const companies = ["EMAAR", "DAMAC", "MERAAS", "DP WORLD", "ALDAR"];

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <span>Trusted by businesses across industries</span>

      <div>
        {companies.map((company) => (
          <strong key={company}>{company}</strong>
        ))}
      </div>
    </section>
  );
}