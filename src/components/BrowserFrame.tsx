import React from "react";
import { Layers2 } from "lucide-react";

interface BrowserFrameProps {
  children: React.ReactNode;
  title?: string;
  urlBarText?: string;
  className?: string;
  headerRight?: React.ReactNode;
  badge?: { text: string; type: "red" | "yellow" | "green" };
}

export default function BrowserFrame({ children, className = "", headerRight, badge }: BrowserFrameProps) {
  return (
    <div className={`research-panel ${className}`}>
      <div className="research-panel-heading"><span><Layers2 size={15} strokeWidth={1.5} /> MIRROR METRICS / RESEARCH PRACTICE</span><div>{badge && <span className="research-tag">{badge.text}</span>}{headerRight}</div></div>
      <div className="research-panel-body">{children}</div>
    </div>
  );
}
