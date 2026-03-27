import React from "react";
import { MessageCircle } from "lucide-react";
import { siteContent } from "../../data/content.js";

export default function Footer({ whatsappLink }) {
  return (
    <footer className="border-t border-brand-navy/10 bg-white/90 py-8">
      <div className="container-shell flex flex-col gap-4 text-sm text-brand-slate md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-brand-navy">{siteContent.name}</div>
          <div className="mt-1">{siteContent.address}</div>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a
            className="inline-flex items-center gap-2 font-medium text-brand-blue transition hover:text-brand-navy"
            href={whatsappLink}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle className="h-4 w-4 text-[#1F9D55]" />
            WhatsApp Admissions Desk
          </a>
          <a
            className="text-sm text-brand-slate transition hover:text-brand-navy"
            href={siteContent.developer.instagram}
            rel="noreferrer"
            target="_blank"
          >
            Developed by <span className="font-semibold text-brand-blue">{siteContent.developer.name}</span>
          </a>
          <div>(c) 2026 Rankers Academy Kuppam. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
