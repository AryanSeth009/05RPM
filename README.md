# 05RPM Studio

> **Built at our own frequency.**  
> A student-run tech and design agency from Nagpur, India.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=flat-square&logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ecf8e?style=flat-square&logo=supabase)

---

## Overview

The official production website for **05RPM** — a five-person creative studio building brands, digital products, and web experiences. The site is built as a single-page scroll experience with a vinyl-record aesthetic, custom CSS animations, and a Supabase-backed contact form.

**Live:** `npm run dev` → `http://localhost:3000`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS (PostCSS) |
| Fonts | `next/font/google` — Cormorant Garamond + Plus Jakarta Sans |
| Backend | Supabase (`@supabase/supabase-js`) |
| Animations | Pure CSS keyframes + `IntersectionObserver` |

---

## Project Structure

```
05RPM/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Supabase contact form API route
│   ├── globals.css              # Global styles, keyframes, CSS component classes
│   ├── layout.tsx               # Root layout, fonts, metadata, Cursor injection
│   └── page.tsx                 # Main single-page entry point
│
├── components/
│   ├── ui/                      # Reusable CSS-drawn UI primitives
│   │   ├── Vinyl.tsx            # Spinning vinyl record component
│   │   ├── Cassette.tsx         # Cassette tape element
│   │   ├── EQBars.tsx           # Animated equalizer bars
│   │   ├── RecordSleeve.tsx     # Record sleeve wrapper
│   │   ├── FloatEl.tsx          # Float animation wrapper with rotation
│   │   ├── ProcessIcons.tsx     # Headphone, Fader, Note, Vinyl icons
│   │   └── Cursor.tsx           # Custom two-part cursor (dot + lerp ring)
│   │
│   ├── Nav.tsx                  # Sticky nav with mobile hamburger menu
│   ├── Hero.tsx                 # Hero with vinyl visuals and headline
│   ├── Marquee.tsx              # Infinite scroll banner (pauses on hover)
│   ├── WhyUs.tsx                # Why 05RPM section with animated cluster
│   ├── Tracklist.tsx            # Service list with hover-reveal vinyl
│   ├── Process.tsx              # 4-step process with icon cards
│   ├── CTA.tsx                  # Contact section with validated form
│   └── Footer.tsx               # Footer with social links
│
├── hooks/
│   └── useScrollReveal.ts       # IntersectionObserver for .fi → .on reveals
│
├── lib/
│   └── supabase.ts              # Supabase client factory
│
├── tailwind.config.ts           # Custom colors + font variables
└── tsconfig.json
```

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#EFE6DE` | Page background |
| `cherry` | `#9A0002` | Brand red, accents, CTA |
| `ink` | `#1A1210` | Primary text, footer |
| `muted` | `#8A7B72` | Secondary text, labels |

---

## Fonts

- **Cormorant Garamond** — Headings, italic display text (`font-serif`)
- **Plus Jakarta Sans** — Body copy, nav, UI labels (`font-sans`)

Both loaded via `next/font/google` (zero layout shift, no external requests at runtime).

---

## Page Sections (in order)

1. **Nav** — Sticky top bar with desktop links and mobile hamburger. `rpm` in cherry, `05` in ink.
2. **Hero** — Full-viewport headline with spinning vinyl record, floating cassette, tonearm detail.
3. **Marquee** — Cherry-red scrolling banner. Click/hover to pause.
4. **Why Us** — Two-column layout with ghost text and animated visual cluster.
5. **Tracklist** — Three service tracks with hover animations and vinyl slide-ins.
6. **Process** — Four-step process timeline with pure CSS icon cards.
7. **CTA** — Cherry background contact form. Validates name + email before submission.
8. **Footer** — Simple ink background with social links.

---

## Animations

| Class | Effect |
|---|---|
| `.spin` | 8s infinite rotation |
| `.spin-slow` | 20s infinite rotation |
| `.float-el` | 4.5s ease float up/down |
| `.marquee-go` | 30s infinite horizontal scroll |
| `.marquee-paused` | Paused marquee state |
| `.fi` | Fade + slide-up (hidden) |
| `.fi.on` | Fade + slide-up (visible, triggered by scroll) |

---

## Custom Cursor

A two-part cursor (small dot + lagging ring) is rendered as a client component using `requestAnimationFrame` with lerp easing. It is automatically hidden on touch devices via `@media (hover: none)`.

---

## Contact Form & Supabase

The contact form at the bottom (`#contact`) submits to `/api/contact` which inserts a row into a Supabase `inquiries` table.

### Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

### Supabase Table Schema

```sql
create table inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text,
  created_at timestamptz default now()
);
```

---

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/chaitanyapawar-dev/05RPM.git
cd 05RPM

# 2. Install dependencies
npm install

# 3. Add env vars (see above)
cp .env.example .env.local   # then fill in your Supabase keys

# 4. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

---

## Team

Built by five students. Zero templates. One frequency.

**05RPM Studio** · Nagpur, India · [hello@05rpm.studio](mailto:hello@05rpm.studio)
