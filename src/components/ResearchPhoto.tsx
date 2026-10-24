import Image from "next/image";
import { PHOTOS, type PhotoKey } from "@/data/photography";

export default function ResearchPhoto({ photo, className = "", caption, sizes = "(max-width: 767px) 90vw, 45vw" }: { photo: PhotoKey; className?: string; caption?: string; sizes?: string }) {
  const item = PHOTOS[photo];
  return <figure className={`research-photo ${className}`} data-photo={photo}><div className="photo-frame"><Image src={item.src} alt={item.alt} fill sizes={sizes} style={{ objectPosition: item.position }} /></div>{caption && <figcaption>{caption}</figcaption>}</figure>;
}
