import { cx } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React from "react";
import { tv, VariantProps } from "tailwind-variants";

type Props = VariantProps<typeof variants> & {
  as: "link" | "button";
  text: string;
  className?: string;
} & (AnchorProps | ButtonProps);

type AnchorProps = LinkProps & {
  as: "link";
};

type ButtonProps = React.ComponentProps<"button"> & {
  as: "button";
};

const variants = tv({
  base: "font-semibold text-sm w-fit",
  variants: {
    variant: {
      primary: "text-primary",
      grey: "text-gray-600",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Anchor = ({ as, text, className = "", variant, ...props }: Props) => {
  const computedClassName = cx([variants({ variant }), className]);

  switch (as) {
    case "link":
      const { ...nextLinkProps } = props as AnchorProps;

      return (
        <Link {...nextLinkProps} className={computedClassName}>
          <span>{text}</span>
        </Link>
      );

    default:
      const { ...buttonProps } = props as React.ComponentProps<"button">;
      return (
        <button {...buttonProps} className={computedClassName}>
          <span>{text}</span>
        </button>
      );
  }
};

export default Anchor;
