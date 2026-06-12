import { about } from '../data/content.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section__title">{about.heading}</h2>
        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="about__skills">
            <h3>Skills & Interests</h3>
            <ul className="tags">
              {about.skills.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
