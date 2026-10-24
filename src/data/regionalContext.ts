import type { PhotoKey } from "./photography";

type RegionalContext = { headline: string; description: string; questions: string[]; photos: { photo: PhotoKey; caption: string }[] };

export const REGIONAL_CONTEXT: Record<string, RegionalContext> = {
  dhaka: {
    headline: "Everyday decisions in a changing city.",
    description: "From neighbourhood shops to daily journeys, a study in Dhaka needs to account for how people live, work, and move through the city and its surrounding districts.",
    questions: ["What shapes a household’s choice of products and services?", "How do working hours and travel affect access to a program?", "Where do customer experiences differ between neighbourhoods?"],
    photos: [{ photo: "wp-36177", caption: "Working life on Dhaka’s streets" }, { photo: "wp-59946", caption: "A journey by water taxi, Hatirjheel" }],
  },
  chattogram: {
    headline: "Connected by trade, shaped by the coast.",
    description: "Urban centres, coastal settlements, and hill communities bring different experiences to a study in Chattogram. We plan the sample and field approach around the places and people your question concerns.",
    questions: ["How do coastal households adapt their livelihoods?", "What helps local businesses reach customers and suppliers?", "How does location affect access to essential services?"],
    photos: [{ photo: "wp-158455", caption: "Life around Foy’s Lake, Chattogram" }, { photo: "wp-44094", caption: "Kaptai Lake, Rangamati" }],
  },
  rajshahi: {
    headline: "Follow the connections from farm to market.",
    description: "Agriculture, regional towns, and riverside communities offer different starting points for research in Rajshahi. Listening across the value chain can connect producers’ experiences with the choices consumers make.",
    questions: ["Where do growers encounter barriers to selling their produce?", "How do seasonal earnings shape household spending?", "What do regional customers need from local services?"],
    photos: [{ photo: "wp-233474", caption: "Varendra Research Museum, Rajshahi" }, { photo: "wp-30903", caption: "Mango growing in Rajshahi" }],
  },
  khulna: {
    headline: "Understand livelihoods where land meets water.",
    description: "Khulna’s waterways, coastal environments, and market connections call for research that pays attention to place. A study can explore how changing conditions affect income, services, and everyday decisions.",
    questions: ["How do coastal conditions affect household livelihoods?", "What challenges connect producers, traders, and buyers?", "Which services are hardest for river-dependent communities to reach?"],
    photos: [{ photo: "wp-73468", caption: "Mangrove riverside, Sundarbans" }, { photo: "wp-34669", caption: "Working vessels near Mongla" }],
  },
  barishal: {
    headline: "Let the rivers inform the research plan.",
    description: "In Barishal, waterways and coastal routes are part of everyday life. Research planning should consider travel, seasonal access, and the ways people connect to markets and public services.",
    questions: ["How does river travel affect access to a service?", "What changes for households during different seasons?", "How can local distribution better serve coastal communities?"],
    photos: [{ photo: "wp-10532", caption: "Leburchar, Kuakata, Patuakhali" }, { photo: "wp-160642", caption: "The coast at Kuakata" }],
  },
  sylhet: {
    headline: "Different livelihoods. Distinct perspectives.",
    description: "Tea-growing areas, towns, and wetland communities deserve their own place in a Sylhet study. We help frame questions that connect household experience with the services and opportunities around it.",
    questions: ["What matters to households when managing income and savings?", "How do tea-community households experience local services?", "How does seasonal water access affect market participation?"],
    photos: [{ photo: "wp-244620", caption: "Malnicherra Tea Estate, Sylhet" }, { photo: "wp-28801", caption: "River boats at Bholaganj" }],
  },
  rangpur: {
    headline: "Look closely at the rhythm of rural life.",
    description: "A study in Rangpur can follow how farming, seasonal work, and local markets shape household decisions. Including different livelihoods helps reveal whose needs a program or service may be missing.",
    questions: ["How do seasonal earnings affect household priorities?", "What helps farming households access markets and finance?", "Who is being reached by a community program—and who is overlooked?"],
    photos: [{ photo: "rangpur-community", caption: "Livestock and rural livelihoods, Rangpur" }, { photo: "bangladesh-river", caption: "Fields and waterways, Rangpur" }],
  },
  mymensingh: {
    headline: "Connect local livelihoods with opportunity.",
    description: "From riverside settlements to town centres, Mymensingh brings together agricultural livelihoods and everyday journeys to work, education, and services. A grounded study starts with those connections.",
    questions: ["What influences farming and fishing households’ decisions?", "How do travel and cost affect education and health access?", "What do rural customers expect from nearby retailers?"],
    photos: [{ photo: "wp-138606", caption: "Mymensingh Junction railway station" }, { photo: "wp-73494", caption: "The Brahmaputra at Mymensingh" }],
  },
};
