/* 
*
*
* THIS WAS PULLED FROM A PERSONAL PROJECT AND WAS NOT CREATED FOR THIS TECHNCIAL TEST
* I wanted to save some time with typography styling
*
*
*/

import * as React from "react";
import { twMerge } from "tailwind-merge";
import { highlightToken } from "../_helpers/highlight-token";

export type FontVariant =
  | "title1"
  | "title2"
  | "subtitle1"
  | "subtitle2"
  | "body"
  | "cta"
  | "caption1"
  | "caption2"
  | "caption3";
export type DesktopFontVariant = `md:${FontVariant}`;
export type FontStyle = "regular" | "semibold" | "bold";
export type DesktopFontStyle = `md:${FontStyle}`;

type FontVariantName = FontVariant | DesktopFontVariant;
type FontVariantsMap = { [key in FontVariantName]: string };

const FontVariantsMap: FontVariantsMap = {
  "md:title1": "md:text-6xl md:leading-tight md:tracking-tight",
  title1: "text-4xl leading-10 tracking-tight",

  "md:title2": "md:text-4xl md:leading-10 md:tracking-tight",
  title2: "text-3xl leading-8 tracking-tight",

  "md:subtitle1": "md:text-3xl md:leading-9 md:tracking-normal",
  subtitle1: "text-lg leading-7",

  "md:subtitle2": "md:text-2xl md:leading-8 md:tracking-normal",
  subtitle2: "text-base leading-6",

  "md:body": "md:text-lg md:leading-7 md:tracking-normal",
  body: "text-lg leading-6",

  "md:cta": "md:text-sm md:leading-7 md:tracking-normal",
  cta: "text-sm",

  "md:caption1": "md:text-base md:leading-6 md:tracking-wide",
  caption1: "text-base leading-6",

  "md:caption2": "md:text-sm md:leading-5 md:tracking-wide",
  caption2: "text-sm",

  "md:caption3": "md:text-xs md:leading-4 md:tracking-wide",
  caption3: "text-xs",
} as const;

type FontStyles = { [styleKey in FontStyle]?: string };
type FontStylesMap = { [key in FontVariantName]: FontStyles };

const FontStylesMap: FontStylesMap = {
  "md:title1": { regular: "md:font-bold" },
  title1: { regular: "font-bold" },

  "md:title2": { regular: "md:font-semibold", bold: "md:font-bold" },
  title2: { regular: "font-semibold", bold: "font-bold" },

  "md:subtitle1": { regular: "md:font-semibold", bold: "md:font-bold" },
  subtitle1: { regular: "font-semibold", bold: "font-bold" },

  "md:subtitle2": {
    regular: "md:font-semibold",
    bold: "md:font-semibold",
  },
  subtitle2: {
    regular: "font-semibold",
    bold: "font-semibold",
  },

  "md:body": {
    regular: "md:font-normal",
    semibold: "md:font-medium",
    bold: "md:font-semibold",
  },
  body: {
    regular: "font-normal",
    semibold: "font-medium",
    bold: "font-semibold",
  },

  "md:cta": { regular: "md:font-semibold" },
  cta: { regular: "font-semibold" },

  "md:caption1": {
    regular: "md:font-light",
    semibold: "md:font-medium",
    bold: "md:font-semibold",
  },
  caption1: {
    regular: "font-light",
    semibold: "font-medium",
    bold: "font-semibold",
  },

  "md:caption2": {
    regular: "md:font-light",
    semibold: "md:font-medium",
    bold: "md:font-semibold",
  },
  caption2: {
    regular: "font-light",
    semibold: "font-medium",
    bold: "font-semibold",
  },

  "md:caption3": {
    regular: "md:font-light",
    semibold: "md:font-medium",
    bold: "md:font-semibold",
  },
  caption3: {
    regular: "font-light",
    semibold: "font-medium",
    bold: "font-semibold",
  },
} as const;

export function calculateFontClass(
  variant: FontVariant | [FontVariant, DesktopFontVariant],
  style: "skip" | FontStyle | [FontStyle, DesktopFontStyle] = "regular"
) {
  const [defaultVariant, desktopVariant] =
    typeof variant === "string"
      ? [variant, `md:${variant}` as DesktopFontVariant]
      : variant;

  const styleClass =
    style === "skip" ? "" : calculateFontStyleClass(variant, style);

  return twMerge(
    FontVariantsMap[defaultVariant],
    FontVariantsMap[desktopVariant],
    styleClass
  );
}

