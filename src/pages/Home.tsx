import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { categories, trustBadges } from '../data/products';
import { BenefitBadge } from '../components/BenefitBadge';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Amrut Sugar — Swaas Waali Mithaas | Wholesome Sweetness</title>
        <meta
          name="description"
          content="Amrut Sugar — pure, double-refined sugar, traditional jaggery, desi cow ghee, Amrut Farms pulses, and BOYO healthy nuts & snacks. From the Sanjivani Group, Kopargaon, Maharashtra."
        />
        <meta
          name="keywords"
          content="Amrut Sugar, sugar, jaggery, desi ghee, BOYO, nuts, snacks, Sanjivani Group, Kopargaon, Maharashtra, Amrut Farms, toor dal, chana dal, moong dal, urad dal, pulses"
        />
      </Helmet>

      <section
        className="relative"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 lg:pt-12">
          <div className="relative w-full overflow-hidden rounded-[22px] ring-1 ring-ink/5" style={{ aspectRatio: '16 / 9' }}>
            <img
              src="/b.png"
              alt="Amrut Sugar — Wholesome sweetness from the fields"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />

            <div className="absolute inset-0 bg-teal-deep/30 mix-blend-multiply" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/35 to-transparent" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" aria-hidden="true" />
            <div
              className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
              aria-hidden="true"
              style={{
                backgroundImage: `url(/bg.png)`,
                backgroundSize: '480px 480px',
                backgroundRepeat: 'repeat',
              }}
            />

            <div className="absolute top-8 right-8 sm:top-10 sm:right-10 z-10">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gold/30 blur-2xl opacity-50" aria-hidden="true" />
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-light/95 backdrop-blur-sm ring-1 ring-gold/25 flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.14em] uppercase text-gold text-center leading-tight">
                    Est.<br />1962
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-10 lg:p-14">
              <div className="flex flex-col gap-6 max-w-2xl">
                <span className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 bg-cream/90 backdrop-blur-sm text-teal-deep text-xs font-semibold tracking-[0.12em] uppercase ring-1 ring-cream/20">
                  <Leaf className="w-3.5 h-3.5" aria-hidden="true" />
                  Since 1962 · Sanjivani Group
                </span>

                <div className="flex flex-col gap-4">
                  <h1
                    id="hero-heading"
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-cream leading-[1.05]"
                  >
                    <span className="block text-gold-light">Swaas Waali Mithaas!</span>
                    <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-cream/95">
                      Wholesome Sweetness,
                      <br />
                      Every Single Day.
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-cream/80 leading-relaxed max-w-xl">
                    Pure, clean, hygienically packed sugar — and so much more.
                    Jaggery, desi ghee, Amrut Farms pulses, and BOYO nuts & snacks.
                    64 years of trust from Sanjivani Group, Kopargaon.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/products"
                    className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-cream text-teal-deep text-sm font-semibold tracking-tight hover:bg-gold-light transition-all duration-600 ease-cinematic focus-visible:outline-none"
                  >
                    Explore Products
                    <ArrowRight className="w-4 h-4 transition-transform duration-600 ease-cinematic group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-tight text-cream hover:text-gold-light ring-1 ring-cream/30 hover:ring-gold-light/50 transition-all duration-600 ease-cinematic focus-visible:outline-none"
                  >
                    Our Story
                  </Link>
                </div>

                <div className="mt-2 sm:mt-4">
                  <div className="inline-flex items-center gap-3 bg-cream/10 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-3.5 ring-1 ring-cream/15">
                    <div className="w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center text-cream shrink-0">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-cream/60 uppercase tracking-[0.12em] font-medium">
                        Our Promise
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-cream">
                        Purity in every pack.
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
        aria-labelledby="categories-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gold">
              Our Range
            </p>
            <h2
              id="categories-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-tight"
            >
              Five categories of pure, honest goodness.
            </h2>
            <p className="text-base text-ink/65 leading-relaxed">
              From everyday sugar to slow-cultured ghee — plus Amrut Farms pulses,
              and a whole range of healthy snacks from BOYO.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={cat.id}
                to={cat.href}
                className="group relative flex flex-col bg-white ring-1 ring-ink/5 hover:ring-ink/10 transition-all duration-600 ease-cinematic overflow-hidden focus-visible:outline-none"
                style={{
                  animationDelay: `${idx * 80}ms`,
                }}
              >
                <div
                  className={`relative aspect-[5/4] w-full overflow-hidden ${cat.tint}`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-800 ease-cinematic group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3
                      className={`text-lg font-semibold tracking-tight ${cat.accent}`}
                    >
                      {cat.name}
                    </h3>
                    <span className="text-teal-deep transition-transform duration-500 ease-cinematic group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="text-sm text-ink/65 leading-snug">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="trust-heading"
        className="relative bg-teal-deep/[0.03] border-y border-teal-deep/10 overflow-hidden"
      >
        <div
          className="absolute inset-0 -z-10 opacity-[0.06] mix-blend-multiply"
          aria-hidden="true"
          style={{
            backgroundImage: `url(/bg1.jpg)`,
            backgroundSize: '440px 440px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
            <div className="flex flex-col gap-2 max-w-md">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-deep">
                Why Amrut
              </p>
              <h2
                id="trust-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-ink leading-tight"
              >
                Quality you can taste, values you can trust.
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {trustBadges.map((b) => (
                <div
                  key={b.id}
                  className="flex flex-col items-center gap-2.5 px-5 py-5 bg-white ring-1 ring-ink/5"
                >
                  <BenefitBadge
                    icon={b.icon as any}
                    label={b.label}
                    size="md"
                    tone="teal"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
