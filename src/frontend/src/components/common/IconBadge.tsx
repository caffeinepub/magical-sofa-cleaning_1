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
    sm: 'h-10 w-10',
    md: 'h-14 w-14',
    lg: 'h-16 w-16'
  };

  const iconSizeClasses = {
    sm: 'h-5 w-5',
    md: 'h-7 w-7',
    lg: 'h-8 w-8'
  };

  const variantClasses = {
    default: 'bg-primary/10 text-primary',
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground',
    muted: 'bg-muted text-muted-foreground'
  };

  return (
    <div 
      className={cn(
        'flex items-center justify-center rounded-xl transition-all',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Icon className={cn('stroke-[2.5]', iconSizeClasses[size])} />
    </div>
  );
}
