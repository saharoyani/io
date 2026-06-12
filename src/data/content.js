// ─────────────────────────────────────────────────────────────────────────
//  EDIT YOUR SITE HERE
//  Everything that appears on the website is driven by this single file.
//  Replace the placeholder values below with your own details.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Your Name',
  // A short title under your name, e.g. "PhD Student in Computer Science"
  tagline: 'Researcher · Designer · Creative',
  // A one or two sentence intro shown in the hero section.
  intro:
    'I’m a researcher and designer exploring the space where rigorous academic work meets thoughtful visual design. Welcome to my portfolio.',
  affiliation: 'University of Arizona',
  location: 'Tucson, Arizona',
  email: 'you@arizona.edu',
  // Drop a headshot at public/avatar.jpg, or leave as null to show initials.
  avatar: null,
  // Optional: link to a downloadable CV placed in /public (e.g. '/cv.pdf').
  cvUrl: null,
}

export const socials = [
  { label: 'Email', href: 'mailto:you@arizona.edu', icon: 'mail' },
  { label: 'GitHub', href: 'https://github.com/yourusername', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  { label: 'Google Scholar', href: 'https://scholar.google.com', icon: 'scholar' },
]

export const about = {
  heading: 'About',
  // Each string is rendered as its own paragraph.
  paragraphs: [
    'Write a paragraph about who you are, your background, and what drives your work. Mention your field of study, your institution, and the questions you find most exciting.',
    'Add a second paragraph about your creative side — the design work you love, the tools you use, and how it complements your academic interests.',
  ],
  // Quick skill / interest tags.
  skills: [
    'Research',
    'Data Analysis',
    'Academic Writing',
    'UI/UX Design',
    'Illustration',
    'Branding',
    'Figma',
    'Typography',
  ],
}

// Academic / portfolio section: publications, talks, or projects.
export const research = {
  heading: 'Research & Publications',
  items: [
    {
      title: 'Title of Your Paper or Project',
      venue: 'Conference / Journal Name, 2025',
      authors: 'Your Name, Co-author A, Co-author B',
      description:
        'A short summary of the work — the core idea, method, and why it matters.',
      links: [
        { label: 'PDF', href: '#' },
        { label: 'Code', href: '#' },
      ],
    },
    {
      title: 'Another Research Project',
      venue: 'Workshop Name, 2024',
      authors: 'Your Name, Co-author C',
      description:
        'Describe a second project. Keep it concise and focused on the contribution.',
      links: [{ label: 'Details', href: '#' }],
    },
  ],
}

// Creative design portfolio section.
export const portfolio = {
  heading: 'Design Portfolio',
  // Place project images in /public/portfolio/ and reference them below,
  // or leave `image` as null to render a colored placeholder.
  projects: [
    {
      title: 'Brand Identity System',
      category: 'Branding',
      description: 'Logo, color palette, and visual language for a fictional studio.',
      image: null,
      accent: '#6c5ce7',
      href: '#',
    },
    {
      title: 'Editorial Layout',
      category: 'Print / Layout',
      description: 'A magazine spread exploring grid systems and typography.',
      image: null,
      accent: '#00b894',
      href: '#',
    },
    {
      title: 'Mobile App Concept',
      category: 'UI/UX',
      description: 'Interface design for a productivity app, from wireframe to mockup.',
      image: null,
      accent: '#e17055',
      href: '#',
    },
    {
      title: 'Poster Series',
      category: 'Illustration',
      description: 'A set of posters combining illustration and motion-inspired type.',
      image: null,
      accent: '#0984e3',
      href: '#',
    },
  ],
}

export const contact = {
  heading: 'Get in touch',
  blurb:
    'Interested in collaborating, have a question, or just want to say hi? I’d love to hear from you.',
  email: 'you@arizona.edu',
}
