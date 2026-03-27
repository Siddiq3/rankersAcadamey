import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import LeadForm from "../LeadForm.jsx";
import ActionButton from "../ui/ActionButton.jsx";

export default function AdmissionModal({ onClose, open, phoneLink }) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-navy/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="surface-card relative w-full max-w-2xl p-6 sm:p-8"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              aria-label="Close enquiry form"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-brand-mist text-brand-navy"
              onClick={onClose}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="eyebrow">Admissions / Talent Test</div>
            <h3 className="mt-6 font-display text-3xl font-bold text-brand-navy sm:text-4xl">
              Request Admission or Talent Test Details
            </h3>
            <p className="mt-4 text-sm leading-7 text-brand-slate sm:text-base">
              Parents can submit a quick enquiry here without leaving the landing page. The current frontend-only form behavior remains unchanged and is ready for backend integration later.
            </p>

            <div className="mt-8">
              <LeadForm submitLabel="Submit Enquiry" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <ActionButton href={phoneLink} variant="secondary">
                <Phone className="h-4 w-4" />
                Call Admission Desk
              </ActionButton>
              <ActionButton as="button" onClick={onClose} type="button" variant="accent">
                Continue Browsing
              </ActionButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
