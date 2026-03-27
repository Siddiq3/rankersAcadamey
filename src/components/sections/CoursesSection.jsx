import React from "react";
import CourseCard from "../CourseCard.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { courses } from "../../data/content.js";

export default function CoursesSection({ onOpenEnquiry }) {
  return (
    <section className="section-shell scroll-mt-28" id="courses">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            description="Premium mobile-first course cards that show what each student gets, how the preparation works and where parents should act next."
            eyebrow="Programs"
            title="Programs We Offer"
          />
        </Reveal>

        <div className="mobile-scroller mt-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => (
            <Reveal key={course.title} delay={index * 0.07}>
              <CourseCard course={course} onOpenEnquiry={onOpenEnquiry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
