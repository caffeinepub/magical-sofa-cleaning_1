/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xs: 'calc(var(--radius) - 6px)',
      },
      colors: {
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'oklch(var(--muted))',
          foreground: 'oklch(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'oklch(var(--accent))',
          foreground: 'oklch(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--destructive-foreground))'
        },
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring))',
        chart: {
          '1': 'oklch(var(--chart-1))',
          '2': 'oklch(var(--chart-2))',
          '3': 'oklch(var(--chart-3))',
          '4': 'oklch(var(--chart-4))',
          '5': 'oklch(var(--chart-5))'
        },
        service: {
          sofa: {
            DEFAULT: 'oklch(var(--service-sofa))',
            foreground: 'oklch(var(--service-sofa-foreground))'
          },
          carpet: {
            DEFAULT: 'oklch(var(--service-carpet))',
            foreground: 'oklch(var(--service-carpet-foreground))'
          },
          chair: {
            DEFAULT: 'oklch(var(--service-chair))',
            foreground: 'oklch(var(--service-chair-foreground))'
          },
          mattress: {
            DEFAULT: 'oklch(var(--service-mattress))',
            foreground: 'oklch(var(--service-mattress-foreground))'
          },
          ac: {
            DEFAULT: 'oklch(var(--service-ac))',
            foreground: 'oklch(var(--service-ac-foreground))'
          }
        }
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'premium': '0 8px 16px -4px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
        'premium-lg': '0 20px 25px -5px rgb(0 0 0 / 0.15), 0 10px 10px -5px rgb(0 0 0 / 0.08)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
}
