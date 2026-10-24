import snapshot from "./sources/world-bank-bangladesh-2026-10-24.json";

const internet = snapshot.indicators.find(item => item.code === "IT.NET.USER.ZS")!;
const urban = snapshot.indicators.find(item => item.code === "SP.URB.TOTL.IN.ZS")!;
export const DATA_YEAR = 2024;
export const INTERNET_TREND = internet.data
  .filter(item => Number(item.date) >= 2020 && Number(item.date) <= DATA_YEAR && item.value !== null)
  .map(item => ({ year: Number(item.date), value: item.value as number }))
  .sort((a, b) => a.year - b.year);
const urbanShare = urban.data.find(item => Number(item.date) === DATA_YEAR)!.value as number;
export const POPULATION_PROFILE = [
  { label: "Urban", value: urbanShare, color: "#004f40" },
  { label: "Rural", value: 100 - urbanShare, color: "#91ae78" },
];
export const DATA_RETRIEVED = snapshot.retrievedAt;
export const DATA_UPDATED = internet.metadata.lastupdated;
export const INTERNET_SOURCE = "https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=BD";
export const URBAN_SOURCE = "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=BD";
