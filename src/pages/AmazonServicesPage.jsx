import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { SectionIntro } from '../components/SectionIntro'
import { amazonContent } from '../data/siteContent'

export function AmazonServicesPage() {
  return (
    <PageShell>
      <section className="hero hero--service">
        <div className="hero__content">
          <p className="eyebrow">Amazon Services</p>
          <h1>Full-service Amazon support for brands that want more than channel maintenance.</h1>
          <p className="hero__copy">{amazonContent.intro}</p>
          <Link className="button button--solid" to="/contact">
            Request a Strategy Call
          </Link>
        </div>
        <div className="hero__media hero__media--stacked">
          <img src={amazonContent.heroImage} alt="Amazon services" />
        </div>
      </section>

      <section className="content-block">
        <SectionIntro
          eyebrow="Why choose Atventure"
          title="Built for brands that need digital depth and retail judgment in the same room."
          text={amazonContent.differenceStatement}
        />
        <div className="feature-grid">
          {amazonContent.reasons.map((reason) => (
            <article key={reason} className="feature-card">
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block content-block--split">
        <SectionIntro
          eyebrow="What we provide"
          title="Visibility, resources, strategy, service, and expertise."
          text="These five pillars come directly from the source Amazon page and now anchor the structure of the experience."
        />
        <div className="stack-list">
          {amazonContent.provides.map((item) => (
            <article key={item.title} className="stack-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block content-block--split">
        <SectionIntro
          eyebrow="Industry Leading Software We Use"
          title="Tools and AI-supported workflows that sharpen visibility and execution."
          text="The original Amazon page called out the software stack directly. This visual preserves that source cue while keeping the page focused on outcomes."
        />
        <div className="media-panel">
          <img src={amazonContent.softwareImage} alt="Amazon software stack used by Atventure" />
        </div>
      </section>

      <section className="content-block">
        <SectionIntro
          eyebrow="Program tracks"
          title="Three workstreams that move Amazon performance forward."
          text="Support the account, drive qualified traffic, and keep strategic decisions grounded in data."
        />
        <div className="three-up">
          {amazonContent.tracks.map((track) => (
            <article key={track.title} className="track-card">
              <h3>{track.title}</h3>
              <ul>
                {track.bullets.map((bullet) => (
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
