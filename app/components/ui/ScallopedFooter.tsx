import type { ReactNode, CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

interface IScallopedFooter {
  children: ReactNode;
  bgColor?: string;
  scallopWidthPx?: number;
  className?: string;
}

export default function ScallopedFooter({
  bgColor = "#f7f4d5",
  scallopWidthPx = 48,
  children,
  className,
  ...rest
}: IScallopedFooter) {
  const radius = scallopWidthPx / 2;
  const height = radius + 1;

  const customStyles = {
    backgroundColor: bgColor,
    "--scallop-bg": bgColor,
    "--scallop-w": `${scallopWidthPx}px`,
    "--scallop-r": `${radius}px`,
    "--scallop-h": `${height}px`,
  } as CSSProperties;

  return (
    <footer
      {...rest}
      style={customStyles}
      className={twMerge(
        `fixed bottom-0 inset-x-0 z-10 h-20
        before:content-[''] before:pointer-events-none before:absolute before:inset-x-0
        before:-top-(--scallop-h) before:h-(--scallop-h)
        before:bg-[radial-gradient(circle_at_50%_100%,var(--scallop-bg)_var(--scallop-r),transparent_var(--scallop-h))]
        before:bg-size-[var(--scallop-w)_var(--scallop-h)] before:bg-repeat-x`,
        className
      )}
    >
      {children}
    </footer>
  );
}
