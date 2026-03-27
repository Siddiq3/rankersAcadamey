import React from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import LeadForm from "../LeadForm.jsx";
import ActionButton from "../ui/ActionButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { navLinks, siteContent } from "../../data/content.js";

export default function ContactSection({
  onOpenEnquiry,
  phoneLink,
  whatsappLink,
}) {
  return (
    <section className="section-shell scroll-mt-28 bg-white/70" id="contact">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            description="Keep contact details visible and friction low so parents can quickly call, WhatsApp or send a simple enquiry."
            eyebrow="Contact"
            title="Contact Rankers Academy Kuppam"
          />
        </Reveal>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.96fr_1.04fr]">
          <Reveal>
            <div className="surface-card p-6 sm:p-8">
              <div className="space-y-5">
                <DetailCard label="Academy" value={siteContent.name} />
                <DetailCard label="Address" value={siteContent.address} />
                <DetailCard label="Phone" value={siteContent.phones.join(", ")} />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <ActionButton href={phoneLink} variant="primary">
                  <Phone className="h-4 w-4" />
                  Call Now
                </ActionButton>
                <ActionButton href={whatsappLink} rel="noreferrer" target="_blank" variant="whatsapp">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </ActionButton>
              </div>

              <div className="mt-8">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-brand-blue/80">
                  Quick Links
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      className="rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-sm font-medium text-brand-blue transition hover:border-brand-gold/30 hover:text-brand-navy"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-card p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <div className="eyebrow">
                  <Send className="h-4 w-4 text-brand-gold" />
                  Quick Enquiry
                </div>
                <button
                  className="rounded-full border border-brand-navy/10 bg-brand-mist px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue transition hover:bg-brand-gold/10"
                  onClick={onOpenEnquiry}
                  type="button"
                >
                  Open Modal
                </button>
              </div>

              <h3 className="mt-6 font-display text-3xl font-bold text-brand-navy">
                Ask for Admission Details
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-slate sm:text-base">
                This form is ready for future backend integration and keeps the enquiry experience simple for parents on mobile.
              </p>

              <div className="mt-8">
                <LeadForm submitLabel="Request a Callback" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DetailCard({ label, value }) {
  return (
    <div className="rounded-[1.2rem] border border-brand-navy/10 bg-brand-mist/60 px-4 py-4">
      <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-brand-blue/70">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold leading-7 text-brand-navy">{value}</div>
    </div>
  );
}
