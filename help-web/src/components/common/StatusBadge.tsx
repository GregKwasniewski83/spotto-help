import { clsx } from 'clsx';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusConfig: Record<string, { label: string; color: string }> = {
  '🔴': { label: 'Nie rozpoczęto', color: 'bg-red-100 text-red-800 border-red-200' },
  '🟡': { label: 'W trakcie', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  '🟢': { label: 'Ukończono', color: 'bg-green-100 text-green-800 border-green-200' }
};

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig['🔴'];

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border',
        config.color,
        className
      )}
    >
      <span>{status}</span>
      <span>{config.label}</span>
    </span>
  );
}
