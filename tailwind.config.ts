import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-pink": "hsl(330, 70%, 80%)",
        "brand-purple": "hsl(270, 50%, 75%)",
        "brand-blue": "hsl(210, 70%, 75%)",
        "retro-bg": "hsl(280, 40%, 92%)",
        "retro-dark": "hsl(240, 30%, 20%)",
      },
      backgroundImage: {
        "page-gradient": "linear-gradient(180deg, hsl(330, 70%, 80%), hsl(270, 50%, 75%), hsl(210, 70%, 75%))",
        "retro-titlebar": "linear-gradient(90deg, hsl(210, 70%, 85%), hsl(210, 70%, 75%))",
        "retro-grid": "repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255, 255, 255, 0.2) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(255, 255, 255, 0.2) 20px)",
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        pulse2: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        marquee: 'marquee 15s linear infinite',
        pulse2: 'pulse2 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
