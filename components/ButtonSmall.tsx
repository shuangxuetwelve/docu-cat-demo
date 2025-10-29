import React from "react";
import { ButtonBase } from "./ButtonBase";

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

/**
 * A small version of the Button component with smaller dimensions, perfect for inline actions, toolbars, or space-constrained layouts.
 *
 * It inherits all the features of the ButtonBase component, but with smaller dimensions.
 * @param param0
 * @returns
 */
export function ButtonSmall({
  children,
  variant = "primary",
  href,
  onClick,
  icon,
  iconAlt = "",
  className = "",
  target,
  rel,
}: ButtonSmallProps) {
  // Override Button classes to make it smaller
  const smallClasses = "!h-8 !w-auto !px-3 !text-sm md:!w-auto";
  const combinedClasses = `${smallClasses} ${className}`;

  return (
    <ButtonBase
      variant={variant}
      href={href}
      onClick={onClick}
      icon={icon}
      iconAlt={iconAlt}
      className={combinedClasses}
      target={target}
      rel={rel}
    >
      {children}
    </ButtonBase>
  );
}
