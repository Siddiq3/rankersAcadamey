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
  { icon: CalendarDays, label: "తేదీ", value: talentTest.date },
  { icon: Clock3, label: "సమయం", value: talentTest.time },
  { icon: MapPin, label: "స్థలం", value: talentTest.venue },
  { icon: Sigma, label: "సబ్జెక్ట్స్", value: talentTest.subjects.join(", ") },
];

export default function TalentTestSection({ onOpenEnquiry, phoneLink }) {
  return (
    <section className="section-shell scroll-mt-40" id="talent-test">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            description="Date, time, subjects all in one place. | పేరెంట్స్‌కు అవసరమైన పూర్తి సమాచారం"
            eyebrow="Talent Test Details"
            title={
              <>
                <span className="block text-xl font-semibold leading-8 text-brand-blue sm:text-2xl">
                  Talent Test Details
                </span>
                <span className="mt-3 block">టెస్ట్ వివరాలు</span>
              </>
            }
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
                          <div className="text-[0.72rem] font-semibold text-brand-blue/70">
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
                ముందుగా రిజిస్టర్ అవ్వండి
              </div>
              <h3 className="mt-6 font-display text-3xl font-bold sm:text-4xl">
                పేరెంట్స్‌కు అవసరమైన సమాచారం పూర్తిగా స్పష్టంగా
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/80 sm:text-base">
                తేదీ, సమయం, సబ్జెక్ట్స్, పాల్గొనే తరగతులు అన్నీ క్లియర్‌గా ఉండటం వల్ల రిజిస్ట్రేషన్ త్వరగా పూర్తవుతుంది.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.2rem] border border-white/10 bg-white/10 p-4 text-sm leading-7 text-white/80">
                  3వ మరియు 4వ తరగతి విద్యార్థులు పాల్గొనవచ్చు. పరీక్ష ద్వారా ప్రోత్సాహక బహుమతులు లభిస్తాయి.
                </div>
                <div className="rounded-[1.2rem] border border-white/10 bg-white/10 p-4 text-sm leading-7 text-white/80">
                  సీట్లు పరిమితం. ముందుగా కాల్ చేసి పేరు నమోదు చేస్తే వివరాలు వెంటనే అందుతాయి.
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <ActionButton className="w-full sm:w-auto" as="button" onClick={onOpenEnquiry} type="button" variant="accent">
                  Register Now | నమోదు
                </ActionButton>
                <ActionButton className="w-full sm:w-auto" href={phoneLink} variant="secondary">
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
