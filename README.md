# Mirror Metrics RESEARCH LTD — Corporate Web Platform

> **"Reflecting True Human & Market Insights."**

A complete, production-ready, responsive corporate website for **Mirror Metrics RESEARCH LTD**, a premier **Social and Market Research** organization based in **Dhaka, Bangladesh**.

Built for zero-configuration deployment on **Vercel (`vercel.app`)** using **Next.js (App Router), React 19, Tailwind CSS, TypeScript, and Lucide Icons**.

---

## 1. Visual Aesthetic & Design Tokens

### Core Typography & Background Tokens
* **Primary Background:** Pure White (`#FFFFFF`)
* **Primary Text & Headings:** Charcoal Black (`#111111`)
* **Secondary Body Text:** Neutral Slate (`#4B5563`)
* **Brand Logo Accents (for vector highlights & organic focal points):**
  * **Mirror Blue:** `#2B5B9E`
  * **Metrics Teal:** `#1CA8B8`

### Mandatory UI Accent Palette
Enforces high-contrast 1px solid borders for crisp, editorial-grade rendering against the `#FFFFFF` canvas:

| Accent | Background / Fill | 1px Solid Border | Text & Icon Color | Primary Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Red Accent** | `#FF5F56` | `#E0443E` | `#790A05` | Quantitative & Qualitative Fieldwork, Zero-Fraud Flags, Quality Audits |
| **Yellow Accent** | `#FFBD2E` | `#DEA123` | `#875210` | Market & Consumer Intelligence, Retail Census, FMCG Indices |
| **Green Accent** | `#27C93F` | `#1AAB29` | `#0C4F16` | Social & Development Research, Live Status Badges, Verified Metrics |

### Minimalist Editorial Layout & Browser-Window Framing
* **Generous Whitespace:** Clean editorial structure with asymmetrical 2-column grids.
* **Custom SVG Line-Art Illustrations:** Hand-crafted black-and-white vector illustrations (field researchers analyzing live data, household survey checklists, retail shelf audits, and CAPI biometric & GPS verification) accented with subtle organic fluid splashes of `#2B5B9E` and `#1CA8B8`.
* **macOS Browser-Window Framing:** Framed interactive cards featuring the three macOS header dots with exact accent fills and borders:
  * Close Dot: `bg-[#FF5F56] border-[#E0443E]`
  * Minimize Dot: `bg-[#FFBD2E] border-[#DEA123]`
  * Maximize Dot: `bg-[#27C93F] border-[#1AAB29]`

---

## 2. Brand Logo Integration

Incorporates the **Mirror Metrics RESEARCH LTD Logo** featuring the interlocking royal-blue (`#2B5B9E`) and teal/cyan (`#1CA8B8`) infinity-eye emblem with dark pupils and reflection gleams:
* **Emblem:** Transparent-background SVG component (`<EmblemSvg />`) and high-resolution PNG asset (`/public/logo.png`).
* **Wordmark:**
  * **Primary Line:** `Mirror Metrics` (Bold, tracking-tight, `#111111`)
  * **Secondary Line:** `RESEARCH LTD` (Uppercase, small, wide letter-spacing, `#555555`)

---

## 3. Section Architecture

### A. Sticky Minimalist Navbar (`src/components/Header.tsx`)
* **Left:** Interlocking Eye Emblem + "Mirror Metrics RESEARCH LTD".
* **Center Navigation:** `Home`, `Services`, `Methodology`, `Insights`, `FAQs`, `Contact` with active bottom-border indicators.
* **Right CTA Button:** Pill-shaped button (`Request a Proposal`) with `#111111` solid fill, white text, and subtle hover lift.
* **Mobile Navigation:** Sliding drawer with touch dismiss and accessible controls.

### B. Hero Section (`src/components/Hero.tsx`)
* **Green Status Pill:** `bg-[#27C93F] border-[#1AAB29] text-[#0C4F16]` — *"Trusted Social & Market Research in Bangladesh"*.
* **Headline:** *"Reflecting True Human & Market Insights."*
* **Subheadline:** *"Mirror Metrics Research Ltd empowers NGOs, development agencies, and enterprises across Dhaka and beyond with rigorous social impact assessments, consumer intelligence, and data-driven strategies."*
* **Dual CTAs:**
  * Primary: Solid black rectangular button `Explore Our Research ->` (`bg-[#111111] text-white hover:bg-black`)
  * Secondary: Outlined pill button `Book a Consultation` (`border-[#111111] text-[#111111] hover:bg-[#111111]/5`)
* **Right Column:** Editorial line-art illustration of a researcher analyzing field telemetry with organic `#2B5B9E` and `#1CA8B8` splashes.

### C. Core Research Pillars (`src/components/CorePillars.tsx`)
Alternating 2-column editorial grid:
1. **Social & Development Research**
   * **Badge (Green Accent):** `Impact & Policy` (`bg-[#27C93F] border-[#1AAB29] text-[#0C4F16]`)
   * Focus: Baseline/endline surveys, public health, socio-economic impact, NGO evaluations.
2. **Market & Consumer Intelligence**
   * **Badge (Yellow Accent):** `Consumer Behavior` (`bg-[#FFBD2E] border-[#DEA123] text-[#875210]`)
   * Focus: Brand health tracking, product testing, retail audits, market sizing, ethnographic research.
