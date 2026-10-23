import type { SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement>;
const shared = { viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };

export function CommunityMark(props: MarkProps) {
  return <svg {...shared} {...props}><path d="M5 40c4-11 12-14 22-11m10 0c12-3 19 2 22 13M20 22c-8 2-12-3-12-8S15 4 21 7c6 2 7 10 2 13m21 1c-5-2-7-10-2-14 6-6 16 0 14 7-1 5-4 8-10 8" /><path d="M19 54c-1-13 1-21 11-23 12-3 19 9 17 23M38 20c0 5-3 9-8 9-6 0-9-5-8-10 1-7 16-8 16 1Z" /><path d="m25 54 15 1" opacity=".5" /></svg>;
}
export function MarketMark(props: MarkProps) {
  return <svg {...shared} {...props}><path d="M10 26 14 9l36 1 6 17M8 27c1 9 10 9 14 1 3 8 13 8 16-1 3 9 15 9 19 0M12 34l-1 22 43-1-1-21M25 56l1-16h14l-1 15M15 18l37 1" /><path d="m22 10-1 15m15-15 1 16M44 45l5-1" opacity=".6" /></svg>;
}
export function FieldworkMark(props: MarkProps) {
  return <svg {...shared} {...props}><path d="m17 10-7 1 1 46 37-1 1-44-8-1M24 9c-1-7 12-7 13 0l5 1-1 9-21-1 1-8 3-1Z" /><path d="m18 29 3 3 5-6m4 4 10 1M18 42l3 3 5-6m5 4 8-1m8-5 8-8 5 5-12 13-5 1 1-5" /></svg>;
}
