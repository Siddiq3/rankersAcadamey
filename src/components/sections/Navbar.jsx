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
    <div
      className={`border-b transition duration-300 ${
        scrolled || menuOpen
          ? "border-brand-navy/10 bg-white/95 shadow-card backdrop-blur-xl"
          : "border-white/40 bg-white/88 shadow-soft backdrop-blur"
      }`}
    >
      <div
        className="container-shell"
      >
        <div className="flex min-h-[3.6rem] items-center justify-between px-0 sm:min-h-[4.7rem]">
          <a className="flex min-w-0 items-center gap-2.5 sm:gap-3" href="#home">
            <div className="grid h-[2.125rem] w-[2.125rem] place-items-center rounded-full bg-brand-gold font-display text-[0.95rem] font-bold text-brand-navy sm:h-12 sm:w-12 sm:text-lg">
              RA
            </div>
            <div className="min-w-0">
              <div className="truncate text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-navy sm:text-sm sm:tracking-[0.22em]">
                {siteContent.shortName}
              </div>
              <div className="hidden max-w-[11rem] text-[0.68rem] leading-5 text-brand-slate min-[360px]:block sm:max-w-none sm:text-xs">
                {siteContent.tagline}
                <span className="hidden sm:inline"> | {siteContent.focusLine}</span>
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-5 xl:flex">
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

          <div className="hidden items-center gap-3 lg:flex">
            <ActionButton href={phoneLink} variant="secondary">
              Call Now
            </ActionButton>
            <ActionButton as="button" onClick={onOpenEnquiry} type="button" variant="accent">
              Enroll Now
            </ActionButton>
          </div>

          <button
            aria-label="Toggle menu"
            className="grid h-[2.125rem] w-[2.125rem] place-items-center rounded-full bg-brand-navy/5 text-brand-navy lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            {menuOpen ? <X className="h-[1.125rem] w-[1.125rem]" /> : <Menu className="h-[1.125rem] w-[1.125rem]" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-brand-navy/10 bg-white/98 shadow-card lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.24 }}
          >
            <div className="container-shell py-3">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
