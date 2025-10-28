import React from "react";
import { Button } from "./Button";

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

/**
 * A text-styled button component that looks like a clickable text link.
 * Perfect for subtle actions, inline links, or when you need a button that doesn't stand out.
 *
 * The component relies on the Button component to render the button.
 *
 * @param props - TextButton component props
 * @returns A button component styled as text
 */
export default function TextButton({
  children,
  href,
  onClick,
  icon,
  iconAlt = "",
  className = "",
  target,
  rel,
}: TextButtonProps) {
  // Override Button classes to make it look like text
  const textClasses =
    "!bg-transparent !border-0 !rounded-none !h-auto !w-auto !px-0 !py-0 " +
    "!text-zinc-950 dark:!text-zinc-50 " +
    "hover:!bg-transparent hover:underline " +
    "!font-medium !transition-all";

  const combinedClasses = `${textClasses} ${className}`;

  return (
    <Button
      variant="primary"
      href={href}
      onClick={onClick}
      icon={icon}
      iconAlt={iconAlt}
      className={combinedClasses}
      target={target}
      rel={rel}
    >
      {children}
    </Button>
  );
}
