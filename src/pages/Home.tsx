import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { categories, trustBadges } from '../data/products';
import { BenefitBadge } from '../components/BenefitBadge';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Amrut Sugar — स्वास वाली मिठास | Wholesome Sweetness</title>
        <meta
          name="description"
          content="Amrut Sugar — pure, double-refined sugar, traditional jaggery, desi cow ghee, and BOYO healthy nuts & snacks. From the Sanjivani Group, Kopargaon, Maharashtra."
        />
        <meta
          name="keywords"
          content="Amrut Sugar, sugar, jaggery, desi ghee, BOYO, nuts, snacks, Sanjivani Group, Kopargaon, Maharashtra"
        />
      </Helmet>

      <section
        className="relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-light/60 via-cream to-cream" aria-hidden="true" />
        <div
          className="absolute -top-24 -right-24 w-96 h-96 -z-10 rounded-full bg-gold-light/60 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute top-40 -left-20 w-80 h-80 -z-10 rounded-full bg-jaggery-light/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-7">
              <span className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 bg-teal-deep/10 text-teal-deep text-xs font-semibold tracking-[0.12em] uppercase ring-1 ring-teal-deep/15">
                <Leaf className="w-3.5 h-3.5" aria-hidden="true" />
                Since 1962 · Sanjivani Group
              </span>

              <div className="flex flex-col gap-5">
                <h1
                  id="hero-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.05]"
                >
                  <span className="block text-teal-deep">स्वास वाली मिठास</span>
                  <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink/90">
                    Wholesome Sweetness,
                    <br />
                    Every Single Day.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-ink/70 leading-relaxed max-w-xl">
                  Pure, clean, hygienically packed sugar — and so much more.
                  From the house of Sahakar Maharishi Shankarrao Kohle Sahakari
                  Sakhar Karkhana Ltd., a trusted name for 64 years.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-teal-deep text-cream text-sm font-semibold tracking-tight hover:bg-teal-deep/92 transition-all duration-500 ease-cinematic focus-visible:outline-none"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-tight text-ink/80 hover:text-teal-deep ring-1 ring-ink/10 hover:ring-teal-deep/30 transition-all duration-500 ease-cinematic focus-visible:outline-none"
                >
                  Our Story
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] w-full overflow-hidden ring-1 ring-ink/5 bg-teal-light">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Rustic%20bowl%20of%20white%20sugar%20crystals%20jaggery%20blocks%20golden%20ghee%20in%20brass%20pot%20almonds%20on%20cream%20marble%20with%20sugarcane%20leaves%20warm%20natural%20lighting%20editorial%20photography&image_size=portrait_4_3"
                  alt="Amrut Sugar product assortment — pure sugar, jaggery, ghee and nuts"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-cream px-5 py-4 ring-1 ring-ink/10 shadow-lg"
                aria-hidden="true"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center text-gold">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-ink/50 uppercase tracking-[0.12em] font-medium">
                      Promise
                    </p>
                    <p className="text-sm font-semibold text-ink">
                      Purity in every pack.
                    </p>
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
              Four categories of pure, honest sweetness.
            </h2>
            <p className="text-base text-ink/65 leading-relaxed">
              From everyday sugar to slow-cultured ghee — and a whole range of
              healthy snacks from BOYO.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
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
        className="bg-teal-deep/[0.03] border-y border-teal-deep/10"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
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
