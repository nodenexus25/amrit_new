import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-md ring-1 ring-ink/10 shadow-[0_10px_36px_rgb(0,0,0,0.08)]'
    : 'bg-transparent ring-1 ring-transparent shadow-none';

  const textTone = scrolled || !isHome ? 'text-ink/80 hover:text-teal-deep' : 'text-cream/92 hover:text-gold-light';
  const logoTone = scrolled || !isHome ? '' : 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]';
  const activeTone = scrolled || !isHome ? 'text-teal-deep' : 'text-gold-light';
  const activeUnderline = scrolled || !isHome ? 'bg-teal-deep' : 'bg-gold-light';

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-24 sm:h-28" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-50 w-full pt-3 sm:pt-4 lg:pt-5 animate-fade-down">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-6">
          <nav
            className={`relative w-full grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3 lg:gap-4 px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 transition-all duration-600 ease-cinematic ${navBg}`}
            aria-label="Primary navigation"
            style={{ borderRadius: '999px' }}
          >
            <div className={`flex items-center gap-2 sm:gap-3 justify-start ${logoTone} transition-all duration-500 ease-cinematic min-w-0`}>
              <Link
                to="/"
                className="flex items-center gap-2 group focus-visible:outline-none"
                aria-label="Amrut Sugar — Home"
              >
                <img
                  src="/amrut sugar.png"
                  alt="Amrut Sugar"
                  className="h-[48px] sm:h-[62px] lg:h-[70px] w-auto object-contain transition-transform duration-600 ease-cinematic group-hover:scale-[1.04]"
                  loading="eager"
                  fetchPriority="high"
                />
              </Link>
            </div>

            <nav
              className="hidden lg:flex items-center justify-center gap-0.5"
              aria-label="Desktop links"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-[13px] font-semibold tracking-tight transition-all duration-400 ease-cinematic rounded-full ${
                      isActive
                        ? `${activeTone}`
                        : textTone
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative inline-flex items-center">
                      {link.label}
                      <span
                        className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-500 ease-cinematic origin-center ${activeUnderline} ${
                          isActive ? 'w-[72%] opacity-100' : 'w-0 opacity-0'
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 justify-end">
              <a
                href="https://www.sanjivanigroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 focus-visible:outline-none group"
                aria-label="Sanjivani Group"
                title="A Sanjivani Group Brand"
              >
                <div className={`relative flex items-center justify-center p-1.5 transition-all duration-500 ease-cinematic rounded-full ${
                  scrolled || !isHome
                    ? 'bg-white/70 ring-1 ring-gold/25 group-hover:ring-gold/45'
                    : 'bg-cream/10 ring-1 ring-cream/20 group-hover:ring-gold-light/45'
                }`}>
                  <img
                    src="/Sanjivani Group 2(1).png"
                    alt="Sanjivani Group"
                    className="h-8 sm:h-9 w-auto object-contain"
                    loading="eager"
                  />
                </div>
                <div className="hidden xl:flex flex-col leading-tight items-end">
                  <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                    scrolled || !isHome ? 'text-ink/50' : 'text-cream/60'
                  }`}>
                    A
                  </span>
                  <span className={`text-[11px] font-bold tracking-tight transition-colors duration-300 ${
                    scrolled || !isHome ? 'text-teal-deep group-hover:text-teal-deep/85' : 'text-cream group-hover:text-gold-light'
                  }`}>
                    Sanjivani Group
                  </span>
                  <span className={`text-[9px] tracking-[0.14em] uppercase font-medium transition-colors duration-300 ${
                    scrolled || !isHome ? 'text-ink/40' : 'text-cream/50'
                  }`}>
                    Brand · Since 1962
                  </span>
                </div>
              </a>

              <Link
                to="/products"
                className={`hidden md:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs sm:text-[13px] font-bold tracking-tight transition-all duration-500 ease-cinematic focus-visible:outline-none shine-wrap ${
                  scrolled || !isHome
                    ? 'bg-teal-deep text-cream hover:bg-teal-deep/92 ring-1 ring-teal-deep/20'
                    : 'bg-cream text-teal-deep hover:bg-gold-light ring-1 ring-cream/30'
                }`}
                style={{ borderRadius: '999px' }}
              >
                Shop Now
              </Link>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Close menu' : 'Open menu'}
                className={`inline-flex items-center justify-center w-10 h-10 lg:hidden transition-all duration-400 ease-cinematic focus-visible:outline-none rounded-full ${
                  scrolled || !isHome
                    ? 'text-ink/80 hover:text-teal-deep hover:bg-ink/5'
                    : 'text-cream hover:text-gold-light hover:bg-cream/10'
                }`}
              >
                {open ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-6 mt-2 overflow-hidden transition-all duration-700 ease-cinematic ${
            open ? 'max-h-[88vh] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div
            className={`w-full ring-1 overflow-hidden ${
              scrolled || !isHome
                ? 'bg-cream/95 backdrop-blur-xl ring-ink/10 shadow-[0_10px_40px_rgb(0,0,0,0.08)]'
                : 'bg-ink/80 backdrop-blur-xl ring-cream/15 shadow-[0_10px_40px_rgb(0,0,0,0.25)]'
            }`}
            style={{ borderRadius: '22px' }}
          >
            <div className="px-4 sm:px-6 py-4 border-b border-ink/10">
              <a
                href="https://www.sanjivanigroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 focus-visible:outline-none"
                aria-label="Sanjivani Group"
              >
                <div className="flex items-center justify-center p-2 bg-white/70 ring-1 ring-gold/20 rounded-xl">
                  <img
                    src="/Sanjivani Group 2(1).png"
                    alt="Sanjivani Group"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-bold tracking-tight text-teal-deep">
                    Sanjivani Group
                  </span>
                  <span className="text-[10px] tracking-[0.12em] uppercase text-ink/45 font-medium">
                    A Group Brand · Since 1962
                  </span>
                </div>
              </a>
            </div>
            <nav
              className="px-3 sm:px-5 py-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3.5 text-sm font-semibold tracking-tight transition-all duration-400 ease-cinematic rounded-2xl ${
                      isActive
                        ? scrolled || !isHome
                          ? 'text-teal-deep bg-teal-light/60 ring-1 ring-teal-deep/10'
                          : 'text-gold-light bg-cream/10 ring-1 ring-cream/15'
                        : scrolled || !isHome
                          ? 'text-ink/80 hover:text-teal-deep hover:bg-ink/5'
                          : 'text-cream/90 hover:text-gold-light hover:bg-cream/8'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="px-4 sm:px-6 py-4 border-t border-ink/10">
              <Link
                to="/products"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 bg-teal-deep text-cream text-sm font-bold tracking-tight hover:bg-teal-deep/92 transition-all duration-500 ease-cinematic focus-visible:outline-none shine-wrap"
                style={{ borderRadius: '999px' }}
              >
                Shop the Range
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
