"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, MapPin, X } from "lucide-react";
import { PHOTOS, getPhotoLicenseUrl } from "@/data/photography";
import { FIELDWORK_GALLERY, FIELDWORK_SETTINGS, type FieldworkSetting } from "@/data/fieldworkGallery";

export default function FieldworkGallery() {
  const [setting, setSetting] = useState<FieldworkSetting | "All">("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const visible = FIELDWORK_GALLERY.filter(item => setting === "All" || item.setting === setting);
  const selectedIndex = visible.findIndex(item => item.id === selectedId);
  const selected = selectedIndex >= 0 ? visible[selectedIndex] : null;
  const selectedPhoto = selected ? PHOTOS[selected.photo] : null;
  const hasReferences = FIELDWORK_GALLERY.some(item => item.provenance === "reference");
  const changePhoto = (direction: number) => {
    if (selectedIndex < 0) return;
    const nextIndex = (selectedIndex + direction + visible.length) % visible.length;
    setSelectedId(visible[nextIndex].id);
  };
  const handleKeys = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      changePhoto(event.key === "ArrowRight" ? 1 : -1);
    }
  };

  return <section id="fieldwork-gallery" className="section-space field-gallery-section" aria-labelledby="field-gallery-heading">
    <div className="site-container">
      <div className="field-gallery-heading"><div><p className="eyebrow">Fieldwork settings in Bangladesh</p><h2 id="field-gallery-heading">Research starts<br />where life happens.</h2></div><div><p>At home, on a farm, inside a shop, or along a busy road—local context helps shape the questions a field study asks.</p><p>Explore the settings below. Select a photograph for a closer look and its story.</p></div></div>
      {hasReferences && <p className="field-gallery-reference"><span>Reference photographs</span>These images show Bangladesh research settings and third-party fieldwork. They do not show the Mirror Metrics team.</p>}
      <div className="field-gallery-toolbar"><div className="field-gallery-filters" role="group" aria-label="Filter fieldwork photographs">{(["All", ...FIELDWORK_SETTINGS] as const).map(item => <button type="button" key={item} aria-pressed={setting === item} aria-controls="field-gallery-grid" onClick={() => setSetting(item)}>{item === "All" ? "All settings" : item}</button>)}</div><p role="status" aria-live="polite">{visible.length} {visible.length === 1 ? "photograph" : "photographs"}</p></div>
      <div className="field-gallery-grid" id="field-gallery-grid" data-count={visible.length}>
        {visible.map((item, index) => { const photo = PHOTOS[item.photo]; return <button type="button" className="field-gallery-card" key={item.id} data-photo={item.photo} aria-label={`View photo: ${item.title}`} aria-haspopup="dialog" onClick={() => { setSelectedId(item.id); dialogRef.current?.showModal(); }}>
          <figure><div className="field-gallery-image"><Image src={photo.src} alt={photo.alt} fill sizes={index === 0 ? "(max-width: 767px) 90vw, 55vw" : "(max-width: 767px) 45vw, 35vw"} style={{objectPosition:photo.position}} /><span className="field-gallery-expand"><Expand size={17} /></span></div><figcaption><div><span className="field-gallery-setting">{item.setting}</span><h3>{item.title}</h3></div><span className="field-gallery-location"><MapPin size={12} />{photo.location}</span><span className="field-gallery-credit">Photo: {photo.credit}</span></figcaption></figure>
        </button>; })}
      </div>
      <div className="field-gallery-footer"><p>Different places. Different perspectives. A field plan shaped around the people taking part.</p><a href="/services#services" className="text-link">Explore our fieldwork services <ArrowUpRight size={16} /></a></div>
    </div>

    <dialog ref={dialogRef} className="field-gallery-dialog" aria-labelledby="field-gallery-photo-title" onClose={() => setSelectedId(null)} onKeyDown={handleKeys} onClick={event => { const box = event.currentTarget.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialogRef.current?.close(); }}>
      <div className="field-gallery-dialog-top"><span>Photographs from Bangladesh</span><button type="button" className="icon-button" aria-label="Close photo viewer" autoFocus onClick={() => dialogRef.current?.close()}><X size={22} /></button></div>
      {selected && selectedPhoto && <div className="field-gallery-viewer-content"><div className="field-gallery-large-image"><Image src={selectedPhoto.src} alt={selectedPhoto.alt} fill sizes="(max-width: 767px) 95vw, 1000px" style={{objectFit:"contain"}} /></div><div className="field-gallery-dialog-caption"><div aria-live="polite" aria-atomic="true"><span className="field-gallery-setting">{selected.setting}{selected.provenance === "reference" ? " · Reference photograph" : " · Mirror Metrics fieldwork"}</span><h3 id="field-gallery-photo-title">{selected.title}</h3><p>{selected.description}</p><div className="field-gallery-attribution"><span>{selectedPhoto.location}</span><a href={selectedPhoto.source} target="_blank" rel="noreferrer">Photo: {selectedPhoto.credit} <ArrowUpRight size={12} /></a><a href={getPhotoLicenseUrl(selectedPhoto)} target="_blank" rel="noreferrer">{selectedPhoto.license}</a></div></div><div className="field-gallery-navigation"><button type="button" className="icon-button" aria-label="Previous photograph" disabled={visible.length < 2} onClick={() => changePhoto(-1)}><ArrowLeft size={19} /></button><span aria-label={`Photograph ${selectedIndex + 1} of ${visible.length}`}>{selectedIndex + 1} / {visible.length}</span><button type="button" className="icon-button" aria-label="Next photograph" disabled={visible.length < 2} onClick={() => changePhoto(1)}><ArrowRight size={19} /></button></div></div></div>}
    </dialog>
  </section>;
}
