import type { ElementType, ComponentPropsWithoutRef, CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

type ScallopedElement = "section" | "header" | "footer" | "div" | "nav" | "aside";

type IScallopedSection<T extends ScallopedElement = "section"> = {
  as?: T;
  bgColor?: string;
  scallopWidthPx?: number;
  top?: boolean;
  bottom?: boolean;
  autoMargin?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export default function ScallopedSection<T extends ScallopedElement = "section">({
  as,
  bgColor = "#f7f4d5",
  scallopWidthPx = 48,
  top = false,
  bottom = false,
  autoMargin = true,
  children,
  className,
  style,
  ...rest
}: IScallopedSection<T>) {
  const Component = (as || "section") as ElementType;
  const radius = scallopWidthPx / 2;
  const height = radius + 1;

  const customStyles = {
    backgroundColor: bgColor,
    marginTop: autoMargin && top ? `${height}px` : undefined,
    marginBottom: autoMargin && bottom ? `${height}px` : undefined,
    "--scallop-bg": bgColor,
    "--scallop-w": `${scallopWidthPx}px`,
    "--scallop-r": `${radius}px`,
    "--scallop-h": `${height}px`,
    ...style,
  } as CSSProperties;

  const topScallopClasses = top
    ? `before:content-[''] before:pointer-events-none before:absolute before:inset-x-0
       before:-top-(--scallop-h) before:h-(--scallop-h)
       before:bg-[radial-gradient(circle_at_50%_100%,var(--scallop-bg)_var(--scallop-r),transparent_var(--scallop-h))]
       before:bg-size-[var(--scallop-w)_var(--scallop-h)] before:bg-repeat-x`
    : "";

  const bottomScallopClasses = bottom
    ? `after:content-[''] after:pointer-events-none after:absolute after:inset-x-0
       after:-bottom-(--scallop-h) after:h-(--scallop-h)
       after:bg-[radial-gradient(circle_at_50%_0,var(--scallop-bg)_var(--scallop-r),transparent_var(--scallop-h))]
       after:bg-size-[var(--scallop-w)_var(--scallop-h)] after:bg-repeat-x`
    : "";

  return (
    <Component
      {...rest}
      style={customStyles}
      className={twMerge(
        "relative",
        topScallopClasses,
        bottomScallopClasses,
        className
      )}
    >
      {children}
    </Component>
  );
}

