import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { SectionIntro } from '../components/SectionIntro'
import { servicesContent } from '../data/siteContent'

export function ServicesPage() {
  const [activeTitle, setActiveTitle] = useState(servicesContent.pillars[0].title)
  const activePillar =
    servicesContent.pillars.find((pillar) => pillar.title === activeTitle) ?? servicesContent.pillars[0]

  return (
    <PageShell>
      <section className="page-hero">
        <SectionIntro
          eyebrow="Core Services"
          title="A dynamic service mix for Amazon growth, retail readiness, and cleaner execution."
          text={servicesContent.intro}
        />
      </section>

      <section className="content-block content-block--split">
        <div>
          <p className="eyebrow">Categories</p>
          <div className="category-cloud">
            {servicesContent.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </div>
        <div className="service-explorer">
          <div className="service-tabs">
            {servicesContent.pillars.map((pillar) => (
              <button
                key={pillar.title}
                type="button"
                className={pillar.title === activeTitle ? 'is-active' : ''}
                onClick={() => setActiveTitle(pillar.title)}
              >
                {pillar.title}
              </button>
            ))}
          </div>
          <article className="service-detail">
            <h3>{activePillar.title}</h3>
            <p>{activePillar.description}</p>
            <ul>
              {activePillar.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <p className="eyebrow">Next up</p>
          <h2>See how those core services become Amazon-specific programs.</h2>
        </div>
        <Link className="button button--solid" to="/amazon-services">
          View Amazon Services
        </Link>
      </section>
    </PageShell>
  )
}
