import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sarabun: ["var(--font-sarabun)", "sans-serif"],
        "be-vietnam-pro": ["var(--font-be-vietnam-pro)", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        ring: "hsl(var(--ring))",
        // Custom BackstagePass colors
        "app-bg": "hsl(var(--app-bg))",
        "text-primary": "hsl(var(--text-primary))",
        "text-secondary": "hsl(var(--text-secondary))",
        "border-light": "hsl(var(--border-light))",
        "border-subtle": "hsl(var(--border-subtle))",
        "border-button": "hsl(var(--border-button))",
        "header-bg": "hsl(var(--header-bg))",
        "header-sub-bg": "hsl(var(--header-sub-bg))",
        "publish-button": "hsl(var(--publish-button))",
        "notification-bg": "hsl(var(--notification-bg))",
        "confetti-bg": "hsl(var(--confetti-bg))",
        "confetti-text": "hsl(var(--confetti-text))",
        "sidebar-bg": "hsl(var(--sidebar-bg))",
        "sidebar-overlay": "hsl(var(--sidebar-overlay))",
        // Legacy support (deprecated - use new names)
        "dark-gray": "hsl(var(--header-bg))",
        "dark-gray-2": "hsl(var(--header-sub-bg))",
      },
      animation: {
        "confetti-1": "confetti-1 3s ease-in-out infinite",
        "confetti-2": "confetti-2 3s ease-in-out infinite",
        "confetti-3": "confetti-3 3s ease-in-out infinite",
      },
      keyframes: {
        "confetti-1": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "50%": { transform: "translateY(-20px) rotate(180deg)", opacity: "0.8" },
        },
        "confetti-2": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "50%": { transform: "translateY(-25px) rotate(-180deg)", opacity: "0.8" },
        },
        "confetti-3": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "50%": { transform: "translateY(-30px) rotate(90deg)", opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
