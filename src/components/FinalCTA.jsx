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
                Admissions Open
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                <span className="block text-xl font-semibold leading-8 text-white/80 sm:text-2xl">
                  {finalCta.titleEnglish}
                </span>
                <span className="mt-3 block">{finalCta.titleTelugu}</span>
              </h2>
              <div className="mt-4 max-w-3xl space-y-2 text-base leading-8 text-white/80 sm:text-lg">
                <p>{finalCta.descriptionEnglish}</p>
                <p>{finalCta.descriptionTelugu}</p>
              </div>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <ActionButton className="w-full sm:w-auto" as="button" onClick={onOpenEnquiry} type="button" variant="accent">
                  Enroll Now | నమోదు చేసుకోండి
                  <ArrowRight className="h-4 w-4" />
                </ActionButton>
                <ActionButton className="w-full sm:w-auto" href={phoneLink} variant="secondary">
                  <Phone className="h-4 w-4" />
                  Call Now
                </ActionButton>
                <ActionButton className="w-full sm:w-auto" as="button" onClick={onOpenEnquiry} type="button" variant="secondary">
                  Register | నమోదు
                </ActionButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
