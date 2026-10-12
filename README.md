# Rattanakpong Portfolio

A personal portfolio site showcasing web development projects and graphic design work, built with React, TypeScript, and Tailwind CSS.

**Live site:** _add your deployed URL here_

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
│   ├── components/         # Navigation, Footer
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

Site copy — skills, work experience, credentials, and project entries — lives in a single file: [`src/constants.ts`](src/constants.ts). Update that file to change what's displayed; no need to touch page components for routine content changes.

Project and profile images live under `public/images/`. Reference them with an absolute path (e.g. `/images/projects/my-project.png`).
