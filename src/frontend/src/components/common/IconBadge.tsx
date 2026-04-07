import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface IconBadgeProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "accent" | "muted";
  className?: string;
}

const sizeClasses = {
  sm: "h-10 w-10 p-2",
  md: "h-14 w-14 p-3",
  lg: "h-16 w-16 p-3.5",
};

const variantClasses = {
  default: "premium-icon-badge",
  primary: "premium-icon-badge",
  secondary: "premium-icon-badge-gold",
  accent: "premium-icon-badge-gold",
  muted: "border-muted-foreground/30 bg-muted/50",
};

export default function IconBadge({
  icon: Icon,
  size = "md",
  variant = "default",
  className,
}: IconBadgeProps) {
  return (
    <div
      className={cn(
        sizeClasses[size],
        variantClasses[variant],
        "icon-vibrate icon-shine",
        className,
      )}
    >
      <Icon className="h-full w-full stroke-[2.5]" />
    </div>
  );
}
