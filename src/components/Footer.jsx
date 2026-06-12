import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="footer__note">Built with React + Vite</span>
      </div>
    </footer>
  )
}
