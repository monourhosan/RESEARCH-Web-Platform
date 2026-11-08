import { ArrowUpRight, ArrowUp } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" aria-label="Mirror Metrics home">
              <Logo variant="light" size="md" />
            </Link>
            <span>Market &amp; customer research in Bangladesh</span>
          </div>
          <div className="footer-links">
            <span>Explore</span>
            <Link href="/services">Services</Link>
            <Link href="/about">About us</Link>
            <Link href="/projects">Our work</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/contact#faqs">FAQs</Link>
            <Link href="/privacy">Privacy notice</Link><Link href="/photography">Photography &amp; credits</Link>
          </div>
          <div className="footer-contact">
            <span>Let’s connect</span>
            <p>Dhaka, Bangladesh</p>
            <a className="footer-email" href="mailto:inquiry@mirrormetrics.com.bd">
              inquiry@mirrormetrics.com.bd
            </a>
            <a
              href="/downloads/mirror-metrics-company-profile.pdf"
              className="footer-email"
              download
            >
              Download company profile <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Mirror Metrics Research Ltd. All rights reserved.</p>
          <a href="#main-content">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
