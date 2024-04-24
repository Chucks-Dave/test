import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'degular': ['Degular', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        lemongreen: '#EAF6EC',
        lemongreendark: '#A3D9AB',
        primary: "#FFFFFF",
        white: "#FFFFFF",
        graylight:"#EFF1F6",
        bodydark3: '#637381',
        black: "#131316",
        red: "#FB5454",
        "black-2": "#010101",
        body: "#64748B",
        lightgreen:"#E3FCF2",
        lightred:"#F9E3E0",
        gray: "#56616B",
        graydark3: "#EFF1F6", 
        graydark: "#5C6670",
        "gray-2": "#56616B",
        "gray-3": "#FAFAFA",
        whiten: "#F1F5F9",
        whiter: "#F5F7FD",
        boxdark: "#24303F",
        "boxdark-2": "#1A222C",
        strokedark: "#2E3A47",
        "form-strokedark": "#3d4d60",
        "form-input": "#1d2a39",
        "meta-1": "#DC3545",
        "meta-2": "#EFF2F7",
        "meta-3": "#10B981",
        "meta-4": "#313D4A",
        "meta-5": "#259AE6",
        "meta-6": "#FFBA00",
        "meta-7": "#FF6766",
        "meta-8": "#F0950C",
        "meta-9": "#E5E7EB",
        "meta-10": "#0FADCF",
        success: "#219653",
        danger: "#D34053",
        warning: "#FFA70B",
      },
    },
  },
  plugins: [],
};
export default config;
