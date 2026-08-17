import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { getProductsByCategory, type ProductCategory } from '../data/products';
import { ProductCard } from '../components/ProductCard';

type CategoryFilter = 'all' | ProductCategory;

const TABS: { id: CategoryFilter; label: string; accent: string }[] = [
  { id: 'all', label: 'All Products', accent: 'text-teal-deep' },
  { id: 'sugar', label: 'Sugar', accent: 'text-teal-deep' },
  { id: 'jaggery', label: 'Jaggery & Brown', accent: 'text-jaggery' },
  { id: 'ghee', label: 'Desi Ghee', accent: 'text-gold' },
  { id: 'nuts-snacks', label: 'Nuts & Snacks', accent: 'text-gold' },
];

const HERO_TINT: Record<Exclude<CategoryFilter, 'all'>, string> = {
  sugar: 'from-teal-light/70',
  jaggery: 'from-jaggery-light/70',
  ghee: 'from-gold-light/80',
  'nuts-snacks': 'from-gold-light/70',
};

const HERO_TITLE: Record<Exclude<CategoryFilter, 'all'>, string> = {
  sugar: 'Pure, double-refined sugar.',
  jaggery: 'Traditional jaggery & brown sugar.',
  ghee: 'Pure desi cow ghee.',
  'nuts-snacks': 'Healthy nuts & snacks.',
};

const HERO_SUBTITLE: Record<Exclude<CategoryFilter, 'all'>, string> = {
  sugar: 'Everyday sugar, trusted by Maharashtra for 64 years. Crystal-clear, quick-dissolving, and uniformly grained.',
  jaggery: 'Unrefined, mineral-rich sweetness the way your grandparents loved it. Solid blocks, powder, and soft brown.',
  ghee: 'Slow-cultured, traditionally churned ghee from grass-fed desi cows. The golden taste of tradition.',
  'nuts-snacks': 'Premium nuts, seeds, berries, and peanut butter — a healthy snack range from our BOYO sub-brand.',
};

const TITLE: Record<Exclude<CategoryFilter, 'all'>, string> = {
  sugar: 'Sugar Range',
  jaggery: 'Jaggery & Brown Sugar Range',
  ghee: 'Desi Cow Ghee Range',
  'nuts-snacks': 'Nuts & Snacks Range',
};

const DESC: Record<Exclude<CategoryFilter, 'all'>, string> = {
  sugar: 'Explore Amrut Sugar\'s double-refined, gold, and caster sugar range.',
  jaggery: 'Pure jaggery blocks, jaggery powder, and soft brown sugar from Amrut.',
  ghee: 'Amrut desi cow ghee — traditionally churned, pure, and golden.',
  'nuts-snacks': 'BOYO nuts, seeds, berries and peanut butter — healthy snacking, bold as you.',
};

export default function Products() {
  const [params, setParams] = useSearchParams();
  const categoryParam = (params.get('category') as CategoryFilter | null);

  const validCat: CategoryFilter = useMemo(() => {
    if (!categoryParam) return 'all';
    if ((['all', 'sugar', 'jaggery', 'ghee', 'nuts-snacks'] as const).includes(categoryParam)) {
      return categoryParam;
    }
    return 'all';
  }, [categoryParam]);

  const [active, setActive] = useState<CategoryFilter>(validCat);

  useEffect(() => {
    setActive(validCat);
  }, [validCat]);

  const products = useMemo(() => getProductsByCategory(active), [active]);

  const heroTint =
    active === 'all'
      ? 'from-teal-light/50 via-gold-light/40 to-jaggery-light/40'
      : `${HERO_TINT[active as Exclude<CategoryFilter, 'all'>]}`;

  const pageTitle =
    active === 'all'
      ? 'All Products — Amrut Sugar'
      : `${TITLE[active as Exclude<CategoryFilter, 'all'>]} — Amrut Sugar`;

  const pageDesc =
    active === 'all'
      ? 'Explore the complete Amrut product range — white and gold sugar, caster sugar, jaggery, brown sugar, and pure desi cow ghee.'
      : DESC[active as Exclude<CategoryFilter, 'all'>];

  const handleTab = (id: CategoryFilter) => {
    setActive(id);
    if (id === 'all') {
      setParams({}, { replace: true });
    } else {
      setParams({ category: id }, { replace: true });
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Helmet>

      <section
        className={`relative overflow-hidden`}
        aria-labelledby="products-hero-heading"
      >
        <div
          className={`absolute inset-0 -z-10 bg-gradient-to-b ${heroTint} via-cream to-cream`}
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-20 lg:pb-16">
          <div className="flex flex-col gap-4 max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-deep">
              Products
            </p>
            <h1
              id="products-hero-heading"
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-ink leading-[1.05]"
            >
              {active === 'all' ? (
                <>
                  Our entire range,{' '}
                  <span className="text-teal-deep">pure and simple.</span>
                </>
              ) : (
                <span className={TABS.find((t) => t.id === active)?.accent}>
                  {HERO_TITLE[active as Exclude<CategoryFilter, 'all'>]}
                </span>
              )}
            </h1>
            <p className="text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl">
              {active === 'all'
                ? 'Sugar, jaggery, ghee, and BOYO snacks — every product crafted with the same obsession for cleanliness and quality.'
                : HERO_SUBTITLE[active as Exclude<CategoryFilter, 'all'>]}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Product categories"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div
          role="tablist"
          aria-label="Filter products by category"
          className="flex flex-wrap gap-2 sm:gap-3 pb-8 border-b border-ink/5"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-400 ease-cinematic focus-visible:outline-none ${
                  isActive
                    ? `bg-teal-deep text-cream ring-1 ring-teal-deep/20`
                    : `bg-white text-ink/75 ring-1 ring-ink/10 hover:text-teal-deep hover:ring-teal-deep/20`
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      <section
        aria-labelledby="product-grid-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
      >
        <div className="flex items-end justify-between gap-4 mb-8">
          <div className="flex flex-col gap-1.5">
            <h2
              id="product-grid-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-ink"
            >
              {active === 'all'
                ? `All Products (${products.length})`
                : `${TABS.find((t) => t.id === active)?.label} (${products.length})`}
            </h2>
            <p className="text-sm text-ink/60">
              Click a card for the full story.
            </p>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="py-16 text-center text-ink/60">
            No products in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
