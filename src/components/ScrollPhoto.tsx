import Image from "next/image";
import { PHOTOS, type PhotoKey } from "@/data/photography";

export default function ScrollPhoto({ photo, eager = false }: { photo: PhotoKey; eager?: boolean }) {
  const item = PHOTOS[photo];
  return <div className="scroll-photo" aria-hidden="true"><div className="scroll-photo-layer"><Image src={item.src} alt="" fill sizes="100vw" loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} style={{ objectFit: "cover", objectPosition: item.position }} /></div></div>;
}
