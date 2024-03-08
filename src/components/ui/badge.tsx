import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-2xl px-2 py-1 text-sm font-semibold uppercase", {
  variants: {
    variant: {
      default: "bg-rewoven-gold text-white",
      completed: "bg-rewoven-caramel text-white",
      uncompleted: "bg-gray-accent-6 text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
