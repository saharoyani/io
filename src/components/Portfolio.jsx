import { portfolio } from '../data/content.js'

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h2 className="section__title">{portfolio.heading}</h2>
        <div className="portfolio__grid">
          {portfolio.projects.map((p, i) => (
            <a
              key={i}
              className="card"
              href={p.href}
              target={p.href?.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <div
                className="card__media"
                style={
                  p.image
                    ? { backgroundImage: `url(${p.image})` }
                    : { background: `linear-gradient(135deg, ${p.accent}, ${p.accent}aa)` }
                }
              >
                {!p.image && <span className="card__placeholder">{p.category}</span>}
              </div>
              <div className="card__body">
                <span className="card__category">{p.category}</span>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__desc">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
