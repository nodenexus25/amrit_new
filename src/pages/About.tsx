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
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-20 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4 max-w-3xl">
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
                hygienic, high-quality sugar, jaggery, ghee and Amrut Farms
                pulses, produced with care at Kopargaon, Maharashtra.
              </p>
            </div>
            <div className="lg:col-span-4 flex items-end justify-center">
              <div className="relative inline-flex items-center justify-center p-6 bg-white/80 ring-1 ring-ink/5">
                <img
                  src="/Sanjivani kARKHANA LOGO 2 (1).png"
                  alt="Sahakar Maharishi Shankarrao Kohle Sahakari Sakhar Karkhana Logo"
                  className="h-28 sm:h-36 w-auto object-contain"
                />
              </div>
            </div>
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
                and premium gold sugar to traditional jaggery (blocks & cubes),
                Amrut Farms select pulses (Toor, Chana, Moong, Urad), and pure
                desi cow ghee — each product carrying the same standard of
                cleanliness and quality our mills are known for.
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

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="aspect-[4/3] overflow-hidden bg-teal-light ring-1 ring-ink/5">
                <img
                  src="/amrut logo.png"
                  alt="Amrut brand mark"
                  className="w-full h-full object-contain p-3"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-white ring-1 ring-ink/5">
                <img
                  src="/amrut farms logo.png"
                  alt="Amrut Farms logo — Pulses & Grains"
                  className="w-full h-full object-contain p-3"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-cream ring-1 ring-ink/5 col-span-2 sm:col-span-1">
                <img
                  src="/Amrut gud.png"
                  alt="Amrut Gud logo — Chemical Free, 100% Natural"
                  className="w-full h-full object-contain p-3"
                  loading="lazy"
                />
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

              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-36 sm:w-36 sm:h-40 overflow-hidden bg-gradient-to-br from-gold-light to-jaggery-light ring-1 ring-gold/20">
                    <img
                      src="/sir.png"
                      alt="Late Hon. Shri Shankarraoji G. Kolhe — Sahakar Maharishi"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
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

              <div className="pt-2 flex gap-3">
                <div className="flex-1 p-3 bg-teal-light/40 ring-1 ring-teal-deep/10">
                  <img
                    src="/Sanjivani kARKHANA LOGO 2 (1).png"
                    alt="Sahakar Maharishi Shankarrao Kohle Karkhana"
                    className="w-full h-20 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 p-3 bg-jaggery-light/40 ring-1 ring-jaggery/10">
                  <img
                    src="/Sanjivani Group 2(1).png"
                    alt="Sanjivani Group"
                    className="w-full h-20 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </aside>
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

              <div className="flex items-center gap-4 pt-2">
                <div className="inline-flex items-center justify-center p-3 bg-white/80 ring-1 ring-jaggery/15">
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
                className="mt-2 inline-flex items-center gap-2 w-fit px-5 py-3 bg-jaggery text-cream text-sm font-semibold tracking-tight hover:bg-jaggery/92 transition-colors duration-400 ease-cinematic focus-visible:outline-none"
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
