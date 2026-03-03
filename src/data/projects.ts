import placeholderImg from "@/assets/placeholder-project.jpg";
import {
  propertyRegistry,
  type ActionButton,
  type FolderPattern,
  type PropertyRecord,
} from "@/data/propertyRegistry";

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
  agentName?: string;
  agentUrl?: string;
  images: string[];
  featured: boolean;
  featuredOrder?: number;
  year?: number;
  actionButtons?: ActionButton[];
  inquiryUrl?: string;
  showInquiry: boolean;
}

type RegistryProperty = PropertyRecord;

const publicSinglesBase = "/property_images/singles";
const publicFoldersBase = "/property_images/folders";

function pad(n: number, width: number) {
  return String(n).padStart(width, "0");
}

function buildFolderFileList(opts: {
  folder: string;
  pattern: FolderPattern;
}) {
  const { folder, pattern } = opts;
  const files: string[] = [];
  for (let i = pattern.startIndex; i <= pattern.endIndex; i++) {
    files.push(`${folder}_${pad(i, pattern.indexPad)}.${pattern.extension}`);
  }
  return files;
}

function reorderWithCoverFirst(files: string[], coverFile?: string) {
  if (!files.length) return files;
  const cover = coverFile && files.includes(coverFile) ? coverFile : files[0];
  return [cover, ...files.filter((f) => f !== cover)];
}

function getProjectImagesFromRegistry(p: RegistryProperty): string[] {
  if (p.media.kind === "none") return [];
  if (p.media.kind === "single") {
    return [`${publicSinglesBase}/${p.media.file}`];
  }

  const media = p.media;
  if (media.kind !== "folder") return [];

  const rawFiles =
    media.files ??
    (media.pattern
      ? buildFolderFileList({ folder: media.folder, pattern: media.pattern })
      : []);

  let coverFile = media.coverFile;
  if (!coverFile && media.coverIndex && media.coverIndex > 0) {
    const idx = media.coverIndex - 1;
    coverFile = rawFiles[idx];
  }

  const orderedFiles = reorderWithCoverFirst(rawFiles, coverFile);
  return orderedFiles.map((f) => `${publicFoldersBase}/${media.folder}/${f}`);
}

function toProject(p: RegistryProperty): Project {
  const images = getProjectImagesFromRegistry(p);
  const year =
    p.dates?.sale && /^\d{4}$/.test(p.dates.sale) ? Number(p.dates.sale) : undefined;

  const descriptionBase =
    (p.description ?? "").trim() ||
    (year ? `Completed and sold in ${year}.` : "Completed project.");
  const description =
    p.media.kind === "none" && p.category === "current"
      ? `${descriptionBase}`.includes("Renderings coming soon")
        ? `${descriptionBase}`
        : `${descriptionBase} Renderings coming soon.`
      : descriptionBase;

  const details: ProjectDetails | undefined = p.specs
    ? {
        beds: p.specs.beds || undefined,
        baths: p.specs.baths || undefined,
        sqft: p.specs.sqft || undefined,
        units: p.specs.units || undefined,
        buildingType: p.specs.buildingType || undefined,
        garage: p.specs.garage || undefined,
        deliveryDate: p.estimatedDelivery || p.dates?.end || undefined,
      }
    : undefined;

  const showInquiry = p.showInquiry ?? (p.category === "current");

  return {
    slug: p.slug,
    title: p.name,
    address: p.address || p.name,
    category: p.category,
    statusLabel: p.statusLabel,
    description,
    details,
    price: p.price || undefined,
    externalUrl: p.links?.externalUrl || undefined,
    agentName: p.links?.agentName || undefined,
    agentUrl: p.links?.agentUrl || undefined,
    images: images.length ? images : [placeholderImg],
    featured: p.featured,
    featuredOrder: p.featuredOrder,
    year,
    actionButtons: p.actionButtons,
    inquiryUrl: p.inquiryUrl,
    showInquiry,
  };
}

const registryProperties = propertyRegistry.properties;

export const allProjects: Project[] = registryProperties.map(toProject);

// ── Combined exports ──────────────────────────────────────────

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return allProjects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? Infinity) - (b.featuredOrder ?? Infinity));
}

export function getCurrentProjects(): Project[] {
  const slugs = new Set(
    registryProperties.filter((p) => p.published && p.category === "current").map((p) => p.slug)
  );
  return allProjects.filter((p) => slugs.has(p.slug));
}

export function getPastProjects(): Project[] {
  const slugs = new Set(
    registryProperties.filter((p) => p.published && p.category === "past").map((p) => p.slug)
  );
  return allProjects.filter((p) => slugs.has(p.slug));
}
