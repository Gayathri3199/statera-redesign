import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Glossy "raised" treatment matched to wearclair.com: a subtle top sheen
// + layered inset shadows, springy press (scale 0.98), opacity hover.
const GLOSS =
  "shadow-[0_-1px_#0000001a_inset,0_1px_2px_#00000005,0_1px_1px_#0000000a,0_1.5px_2px_#ffffff66_inset,0_0_0_1px_#00000026_inset]";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap font-medium [font-family:var(--font-body)] transition-[opacity,transform] duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        // coral glossy — wearclair's signature primary
        primary: `text-white [background:linear-gradient(180deg,#ffffff1a,#0000000a),#e97530] hover:opacity-90 ${GLOSS}`,
        // outlined / ghost
        secondary:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        // white glossy — for dark sections
        onDark: `bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30 ${GLOSS}`,
      },
      size: {
        default: "h-12 px-6 text-base rounded-xl",
        sm: "h-9 px-4 text-sm rounded-lg",
        lg: "h-14 px-8 text-lg rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
