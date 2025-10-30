import React from "react";
import Image from "next/image";

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
 * TODO: A better implementation is to use the ButtonBase component as a base and set the variant to "text". But here we leave it as a future improvement.
 *
 * @param props - TextButton component props
 * @returns A button component styled as text
 */
export function TextButton({
  children,
  href,
  onClick,
  icon,
  iconAlt = "",
  className = "",
  target,
  rel,
}: TextButtonProps) {
  const textClasses =
    "inline-flex items-center gap-1 bg-transparent border-0 " +
    "text-zinc-950 dark:text-zinc-50 " +
    "hover:underline font-medium transition-all cursor-pointer";

  const classes = `${textClasses} ${className}`;

  const content = (
    <>
      {icon && (
        <Image
          className="dark:invert"
          src={icon}
          alt={iconAlt}
          width={16}
          height={16}
        />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
