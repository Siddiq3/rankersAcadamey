import React from "react";
import { ArrowRight } from "lucide-react";
import ResultCard from "../ResultCard.jsx";
import ActionButton from "../ui/ActionButton.jsx";
import CountUpNumber from "../ui/CountUpNumber.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { achievers, resultsSummary, talentTest } from "../../data/content.js";

export default function ResultsSection({ onOpenEnquiry }) {
  return (
    <section className="section-shell scroll-mt-28" id="results">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            description="Real student results that reflect disciplined preparation and expert guidance."
            eyebrow="Results"
            title="Our Proud Achievers"
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
          <ActionButton as="button" onClick={onOpenEnquiry} type="button" variant="accent">
            Enquire for Admissions
            <ArrowRight className="h-4 w-4" />
          </ActionButton>
        </Reveal>
      </div>
    </section>
  );
}
