import React from "react";
import CourseCard from "../CourseCard.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { courses } from "../../data/content.js";

export default function CoursesSection({ onOpenEnquiry, phoneLink }) {
  return (
    <section className="section-shell scroll-mt-40" id="courses">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            description="బేసిక్స్ నుండి అడ్వాన్స్ వరకు పూర్తి శిక్షణ"
            eyebrow="Programs"
            title={
              <>
                <span className="block text-xl font-semibold leading-8 text-brand-blue sm:text-2xl">
                  Our Courses
                </span>
                <span className="mt-3 block">మా కోర్సులు</span>
              </>
            }
          />
        </Reveal>

        <div className="mobile-scroller mt-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => (
            <Reveal key={course.title} delay={index * 0.07}>
              <CourseCard
                course={course}
                onOpenEnquiry={onOpenEnquiry}
                phoneLink={phoneLink}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