export function calculateFontStyleClass(
  variant: FontVariant | [FontVariant, DesktopFontVariant],
  style: FontStyle | [FontStyle, DesktopFontStyle]
) {
  const [defaultVariant, desktopVariant] =
    typeof variant === "string"
      ? [variant, `md:${variant}` as DesktopFontVariant]
      : variant;
  const [defaultStyle, desktopStyle] =
    typeof style === "string" ? [style, style] : style;

  const defaultStyleClass = FontStylesMap[defaultVariant][defaultStyle];
  const desktopStyleClass =
    FontStylesMap[desktopVariant][
      desktopStyle.replace(/^md:/, "") as FontStyle
    ];

  if (defaultStyleClass == null)
    throw new Error(
      `Unsupported style for default font variant ${defaultVariant}`
    );
  if (desktopStyleClass == null)
    throw new Error(
      `Unsupported style for desktop font variant ${desktopVariant}`
    );

  return twMerge(defaultStyleClass, desktopStyleClass);
}

const getSkeletonStyles = (skeletonProps?: SkeletonProps) => {
  return skeletonProps
    ? twMerge(
        "animate-pulse opacity-80 rounded-full bg-lightGrey before:content-[''] before:inline-block",
        skeletonProps.className
      )
    : "";
};

// Stylesheet Components

export type SkeletonProps = { className?: string };
export type TypographyProps = {
  id?: string;
  children?: React.ReactNode;
  skeleton?: SkeletonProps;
  className?: string;
  tokenToHiglight?: string;
  highlightClassName?: string;
  tag?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  variant?: FontVariant | [FontVariant, DesktopFontVariant];
  fontStyle?: FontStyle | [FontStyle, DesktopFontStyle];
  skipFontStyle?: boolean;
};

export function Typography({
  children,
  className,
  tokenToHiglight,
  tag = "div",
  highlightClassName,
  skeleton,
  style,
  variant = "body",
  fontStyle = "regular",
  skipFontStyle = false,
}: TypographyProps) {
  const CustomTag = tag;

  const highlightClassNames = twMerge(
    "font-semibold md:font-semibold",
    highlightClassName
  );
  const fontClass = calculateFontClass(
    variant,
    skipFontStyle ? "skip" : fontStyle
  );

  const tagChildren = skeleton
    ? undefined
    : formatChildren({ children, tokenToHiglight, highlightClassNames });

  return (
    <CustomTag
      className={twMerge(
        "text-brand-black",
        fontClass,
        getSkeletonStyles(skeleton),
        className
      )}
      style={style}
    >
      {tagChildren}
    </CustomTag>
  );
}

export type TypographyVariantProps = Omit<
  TypographyProps,
  "variant" | "desktopVariant" | "dekstopFontStyle"
>;

type FormatChildrenProps = React.PropsWithChildren & {
  tokenToHiglight: string | undefined;
  highlightClassNames: string;
};
function formatChildren({
  children,
  tokenToHiglight,
  highlightClassNames,
}: FormatChildrenProps) {
  return typeof children === "string" && tokenToHiglight != null
    ? highlightToken(children.toString(), tokenToHiglight, highlightClassNames)
    : children;
}

// Dt/Title 1 | Mob/Title 1
export function Title1({ children, tag, ...props }: TypographyVariantProps) {
  return (
    <Typography variant="title1" tag={tag || "h1"} {...props}>
      {children}
    </Typography>
  );
}

// Dt/Title 2 | Mob/Title 2
export function Title2({ children, tag, ...props }: TypographyVariantProps) {
  return (
    <Typography variant="title2" tag={tag || "h2"} {...props}>
      {children}
    </Typography>
  );
}

// Dt/Subtitle 1 | Mob/Subtitle 1
export function Subtitle1({ children, tag, ...props }: TypographyVariantProps) {
  return (
    <Typography variant="subtitle1" tag={tag || "h3"} {...props}>
      {children}
    </Typography>
  );
}

// Dt/Subtitle 2 | Mob/Subtitle 2
export function Subtitle2({ children, tag, ...props }: TypographyVariantProps) {
  return (
    <Typography variant="subtitle2" tag={tag || "h4"} {...props}>
      {children}
    </Typography>
  );
}

// Body
export function Body({ children, ...props }: TypographyVariantProps) {
  return (
    <Typography variant="body" {...props}>
      {children}
    </Typography>
  );
}

// CTA
export function TextCta({ children, ...props }: TypographyVariantProps) {
  return (
    <Typography variant="cta" {...props}>
      {children}
    </Typography>
  );
}

// Caption 1
export function Caption1({ children, ...props }: TypographyVariantProps) {
  return (
    <Typography variant="caption1" {...props}>
      {children}
    </Typography>
  );
}

// Caption 2
export function Caption2({ children, ...props }: TypographyVariantProps) {
  return (
    <Typography variant="caption2" {...props}>
      {children}
    </Typography>
  );
}

// Caption 3
export function Caption3({ children, ...props }: TypographyVariantProps) {
  return (
    <Typography variant="caption3" {...props}>
      {children}
    </Typography>
  );
}
