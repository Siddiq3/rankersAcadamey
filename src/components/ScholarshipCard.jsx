import React from "react";

export default function ScholarshipCard({ prize }) {
  return (
    <div className="rounded-[1.35rem] border border-brand-navy/10 bg-white/95 p-5 shadow-soft">
      <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-brand-blue/80">
        {prize.title}
      </div>
      <div className="mt-3 font-display text-3xl font-bold text-brand-navy">
        {prize.value}
      </div>
    </div>
  );
}
