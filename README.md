# docu-cat-demo

A demonstration project built with Next.js 16, React 19, and TypeScript.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 16** - React framework
- **React 19.2** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **ESLint** - Code linting

## Project Structure

```
docu-cat-demo/
├── .github/
│   └── workflows/
│       └── docu-cat.yml      # GitHub Actions workflow
├── app/
│   ├── favicon.ico           # App favicon
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page component
├── components/               # Reusable React components
│   └── Button.tsx            # Button component
├── public/                   # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── AGENTS.md                 # Agent documentation
├── CLAUDE.md                 # Claude documentation (link to AGENTS.md)
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Project dependencies
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## Components

### Button

A versatile, reusable button component that supports both link and button behaviors.

**Location:** `components/Button.tsx`

**Features:**
- Two style variants: `primary` (dark background) and `secondary` (border style)
- Can render as a link (`<a>`) when `href` prop is provided, or as a button element
- Optional icon support with automatic dark mode inversion
- Responsive design with Tailwind CSS
- Full TypeScript support

**Props:**
- `children` (ReactNode) - Button text/content
- `variant` ("primary" | "secondary", default: "primary") - Button style variant
- `href` (string, optional) - URL for link rendering
- `onClick` (function, optional) - Click handler
- `icon` (string, optional) - Path to icon image
- `iconAlt` (string, optional) - Alt text for icon
- `className` (string, optional) - Additional CSS classes
- `target` (string, optional) - Link target attribute
- `rel` (string, optional) - Link rel attribute

**Usage Example:**
```tsx
import Button from "@/components/Button";

// As a primary link button with icon
<Button
  variant="primary"
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  icon="/icon.svg"
  iconAlt="Icon description"
>
  Deploy Now
</Button>

// As a secondary button
<Button variant="secondary">
  Click Me
</Button>

// As a regular button with click handler
<Button onClick={() => console.log("Clicked!")}>
  Action
</Button>
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

To learn more about Next.js, check out the [Next.js Documentation](https://nextjs.org/docs).
