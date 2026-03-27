/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0E2A47",
          blue: "#163B61",
          sky: "#2F5D8A",
          gold: "#D4A437",
          goldDeep: "#B78415",
          cream: "#F8FAFC",
          mist: "#EDF3F8",
          slate: "#6B7280",
          ink: "#111827",
          success: "#1F9D55",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        hero: "0 30px 90px rgba(14, 42, 71, 0.18)",
        card: "0 18px 50px rgba(17, 24, 39, 0.08)",
        soft: "0 10px 30px rgba(17, 24, 39, 0.08)",
      },
    },
  },
  plugins: [],
};
