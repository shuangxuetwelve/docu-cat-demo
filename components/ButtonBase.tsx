import React from "react";
import Image from "next/image";

interface ButtonBaseProps {
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

export function ButtonBase({
  children,
  variant = "primary",
  href,
  onClick,
  icon,
  iconAlt = "",
  className = "",
  target,
  rel,
}: ButtonBaseProps) {
  const baseClasses =
    "flex h-12 w-full items-center justify-center rounded-full px-5 transition-colors md:w-[158px]";

  const variantClasses = {
    primary:
      "bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc]",
    secondary:
      "border border-solid border-black/[.08] hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

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
