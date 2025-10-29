# Components

Reusable React components in `components/`.

## ButtonBase

Versatile button that renders as `<button>` or `<a>` with icon support and two variants: `primary` (solid) and `secondary` (outlined).

**Props:** `children`, `variant?`, `href?`, `onClick?`, `icon?`, `iconAlt?`, `className?`, `target?`, `rel?`

```tsx
import { ButtonBase } from "@/components";

<ButtonBase variant="primary">Click Me</ButtonBase>
<ButtonBase variant="secondary" href="/page">Go to Page</ButtonBase>
<ButtonBase icon="/icon.svg" iconAlt="Icon">With Icon</ButtonBase>
```

---

## ButtonSmall

Compact version of Button. Same props as Button. Smaller size: `h-8`, `px-3`, `text-sm`.

```tsx
import { ButtonSmall } from "@/components/ButtonSmall";

<ButtonSmall variant="primary">Save</ButtonSmall>
<ButtonSmall href="/settings">Settings</ButtonSmall>
```

Use for toolbars, inline actions, or space-constrained layouts.

---

## TextButton

Button styled as clickable text. No `variant` prop. Underlines on hover.

**Props:** `children`, `href?`, `onClick?`, `icon?`, `iconAlt?`, `className?`, `target?`, `rel?`

```tsx
import { TextButton } from "@/components/TextButton";

<TextButton href="/about">Learn more</TextButton>
<TextButton onClick={handleClick}>Click here</TextButton>
```

Use for inline text links or subtle secondary actions.
