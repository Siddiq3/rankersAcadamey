import React from "react";
import TestimonialCard from "../TestimonialCard.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { testimonials } from "../../data/content.js";

export default function TestimonialsSection() {
  return (
    <section className="section-shell scroll-mt-40" id="testimonials">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            align="center"
            description="Real parent feedback builds trust. | తల్లిదండ్రుల మాటల్లో మా అకాడమీపై నమ్మకం"
            eyebrow="Testimonials"
            title={
              <>
                <span className="block text-xl font-semibold leading-8 text-brand-blue sm:text-2xl">
                  What Parents Say
                </span>
                <span className="mt-3 block">తల్లిదండ్రుల అభిప్రాయాలు</span>
              </>
            }
          />
        </Reveal>

        <div className="mobile-scroller mt-8 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => (
            <Reveal key={item.quote} delay={index * 0.05}>
              <TestimonialCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
