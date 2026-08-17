import { Helmet } from 'react-helmet-async';
import { ExternalLink, Award, Building2, Users } from 'lucide-react';

export default function About() {
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
          className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-light/40 via-cream to-cream"
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-20 lg:pb-16">
          <div className="flex flex-col gap-4 max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-deep">
              About Us
            </p>
            <h1
              id="about-hero-heading"
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-ink leading-[1.05]"
            >
              A name Maharashtra has
              <br className="hidden sm:block" />
              <span className="text-teal-deep">trusted for 64 years.</span>
            </h1>
            <p className="text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl">
              Amrut is the flagship consumer brand of Sahakar Maharishi
              Shankarrao Kohle Sahakari Sakhar Karkhana Ltd. — clean, clear,
              hygienic, high-quality sugar and more, produced with care at
              Kopargaon, Maharashtra.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="story-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h2
              id="story-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-ink"
            >
              Our Story
            </h2>
            <div className="flex flex-col gap-4 text-base text-ink/72 leading-relaxed">
              <p>
                Amrut Sugar was born from a simple promise — to give every
                household the purest form of sweetness, produced by a
                cooperative that cares for its farmers, its land, and its
                community.
              </p>
              <p>
                Today, the Amrut range extends from double-refined white sugar
                and premium gold sugar to traditional jaggery, rich brown sugar,
                and pure desi cow ghee — each product carrying the same
                standard of cleanliness and quality our mills are known for.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col gap-2 p-5 bg-teal-light/60">
                <Award className="w-6 h-6 text-teal-deep" aria-hidden="true" />
                <p className="text-2xl font-bold text-teal-deep">64+</p>
                <p className="text-sm text-ink/65">Years of heritage</p>
              </div>
              <div className="flex flex-col gap-2 p-5 bg-gold-light/80">
                <Users className="w-6 h-6 text-gold" aria-hidden="true" />
                <p className="text-2xl font-bold text-gold">100k+</p>
                <p className="text-sm text-ink/65">Households served</p>
              </div>
              <div className="flex flex-col gap-2 p-5 bg-jaggery-light/80">
                <Building2 className="w-6 h-6 text-jaggery" aria-hidden="true" />
                <p className="text-2xl font-bold text-jaggery">6+</p>
                <p className="text-sm text-ink/65">Group verticals</p>
              </div>
            </div>
          </div>

          <aside
            aria-labelledby="founder-heading"
            className="lg:col-span-5"
          >
            <div className="bg-white ring-1 ring-ink/5 p-6 sm:p-8 flex flex-col gap-5">
              <h2
                id="founder-heading"
                className="text-xs font-semibold tracking-[0.16em] uppercase text-gold"
              >
                Founder
              </h2>

              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-gold-light to-jaggery-light flex items-center justify-center ring-1 ring-gold/20">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold/15 flex items-center justify-center text-gold font-bold text-2xl sm:text-3xl">
                      SK
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-teal-deep text-cream flex items-center justify-center text-xs">
                    <Award className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-lg sm:text-xl font-semibold text-ink leading-tight">
                    Late Hon. Shri
                    <br />
                    Shankarraoji G. Kolhe
                  </p>
                  <p className="text-sm text-ink/60 leading-snug">
                    Former Minister, Founder Chairman
                    <br />
                    Sahakar Maharishi — a life dedicated to
                    <br />
                    farmers, cooperation and Kopargaon.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        aria-labelledby="group-heading"
        className="bg-jaggery-light/40 border-y border-jaggery/10"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-3">
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
              <a
                href="https://www.sanjivanigroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 w-fit px-5 py-3 bg-jaggery text-cream text-sm font-semibold tracking-tight hover:bg-jaggery/92 transition-colors duration-400 ease-cinematic focus-visible:outline-none"
              >
                Visit Sanjivani Group
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { label: 'Sugar', icon: '🍚' },
                  { label: 'Education', icon: '📚' },
                  { label: 'Ethanol', icon: '⚗️' },
                  { label: 'Chemicals', icon: '🧪' },
                  { label: 'Pharma', icon: '💊' },
                  { label: 'Power', icon: '⚡' },
                ].map((v) => (
                  <li
                    key={v.label}
                    className="flex items-center gap-3 bg-white p-4 ring-1 ring-ink/5"
                  >
                    <span
                      className="text-2xl"
                      aria-hidden="true"
                    >
                      {v.icon}
                    </span>
                    <span className="text-sm font-semibold text-ink tracking-tight">
                      {v.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
