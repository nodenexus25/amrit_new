import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Sprout, Factory, Droplet, FlaskConical, Zap, ArrowRight } from 'lucide-react';

function SocialIcon({ brand }: { brand: 'f' | 'ig' | 'x' }) {
  const map: Record<string, string> = { f: 'f', ig: 'IG', x: 'X' };
  return (
    <span
      className="inline-flex items-center justify-center w-full h-full font-bold text-[12px] tracking-tight"
      aria-hidden="true"
    >
      {map[brand]}
    </span>
  );
}

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/products?category=sugar', label: 'Sugar Range' },
  { to: '/products?category=jaggery', label: 'Jaggery & Brown' },
  { to: '/products?category=ghee', label: 'Desi Ghee' },
  { to: '/products?category=pulses', label: 'Amrut Farms — Pulses' },
  { to: '/contact', label: 'Contact' },
];

const ECOSYSTEM_STEPS = [
  { id: 'farm', label: 'Farm', Icon: Sprout },
  { id: 'factory', label: 'Sugar Factory', Icon: Factory },
  { id: 'molasses', label: 'Molasses / ESJ', Icon: Droplet },
  { id: 'chemical', label: 'Chemical Division', Icon: FlaskConical },
  { id: 'fuel', label: 'Fuel & Consumer', Icon: Zap },
];

