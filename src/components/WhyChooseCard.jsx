import React from "react";

export default function WhyChooseCard({ icon: Icon, item }) {
  return (
    <article className="feature-card h-full">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-gold/10 text-brand-gold">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-brand-navy">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-slate">{item.description}</p>
    </article>
  );
}
