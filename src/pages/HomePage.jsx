import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { SectionIntro } from '../components/SectionIntro'
import { TestimonialCarousel } from '../components/TestimonialCarousel'
import { contactDetails, homeContent, siteIdentity } from '../data/siteContent'

export function HomePage() {
  return (
    <PageShell>
      <section className="hero hero--home">
        <div className="hero__media">
          <img src={homeContent.hero.background} alt="Retail growth planning" />
        </div>
        <div className="hero__content">
          <p className="eyebrow">{siteIdentity.tagline}</p>
          <h1>{homeContent.hero.title}</h1>
          <p className="hero__support">{homeContent.hero.supportingLine}</p>
          <p className="hero__copy">{homeContent.hero.body}</p>
          <div className="hero__actions">
            <Link className="button button--solid" to={homeContent.hero.primaryCta.to}>
              {homeContent.hero.primaryCta.label}
            </Link>
            <Link className="button button--ghost" to={homeContent.hero.secondaryCta.to}>
              {homeContent.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="metric-ribbon">
        {homeContent.metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section className="content-block content-block--split">
        <SectionIntro
          eyebrow="The original distinctives, redesigned"
          title="The same core strengths, now aimed directly at Amazon momentum."
          text="The legacy site emphasized team, process, and results. We kept those ideas, but arranged them as a clearer narrative for brands looking for Amazon growth support."
        />
        <div className="feature-grid">
          {homeContent.distinctives.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link to={item.link}>Explore</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block brands-block">
        <SectionIntro
          eyebrow="Strategic Retail Partners"
          title="Retail fluency across channels, with Amazon in the lead position."
          text="The existing site called out Amazon, Target, and Menards. Here, that broader retail reach becomes proof that the team understands how digital growth connects with wider retail strategy."
        />
        <div className="logo-row">
          {homeContent.partnerLogos.map((logo) => (
            <div key={logo.name} className="logo-chip">
              <img src={logo.src} alt={logo.name} />
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
        <img
          className="brand-strip"
          src="/assets/logos/trusted-brands.png"
          alt="Trusted brand partners"
        />
      </section>

      <section className="content-block content-block--split proof-block">
        <SectionIntro
          eyebrow="Trusted brand partners"
          title="What clients already say about the work."
          text="The source site included testimonials from Amazon and Target-oriented partners. We kept that proof front and center, with extra breathing room and a simpler reading experience."
        />
        <TestimonialCarousel items={homeContent.quotes} />
      </section>

      <section className="cta-band">
        <div>
          <p className="eyebrow">Our strategic location</p>
          <h2>Minneapolis roots. Seattle support. Amazon-first execution.</h2>
          <p>{contactDetails.officeSummary}</p>
        </div>
        <div className="cta-band__actions">
          <a className="button button--solid" href={contactDetails.directionsUrl} target="_blank" rel="noreferrer">
            Visit the Office
          </a>
          <Link className="button button--ghost" to="/contact">
            Contact the Team
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
