import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteContent } from "../../data/content.js";
import ActionButton from "../ui/ActionButton.jsx";

export default function Navbar({
  menuOpen,
  onOpenEnquiry,
  phoneLink,
  setMenuOpen,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-4 py-3 sm:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-[1.4rem] border transition duration-300 ${
          scrolled || menuOpen
            ? "border-brand-navy/10 bg-white/95 shadow-card backdrop-blur-xl"
            : "border-white/40 bg-white/80 shadow-soft backdrop-blur"
        }`}
      >
        <div className="flex min-h-[4.6rem] items-center justify-between px-4 sm:px-6">
          <a className="flex items-center gap-3" href="#home">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-gold font-display text-lg font-bold text-brand-navy">
              RA
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-brand-navy">
                {siteContent.shortName}
              </div>
              <div className="text-xs text-brand-slate">
                {siteContent.tagline} | {siteContent.focusLine}
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-sm font-medium text-brand-slate transition hover:text-brand-navy"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <ActionButton href={phoneLink} variant="secondary">
              Call Now
            </ActionButton>
            <ActionButton as="button" onClick={onOpenEnquiry} type="button" variant="accent">
              Enroll Now
            </ActionButton>
          </div>

          <button
            aria-label="Toggle menu"
            className="grid h-11 w-11 place-items-center rounded-full bg-brand-navy/5 text-brand-navy lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-3 max-w-7xl rounded-[1.4rem] border border-brand-navy/10 bg-white p-4 shadow-card lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.24 }}
          >
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="rounded-2xl border border-brand-navy/10 px-4 py-3 text-sm font-semibold text-brand-navy"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <ActionButton href={phoneLink} variant="secondary">
                Call Now
              </ActionButton>
              <ActionButton as="button" onClick={onOpenEnquiry} type="button" variant="accent">
                Enroll Now
              </ActionButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
