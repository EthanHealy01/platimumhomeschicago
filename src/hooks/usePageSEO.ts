import { useEffect } from "react";

const SITE_NAME = "Platinum Homes Development Corporation";
const SITE_URL = "https://www.platinumhomeschicago.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface PageSEOOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

function setMetaTag(property: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.href = url;
}

export function usePageSEO({ title, description, path, ogImage, noindex }: PageSEOOptions) {
  useEffect(() => {
    const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    setMetaTag("description", description);
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:url", `${SITE_URL}${path}`, true);
    setMetaTag("og:image", ogImage || DEFAULT_OG_IMAGE, true);
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);

    setCanonical(`${SITE_URL}${path}`);

    if (noindex) {
      setMetaTag("robots", "noindex, nofollow");
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) robotsMeta.remove();
    }

    return () => {
      document.title = `${SITE_NAME} | Chicago's Premier Custom Home Builder`;
    };
  }, [title, description, path, ogImage, noindex]);
}
