import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Award, Building2, Users, Sprout, Flame, Heart, Sparkles, ShieldCheck, Droplets, Leaf, CheckCircle2, XCircle, Gem, Factory, Cpu } from 'lucide-react';

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

const GROUP_VERTICALS_ABOUT: Array<{ label: string; icon: typeof Sprout; tint: string }> = [
  { label: 'Sugar', icon: Sprout, tint: 'bg-teal-light text-teal-deep' },
  { label: 'Education', icon: Building2, tint: 'bg-gold-light text-gold' },
  { label: 'Ethanol', icon: Flame, tint: 'bg-jaggery-light text-jaggery' },
  { label: 'Chemicals', icon: Sparkles, tint: 'bg-teal-light text-teal-deep' },
  { label: 'Pharma', icon: Heart, tint: 'bg-gold-light text-gold' },
  { label: 'Power', icon: Award, tint: 'bg-jaggery-light text-jaggery' },
];

const WHY_CHOOSE_ITEMS: Array<{
  title: string;
  subtitle: string;
  icon: typeof Gem;
  tint: string;
  iconTint: string;
}> = [
  {
    title: 'Sparkling White',
    subtitle: 'Uniform crystal size for consistent sweetness in every bite.',
    icon: Gem,
    tint: 'bg-teal-light/60 ring-teal-deep/10',
    iconTint: 'text-teal-deep',
  },
  {
    title: 'ISO 9001:2015',
    subtitle: 'Certified quality management — globally benchmarked standards.',
    icon: Award,
    tint: 'bg-gold-light/70 ring-gold/15',
    iconTint: 'text-gold',
  },
  {
    title: 'Phospho-MCS Process',
    subtitle: 'Enrich Phospho-MCS process for extra purity & crystal clarity.',
    icon: Cpu,
    tint: 'bg-teal-light/60 ring-teal-deep/10',
    iconTint: 'text-teal-deep',
  },
  {
    title: 'Pure & Hygienic',
    subtitle: 'Crystal sugar produced in a hygienic, untouched environment.',
    icon: ShieldCheck,
    tint: 'bg-jaggery-light/70 ring-jaggery/15',
    iconTint: 'text-jaggery',
  },
  {
    title: 'Natural Sweetness',
    subtitle: 'The authentic, unadulterated sweetness of fresh sugarcane.',
    icon: Leaf,
    tint: 'bg-gold-light/70 ring-gold/15',
    iconTint: 'text-gold',
  },
];

const LOOSE_SUGAR_POINTS: string[] = [
  'Exposed to dust and pollution',
  'Contamination by insects and pests',
  'Handled and touched by unclean hands',
];

const AMRUT_SUGAR_POINTS: string[] = [
  'High-quality packaging to keep it safe',
  'Zero chances of contamination by insects or pests',
  'Untouched by hands — sealed with care',
];

