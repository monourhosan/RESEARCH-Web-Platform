import { ImageResponse } from "next/og";

export const alt = "Mirror Metrics Research Ltd - Social and market research in Bangladesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ background: "#f3f8fc", color: "#163554", width: "100%", height: "100%", padding: "66px 76px", display: "flex", flexDirection: "column", position: "relative" }}><div style={{ display: "flex", fontSize: 24, letterSpacing: -1 }}>Mirror Metrics <span style={{ color: "#16734e", marginLeft: 12 }}>Research Ltd</span></div><div style={{ display: "flex", marginTop: 65, flexDirection: "column", fontSize: 66, lineHeight: 1.13, letterSpacing: -3 }}><span>Human insight.</span><span>Market clarity.</span><span style={{ color: "#16734e" }}>Meaningful impact.</span></div><div style={{ display: "flex", fontSize: 16, letterSpacing: 2, marginTop: "auto", color: "#4e6478" }}>SOCIAL & MARKET RESEARCH / BANGLADESH</div><div style={{ display: "flex", position: "absolute", right: -80, top: 100, width: 430, height: 430, borderRadius: "50%", border: "1px solid #bcd3e5", background: "#d9f0e255", alignItems: "center", justifyContent: "center" }}><div style={{ display: "flex", width: 320, height: 320, borderRadius: "50%", border: "1px solid #bcd3e5", alignItems: "center", justifyContent: "center" }}><div style={{ width: 210, height: 210, borderRadius: "50%", border: "1px solid #bcd3e5", background: "#d9f0e2" }} /></div></div></div>, size);
}
