import placeholderImg from "@/assets/placeholder-project.jpg";

export interface ProjectDetails {
  beds?: string;
  baths?: string;
  sqft?: string;
  garage?: string;
  buildingType?: string;
  units?: string;
  deliveryDate?: string;
}

export interface Project {
  slug: string;
  title: string;
  address: string;
  category: "current" | "past";
  statusLabel?: string;
  description: string;
  details?: ProjectDetails;
  price?: string;
  externalUrl?: string;
  images: string[];
  featured: boolean;
  year?: number;
}

// ── Current Projects ──────────────────────────────────────────

const currentProjects: Project[] = [
  {
    slug: "734-central-ave-highland-park",
    title: "734 Central Ave, Highland Park",
    address: "734 Central Ave, Highland Park, IL",
    category: "current",
    statusLabel: "Now Selling",
    description:
      "Boutique 11-unit masonry building with elevator. Units feature 3 bed 3½ baths and 3 beds 3½ baths plus office options. 2,700–3,000 sq' units with attached heated garage.",
    details: {
      beds: "3",
      baths: "3.5",
      sqft: "2,700 – 3,000",
      garage: "Attached heated",
      buildingType: "Masonry with elevator",
      units: "11",
    },
    images: [placeholderImg],
    featured: false,
  },
  {
    slug: "4713-n-clark-st",
    title: "4713 N Clark St",
    address: "4713 N Clark St, Chicago, IL",
    category: "current",
    statusLabel: "Delivery Spring 2026",
    description: "36-unit plus commercial rental building. Delivery Spring of 2026.",
    details: {
      buildingType: "Mixed-use rental",
      units: "36 + commercial",
      deliveryDate: "Spring 2026",
    },
    images: [placeholderImg],
    featured: false,
  },
  {
    slug: "3121-n-clybourn",
    title: "3121 N Clybourn",
    address: "3121 N Clybourn, Chicago, IL",
    category: "current",
    statusLabel: "Delivery February 2025",
    description:
      "6-unit building. Delivery February of 2025. Duplexes: 4 bed, 3½ bath. Simplexes: 3 bed, 2 bath.",
    details: {
      units: "6",
      buildingType: "Residential",
      deliveryDate: "February 2025",
    },
    images: [placeholderImg],
    featured: false,
  },
  {
    slug: "2405-w-sunnyside",
    title: "2405 W Sunnyside",
    address: "2405 W Sunnyside, Chicago, IL",
    category: "current",
    statusLabel: "Delivery Fall 2025",
    description:
      "8-unit building with ground floor commercial. Delivery Fall of 2025. All units 3 beds 2 baths.",
    details: {
      beds: "3",
      baths: "2",
      units: "8 + commercial",
      buildingType: "Mixed-use",
      deliveryDate: "Fall 2025",
    },
    images: [placeholderImg],
    featured: false,
  },
];

// ── Past Projects (sold list) ─────────────────────────────────

const pastSoldList: { year: number; addresses: string[] }[] = [
  { year: 2024, addresses: ["3125 Clybourn", "1613 W Belmont"] },
  { year: 2023, addresses: ["3352 N Ashland", "2606 W Chicago", "2612 W Chicago"] },
  { year: 2022, addresses: ["2614 W Chicago", "2215 Halsted", "2761 N Kenmore"] },
  { year: 2021, addresses: ["2759 W Lawrence", "2763 W Lawrence", "4304 N Western"] },
  {
    year: 2020,
    addresses: ["2136 N Kenmore", "2745 W Lawrence", "2751 W Lawrence", "2755 W Lawrence"],
  },
  { year: 2019, addresses: ["1851 N Fremont", "2120 N Kenmore"] },
  { year: 2018, addresses: ["2118 N Magnolia", "2745 W Lawrence"] },
  {
    year: 2017,
    addresses: [
      "2138 N Seminary",
      "2139 N Seminary",
      "2116 N Magnolia",
      "2029 N Bissell Unit 1",
      "2029 N Bissell Unit 2",
    ],
  },
  { year: 2016, addresses: ["1823 N Bissell", "2122 N Kenmore", "1718 N Mohawk"] },
  { year: 2015, addresses: ["1829 N Bissell", "1416 W School", "1543 W Diversey"] },
  { year: 2014, addresses: ["2238 N Magnolia", "1818 N Wolcott", "1939 W Fletcher", "1456 W Fullerton"] },
  { year: 2013, addresses: ["3301 N Leavitt", "2320 N Greenview", "2726 N Marshfield", "1709 W Wrightwood"] },
  { year: 2012, addresses: ["3644 N Wayne", "3303 N Hoyne"] },
  { year: 2011, addresses: ["1917 W Cornelia", "1921 W Newport"] },
];

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
}

const featuredSlugs = new Set([
  "2116-n-magnolia",
  "2138-n-seminary",
  "1543-w-diversey",
  "2122-n-kenmore",
]);

const pastProjects: Project[] = pastSoldList.flatMap(({ year, addresses }) =>
  addresses.map((addr) => {
    const slug = slugify(addr);
    return {
      slug,
      title: addr,
      address: `${addr}, Chicago, IL`,
      category: "past" as const,
      description: `Completed and sold in ${year}.`,
      images: [placeholderImg],
      featured: featuredSlugs.has(slug),
      year,
    };
  })
);

// ── Combined exports ──────────────────────────────────────────

export const allProjects: Project[] = [...currentProjects, ...pastProjects];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return allProjects.filter((p) => p.featured);
}

export function getCurrentProjects(): Project[] {
  return allProjects.filter((p) => p.category === "current");
}

export function getPastProjects(): Project[] {
  return allProjects.filter((p) => p.category === "past");
}

export { pastSoldList };
