import type { ReactNode, CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

interface IScallopedHeader {
  children: ReactNode;
  bgColor?: string;
  scallopWidthPx?: number;
  className?: string;
}

export default function ScallopedHeader({
  bgColor = "#f7f4d5",
  scallopWidthPx = 48,
  children,
  className,
  ...rest
}: IScallopedHeader) {
  const radius = scallopWidthPx / 2;
  const height = radius + 1;

  const customStyles = {
    backgroundColor: bgColor,
    marginBottom: `${height}px`,
    "--scallop-bg": bgColor,
    "--scallop-w": `${scallopWidthPx}px`,
    "--scallop-r": `${radius}px`,
    "--scallop-h": `${height}px`,
  } as CSSProperties;

  return (
    <header
      {...rest}
      style={customStyles}
      className={twMerge(
        `relative h-20
        after:content-[''] after:pointer-events-none after:absolute after:inset-x-0
        after:-bottom-(--scallop-h) after:h-(--scallop-h)
        after:bg-[radial-gradient(circle_at_50%_0,var(--scallop-bg)_var(--scallop-r),transparent_var(--scallop-h))]
        after:bg-size-[var(--scallop-w)_var(--scallop-h)] after:bg-repeat-x`,
        className
      )}
    >
      {children}
    </header>
  );
}
