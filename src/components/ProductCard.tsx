import { useState } from 'react';
import { ChevronDown, ChevronUp, Package } from 'lucide-react';
import type { Product, ProductCategory } from '../data/products';
import { BenefitBadge } from './BenefitBadge';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'boyo';
}

const TONE_MAP: Record<ProductCategory, 'teal' | 'gold' | 'jaggery'> = {
  sugar: 'teal',
  ghee: 'gold',
  jaggery: 'jaggery',
  'nuts-snacks': 'gold',
};

const BG_TINT_MAP: Record<ProductCategory, string> = {
  sugar: 'bg-teal-light',
  ghee: 'bg-gold-light',
  jaggery: 'bg-jaggery-light',
  'nuts-snacks': 'bg-gold-light',
};

export function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const tone = variant === 'boyo' ? 'gold' : TONE_MAP[product.category];
  const bgTint = variant === 'boyo' ? 'bg-gold-light' : BG_TINT_MAP[product.category];

  return (
    <article
      className={`group flex flex-col bg-white ring-1 ring-ink/5 hover:ring-ink/10 transition-all duration-600 ease-cinematic overflow-hidden`}
      aria-label={`${product.name} — ${product.tagline}`}
    >
      <div
        className={`relative aspect-square w-full ${bgTint} overflow-hidden flex-shrink-0`}
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
          className={`w-full h-full object-cover transition-all duration-800 ease-cinematic group-hover:scale-[1.04] ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-lg font-semibold text-ink leading-tight">
              {product.name}
            </h3>
            <p className="text-sm text-ink/60 leading-snug">{product.tagline}</p>
          </div>
        </div>

        <div
          className="flex items-center gap-2 text-xs text-ink/50"
          aria-label="Available pack sizes"
        >
          <Package className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
          <span className="tracking-tight">
            {product.packSizes.join(' · ')}
          </span>
        </div>

        <div
          className="flex flex-wrap gap-1.5"
          aria-label="Product benefits"
        >
          {product.benefits.map((b) => (
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
            className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-teal-deep hover:text-teal-deep/80 transition-colors focus-visible:outline-none"
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
                ? 'grid-rows-[1fr] opacity-100 mt-3'
                : 'grid-rows-[0fr] opacity-0 mt-0'
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-sm text-ink/75 leading-relaxed border-t border-ink/5 pt-3">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
