import { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Users,
  Building2,
  Sprout,
  Flame,
  Heart,
  Shield,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { categories, trustBadges, products } from '../data/products';
import { BenefitBadge } from '../components/BenefitBadge';

const HERO_SLIDES = [
  {
    id: 's1',
    image: '/banner_2.2.png',
    eyebrow: 'Prologue · A 64-year-old promise',
    slogan: 'Khaas Wali Mithaas!',
    headline: 'Wholesome Sweetness, Every Single Day.',
    body:
      'It starts in a Maharashtra sugarcane field and ends on your table. A story of cooperative grit, clean mills, and 64 years of trust — Sahakar Maharishi Shankarrao Kohle Sahakari Sakhar Karkhana, Kopargaon.',
    badge: 'The Promise · Purity in every pack.',
    accent: 'gold',
  },
  {
    id: 's2',
    image: '/banner_3.33.png',
    eyebrow: 'Chapter 00 · Born in the fields',
    slogan: 'Khet Se, Ghar Tak!',
    headline: 'From Sugarcane Fields, Straight to Your Home.',
    body:
      'Select Maharashtra sugarcane, nurtured by cooperative farmers in Kopargaon. Harvested at peak sweetness. Mill-crushed the same day. No delays. No compromises.',
    badge: 'The Roots · Shankarraoji Sahakari Sakhar Karkhana.',
    accent: 'teal',
  },
  {
    id: 's3',
    image: '/banner_4.png',
    eyebrow: 'Chapter 00 · The Range',
    slogan: 'Har Pal, Har Rasoi Mein!',
    headline: 'Sugar · Jaggery · Ghee · Pulses · Snacks.',
    body:
      'Double-refined sugar, slow-cooked jaggery, desi ghee, Amrut Farms pulses and premium nuts — the Amrut shelf has a trusted answer for every ritual in your kitchen.',
    badge: 'The Shelf · One brand, many favourites.',
    accent: 'jaggery',
  },
];

const CHAPTER_ONE_STEPS = [
  {
    id: 'fields',
    num: '01',
    eyebrow: 'Roots',
    title: 'Select Maharashtra Sugarcane',
    body: 'We start with the finest sugarcane from Kopargaon and surrounding belt — nurtured by cooperative farmers, harvested at peak sweetness.',
    tint: 'bg-teal-light',
    accent: 'text-teal-deep',
    icon: Sprout,
    image: '/aurad.png',
  },
  {
    id: 'mill',
    num: '02',
    eyebrow: 'Craft',
    title: 'Double-Refined, Zero Shortcuts',
    body: 'Slow-crystallised, double-refined, sulphur-free. Every crystal passes through 64 years of milling expertise at our Sahakari Sakhar Karkhana.',
    tint: 'bg-gold-light',
    accent: 'text-gold',
    icon: Flame,
    image: '/sugar.jpg',
  },
  {
    id: 'pack',
    num: '03',
    eyebrow: 'Promise',
    title: 'Hygienically Sealed, Every Pack',
    body: 'Hygienic packing lines. Sealed pouches. Quality checks at every stage. So what reaches your kitchen is exactly what left ours.',
    tint: 'bg-jaggery-light',
    accent: 'text-jaggery',
    icon: Shield,
    image: '/AMrut Packeging(1).png',
  },
  {
    id: 'table',
    num: '04',
    eyebrow: 'Home',
    title: 'From Karkhana to Your Kitchen',
    body: 'Chai, laddoos, halwa, dal tadka, and every sweet & savoury memory in between — Amrut is there, on your table, every single day.',
    tint: 'bg-teal-light/60',
    accent: 'text-teal-deep',
    icon: Heart,
    image: '/gud 1.jpg',
  },
];

const SHOWCASE_PRODUCTS = [
  products.find((p) => p.id === 'amrut-sugar-2kg')!,
  products.find((p) => p.id === 'amrut-gud-950gm')!,
  products.find((p) => p.id === 'amrut-toor-dal')!,
  products.find((p) => p.id === 'amrut-pulses-family')!,
  products.find((p) => p.id === 'amrut-jaggery-cubes')!,
  products.find((p) => p.id === 'amrut-sugar-family')!,
  products.find((p) => p.id === 'amrut-gud-combo')!,
  products.find((p) => p.id === 'amrut-moong-dal')!,
];

const GROUP_VERTICALS: Array<{ label: string; icon: typeof Sprout; tint: string }> = [
  { label: 'Sugar', icon: Sprout, tint: 'bg-teal-light text-teal-deep' },
  { label: 'Education', icon: Building2, tint: 'bg-gold-light text-gold' },
  { label: 'Ethanol', icon: Flame, tint: 'bg-jaggery-light text-jaggery' },
  { label: 'Chemicals', icon: Sparkles, tint: 'bg-teal-light text-teal-deep' },
  { label: 'Pharma', icon: Heart, tint: 'bg-gold-light text-gold' },
  { label: 'Power', icon: Award, tint: 'bg-jaggery-light text-jaggery' },
];

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

export default function Home() {
  const [slideIdx, setSlideIdx] = useState(0);
  const timerRef = useRef<number | undefined>(undefined);
  const [progressReset, setProgressReset] = useState(0);

  useScrollReveal();

  const goTo = useCallback((idx: number) => {
    setSlideIdx(idx);
    setProgressReset((r) => r + 1);
  }, []);

  useEffect(() => {
    let mounted = true;
    const loop = () => {
      if (!mounted) return;
      setSlideIdx((i) => (i + 1) % HERO_SLIDES.length);
      setProgressReset((r) => r + 1);
    };
    timerRef.current = window.setInterval(loop, 4000);
    return () => {
      mounted = false;
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = undefined;
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Amrut Sugar — Khaas Wali Mithaas! | Wholesome Sweetness</title>
        <meta
          name="description"
          content="Amrut Sugar — Khaas Wali Mithaas! Pure, double-refined sugar, traditional jaggery, desi cow ghee, and Amrut Farms pulses. From the Sanjivani Group, Kopargaon, Maharashtra."
        />
        <meta
          name="keywords"
          content="Amrut Sugar, sugar, jaggery, desi ghee, nuts, snacks, Sanjivani Group, Kopargaon, Maharashtra, Amrut Farms, toor dal, chana dal, moong dal, urad dal, pulses"
        />
      </Helmet>

      {/* ==== PROLOGUE: HERO (Full-Screen Slideshow) ==== */}
      <section
        aria-label="Amrut Sugar hero slideshow"
        className="relative w-full overflow-hidden bg-teal-deep flex items-stretch"
        style={{ minHeight: 'max(100svh, 620px)' }}
      >
        {HERO_SLIDES.map((s, i) => {
          const active = i === slideIdx;
          return (
            <div
              key={s.id}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-1000 ease-cinematic ${
                active ? 'opacity-100 z-0 pointer-events-auto' : 'opacity-0 z-[-1] pointer-events-none'
              }`}
            >
              <div className="absolute inset-0">
                <img
                  src={s.image}
                  alt={s.image}
                  className="w-full h-full object-cover object-center"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-teal-deep/20 mix-blend-multiply" aria-hidden="true" />
              <div
                className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
                aria-hidden="true"
                style={{
                  backgroundImage: `url(/bg.png)`,
                  backgroundSize: '480px 480px',
                  backgroundRepeat: 'repeat',
                }}
              />
            </div>
          );
        })}

        <div className="absolute top-1/4 left-[6%] z-10 hidden lg:block pointer-events-none">
          <div className="w-60 h-60 rounded-full bg-gold/12 blur-3xl animate-pulse-soft" />
        </div>
        <div className="absolute bottom-1/4 right-[8%] z-10 hidden lg:block pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-teal-light/10 blur-3xl animate-pulse-soft delay-600" />
        </div>

        <div className="absolute left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-3 bottom-6 sm:bottom-10">
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((s, i) => {
              const active = i === slideIdx;
              return (
                <button
                  type="button"
                  key={`dot-${s.id}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`group relative h-1.5 rounded-full transition-all duration-600 ease-cinematic focus-visible:outline-none overflow-hidden ${
                    active ? 'w-14 sm:w-16 bg-cream/25' : 'w-2.5 bg-cream/40 hover:bg-cream/60'
                  }`}
                >
                  {active && (
                    <span
                      key={`prog-${progressReset}-${i}`}
                      className="absolute inset-y-0 left-0 bg-gold-light hero-progress rounded-full"
                    />
                  )}
                </button>
              );
            })}
            <span className="ml-3 hidden sm:inline-flex items-center text-[10px] font-semibold tracking-[0.22em] uppercase text-cream/60">
              {String(slideIdx + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </section>

      {/* ==== CHAPTER I: ORIGIN ==== */}
      <section
        aria-labelledby="origin-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 lg:sticky lg:top-28 reveal-hidden-left">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-teal-deep">
              Chapter I · The Origin
            </p>
            <h2
              id="origin-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-ink leading-[1.08]"
            >
              Born in Kopargaon.
              <br />
              <span className="text-teal-deep">Raised by farmers.</span>
            </h2>
            <p className="text-base lg:text-lg text-ink/70 leading-relaxed">
              Amrut Sugar was born from a simple promise — to give every
              household the purest form of sweetness, produced by a cooperative
              that cares for its farmers, its land, and its community.
            </p>
            <p className="text-base text-ink/65 leading-relaxed">
              Founded by Late Hon. Shri Shankarraoji G. Kolhe — a Sahakar
              Maharishi whose life was dedicated to farmers, cooperation, and
              Kopargaon. Today, his karkhana still runs on that same spirit.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="flex flex-col gap-2 p-4 sm:p-5 bg-teal-light/60 ring-1 ring-teal-deep/10 shine-wrap transition-transform duration-600 ease-cinematic hover:-translate-y-1 animate-float-fast delay-100">
                <Award className="w-6 h-6 text-teal-deep" aria-hidden="true" />
                <p className="text-2xl sm:text-3xl font-bold text-teal-deep leading-none">64+</p>
                <p className="text-xs sm:text-sm text-ink/65 leading-tight">Years of heritage</p>
              </div>
              <div className="flex flex-col gap-2 p-4 sm:p-5 bg-gold-light/80 ring-1 ring-gold/15 shine-wrap transition-transform duration-600 ease-cinematic hover:-translate-y-1 animate-float-medium delay-200">
                <Users className="w-6 h-6 text-gold" aria-hidden="true" />
                <p className="text-2xl sm:text-3xl font-bold text-gold leading-none">100k+</p>
                <p className="text-xs sm:text-sm text-ink/65 leading-tight">Households served</p>
              </div>
              <div className="flex flex-col gap-2 p-4 sm:p-5 bg-jaggery-light/80 ring-1 ring-jaggery/15 shine-wrap transition-transform duration-600 ease-cinematic hover:-translate-y-1 animate-float-slow delay-300">
                <Building2 className="w-6 h-6 text-jaggery" aria-hidden="true" />
                <p className="text-2xl sm:text-3xl font-bold text-jaggery leading-none">6+</p>
                <p className="text-xs sm:text-sm text-ink/65 leading-tight">Group verticals</p>
              </div>
            </div>

            <Link
              to="/about"
              className="mt-2 inline-flex items-center gap-2 w-fit px-5 py-3 bg-teal-deep text-cream text-sm font-semibold tracking-tight hover:bg-teal-deep/92 transition-all duration-500 ease-cinematic focus-visible:outline-none shine-wrap group"
              style={{ borderRadius: '999px' }}
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 reveal-hidden-right">
            <div className="sm:col-span-2 relative overflow-hidden ring-1 ring-ink/5 bg-teal-light shine-wrap group" style={{ borderRadius: '22px' }}>
              <div
                className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
                aria-hidden="true"
                style={{
                  backgroundImage: `url(/bg.png)`,
                  backgroundSize: '420px 420px',
                  backgroundRepeat: 'repeat',
                }}
              />
              <div className="relative flex items-center gap-5 p-5 sm:p-7">
                <div className="relative w-28 h-32 sm:w-32 sm:h-36 flex-shrink-0 overflow-hidden bg-gradient-to-br from-gold-light to-jaggery-light ring-1 ring-gold/20 animate-float-medium">
                  <img
                    src="/sir.png"
                    alt="Late Hon. Shri Shankarraoji G. Kolhe — Founder"
                    className="w-full h-full object-cover transition-transform duration-800 ease-cinematic group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-teal-deep text-cream flex items-center justify-center">
                    <Award className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[10px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-gold">
                    The Founder
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-ink leading-tight">
                    Late Hon. Shri Shankarraoji G. Kolhe
                  </p>
                  <p className="text-sm text-ink/60 leading-snug max-w-md">
                    Sahakar Maharishi. Former Minister. A life given to
                    farmers, cooperation, and building Kopargaon brick by
                    brick.
                  </p>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden bg-white ring-1 ring-ink/5 p-3 flex items-center justify-center shine-wrap group transition-all duration-600 ease-cinematic hover:-translate-y-1" style={{ borderRadius: '22px' }}>
              <img
                src="/Sanjivani kARKHANA LOGO 2 (1).png"
                alt="Sahakar Maharishi Shankarrao Kohle Karkhana"
                className="max-w-full max-h-full object-contain transition-transform duration-800 ease-cinematic group-hover:scale-[1.05]"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-teal-light/60 ring-1 ring-teal-deep/10 p-3 flex items-center justify-center shine-wrap group transition-all duration-600 ease-cinematic hover:-translate-y-1" style={{ borderRadius: '22px' }}>
              <img
                src="/Sanjivani Group 2(1).png"
                alt="Sanjivani Group of Industries"
                className="max-w-full max-h-full object-contain transition-transform duration-800 ease-cinematic group-hover:scale-[1.05]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==== CHAPTER II: THE JOURNEY ==== */}
      <section
        aria-labelledby="journey-heading"
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
        <div className="absolute top-10 left-[-5%] w-72 h-72 rounded-full bg-gold-light/40 blur-3xl opacity-70" aria-hidden="true" />
        <div className="absolute bottom-10 right-[-5%] w-80 h-80 rounded-full bg-teal-light/60 blur-3xl opacity-60" aria-hidden="true" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
          <div className="flex flex-col gap-10 lg:gap-12">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end reveal-hidden">
              <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4 max-w-3xl">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
                  Chapter II · The Journey
                </p>
                <h2
                  id="journey-heading"
                  className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-ink leading-[1.05]"
                >
                  From <span className="text-teal-deep">field</span> to
                  <span className="text-gold"> karkhana</span> to
                  <span className="text-jaggery"> your kitchen.</span>
                </h2>
                <p className="text-base lg:text-lg text-ink/70 leading-relaxed max-w-2xl">
                  Four steps. Every step watched. Every step honest. The
                  journey a single sugar crystal makes before it lands in your
                  chai.
                </p>
              </div>
              <div className="lg:col-span-4 lg:pb-2">
                <BenefitBadge icon="leaf" label="Khaas Wali Mithaas!" size="md" tone="teal" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {CHAPTER_ONE_STEPS.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <article
                    key={step.id}
                    className="group relative flex flex-col bg-white ring-1 ring-ink/5 hover:ring-ink/10 transition-all duration-600 ease-cinematic overflow-hidden shine-wrap reveal-hidden-scale hover:-translate-y-1.5"
                    style={{
                      animationDelay: `${idx * 80}ms`,
                      borderRadius: '22px',
                    }}
                  >
                    <div className={`relative aspect-[5/4] w-full overflow-hidden ${step.tint}`}>
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                        <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm ring-1 ring-ink/10 text-xs sm:text-sm font-bold tracking-tight text-ink/80 animate-float-fast">
                          {step.num}
                        </span>
                      </div>
                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-800 ease-cinematic group-hover:scale-[1.08]"
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-5 sm:p-6">
                      <div className="flex items-center gap-2">
                        <StepIcon className={`w-4 h-4 ${step.accent} animate-float-fast`} aria-hidden="true" />
                        <p className={`text-[10px] sm:text-xs font-semibold tracking-[0.14em] uppercase ${step.accent}`}>
                          {step.eyebrow}
                        </p>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-ink leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-sm text-ink/65 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==== CHAPTER III: THE RANGE ==== */}
      <section
        aria-labelledby="range-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
      >
        <div className="flex flex-col gap-10 lg:gap-12">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end reveal-hidden">
            <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4 max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-jaggery">
                Chapter III · The Range
              </p>
              <h2
                id="range-heading"
                className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-ink leading-[1.05]"
              >
                Five chapters of
                <span className="text-jaggery"> pure, honest goodness.</span>
              </h2>
              <p className="text-base lg:text-lg text-ink/70 leading-relaxed max-w-2xl">
                From everyday sugar to slow-cultured desi ghee — to Amrut Farms
                pulses, and healthy snacking. A story for every kitchen shelf.
              </p>
            </div>
            <div className="lg:col-span-4 lg:pb-2 flex justify-start lg:justify-end">
              <Link
                to="/products"
                className="group shine-wrap inline-flex items-center gap-2 px-5 py-3 ring-1 ring-ink/15 text-sm font-semibold tracking-tight text-ink hover:text-teal-deep hover:ring-teal-deep/30 transition-all duration-500 ease-cinematic focus-visible:outline-none"
                style={{ borderRadius: '999px' }}
              >
                See All Products
                <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={cat.id}
                to={cat.href}
                className="group relative flex flex-col bg-white ring-1 ring-ink/5 hover:ring-ink/10 transition-all duration-600 ease-cinematic overflow-hidden focus-visible:outline-none shine-wrap reveal-hidden hover:-translate-y-1.5"
                style={{
                  animationDelay: `${idx * 80}ms`,
                  borderRadius: '22px',
                }}
              >
                <div
                  className={`relative aspect-[5/4] w-full overflow-hidden ${cat.tint}`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-800 ease-cinematic group-hover:scale-[1.08]"
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

          {/* Showcase shelf */}
          <div className="pt-4 lg:pt-6 reveal-hidden">
            <div className="flex items-end justify-between gap-4 mb-5 sm:mb-6">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-deep">
                Most Loved · The Amrut Shelf
              </p>
              <Link
                to="/products"
                className="text-sm font-semibold tracking-tight text-ink/60 hover:text-teal-deep transition-colors"
              >
                Browse all →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
              {SHOWCASE_PRODUCTS.map((p, i) => (
                <Link
                  key={p.id}
                  to={`/products?product=${p.id}`}
                  className="group relative flex flex-col overflow-hidden bg-white ring-1 ring-ink/5 hover:ring-teal-deep/25 transition-all duration-600 ease-cinematic focus-visible:outline-none shine-wrap reveal-hidden-scale hover:-translate-y-1"
                  style={{
                    animationDelay: `${i * 40}ms`,
                    borderRadius: '18px',
                  }}
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-cream/60">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-contain p-3 transition-transform duration-700 ease-cinematic group-hover:scale-[1.08]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 p-3 border-t border-ink/5">
                    <p className="text-[11px] font-semibold tracking-tight text-ink leading-snug line-clamp-2">
                      {p.name}
                    </p>
                    <p className="text-[10px] text-ink/50 leading-tight line-clamp-1">
                      {p.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==== CHAPTER IV: THE VALUES ==== */}
      <section
        aria-labelledby="values-heading"
        className="relative overflow-hidden bg-gradient-to-b from-teal-light/60 via-cream to-cream"
      >
        <div
          className="absolute inset-0 -z-10 opacity-[0.07] mix-blend-multiply"
          aria-hidden="true"
          style={{
            backgroundImage: `url(/bg.png)`,
            backgroundSize: '520px 520px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-gold-light/60 blur-3xl opacity-60" aria-hidden="true" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 sm:gap-10 lg:gap-16">
            <div className="flex flex-col gap-4 sm:gap-5 max-w-2xl reveal-hidden-left">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-teal-deep">
                Chapter IV · The Values
              </p>
              <h2
                id="values-heading"
                className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-ink leading-[1.05]"
              >
                Quality you can taste.
                <br />
                <span className="text-teal-deep">Values you can trust.</span>
              </h2>
              <p className="text-base lg:text-lg text-ink/70 leading-relaxed">
                Four non-negotiables — written into every production line,
                every pouch, and every promise we make to the families who
                bring Amrut home.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:w-[48%] reveal-hidden-right">
              {trustBadges.map((b, idx) => (
                <div
                  key={b.id}
                  className="flex flex-col items-start gap-3 px-5 py-6 bg-white ring-1 ring-ink/5 hover:ring-teal-deep/20 transition-all duration-500 ease-cinematic shine-wrap hover:-translate-y-1 reveal-hidden-scale"
                  style={{
                    animationDelay: `${idx * 100}ms`,
                    borderRadius: '22px',
                  }}
                >
                  <BenefitBadge
                    icon={b.icon as any}
                    label={b.label}
                    size="md"
                    tone="teal"
                  />
                  <p className="text-sm text-ink/60 leading-relaxed">
                    {b.label} — in every pack. No shortcuts.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==== CHAPTER V: THE GROUP ==== */}
      <section
        aria-labelledby="group-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
      >
        <div className="relative overflow-hidden ring-1 ring-jaggery/15 bg-jaggery-light/50 reveal-hidden" style={{ borderRadius: '22px' }}>
          <div
            className="absolute inset-0 -z-10 opacity-[0.08] mix-blend-multiply"
            aria-hidden="true"
            style={{
              backgroundImage: `url(/bg1.jpg)`,
              backgroundSize: '440px 440px',
              backgroundRepeat: 'repeat',
            }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-light/50 blur-3xl" aria-hidden="true" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-14 relative">
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 reveal-hidden-left">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-jaggery">
                Chapter V · The Group
              </p>
              <h2
                id="group-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-[1.08]"
              >
                Part of something
                <br />
                <span className="text-jaggery">much bigger.</span>
              </h2>
              <p className="text-base lg:text-lg text-ink/72 leading-relaxed">
                Amrut is a proud pillar of the Sanjivani Group — six decades of
                cooperative excellence across sugar, education, ethanol,
                chemicals, pharma, and power.
              </p>

              <div className="flex items-center gap-4 pt-1">
                <div className="inline-flex items-center justify-center p-3 bg-white/85 ring-1 ring-jaggery/15 animate-float-medium" style={{ borderRadius: '18px' }}>
                  <img
                    src="/Sanjivani Group 2(1).png"
                    alt="Sanjivani Group"
                    className="h-14 sm:h-18 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              <a
                href="https://www.sanjivanigroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 w-fit px-5 py-3 bg-jaggery text-cream text-sm font-semibold tracking-tight hover:bg-jaggery/92 transition-all duration-500 ease-cinematic focus-visible:outline-none shine-wrap group"
                style={{ borderRadius: '999px' }}
              >
                Visit Sanjivani Group
                <ExternalLink className="w-4 h-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>

            <div className="lg:col-span-7 reveal-hidden-right">
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {GROUP_VERTICALS.map((v, idx) => {
                  const VI = v.icon;
                  return (
                    <li
                      key={v.label}
                      className="flex items-center gap-3 bg-white p-4 sm:p-5 ring-1 ring-ink/5 hover:ring-jaggery/25 transition-all duration-500 ease-cinematic shine-wrap hover:-translate-y-1 reveal-hidden-scale"
                      style={{
                        animationDelay: `${idx * 70}ms`,
                        borderRadius: '18px',
                      }}
                    >
                      <div
                        className={`inline-flex items-center justify-center w-11 h-11 shrink-0 ${v.tint} animate-float-fast`}
                        style={{ borderRadius: '14px' }}
                      >
                        <VI className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-sm sm:text-base font-semibold text-ink tracking-tight">
                        {v.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==== EPILOGUE: CTA ==== */}
      <section
        aria-labelledby="epilogue-heading"
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 lg:pb-24"
      >
        <div
          className="relative w-full overflow-hidden ring-1 ring-ink/10 reveal-hidden"
          style={{ aspectRatio: '21 / 9', minHeight: '460px', borderRadius: '22px' }}
        >
          <img
            src="/bg1.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover animate-kenburns-alt"
            loading="lazy"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-deep/92 via-teal-deep/86 to-ink/92" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/55" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
            aria-hidden="true"
            style={{
              backgroundImage: `url(/bg.png)`,
              backgroundSize: '420px 420px',
              backgroundRepeat: 'repeat',
            }}
          />
          <div className="absolute top-[10%] left-[8%] w-52 h-52 rounded-full bg-gold/25 blur-3xl animate-pulse-soft" aria-hidden="true" />
          <div className="absolute bottom-[15%] right-[8%] w-60 h-60 rounded-full bg-teal-light/35 blur-3xl animate-pulse-soft delay-500" aria-hidden="true" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6 sm:p-10 lg:p-14 gap-5 sm:gap-7">
            <div className="relative max-w-5xl w-full flex flex-col items-center gap-5 sm:gap-7 px-5 py-6 sm:px-10 sm:py-8 lg:px-14 lg:py-10 bg-ink/25 backdrop-blur-[2px] ring-1 ring-cream/15" style={{ borderRadius: '26px' }}>
              <p className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-gold-light animate-fade-down drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
                Epilogue · What happens next
              </p>
              <h2
                id="epilogue-heading"
                className="text-2xl sm:text-4xl lg:text-5xl xl:text-[58px] font-extrabold tracking-tight text-cream leading-[1.05] max-w-4xl animate-fade-up delay-100 drop-shadow-[0_3px_8px_rgba(0,0,0,0.55)]"
              >
                Your kitchen is the next chapter.
                <br />
                <span className="text-gold-light">Khaas Wali Mithaas!</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-cream/90 leading-relaxed max-w-2xl animate-fade-up delay-200 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                Bring Amrut home — and start writing your own sweet story. From
                chai to celebrations, we'll be there.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-300 pt-1">
                <Link
                  to="/products"
                  className="group shine-wrap inline-flex items-center gap-2.5 px-7 py-4 bg-cream text-teal-deep text-sm font-bold tracking-tight hover:bg-gold-light transition-all duration-600 ease-cinematic focus-visible:outline-none shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                  style={{ borderRadius: '999px' }}
                >
                  Shop the Range
                  <ArrowRight className="w-4 h-4 transition-transform duration-600 ease-cinematic group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 text-sm font-bold tracking-tight text-cream hover:text-gold-light ring-1 ring-cream/45 hover:ring-gold-light/70 transition-all duration-600 ease-cinematic focus-visible:outline-none bg-cream/[0.08] hover:bg-cream/[0.12]"
                  style={{ borderRadius: '999px' }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
