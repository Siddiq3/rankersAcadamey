import React from "react";
import { ArrowRight, BadgeCheck, GraduationCap } from "lucide-react";
import { faculty } from "../../data/content.js";
import ActionButton from "../ui/ActionButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function FacultySection({ onOpenEnquiry }) {
  return (
    <section className="section-shell scroll-mt-28" id="faculty">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            description="Parents trust institutions that show who teaches, how they teach and what kind of academic discipline students experience."
            eyebrow="Faculty Excellence"
            title="Mentorship That Feels Reliable, Focused and Experienced"
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {faculty.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.06}>
              <article className="faculty-card h-full">
                <div className="flex items-center justify-between gap-3">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-gold/10 text-brand-gold">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="rounded-full border border-brand-navy/10 bg-brand-mist/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Faculty Profile
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-brand-navy">{member.name}</h3>
                <p className="mt-2 text-sm font-medium text-brand-blue">{member.credential}</p>

                <div className="mt-5 space-y-4">
                  <FacultyPoint label="Focus Area" value={member.focus} />
                  <FacultyPoint label="Teaching Style" value={member.teachingStyle} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="surface-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-blue">
                <BadgeCheck className="h-4 w-4 text-brand-gold" />
                Academic leadership presented with transparency
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-slate sm:text-base">
                The website now communicates teaching quality more clearly so parents see the academy as a guided learning environment, not just a list of batches.
              </p>
            </div>

            <ActionButton as="button" onClick={onOpenEnquiry} type="button" variant="accent">
              Request Faculty Details
              <ArrowRight className="h-4 w-4" />
            </ActionButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FacultyPoint({ label, value }) {
  return (
    <div className="rounded-[1.15rem] border border-brand-navy/10 bg-brand-mist/60 px-4 py-4">
      <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand-blue/70">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold leading-6 text-brand-navy">{value}</div>
    </div>
  );
}
