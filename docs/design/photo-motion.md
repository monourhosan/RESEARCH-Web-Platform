# Interactive photo motion

All framed photographs and photographic background layers respond to mouse or pen position and page scrolling. Touch scrolling uses the scroll effect without intercepting gestures. Text, captions, controls, and image frames remain stationary. Movement is eased and limited to the extra image area provided by an 8% zoom, avoiding exposed image edges.

`PhotoMotion.tsx` manages one animation loop for visible photographs across the website. It registers images introduced by hero changes, gallery filtering, and navigation. It stops requesting frames when movement settles, skips photographs outside the viewport, and suspends updates in hidden tabs. Event listeners and observers are removed when the route changes or the component unmounts.

The existing homepage pause control freezes photo positions along with the other homepage animations. Reduced-motion preferences disable photo translation and zoom through both the event handler and CSS, including changes to that preference while the page is open.

Verification: the production build passed. Browser checks confirmed opposite horizontal offsets after mouse interaction at opposite sides of the hero, registration after changing hero images, frozen offsets while paused, resumed motion on the four homepage image panels, movement after scrolling, and registration after navigating to Contact. No browser errors or horizontal overflow were observed in desktop or mobile checks. The reduced-motion CSS rule was confirmed in the loaded stylesheet.
