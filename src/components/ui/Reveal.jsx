import React from "react";
import { motion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
  y = 24,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      viewport={{ amount: 0.25, once }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
