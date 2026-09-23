import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { getProductsByCategory, type ProductCategory, categories, products as ALL_PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { BenefitBadge } from '../components/BenefitBadge';
import {
  ArrowRight, Sparkles, Leaf, Droplet, Sprout, Flame, Heart,
  ShieldCheck, Factory, Gem, Award, Truck, Store, ChevronRight,
  Cookie, Coffee, Cake, UtensilsCrossed, Star, Zap
} from 'lucide-react';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      '.reveal-hidden, .reveal-hidden-left, .reveal-hidden-right, .reveal-hidden-scale'
    );
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('reveal-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

type CategoryFilter = 'all' | ProductCategory;

const TABS: { id: CategoryFilter; label: string; accent: string; icon: typeof Leaf }[] = [
  { id: 'all', label: 'All Products', accent: 'text-teal-deep', icon: Sparkles },
  { id: 'sugar', label: 'Sugar', accent: 'text-teal-deep', icon: Droplet },
  { id: 'jaggery', label: 'Jaggery & Brown', accent: 'text-jaggery', icon: Flame },
  { id: 'pulses', label: 'Pulses (Amrut Farms)', accent: 'text-jaggery', icon: Sprout },
  { id: 'ghee', label: 'Desi Ghee', accent: 'text-gold', icon: Heart },
];

const HERO_TITLE: Record<Exclude<CategoryFilter, 'all'>, string> = {
  sugar: 'Pure, double-refined sugar.',
  jaggery: 'Traditional jaggery & brown sugar.',
  pulses: 'Amrut Farms — Select pulses & dals.',
  ghee: 'Pure desi cow ghee.',
};

const HERO_SUBTITLE: Record<Exclude<CategoryFilter, 'all'>, string> = {
  sugar: 'Everyday sugar, trusted by Maharashtra for 64 years. Crystal-clear, quick-dissolving, and uniformly grained.',
  jaggery: 'Unrefined, mineral-rich sweetness the way your grandparents loved it. Solid blocks, powder, cubes and soft brown.',
  pulses: 'Toor, Chana, Moong, Urad — clean, select-source dal from Amrut Farms. No artificial colours, no preservatives.',
  ghee: 'Slow-cultured, traditionally churned ghee from grass-fed desi cows. The golden taste of tradition.',
};

const CATEGORY_HERO: Record<Exclude<CategoryFilter, 'all'>, { tag: string; stat: string; statLabel: string }> = {
  sugar: { tag: 'The Icon · Since 1975', stat: '8+', statLabel: 'SKUs · 1kg to 50kg' },
  jaggery: { tag: 'The Heritage · 100% Natural', stat: '5+', statLabel: 'Forms · Block, Cubes, Powder' },
  pulses: { tag: 'Amrut Farms · Select Source', stat: '4', statLabel: 'Dals · Toor · Chana · Moong · Urad' },
  ghee: { tag: 'Desi Cow · Grass-Fed', stat: '1L+', statLabel: 'Slow-cultured golden ghee' },
};

const TITLE: Record<Exclude<CategoryFilter, 'all'>, string> = {
  sugar: 'Sugar Range',
  jaggery: 'Jaggery & Brown Sugar Range',
  pulses: 'Amrut Farms — Pulses & Dals Range',
  ghee: 'Desi Cow Ghee Range',
};

const DESC: Record<Exclude<CategoryFilter, 'all'>, string> = {
  sugar: 'Explore Amrut Sugar\'s double-refined, gold, and caster sugar range.',
  jaggery: 'Pure jaggery blocks, jaggery cubes, jaggery powder, and soft brown sugar from Amrut.',
  pulses: 'Amrut Farms — toor dal, chana dal, moong dal, urad dal. Clean, pure, select-source.',
  ghee: 'Amrut desi cow ghee — traditionally churned, pure, and golden.',
};

const VIDEOS = [
  { src: '/02.mp4', label: 'The Mill', sub: '02 · Kopargaon', chip: 'bg-teal-deep/90', icon: Factory },
  { src: '/Amrut farm 3.mp4', label: 'Farm Harvest', sub: '03 · Fields', chip: 'bg-jaggery/90', icon: Sprout },
  { src: '/Amrut farm 4.mp4', label: 'Sun & Soil', sub: '04 · Maharashtra', chip: 'bg-gold/90', icon: Leaf },
] as const;

const PRODUCT_RANGES_STATS = [
  { label: 'Pure', Icon: Sparkles, accent: 'text-teal-deep', tint: 'bg-teal-light/80' },
  { label: 'Hygienic', Icon: ShieldCheck, accent: 'text-gold', tint: 'bg-gold-light/80' },
  { label: 'Farm Fresh', Icon: Leaf, accent: 'text-jaggery', tint: 'bg-jaggery-light/80' },
  { label: '64 Years', Icon: Heart, accent: 'text-teal-deep', tint: 'bg-teal-light/80' },
];

const PROCESS_STRIP = [
  { k: '01', label: 'Farm Harvest', tint: 'from-jaggery-light/90 to-jaggery/70', icon: Sprout },
  { k: '02', label: 'Mill Crush', tint: 'from-teal-light/90 to-teal-deep/70', icon: Factory },
  { k: '03', label: 'Double Refine', tint: 'from-gold-light/90 to-gold/70', icon: Gem },
  { k: '04', label: 'Seal & Pack', tint: 'from-teal-light/90 to-emerald-700/70', icon: ShieldCheck },
  { k: '05', label: 'Truck to Shop', tint: 'from-jaggery-light/90 to-amber-600/70', icon: Truck },
  { k: '06', label: 'Ghar Tak', tint: 'from-gold-light/90 to-amber-500/70', icon: Store },
] as const;

const PAIRING_TILES = [
  { k: 'Chai', Icon: Coffee, tint: 'bg-gold-light', accent: 'text-gold', body: 'Tea-time sparkle', copy: 'One spoon, perfect dissolve.' },
  { k: 'Mithai', Icon: Cake, tint: 'bg-teal-light', accent: 'text-teal-deep', body: 'Sweets that shine', copy: 'Every ladoo, every barfi.' },
  { k: 'Dal', Icon: UtensilsCrossed, tint: 'bg-jaggery-light', accent: 'text-jaggery', body: 'Dinner balance', copy: 'Amrut Farms, everyday.' },
  { k: 'Prasad', Icon: Cookie, tint: 'bg-gold-light', accent: 'text-gold', body: 'Naivedyam pure', copy: 'Temple-worthy cleanliness.' },
] as const;

const MARQUEE_ITEMS = [
  'ISO 9001:2015 Certified',
  'Double Refined',
  'Sulphur-Free',
  'Uniform Crystal Size',
  'Since 1962',
  'River Godavari',
  'Khaas Wali Mithaas!',
  'Sanjivani Group',
  'Farmer-First Cooperative',
  'Hygienically Sealed',
];

export default function Products() {
  useScrollReveal();
  const [params, setParams] = useSearchParams();
  const categoryParam = (params.get('category') as CategoryFilter | null);

  const validCat: CategoryFilter = useMemo(() => {
    if (!categoryParam) return 'all';
    if ((['all', 'sugar', 'jaggery', 'ghee', 'pulses'] as const).includes(categoryParam)) {
      return categoryParam;
    }
    return 'all';
  }, [categoryParam]);

  const [active, setActive] = useState<CategoryFilter>(validCat);

  useEffect(() => {
    setActive(validCat);
  }, [validCat]);

  const products = useMemo(() => getProductsByCategory(active), [active]);

  const spotlight = useMemo(() => {
    if (active === 'all') return ALL_PRODUCTS.find(p => p.id === 'amrut-gold-sugar-5kg') ?? ALL_PRODUCTS[0];
    return products[0];
  }, [active, products]);

  const pageTitle =
    active === 'all'
      ? 'All Products — Amrut Sugar'
      : `${TITLE[active as Exclude<CategoryFilter, 'all'>]} — Amrut Sugar`;

  const pageDesc =
    active === 'all'
      ? 'Explore the complete Amrut product range — white and gold sugar, caster sugar, jaggery, brown sugar, Amrut Farms pulses, and pure desi cow ghee.'
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

      {/* ==== HERO — FULL REDESIGN ==== */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-cream via-cream to-gold-light/20"
        aria-labelledby="products-hero-heading"
        style={{ minHeight: 'max(100svh, 680px)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-multiply pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `url(/bg.png)`,
            backgroundSize: '520px 520px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute top-[-10%] left-[-8%] w-[480px] h-[480px] rounded-full bg-teal-light/60 blur-[120px] opacity-70 animate-pulse-soft" aria-hidden="true" />
        <div className="absolute top-[10%] right-[-6%] w-[460px] h-[460px] rounded-full bg-gold/40 blur-[120px] opacity-70 animate-pulse-soft delay-500" aria-hidden="true" />
        <div className="absolute bottom-[-12%] left-[28%] w-[520px] h-[520px] rounded-full bg-jaggery-light/60 blur-[140px] opacity-55 animate-float-slow" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(closest-side at 50% 18%, rgba(255,251,235,0.95) 0%, rgba(255,251,235,0) 60%)',
          }}
        />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-28 lg:pb-16 relative">
          <div className="flex flex-col items-center text-center gap-6 max-w-5xl mx-auto reveal-hidden">
            <div className="flex flex-wrap items-center justify-center gap-2 animate-fade-down">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white ring-1 ring-teal-deep/15 shadow-[0_8px_24px_rgba(31,92,74,0.08)] shine-wrap" style={{ borderRadius: '999px' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-deep animate-pulse-soft shrink-0" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-teal-deep whitespace-nowrap">
                  {active === 'all' ? 'The Full Shelf · Amrut' : CATEGORY_HERO[active as Exclude<CategoryFilter, 'all'>].tag}
                </span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-gold-light/80 via-gold-light to-jaggery-light/70 ring-1 ring-gold/20 shadow-[0_8px_24px_rgba(255,196,64,0.18)] shine-wrap" style={{ borderRadius: '999px' }}>
                <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-extrabold tracking-wide text-ink/90 whitespace-nowrap">
                  Khaas Wali Mithaas!
                </span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white ring-1 ring-jaggery/20 shadow-[0_8px_24px_rgba(207,135,59,0.08)] shine-wrap" style={{ borderRadius: '999px' }}>
                <Award className="w-3.5 h-3.5 text-jaggery shrink-0" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wide text-ink/80 whitespace-nowrap">
                  ISO 9001:2015 Certified
                </span>
              </span>
            </div>

            <h1
              id="products-hero-heading"
              className="text-[40px] sm:text-5xl lg:text-[72px] xl:text-[82px] font-black tracking-[-0.02em] text-ink leading-[0.98] animate-fade-up delay-100"
              style={{ textShadow: '0 4px 40px rgba(255,196,64,0.12)' }}
            >
              {active === 'all' ? (
                <>
                  Sweetness that
                  <br />
                  <span className="bg-gradient-to-r from-teal-deep via-gold to-jaggery bg-clip-text text-transparent">
                    belongs in every home.
                  </span>
                </>
              ) : (
                <>
                  {HERO_TITLE[active as Exclude<CategoryFilter, 'all'>]}
                  <br />
                  <span className="bg-gradient-to-r from-teal-deep via-gold to-jaggery bg-clip-text text-transparent">
                    Pure. Clean. Amrut.
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-ink/70 leading-relaxed max-w-2xl animate-fade-up delay-200 font-medium">
              {active === 'all'
                ? 'From everyday sugar to slow-cultured desi ghee — jaggery, and Amrut Farms pulses. Every pack sealed clean, every crystal crafted with the same 64 years of obsession for quality.'
                : HERO_SUBTITLE[active as Exclude<CategoryFilter, 'all'>]}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl animate-fade-up delay-300">
              {PRODUCT_RANGES_STATS.map((stat, i) => {
                const Icon = stat.Icon;
                return (
                  <div
                    key={stat.label}
                    className="group flex flex-col sm:flex-row sm:items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-3.5 bg-white/85 backdrop-blur-sm ring-1 ring-ink/8 hover:ring-teal-deep/25 transition-all duration-500 ease-cinematic hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] shine-wrap"
                    style={{ borderRadius: '18px', animationDelay: `${i * 50}ms` }}
                  >
                    <div className={`mx-auto sm:mx-0 inline-flex items-center justify-center w-10 h-10 shrink-0 ${stat.tint} animate-float-fast`} style={{ borderRadius: '12px' }}>
                      <Icon className={`w-5 h-5 ${stat.accent}`} aria-hidden="true" />
                    </div>
                    <span className="text-sm sm:text-[15px] font-extrabold tracking-tight text-ink/90 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1 animate-fade-up delay-400">
              <a
                href="#product-grid-heading"
                className="group shine-wrap inline-flex items-center gap-2.5 px-7 sm:px-8 py-4 sm:py-4.5 bg-gradient-to-r from-teal-deep to-emerald-700 text-cream text-sm sm:text-[15px] font-extrabold tracking-tight hover:from-teal-deep hover:to-emerald-800 transition-all duration-600 ease-cinematic focus-visible:outline-none shadow-[0_14px_32px_rgba(31,92,74,0.32)]"
                style={{ borderRadius: '999px' }}
              >
                Explore the Range
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-600 ease-cinematic group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <div className="inline-flex items-center gap-3 px-5 sm:px-6 py-3.5 sm:py-4 bg-white ring-1 ring-gold/25 shadow-[0_10px_28px_rgba(255,196,64,0.12)] shine-wrap" style={{ borderRadius: '999px' }}>
                <div className="flex flex-col leading-tight">
                  <span className="text-xl sm:text-[26px] font-black text-teal-deep leading-none">
                    {active === 'all' ? `${products.length}+` : CATEGORY_HERO[active as Exclude<CategoryFilter, 'all'>].stat}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-ink/60 tracking-wide mt-1">
                    {active === 'all' ? 'Products · One Name' : CATEGORY_HERO[active as Exclude<CategoryFilter, 'all'>].statLabel}
                  </span>
                </div>
                <div className="h-8 w-px bg-ink/10" aria-hidden="true" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xl sm:text-[26px] font-black text-gold leading-none">
                    1962
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-ink/60 tracking-wide mt-1">
                    Serving Maharashtra
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 sm:mt-16 lg:mt-20 reveal-hidden-scale">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-teal-light/70 via-gold/50 to-jaggery-light/70 blur-3xl opacity-70 animate-pulse-soft" aria-hidden="true" />
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-white via-white/70 to-cream ring-2 ring-white shadow-[0_30px_80px_rgba(31,92,74,0.18)] animate-float-medium" style={{ borderRadius: '34px' }} aria-hidden="true" />
              <div className="relative overflow-hidden ring-1 ring-ink/5 shine-wrap bg-gradient-to-br from-white via-cream to-gold-light/15" style={{ borderRadius: '32px' }}>
                <div className="grid sm:grid-cols-12 items-stretch gap-0">
                  

                 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee floor */}
        <div className="relative border-t border-ink/5 bg-gradient-to-r from-cream via-white to-cream shadow-[0_-10px_30px_rgba(0,0,0,0.02)] py-2.5 sm:py-3 overflow-hidden">
          <div className="flex gap-8 sm:gap-10 animate-marquee whitespace-nowrap">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((m, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase text-ink/50 shrink-0"
              >
                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-teal-deep shrink-0" aria-hidden="true" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==== 3 VIDEOS IN ONE HORIZONTAL ROW (small tiles) ==== */}
      <section
        aria-label="The Amrut journey — mill, farms, sunshine"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 reveal-hidden">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-deep">
              Reel · 3 ways Amrut is made
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink leading-tight">
              Mill · Farms · Sunshine — <span className="text-jaggery">all in one sweep.</span>
            </h2>
          </div>
          <p className="text-sm text-ink/60 max-w-md">
            Three tiny loops, one story. Tap any tile to feel the buzz of the karkhana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {VIDEOS.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.src}
                className="group relative reveal-hidden-scale"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute -inset-3 bg-gradient-to-br from-teal-light/40 via-gold-light/30 to-jaggery-light/40 blur-3xl opacity-60 group-hover:opacity-90 animate-pulse-soft transition-opacity duration-700" aria-hidden="true" />
                <div className="relative aspect-[4/3] overflow-hidden ring-1 ring-ink/10 shine-wrap transition-all duration-600 ease-cinematic group-hover:ring-ink/20 group-hover:-translate-y-1" style={{ borderRadius: '22px' }}>
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={v.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{
                    background: 'linear-gradient(180deg, rgba(20,34,30,0.18) 0%, transparent 40%, rgba(20,34,30,0.72) 100%)'
                  }} />
                  <div className={`absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 backdrop-blur-md ring-1 ring-cream/20 ${v.chip} shine-wrap`} style={{ borderRadius: '999px' }}>
                    <Icon className="w-3.5 h-3.5 text-cream" aria-hidden="true" />
                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-cream">
                      {v.sub}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 bg-cream/[0.12] ring-1 ring-cream/25 backdrop-blur-md" style={{ borderRadius: '999px' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-cream animate-pulse-soft" aria-hidden="true" />
                    <span className="text-[9px] font-extrabold tracking-widest uppercase text-cream/95">
                      LIVE
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-lg sm:text-xl font-extrabold tracking-tight text-cream leading-none" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.55)' }}>
                        {v.label}
                      </p>
                      <p className="text-[11px] text-cream/80">
                        {i === 0 && 'Where cane becomes crystal.'}
                        {i === 1 && 'Morning harvest, same day crush.'}
                        {i === 2 && 'Sunshine in every sugarcane.'}
                      </p>
                    </div>
                    <div className="inline-flex items-center justify-center w-9 h-9 bg-cream/[0.12] ring-1 ring-cream/25 backdrop-blur-md shrink-0 transition-all duration-500 ease-cinematic group-hover:bg-gold-light group-hover:ring-gold/40 group-hover:scale-110" style={{ borderRadius: '999px' }}>
                      <ChevronRight className="w-4 h-4 text-cream group-hover:text-teal-deep" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==== PROCESS STRIP: 6 steps, pill staircase ==== */}
      <section
        aria-label="From farm to kitchen"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-4 lg:pb-6"
      >
        <div className="flex flex-col items-center text-center gap-2 mb-6 reveal-hidden">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">
            The Amrut Line · 6 steps
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink leading-tight">
            From <span className="text-jaggery">khet</span> to <span className="text-teal-deep">ghar tak</span>, in one sweep.
          </h2>
        </div>

        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-4 -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PROCESS_STRIP.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.k}
                className="snap-start shrink-0 w-[44%] sm:w-[30%] md:w-[22%] lg:w-[15.5%]"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className={`group relative overflow-hidden p-4 sm:p-5 bg-gradient-to-br ${p.tint} text-cream ring-1 ring-ink/10 shine-wrap transition-all duration-600 ease-cinematic hover:-translate-y-1 hover:ring-ink/20 reveal-hidden-scale`}
                  style={{ borderRadius: '20px' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-cream/20 backdrop-blur-sm ring-1 ring-cream/30 animate-float-fast" style={{ borderRadius: '12px' }}>
                      <Icon className="w-5 h-5 text-cream" aria-hidden="true" />
                    </div>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-cream/25 leading-none">
                      {p.k}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-extrabold tracking-tight text-cream leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]">
                    {p.label}
                  </p>
                  <div className="mt-3 h-[2px] w-full bg-cream/25 overflow-hidden" aria-hidden="true">
                    <div className="h-full w-1/3 bg-cream/80 shine-wrap" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==== TABS + CATEGORY QUICK CARDS ==== */}
      <section
        aria-label="Product categories"
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10"
      >
        <div className="mb-6 reveal-hidden">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-jaggery">
                Browse by Category
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink leading-tight">
                Pick the chapter you love the most.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {categories.map((cat, idx) => {
              const isActive = active === cat.id;
              const TabIcon = TABS.find(t => t.id === cat.id)?.icon ?? Sparkles;
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => handleTab(cat.id)}
                  className={`group relative flex flex-col overflow-hidden ring-1 text-left p-4 sm:p-5 transition-all duration-600 ease-cinematic shine-wrap reveal-hidden-scale hover:-translate-y-1 focus-visible:outline-none ${
                    isActive
                      ? `${cat.tint} ring-2 ring-ink/15 shadow-[0_12px_30px_rgba(0,0,0,0.08)]`
                      : `bg-white ring-ink/5 hover:ring-ink/10`
                  }`}
                  style={{
                    borderRadius: '20px',
                    animationDelay: `${idx * 60}ms`,
                  }}
                >
                  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />
                  <div className="flex items-center justify-between mb-3">
                    <div className={`inline-flex items-center justify-center w-10 h-10 ${
                      isActive ? 'bg-white/70 ring-1 ring-ink/10' : `${cat.tint} ring-1 ring-ink/5`
                    } animate-float-fast`}
                      style={{ borderRadius: '12px' }}
                    >
                      <TabIcon className={`w-5 h-5 ${cat.accent}`} aria-hidden="true" />
                    </div>
                    <span className={`inline-flex items-center justify-center w-7 h-7 text-[10px] font-extrabold tracking-tight ${
                      isActive ? 'bg-teal-deep text-cream' : 'bg-cream ring-1 ring-ink/10 text-ink/70'
                    }`}
                      style={{ borderRadius: '999px' }}
                    >
                      {getProductsByCategory(cat.id).length}
                    </span>
                  </div>
                  <h3 className={`text-sm sm:text-base font-extrabold tracking-tight leading-tight mb-1 ${
                    isActive ? 'text-ink' : 'text-ink'
                  }`}>
                    {cat.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    isActive ? 'text-ink/70' : 'text-ink/60'
                  }`}>
                    {cat.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Filter products by category"
          className="flex flex-wrap gap-2 sm:gap-3 pb-8 border-b border-ink/5 reveal-hidden"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === active;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTab(tab.id)}
                className={`group shine-wrap inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-sm font-bold tracking-tight transition-all duration-500 ease-cinematic focus-visible:outline-none hover:-translate-y-0.5 ${
                  isActive
                    ? `bg-gradient-to-r from-teal-deep to-emerald-700 text-cream ring-1 ring-teal-deep/30 shadow-[0_10px_26px_rgba(31,92,74,0.28)]`
                    : `bg-white text-ink/75 ring-1 ring-ink/10 hover:text-teal-deep hover:ring-teal-deep/20`
                }`}
                style={{ borderRadius: '999px' }}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-gold-light' : tab.accent}`} aria-hidden="true" />
                <span>{tab.label}</span>
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-extrabold tracking-wider ${
                  isActive
                    ? 'bg-cream/20 text-cream/95'
                    : 'bg-cream ring-1 ring-ink/10 text-ink/70'
                }`}
                  style={{ borderRadius: '999px' }}
                >
                  {getProductsByCategory(tab.id === 'all' ? 'all' : tab.id).length}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ==== SPOTLIGHT CARD + PAIRING STRIP ==== */}
      <section
        aria-label="Spotlight and pairings"
        className="relative overflow-hidden mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 lg:pb-12"
      >
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Spotlight */}
          <div className="lg:col-span-7 reveal-hidden-left">
            <div className="relative h-full overflow-hidden ring-1 ring-ink/10 shine-wrap group bg-gradient-to-br from-teal-deep via-teal-deep to-ink" style={{ borderRadius: '24px' }}>
              <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" aria-hidden="true" style={{
                backgroundImage: `url(/bg.png)`,
                backgroundSize: '460px 460px',
                backgroundRepeat: 'repeat',
              }} />
              <div className="absolute top-[10%] right-[10%] w-56 h-56 rounded-full bg-gold/30 blur-3xl opacity-80 animate-pulse-soft" aria-hidden="true" />
              <div className="absolute bottom-[10%] left-[10%] w-60 h-60 rounded-full bg-teal-light/30 blur-3xl opacity-70 animate-pulse-soft delay-500" aria-hidden="true" />

              <div className="relative p-5 sm:p-7 lg:p-8 grid sm:grid-cols-2 gap-5 lg:gap-6 items-center h-full">
                <div className="flex flex-col gap-3 text-cream order-2 sm:order-1">
                  <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 bg-gold-light/20 ring-1 ring-gold-light/30 backdrop-blur-sm" style={{ borderRadius: '999px' }}>
                    <Sparkles className="w-3.5 h-3.5 text-gold-light" aria-hidden="true" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-light">
                      Spotlight · Editor's Pick
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight leading-[1.05]" style={{ textShadow: '0 3px 16px rgba(0,0,0,0.55)' }}>
                    {spotlight?.name ?? 'Amrut Gold Sugar'}
                  </h3>
                  <p className="text-sm sm:text-base text-cream/80 leading-relaxed font-medium" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.35)' }}>
                    {spotlight?.tagline ?? 'The signature double-refined crystal — uniform, quick-dissolve, everyday-perfect.'}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {spotlight?.benefits?.slice(0, 3).map(b => (
                      <span key={b.label} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-cream/[0.08] ring-1 ring-cream/20 text-[11px] font-bold tracking-tight text-cream/90" style={{ borderRadius: '999px' }}>
                        {b.label}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="#product-grid-heading"
                      className="group shine-wrap inline-flex items-center gap-2 px-5 py-3 bg-gold-light text-teal-deep text-sm font-bold tracking-tight hover:bg-cream transition-all duration-500 ease-cinematic"
                      style={{ borderRadius: '999px' }}
                    >
                      View Range
                      <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                    <div className="inline-flex items-center gap-2">
                      <div className="flex -space-x-1" aria-hidden="true">
                        {[0, 1, 2, 3, 4].map(i => (
                          <div key={i} className={`w-5 h-5 rounded-full ring-2 ring-teal-deep ${
                            i === 0 ? 'bg-jaggery' : i === 1 ? 'bg-gold' : i === 2 ? 'bg-jaggery-light' : i === 3 ? 'bg-teal-light' : 'bg-gold-light'
                          }`} />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-cream/85 leading-tight">
                        10,000+ happy homes in Maharashtra
                      </span>
                    </div>
                  </div>
                </div>

                <div className="order-1 sm:order-2 relative">
                  <div className="relative aspect-square overflow-hidden ring-1 ring-cream/15 bg-gradient-to-br from-cream/10 to-cream/[0.02] backdrop-blur-sm shine-wrap animate-float-medium" style={{ borderRadius: '22px' }}>
                    <img
                      src={spotlight?.image ?? '/a.png'}
                      alt={spotlight?.name ?? 'Spotlight product'}
                      className="w-full h-full object-contain p-5 transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.08]"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -left-2 -top-2 px-3 py-2 bg-cream/[0.95] text-ink ring-1 ring-ink/10 shadow-[0_6px_14px_rgba(0,0,0,0.18)] animate-float-fast" style={{ borderRadius: '12px' }}>
                    <div className="flex flex-col leading-none">
                      <span className="text-[9px] font-bold tracking-wider text-ink/55 uppercase">Best</span>
                      <span className="text-sm font-black text-teal-deep leading-none">⭐ Seller</span>
                    </div>
                  </div>
                  <div className="absolute -right-2 -bottom-2 px-3 py-2 bg-gold-light ring-1 ring-gold/30 text-teal-deep shadow-[0_6px_14px_rgba(255,196,64,0.3)] animate-float-medium" style={{ borderRadius: '12px' }}>
                    <div className="flex flex-col leading-none items-center">
                      <span className="text-[9px] font-bold tracking-wider uppercase leading-none">Khaas</span>
                      <span className="text-[11px] font-black leading-none">Deal ⚡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pairings */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 reveal-hidden-right">
            {PAIRING_TILES.map((p, i) => {
              const Icon = p.Icon;
              return (
                <div
                  key={p.k}
                  className="group relative p-4 sm:p-5 bg-white ring-1 ring-ink/5 hover:ring-ink/15 hover:-translate-y-1 transition-all duration-600 ease-cinematic shine-wrap reveal-hidden-scale"
                  style={{ borderRadius: '20px', animationDelay: `${i * 70}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-11 h-11 ${p.tint} mb-3 animate-float-fast`} style={{ borderRadius: '14px' }}>
                    <Icon className={`w-5.5 h-5.5 ${p.accent}`} aria-hidden="true" />
                  </div>
                  <p className="text-xs font-bold tracking-[0.18em] uppercase text-ink/45 mb-1">
                    Goes with
                  </p>
                  <p className="text-base sm:text-lg font-extrabold tracking-tight text-ink leading-tight mb-1.5">
                    {p.k}
                  </p>
                  <p className="text-xs text-ink/70 font-semibold mb-1">
                    {p.body}
                  </p>
                  <p className="text-[11px] text-ink/60 leading-snug">
                    {p.copy}
                  </p>
                </div>
              );
            })}
            <div className="col-span-2 flex items-center justify-between p-4 bg-gradient-to-r from-gold-light via-jaggery-light/80 to-jaggery-light ring-1 ring-jaggery/15 shine-wrap overflow-hidden relative" style={{ borderRadius: '20px' }}>
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/50 blur-3xl" aria-hidden="true" />
              <div className="relative flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-cream/70 ring-1 ring-jaggery/20 animate-float-fast" style={{ borderRadius: '12px' }}>
                  <Zap className="w-4.5 h-4.5 text-jaggery" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-jaggery/80">Pro Tip</p>
                  <p className="text-sm sm:text-base font-extrabold tracking-tight text-ink leading-tight">
                    Swap 1 sugar cube for jaggery — in tea, in dal. ✨
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-jaggery shrink-0 relative animate-pulse-soft" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ==== PRODUCT GRID ==== */}
      <section
        aria-labelledby="product-grid-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-10"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 reveal-hidden">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-gold">
              {active === 'all' ? 'The Complete Shelf' : TITLE[active as Exclude<CategoryFilter, 'all'>]}
            </span>
            <h2
              id="product-grid-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink leading-tight"
            >
              {active === 'all'
                ? <>All Products <span className="text-teal-deep">({products.length})</span></>
                : <>{TABS.find((t) => t.id === active)?.label} — <span className="text-teal-deep">{products.length} products</span></>}
            </h2>
            <p className="text-sm text-ink/60">
              Click a card for the full story. Every pack is sealed clean and shipped with care.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <BenefitBadge icon="sparkles" label="Double Refined" size="md" tone="teal" />
            <BenefitBadge icon="shield" label="Hygienically Sealed" size="md" tone="gold" />
          </div>
        </div>

        {products.length === 0 ? (
          <div className="py-20 flex flex-col items-center gap-4 text-center animate-pop-in bg-white ring-1 ring-ink/5" style={{ borderRadius: '22px' }}>
            <div className="w-16 h-16 inline-flex items-center justify-center bg-teal-light/80 animate-float-medium" style={{ borderRadius: '18px' }}>
              <Sparkles className="w-7 h-7 text-teal-deep" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1 max-w-sm">
              <p className="text-lg font-extrabold text-ink tracking-tight">
                Coming soon on this shelf.
              </p>
              <p className="text-sm text-ink/60 leading-relaxed">
                We're cooking up new favourites. Meanwhile, pick a category above or explore the full Amrut range.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleTab('all')}
              className="group shine-wrap inline-flex items-center gap-2 px-5 py-3 bg-teal-deep text-cream text-sm font-bold tracking-tight hover:bg-teal-deep/92 transition-all duration-500 ease-cinematic focus-visible:outline-none"
              style={{ borderRadius: '999px' }}
            >
              Show All Products
              <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {products.map((p, i) => (
              <div key={p.id} className="reveal-hidden-scale" style={{ animationDelay: `${i * 55}ms` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ==== FINAL SEND-OFF: MINI FOOTER BANNER ==== */}
      <section
        aria-label="Final note"
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-ink via-teal-deep to-emerald-800 ring-1 ring-teal-deep/20 shine-wrap" style={{ borderRadius: '28px' }}>
          <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay" aria-hidden="true" style={{
            backgroundImage: `url(/bg.png)`,
            backgroundSize: '480px 480px',
            backgroundRepeat: 'repeat',
          }} />
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gold/25 blur-3xl animate-pulse-soft" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-jaggery/25 blur-3xl animate-pulse-soft delay-500" aria-hidden="true" />

          <div className="relative p-6 sm:p-8 lg:p-10 grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 flex flex-col gap-3 reveal-hidden-left">
              <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 bg-gold-light/20 ring-1 ring-gold-light/40 backdrop-blur-sm" style={{ borderRadius: '999px' }}>
                <Leaf className="w-3.5 h-3.5 text-gold-light" aria-hidden="true" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-light">
                  Khaas Wali Mithaas · 1962 – Today
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-extrabold tracking-tight text-cream leading-[1.08] max-w-2xl" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.55)' }}>
                The sweetness of Maharashtra, <span className="text-gold-light">grown with sunshine.</span>
              </h2>
              <p className="text-sm sm:text-base text-cream/80 leading-relaxed max-w-xl font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.45)' }}>
                From Godavari-blessed fields to your chai — every pack carries the harvest, the mill, and 64 years of a cooperative that cares.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 max-w-2xl">
                {[
                  { k: 'Khet Se', v: 'Farm Fresh' },
                  { k: 'Ghar Tak', v: 'Sealed Clean' },
                  { k: 'Since', v: '1962' },
                  { k: 'TRUST', v: 'Always' },
                ].map((x, i) => (
                  <div
                    key={x.k}
                    className="flex flex-col gap-1 p-3 bg-cream/[0.07] backdrop-blur-sm ring-1 ring-cream/15 hover:ring-gold-light/40 hover:-translate-y-0.5 transition-all duration-500 ease-cinematic shine-wrap"
                    style={{ borderRadius: '16px', animationDelay: `${i * 60}ms` }}
                  >
                    <p className="text-sm sm:text-base font-extrabold tracking-tight text-gold-light leading-none">{x.k}</p>
                    <p className="text-[10px] sm:text-xs text-cream/80 leading-snug font-semibold">{x.v}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/products"
                  className="group shine-wrap inline-flex items-center gap-2.5 px-7 py-4 bg-gold-light text-teal-deep text-sm font-bold tracking-tight hover:bg-cream transition-all duration-600 ease-cinematic focus-visible:outline-none shadow-[0_10px_28px_rgba(255,196,64,0.32)]"
                  style={{ borderRadius: '999px' }}
                >
                  Bring Amrut Home
                  <ArrowRight className="w-4 h-4 transition-transform duration-600 ease-cinematic group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                <div className="inline-flex items-center gap-2 px-5 py-4 bg-cream/[0.07] ring-1 ring-cream/20 backdrop-blur-sm" style={{ borderRadius: '999px' }}>
                  <Sparkles className="w-4 h-4 text-gold-light" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-cream/95">
                    Khaas Wali Mithaas!
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex items-center justify-center reveal-hidden-right">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/25 via-teal-light/20 to-jaggery/20 blur-3xl opacity-80 animate-pulse-soft" aria-hidden="true" />
                <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-cream/18 shine-wrap animate-float-medium" style={{ borderRadius: '28px' }}>
                  <img
                    src="/a.png"
                    alt="Amrut Sugar — Khaas Wali Mithaas!"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-cinematic hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{
                    background: 'linear-gradient(180deg, transparent 55%, rgba(20,34,30,0.6) 100%)'
                  }} />
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream/[0.12] ring-1 ring-cream/25 backdrop-blur-md" style={{ borderRadius: '999px' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse-soft" aria-hidden="true" />
                    <span className="text-[10px] font-bold tracking-wider text-cream">Sanjivani</span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex flex-col gap-1 p-4 bg-ink/30 backdrop-blur-md ring-1 ring-cream/20" style={{ borderRadius: '18px' }}>
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-light">
                        The Last Word
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-cream tracking-tight leading-tight">
                        Every pack. Every crystal. Every promise kept — <span className="text-gold-light">TRUST.</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
