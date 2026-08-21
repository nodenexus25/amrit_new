import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

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
  { to: '/boyo', label: 'BOYO Nuts & Snacks' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-teal-deep text-cream/90">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link
              to="/"
              className="flex items-center gap-2.5 focus-visible:outline-none"
              aria-label="Amrut Sugar — Home"
            >
              <img
                src="/amrut sugar.png"
                alt="Amrut Sugar"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-sm leading-relaxed text-cream/75 max-w-sm">
              Pure, wholesome sweetness from Sahakar Maharishi Shankarrao Kohle
              Sahakari Sakhar Karkhana Ltd. — a Sanjivani Group brand,
              Kopargaon, Maharashtra.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center p-2 bg-cream/5">
                  <img
                    src="/Sanjivani kARKHANA LOGO 2 (1).png"
                    alt="Sahakar Maharishi Shankarrao Kohle Sahakari Sakhar Karkhana"
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center p-2 bg-cream/5">
                  <img
                    src="/Sanjivani Group 2(1).png"
                    alt="Sanjivani Group"
                    className="h-14 w-auto object-contain"
                  />
                </div>
              </div>
              <div className="inline-flex items-center justify-center p-2 bg-cream/5 w-fit">
                <img
                  src="/amrut farms logo.png"
                  alt="Amrut Farms — Pulses & Grains"
                  className="h-10 w-auto object-contain"
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
              >
                <SocialIcon brand="f" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-9 h-9 bg-cream/10 hover:bg-cream/20 text-cream transition-colors duration-400 ease-cinematic focus-visible:outline-none"
              >
                <SocialIcon brand="ig" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="inline-flex items-center justify-center w-9 h-9 bg-cream/10 hover:bg-cream/20 text-cream transition-colors duration-400 ease-cinematic focus-visible:outline-none"
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
    </footer>
  );
}
