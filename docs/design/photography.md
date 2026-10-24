# Photography update

## Direction and review

Replace all rendered illustrations, generated scenes, and sketch-style covers with actual camera photographs. Preserve the reference-led forest-green (#003f34), cream (#f5f8f4), stone (#e8e7dc), and sage (#cad8c6) palette and the Source Sans 3 type system.

Use full scenes for the hero and conversation feature, photos within service and resource panels, supporting photographs alongside text, and cropped document details near technical content. A single repeated photo strip would make every section look identical; use different proportions and placements according to the content instead. Keep the interactive charts as data graphics, accompanied by photography.

Every main content section, including dedicated pages and individual research-note sections, must contain a visible real photograph. Navigation, labels, standard interface icons, and the original company logo remain normal UI elements. Footer and newsletter panels also include photography.

## Sources and usage

All current photographs are real stock photos made in Bangladesh and downloaded from Pexels, not AI-generated images. The source, verified Bangladesh location, and credit for each local file are recorded in `src/data/photography.ts` and shown publicly at `/photography`. They are used under https://www.pexels.com/license/. Pictured people are not identified as Mirror Metrics staff, clients, or study participants; images do not imply endorsement or completed research. Ian Taylor receives a clickable photographer backlink on the credits page, as requested on his source profile.

The original drawing assets are preserved in `public/illustrations` for history, but no live route imports or renders them. Do not delete original assets merely to change presentation.

Files in `public/photos`: `rangpur-farming.jpg` (Pirganj), `rangpur-community.jpg` (Rangpur), `bangladesh-river.jpg` (Rangpur), `dhaka-community.jpg`, `dhaka-market.jpg`, `dhaka-gathering.jpg`, `dhaka-skyline.jpg`, `dhaka-street.jpg`, `sreemangal-livelihood.jpg`, and `bangladesh-learning.jpg` (rural Bangladesh). All ten source images were visually inspected. General office stock photographs considered earlier were removed from the collection after the Bangladesh-only requirement was supplied.

## Published Bangladesh data

The previous synthetic survey exhibit is replaced by `PublishedData.tsx`. It presents real World Bank WDI data: ITU internet-use estimates (`IT.NET.USER.ZS`, 2020–2024) and UN urban-population share (`SP.URB.TOTL.IN.ZS`, common reference year 2024). The rural share is the explicitly labeled complement of the urban share. National urban/rural definitions apply; these are country context, not organization results or target-population estimates.

The raw API response is archived in `src/data/sources/world-bank-bangladesh-2026-10-24.json`; all unrounded values and API URLs are downloadable in `public/downloads/bangladesh-context-data.csv`. Retrieval date: 2026-10-24. World Bank source update: 2026-10-08. Attribution: ITU / UN through the World Bank, CC BY 4.0. Values in the UI are rounded to one decimal. The service implications are presented as research planning questions, not claims established by these aggregate data.

- https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=BD
- https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=BD

## Verification requirements

Check all public routes at desktop and mobile widths. Inspect every visible `main section` for a loaded image from the photography collection, verify crops and text contrast, and confirm there are no live illustration requests. Preserve keyboard navigation, dialogs, inquiry validation, research filters, and reduced-motion behavior.


Regional update: each of the eight divisions has two individually allocated, location-documented photographs and unique research planning copy, maintained in `src/data/regionalContext.ts`. The language panel is removed. New CC0 sources and photographer links are recorded in `src/data/additionalPhotos.json`; images are stored locally and optimized by Next.js. Each content placement has its own photograph. Reused shared components keep the same photo for the same content on different routes. The photography credits index is text-only to avoid repeating the images.


Market research expansion: eight new Pexels photographs document real retail and market contexts in Dhaka. Each new content section uses its own image, with original source links in the public credits. The homepage research canvas uses Source Sans 3 and the existing forest, cream, stone, and sage palette. Its evidence-flow graphic and the detailed page’s customer journey describe possible study designs; they do not display fabricated measurements or client results.
