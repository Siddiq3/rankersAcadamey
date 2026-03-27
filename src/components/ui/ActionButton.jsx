import React, { useState } from "react";

const rippleColors = {
  primary: "rgba(255, 255, 255, 0.35)",
  secondary: "rgba(14, 42, 71, 0.12)",
  accent: "rgba(255, 255, 255, 0.32)",
  whatsapp: "rgba(255, 255, 255, 0.28)",
};

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  whatsapp: "btn-whatsapp",
};

export default function ActionButton({
  as,
  children,
  className = "",
  onPointerDown,
  variant = "primary",
  ...props
}) {
  const [ripples, setRipples] = useState([]);
  const Component = as || (props.href ? "a" : "button");

  const handlePointerDown = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = {
      id: `${Date.now()}-${Math.random()}`,
      size,
      x: event.clientX - rect.left - size / 2,
      y: event.clientY - rect.top - size / 2,
    };

    setRipples((current) => [...current, ripple]);
    window.setTimeout(() => {
      setRipples((current) => current.filter((item) => item.id !== ripple.id));
    }, 650);

    onPointerDown?.(event);
  };

  return (
    <Component
      className={`${variants[variant]} ripple-surface ${className}`.trim()}
      onPointerDown={handlePointerDown}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple-dot"
          style={{
            backgroundColor: rippleColors[variant],
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
          }}
        />
      ))}
    </Component>
  );
}
