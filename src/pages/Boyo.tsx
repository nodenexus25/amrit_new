import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Zap, Heart } from 'lucide-react';
import { getProductsByCategory } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export default function Boyo() {
  const products = getProductsByCategory('nuts-snacks');

  return (
    <>
      <Helmet>
        <title>BOYO — Bold As You | Healthy Nuts & Snacks by Amrut</title>
        <meta
          name="description"
          content="BOYO — Bold As You. Premium almonds, cashews, mixed seeds, dried berries, and high-protein peanut butter. Healthy snacking for the bold generation."
        />
      </Helmet>

      <section
        className="relative overflow-hidden"
        aria-labelledby="boyo-hero-heading"
      >
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-gold-light via-gold-light/40 to-cream"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.08] mix-blend-multiply"
          aria-hidden="true"
          style={{
            backgroundImage: `url(/bg1.jpg)`,
            backgroundSize: '440px 440px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div
          className="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] -z-10 rounded-full bg-jaggery-light/50 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-24 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-7">
              <span className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 bg-jaggery text-cream text-xs font-bold tracking-[0.22em] uppercase ring-1 ring-jaggery/20">
                by Amrut Sugar
              </span>

              <div className="flex flex-col gap-4">
                <h1
                  id="boyo-hero-heading"
                  className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]"
                >
                  <span className="block text-jaggery">BOYO.</span>
                  <span className="block text-ink">
                    Bold <span className="text-gold">As</span> You.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-ink/75 leading-relaxed max-w-xl font-medium">
                  Healthy snacking that doesn\u2019t compromise on crunch,
                  flavour, or integrity. Clean labels, honest nutrition — for a
                  younger, bolder you.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
                <div className="flex flex-col items-start gap-1.5 p-4 bg-white/70 ring-1 ring-ink/5">
                  <Flame className="w-5 h-5 text-gold" aria-hidden="true" />
                  <p className="text-sm font-bold text-ink">
                    Roasted
                  </p>
                  <p className="text-xs text-ink/60">Never fried.</p>
                </div>
                <div className="flex flex-col items-start gap-1.5 p-4 bg-white/70 ring-1 ring-ink/5">
                  <Zap className="w-5 h-5 text-gold" aria-hidden="true" />
                  <p className="text-sm font-bold text-ink">
                    High Protein
                  </p>
                  <p className="text-xs text-ink/60">Real fuel.</p>
                </div>
                <div className="flex flex-col items-start gap-1.5 p-4 bg-white/70 ring-1 ring-ink/5">
                  <Heart className="w-5 h-5 text-gold" aria-hidden="true" />
                  <p className="text-sm font-bold text-ink">
                    Clean Labels
                  </p>
                  <p className="text-xs text-ink/60">No nonsense.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="#boyo-products"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-jaggery text-cream text-sm font-bold tracking-tight hover:bg-jaggery/92 transition-all duration-500 ease-cinematic focus-visible:outline-none"
                >
                  Shop BOYO
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-tight text-ink/80 hover:text-jaggery ring-1 ring-ink/10 hover:ring-jaggery/30 transition-all duration-500 ease-cinematic focus-visible:outline-none"
                >
                  See full Amrut range
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex flex-col gap-4">
              <div className="aspect-[4/5] w-full overflow-hidden ring-1 ring-ink/5 bg-jaggery-light/70">
                <img
                  src="/Web Small.png"
                  alt="BOYO — Wholesome Sweetness by Amrut, Bold As You"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[4/3] overflow-hidden ring-1 ring-ink/5 bg-white">
                  <img
                    src="/Web Small_edited.png"
                    alt="BOYO promo banner"
                    className="w-full h-full object-contain p-2 bg-cream/40"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-[4/3] flex items-center justify-center overflow-hidden bg-cream ring-1 ring-ink/5">
                  <div className="flex flex-col items-center gap-2 px-4 text-center">
                    <div className="w-12 h-12 bg-jaggery text-cream flex items-center justify-center font-black text-xl">
                      B
                    </div>
                    <div>
                      <p className="text-xs text-ink/50 uppercase tracking-[0.12em] font-medium">
                        Sub-brand
                      </p>
                      <p className="text-sm font-bold text-ink leading-tight">
                        by Amrut Sugar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="boyo-products"
        aria-labelledby="boyo-products-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 lg:mb-12">
          <div className="flex flex-col gap-3 max-w-xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-jaggery">
              BOYO Range
            </p>
            <h2
              id="boyo-products-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink leading-tight"
            >
              Crunchy. Nutritious.
              <br />
              <span className="text-gold">Unapologetically bold.</span>
            </h2>
          </div>
          <p className="text-base text-ink/65 leading-relaxed max-w-md">
            Premium nuts, power seeds, naturally dried berries, and a peanut
            butter that doesn\u2019t hide behind palm oil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} variant="boyo" />
          ))}
        </div>
      </section>
    </>
  );
}
