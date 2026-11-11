# Logo recolor

The original infinity-eye emblem geometry, typeface, wording, and sizing are preserved. On white surfaces the left loop and “Mirror” use UI green, the right loop and “Metrics” use UI blue, and small eye highlights and the research subtitle use UI red. White eye bases keep the original eye treatment clear.

The green hero header and footer use a light version: pale-red and white loops, blue pupils, small red highlights, and white/pale-red lettering. The header selects the appropriate version as it scrolls from the green hero to the white navigation background. The mobile menu uses the full-color version on white.

The live vector mark and its PNG fallbacks are coordinated. Exports: `/logo-ui.svg`, `/logo-ui.png`, `/logo-ui-light.svg`, `/logo-ui-light.png`, and `/apple-icon.png`. The favicon uses the same current palette. Original logo assets are retained.

Verification: the SVG path, circle, rectangle, and viewBox geometry attributes were compared with the prior commit and are unchanged. Production build and TypeScript passed. Browser checks confirmed the expected colors in the hero, normal header, footer, and mobile menu, with no horizontal overflow or browser errors. `logo-colors-preview.png` compares crops of actual light and dark header screenshots; the complete captures are saved alongside it.
