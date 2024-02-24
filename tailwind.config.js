/** @type {import('tailwindcss').Config} */
import { screens as _screens } from "tailwindcss/defaultTheme";
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    screens: {
      xs: "375px",
      ..._screens,
    },
  },
};
export const plugins = [];
