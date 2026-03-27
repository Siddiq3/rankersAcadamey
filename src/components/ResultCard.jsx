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
        className={`relative aspect-[4/4.15] overflow-hidden rounded-[1.3rem] bg-gradient-to-br ${gradients[index % gradients.length]} p-4 text-white`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(212,164,55,0.22),transparent_24%)]" />
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.04] blur-[1px]" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-3">
            <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold text-white/80">
              {student.program}
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1 text-[0.68rem] font-semibold text-white/80">
              2026
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-[15rem]">
              <div className="mx-auto grid h-32 w-32 place-items-center rounded-[2rem] border border-white/15 bg-white/10 text-center shadow-soft backdrop-blur">
                <div className="text-[0.68rem] font-semibold tracking-[0.18em] text-white/60">
                  ACHIEVER
                </div>
                <div className="text-4xl font-bold text-white">{student.initials}</div>
              </div>

              <div className="mt-4 rounded-[1.15rem] border border-white/12 bg-white/10 px-4 py-3 text-center backdrop-blur">
                <div className="text-[0.68rem] font-semibold tracking-[0.16em] text-white/60">
                  RANKERS ACADEMY
                </div>
                <div className="mt-2 text-sm font-semibold leading-6 text-white">
                  {student.resultLabel}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <MiniMeta label="Program" value={student.program} />
            <MiniMeta label="Status" value="2026 Batch" />
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

function MiniMeta({ label, value }) {
  return (
    <div className="rounded-[1rem] border border-white/10 bg-white/10 px-3 py-3 backdrop-blur">
      <div className="text-[0.62rem] font-semibold tracking-[0.16em] text-white/60">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
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
