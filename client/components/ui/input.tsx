"use client";

import { InputHTMLAttributes, forwardRef } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`
          w-full
          rounded-lg
          border border-slate-300
          bg-white dark:bg-zinc-900
          px-3 py-2
          text-sm
          outline-none
          transition
          focus:border-black dark:focus:border-white
          disabled:opacity-50
          disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