3. **Quantitative & Qualitative Fieldwork**
   * **Badge (Red Accent):** `High-Precision Data` (`bg-[#FF5F56] border-[#E0443E] text-[#790A05]`)
   * Focus: CAPI (SurveyCTO/Kobo), FGDs, KIIs, and real-time algorithmic QA monitoring.

### D. Interactive "Research Database & Newsletter" Showcase (`src/components/ResearchShowcase.tsx`)
* **Left:** Minimalist browser-window illustration with Red, Yellow, Green header dots showcasing interactive sample data cards from Bangladesh market reports (FMCG retail indices, MFS rural liquidity, coastal salinity dynamics, and RMG labor welfare).
* **Right:** **"Curated Bangladesh Insights Newsletter"** with email subscription form, organization input, and crisp black rectangular border button (`Read the Insights`).

### E. Interactive FAQ Accordion (`src/components/FaqAccordion.tsx`)
Clean, minimalist single-column accordion answering common client questions:
* Turnaround timelines for nationwide quantitative fieldwork in Bangladesh
* Nationwide field coverage logistics across all 8 administrative divisions
* Data security, GDPR, and local ethical review (IRB) protocols
* Custom survey instrument design for informal retail and rural communities
* Quality Assurance (QA) anti-fraud mechanisms (10% supervisor back-checks, audio audits, speed-run flags)
* Final dataset deliverable formats (SPSS, Stata, R, CSV, interactive dashboards)

### F. Contact & Dhaka Headquarters Footer (`src/components/ContactSection.tsx`, `src/components/Footer.tsx`)
* **Contact Form:** Clean, distraction-free form (`Name`, `Organization`, `Email`, `Research Scope`, `Submit Inquiry`) with interactive success state.
* **Location & Details Card:**
  * **Organization:** Mirror Metrics RESEARCH LTD
  * **Location:** Dhaka, Bangladesh (House 42, Road 11, Block D, Banani, Dhaka-1213)
  * Direct phone, email, and 24/7 field sync details.
* **Footer:** Interlocking eye emblem, wordmark, quick links, practice areas, field stations, copyright, and social links.

### G. Interactive Scope Estimator Modal (`src/components/ProposalModal.tsx`)
Triggered via "Request a Proposal" or "Book a Consultation", allowing clients to select research division, geographic scope (e.g. Nationwide or specific divisions), and sample size (300 to 12,000+), computing required enumerators, supervisors, fieldwork duration, and 10% back-check audits in real time.

---

## 4. File Structure

```
Webapp/
├── public/
│   ├── logo.png                   # Transparent PNG emblem (Image 2)
│   ├── logo-emblem.png            # High-resolution emblem copy
│   └── logo-full.jpg              # Original full brand reference
├── src/
│   ├── app/
│   │   ├── favicon.ico            # Brand favicon
│   │   ├── globals.css            # Tailwind CSS, color variables, 1px accent utility classes
│   │   ├── layout.tsx             # Root layout with SEO metadata & OpenGraph tags
│   │   └── page.tsx               # Primary page assembling all sections
│   ├── components/
│   │   ├── BrowserFrame.tsx       # Reusable macOS-style browser-window card
│   │   ├── ContactSection.tsx     # Contact form and Dhaka Headquarters details
│   │   ├── CorePillars.tsx        # Alternating 2-column editorial grid for the 3 pillars
│   │   ├── EditorialIllustrations.tsx # Custom vector line-art with organic blue/teal splashes
│   │   ├── FaqAccordion.tsx       # Interactive single-column FAQ accordion
│   │   ├── Footer.tsx             # Pure white footer with subtle top border
│   │   ├── Header.tsx             # Sticky minimalist navbar with active link indicator
│   │   ├── Hero.tsx               # 2-column split hero section
│   │   ├── Logo.tsx               # Scalable SVG & image emblem with brand wordmark
│   │   ├── MethodologySection.tsx # 4-step research methodology and IRB protocols
│   │   ├── NationwideReach.tsx    # Interactive 8-division Bangladesh coverage explorer
│   │   ├── ProposalModal.tsx      # Interactive study estimator and proposal modal
│   │   └── ResearchShowcase.tsx   # Interactive research database and newsletter showcase
│   └── data/
│       └── researchData.ts        # Structured data for divisions, reports, and FAQs
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 5. Deployment on Vercel (`vercel.app`)

This project is configured for zero-configuration deployment on Vercel:

1. **Push to GitHub / GitLab / Bitbucket:**
   ```bash
   git init
   git add .
   git commit -m "feat: complete Mirror Metrics corporate web platform"
   git remote add origin https://github.com/<your-username>/mirror-metrics.git
   git push -u origin main
   ```

2. **Import into Vercel:**
   * Go to [vercel.com/new](https://vercel.com/new).
   * Select your repository.
   * Framework Preset: **Next.js** (automatically detected).
   * Root Directory: `./` (or `Webapp` if within a monorepo).
   * Build Command: `next build` (default).
   * Output Directory: `.next` (default).
   * Click **Deploy**.

3. **Production Verification:**
   * Local verification completed: `npm run build` succeeds in `< 1s` with zero TypeScript or ESLint errors.
#   R E S E A R C H - W e b - P l a t f o r m  
 