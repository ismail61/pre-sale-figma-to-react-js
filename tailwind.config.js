/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#858585",
          "200": "#040116",
        },
        mediumblue: "#5800c9",
        darkorchid: "#ac59ff",
        white: "#fff",
        ghostwhite: "#f8f4fd",
        slategray: "#7a7285",
        dimgray: "#685d6c",
      },
      spacing: {},
      fontFamily: {
        arial: "Arial",
      },
      borderRadius: {
        "13xl": "32px",
        "22xl": "41px",
      },
    },
    fontSize: {
      "5xl": "24px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
