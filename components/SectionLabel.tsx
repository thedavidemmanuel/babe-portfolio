import l from "./layout.module.css";

type Props = {
  number: string;
  label: string;
  as?: "h2" | "p";
  id?: string;
  /** Accent on light surfaces; muted on dark (areas of practice). */
  tone?: "accent" | "muted";
  className?: string;
};

export function SectionLabel({ number, label, as: Tag = "p", id, tone = "accent", className }: Props) {
  return (
    <Tag id={id} className={[l.sectionLabel, className].filter(Boolean).join(" ")}>
      <span className={tone === "accent" ? l.numberAccent : l.numberMuted}>{number}</span>
      {label}
    </Tag>
  );
}
