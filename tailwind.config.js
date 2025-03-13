/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
      "./app/**/*.{js,jsx}",
      "./src/**/*.{js,jsx}",
      "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "var(--color-primary-500)",
            50: "var(--color-primary-50)",
            100: "var(--color-primary-100)",
            200: "var(--color-primary-200)",
            300: "var(--color-primary-300)",
            400: "var(--color-primary-400)",
            500: "var(--color-primary-500)",
            600: "var(--color-primary-600)",
            700: "var(--color-primary-700)",
            800: "var(--color-primary-800)",
            900: "var(--color-primary-900)",
            foreground: "hsl(var(--primary-foreground))",
          },
          indigo: {
            DEFAULT: "var(--color-indigo-500)",
            50: "var(--color-indigo-50)",
            100: "var(--color-indigo-100)",
            200: "var(--color-indigo-200)",
            300: "var(--color-indigo-300)",
            400: "var(--color-indigo-400)",
            500: "var(--color-indigo-500)",
            600: "var(--color-indigo-600)",
            700: "var(--color-indigo-700)",
            800: "var(--color-indigo-800)",
            900: "var(--color-indigo-900)",
          },
          accent: {
            DEFAULT: "var(--color-accent-500)",
            50: "var(--color-accent-50)",
            100: "var(--color-accent-100)",
            200: "var(--color-accent-200)",
            300: "var(--color-accent-300)",
            400: "var(--color-accent-400)",
            500: "var(--color-accent-500)",
            600: "var(--color-accent-600)",
            700: "var(--color-accent-700)",
            800: "var(--color-accent-800)",
            900: "var(--color-accent-900)",
            foreground: "hsl(var(--accent-foreground))",
          },
          neutral: {
            DEFAULT: "var(--color-neutral-500)",
            50: "var(--color-neutral-50)",
            100: "var(--color-neutral-100)",
            200: "var(--color-neutral-200)",
            300: "var(--color-neutral-300)",
            400: "var(--color-neutral-400)",
            500: "var(--color-neutral-500)",
            600: "var(--color-neutral-600)",
            700: "var(--color-neutral-700)",
            800: "var(--color-neutral-800)",
            900: "var(--color-neutral-900)",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  
  