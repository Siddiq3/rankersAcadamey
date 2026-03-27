import React from "react";
import {
  ClipboardCheck,
  GraduationCap,
  Layers3,
  Medal,
  Trophy,
  Users2,
} from "lucide-react";
import WhyChooseCard from "../WhyChooseCard.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { whyChooseUs } from "../../data/content.js";

const iconMap = {
  "clipboard-check": ClipboardCheck,
  "graduation-cap": GraduationCap,
  layers: Layers3,
  medal: Medal,
  trophy: Trophy,
  users: Users2,
};

export default function WhyChooseUsSection() {
  return (
    <section className="section-shell scroll-mt-28" id="why-us">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            align="center"
            description="This trust-first section speaks directly to parents who want structure, discipline, visible results and personal attention."
            eyebrow="Why Parents Choose Us"
            title="Why Parents Trust Rankers Academy"
          />
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <WhyChooseCard icon={iconMap[item.icon]} item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