export function Footer() {
  const BRAND_LOGO_HEIGHT = 'h-14';

  return (
    <footer className="mt-auto bg-teal-deep text-cream/90">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="flex items-center gap-3 sm:gap-4 focus-visible:outline-none group"
                aria-label="Amrut Sugar — Home"
              >
                <div className={`inline-flex items-center justify-center p-2 bg-cream/[0.06] ring-1 ring-cream/10`} style={{ borderRadius: '16px' }}>
                  <img
                    src="/amrut sugar.png"
                    alt="Amrut Sugar"
                    className={`${BRAND_LOGO_HEIGHT} w-auto object-contain transition-transform duration-600 ease-cinematic group-hover:scale-[1.03]`}
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-cream leading-none">
                    Amrut Sugar
                  </span>
                  <span className="mt-1 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-gold-light">
                    Khaas Wali Mithaas!
                  </span>
                  <span className="mt-1.5 text-[10px] text-cream/55 tracking-wide">
                    A Sanjivani Group Brand · Since 1962
                  </span>
                </div>
              </Link>
            </div>

            <p className="text-sm leading-relaxed text-cream/75 max-w-sm">
              Pure, wholesome sweetness from Sahakar Maharishi Shankarrao Kohle
              Sahakari Sakhar Karkhana Ltd. — a Sanjivani Group brand,
              Kopargaon, Maharashtra.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center justify-center p-2 bg-cream/5 ring-1 ring-cream/10" style={{ borderRadius: '14px' }}>
                <img
                  src="/Sanjivani kARKHANA LOGO 2 (1).png"
                  alt="Sahakar Maharishi Shankarrao Kohle Sahakari Sakhar Karkhana"
                  className={`${BRAND_LOGO_HEIGHT} w-auto object-contain`}
                />
              </div>
              <div className="inline-flex items-center justify-center p-2 bg-cream/5 ring-1 ring-cream/10" style={{ borderRadius: '14px' }}>
                <img
                  src="/Sanjivani Group 2(1).png"
                  alt="Sanjivani Group"
                  className={`${BRAND_LOGO_HEIGHT} w-auto object-contain`}
                />
              </div>
              <div className="inline-flex items-center justify-center p-2 bg-cream/5 ring-1 ring-cream/10" style={{ borderRadius: '14px' }}>
                <img
                  src="/amrut farms logo.png"
                  alt="Amrut Farms — Pulses & Grains"
                  className={`${BRAND_LOGO_HEIGHT} w-auto object-contain`}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1" aria-label="Social links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-9 h-9 bg-cream/10 hover:bg-cream/20 text-cream transition-colors duration-400 ease-cinematic focus-visible:outline-none"
                style={{ borderRadius: '999px' }}
              >
                <SocialIcon brand="f" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-9 h-9 bg-cream/10 hover:bg-cream/20 text-cream transition-colors duration-400 ease-cinematic focus-visible:outline-none"
                style={{ borderRadius: '999px' }}
              >
                <SocialIcon brand="ig" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="inline-flex items-center justify-center w-9 h-9 bg-cream/10 hover:bg-cream/20 text-cream transition-colors duration-400 ease-cinematic focus-visible:outline-none"
                style={{ borderRadius: '999px' }}
              >
                <SocialIcon brand="x" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-sm font-semibold tracking-[0.14em] uppercase text-cream/90 mb-5">
              Quick Links
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.to + l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-cream/75 hover:text-cream transition-colors duration-300 focus-visible:outline-none"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-sm font-semibold tracking-[0.14em] uppercase text-cream/90 mb-5">
              Get in Touch
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-cream/75">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" aria-hidden="true" />
                <span className="leading-relaxed">
                  Sanjivani Group, Kopargaon,
                  <br />
                  Ahmednagar, Maharashtra 423601
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <a
                  href="tel:+912423222222"
                  className="hover:text-cream transition-colors focus-visible:outline-none"
                >
                  +91 2423 222 222
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <a
                  href="mailto:info@amrutsugar.in"
                  className="hover:text-cream transition-colors focus-visible:outline-none break-all"
                >
                  info@amrutsugar.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 flex-shrink-0 text-gold font-semibold text-xs inline-flex items-center justify-center" aria-hidden="true">
                  @
                </span>
                <a
                  href="https://www.amrutsugar.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors focus-visible:outline-none"
                >
                  www.amrutsugar.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-cream/60 tracking-tight">
            © {new Date().getFullYear()} Amrut Sugar. All rights reserved.
          </p>
          <p className="text-xs text-cream/60 tracking-tight">
            A{' '}
            <a
              href="https://www.sanjivanigroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors focus-visible:outline-none underline decoration-cream/25 underline-offset-4"
            >
              Sanjivani Group
            </a>{' '}
            Brand · Sugar · Education · Ethanol · Chemicals · Pharma · Power
          </p>
        </div>
      </div>

      {/* ==== Group Ecosystem ==== */}
      <section
        aria-labelledby="ecosystem-heading"
        className="relative bg-[#14221E] border-t border-cream/5 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `url(/bg1.jpg)`,
            backgroundSize: '420px 420px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-jaggery/10 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/8 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col items-center text-center gap-4 sm:gap-5 max-w-3xl mx-auto">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Sanjivani Group Ecosystem
            </p>
            <h2
              id="ecosystem-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream leading-[1.1]"
            >
              Group Ecosystem — <span className="text-gold-light">One Supply Chain</span>
            </h2>
            <p className="text-base sm:text-lg text-cream/70 leading-relaxed">
              Our sugarcane by-products feed directly into the Chemical Division's
              Ethanol and ESJ-to-Ethanol operations — a closed-loop model from
              farm to fuel.
            </p>
          </div>

          <ol className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 sm:gap-0">
            {ECOSYSTEM_STEPS.map((step, idx) => {
              const { Icon } = step;
              const isLast = idx === ECOSYSTEM_STEPS.length - 1;
              return (
                <li
                  key={step.id}
                  className="relative flex flex-col items-center gap-3 sm:w-1/5"
                >
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gold/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-cinematic" aria-hidden="true" />
                    <div className="relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/[0.04] ring-1 ring-cream/10 hover:ring-gold/40 transition-all duration-600 ease-cinematic rounded-[22px]">
                      <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-gold-light" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-[15px] font-semibold tracking-tight text-cream text-center max-w-[10rem]">
                    {step.label}
                  </p>
                  {!isLast && (
                    <div className="hidden sm:flex absolute top-10 left-[calc(100%-14px)] w-[calc(100%-28px)] items-center justify-center pointer-events-none">
                      <ArrowRight className="w-5 h-5 text-cream/25" aria-hidden="true" strokeWidth={2} />
                    </div>
                  )}
                  {!isLast && (
                    <div className="flex sm:hidden -mb-1 rotate-90 text-cream/25">
                      <ArrowRight className="w-5 h-5" aria-hidden="true" strokeWidth={2} />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="mt-12 sm:mt-14 flex items-center justify-center">
            <a
              href="https://www.sanjivanigroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-teal-deep text-cream text-sm font-semibold tracking-tight ring-1 ring-teal-deep/50 hover:bg-teal-deep/90 hover:ring-gold/35 transition-all duration-600 ease-cinematic focus-visible:outline-none"
              style={{ borderRadius: '999px' }}
            >
              Visit Chemical Division
              <ArrowRight className="w-4.5 h-4.5 transition-transform duration-600 ease-cinematic group-hover:translate-x-0.5" aria-hidden="true" strokeWidth={2} />
            </a>
          </div>

          <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-cream/55 tracking-tight leading-relaxed">
              © {new Date().getFullYear()} Sanjivani Group of Industries —
              Agriculture Division. All rights reserved.
            </p>
            <nav aria-label="Legal links" className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="#"
                className="text-xs text-cream/60 hover:text-gold-light transition-colors duration-300 focus-visible:outline-none"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-xs text-cream/60 hover:text-gold-light transition-colors duration-300 focus-visible:outline-none"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-xs text-cream/60 hover:text-gold-light transition-colors duration-300 focus-visible:outline-none"
              >
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
}
