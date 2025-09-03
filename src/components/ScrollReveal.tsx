import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  delay?: number;
  className?: string;
  options?: UseScrollAnimationOptions;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = '',
  options,
}) => {
  const { elementRef, isVisible } = useScrollAnimation(options);

  return (
    <div
      ref={elementRef}
      className={`${className} ${
        isVisible ? `animate-${animation}` : 'opacity-0'
      }`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
