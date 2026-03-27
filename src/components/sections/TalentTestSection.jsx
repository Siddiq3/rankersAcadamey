import React from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  Sigma,
  UsersRound,
} from "lucide-react";
import ActionButton from "../ui/ActionButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { talentTest } from "../../data/content.js";

const detailCards = [
  { icon: CalendarDays, label: "Date", value: talentTest.date },
  { icon: Clock3, label: "Time", value: talentTest.time },
  { icon: MapPin, label: "Place", value: talentTest.venue },
  { icon: Sigma, label: "Subjects", value: talentTest.subjects.join(", ") },
];

export default function TalentTestSection({ onOpenEnquiry, phoneLink }) {
  return (
    <section className="section-shell scroll-mt-28" id="talent-test">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            description="A clear information block that removes doubt quickly and makes registration feel simple for parents."
            eyebrow="Talent Test Details"
            title="Everything Parents Need to Know"
          />
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="surface-card h-full p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {detailCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-[1.3rem] border border-brand-navy/10 bg-brand-mist/60 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-blue shadow-soft">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-brand-blue/70">
                            {item.label}
                          </div>
                          <div className="mt-1 text-sm font-semibold leading-6 text-brand-navy">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-[1.35rem] border border-brand-gold/25 bg-brand-gold/10 p-4">
                <div className="flex items-center gap-3 text-sm font-semibold text-brand-blue">
                  <UsersRound className="h-4 w-4 text-brand-gold" />
                  {talentTest.participantNote}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-dark h-full p-6 sm:p-8">
              <div className="eyebrow border-white/10 bg-white/10 text-white">
                Limited registration
              </div>
              <h3 className="mt-6 font-display text-3xl font-bold sm:text-4xl">
                Premium information layout that supports quick decisions
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/80 sm:text-base">
                Parents should be able to understand the opportunity in seconds. This panel keeps the value clear, the date visible and the action simple.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.2rem] border border-white/10 bg-white/10 p-4 text-sm leading-7 text-white/80">
                  Scholarship motivation creates urgency while also making the academy feel encouraging and achievement-oriented.
                </div>
                <div className="rounded-[1.2rem] border border-white/10 bg-white/10 p-4 text-sm leading-7 text-white/80">
                  Exact details help reduce parent hesitation and make the page feel organized and trustworthy.
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton as="button" onClick={onOpenEnquiry} type="button" variant="accent">
                  Register Now
                </ActionButton>
                <ActionButton href={phoneLink} variant="secondary">
                  <Phone className="h-4 w-4" />
                  Call Now
                </ActionButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
