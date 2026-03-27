import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { finalCta } from "../data/content.js";
import ActionButton from "./ui/ActionButton.jsx";
import Reveal from "./ui/Reveal.jsx";

export default function FinalCTA({ onOpenEnquiry, phoneLink }) {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy p-[1px] shadow-hero">
            <div className="rounded-[calc(2rem-1px)] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.1))] px-6 py-10 text-white sm:px-8 lg:px-12">
              <div className="eyebrow border-white/10 bg-white/10 text-white">
                Limited seats for the 2026 batch
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {finalCta.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                {finalCta.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton as="button" onClick={onOpenEnquiry} type="button" variant="accent">
                  Enroll Now
                  <ArrowRight className="h-4 w-4" />
                </ActionButton>
                <ActionButton href={phoneLink} variant="secondary">
                  <Phone className="h-4 w-4" />
                  Call Now
                </ActionButton>
                <ActionButton as="button" onClick={onOpenEnquiry} type="button" variant="secondary">
                  Register for Talent Test
                </ActionButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
