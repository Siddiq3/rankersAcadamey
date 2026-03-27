import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import ActionButton from "./ui/ActionButton.jsx";

export default function StickyMobileCTA({ onOpenEnquiry, phoneLink }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-navy/10 bg-white/95 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-2.5 shadow-hero backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <ActionButton href={phoneLink} variant="secondary">
          <Phone className="h-4 w-4" />
          Call Now
        </ActionButton>
        <ActionButton as="button" onClick={onOpenEnquiry} type="button" variant="accent">
          <ArrowRight className="h-4 w-4" />
          Enroll
        </ActionButton>
      </div>
    </div>
  );
}
