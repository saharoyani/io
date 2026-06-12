import { profile, socials } from '../data/content.js'
import Icon from './Icon.jsx'

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__avatar">
          {profile.avatar ? (
            <img src={profile.avatar} alt={profile.name} />
          ) : (
            <span>{initials(profile.name)}</span>
          )}
        </div>

        <p className="hero__eyebrow">{profile.tagline}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__intro">{profile.intro}</p>

        <p className="hero__meta">
          {profile.affiliation} · {profile.location}
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#portfolio">
            View my work
          </a>
          {profile.cvUrl && (
            <a className="btn btn--ghost" href={profile.cvUrl} target="_blank" rel="noreferrer">
              Download CV
            </a>
          )}
        </div>

        <div className="hero__socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              title={s.label}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <Icon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
