# Gimbal Robot Portfolio

Personal portfolio website for the **Autonomous Ground Gimbal Robot** simulation project — built with **React + TypeScript + Vite + Tailwind CSS**.

---

## 🚀 Live Site

Deployed via Netlify → *(add your Netlify URL here once deployed)*

---

## 🏗️ Project Structure

```
gimbal-robot-portfolio/
├── src/
│   ├── components/
│   │   ├── Nav.tsx             # Sticky responsive navigation
│   │   ├── Hero.tsx            # Hero / landing section
│   │   ├── About.tsx           # Project overview & scope
│   │   ├── Architecture.tsx    # ROS 2 node pipeline diagram
│   │   ├── HowToRun.tsx        # Build & run instructions
│   │   ├── Troubleshooting.tsx # Common issues & fixes
│   │   ├── Media.tsx           # Screenshots & demo placeholders
│   │   └── Contact.tsx         # Author contact info
│   ├── App.tsx
│   ├── index.css               # Tailwind CSS + custom utility classes
│   └── main.tsx
├── public/
│   └── media/                  # Place GIFs/screenshots here
├── index.html
├── netlify.toml                # Netlify build + SPA redirect config
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 💻 Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the build with:

```bash
npm run preview
```

---

## 🌐 Deploy on Netlify

### Option 1 — Netlify + GitHub (recommended)

1. Push this repo to GitHub.
2. Log in to [Netlify](https://app.netlify.com/) → **Add new site** → **Import an existing project**.
3. Connect to GitHub and select this repository.
4. Netlify auto-detects the build settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.

Any push to the default branch triggers a new deploy automatically.

### Option 2 — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init        # link to a Netlify site
netlify deploy --prod
```

---

## 🗂️ Sections

| Section         | Anchor             | Description                                            |
|-----------------|--------------------|--------------------------------------------------------|
| Home            | `#hero`            | Project name + one-line pitch                         |
| About           | `#about`           | Goals, scope (sim/control) vs future (hardware)        |
| Architecture    | `#architecture`    | ROS 2 node graph, topics, control pipelines            |
| Timeline        | `#timeline`        | Project milestones from kickoff to handoff             |
| Outcomes        | `#outcomes`        | Key results, metrics, and achievements                 |
| How to Run      | `#how-to-run`      | Build, launch sim, manual takeover keys                |
| NDA Safe        | `#nda-guardrails`  | What is and is not shared publicly                     |
| Contact         | `#contact`         | Author info                                            |

---

## 🎨 Tech Stack

- **Vite** — fast dev server and bundler
- **React 19** — UI library
- **TypeScript** — type safety
- **Tailwind CSS v4** — utility-first styling

---

## 🔒 NDA-Safe Guidance

This portfolio is scoped to **publicly shareable** information only:

- ✅ High-level architecture, node graph, and topic map
- ✅ Algorithm concepts (PID, mode arbitration, safety filtering)
- ✅ Operational instructions and project timeline/outcomes
- ❌ No proprietary code, internal docs, or private repo links
- ❌ No employer/client names, unreleased product details, or raw sensor data

If you are unsure whether something is safe to share, omit it.

---

## 📸 Adding Media

Place GIF/video/screenshot files in `public/media/`, then update the placeholder items in `src/components/Media.tsx` with the correct `src` path.

Example:
```tsx
<img src="/media/tracking-demo.gif" alt="Tracking demo" className="w-full rounded-lg" />
```
