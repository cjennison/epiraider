import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "feature" | "glass" | "gradient-border";
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const baseClasses = "card";

    const variantClasses = {
      default: "",
      feature: "card-feature",
      glass: "glass",
      "gradient-border": "gradient-border",
    };

    return (
      <div
        className={cn(baseClasses, variantClasses[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
