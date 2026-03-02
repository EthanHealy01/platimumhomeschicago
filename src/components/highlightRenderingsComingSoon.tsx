import type { ReactNode } from "react";

const RENDERINGS_REGEX = /Renderings coming soon\.?/i;

export function highlightRenderingsComingSoon(text: string): ReactNode {
  const match = text.match(RENDERINGS_REGEX);
  if (!match || match.index == null) return text;

  const start = match.index;
  const end = start + match[0].length;
  const before = text.slice(0, start);
  const token = text.slice(start, end);
  const after = text.slice(end);

  return (
    <>
      {before}
      <span className="text-primary font-medium">{token}</span>
      {after}
    </>
  );
}

