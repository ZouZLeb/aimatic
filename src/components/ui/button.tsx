import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "btn-custom-glass",
        outline: "btn-custom-glass opacity-80 hover:opacity-100",
        secondary: "btn-custom-glass opacity-60 hover:opacity-100",
        ghost: "hover:bg-white/10 backdrop-blur-sm transition-colors shadow-none",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "",
        sm: "scale-90",
        lg: "scale-110",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // If it's a regular button (not asChild) and using one of our glass variants, wrap content
    if (!asChild && (variant === "default" || variant === "outline" || variant === "secondary")) {
      return (
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          <div className="btn-custom-glass-inner">
            <div className="btn-custom-glass-text">{children}</div>
          </div>
        </button>
      )
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }