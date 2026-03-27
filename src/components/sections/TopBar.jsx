import React from "react";
import { MapPin, Phone } from "lucide-react";
import { siteContent } from "../../data/content.js";
import ActionButton from "../ui/ActionButton.jsx";

export default function TopBar({ phoneLink }) {
  return (
    <div className="border-b border-white/10 bg-brand-navy text-white">
      <div className="container-shell py-2">
        <div className="flex items-start justify-between gap-3 sm:items-center">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[0.78rem] font-medium leading-5 text-white/85 sm:text-xs">
              <Phone className="h-3.5 w-3.5 flex-none text-brand-gold" />
              <span className="truncate">{siteContent.phones.join(", ")}</span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-[0.7rem] leading-5 text-white/70 sm:text-[0.78rem]">
              <MapPin className="h-3.5 w-3.5 flex-none text-brand-gold" />
              <span className="truncate">{siteContent.locationShort}</span>
            </div>
          </div>

          <ActionButton
            href={phoneLink}
            variant="accent"
            className="min-h-[2.3rem] px-3.5 py-2 text-[0.72rem] sm:px-4"
          >
            Call Now
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
