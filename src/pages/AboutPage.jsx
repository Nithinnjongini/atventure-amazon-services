import { PageShell } from '../components/PageShell'
import { SectionIntro } from '../components/SectionIntro'
import { aboutContent } from '../data/siteContent'

export function AboutPage() {
  return (
    <PageShell>
      <section className="hero hero--service">
        <div className="hero__content">
          <p className="eyebrow">Who We Are</p>
          <h1>A retail team built on partnerships, category knowledge, and long-view growth thinking.</h1>
          <div className="hero__copy hero__copy--stacked">
            {aboutContent.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div className="hero__media hero__media--stacked">
          <img src={aboutContent.heroImage} alt="Atventure team environment" />
        </div>
      </section>

      <section className="content-block content-block--split">
        <SectionIntro
          eyebrow="Executive Team"
          title="Leadership shaped by retailer-side and manufacturer-side experience."
          text="The existing biography page was one of the site’s strongest credibility assets, so this version preserves the fuller founder story instead of reducing it to a short summary."
        />
        <div className="founder-showcase">
          <div className="founder-media">
            <img src={aboutContent.founders[0].image} alt={aboutContent.founders[0].name} />
            <div className="founder-media__caption">
              <p className="eyebrow">Founded in Minneapolis</p>
              <p>Retail experience, manufacturing partnership, and long-view account leadership brought together in one group.</p>
            </div>
          </div>
          {aboutContent.founders.map((founder) => (
            <article key={founder.name} className="founder-card">
              <h3>{founder.name}</h3>
              <p className="stack-item__role">{founder.role}</p>
              <div className="founder-card__copy">
                {founder.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block">
        <SectionIntro
          eyebrow="Core Team"
          title="A cross-functional roster with retail, account, and operational depth."
          text={aboutContent.teamIntro}
        />
        <div className="team-directory">
          {aboutContent.team.map((person) => (
            <article key={person.name} className="team-member">
              <img className="team-member__photo" src={person.image} alt={person.name} />
              <div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block content-block--split">
        <SectionIntro
          eyebrow="Our Strategic Location"
          title="A downtown Minneapolis office built for close collaboration."
          text={aboutContent.locationText}
        />
        <div className="location-gallery">
          {aboutContent.locationGallery.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={index === 0 ? 'Atventure office interior' : 'Atventure office and showroom'}
            />
          ))}
        </div>
      </section>
    </PageShell>
  )
}
