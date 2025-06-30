# AI Customer‑Support Automation Website — **Developer Blueprint v2**

**Purpose:** Build a high-converting landing page for an AI agency that sells automated customer support solutions. The goal is to clearly explain the value proposition, demonstrate proof (via demo/chatbot), and drive users to book a 15-minute consultation call through Calendly.

**Objective:** ship a lightning‑fast, conversion‑focused landing page (Next.js + TypeScript) that turns cold traffic into booked demo calls.

---

## 🛠 Core Stack

| Layer               | Choice                                                  | Notes                                                                                                             |
| ------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Framework**       | Next.js 14 (App Router)                                 | Layout.tsx for shell, React Server Components for pure content, Client components only where interactivity needed |
| **Lang**            | TypeScript                                              | `strict` mode on                                                                                                  |
| **UI**              | Tailwind CSS v3 + shadcn/ui                             | shadcn for ready cards/accordion/buttons                                                                          |
| **Images**          | `next/image`                                            | AVIF/WEBP automatic, blur placeholder                                                                             |
| **Forms & Booking** | Calendly Popup Widget                                   | loads async via `dynamic()` to avoid main thread block                                                            |
| **State**           | React Hooks (only client comps)                         | minimal state                                                                                                     |
| **Analytics**       | Fathom (EU‑friendly)                                    | cookieless mode + consent banner                                                                                  |
| **Quality**         | ESLint, Prettier, Husky + lint‑staged, Type‑check in CI | fail build on lint/type errors                                                                                    |
| **Tests**           | Playwright (e2e) + Jest/React Testing Library           | one happy‑path e2e: land → book call                                                                              |
| **Deploy**          | Vercel                                                  | production preview URLs per PR                                                                                    |

---

## 📁 Recommended Repo Structure

```
/ (root)
 ├─ app/
 │   ├─ layout.tsx        # global shell + fonts
 │   ├─ page.tsx          # landing page
 │   └─ components/
 │        ├─ header.tsx
 │        ├─ hero.tsx
 │        ├─ trust‑strip.tsx
 │        ├─ pain‑promise.tsx
 │        ├─ process‑steps.tsx
 │        ├─ demo‑section.tsx
 │        ├─ case‑studies.tsx
 │        ├─ pricing.tsx
 │        ├─ faq.tsx
 │        ├─ final‑cta.tsx
 │        └─ footer.tsx
 ├─ public/demo‑poster.gif
 ├─ scripts/
 │   └─ optimize‑lcp.mjs  # optional perf script
 ├─ .github/workflows/ci.yml
 └─ README.md
```

---

## 🚧 Phased Implementation Roadmap

### 🔰 **Phase 0 – Project Bootstrap (½ day)**

1. `create‑next‑app@latest --ts --tailwind --eslint ai-support-site`
2. Configure **ESLint**, **Prettier**, and **Husky** pre‑commit.
3. Push to GitHub; enable Vercel integration (preview URLs per PR).
4. Add `ci.yml` → lint, type‑check, unit tests, Lighthouse CI (budget: LCP < 1.5 s, CLS < 0.1).

### 🚀 **Phase 1 – Conversion Skeleton (1 day)**

1. Build **Header** with sticky effect (`sticky top‑0 z‑50 backdrop‑blur`).
2. Implement **Hero**:
   - H1: `text‑4xl md:text‑6xl font‑bold`
   - Subhead: concise benefit statement.
   - CTA → Calendly popup (dynamic import).
   - 15‑s muted GIF within `<Image>` (priority=true).
3. Insert **TrustStrip** (SVG logos, grayscale filter `opacity‑70 hover:opacity‑100`).
4. **Mobile first**: `flex‑col`, center align; min tap size `min‑w-[180px] py‑3`.

### 💎 **Phase 2 – Value Proof (1 day)**

1. **PainPromise** two‑column grid (`md:grid-cols‑2`, falls to single col on sm).
2. Comparison mini‑table using shadcn `<Table>` (hidden on <=xs to keep scroll short).
3. **ProcessSteps** timeline with icons from lucide‑react.

### 🖥️ **Phase 3 – Interactive Demo (½ day)**

1. Host sandbox bot (Streamlit/iframe) – ensure CORS ok.
2. Wrapper component sets `aspect‑ratio-[16/9]` + `max‑w‑full`.
3. Lazy‑load iframe (`loading="lazy"`) + skeleton shimmer.
4. Secondary CTA immediately below.

### 🧲 **Phase 4 – Credibility & Offer (1 day)**

1. **CaseStudies**: shadcn `<Carousel>`; swipeable on touch.
2. **Pricing** table + Guarantee badge (icon CheckCircle).
3. **FAQ** accordion (open first item = default).

### 🎯 **Phase 5 – Final CTA + A11y + SEO (½ day)**

1. Full‑width gradient banner with CTA.
2. Footer with legal, company org‑nr, social icon list.
3. Accessibility pass: color contrast > 4.5, focus states, `aria‑label` on buttons.
4. SEO: `next-seo` default config, OG image (1200×630), meta description <= 155 chars.

### 📈 **Phase 6 – Analytics & Performance Hardening (½ day)**

1. Integrate Fathom via `<Script>` (lazyOnload).
2. Add consent banner (shadcn Dialog) if cookies enabled.
3. Run Lighthouse in incognito throttled 4G; fix any red metrics.
4. Pre‑render critical hero fonts via `<link rel="preload" as="font">`.

### 🚀 **Phase 7 – Launch & Iterate (ongoing)**

1. Connect custom domain, enforce HTTPS/HSTS.
2. Set up 404 and robots.txt.
3. Heat‑map (Hotjar sample 2k recordings) to watch scroll + click.
4. A/B Hero copy (Next.js middleware cookie flag + Fathom goals).

---

## 📱 Mobile & Accessibility Checklist (use for PR review)

- [ ] CLS < 0.1 on 360 px width.
- [ ] <header> height <= 64 px; content not obscured by iOS bottom bar.
- [ ] CTA buttons: `min‑height 44px`, `min‑width 180px`.
- [ ] Nav collapses to hamburger; menu slides over with `transition-transform`.
- [ ] Images use `sizes="(max-width: 768px) 100vw, 50vw"`.
- [ ] All interactive elements reachable via `Tab` and have visible focus.

---

## 🧪 Quality Gates

| Stage          | Gate                                      |
| -------------- | ----------------------------------------- |
| **Pre‑commit** | lint‑staged → ESLint + Prettier           |
| **CI**         | `npm run test && npm run type-check`      |
| **PR Review**  | ✅ mobile checklist, ✅ Lighthouse budget |
| **Pre‑prod**   | Playwright e2e passes (<2 s TTFB)         |

---

## 🔗 Useful Links

- Next.js App Router: https://nextjs.org/docs/app
- shadcn/ui components: https://ui.shadcn.com
- Tailwind responsive design: https://tailwindcss.com/docs/responsive-design
- Fathom cookieless analytics: https://usefathom.com

---

### ⏱️ Estimated Total Dev Time

**~4.5 full dev days** (+ iteration).

---

**End of Blueprint**
