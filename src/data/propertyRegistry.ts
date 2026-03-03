export type PropertyCategory = "current" | "past";

export type FolderPattern = {
  startIndex: number;
  endIndex: number;
  indexPad: number;
  extension: string;
};

export type PropertyMedia =
  | { kind: "single"; file: string }
  | { kind: "none" }
  | {
      kind: "folder";
      folder: string;
      pattern?: FolderPattern;
      coverIndex?: number;
      files?: string[];
      coverFile?: string;
    };

export type PropertyLinks = {
  externalUrl?: string;
  agentName?: string;
  agentUrl?: string;
};

export type PropertySpecs = {
  beds?: string;
  baths?: string;
  sqft?: string;
  units?: string;
  buildingType?: string;
  garage?: string;
};

export type PropertyDates = {
  start?: string;
  end?: string;
  sale?: string;
};

export type PropertyRecord = {
  slug: string;
  name: string;
  address?: string;
  category: PropertyCategory;
  published: boolean;
  featured: boolean;
  statusLabel?: string;
  price?: string;
  estimatedDelivery?: string;
  links?: PropertyLinks;
  description?: string;
  dates?: PropertyDates;
  specs?: PropertySpecs;
  media: PropertyMedia;
};

export type PropertyRegistry = {
  schemaVersion: 1;
  properties: PropertyRecord[];
};

