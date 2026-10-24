import ResearchPhoto from "@/components/ResearchPhoto";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <section className="section-space"><div className="site-container error-page"><p className="eyebrow">404 / A DIFFERENT DIRECTION</p><h1>This page is out of view.</h1><ResearchPhoto photo="wp-44097" className="error-photo" /><p>The page may have moved, or the link may be incomplete. Let’s get you back to a useful starting point.</p><Link href="/" className="button button-primary"><ArrowLeft size={16} />Return to the homepage</Link></div></section>;
}
