import type { StaticImageData } from "next/image";
import river from "../../public/photos/bangladesh-river.jpg";
import community from "../../public/photos/dhaka-community.jpg";
import market from "../../public/photos/dhaka-market.jpg";
import gathering from "../../public/photos/dhaka-gathering.jpg";
import learning from "../../public/photos/bangladesh-learning.jpg";
import skyline from "../../public/photos/dhaka-skyline.jpg";
import street from "../../public/photos/dhaka-street.jpg";
import livelihood from "../../public/photos/sreemangal-livelihood.jpg";
import farming from "../../public/photos/rangpur-farming.jpg";
import rural from "../../public/photos/rangpur-community.jpg";

// Real photos. Bangladesh locations are documented by the original source pages.
// Pictured people are not presented as company staff, clients, or participants.
function photo(src: StaticImageData, alt: string, title: string, credit: string, location: string, id: number, position = "center", photographerUrl?: string) {
  const source = `https://www.pexels.com/photo/${id}/`;
  return { src, alt, title, credit, location, source, position, photographerUrl: photographerUrl || source };
}
export const PHOTOS = {
  "rangpur-farming": photo(farming, "A woman working in a green paddy field in Pirganj, Bangladesh", "People and livelihoods in Pirganj", "masudar rahman", "Pirganj, Rangpur, Bangladesh", 35633316, "center 44%"),
  "rangpur-community": photo(rural, "A woman carrying a goat through green fields in Rangpur, Bangladesh", "Rural life in Rangpur", "masudar rahman", "Rangpur, Bangladesh", 36705426, "center 55%"),
  "dhaka-gathering": photo(gathering, "Community members gathered in Dhaka, Bangladesh", "Community life in Dhaka", "Ian Taylor", "Dhaka, Bangladesh", 37234398, "center 42%", "https://www.iantaylor.ca"),
  "bangladesh-learning": photo(learning, "Children studying in a rural classroom in Bangladesh", "Learning in a rural classroom", "Ian Taylor", "Bangladesh", 36830379, "center 64%", "https://www.iantaylor.ca"),
  "bangladesh-river": photo(river, "A river and green fields in rural Rangpur, Bangladesh", "Rural Bangladesh", "masudar rahman", "Rangpur, Bangladesh", 16576490, "center 58%"),
  "dhaka-community": photo(community, "People gathered at a neighborhood market stall in Dhaka, Bangladesh", "Everyday life in Dhaka", "Pexels", "Dhaka, Bangladesh", 15242872, "center 43%"),
  "dhaka-market": photo(market, "A vendor and shoppers at a market in Dhaka, Bangladesh", "Markets in context", "Tanha Tamanna Syed", "Dhaka, Bangladesh", 36552959, "center 48%"),
  "dhaka-skyline": photo(skyline, "An aerial photograph of buildings and streets in Dhaka, Bangladesh", "Dhaka from above", "8 K", "Dhaka, Bangladesh", 2382896, "center 60%"),
  "dhaka-street": photo(street, "A road and city buildings in Dhaka, Bangladesh", "Dhaka's urban landscape", "Tanha Tamanna Syed", "Dhaka, Bangladesh", 37408570, "center 60%"),
  "sreemangal-livelihood": photo(livelihood, "A man preparing a meal among tea gardens in Sreemangal, Bangladesh", "Everyday life in Sreemangal", "Tanha Tamanna Syed", "Sreemangal, Sylhet, Bangladesh", 35495308, "center 52%"),
} as const;
export type PhotoKey = keyof typeof PHOTOS;
export const GUIDE_PHOTOS: PhotoKey[] = ["bangladesh-learning", "dhaka-community", "dhaka-street"];
