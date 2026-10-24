# Mirror Metrics Research Ltd

A responsive website for a social and market research organization in Bangladesh, built with Next.js 16.4.3, React, TypeScript, and Tailwind CSS.

## Run and verify

```powershell
npm install
npm run dev
npm run lint
npm test
npm run build
npm start
```

The tests use Node's built-in TypeScript support (Node 22.18+). The development preview is available at http://localhost:3000.

## Pages and content

- `/`: organization overview, services, work samples, approach, regional contexts, research notes, FAQs, and contact.
- `/about`: organization focus, research principles, and approach.
- `/services`: research capabilities and potential deliverables.
- `/projects`: explicitly illustrative study applications, not claimed client projects.
- `/insights`: three original practical research notes, with complete individual article pages.
- `/contact`: research inquiry form and FAQs.
- `/privacy`: notice describing the actual website form handling.
- `/downloads/mirror-metrics-company-profile.pdf`: two-page company overview.
- `/downloads/illustrative-study-brief.pdf`: two-page sample, explicitly not a completed client study.

The visual system uses white, brand blue, teal, and light notebook colors. Complete headings use locally hosted Bricolage Grotesque, body text uses Source Sans 3, and a few illustration notes use Caveat. Original hand-drawn illustrations depict a household survey and a facilitated group discussion. Service icons use small ink-style SVG drawings. The organization logo is preserved. Motion is limited to the hero introduction, selected panels, FAQ expansion, dialogs, and small control feedback; reduced-motion preferences are respected.

Shared research content is in `src/data/researchData.ts`. Site components are in `src/components`; dedicated pages are in `src/app`. The original unsupported percentages, staff credentials, client results, exact field-office claims, and generic social-media links have been removed from the live pages. Legacy illustration components remain available but are not rendered.

## Enable online inquiry delivery

There is no email account or service configured in this checkout. Forms do not simulate delivery. They validate inputs, request explicit contact consent, and POST to `/api/requests`. Without delivery credentials, visitors receive a clear message and a prepared email link containing their entered details. Clicking that link opens their email app; the visitor sends the email.

To enable online delivery:

1. Configure a Resend account and verify a sender domain.
2. Copy `.env.example` to `.env.local` for local development, or set these variables in your deployment host:

```text
NEXT_PUBLIC_SITE_URL=https://your-actual-site-domain
RESEND_API_KEY=your-server-side-api-key
INQUIRY_FROM_EMAIL=Mirror Metrics <website@your-verified-domain>
INQUIRY_TO_EMAIL=your-confirmed-receiving-inbox
```

3. Restart the local server or redeploy after changing the environment.
4. Submit a real inquiry and confirm it arrives in the receiving inbox, including its reply-to address. No real email is sent by the automated tests.

The implementation uses the [Resend send-email API](https://resend.com/docs/api-reference/emails/send-email). Success requires the provider to return a delivery reference. Contact, proposal, and newsletter request forms share validation, loading/error states, and a complete mailto fallback. Newsletter requests are delivered to the organization for follow-up; they do not silently enroll anyone in a mailing list or send automated campaigns.

The backend caps request bodies at 16 KB, checks origin and content type, validates fields on the server, includes a honeypot and a basic per-instance rate limit, sets a provider timeout, and does not log form contents. For a larger multi-instance deployment, replace the per-instance request counter with a shared rate limiter.

## Confirm before public launch

- Confirm the public contact email currently carried over from the original site: `inquiry@mirrormetrics.com.bd`.
- Confirm Dhaka as the public business location. The unverified street address and placeholder phone number are not displayed.
- Provide approved team biographies, genuine field photographs, client-logo permissions, and completed-study summaries before publishing them as evidence of experience. Keep all current sample applications clearly labeled until then.
- Set the actual site URL, confirm the privacy notice matches your operating practices, and complete a real delivery test.
- The website includes a sitemap, robots file, brand icon, generated social-preview image, page metadata, canonical links, and a custom 404 page.

## Regenerate downloads

`scripts/create_research_pdfs.py` generates the two public PDF resources using ReportLab and Windows Segoe UI/Georgia fonts. It writes inspection copies to `output/pdf` and publishes copies to `public/downloads`. Render and visually inspect every page when changing the script or PDF content.

## Photography and design history

The website now uses actual stock photographs taken in Bangladesh throughout the homepage, dedicated pages, and research notes. The ten local JPG assets are in `public/photos`; `src/data/photography.ts` records their sources, credits, and verified locations. `/photography` provides public credits and explains the photographs' contextual use. The people shown are not presented as Mirror Metrics staff, clients, or participants. Next.js Image provides responsive image optimization; the hero loads eagerly and supporting images load lazily.

`docs/design/photography.md` records the current direction and data sources. Earlier drawing and generated assets remain in `public/illustrations` as design history, but live pages do not import them. Earlier decisions and prompts remain in `docs/design/direction.md`, `reference-direction.md`, and `illustration-prompts.md`. Font source and licensing notes are in `src/app/fonts/README.md`.

The official `anthropics/skills` frontend-design skill was installed locally and read for this update; it will be discoverable in subsequent turns. The interface uses no additional animation library or external runtime font requests.

## Interactive data graphics and hover feedback

The homepage includes `PublishedData.tsx`: actual Bangladesh internet-use figures for 2020–2024 and the 2024 urban/rural population split, from ITU and UN data via World Bank WDI. The raw API snapshot is saved in `src/data/sources/world-bank-bangladesh-2026-10-24.json`; a full-precision CSV is available at `/downloads/bangladesh-context-data.csv`. UI values are rounded to one decimal and include source links, dates, definitions, and a clear distinction between national indicators and organization results. The section connects the data to research planning questions and the organization's services. `DataGraphics.tsx` re-exports this replacement for compatibility.

Chart highlights support mouse hover, keyboard focus, and taps. Cards, buttons, links, photos, and process controls use restrained feedback; pointer hover transforms apply only to devices with a fine pointer. All transitions and animations respect the existing reduced-motion preference.

## Reference-led green editorial redesign

`src/app/reference-theme.css` adapts the supplied visual reference with a framed canvas, forest green and cream sections, light sans-serif headings, and pill controls. `src/app/photography.css` arranges real Bangladesh photographs throughout that design. The hero now uses `public/photos/rangpur-farming.jpg`, photographed in Pirganj by masudar rahman. The theme applies across dedicated pages and preserves inquiry delivery behavior.
