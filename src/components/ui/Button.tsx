import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = "btn";

    const variantClasses = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      outline: "btn-outline",
      ghost: "btn-ghost",
    };

    const sizeClasses = {
      sm: "btn-sm",
      md: "",
      lg: "btn-lg",
    };

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          loading && "loading",
          (disabled || loading) && "opacity-50 cursor-not-allowed",
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
