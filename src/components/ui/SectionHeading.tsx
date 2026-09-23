import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  alignment = 'center',
  className = '' 
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col ${alignment === 'center' ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-primary-text mb-1.5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs md:text-sm text-secondary-text max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
