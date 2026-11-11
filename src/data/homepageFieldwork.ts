const generatedScene = (name: string, title: string, alt: string, position = "center") => ({
  src: `/photos/home-fieldwork-${name}.webp`,
  title,
  alt,
  position,
  credit: "AI-generated illustrative scene",
  location: "Illustrative Bangladesh setting",
  source: "/photography#illustrative-fieldwork",
  photographerUrl: "/photography#illustrative-fieldwork",
  license: "AI-generated illustration",
  licenseUrl: "/photography#illustrative-fieldwork",
});

export const HOMEPAGE_FIELDWORK_PHOTOS = {
  "home-household-interview": generatedScene("household", "Household interviews", "Photorealistic illustration of a researcher recording a woman's household survey responses on a tablet at home in Bangladesh", "center 42%"),
  "home-market-survey": generatedScene("market", "Market & retail research", "Photorealistic illustration of a researcher taking survey notes while interviewing a vegetable seller at a Bangladeshi market", "center 43%"),
  "home-roadside-interview": generatedScene("roadside", "Roadside interviews", "Photorealistic illustration of a researcher interviewing a rickshaw driver with a tablet beside a road in Bangladesh", "center 43%"),
  "home-agricultural-interview": generatedScene("agricultural", "Agricultural field research", "Photorealistic illustration of a researcher recording a farmer's answers beside a paddy field in Bangladesh", "center 40%"),
} as const;

export const HOMEPAGE_FIELDWORK_SETTINGS = [
  { photo: "home-household-interview", title: "Household interviews", caption: "Listening to people at home" },
  { photo: "home-market-survey", title: "Retail research", caption: "Understanding vendors and local markets" },
  { photo: "home-roadside-interview", title: "Roadside interviews", caption: "Hearing about everyday journeys" },
  { photo: "home-agricultural-interview", title: "Agricultural field research", caption: "Learning from farmers in the field" },
] as const;
