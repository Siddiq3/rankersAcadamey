import React from "react";
import { Star } from "lucide-react";

export default function TestimonialCard({ item }) {
  return (
    <article className="mobile-card feature-card h-full">
      <div className="flex gap-1 text-brand-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <p className="mt-5 text-base leading-8 text-brand-slate">{item.quote}</p>

      <div className="mt-6">
        <div className="font-semibold text-brand-navy">{item.parentName}</div>
        <div className="mt-1 text-sm text-brand-blue">{item.studentInfo}</div>
      </div>
    </article>
  );
}
