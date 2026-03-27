import React from "react";

const gradients = [
  "from-brand-blue via-brand-navy to-brand-sky",
  "from-brand-navy via-brand-blue to-brand-sky",
  "from-brand-sky via-brand-blue to-brand-navy",
];

export default function ResultCard({ student, index = 0 }) {
  return (
    <article className="mobile-card feature-card group">
      <div
        className={`relative aspect-[4/4.7] overflow-hidden rounded-[1.3rem] bg-gradient-to-br ${gradients[index % gradients.length]} p-4 text-white`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(212,164,55,0.22),transparent_24%)]" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold text-white/80">
              {student.program}
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1 text-[0.68rem] font-semibold text-white/80">
              2026
            </div>
          </div>

          <div className="flex items-end justify-between gap-3">
            <div>
              <div className="grid h-20 w-20 place-items-center rounded-[1.4rem] border border-white/15 bg-white/10 text-2xl font-bold backdrop-blur">
                {student.initials}
              </div>
              <div className="mt-3 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold text-white/80">
                ఫలితాల ప్రత్యేకత
              </div>
            </div>

            <div className="rounded-[1rem] border border-white/10 bg-white/10 px-3 py-2 text-right text-[0.72rem] font-medium leading-5 text-white/80">
              Rankers Academy
              <br />
              విజయ గర్వం
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-brand-navy">{student.name}</h3>
        <p className="mt-1 text-sm font-medium text-brand-blue">{student.resultLabel}</p>
      </div>

      <div className="mt-4 grid gap-3">
        <MetaRow label="Hall Ticket" value={student.hallTicket} />
        <MetaRow label="Result" value={student.rank} />
      </div>
    </article>
  );
}

function MetaRow({ label, value }) {
  return (
    <div className="rounded-[1.1rem] border border-brand-navy/10 bg-brand-mist/70 px-4 py-3">
      <div className="text-[0.68rem] font-semibold text-brand-blue/80">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold leading-6 text-brand-navy">{value}</div>
    </div>
  );
}
