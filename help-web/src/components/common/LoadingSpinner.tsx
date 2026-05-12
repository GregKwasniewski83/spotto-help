/**
 * LoadingSpinner Component
 * Displays a spinning loader for async operations
 */

import { Loader2 } from 'lucide-react';
import { colors } from '@/lib/theme';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  className?: string;
}

const sizeClasses = {
  small: 'w-4 h-4',
  medium: 'w-8 h-8',
  large: 'w-12 h-12'
};

export default function LoadingSpinner({ size = 'medium', text, className = '' }: LoadingSpinnerProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin`} style={{ color: colors.primary }} />
      {text && (
        <p className="text-sm" style={{ color: colors.textSecondary }}>{text}</p>
      )}
    </div>
  );
}
