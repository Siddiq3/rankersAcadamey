import React from "react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import ActionButton from "../ui/ActionButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { aboutAcademy } from "../../data/content.js";

export default function AboutSection({ onOpenEnquiry }) {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <SectionHeading
              description={aboutAcademy.description}
              eyebrow="About Rankers Academy"
              title={aboutAcademy.title}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {aboutAcademy.points.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-brand-navy/10 bg-white/90 p-4 shadow-soft"
                >
                  <BadgeCheck className="h-5 w-5 text-brand-gold" />
                  <div className="mt-3 text-sm font-semibold leading-6 text-brand-navy">{item}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-card p-6 sm:p-8">
              <div className="rounded-[1.4rem] bg-gradient-to-br from-brand-navy via-brand-blue to-brand-sky p-6 text-white">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/60">
                  Parent-focused academic environment
                </div>
                <h3 className="mt-4 font-display text-3xl font-bold">
                  Serious preparation with premium presentation
                </h3>
                <p className="mt-4 text-sm leading-8 text-white/80 sm:text-base">
                  The brand feel is designed to communicate that the academy is local, trusted, disciplined and worth contacting immediately for admissions.
                </p>
                <ActionButton
                  as="button"
                  className="mt-8"
                  onClick={onOpenEnquiry}
                  type="button"
                  variant="accent"
                >
                  Start Enquiry
                  <ArrowRight className="h-4 w-4" />
                </ActionButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
