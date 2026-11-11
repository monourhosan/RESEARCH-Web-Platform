# Fixed research shortcut bar

The six research shortcuts are rendered once in the shared site shell, outside the hero's clipped and animated layers. The bar is fixed near the viewport's bottom edge and remains available while scrolling or following links between pages. The brief-builder shortcut points to `/#research-planner` so it also works from other routes. Existing service, approach, and contact destinations are preserved.

Interaction feedback includes a sliding green selection indicator, icon bounce, click-position ripple, and icon hover movement. Repeated clicks and keyboard activation are supported. Reduced-motion preferences suppress these animations. Blue, white, green, and red remain the only UI base colors.

On mobile, all six shortcuts stay in a compact single row with full accessible names and shortened visible labels. The dock accounts for the device's bottom safe area. Footer padding and scroll padding reserve space so the final page links and anchor destinations remain reachable. Native dialogs appear above the dock.

Verification: production build passed. Browser checks confirmed one fixed dock outside the hero, an approximately 12px desktop / 8px mobile bottom gap after scrolling and navigating, six icons after repeated interactions, working cross-page shortcuts and keyboard activation, and no mobile horizontal overflow or browser errors. Previews: `fixed-dock-preview.jpg`, `fixed-dock-mobile.jpg`, and `redesign-preview.jpg`.
