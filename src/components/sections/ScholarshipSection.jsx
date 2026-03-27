import React from "react";
import { Award, Phone, TimerReset } from "lucide-react";
import ScholarshipCard from "../ScholarshipCard.jsx";
import ActionButton from "../ui/ActionButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import { scholarshipPrizes, talentTest } from "../../data/content.js";

export default function ScholarshipSection({ onOpenEnquiry, phoneLink }) {
  return (
    <section className="section-shell scroll-mt-40 pt-4" id="scholarship">
      <div className="container-shell">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy p-[1px] shadow-hero">
            <div className="grid gap-8 rounded-[calc(2rem-1px)] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(248,250,252,0.95),rgba(212,164,55,0.1))] px-6 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
              <div>
                <div className="eyebrow">
                  <Award className="h-4 w-4 text-brand-gold" />
                  Talent Test / Scholarship
                </div>

                <h2 className="section-title mt-6">
                  <span className="block text-xl font-semibold leading-8 text-brand-blue sm:text-2xl">
                    {talentTest.headingEnglish}
                  </span>
                  <span className="mt-3 block">{talentTest.headingTelugu}</span>
                </h2>
                <div className="mt-4 max-w-2xl space-y-2 text-base leading-8 text-brand-slate sm:text-lg">
                  <p className="font-semibold text-brand-navy">{talentTest.subheadingEnglish}</p>
                  <p>{talentTest.subheadingTelugu}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-semibold text-brand-blue">
                    Date: {talentTest.date}
                  </div>
                  <div className="rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-sm font-semibold text-brand-blue">
                    {talentTest.urgency}
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                  <ActionButton className="w-full sm:w-auto" as="button" onClick={onOpenEnquiry} type="button" variant="accent">
                    Register Now | నమోదు చేసుకోండి
                  </ActionButton>
                  <ActionButton className="w-full sm:w-auto" href={phoneLink} variant="secondary">
                    <Phone className="h-4 w-4" />
                    Call for Details
                  </ActionButton>
                </div>

                <div className="mt-8 rounded-[1.4rem] border border-brand-navy/10 bg-white/90 p-4">
                  <div className="flex items-center gap-3 text-sm font-semibold text-brand-blue">
                    <TimerReset className="h-4 w-4 text-brand-gold" />
                    ముందుగా పేరు నమోదు చేసుకుంటే సీటు మరియు టాలెంట్ టెస్ట్ వివరాలు సులభంగా పొందవచ్చు.
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-brand-gold/25 bg-brand-navy px-5 py-5 text-white shadow-soft">
                  <div className="text-sm font-medium text-white/70">Talent Test Date</div>
                  <div className="mt-2 font-display text-4xl font-bold text-brand-gold">{talentTest.date}</div>
                  <div className="mt-3 text-sm leading-7 text-white/75">
                    Limited Seats | పరిమిత సీట్లు
                  </div>
                </div>
                {scholarshipPrizes.map((prize) => (
                  <ScholarshipCard key={prize.title} prize={prize} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
