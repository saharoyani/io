import { contact, socials } from '../data/content.js'
import Icon from './Icon.jsx'

export default function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <div className="container contact">
        <h2 className="section__title">{contact.heading}</h2>
        <p className="contact__blurb">{contact.blurb}</p>
        <a className="btn btn--primary" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <div className="contact__socials">
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
