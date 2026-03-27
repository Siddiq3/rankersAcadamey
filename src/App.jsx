import React, { useEffect, useState } from "react";
import FinalCTA from "./components/FinalCTA.jsx";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton.jsx";
import StickyMobileCTA from "./components/StickyMobileCTA.jsx";
import AdmissionModal from "./components/sections/AdmissionModal.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";
import CoursesSection from "./components/sections/CoursesSection.jsx";
import FacultySection from "./components/sections/FacultySection.jsx";
import Footer from "./components/sections/Footer.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import InstitutionalProofSection from "./components/sections/InstitutionalProofSection.jsx";
import Navbar from "./components/sections/Navbar.jsx";
import ResultsSection from "./components/sections/ResultsSection.jsx";
import ScholarshipSection from "./components/sections/ScholarshipSection.jsx";
import TalentTestSection from "./components/sections/TalentTestSection.jsx";
import TestimonialsSection from "./components/sections/TestimonialsSection.jsx";
import TopBar from "./components/sections/TopBar.jsx";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection.jsx";
import { siteContent } from "./data/content.js";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen || enquiryOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [enquiryOpen, menuOpen]);

  const phoneLink = `tel:${siteContent.phones[0]}`;
  const whatsappLink = `https://wa.me/${siteContent.whatsappNumber}?text=${encodeURIComponent(
    "Hello Rankers Academy Kuppam, please share admission and talent test details."
  )}`;

  const openEnquiry = () => {
    setMenuOpen(false);
    setEnquiryOpen(true);
  };

  return (
    <div className="app-shell pb-24 md:pb-0">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-14 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-20 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/4 h-96 w-96 rounded-full bg-[#c9d9ea]/30 blur-3xl" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50">
        <TopBar phoneLink={phoneLink} />
        <Navbar
          menuOpen={menuOpen}
          onOpenEnquiry={openEnquiry}
          phoneLink={phoneLink}
          setMenuOpen={setMenuOpen}
        />
      </header>

      <main>
        <HeroSection onOpenEnquiry={openEnquiry} />
        <InstitutionalProofSection />
        <ResultsSection onOpenEnquiry={openEnquiry} />
        <CoursesSection onOpenEnquiry={openEnquiry} />
        <ScholarshipSection onOpenEnquiry={openEnquiry} phoneLink={phoneLink} />
        <TalentTestSection onOpenEnquiry={openEnquiry} phoneLink={phoneLink} />
        <WhyChooseUsSection />
        <FacultySection onOpenEnquiry={openEnquiry} />
        <AboutSection onOpenEnquiry={openEnquiry} />
        <TestimonialsSection />
        <FinalCTA onOpenEnquiry={openEnquiry} phoneLink={phoneLink} />
        <ContactSection
          onOpenEnquiry={openEnquiry}
          phoneLink={phoneLink}
          whatsappLink={whatsappLink}
        />
      </main>

      <Footer whatsappLink={whatsappLink} />
      <FloatingWhatsAppButton whatsappLink={whatsappLink} />
      <StickyMobileCTA onOpenEnquiry={openEnquiry} phoneLink={phoneLink} />

      <AdmissionModal
        onClose={() => setEnquiryOpen(false)}
        open={enquiryOpen}
        phoneLink={phoneLink}
      />
    </div>
  );
}
