# Amritraj – Next.js Portfolio

Modern, animated portfolio built with **Next.js 13 App Router**, **Tailwind CSS**, and **Framer Motion**.

All main content (hero, about, workflow, stats, skills, journey, projects, services, achievements, contact, socials) lives in **`site.config.ts`**.

---

## 1. Getting started

```bash
cd next-portfolio
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

> If TypeScript/ESLint errors show up in the editor before installing, they will disappear after `npm install`.

---

## 2. Editing content quickly (single config file)

Main config: **`site.config.ts`**

```ts
export const siteConfig = {
  hero: {
    headline: "Hi, I'm Amrit Raj.",
    subheadline: "Full Stack Developer | AI/ML Enthusiast",
    tagline: "Building modern, scalable, and user-focused digital experiences with clean and efficient code.",
    ctas: [
      { label: 'View Projects', href: '#projects' },
      { label: 'Contact Me', href: '#contact' },
    ],
    image: {
      src: '/amritraj-profile.jpg',
      alt: 'Portrait of Amrit Raj',
    },
  },
  // ...
};
```

### Hero section
- Change name or title → edit `hero.headline` and `hero.subheadline`.
- Change tagline → edit `hero.tagline`.
- Change buttons → edit `hero.ctas`.
- Change photo → replace `/public/amritraj-profile.jpg` or update `hero.image.src`.

### About
- Edit `about` string in `site.config.ts`.

### Workflow
- Edit `workflow` array for the development steps.

### GitHub stats
- Edit numbers in `stats` (publicRepos, totalCommits, hackathons, stars, forks, topLanguages).

### Skills
- Edit `skills.languages`, `skills.frontend`, `skills.backend`, `skills.tools`.

### Journey / Timeline
- Edit the `journey` array (date, title, description).

### Projects
- Featured projects live in `projects.featured`.
- Add new objects with `id`, `title`, `description`, `liveUrl`, `repoUrl`, `tech`.

### Services & Achievements
- Edit the `services` and `achievements` arrays.

### Contact & Socials
- Change email / success message → `contact.email`, `contact.successMessage`.
- Update GitHub/LinkedIn URLs → `socials.github`, `socials.linkedin`.

---

## 3. Where your photo is used

- Image file: `public/amritraj-profile.jpg`
- Referenced in `site.config.ts` under `hero.image.src`.
- Rendered in `components/Hero.tsx` using `next/image` with rounded and glowing styling.

To change the photo:
1. Replace `public/amritraj-profile.jpg` with a new image file.
2. Or update `hero.image.src` to another file name in `public/`.

---

## 4. Sections & components

- `components/Hero.tsx` – hero with your photo, title, tagline, CTAs.
- `components/About.tsx` – About Me card.
- `components/Workflow.tsx` – Development Workflow list.
- `components/Stats.tsx` – GitHub Activity card.
- `components/Skills.tsx` – Grouped skills.
- `components/Journey.tsx` – Experience/learning timeline.
- `components/Projects.tsx` – Featured projects.
- `components/Services.tsx` – Services you offer.
- `components/Achievements.tsx` – Achievements / hackathon.
- `components/Contact.tsx` – Contact form + direct links.
- `components/Footer.tsx` – Footer with year + socials.

The main page layout is in `app/page.tsx`.

---

## 5. Contact form backend

API routes:

- `POST /api/contact` → `app/api/contact/route.ts`
  - Currently logs `{ name, email, message }` and returns `{ ok: true }`.
  - **TODO:** connect to SMTP provider or Formspree.

- `POST /api/subscribe` → `app/api/subscribe/route.ts`
  - Logs `{ email }` for now.

> Look for `TODO: Amrit` comments in these files to see where to add real integrations.

---

## 6. Styling & theme

- Tailwind config: `tailwind.config.mjs`
  - Primary accent color: `colors.primary = '#a855f7'` (purple). Change this to change the accent.
- Global styles: `app/globals.css`
  - `.section-card`, `.section-label`, `.section-title`, `.section-subtext` define the shared card style.

Animations use **Framer Motion** in the hero image for a subtle entrance/floating feel.

---

## 7. License & notes

- This project is intended as your personal portfolio scaffold.
- You can treat the code as MIT-licensed for your own use.
- For any third-party icons, fonts, or Lottie/3D assets you add later, keep their original licenses.