export const propertyRegistry = {
  schemaVersion: 1,
  properties: [
    // ════════════════════════════════════════════════════════════
    // CURRENT PROJECTS — ordered by delivery date (earliest → latest)
    // ════════════════════════════════════════════════════════════
    {
      slug: "2405-w-sunnyside",
      name: "2405 W Sunnyside",
      address: "2405 W Sunnyside Ave, Chicago, IL",
      category: "current",
      published: true,
      featured: true,
      statusLabel: "Sold Out",
      price: "Sold out",
      description: "8 condos — 3 bed 3.5 bath.",
      estimatedDelivery: "Mar 2026",
      links: { agentName: "Tim & Bridget Sheahan", agentUrl: "https://thesheahangroup.com/" },
      dates: { start: "", end: "", sale: "2026" },
      specs: { beds: "3", baths: "3.5", sqft: "", units: "8", buildingType: "Condo", garage: "" },
      media: {
        kind: "folder",
        folder: "2405_w_sunnyside",
        files: [
          "2405_w_sunnyside_01.jpg",
          "2405_w_sunnyside_02.jpg",
          "2405_w_sunnyside_03.jpg",
          "2405_w_sunnyside_04.jpg",
          "2405_w_sunnyside_05.jpg",
          "2405_w_sunnyside_06.jpg",
          "2405_w_sunnyside_07.jpg",
          "2405_w_sunnyside_08.jpg",
          "2405_w_sunnyside_09.jpg",
          "2405_w_sunnyside_10.jpg",
          "2405_w_sunnyside_11.jpg",
          "2405_w_sunnyside_12.jpg",
          "2405_w_sunnyside_13.jpg",
        ],
        coverFile: "2405_w_sunnyside_03.jpg",
      },
    },
    {
      slug: "4701-n-clark-st",
      name: "4701 N Clark St",
      address: "4701 N Clark St, Chicago, IL",
      category: "current",
      published: true,
      featured: false,
      statusLabel: "May 2026",
      price: "Root Management handling rentals",
      description: "36-unit rental building — 1 bed and 2 bed units.",
      estimatedDelivery: "May 2026",
      links: { agentName: "Root Management", agentUrl: "https://www.rootrealty.com/" },
      dates: { start: "", end: "", sale: "2026" },
      specs: { beds: "1 & 2", baths: "", sqft: "", units: "36", buildingType: "Rental, ground floor commercial", garage: "" },
      media: { kind: "single", file: "4701_n_clark_st.jpg" },
    },
    {
      slug: "2720-n-ashland",
      name: "2720 N Ashland",
      address: "2720 N Ashland Ave, Chicago, IL",
      category: "current",
      published: true,
      featured: false,
      statusLabel: "Coming Soon",
      price: "Coming soon",
      description: "6 condos coming soon.",
      estimatedDelivery: "Sep 2026",
      links: { agentName: "Tim & Bridget Sheahan", agentUrl: "https://thesheahangroup.com/" },
      dates: { start: "", end: "", sale: "2026" },
      specs: { beds: "", baths: "", sqft: "", units: "6", buildingType: "Condo", garage: "" },
      media: { kind: "single", file: "2718_ashland_rendering.jpg" },
    },
    {
      slug: "2221-2231-n-magnolia-ave",
      name: "2221/31 N Magnolia",
      address: "2221 & 2231 N Magnolia Ave, Chicago, IL",
      category: "current",
      published: true,
      featured: false,
      statusLabel: "October 2026",
      price: "$4.2M",
      description: "2 single family homes — 6 bed 6.5 bath.",
      estimatedDelivery: "Oct 2026",
      links: { agentName: "Danny Glick", agentUrl: "https://www.atproperties.com/agents/1456/danny-glick" },
      dates: { start: "", end: "", sale: "2026" },
      specs: { beds: "6", baths: "6.5", sqft: "~5,000", units: "2 homes", buildingType: "Single family (2 homes)", garage: "Attached heated" },
      media: { kind: "single", file: "2221-23_magnolia_rendering.jpg" },
    },
    {
      slug: "1933-n-hudson",
      name: "1933 N Hudson",
      address: "1933 N Hudson Ave, Chicago, IL",
      category: "current",
      published: true,
      featured: false,
      statusLabel: "Coming Soon",
      price: "$5.2M",
      description:
        "Single-family home — 7 bed, 7 full and 2 half baths. Renderings coming soon.",
      estimatedDelivery: "Late 2026",
      links: {
        agentName: "Linda Levin",
        agentUrl:
          "https://www.sothebysrealty.com/eng/associate/180-a-1253-4020621/linda-levin",
      },
      dates: { start: "", end: "", sale: "2026" },
      specs: {
        beds: "7",
        baths: "7 full, 2 half",
        sqft: "~6,000",
        units: "",
        buildingType: "Single family",
        garage: "Attached heated",
      },
      media: { kind: "none" },
    },
    {
      slug: "2240-n-clybourn-ave",
      name: "2240 N Clybourn Ave",
      address: "2240 N Clybourn Ave, Chicago, IL",
      category: "current",
      published: true,
      featured: false,
      statusLabel: "Coming Soon",
      price: "Coming soon",
      description: "9 condos coming soon.",
      estimatedDelivery: "Jan 2027",
      links: { agentName: "Tim & Bridget Sheahan", agentUrl: "https://thesheahangroup.com/" },
      dates: { start: "", end: "", sale: "2027" },
      specs: { beds: "", baths: "", sqft: "", units: "9", buildingType: "Condo, ground floor retail", garage: "Attached parking" },
      media: { kind: "none" },
    },
    {
      slug: "734-central-ave-highland-park",
      name: "734 Central Ave, Highland Park",
      address: "734 Central Ave, Highland Park, IL",
      category: "current",
      published: true,
      featured: true,
      statusLabel: "Summer 2027",
      price: "Listing link coming soon",
      description: "11 condos — 3 bed 3.5 bath. Listing link coming soon.",
      estimatedDelivery: "Summer 2027",
      links: { agentName: "Jacqueline Lotzof", agentUrl: "https://www.compass.com/agents/jacqueline-lotzof/" },
      dates: { start: "", end: "", sale: "2027" },
      specs: { beds: "3", baths: "3.5", sqft: "", units: "11", buildingType: "Condo", garage: "" },
      media: { kind: "single", file: "734_central_ave_highland_park.jpg" },
    },

    // ════════════════════════════════════════════════════════════
    // PAST PROJECTS — first 6 pinned, then newest → oldest
    // ════════════════════════════════════════════════════════════

    // --- Pinned top 6 ---
    {
      slug: "2136-n-kenmore",
      name: "2136 N Kenmore",
      address: "2136 N Kenmore Ave, Chicago, IL",
      category: "past",
      published: true,
      featured: true,
      description: "Single family home — 6 bed 6.5 bath.",
      dates: { start: "", end: "", sale: "2020" },
      specs: { beds: "6", baths: "6.5", sqft: "", units: "", buildingType: "Single family home", garage: "" },
      media: {
        kind: "folder",
        folder: "2136_n_kenmore",
        pattern: { startIndex: 1, endIndex: 51, indexPad: 2, extension: "jpg" },
        coverIndex: 2,
      },
    },
    {
      slug: "2116-n-magnolia",
      name: "2116 N Magnolia",
      address: "2116 N Magnolia Ave, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "Single family home — 6 bed 6.5 bath.",
      dates: { start: "", end: "", sale: "2017" },
      specs: { beds: "6", baths: "6.5", sqft: "", units: "", buildingType: "Single family home", garage: "" },
      media: {
        kind: "folder",
        folder: "2116_n_magnolia",
        pattern: { startIndex: 1, endIndex: 35, indexPad: 2, extension: "jpg" },
        coverIndex: 35,
      },
    },
    {
      slug: "beverly-shores-home",
      name: "Beverly Shores Home",
      address: "Beverly Shores, IN",
      category: "past",
      published: true,
      featured: true,
      description: "Single family home — 7 bed 5 bath.",
      dates: { start: "", end: "", sale: "2022" },
      specs: { beds: "7", baths: "5", sqft: "", units: "", buildingType: "Single family home", garage: "" },
      media: {
        kind: "folder",
        folder: "beverly_shores_home",
        pattern: { startIndex: 1, endIndex: 20, indexPad: 2, extension: "JPG" },
        coverIndex: 1,
      },
    },
    {
      slug: "2215-n-halsted",
      name: "2215 N Halsted",
      address: "2215 N Halsted St, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "8 condos — 3 bed 3.5 bath.",
      dates: { start: "", end: "", sale: "2022" },
      specs: { beds: "3", baths: "3.5", sqft: "", units: "8", buildingType: "Condo", garage: "" },
      media: { kind: "single", file: "2215_n_halsted.png" },
    },
    {
      slug: "3121-3125-n-clybourn",
      name: "3121-25 N Clybourn",
      address: "3121-3125 N Clybourn Ave, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "12 condos — 3 bed 3.5 bath.",
      dates: { start: "", end: "", sale: "2024" },
      specs: { beds: "3", baths: "3.5", sqft: "", units: "12", buildingType: "Condo", garage: "" },
      media: {
        kind: "folder",
        folder: "3121_n_clybourn",
        files: [
          "3121_n_clybourn_01.jpg",
          "3121_n_clybourn_02.JPG",
          "3121_n_clybourn_03.JPG",
          "3121_n_clybourn_04.JPG",
          "3121_n_clybourn_05.JPG",
          "3121_n_clybourn_06.JPG",
          "3121_n_clybourn_07.JPG",
          "3121_n_clybourn_08.JPG",
          "3121_n_clybourn_09.JPG",
          "3121_n_clybourn_10.JPG",
          "3121_n_clybourn_11.JPG",
          "3121_n_clybourn_12.JPG",
        ],
        coverFile: "3121_n_clybourn_01.jpg",
      },
    },
    {
      slug: "2745-2763-w-lawrence",
      name: "2745-63 W Lawrence",
      address: "2745-2763 W Lawrence Ave, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "30 condos — 3 bed 3.5 bath.",
      dates: { start: "", end: "", sale: "2021" },
      specs: { beds: "3", baths: "3.5", sqft: "", units: "30", buildingType: "Condo", garage: "" },
      media: { kind: "single", file: "2745_2763_w_lawrence.png" },
    },

    // --- Remaining past projects: newest → oldest ---
    {
      slug: "1613-w-belmont-ave",
      name: "1613 W Belmont",
      address: "1613 W Belmont Ave, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      statusLabel: "Complete",
      price: "Root management handling rentals",
      description: "11-unit rental building — 2 bed units.",
      links: { agentName: "Root Management", agentUrl: "https://www.rootrealty.com/" },
      dates: { start: "", end: "", sale: "2024" },
      specs: { beds: "2", baths: "", sqft: "", units: "11", buildingType: "Rental, commercial ground floor", garage: "" },
      media: {
        kind: "folder",
        folder: "fwdre1613wbelmont",
        files: [
          "21-web-or-mls-1613 W Belmont Ave - Unit 2_001.jpg",
          "22-web-or-mls-1613 W Belmont Ave - Unit 2_002.jpg",
          "36-web-or-mls-1613 W Belmont Ave - Unit 2_016.jpg",
          "37-web-or-mls-1613 W Belmont Ave - Unit 2_017.jpg",
          "38-web-or-mls-1613 W Belmont Ave - Unit 2_018.jpg",
          "40-web-or-mls-1613 W Belmont Ave 2 - reshoot071024_002.jpg",
          "41-web-or-mls-1613 W Belmont Ave 2 - reshoot071024_003.jpg",
        ],
        coverFile: "21-web-or-mls-1613 W Belmont Ave - Unit 2_001.jpg",
      },
    },
    {
      slug: "2604-2614-w-chicago",
      name: "2604-2614 W Chicago",
      address: "2604-2614 W Chicago Ave, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "15 condos — 3 bed 3.5 bath.",
      dates: { start: "", end: "", sale: "2022" },
      specs: { beds: "3", baths: "3.5", sqft: "", units: "15", buildingType: "Condo", garage: "" },
      media: { kind: "single", file: "2604_2014_w_chicago.png" },
    },
    {
      slug: "3010-3014-w-montrose",
      name: "3010-3014 W Montrose",
      address: "3010-3014 W Montrose Ave, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "12 condos — 3 bed 3.5 bath.",
      dates: { start: "", end: "", sale: "2021" },
      specs: { beds: "3", baths: "3.5", sqft: "", units: "12", buildingType: "Condo", garage: "" },
      media: { kind: "single", file: "3010_3014_w_montrose.png" },
    },
    {
      slug: "2138-n-seminary",
      name: "2138 N Seminary",
      address: "2138 N Seminary Ave, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "Single family home — 6 bed 6.5 bath.",
      dates: { start: "", end: "", sale: "2017" },
      specs: { beds: "6", baths: "6.5", sqft: "", units: "", buildingType: "Single family home", garage: "" },
      media: {
        kind: "folder",
        folder: "2138_n_seminary",
        pattern: { startIndex: 1, endIndex: 46, indexPad: 2, extension: "jpg" },
        coverIndex: 46,
      },
    },
    {
      slug: "2122-n-kenmore",
      name: "2122 N Kenmore",
      address: "2122 N Kenmore Ave, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "Single family home — 6 bed 6.5 bath.",
      dates: { start: "", end: "", sale: "2016" },
      specs: { beds: "6", baths: "6.5", sqft: "", units: "", buildingType: "Single family home", garage: "" },
      media: {
        kind: "folder",
        folder: "2122_n_kenmore",
        pattern: { startIndex: 1, endIndex: 51, indexPad: 2, extension: "jpg" },
        coverIndex: 13,
      },
    },
    {
      slug: "1543-w-diversey",
      name: "1543 W Diversey",
      address: "1543 W Diversey Pkwy, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "Single family home — 6 bed 6.5 bath.",
      dates: { start: "", end: "", sale: "2015" },
      specs: { beds: "6", baths: "6.5", sqft: "", units: "", buildingType: "Single family home", garage: "" },
      media: {
        kind: "folder",
        folder: "1543_w_diversey",
        pattern: { startIndex: 1, endIndex: 11, indexPad: 2, extension: "jpg" },
        coverIndex: 11,
      },
    },
    {
      slug: "2238-n-magnolia",
      name: "2238 N Magnolia",
      address: "2238 N Magnolia Ave, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "Single family home — 6 bed 6.5 bath.",
      dates: { start: "", end: "", sale: "2014" },
      specs: { beds: "6", baths: "6.5", sqft: "", units: "", buildingType: "Single family home", garage: "" },
      media: {
        kind: "folder",
        folder: "2238_n_magnolia",
        pattern: { startIndex: 1, endIndex: 38, indexPad: 2, extension: "jpg" },
        coverIndex: 38,
      },
    },
    {
      slug: "3301-n-leavitt",
      name: "3301 N Leavitt",
      address: "3301 N Leavitt St, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "Single family home — 6 bed 6.5 bath.",
      dates: { start: "", end: "", sale: "2013" },
      specs: { beds: "6", baths: "6.5", sqft: "", units: "", buildingType: "Single family home", garage: "" },
      media: {
        kind: "folder",
        folder: "3301_n_leavitt",
        pattern: { startIndex: 1, endIndex: 25, indexPad: 2, extension: "jpg" },
        coverIndex: 1,
      },
    },
    {
      slug: "3303-n-hoyne",
      name: "3303 N Hoyne",
      address: "3303 N Hoyne Ave, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "Single family home — 6 bed 6.5 bath.",
      dates: { start: "", end: "", sale: "2012" },
      specs: { beds: "6", baths: "6.5", sqft: "", units: "", buildingType: "Single family home", garage: "" },
      media: {
        kind: "folder",
        folder: "3303_n_hoyne",
        pattern: { startIndex: 1, endIndex: 17, indexPad: 2, extension: "jpg" },
        coverIndex: 17,
      },
    },
    {
      slug: "3644-n-wayne",
      name: "3644 N Wayne",
      address: "3644 N Wayne Ave, Chicago, IL",
      category: "past",
      published: true,
      featured: false,
      description: "Single family home — 6 bed 6.5 bath.",
      dates: { start: "", end: "", sale: "2012" },
      specs: { beds: "6", baths: "6.5", sqft: "", units: "", buildingType: "Single family home", garage: "" },
      media: {
        kind: "folder",
        folder: "3644_n_wayne",
        pattern: { startIndex: 1, endIndex: 16, indexPad: 2, extension: "jpg" },
        coverIndex: 2,
      },
    },
  ],
} satisfies PropertyRegistry;
