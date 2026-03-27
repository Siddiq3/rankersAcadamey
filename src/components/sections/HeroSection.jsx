import React from "react";
import { ArrowRight, BookOpenCheck, PhoneCall, Sparkles } from "lucide-react";
import TrustBadge from "../TrustBadge.jsx";
import ActionButton from "../ui/ActionButton.jsx";
import CountUpNumber from "../ui/CountUpNumber.jsx";
import Reveal from "../ui/Reveal.jsx";
import { achievers, siteContent } from "../../data/content.js";

export default function HeroSection({ onOpenEnquiry }) {
  const primaryPhone = `tel:${siteContent.phones[0]}`;

  return (
    <section className="relative overflow-hidden pt-[10.8rem] sm:pt-[11.5rem]" id="home">
      <div className="container-shell grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <Reveal>
          <div className="eyebrow">
            <BookOpenCheck className="h-4 w-4 text-brand-gold" />
            {siteContent.trustLine}
          </div>

          <p className="mt-5 text-sm font-semibold text-brand-blue">
            {siteContent.tagline} | {siteContent.focusLine}
          </p>

          <h1 className="display-title mt-4 max-w-3xl">
            <span className="block text-xl font-semibold leading-8 text-brand-blue sm:text-2xl">
              {siteContent.heroTitleEnglish}
            </span>
            <span className="mt-3 block">{siteContent.heroTitleTelugu}</span>
          </h1>

          <div className="mt-6 max-w-2xl space-y-3 text-base leading-8 text-brand-slate sm:text-lg">
            <p className="font-semibold text-brand-navy">{siteContent.heroSubtitleEnglish}</p>
            <p>{siteContent.heroSubtitleTelugu}</p>
          </div>

          <div className="mt-6 max-w-2xl rounded-[1.4rem] border border-brand-gold/25 bg-white/85 p-4 shadow-soft sm:p-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 grid h-10 w-10 flex-none place-items-center rounded-full bg-brand-gold/10 text-brand-gold">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-navy">{siteContent.heroSupportEnglish}</p>
                <p className="mt-1 text-sm leading-7 text-brand-slate">{siteContent.heroSupportTelugu}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ActionButton href={primaryPhone} variant="primary">
              <PhoneCall className="h-4 w-4" />
              Call Now | ఇప్పుడే కాల్ చేయండి
            </ActionButton>
            <ActionButton as="button" onClick={onOpenEnquiry} type="button" variant="accent">
              Enroll Now | ఇప్పుడు నమోదు చేసుకోండి
              <ArrowRight className="h-4 w-4" />
            </ActionButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {siteContent.heroTrustChips.map((chip) => (
              <TrustBadge key={chip}>{chip}</TrustBadge>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="surface-card relative overflow-hidden p-3 sm:p-4">
            <div className="relative overflow-hidden rounded-[1.55rem] bg-gradient-to-br from-brand-navy via-brand-blue to-brand-sky px-5 py-6 text-white sm:px-7 sm:py-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(212,164,55,0.24),transparent_24%)]" />
              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
                      {siteContent.admissionsNote}
                    </div>
                    <h2 className="mt-5 max-w-sm font-display text-3xl font-bold leading-tight sm:text-4xl">
                      Navodaya | Sainik | RMS
                    </h2>
                  </div>

                  <div className="rounded-[1.2rem] border border-white/12 bg-white/10 p-4 backdrop-blur">
                    <div className="text-xs text-white/70">Parents first look for</div>
                    <div className="mt-3 space-y-2 text-sm font-semibold text-white">
                      <div>Results</div>
                      <div>Trust</div>
                      <div>Guidance</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {siteContent.floatingStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur"
                    >
                      {item.value} {item.label}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {achievers.slice(0, 4).map((student) => (
                    <div
                      key={student.name}
                      className="rounded-[1.2rem] border border-white/10 bg-white/10 p-4 backdrop-blur"
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid h-14 w-14 place-items-center rounded-[1rem] border border-white/12 bg-white/12 text-lg font-bold">
                          {student.initials}
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{student.name}</div>
                          <div className="mt-1 text-xs text-white/60">
                            {student.program}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 rounded-[1rem] bg-white/10 px-3 py-2 text-xs leading-6 text-white/80">
                        {student.resultLabel}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {siteContent.heroHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.2rem] border border-white/10 bg-white/10 p-4 backdrop-blur"
                    >
                      <CountUpNumber
                        className="font-display text-3xl font-bold text-brand-gold"
                        suffix={item.suffix}
                        value={item.value}
                      />
                      <p className="mt-2 text-sm leading-6 text-white/70">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
