import React from "react";

export default function SectionHeading({
  align = "left",
  description,
  eyebrow,
  invert = false,
  title,
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleClass = invert ? "text-white" : "text-brand-navy";
  const descriptionClass = invert ? "text-white/80" : "text-brand-slate";
  const eyebrowClass = invert
    ? "border-white/10 bg-white/10 text-white"
    : "border-brand-gold/30 bg-brand-gold/10 text-brand-blue";

  return (
    <div className={alignment}>
      <div className={`eyebrow ${eyebrowClass}`}>{eyebrow}</div>
      <h2 className={`section-title mt-5 ${titleClass}`}>{title}</h2>
      <p className={`section-copy ${descriptionClass}`}>{description}</p>
    </div>
  );
}
