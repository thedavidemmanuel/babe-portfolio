import { site } from "@/content/site";

export const mailtoSubject = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
export const mailtoWithSubject = mailtoSubject(site.emailSubject);
export const mailto = `mailto:${site.email}`;
