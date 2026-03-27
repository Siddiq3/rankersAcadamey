import React from "react";
import { BookMarked, ChartNoAxesColumnIncreasing, Handshake, ShieldCheck } from "lucide-react";
import { institutionalProof } from "../../data/content.js";
import Reveal from "../ui/Reveal.jsx";

const icons = [
  ShieldCheck,
  Handshake,
  BookMarked,
  ChartNoAxesColumnIncreasing,
];

export default function InstitutionalProofSection() {
  return (
    <section className="section-shell py-10 sm:py-12">
      <div className="container-shell">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {institutionalProof.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="institution-pill h-full">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-gold/10 text-brand-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-slate">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
