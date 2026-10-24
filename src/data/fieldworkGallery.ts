import type { PhotoKey } from "./photography";

export const FIELDWORK_SETTINGS = ["Households", "Fields", "Shops", "Markets", "Roads"] as const;
export type FieldworkSetting = typeof FIELDWORK_SETTINGS[number];
export type FieldworkGalleryItem = {
  id: string;
  photo: PhotoKey;
  setting: FieldworkSetting;
  title: string;
  description: string;
  provenance: "team" | "reference";
};

// Reference images are explicitly identified in the UI. Replace these entries
// with approved organization-owned photographs before presenting a team archive.
export const FIELDWORK_GALLERY: FieldworkGalleryItem[] = [
  { id: "household-visit", photo: "gallery-household-survey", setting: "Households", title: "A conversation at home", description: "A BRAC community health worker conducts a household survey in Korail, Dhaka (2011). Photograph by Lucy Milmo for DFID.", provenance: "reference" },
  { id: "rural-livelihoods", photo: "gallery-rural-field", setting: "Fields", title: "Livelihoods in the countryside", description: "A farmer carrying crops walks beside a cow in Rangpur. Household and agricultural research can explore how these livelihoods change across the seasons.", provenance: "reference" },
  { id: "local-shop", photo: "gallery-local-shop", setting: "Shops", title: "Inside a local shop", description: "Inside a shop in Dholaikhal, Dhaka (2012). Local retail research can examine how small businesses work, source goods, and serve their customers.", provenance: "reference" },
  { id: "market-trade", photo: "gallery-market-vendor", setting: "Markets", title: "The people behind the market", description: "A vendor at a Dhaka market. Studies in markets can explore customer choices, trading conditions, and experiences from both sides of a purchase.", provenance: "reference" },
  { id: "roadside-life", photo: "gallery-road-life", setting: "Roads", title: "Everyday journeys", description: "Rickshaw drivers alongside a Dhaka road. Transport and access studies can examine everyday journeys and the working lives connected to them.", provenance: "reference" },
];
