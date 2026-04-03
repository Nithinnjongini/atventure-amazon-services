import { PageShell } from '../components/PageShell'
import { SectionIntro } from '../components/SectionIntro'
import { retailFoundationsContent, servicesContent } from '../data/siteContent'

export function RetailFoundationsPage() {
  return (
    <PageShell>
      <section className="hero hero--service">
        <div className="hero__content">
          <p className="eyebrow">Retail Foundations</p>
          <h1>Decades of Target and omnichannel experience, reframed as an Amazon advantage.</h1>
          <p className="hero__copy">{retailFoundationsContent.intro}</p>
        </div>
        <div className="hero__media hero__media--stacked">
          <img src={retailFoundationsContent.heroImage} alt="Retail foundations" />
        </div>
      </section>

      <section className="content-block content-block--split">
        <SectionIntro
          eyebrow="Legacy expertise"
          title="Why the old Target page still matters."
          text="The original Target page carried important retailer context and manufacturer-facing positioning that still strengthens the Amazon story."
        />
        <div className="copy-stack">
          {retailFoundationsContent.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="category-cloud">
            {servicesContent.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-block">
        <SectionIntro
          eyebrow="What manufacturers said Atventure delivers"
          title="Innovation, access, growth, and operational confidence."
          text="These sections are preserved more fully from the original Target page so the operational depth is not lost in the Amazon repositioning."
        />
        <div className="feature-grid">
          {retailFoundationsContent.promises.map((promise) => (
            <article key={promise.title} className="feature-card">
              <h3>{promise.title}</h3>
              <ul>
                {promise.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
