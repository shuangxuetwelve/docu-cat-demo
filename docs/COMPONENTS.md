# Components Documentation

This document provides detailed information about all reusable components in the `components/` folder.

## Table of Contents

- [Button](#button)
- [ButtonSmall](#buttonsmall)
- [TextButton](#textbutton)

---

## Button

A versatile button component that can render as either a button or link element with support for icons, multiple variants, and full TypeScript typing.

**Location:** `components/Button.tsx`

### Features

- Renders as `<button>` or `<a>` depending on whether `href` is provided
- Two style variants: `primary` and `secondary`
- Optional icon support with Next.js Image optimization
- Full dark mode support
- Responsive sizing
- TypeScript interface for type safety

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | Yes | The content to display inside the button |
| `variant` | `"primary" \| "secondary"` | `"primary"` | No | The visual style variant |
| `href` | `string` | - | No | If provided, renders as an anchor tag instead of button |
| `onClick` | `() => void` | - | No | Click handler function |
| `icon` | `string` | - | No | Path to icon image (e.g., `/vercel.svg`) |
| `iconAlt` | `string` | `""` | No | Alt text for the icon |
| `className` | `string` | `""` | No | Additional CSS classes to apply |
| `target` | `string` | - | No | Link target attribute (e.g., `"_blank"`) |
| `rel` | `string` | - | No | Link relationship attribute (e.g., `"noopener noreferrer"`) |

### Variants

#### Primary

The primary variant features a solid background with high contrast:
- Solid foreground background
- Background text color
- Hover: darker background (`#383838` / `#ccc` in dark mode)
- Includes gap for icon spacing

#### Secondary

The secondary variant features an outlined style:
- Transparent background with border
- Border color: `black/[.08]` (light) / `white/[.145]` (dark)
- Hover: transparent border with subtle background

### Usage Examples

#### Basic Button

```tsx
import Button from "@/components/Button";

<Button variant="primary">
  Click Me
</Button>
```

#### Link Button (Anchor)

```tsx
<Button
  variant="secondary"
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit Website
</Button>
```

#### Button with Icon

```tsx
<Button
  variant="primary"
  icon="/vercel.svg"
  iconAlt="Vercel logomark"
>
  Deploy Now
</Button>
```

#### Button with Click Handler

```tsx
<Button
  variant="secondary"
  onClick={() => console.log("Clicked!")}
>
  Log Message
</Button>
```

#### Link Button with Icon and Custom Styling

```tsx
<Button
  variant="primary"
  href="https://vercel.com/new"
  target="_blank"
  rel="noopener noreferrer"
  icon="/vercel.svg"
  iconAlt="Vercel logomark"
  className="w-full"
>
  Deploy Now
</Button>
```

### Styling Details

#### Base Styles

All buttons share these base classes:
- `flex h-12 w-full items-center justify-center`
- `rounded-full px-5 transition-colors`
- `md:w-[158px]` (responsive width)

#### Icon Integration

When an icon is provided:
- Rendered using Next.js `Image` component
- Size: 16x16 pixels
- Automatically inverts in dark mode
- Positioned before the button text

### Implementation Details

The Button component intelligently chooses between rendering as a button or anchor tag:

```tsx
if (href) {
  return <a className={classes} href={href} onClick={onClick} target={target} rel={rel}>
    {content}
  </a>
}

return <button className={classes} onClick={onClick}>
  {content}
</button>
```

This allows the same component to handle both navigation (links) and actions (buttons) while maintaining consistent styling and behavior.

### TypeScript Interface

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  icon?: string;
  iconAlt?: string;
  className?: string;
  target?: string;
  rel?: string;
}
```

### Accessibility Considerations

- Use semantic HTML (`<button>` vs `<a>`)
- Provide meaningful `iconAlt` text when using icons
- Include `rel="noopener noreferrer"` for external links with `target="_blank"`
- Ensure sufficient color contrast in both light and dark modes

### Browser Support

The component uses modern CSS and relies on:
- Tailwind CSS classes
- CSS custom properties (e.g., `bg-foreground`, `text-background`)
- Dark mode via Tailwind's `dark:` variant
- Next.js Image component optimization

---

## ButtonSmall

A compact version of the Button component with smaller dimensions, perfect for inline actions, toolbars, or space-constrained layouts.

**Location:** `components/ButtonSmall.tsx`

### Features

- Wraps the base `Button` component
- Smaller height (h-8 vs h-12)
- Compact padding (px-3 vs px-5)
- Smaller text size (text-sm)
- Auto width instead of full width
- Inherits all Button features: variants, icons, link/button rendering
- Full dark mode support
- TypeScript interface for type safety

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | Yes | The content to display inside the button |
| `variant` | `"primary" \| "secondary"` | `"primary"` | No | The visual style variant |
| `href` | `string` | - | No | If provided, renders as an anchor tag instead of button |
| `onClick` | `() => void` | - | No | Click handler function |
| `icon` | `string` | - | No | Path to icon image (e.g., `/vercel.svg`) |
| `iconAlt` | `string` | `""` | No | Alt text for the icon |
| `className` | `string` | `""` | No | Additional CSS classes to apply |
| `target` | `string` | - | No | Link target attribute (e.g., `"_blank"`) |
| `rel` | `string` | - | No | Link relationship attribute (e.g., `"noopener noreferrer"`) |

### Size Comparison

| Property | Button | ButtonSmall |
|----------|--------|-------------|
| Height | `h-12` (3rem) | `h-8` (2rem) |
| Padding | `px-5` | `px-3` |
| Text Size | base | `text-sm` |
| Width | `w-full` / `md:w-[158px]` | `w-auto` |

### Usage Examples

#### Basic Small Button

```tsx
import ButtonSmall from "@/components/ButtonSmall";

<ButtonSmall variant="primary">
  Save
</ButtonSmall>
```

#### Small Link Button

```tsx
<ButtonSmall
  variant="secondary"
  href="/settings"
>
  Settings
</ButtonSmall>
```

#### Small Button with Icon

```tsx
<ButtonSmall
  variant="primary"
  icon="/plus.svg"
  iconAlt="Add"
>
  Add Item
</ButtonSmall>
```

#### Small Button in Toolbar

```tsx
<div className="flex gap-2">
  <ButtonSmall variant="secondary" onClick={() => console.log("Edit")}>
    Edit
  </ButtonSmall>
  <ButtonSmall variant="secondary" onClick={() => console.log("Delete")}>
    Delete
  </ButtonSmall>
  <ButtonSmall variant="primary" onClick={() => console.log("Save")}>
    Save
  </ButtonSmall>
</div>
```

#### Small Button with Custom Styling

```tsx
<ButtonSmall
  variant="primary"
  className="min-w-[80px]"
  onClick={() => console.log("Confirm")}
>
  Confirm
</ButtonSmall>
```

### Styling Details

The ButtonSmall component applies the following overrides to the base Button:
- `!h-8` - Height of 2rem (32px)
- `!w-auto` - Auto width instead of full width
- `!px-3` - Horizontal padding of 0.75rem
- `!text-sm` - Smaller text size (0.875rem)
- `md:!w-auto` - Maintains auto width on larger screens

The `!` prefix ensures these styles override the base Button classes using Tailwind's important modifier.

### Implementation Details

ButtonSmall is a wrapper component that passes all props to the base Button component while applying size-specific class overrides:

```tsx
export default function ButtonSmall({ /* props */ }: ButtonSmallProps) {
  const smallClasses = "!h-8 !w-auto !px-3 !text-sm md:!w-auto";
  const combinedClasses = `${smallClasses} ${className}`;

  return (
    <Button
      variant={variant}
      // ... other props
      className={combinedClasses}
    >
      {children}
    </Button>
  );
}
```

This approach ensures ButtonSmall inherits all Button functionality while maintaining a smaller footprint.

### TypeScript Interface

```typescript
interface ButtonSmallProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  icon?: string;
  iconAlt?: string;
  className?: string;
  target?: string;
  rel?: string;
}
```

### When to Use

**Use ButtonSmall when:**
- Space is limited (toolbars, table rows, inline actions)
- You need a less prominent call-to-action
- Building compact UI elements
- Creating action menus or button groups

**Use regular Button when:**
- The action is a primary page action
- More visual prominence is needed
- Following standard button sizing patterns

### Accessibility Considerations

Inherits all accessibility features from the base Button component:
- Use semantic HTML (`<button>` vs `<a>`)
- Provide meaningful `iconAlt` text when using icons
- Ensure touch targets are at least 44x44px on mobile (consider padding)
- Include `rel="noopener noreferrer"` for external links with `target="_blank"`

---

## TextButton

A text-styled button component that looks like a clickable text link. Perfect for subtle actions, inline links, or when you need a button that doesn't stand out visually.

**Location:** `components/TextButton.tsx`

### Features

- Wraps the base `Button` component
- No background or border styling
- Looks like clickable text with underline on hover
- Auto width and height (inline styling)
- No padding - fits naturally within text flow
- Inherits Button functionality: link/button rendering, icons
- Full dark mode support
- TypeScript interface for type safety

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | Yes | The text content to display |
| `href` | `string` | - | No | If provided, renders as an anchor tag instead of button |
| `onClick` | `() => void` | - | No | Click handler function |
| `icon` | `string` | - | No | Path to icon image (e.g., `/arrow.svg`) |
| `iconAlt` | `string` | `""` | No | Alt text for the icon |
| `className` | `string` | `""` | No | Additional CSS classes to apply |
| `target` | `string` | - | No | Link target attribute (e.g., `"_blank"`) |
| `rel` | `string` | - | No | Link relationship attribute (e.g., `"noopener noreferrer"`) |

### Style Comparison

| Property | Button | TextButton |
|----------|--------|------------|
| Background | Solid/Border | Transparent |
| Border | Optional | None |
| Height | `h-12` (3rem) | Auto |
| Padding | `px-5` | None |
| Width | `w-full` / responsive | Auto (inline) |
| Hover | Background change | Underline |

### Usage Examples

#### Basic Text Button

```tsx
import TextButton from "@/components/TextButton";

<TextButton onClick={() => console.log("Clicked")}>
  Learn more
</TextButton>
```

#### Text Link Button

```tsx
<TextButton href="/about">
  About us
</TextButton>
```

#### External Text Link

```tsx
<TextButton
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit our website
</TextButton>
```

#### Text Button with Icon

```tsx
<TextButton
  href="/docs"
  icon="/arrow-right.svg"
  iconAlt="Arrow"
>
  Read the documentation
</TextButton>
```

#### Inline Text Button in Paragraph

```tsx
<p className="text-base text-zinc-600">
  Already have an account?{" "}
  <TextButton href="/login">
    Sign in
  </TextButton>
</p>
```

#### Text Button with Custom Styling

```tsx
<TextButton
  onClick={() => console.log("Danger action")}
  className="!text-red-600 dark:!text-red-400"
>
  Delete account
</TextButton>
```

### Styling Details

The TextButton component applies the following overrides to the base Button:

- `!bg-transparent` - Removes background
- `!border-0` - Removes border
- `!rounded-none` - Removes border radius
- `!h-auto !w-auto` - Auto sizing
- `!px-0 !py-0` - No padding
- `!text-zinc-950 dark:!text-zinc-50` - Text color for light/dark mode
- `hover:!bg-transparent` - Keeps background transparent on hover
- `hover:underline` - Adds underline on hover
- `!font-medium` - Medium font weight
- `!transition-all` - Smooth transitions

The `!` prefix ensures these styles override the base Button classes using Tailwind's important modifier.

### Implementation Details

TextButton is a wrapper component that passes all props to the base Button component while removing visual button styling:

```tsx
export default function TextButton({ /* props */ }: TextButtonProps) {
  const textClasses =
    "!bg-transparent !border-0 !rounded-none !h-auto !w-auto !px-0 !py-0 " +
    "!text-zinc-950 dark:!text-zinc-50 " +
    "hover:!bg-transparent hover:underline " +
    "!font-medium !transition-all";

  const combinedClasses = `${textClasses} ${className}`;

  return (
    <Button
      variant="primary"
      // ... other props
      className={combinedClasses}
    >
      {children}
    </Button>
  );
}
```

This approach ensures TextButton inherits all Button functionality (href/onClick handling, icon support) while appearing as styled text.

### TypeScript Interface

```typescript
interface TextButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: string;
  iconAlt?: string;
  className?: string;
  target?: string;
  rel?: string;
}
```

Note: Unlike the base Button, TextButton doesn't have a `variant` prop since it always uses a text-only style.

### When to Use

**Use TextButton when:**
- You need a clickable action that looks like a link
- Building inline actions within text content
- Creating subtle secondary actions
- The action should not draw visual attention
- You want semantic button/link behavior without button styling

**Use regular Button when:**
- The action is a primary or important action
- Visual prominence is needed
- Following standard button design patterns
- You need distinct visual affordances

**Use ButtonSmall when:**
- You need a compact button with visible button styling
- Building toolbars or action menus
- Space is limited but visual button affordances are needed

### Accessibility Considerations

Inherits all accessibility features from the base Button component:
- Uses semantic HTML (`<button>` vs `<a>`)
- Provide meaningful `iconAlt` text when using icons
- Ensure adequate color contrast for text (WCAG AA: 4.5:1 for normal text)
- Consider using `aria-label` for icon-only text buttons
- Include `rel="noopener noreferrer"` for external links with `target="_blank"`
- Underline on hover provides clear interaction feedback

### Common Patterns

#### Secondary Action in Forms

```tsx
<form>
  <Button variant="primary" type="submit">
    Create Account
  </Button>
  <TextButton href="/login">
    Already have an account?
  </TextButton>
</form>
```

#### Inline Help or Info Links

```tsx
<div className="form-field">
  <label>API Key</label>
  <input type="text" />
  <TextButton href="/docs/api-keys">
    Where do I find my API key?
  </TextButton>
</div>
```

#### Navigation in Footers

```tsx
<footer>
  <TextButton href="/privacy">Privacy Policy</TextButton>
  {" • "}
  <TextButton href="/terms">Terms of Service</TextButton>
  {" • "}
  <TextButton href="/contact">Contact</TextButton>
</footer>
```

---

## Adding New Components

When adding new components to the `components/` folder, please update this document with:

1. Component name and description
2. Location (file path)
3. Props table with types and descriptions
4. Usage examples
5. Any special considerations or dependencies
