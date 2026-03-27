import React from "react";
import TestimonialCard from "../TestimonialCard.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { testimonials } from "../../data/content.js";

export default function TestimonialsSection() {
  return (
    <section className="section-shell scroll-mt-28" id="testimonials">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            align="center"
            description="Short, believable testimonials help the page feel local, warm and parent-trusted without becoming cluttered."
            eyebrow="Testimonials"
            title="What Parents & Students Say"
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
