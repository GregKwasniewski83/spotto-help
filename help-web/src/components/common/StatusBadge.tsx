import { useLanguage } from '@/lib/i18n/LanguageContext';
import { colors } from '@/lib/theme';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusStyles: Record<string, { bg: string; fg: string; border: string }> = {
  '🔴': {
    bg: 'rgba(0, 106, 122, 0.10)',
    fg: colors.error,
    border: 'rgba(0, 106, 122, 0.25)',
  },
  '🟡': {
    bg: 'rgba(255, 86, 34, 0.10)',
    fg: colors.accent,
    border: 'rgba(255, 86, 34, 0.25)',
  },
  '🟢': {
    bg: 'rgba(95, 167, 138, 0.12)',
    fg: colors.success,
    border: 'rgba(95, 167, 138, 0.30)',
  },
};

const statusKeys: Record<string, 'status.notStarted' | 'status.inProgress' | 'status.completed'> = {
  '🔴': 'status.notStarted',
  '🟡': 'status.inProgress',
  '🟢': 'status.completed',
};

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const { t } = useLanguage();
  const palette = statusStyles[status] || statusStyles['🔴'];
  const labelKey = statusKeys[status] || statusKeys['🔴'];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${className}`}
      style={{
        backgroundColor: palette.bg,
        color: palette.fg,
        border: `1px solid ${palette.border}`,
      }}
    >
      <span>{status}</span>
      <span>{t(labelKey)}</span>
    </span>
  );
}
