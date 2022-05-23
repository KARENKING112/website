const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#eeeeee",
          200: "#e0e0e0",
          300: "#bbbbbb",
          400: "#666666",
          500: "#444444",
          600: "#2a2a2a",
          700: "#1f1f1f",
          800: "#181818",
          900: "#0f0f0f",
        },
        primary: colors.green,
      },
      typography: (theme) => ({
        light: {
          css: {
            color: theme("colors.gray.300"),
            '[class~="lead"]': { color: theme("colors.gray.400") },
            a: { color: theme("colors.primary.300") },
            strong: { color: theme("colors.gray.100") },
            "ul > li::before": { backgroundColor: theme("colors.gray.400") },
            hr: { borderColor: theme("colors.gray.800") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.800"),
            },
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.100") },
            h4: { color: theme("colors.gray.100") },
            code: { color: theme("colors.gray.100") },
            "a code": { color: theme("colors.gray.100") },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.900"),
              border: `1px solid ${theme("colors.gray.700")}`,
              lineHeight: "1.25rem",
            },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.400"),
            },
            "tbody tr": { borderBottomColor: theme("colors.gray.400") },
          },
        },
      }),
    },
    fontFamily: {
      sans: "Inter, sans-serif",
      mono: "Inconsolata, monospace",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
