import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton({ whatsappLink }) {
  return (
    <a
      className="fixed bottom-24 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1F9D55] text-white shadow-hero transition hover:-translate-y-1 hover:bg-[#178246] md:bottom-6 md:h-auto md:w-auto md:gap-2 md:px-5 md:py-4"
      href={whatsappLink}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold md:inline">WhatsApp</span>
    </a>
  );
}
