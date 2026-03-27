import React from "react";
import {
  BookOpenCheck,
  CheckCircle2,
  ShieldCheck,
  Target,
} from "lucide-react";
import ActionButton from "./ui/ActionButton.jsx";

const iconMap = {
  "book-open": BookOpenCheck,
  shield: ShieldCheck,
  target: Target,
};

export default function CourseCard({ course, onOpenEnquiry }) {
  const Icon = iconMap[course.icon];

  return (
    <article className="mobile-card feature-card flex h-full flex-col">
      <div className="flex items-center justify-between gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-gold/10 text-brand-gold">
          <Icon className="h-5 w-5" />
        </div>
        <div className="rounded-full border border-brand-gold/25 bg-brand-gold/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-blue">
          Premium Program
        </div>
      </div>

      <h3 className="mt-5 font-display text-2xl font-bold text-brand-navy">{course.title}</h3>
      <p className="mt-4 text-sm leading-7 text-brand-slate">{course.description}</p>

      <div className="mt-6 space-y-3">
        {course.benefits.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-brand-slate">
            <CheckCircle2 className="h-4 w-4 flex-none text-brand-gold" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <ActionButton
        as="button"
        className="mt-8 w-full"
        onClick={onOpenEnquiry}
        type="button"
        variant="primary"
      >
        {course.cta}
      </ActionButton>
    </article>
  );
}
