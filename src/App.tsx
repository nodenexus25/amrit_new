import { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));

function PageFallback() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col gap-4 max-w-xl">
        <div className="h-10 w-40 bg-ink/5 animate-pulse" />
        <div className="h-6 w-3/4 bg-ink/5 animate-pulse" />
        <div className="h-4 w-full bg-ink/5 animate-pulse" />
        <div className="h-4 w-5/6 bg-ink/5 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3 bg-white p-5 ring-1 ring-ink/5">
              <div className="aspect-square w-full bg-ink/5 animate-pulse" />
              <div className="h-4 w-1/2 bg-ink/5 animate-pulse" />
              <div className="h-3 w-3/4 bg-ink/5 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, search]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center gap-5">
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-deep">
                    404
                  </p>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink">
                    This page is not sweet.
                  </h1>
                  <p className="text-base text-ink/65 max-w-md leading-relaxed">
                    The page you are looking for does not exist. Let us get you back to something sweeter.
                  </p>
                  <a
                    href="/"
                    className="mt-2 inline-flex items-center gap-2 px-6 py-3.5 bg-teal-deep text-cream text-sm font-semibold tracking-tight hover:bg-teal-deep/92 transition-colors duration-400 ease-cinematic focus-visible:outline-none"
                  >
                    Back to Home
                  </a>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
