import React, { Fragment } from "react";

const variants = {
  primary: {
    shell:
      "border border-brand-navy/10 bg-[linear-gradient(135deg,#0E2A47,#163B61,#0E2A47)] text-white shadow-soft",
    badge: "bg-brand-gold text-brand-navy",
    item: "text-white/90",
    separator: "bg-brand-gold/80",
    fadeColor: "#0E2A47",
  },
  highlight: {
    shell:
      "border border-brand-gold/25 bg-[linear-gradient(135deg,#163B61,#0E2A47,#163B61)] text-white shadow-hero",
    badge: "bg-white text-brand-navy",
    item: "text-white",
    separator: "bg-brand-gold",
    fadeColor: "#163B61",
  },
};

export default function NewsTicker({
  badgeLabel = "Latest Updates",
  compactBadgeLabel,
  className = "",
  items = [],
  mobileItems = [],
  pauseOnHover = true,
  variant = "primary",
}) {
  if (!items.length) {
    return null;
  }

  const theme = variants[variant] ?? variants.primary;
  const mobileFeed = mobileItems.length ? mobileItems : items;
  const desktopDuration = Math.max(items.length * 6.5, 28);
  const mobileDuration = Math.max(mobileFeed.length * 5.25, 18);

  return (
    <section className={className}>
      <div className="news-ticker-wrap">
        <div
          className={`news-ticker ${pauseOnHover ? "news-ticker--pause" : ""} ${theme.shell}`.trim()}
        >
          <div className={`news-ticker-badge ${theme.badge}`}>
            {compactBadgeLabel ? (
              <>
                <span className="sm:hidden">{compactBadgeLabel}</span>
                <span className="hidden sm:inline">{badgeLabel}</span>
              </>
            ) : (
              badgeLabel
            )}
          </div>

          <div className="news-ticker-mask">
            <TickerTrack
              className={`sm:hidden ${theme.item}`.trim()}
              duration={mobileDuration}
              items={mobileFeed}
              separatorClass={theme.separator}
            />
            <TickerTrack
              className={`hidden sm:flex ${theme.item}`.trim()}
              duration={desktopDuration}
              items={items}
              separatorClass={theme.separator}
            />

            <div
              aria-hidden="true"
              className="news-ticker-fade left-0"
              style={{
                background: `linear-gradient(to right, ${theme.fadeColor} 0%, rgba(14, 42, 71, 0) 100%)`,
              }}
            />
            <div
              aria-hidden="true"
              className="news-ticker-fade right-0"
              style={{
                background: `linear-gradient(to left, ${theme.fadeColor} 0%, rgba(14, 42, 71, 0) 100%)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TickerTrack({ className, duration, items, separatorClass }) {
  return (
    <div
      className={`news-ticker-track ${className}`.trim()}
      style={{ "--ticker-duration": `${duration}s` }}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="news-ticker-group"
        >
          {items.map((item, index) => (
            <Fragment key={`${copy}-${item}-${index}`}>
              <span className="news-ticker-item">{item}</span>
              <span
                aria-hidden="true"
                className={`news-ticker-separator ${separatorClass}`.trim()}
              />
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
