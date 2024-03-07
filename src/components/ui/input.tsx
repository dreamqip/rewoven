import * as React from "react";

import { cn } from "~/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full rounded-2xl border border-rewoven-biscuit bg-white px-4 py-3 text-base font-semibold text-rewoven-biscuit shadow-sm transition-colors file:border-0 file:bg-transparent file:text-base file:font-semibold placeholder:text-gray-accent-6 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rewoven-caramel disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
