import React from "react";
import { MessageCircle } from "lucide-react";
import { navLinks, siteContent } from "../../data/content.js";

export default function Footer({ whatsappLink }) {
  return (
    <footer className="border-t border-brand-gold/20 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy py-10 text-white">
      <div className="container-shell grid gap-6 text-sm text-white/75 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="font-semibold text-white">{siteContent.name}</div>
          <div className="mt-1 text-white/70">{siteContent.address}</div>
          <div className="mt-2">
            <span className="block">Phone: 9676356670</span>
            <span className="block">9885269211</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex flex-wrap gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-sm text-white/70 transition hover:text-white"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            className="inline-flex items-center gap-2 font-medium text-white transition hover:text-brand-gold"
            href={whatsappLink}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle className="h-4 w-4 text-[#1F9D55]" />
            WhatsApp సంప్రదింపు
          </a>

          <div className="text-[11px] text-white/55">
            Website developed by {siteContent.developer.name} | Contact: {siteContent.developer.phone}
          </div>

          <div className="text-xs text-white/55">(c) 2026 Rankers Academy Kuppam. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
