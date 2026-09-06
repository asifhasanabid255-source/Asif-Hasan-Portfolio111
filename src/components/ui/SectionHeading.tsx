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
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight text-primary-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-secondary-text max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
