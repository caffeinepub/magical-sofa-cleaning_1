import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconBadgeProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'muted';
  className?: string;
}

export default function IconBadge({ 
  icon: Icon, 
  size = 'md', 
  variant = 'default',
  className 
}: IconBadgeProps) {
  const sizeClasses = {
    sm: 'h-12 w-12',
    md: 'h-16 w-16',
    lg: 'h-20 w-20'
  };

  const iconSizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  };

  const variantClasses = {
    default: 'premium-icon-badge text-primary-foreground',
    primary: 'premium-icon-badge text-primary-foreground',
    secondary: 'bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground border-2 border-secondary/30 shadow-premium-gold',
    accent: 'premium-icon-badge-gold text-accent-foreground',
    muted: 'bg-muted text-muted-foreground border-2 border-border'
  };

  return (
    <div 
      className={cn(
        'flex items-center justify-center rounded-2xl transition-all',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Icon className={cn('stroke-[2.5]', iconSizeClasses[size])} />
    </div>
  );
}
