import React from "react";
import { MapPinned, MessageCircle, Phone, Send } from "lucide-react";
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
    <section className="section-shell scroll-mt-40 bg-white/70" id="contact">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            description="Call, WhatsApp, or send enquiry easily. | ఫోన్, వాట్సాప్, ఎన్‌క్వైరీ అన్నీ ఒకచోట"
            eyebrow="Contact Us"
            title={
              <>
                <span className="block text-xl font-semibold leading-8 text-brand-blue sm:text-2xl">
                  Contact
                </span>
                <span className="mt-3 block">సంప్రదించండి</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.96fr_1.04fr]">
          <Reveal>
            <div className="surface-card p-6 sm:p-8">
              <div className="space-y-5">
                <DetailCard label="అకాడమీ" value={siteContent.name} />
                <DetailCard label="అడ్రెస్" value={siteContent.address} />
                <DetailCard
                  label="ఫోన్"
                  value={
                    <>
                      <span className="block">9676356670</span>
                      <span className="block">9885269211</span>
                    </>
                  }
                />
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

              <div className="mt-8 rounded-[1.35rem] border border-brand-navy/10 bg-brand-mist/60 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  <MapPinned className="h-4 w-4 text-brand-gold" />
                  లొకేషన్
                </div>
                <p className="mt-2 text-sm leading-7 text-brand-slate">
                  Near Gandhi Statue, BSNL Office Road, Kuppam. రాకముందు కాల్ చేస్తే బ్యాచ్ వివరాలు వెంటనే అందుతాయి.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-brand-navy/10 bg-brand-mist/40">
                <iframe
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Near%20Gandhi%20Statue,%20BSNL%20Office%20Road,%20Kuppam%20517425&output=embed"
                  title="Rankers Academy Kuppam Location Map"
                />
              </div>

              <div className="mt-8">
                <div className="text-[0.72rem] font-semibold text-brand-blue/80">విభాగాలు</div>
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
                  త్వరిత ఎన్‌క్వైరీ
                </div>
                <button
                  className="rounded-full border border-brand-navy/10 bg-brand-mist px-4 py-2 text-xs font-semibold text-brand-blue transition hover:bg-brand-gold/10"
                  onClick={onOpenEnquiry}
                  type="button"
                >
                  ఫారమ్ ఓపెన్
                </button>
              </div>

              <h3 className="mt-6 font-display text-3xl font-bold text-brand-navy">
                Enquiry Form | వివరాలు అడగండి
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-slate sm:text-base">
                ఈ ఫారమ్ ద్వారా మీ వివరాలు పంపండి. మా టీమ్ ఫోన్ ద్వారా తిరిగి సంప్రదిస్తుంది.
              </p>

              <div className="mt-8">
                <LeadForm submitLabel="Send Enquiry | పంపండి" />
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
      <div className="text-[0.72rem] font-semibold text-brand-blue/70">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold leading-7 text-brand-navy">{value}</div>
    </div>
  );
}
