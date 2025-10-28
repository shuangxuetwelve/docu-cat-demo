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

### Button Component

A versatile button component (`components/Button.tsx`) that supports both link and button functionality with multiple style variants.

**Features:**
- **Variants**: `primary` (filled dark button) and `secondary` (outlined button)
- **Flexible Rendering**: Renders as `<a>` tag when `href` is provided, otherwise as `<button>`
- **Icon Support**: Optional icon rendering with Next.js Image optimization
- **Dark Mode**: Built-in dark mode support with Tailwind CSS
- **Responsive**: Adjusts width on medium screens and up

**Props:**
- `children` (required) - Button text content
- `variant` - "primary" or "secondary" (default: "primary")
- `href` - URL for link buttons
- `onClick` - Click handler function
- `icon` - Path to icon image
- `iconAlt` - Alt text for icon
- `className` - Additional Tailwind classes
- `target` - Link target attribute
- `rel` - Link rel attribute

**Usage Example:**
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

// Secondary button without icon
<Button variant="secondary" href="/docs">
  Documentation
</Button>

// Button with click handler
<Button onClick={() => console.log("clicked!")}>
  Action Button
</Button>
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

To learn more about Next.js, check out the [Next.js Documentation](https://nextjs.org/docs).
