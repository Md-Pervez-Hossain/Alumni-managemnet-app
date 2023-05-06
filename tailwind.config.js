/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans"],
      serif: [
        'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        "serif",
      ],
      body: ["Roboto", "sans-serif"],
      awesome: ["FontAwesome"],
      "awesome-5-free": ["Font Awesome\\ 5 Free"],
    },
    boxShadow: {
      "soft-xxs": "0 1px 5px 1px #ddd",
      "soft-xs": "0 3px 5px -1px rgba(0,0,0,.09),0 2px 3px -1px rgba(0,0,0,.07)",
      "soft-sm":
        "0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)",
      "soft-md": "0 4px 7px -1px rgba(0,0,0,.11),0 2px 4px -1px rgba(0,0,0,.07)",
      "soft-lg": "0 2px 12px 0 rgba(0,0,0,.16)",
      "soft-xl": "0 20px 27px 0 rgba(0,0,0,.05)",
      "soft-2xl": "0 .3125rem .625rem 0 rgba(0,0,0,.12)",
      "soft-3xl": "0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)",
    },

    fontSize: {
      xs: ["13px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      sm: ["16px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
      "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
      "3xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
      "4xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.032em" }],
      "5xl": ["80px", { lineHeight: "80px", letterSpacing: "-0.032em" }],
    },

    extend: {
      colors: {
        primary: "#1B3764",
        secondary: "#FFCA42",
        accent: "#F6F8FC",
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
    },
    variants: {
      extend: {
        display: ["group-hover"],
      },
    },
  },
  plugins: [require("daisyui"),],
};
