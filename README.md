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
│   └── Button.tsx            # Button component with variants
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

### Button Component (`components/Button.tsx`)

A flexible, reusable button component that supports both link and button functionality with multiple style variants.

**Props:**
- `children` (React.ReactNode) - Button text or content
- `variant` ("primary" | "secondary") - Style variant, defaults to "primary"
- `href` (string, optional) - URL to navigate to (renders as `<a>` element)
- `onClick` (function, optional) - Click handler callback
- `icon` (string, optional) - Path to icon image
- `iconAlt` (string, optional) - Alt text for icon, defaults to empty string
- `className` (string, optional) - Additional CSS classes
- `target` (string, optional) - Link target attribute (e.g., "_blank")
- `rel` (string, optional) - Link rel attribute (e.g., "noopener noreferrer")

**Variants:**
- **primary** - Dark background with light text, hover effect
- **secondary** - Border style with transparent background, hover effects

**Example Usage:**

```tsx
import Button from "@/components/Button";

// Primary button with icon
<Button
  variant="primary"
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  icon="/icon.svg"
  iconAlt="Icon description"
>
  Click Me
</Button>

// Secondary button
<Button variant="secondary" onClick={() => console.log('Clicked')}>
  Secondary Button
</Button>
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

To learn more about Next.js, check out the [Next.js Documentation](https://nextjs.org/docs).
