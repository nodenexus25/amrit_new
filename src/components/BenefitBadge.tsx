import {
  Leaf,
  Shield,
  Droplets,
  Zap,
  Heart,
  Flame,
  Sprout,
  Sparkles,
  Sun,
} from 'lucide-react';

type BenefitIconId =
  | 'leaf'
  | 'shield'
  | 'droplet'
  | 'zap'
  | 'heart'
  | 'flame'
  | 'seedling'
  | 'sparkles'
  | 'sun';

const ICONS: Record<BenefitIconId, React.ComponentType<{ className?: string }>> = {
  leaf: Leaf,
  shield: Shield,
  droplet: Droplets,
  zap: Zap,
  heart: Heart,
  flame: Flame,
  seedling: Sprout,
  sparkles: Sparkles,
  sun: Sun,
};

export interface BenefitBadgeProps {
  icon: BenefitIconId;
  label: string;
  size?: 'sm' | 'md';
  tone?: 'teal' | 'gold' | 'jaggery';
}

export function BenefitBadge({
  icon,
  label,
  size = 'sm',
  tone = 'teal',
}: BenefitBadgeProps) {
  const Icon = ICONS[icon] ?? Leaf;

  const toneClasses = {
    teal: {
      wrapper: 'bg-teal-light text-teal-deep',
      ring: 'ring-1 ring-teal-deep/10',
    },
    gold: {
      wrapper: 'bg-gold-light text-gold',
      ring: 'ring-1 ring-gold/15',
    },
    jaggery: {
      wrapper: 'bg-jaggery-light text-jaggery',
      ring: 'ring-1 ring-jaggery/15',
    },
  }[tone];

  const sizeClasses =
    size === 'sm'
      ? 'px-2.5 py-1 text-[11px] gap-1.5'
      : 'px-3.5 py-1.5 text-xs gap-2';

  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  return (
    <span
      className={`inline-flex items-center font-medium tracking-tight ${toneClasses.wrapper} ${toneClasses.ring} ${sizeClasses}`}
      aria-label={label}
    >
      <Icon className={iconSize} aria-hidden="true" />
      <span className="whitespace-nowrap">{label}</span>
    </span>
  );
}
