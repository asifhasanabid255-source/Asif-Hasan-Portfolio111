import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  href,
  download,
  target,
  rel,
  ...props
}: ButtonProps) {
  
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all rounded-full outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-primary-accent text-white hover:bg-accent-hover shadow-sm',
    secondary: 'bg-white-surface text-primary-text border border-border hover:border-primary-accent/30 shadow-sm',
    outline: 'border border-border/70 text-primary-text hover:border-primary-accent hover:text-primary-accent hover:bg-gray-50/50',
    ghost: 'text-secondary-text hover:text-primary-accent hover:bg-gray-100/50',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClass}
        tabIndex={props.tabIndex}
        aria-label={props['aria-label']}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClass}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  );
}
