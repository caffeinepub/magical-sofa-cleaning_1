import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface InlineIconProps {
  icon: LucideIcon;
  className?: string;
}

export default function InlineIcon({ icon: Icon, className }: InlineIconProps) {
  return <Icon className={cn("inline-icon icon-vibrate", className)} />;
}
