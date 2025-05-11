"use client";

import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export function Button({
  children,
  className = "",
  loading,
  disabled,
  ...props
}: Props) {
  return (
    <button
      disabled={disabled || loading}
      className={`
        w-full
        rounded-lg
        bg-black
        text-white
        px-4 py-2
        text-sm font-medium
        transition
        hover:opacity-90
        disabled:opacity-50
        disabled:cursor-not-allowed
        dark:bg-white
        dark:text-black
        ${className}
      `}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
