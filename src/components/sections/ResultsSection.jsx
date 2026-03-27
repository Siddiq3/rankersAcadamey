import React from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
import ResultCard from "../ResultCard.jsx";
import ActionButton from "../ui/ActionButton.jsx";
import CountUpNumber from "../ui/CountUpNumber.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { achievers, resultsSummary, siteContent, talentTest } from "../../data/content.js";

export default function ResultsSection({ onOpenEnquiry }) {
  const phoneLink = `tel:${siteContent.phones[0]}`;

  return (
    <section className="section-shell scroll-mt-40" id="results">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            description={
              <>
                <span className="block">Real results that build trust.</span>
                <span className="mt-2 block">మా ఫలితాలే మా విశ్వాసం</span>
              </>
            }
            eyebrow="Results"
            title={
              <>
                <span className="block text-xl font-semibold leading-8 text-brand-blue sm:text-2xl">
                  Our Proud Achievers
                </span>
                <span className="mt-3 block">మా విద్యార్థుల ఫలితాలు</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {resultsSummary.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <div className="surface-card p-5 sm:p-6">
                <CountUpNumber
                  className="font-display text-4xl font-bold text-brand-navy sm:text-5xl"
                  value={item.value}
                />
                <p className="mt-3 text-sm leading-7 text-brand-slate">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5">
          <div className="result-strip">{talentTest.strip}</div>
        </Reveal>

        <div className="mobile-scroller mt-8 md:grid-cols-2 xl:grid-cols-3">
          {achievers.map((student, index) => (
            <Reveal key={student.name} delay={index * 0.04}>
              <ResultCard index={index} student={student} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-wrap gap-3">
            <ActionButton as="button" onClick={onOpenEnquiry} type="button" variant="accent">
              Enroll Now | నమోదు చేసుకోండి
              <ArrowRight className="h-4 w-4" />
            </ActionButton>
            <ActionButton href={phoneLink} variant="secondary">
              <PhoneCall className="h-4 w-4" />
              Call Now
            </ActionButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
