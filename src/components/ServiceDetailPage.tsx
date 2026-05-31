import { ArrowRight } from "lucide-react";
import type { ServicePage } from "../data/servicePages";

type ServiceDetailPageProps = {
  page: ServicePage;
};

export default function ServiceDetailPage({ page }: ServiceDetailPageProps) {
  const Icon = page.icon;

  return (
    <div className={`service-detail service-detail--${page.slug}`}>
      <section className={`service-page service-page--${page.slug}`}>
        <div className="service-page__hero">
          <div className="service-page__copy">
            <div className="service-page__breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>{page.navLabel}</span>
            </div>

            <span className="section-label">{page.eyebrow}</span>

            <h1>
              {page.title.replace(page.accent, "")}
              <em>{page.accent}</em>
            </h1>

            <p>{page.intro}</p>

            <div className="service-page__heroStats" aria-label={`${page.navLabel} highlights`}>
              {page.heroStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="service-page__actions">
              <a className="primary-btn" href="mailto:info@novasphereconsulting.com">
                Book a Consultation
                <ArrowRight size={15} />
              </a>
              <a className="secondary-btn" href={page.otherHref}>
                {page.otherLabel}
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="service-page__visual" style={{ backgroundImage: `url("${page.image}")` }}>
            <div className="service-page__signalPanel" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="service-page__visualBadge">
              <span>{page.visualBadge.label}</span>
              <strong>{page.visualBadge.value}</strong>
            </div>

            <div className="service-page__visualCard">
              <div className="icon-box">
                <Icon size={24} />
              </div>
              <strong>{page.navLabel}</strong>
              <ul>
                {page.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-page__section">
        <div className="service-page__sectionHeading">
          <span className="section-label">Outcomes</span>
          <h2>Built around practical progress.</h2>
        </div>

        <div className="service-page__outcomes">
          {page.outcomes.map((item) => {
            const OutcomeIcon = item.icon;

            return (
              <article key={item.title}>
                <div className="icon-box">
                  <OutcomeIcon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="service-page__section service-page__section--deepDive">
        <div className="service-page__deepCopy">
          <span className="section-label">{page.deepDive.eyebrow}</span>
          <h2>{page.deepDive.title}</h2>
          <p>{page.deepDive.text}</p>
        </div>

        <div className="service-page__deepGrid">
          {page.deepDive.items.map((item) => {
            const ItemIcon = item.icon;

            return (
              <article key={item.title}>
                <div className="icon-box">
                  <ItemIcon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="service-page__section service-page__section--split">
        <div>
          <span className="section-label">{page.scopeTitle}</span>
          <h2>Clear workstreams, measurable decisions.</h2>
        </div>

        <div className="service-page__listPanel">
          {page.scope.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="service-page__section service-page__section--split">
        <div>
          <span className="section-label">Approach</span>
          <h2>A focused process from diagnosis to execution.</h2>
        </div>

        <ol className="service-page__process">
          {page.process.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="service-page__section service-page__section--split">
        <div>
          <span className="section-label">Best fit</span>
          <h2>Designed for leaders who need structure without noise.</h2>
        </div>

        <div className="service-page__listPanel">
          {page.idealFor.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="service-page__section service-page__section--engagement">
        <div className="service-page__sectionHeading">
          <span className="section-label">{page.engagement.eyebrow}</span>
          <h2>{page.engagement.title}</h2>
        </div>

        <div className="service-page__engagementGrid">
          {page.engagement.steps.map((step) => (
            <article key={step.title}>
              <span>{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-page__final" id="contact">
        <div>
          <span className="section-label">Next step</span>
          <h2>Let’s shape the right advisory path for your business.</h2>
        </div>
        <a className="primary-btn" href="mailto:info@novasphereconsulting.com">
          Start a Conversation
          <ArrowRight size={15} />
        </a>
      </section>
    </div>
  );
}
