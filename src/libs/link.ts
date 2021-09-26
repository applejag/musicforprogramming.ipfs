export interface LinkData {
  readonly href: string;
  readonly label: string;
}

export type LinkOrHref = LinkData | string;
export function linkHref(linkOrHref: LinkOrHref): string | null {
  if (!linkOrHref) {
    return null;
  }
  return typeof linkOrHref === "string" ? linkOrHref : linkOrHref.href;
}
export function linkLabel(linkOrHref: LinkOrHref): string | null {
  if (!linkOrHref) {
    return null;
  }
  return typeof linkOrHref === "string" ? linkOrHref : linkOrHref.label;
}
