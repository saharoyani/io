import { research } from '../data/content.js'

export default function Research() {
  return (
    <section className="section section--alt" id="research">
      <div className="container">
        <h2 className="section__title">{research.heading}</h2>
        <ul className="pub-list">
          {research.items.map((item, i) => (
            <li key={i} className="pub">
              <div className="pub__body">
                <h3 className="pub__title">{item.title}</h3>
                <p className="pub__authors">{item.authors}</p>
                <p className="pub__venue">{item.venue}</p>
                <p className="pub__desc">{item.description}</p>
                {item.links?.length > 0 && (
                  <div className="pub__links">
                    {item.links.map((l) => (
                      <a key={l.label} href={l.href} className="pub__link">
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
