import React from 'react';
import { cn } from '@/components/common/cn';

const styles = {
  primary:
    'bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#095d42] focus-visible:ring-primary',
  secondary:
    'border border-primary/20 bg-white text-primary hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:ring-primary',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-300',
};

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 ring-focus disabled:cursor-not-allowed disabled:opacity-60',
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
