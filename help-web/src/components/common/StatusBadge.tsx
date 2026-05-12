import { clsx } from 'clsx';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusColors: Record<string, string> = {
  '🔴': 'bg-red-100 text-red-800 border-red-200',
  '🟡': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  '🟢': 'bg-green-100 text-green-800 border-green-200',
};

const statusKeys: Record<string, 'status.notStarted' | 'status.inProgress' | 'status.completed'> = {
  '🔴': 'status.notStarted',
  '🟡': 'status.inProgress',
  '🟢': 'status.completed',
};

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const { t } = useLanguage();
  const color = statusColors[status] || statusColors['🔴'];
  const labelKey = statusKeys[status] || statusKeys['🔴'];

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border',
        color,
        className
      )}
    >
      <span>{status}</span>
      <span>{t(labelKey)}</span>
    </span>
  );
}
