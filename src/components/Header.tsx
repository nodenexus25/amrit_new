import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

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
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="Amrut Sugar — Home"
          >
            <span className="relative inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-teal-deep text-cream">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-600 ease-cinematic group-hover:rotate-6" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-teal-deep">
                Amrut
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-ink/50 font-medium">
                Sugar
              </span>
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
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

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2.5 bg-teal-deep text-cream text-sm font-semibold tracking-tight hover:bg-teal-deep/92 transition-all duration-500 ease-cinematic focus-visible:outline-none"
            >
              Enquire Now
            </Link>

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
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-4 py-3 bg-teal-deep text-cream text-base font-semibold tracking-tight hover:bg-teal-deep/92"
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
