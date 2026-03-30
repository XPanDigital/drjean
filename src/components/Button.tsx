import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-body font-semibold uppercase tracking-[0.15em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-deep-blue disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary-deep-blue text-primary-white hover:bg-primary-deep-blue/90": variant === "primary",
            "border border-primary-deep-blue/30 text-primary-deep-blue hover:border-primary-deep-blue hover:bg-primary-deep-blue hover:text-primary-white": variant === "outline",
            "hover:bg-primary-light-gray text-primary-deep-blue": variant === "ghost",
            "bg-transparent text-primary-deep-blue hover:text-secondary-soft-gold p-0 h-auto rounded-none border-b border-transparent hover:border-secondary-soft-gold": variant === "link",
            "h-12 px-8 py-2 text-xs": size === "default" && variant !== "link",
            "h-10 px-6 text-[10px]": size === "sm" && variant !== "link",
            "h-14 px-10 text-sm": size === "lg" && variant !== "link",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
