# Rattanakpong Pha — Portfolio

Computer Science · Software Developer & Designer · Phnom Penh, Cambodia

**Live site:** [rattanakpong-portfolio.vercel.app](https://rattanakpong-portfolio.vercel.app)

## About

Computer Science student at Paragon International University working across full-stack development and UI/UX design. Builds web platforms in React, TypeScript and Laravel, and designs visual identities with Figma and Adobe Creative Suite. Currently interning at the Ministry of Industry, Science, Technology & Innovation and serving as Local Director at JCI Phnom Penh.

This repository is the source for that portfolio: a single-page React app covering Home, Work (project showcase), Resume/CV, and Contact.

**Connect:** [GitHub](https://github.com/Rattanakpong) · [LinkedIn](https://www.linkedin.com/in/pha-rattanakpong/) · [Behance](https://www.behance.net/pharattanakpong06) · prattanakpong@gmail.com

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool & dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [React Router](https://reactrouter.com/) — client-side routing (hash-based)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev/) — icons

## Project Structure

```
.
├── public/
│   └── images/
│       ├── profile/        # headshot
│       └── projects/       # project thumbnails
├── src/
│   ├── components/         # Navigation, Footer, ClickableAvatar, Magnetic, TiltWrapper, CursorSpotlight
│   ├── pages/               # Home, Work, Profile, Contact
│   ├── App.tsx              # routes & layout shell
│   ├── main.tsx              # React entry point
│   ├── constants.ts         # site content (skills, experience, projects, credentials)
│   ├── types.ts              # shared TypeScript types
│   └── index.css             # Tailwind entry + global styles
├── index.html
├── vite.config.ts
└── tsconfig.json
```

## Getting Started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:3000)
npm run dev

# type-check
npm run lint

# production build
npm run build

# preview the production build locally
npm run preview
```

## Editing Content

Site copy — skills, education, certifications, work experience, and project entries — lives in a single file: [`src/constants.ts`](src/constants.ts), kept in sync with the latest CV. Update that file to change what's displayed; no need to touch page components for routine content changes.

Project and profile images live under `public/images/`. Reference them with an absolute path (e.g. `/images/projects/my-project.png`). Projects without an image (e.g. ones without a public screenshot yet) can omit `imageUrl` — the Work page falls back to a placeholder treatment.
