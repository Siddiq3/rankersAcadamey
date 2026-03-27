import React from "react";
import { MapPin, Phone } from "lucide-react";
import { siteContent } from "../../data/content.js";
import ActionButton from "../ui/ActionButton.jsx";

export default function TopBar({ phoneLink }) {
  return (
    <div className="border-b border-white/10 bg-brand-navy text-white">
      <div className="container-shell flex min-h-[2.9rem] items-center justify-between gap-3 py-2">
        <div className="flex min-w-0 items-center gap-3 text-[0.72rem] leading-5 text-white/80 sm:text-xs">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Phone className="h-3.5 w-3.5 text-brand-gold" />
            <span>{siteContent.phones.join(", ")}</span>
          </div>
          <div className="hidden items-center gap-2 truncate text-white/70 sm:flex">
            <MapPin className="h-3.5 w-3.5 text-brand-gold" />
            <span className="truncate">{siteContent.locationShort}</span>
          </div>
        </div>

        <ActionButton href={phoneLink} variant="accent" className="min-h-0 px-4 py-2 text-xs">
          Call Now
        </ActionButton>
      </div>
    </div>
  );
}
