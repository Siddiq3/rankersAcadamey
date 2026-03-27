import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function TrustBadge({ children, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/90 px-4 py-2 text-sm font-medium text-brand-blue shadow-soft ${className}`.trim()}
    >
      <CheckCircle2 className="h-4 w-4 text-brand-gold" />
      <span>{children}</span>
    </div>
  );
}
