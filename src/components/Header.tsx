import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/boyo', label: 'BOYO' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-600 ease-cinematic ${
        scrolled
          ? 'bg-cream/95 backdrop-blur border-b border-ink/5 shadow-sm'
          : 'bg-cream border-b border-transparent'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-20 sm:h-24 grid-cols-3 items-center gap-4">
          <div className="flex items-center gap-3 sm:gap-5 justify-start">
            <Link
              to="/"
              className="flex items-center gap-2.5 group focus-visible:outline-none"
              aria-label="Amrut Sugar — Home"
            >
              <img
                src="/amrut sugar.png"
                alt="Amrut Sugar"
                className="h-[60px] sm:h-[84px] w-auto object-contain transition-transform duration-600 ease-cinematic group-hover:scale-[1.03]"
                loading="eager"
                fetchPriority="high"
              />
            </Link>
          </div>

          <nav
            className="hidden lg:flex items-center justify-center gap-1"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-medium tracking-tight transition-colors duration-300 ease-cinematic ${
                    isActive
                      ? 'text-teal-deep'
                      : 'text-ink/75 hover:text-teal-deep'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute left-3.5 right-3.5 bottom-1 h-0.5 bg-teal-deep transition-all duration-500 ease-cinematic origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4 justify-end">
            <div className="hidden sm:flex items-center gap-3 sm:gap-4 pr-4 sm:pr-5 border-r border-ink/10">
              <a
                href="https://www.sanjivanigroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 focus-visible:outline-none"
                aria-label="Sanjivani Group"
                title="A Sanjivani Group Brand"
              >
                <div className="hidden md:flex flex-col leading-tight items-end">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-ink/50">
                    A
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-tight text-teal-deep group-hover:text-teal-deep/85 transition-colors duration-300">
                    Sanjivani Group
                  </span>
                  <span className="text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-ink/40 font-medium">
                    Brand · Since 1962
                  </span>
                </div>
                <div className="relative flex items-center justify-center p-1.5 bg-white/60 ring-1 ring-gold/20 group-hover:ring-gold/40 transition-all duration-500 ease-cinematic">
                  <img
                    src="/Sanjivani Group 2(1).png"
                    alt="Sanjivani Group"
                    className="h-10 sm:h-12 w-auto object-contain"
                    loading="eager"
                  />
                </div>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex items-center justify-center w-10 h-10 lg:hidden text-ink/80 hover:text-teal-deep focus-visible:outline-none"
            >
              {open ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-600 ease-cinematic border-t border-ink/5 bg-cream ${
          open ? 'max-h-[80vh]' : 'max-h-0'
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-4 border-b border-ink/5">
          <a
            href="https://www.sanjivanigroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 focus-visible:outline-none"
            aria-label="Sanjivani Group"
          >
            <div className="flex items-center justify-center p-2 bg-white/60 ring-1 ring-gold/20">
              <img
                src="/Sanjivani Group 2(1).png"
                alt="Sanjivani Group"
                className="h-10 w-auto object-contain"
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
          className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-3 text-base font-medium tracking-tight transition-colors duration-300 ${
                  isActive
                    ? 'text-teal-deep bg-teal-light/40'
                    : 'text-ink/80 hover:text-teal-deep hover:bg-ink/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
