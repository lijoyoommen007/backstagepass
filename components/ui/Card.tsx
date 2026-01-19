import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const variants = {
    default: [
      "bg-header-sub-bg/80 dark:bg-header-sub-bg/80",
      "backdrop-blur-md",
      "border border-light/50",
      "text-card-foreground",
    ],
    elevated: [
      "bg-header-sub-bg dark:bg-header-sub-bg",
      "backdrop-blur-xl",
      "border border-light",
      "shadow-xl shadow-black/5 dark:shadow-black/40",
      "text-card-foreground",
    ],
    outlined: [
      "bg-header-sub-bg/60 dark:bg-header-sub-bg/60",
      "backdrop-blur-sm",
      "border border-light/40",
      "text-card-foreground",
    ],
  };

  return (
    <div
      className={cn(
        "rounded-[24px] overflow-hidden transition-all duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn("px-6 py-4", className)} {...props}>
    {children}
  </div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn("px-6 pb-4", className)} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn("px-6 py-4 border-t border-light/20", className)} {...props}>
    {children}
  </div>
);
