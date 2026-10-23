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
              <Logo variant="light" size="lg" emblemSrc="accent" />
            </Link>
            <p>
              Reflecting true human
              <br />
              and market insights.
            </p>
            <span>Social &amp; market research in Bangladesh</span>
          </div>
          <div className="footer-links">
            <span>Explore</span>
            <Link href="/services">Our expertise</Link>
            <Link href="/about">About &amp; approach</Link>
            <Link href="/projects">Research applications</Link>
            <Link href="/insights">Research &amp; perspectives</Link>
            <Link href="/contact#faqs">FAQs</Link>
            <Link href="/privacy">Privacy notice</Link>
          </div>
          <div className="footer-contact">
            <span>Let’s connect</span>
            <a href="mailto:inquiry@mirrormetrics.com.bd">
              Start a conversation <ArrowUpRight size={17} />
            </a>
            <p>
              Dhaka
              <br />
              Bangladesh
            </p>
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
          <span>Evidence with context. Decisions with confidence.</span>
          <a href="#main-content">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
