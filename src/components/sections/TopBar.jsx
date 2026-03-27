import React from "react";
import { MapPin, Phone } from "lucide-react";
import { siteContent } from "../../data/content.js";
import ActionButton from "../ui/ActionButton.jsx";

export default function TopBar({ phoneLink }) {
  const primaryPhone = siteContent.phones[0];

  return (
    <div className="border-b border-white/10 bg-brand-navy text-white">
      <div className="container-shell py-1 sm:py-2">
        <div className="flex items-start justify-between gap-3 sm:items-center">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[0.68rem] font-medium leading-5 text-white/85 sm:text-xs">
              <Phone className="h-3.5 w-3.5 flex-none text-brand-gold" />
              <span className="truncate sm:hidden">{primaryPhone}</span>
              <span className="hidden truncate sm:inline">{siteContent.phones.join(", ")}</span>
            </div>
            <div className="mt-0.5 hidden items-center gap-2 text-[0.68rem] leading-5 text-white/70 sm:mt-1 sm:flex sm:text-[0.78rem]">
              <MapPin className="h-3.5 w-3.5 flex-none text-brand-gold" />
              <span className="truncate">{siteContent.locationShort}</span>
            </div>
          </div>

          <ActionButton
            href={phoneLink}
            variant="accent"
            className="min-h-[1.95rem] px-2.5 py-1 text-[0.64rem] sm:min-h-[2.3rem] sm:px-4 sm:py-2 sm:text-[0.72rem]"
          >
            Call
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
