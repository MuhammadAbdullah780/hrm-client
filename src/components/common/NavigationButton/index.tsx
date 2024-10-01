import { cx, focusRing } from "@/lib/utils";
import React from "react";

interface NavigationButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  icon: React.ElementType;
  disabled?: boolean;
}

const NavigationButton = React.forwardRef<
  HTMLButtonElement,
  NavigationButtonProps
>(
  (
    { onClick, icon, disabled, ...props }: NavigationButtonProps,
    forwardedRef,
  ) => {
    const Icon = icon;
    return (
      <button
        ref={forwardedRef}
        type="button"
        disabled={disabled}
        className={cx(
          "flex size-8 shrink-0 select-none items-center justify-center rounded border p-1 outline-none transition sm:size-[30px]",
          // text color
          "text-gray-600 hover:text-gray-800",
          "dark:text-gray-400 hover:dark:text-gray-200",
          // border color
          "border-gray-300 dark:border-gray-800",
          // background color
          "hover:bg-gray-50 active:bg-gray-100",
          "hover:dark:bg-gray-900 active:dark:bg-gray-800",
          // disabled
          "disabled:pointer-events-none",
          "disabled:border-gray-200 disabled:dark:border-gray-800",
          "disabled:text-gray-400 disabled:dark:text-gray-600",
          focusRing,
        )}
        onClick={onClick}
        {...props}>
        <Icon className="size-full shrink-0" />
      </button>
    );
  },
);

NavigationButton.displayName = "NavigationButton";

export { NavigationButton };
