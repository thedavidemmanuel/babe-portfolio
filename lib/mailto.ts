import { site } from "@/content/site";

export const mailtoWithSubject = `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`;
export const mailto = `mailto:${site.email}`;
