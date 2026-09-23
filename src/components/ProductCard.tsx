import { useState } from 'react';
import { ChevronDown, ChevronUp, Package } from 'lucide-react';
import type { Product, ProductCategory } from '../data/products';
import { BenefitBadge } from './BenefitBadge';

interface ProductCardProps {
  product: Product;
}

const TONE_MAP: Record<ProductCategory, 'teal' | 'gold' | 'jaggery'> = {
  sugar: 'teal',
  ghee: 'gold',
  jaggery: 'jaggery',
  pulses: 'jaggery',
};

const BG_TINT_MAP: Record<ProductCategory, string> = {
  sugar: 'bg-teal-light',
  ghee: 'bg-gold-light',
  jaggery: 'bg-jaggery-light',
  pulses: 'bg-jaggery-light',
};

export function ProductCard({ product }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const tone = TONE_MAP[product.category];
  const bgTint = BG_TINT_MAP[product.category];

  return (
    <article
      className={`group flex flex-col bg-white ring-1 ring-ink/5 hover:ring-ink/10 hover:-translate-y-1.5 transition-all duration-600 ease-cinematic overflow-hidden shine-wrap reveal-hidden-scale`}
      aria-label={`${product.name} — ${product.tagline}`}
      style={{ borderRadius: '22px', minHeight: '520px', maxHeight: '520px' }}
    >
      <div
        className={`relative w-full ${bgTint} overflow-hidden flex-shrink-0`}
        style={{ height: '240px' }}
      >
        {!imgLoaded && (
          <div className="absolute inset-0 animate-pulse bg-ink/5" aria-hidden="true" />
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-contain p-3 transition-all duration-800 ease-cinematic group-hover:scale-[1.06] ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1 overflow-hidden">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1 text-left min-h-[60px]">
            <h3 className="text-base font-semibold text-ink leading-tight line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-ink/60 leading-snug line-clamp-1">{product.tagline}</p>
          </div>
        </div>

        <div
          className="flex items-center gap-2 text-xs text-ink/50"
          aria-label="Available pack sizes"
        >
          <Package className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
          <span className="tracking-tight truncate">
            {product.packSizes.join(' · ')}
          </span>
        </div>

        <div
          className="flex flex-wrap gap-1.5 min-h-[54px]"
          aria-label="Product benefits"
        >
          {product.benefits.slice(0, 3).map((b) => (
            <BenefitBadge
              key={b.id}
              icon={b.icon as any}
              label={b.label}
              tone={tone}
              size="sm"
            />
          ))}
        </div>

        <div className="mt-auto pt-1">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={`desc-${product.id}`}
            className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep hover:text-teal-deep/80 transition-colors focus-visible:outline-none px-3 py-1.5 rounded-full hover:bg-teal-light/60"
          >
            <span>{expanded ? 'Hide details' : 'More details'}</span>
            {expanded ? (
              <ChevronUp className="w-4 h-4 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 transition-transform" />
            )}
          </button>

          <div
            id={`desc-${product.id}`}
            role="region"
            aria-label={`${product.name} description`}
            className={`grid transition-all duration-600 ease-cinematic ${
              expanded
                ? 'grid-rows-[1fr] opacity-100 mt-2'
                : 'grid-rows-[0fr] opacity-0 mt-0'
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-xs text-ink/75 leading-relaxed border-t border-ink/5 pt-2 line-clamp-4">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