export default function About() {
  useScrollReveal();
  return (
    <>
      <Helmet>
        <title>About Amrut Sugar — A Sanjivani Group Brand | Kopargaon</title>
        <meta
          name="description"
          content="Amrut Sugar is the flagship consumer brand of Sahakar Maharishi Shankarrao Kohle Sahakari Sakhar Karkhana Ltd. — part of the 64-year-old Sanjivani Group, Kopargaon, Maharashtra."
        />
      </Helmet>

      <section
        className="relative overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-light/50 via-cream to-cream"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.07] mix-blend-multiply"
          aria-hidden="true"
          style={{
            backgroundImage: `url(/bg.png)`,
            backgroundSize: '520px 520px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute top-[15%] left-[-5%] w-72 h-72 rounded-full bg-gold-light/60 blur-3xl opacity-60" aria-hidden="true" />
        <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 rounded-full bg-teal-light/70 blur-3xl opacity-50" aria-hidden="true" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-28 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4 max-w-3xl reveal-hidden-left">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-deep animate-fade-down">
                About Us
              </p>
              <h1
                id="about-hero-heading"
                className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-ink leading-[1.05] animate-fade-up delay-100"
              >
                A name Maharashtra has
                <br className="hidden sm:block" />
                <span className="text-teal-deep">trusted for 64 years.</span>
              </h1>
              <p className="text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl animate-fade-up delay-200">
                Amrut is the flagship consumer brand of Sahakar Maharishi
                Shankarrao Kohle Sahakari Sakhar Karkhana Ltd. — clean, clear,
                hygienic, high-quality sugar, jaggery, ghee and Amrut Farms
                pulses, produced with care at Kopargaon, Maharashtra.
              </p>
            </div>
            <div className="lg:col-span-4 flex items-end justify-center reveal-hidden-right">
              <div className="relative inline-flex items-center justify-center p-6 bg-white/80 ring-1 ring-ink/5 animate-float-medium shine-wrap" style={{ borderRadius: '22px' }}>
                <img
                  src="/Sanjivani kARKHANA LOGO 2 (1).png"
                  alt="Sahakar Maharishi Shankarrao Kohle Sahakari Sakhar Karkhana Logo"
                  className="h-28 sm:h-36 w-auto object-contain transition-transform duration-700 ease-cinematic hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="story-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-12 flex flex-col gap-5 reveal-hidden">
            <h2
              id="story-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-ink"
            >
              Our Story
            </h2>
            <div className="flex flex-col gap-4 text-base text-ink/72 leading-relaxed max-w-4xl">
              <p>
                Amrut Sugar was born from a simple promise — to give every
                household the purest form of sweetness, produced by a
                cooperative that cares for its farmers, its land, and its
                community.
              </p>
              <p>
                Today, the Amrut range extends from double-refined white sugar
                and premium gold sugar to traditional jaggery (blocks & cubes),
                Amrut Farms select pulses (Toor, Chana, Moong, Urad), and pure
                desi cow ghee — each product carrying the same standard of
                cleanliness and quality our mills are known for.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-2 max-w-4xl">
              <div className="flex flex-col gap-2 p-5 bg-teal-light/60 ring-1 ring-teal-deep/10 shine-wrap transition-transform duration-600 ease-cinematic hover:-translate-y-1 animate-float-fast delay-100" style={{ borderRadius: '22px' }}>
                <Award className="w-6 h-6 text-teal-deep" aria-hidden="true" />
                <p className="text-2xl font-bold text-teal-deep">64+</p>
                <p className="text-sm text-ink/65">Years of heritage</p>
              </div>
              <div className="flex flex-col gap-2 p-5 bg-gold-light/80 ring-1 ring-gold/15 shine-wrap transition-transform duration-600 ease-cinematic hover:-translate-y-1 animate-float-medium delay-200" style={{ borderRadius: '22px' }}>
                <Users className="w-6 h-6 text-gold" aria-hidden="true" />
                <p className="text-2xl font-bold text-gold">100k+</p>
                <p className="text-sm text-ink/65">Households served</p>
              </div>
              <div className="flex flex-col gap-2 p-5 bg-jaggery-light/80 ring-1 ring-jaggery/15 shine-wrap transition-transform duration-600 ease-cinematic hover:-translate-y-1 animate-float-slow delay-300" style={{ borderRadius: '22px' }}>
                <Building2 className="w-6 h-6 text-jaggery" aria-hidden="true" />
                <p className="text-2xl font-bold text-jaggery">6+</p>
                <p className="text-sm text-ink/65">Group verticals</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-4xl">
              <div className="aspect-[4/3] overflow-hidden bg-teal-light ring-1 ring-ink/5 p-3 shine-wrap group transition-all duration-600 ease-cinematic hover:-translate-y-1" style={{ borderRadius: '18px' }}>
                <img
                  src="/amrut logo.png"
                  alt="Amrut brand mark"
                  className="w-full h-full object-contain transition-transform duration-700 ease-cinematic group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-white ring-1 ring-ink/5 p-3 shine-wrap group transition-all duration-600 ease-cinematic hover:-translate-y-1" style={{ borderRadius: '18px' }}>
                <img
                  src="/amrut farms logo.png"
                  alt="Amrut Farms logo — Pulses & Grains"
                  className="w-full h-full object-contain transition-transform duration-700 ease-cinematic group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-cream ring-1 ring-ink/5 col-span-2 sm:col-span-1 p-3 shine-wrap group transition-all duration-600 ease-cinematic hover:-translate-y-1" style={{ borderRadius: '18px' }}>
                <img
                  src="/Amrut gud.png"
                  alt="Amrut Gud logo — Chemical Free, 100% Natural"
                  className="w-full h-full object-contain transition-transform duration-700 ease-cinematic group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-amrut-heading"
        className="relative overflow-hidden bg-teal-light/30 border-y border-teal-deep/10"
      >
        <div
          className="absolute inset-0 -z-10 opacity-[0.05] mix-blend-multiply"
          aria-hidden="true"
          style={{
            backgroundImage: `url(/bg.png)`,
            backgroundSize: '520px 520px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute top-[-5%] right-[10%] w-80 h-80 rounded-full bg-gold-light/50 blur-3xl opacity-70" aria-hidden="true" />
        <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 rounded-full bg-teal-light/80 blur-3xl opacity-50" aria-hidden="true" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 order-2 lg:order-1 reveal-hidden-left flex flex-col gap-4">
              <div className="relative shine-wrap overflow-hidden ring-1 ring-ink/5 animate-float-medium bg-gradient-to-br from-gold-light/60 via-white to-jaggery-light/60 p-4" style={{ borderRadius: '22px' }}>
                <div className="relative mx-auto w-full max-w-[360px]">
                  <div className="overflow-hidden ring-1 ring-gold/30" style={{ borderRadius: '18px' }}>
                    <img
                      src="/sir.png"
                      alt="Late Hon. Shri Shankarraoji G. Kolhe — Sahakar Maharishi, Founder Chairman"
                      className="w-full h-full object-cover transition-transform duration-700 ease-cinematic hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 inline-flex items-center justify-center w-10 h-10 bg-teal-deep text-cream ring-2 ring-white shadow-[0_8px_16px_rgba(31,92,74,0.3)] animate-float-slow" style={{ borderRadius: '999px' }}>
                    <Award className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-2 px-2">
                <h3 className="text-lg sm:text-xl font-bold text-ink leading-tight tracking-tight">
                  Late Hon. Shri Shankarraoji G. Kolhe
                </h3>
                <p className="text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase text-teal-deep">
                  Sahakar Maharishi
                </p>
                <p className="text-sm text-ink/60 leading-snug max-w-sm">
                  Former Minister · Founder Chairman,
                  <br />
                  Sahakar Maharishi Shankarrao Kohle Sahakari Sakhar Karkhana Ltd.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-5 order-1 lg:order-2 reveal-hidden-right">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-deep">
                About Amrut Sugar
              </p>
              <h2
                id="about-amrut-heading"
                className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-ink leading-[1.08]"
              >
                Spreading the sweetness
                <br />
                <span className="text-teal-deep">since last 5 decades.</span>
              </h2>
              <div className="flex flex-col gap-4 text-base text-ink/72 leading-relaxed">
                <p>
                  From the house of <span className="font-semibold text-ink/85">"Sahakar Maharishi Shankar Rao Kohle Sahakari Sakhar Karkhana Ltd."</span> under the brand name of <span className="font-semibold text-teal-deep">"Sanjivani"</span>, we spread happiness and love.
                </p>
                <p>
                  Located on the banks of River Godavari and blessed by the pious land of Shirdi Sai Baba, our sugar cubes are as pure and pristine as they can get. Sanjivani Sugars is a well-known name in the sugar industry and is lauded for its high-quality sugar crystals that are clean, clear and healthy.
                </p>
                <p>
                  Our continuous investment in modern technology and state-of-the-art equipment & machinery has always kept us ahead of the curve and has made us the most reliable supplier of Sugar. It is our continuous endeavour to work on our quality and keep mesmerising our consumers' tastebuds.
                </p>
                <p>
                  High capacity utilization, higher rates of recovery, supported by a strong R&D team and competitive rates are some of the factors that make Sanjivani Sugar the best choice since 1975. Our business terms and ethics work on only one factor ........<span className="font-bold text-teal-deep tracking-wide">TRUST!</span>
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="flex flex-col gap-1.5 p-4 bg-white ring-1 ring-ink/5 shine-wrap hover:-translate-y-1 transition-all duration-500 ease-cinematic" style={{ borderRadius: '16px' }}>
                  <p className="text-2xl font-bold text-teal-deep">1975</p>
                  <p className="text-xs text-ink/60 leading-snug">Since — Sanjivani legacy</p>
                </div>
                <div className="flex flex-col gap-1.5 p-4 bg-white ring-1 ring-ink/5 shine-wrap hover:-translate-y-1 transition-all duration-500 ease-cinematic" style={{ borderRadius: '16px' }}>
                  <Factory className="w-5 h-5 text-gold" />
                  <p className="text-xs text-ink/60 leading-snug">Modern tech & machinery</p>
                </div>
                <div className="flex flex-col gap-1.5 p-4 bg-white ring-1 ring-ink/5 shine-wrap hover:-translate-y-1 transition-all duration-500 ease-cinematic" style={{ borderRadius: '16px' }}>
                  <ShieldCheck className="w-5 h-5 text-jaggery" />
                  <p className="text-xs text-ink/60 leading-snug">Strong R&D team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="why-choose-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20"
      >
        <div className="flex flex-col items-center text-center gap-3 mb-10 reveal-hidden">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gold">
            Why Choose Us
          </p>
          <h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-ink leading-[1.08] max-w-3xl"
          >
            Why choose <span className="text-teal-deep">Amrut Sugar?</span>
          </h2>
          <p className="text-base text-ink/65 leading-relaxed max-w-2xl">
            Five reasons why Amrut Sugar stands apart from every other sugar brand in Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const IIcon = item.icon;
            const isWide = idx === 2;
            return (
              <div
                key={item.title}
                className={`${isWide ? 'sm:col-span-2 lg:col-span-1' : ''} flex flex-col gap-3 p-6 bg-white ring-1 ring-ink/5 hover:-translate-y-1.5 transition-all duration-600 ease-cinematic shine-wrap reveal-hidden-scale`}
                style={{
                  borderRadius: '22px',
                  animationDelay: `${idx * 80}ms`,
                }}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 shrink-0 ring-1 ${item.tint} animate-float-fast`}
                  style={{ borderRadius: '16px' }}
                >
                  <IIcon className={`w-7 h-7 ${item.iconTint}`} aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-bold text-ink tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/65 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-4 p-6 bg-gradient-to-br from-teal-light/70 via-cream to-gold-light/60 ring-1 ring-teal-deep/10 hover:-translate-y-1.5 transition-all duration-600 ease-cinematic shine-wrap reveal-hidden-scale" style={{ borderRadius: '22px', animationDelay: '400ms' }}>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center w-14 h-14 shrink-0 bg-white ring-1 ring-teal-deep/10 animate-float-medium" style={{ borderRadius: '16px' }}>
                <Droplets className="w-7 h-7 text-teal-deep" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-deep">
                  Extra Assurance
                </p>
                <h3 className="text-lg font-bold text-ink tracking-tight leading-tight">
                  On the banks of River Godavari · Blessed by Shirdi
                </h3>
              </div>
            </div>
            <p className="text-sm text-ink/70 leading-relaxed">
              Our mill sits on the sacred banks of the Godavari and is blessed by the pious land of Shirdi Sai Baba. Every crystal carries this legacy of purity forward — a sweetness you can trust.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="compare-heading"
        className="relative overflow-hidden bg-jaggery-light/30 border-y border-jaggery/10"
      >
        <div
          className="absolute inset-0 -z-10 opacity-[0.05] mix-blend-multiply"
          aria-hidden="true"
          style={{
            backgroundImage: `url(/bg1.jpg)`,
            backgroundSize: '440px 440px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute top-[5%] left-[5%] w-60 h-60 rounded-full bg-red-200/40 blur-3xl opacity-40" aria-hidden="true" />
        <div className="absolute bottom-[5%] right-[5%] w-72 h-72 rounded-full bg-teal-light/60 blur-3xl opacity-50" aria-hidden="true" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative">
          <div className="flex flex-col items-center text-center gap-3 mb-12 reveal-hidden">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-jaggery">
              Know The Difference
            </p>
            <h2
              id="compare-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-ink leading-[1.08] max-w-3xl"
            >
              Loose Sugar <span className="text-ink/40 mx-2">vs</span> <span className="text-teal-deep">Amrut Sugar</span>
            </h2>
            <p className="text-base text-ink/65 leading-relaxed max-w-2xl">
              See why sealed, hygienic Amrut Sugar is always the smarter choice over loose, open sugar.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-5 flex flex-col gap-5 bg-white/70 backdrop-blur-sm ring-1 ring-red-200/60 p-6 sm:p-8 shine-wrap reveal-hidden-left" style={{ borderRadius: '22px' }}>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-11 h-11 shrink-0 bg-red-100 ring-1 ring-red-200" style={{ borderRadius: '14px' }}>
                  <XCircle className="w-5.5 h-5.5 text-red-500" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-xl font-bold text-red-600 tracking-tight leading-tight">
                    Loose Sugar
                  </h3>
                  <p className="text-xs text-ink/50 tracking-wide uppercase font-semibold">
                    The Risky Choice
                  </p>
                </div>
              </div>

              <div className="aspect-[4/3] overflow-hidden bg-red-50 ring-1 ring-red-100 shine-wrap" style={{ borderRadius: '18px' }}>
                <img
                  src="/Untitled-2.png"
                  alt="Loose Sugar — exposed to dust and pollution"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <ul className="flex flex-col gap-3">
                {LOOSE_SUGAR_POINTS.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3.5 bg-red-50/70 ring-1 ring-red-100"
                    style={{ borderRadius: '14px' }}
                  >
                    <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 mt-0.5 bg-red-100" style={{ borderRadius: '999px' }}>
                      <XCircle className="w-3.5 h-3.5 text-red-500" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-red-800/85 leading-relaxed font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 flex flex-col items-center justify-center gap-4 py-4 reveal-hidden">
              <div className="relative w-full max-w-[140px] aspect-square flex items-center justify-center animate-float-medium">
                <div className="absolute inset-0 bg-gradient-to-br from-jaggery-light via-cream to-teal-light blur-2xl opacity-70" aria-hidden="true" />
                <img
                  src="/vs.png"
                  alt="Versus — Loose Sugar vs Amrut Sugar"
                  className="relative w-full h-full object-contain drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal-deep/70">
                  Choose Wisely
                </p>
                <p className="text-sm text-ink/55 leading-relaxed max-w-[200px]">
                  Your family deserves the safety of sealed, pure sugar.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-5 bg-gradient-to-br from-white via-teal-light/40 to-cream ring-1 ring-teal-deep/15 p-6 sm:p-8 shine-wrap reveal-hidden-right" style={{ borderRadius: '22px' }}>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-11 h-11 shrink-0 bg-teal-light ring-1 ring-teal-deep/20" style={{ borderRadius: '14px' }}>
                  <CheckCircle2 className="w-5.5 h-5.5 text-teal-deep" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-xl font-bold text-teal-deep tracking-tight leading-tight">
                    Amrut Sugar
                  </h3>
                  <p className="text-xs text-ink/50 tracking-wide uppercase font-semibold">
                    The Smart Choice
                  </p>
                </div>
              </div>

              <div className="aspect-[4/3] overflow-hidden bg-teal-light/50 ring-1 ring-teal-deep/10 shine-wrap p-2" style={{ borderRadius: '18px' }}>
                <img
                  src="/A sugar.png"
                  alt="Amrut Sugar — hygienically sealed and safe"
                  className="w-full h-full object-contain transition-transform duration-700 ease-cinematic hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              <ul className="flex flex-col gap-3">
                {AMRUT_SUGAR_POINTS.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3.5 bg-white ring-1 ring-teal-deep/10"
                    style={{ borderRadius: '14px' }}
                  >
                    <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 mt-0.5 bg-teal-light ring-1 ring-teal-deep/15" style={{ borderRadius: '999px' }}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-deep" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-teal-deep/90 leading-relaxed font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="group-heading"
        className="relative bg-jaggery-light/40 border-y border-jaggery/10 overflow-hidden"
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
        <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-teal-light/50 blur-3xl" aria-hidden="true" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16 relative">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-3 reveal-hidden-left">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-jaggery">
                Sanjivani Group
              </p>
              <h2
                id="group-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-tight"
              >
                Part of something much bigger.
              </h2>
              <p className="text-base text-ink/70 leading-relaxed">
                Amrut is a proud pillar of the Sanjivani Group — six decades of
                cooperative excellence across sugar, education, ethanol,
                chemicals, pharma, and power.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="inline-flex items-center justify-center p-3 bg-white/80 ring-1 ring-jaggery/15 animate-float-medium" style={{ borderRadius: '18px' }}>
                  <img
                    src="/Sanjivani Group 2(1).png"
                    alt="Sanjivani Group"
                    className="h-16 sm:h-20 w-auto object-contain"
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
                {GROUP_VERTICALS_ABOUT.map((v, idx) => {
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
    </>
  );
}
