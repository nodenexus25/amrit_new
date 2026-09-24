import { useEffect, useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  Clock,
  Users,
  Truck,
  ExternalLink,
  Heart
} from 'lucide-react';

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

function SocialIcon({ brand }: { brand: 'f' | 'ig' | 'x' }) {
  const map: Record<string, string> = { f: 'f', ig: 'IG', x: 'X' };
  return (
    <span
      className="inline-flex items-center justify-center w-full h-full font-bold text-[13px] tracking-tight"
      aria-hidden="true"
    >
      {map[brand]}
    </span>
  );
}

type EnquiryType =
  | 'product'
  | 'bulk'
  | 'distributor'
  | 'general';

const ENQUIRY_OPTIONS: { id: EnquiryType; label: string }[] = [
  { id: 'product', label: 'Product Enquiry' },
  { id: 'bulk', label: 'Bulk Order' },
  { id: 'distributor', label: 'Distributor Enquiry' },
  { id: 'general', label: 'General' },
];

interface FormState {
  name: string;
  email: string;
  enquiryType: EnquiryType;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  enquiryType: 'product',
  message: '',
};

const CONTACT_CARDS = [
  {
    id: 'address',
    tint: 'bg-teal-light text-teal-deep',
    Icon: MapPin,
    label: 'Office',
    content: (
      <p className="text-base text-ink leading-relaxed">
        Sahakar Maharishi Shankarrao Kohle
        <br />
        Sahakari Sakhar Karkhana Ltd.
        <br />
        Kopargaon, Ahmednagar,
        <br />
        Maharashtra 423601
      </p>
    ),
  },
  {
    id: 'phone',
    tint: 'bg-gold-light text-gold',
    Icon: Phone,
    label: 'Phone',
    content: (
      <a
        href="tel:+912423222222"
        className="text-base text-ink hover:text-teal-deep transition-colors focus-visible:outline-none"
      >
        +91 2423 222 222
      </a>
    ),
  },
  {
    id: 'email',
    tint: 'bg-jaggery-light text-jaggery',
    Icon: Mail,
    label: 'Email',
    content: (
      <a
        href="mailto:info@amrutsugar.in"
        className="text-base text-ink hover:text-teal-deep transition-colors break-all focus-visible:outline-none"
      >
        info@amrutsugar.in
      </a>
    ),
  },
  {
    id: 'website',
    tint: 'bg-teal-light text-teal-deep',
    Icon: Globe,
    label: 'Website',
    content: (
      <a
        href="https://www.amrutsugar.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-base text-ink hover:text-teal-deep transition-colors focus-visible:outline-none"
      >
        www.amrutsugar.in
      </a>
    ),
  },
];

const OFFICE_HOURS = [
  { d: 'Monday – Friday', t: '9:00 AM — 6:30 PM' },
  { d: 'Saturday', t: '9:30 AM — 4:00 PM' },
  { d: 'Sunday', t: 'Closed (Emergencies by call)' },
];

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): Partial<Record<keyof FormState, string>> => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    else if (form.name.trim().length < 2) e.name = 'Name is too short.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Please enter a valid email address.';
    if (!form.message.trim()) e.message = 'Please enter your message.';
    else if (form.message.trim().length < 10)
      e.message = 'Please enter at least 10 characters.';
    return e;
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) {
      setErrors((e) => {
        const { [key]: _removed, ...rest } = e;
        return rest;
      });
    }
  };

  const inputStyle = (hasErr: boolean) =>
    `w-full px-4 py-3 bg-cream text-ink text-base ring-1 transition-all duration-300 ease-cinematic placeholder:text-ink/40 focus:outline-none ${
      hasErr
        ? 'ring-red-400/60 focus:ring-red-400'
        : 'ring-ink/10 focus:ring-teal-deep'
    }`;

  return (
    <>
      <Helmet>
        <title>Contact Us — Amrut Sugar · Khaas Wali Mithaas!</title>
        <meta
          name="description"
          content="Contact Amrut Sugar — Khaas Wali Mithaas! For product enquiries, bulk orders, distributor partnerships, and general questions. Reach us by phone, email, or visit our Kopargaon office."
        />
      </Helmet>

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="contact-hero-heading"
      >
        <img
          src="/bg1.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.22] mix-blend-multiply pointer-events-none select-none"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-gold-light/25 via-cream/92 to-cream pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-20 pointer-events-none opacity-[0.50] mix-blend-multiply"
          aria-hidden="true"
          style={{
            backgroundImage: 'url(/bg.png)',
            backgroundSize: '420px 420px',
            backgroundPosition: '0 0',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute top-[10%] left-[-6%] w-[340px] h-[340px] rounded-full bg-teal-light/50 blur-3xl opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-[-12%] right-[-6%] w-[440px] h-[440px] rounded-full bg-gold-light/60 blur-3xl opacity-60 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[min(1100px,92vw)] h-[260px] rounded-full pointer-events-none opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(199,149,75,0.24), rgba(199,149,75,0))' }}
          aria-hidden="true"
        />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-24 relative">
          <div className="flex flex-col gap-4 max-w-3xl reveal-hidden-left">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/85 ring-1 ring-ink/8 backdrop-blur-sm text-[11px] font-bold tracking-[0.18em] uppercase text-teal-deep animate-fade-down" style={{ borderRadius: '999px' }}>
                <Heart className="w-3.5 h-3.5 text-gold" />
                Get in Touch
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-deep/90 ring-1 ring-teal-deep/30 backdrop-blur-sm text-[11px] font-bold tracking-[0.18em] uppercase text-cream animate-fade-down delay-75" style={{ borderRadius: '999px' }}>
                Khaas Wali Mithaas!
              </span>
            </div>
            <h1
              id="contact-hero-heading"
              className="text-4xl sm:text-5xl lg:text-[66px] font-extrabold tracking-[-0.02em] text-ink leading-[1.03] animate-fade-up delay-100"
            >
              Talk, email, or walk in.
              <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-deep via-gold to-jaggery">
                The Amrut door is always open.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl animate-fade-up delay-200">
              Product question, bulk order, distributor partnership, or just a quick hello —
              send us a note, give us a ring, or drop by the mill. Our team will get back soon.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 animate-fade-up delay-300">
              {[
                { label: 'Mon–Sat', sub: 'Mill hours', Icon: Clock, tint: 'bg-teal-light/90 text-teal-deep' },
                { label: 'Same day', sub: 'Enquiry reply', Icon: Users, tint: 'bg-gold-light/90 text-gold' },
                { label: 'Pan-India', sub: 'Delivery', Icon: Truck, tint: 'bg-jaggery-light/90 text-jaggery' },
                { label: 'MD desk', sub: 'Always reachable', Icon: Phone, tint: 'bg-teal-light/90 text-teal-deep' },
              ].map((s) => {
                const SC = s.Icon;
                return (
                  <div key={s.label} className="group flex items-center gap-3 p-3 sm:p-3.5 bg-white/90 ring-1 ring-ink/8 shine-wrap hover:ring-teal-deep/25 hover:-translate-y-1 transition-all duration-600 ease-cinematic" style={{ borderRadius: '16px' }}>
                    <span className={`inline-flex items-center justify-center w-10 h-10 shrink-0 ${s.tint} animate-float-medium`} style={{ borderRadius: '12px' }}>
                      <SC className="w-5 h-5" />
                    </span>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <p className="text-sm font-extrabold tracking-tight text-ink leading-tight truncate">
                        {s.label}
                      </p>
                      <p className="text-[11px] text-ink/60 leading-tight truncate">
                        {s.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FORM + CONTACTS + MAP */}
      <section
        aria-labelledby="contact-form-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 lg:pb-24"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT: form card */}
          <div className="lg:col-span-7 reveal-hidden-left order-2 lg:order-1">
            <div className="bg-white/95 ring-1 ring-ink/6 p-6 sm:p-8 lg:p-10 shine-wrap hover:-translate-y-1 transition-all duration-600 ease-cinematic relative overflow-hidden" style={{ borderRadius: '24px', boxShadow: '0 22px 60px rgba(31,92,74,0.08)' }}>
              <div className="absolute -top-20 -right-16 w-64 h-64 rounded-full bg-teal-light/40 blur-3xl opacity-70 pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-gold-light/45 blur-3xl opacity-70 pointer-events-none" aria-hidden="true" />

              {submitted ? (
                <div className="relative flex flex-col items-start gap-5 py-10 animate-pop-in">
                  <div className="w-14 h-14 bg-teal-light text-teal-deep flex items-center justify-center animate-float-medium ring-2 ring-white shadow-[0_10px_22px_rgba(31,92,74,0.16)]" style={{ borderRadius: '18px' }}>
                    <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-2 reveal-hidden-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                      Thank you, {form.name.split(' ')[0] || 'friend'}!
                    </h2>
                    <p className="text-base text-ink/70 leading-relaxed max-w-md">
                      Your message has been received. We&rsquo;ll get back to you at{' '}
                      <span className="font-semibold text-teal-deep">
                        {form.email}
                      </span>{' '}
                      within two business days.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm(INITIAL_FORM);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-teal-deep ring-1 ring-teal-deep/20 hover:bg-teal-light/60 transition-all duration-500 ease-cinematic focus-visible:outline-none shine-wrap"
                      style={{ borderRadius: '999px' }}
                    >
                      Send another message
                    </button>
                    <a
                      href="tel:+912423222222"
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-teal-deep text-cream hover:bg-teal-deep/92 transition-all duration-500 ease-cinematic focus-visible:outline-none shine-wrap"
                      style={{ borderRadius: '999px' }}
                    >
                      <Phone className="w-4 h-4" />
                      Call us now
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-5">
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-teal-deep/80">
                        Enquiry Form
                      </p>
                      <h2
                        id="contact-form-heading"
                        className="text-2xl sm:text-3xl font-extrabold tracking-[-0.01em] text-ink leading-tight"
                      >
                        Send us a message
                      </h2>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 bg-cream ring-1 ring-ink/8 text-[11px] font-semibold tracking-tight text-ink/70" style={{ borderRadius: '999px' }}>
                      <span className="w-2 h-2 rounded-full bg-teal-deep animate-pulse-soft" />
                      We reply within 24 hours
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2 reveal-hidden">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-ink tracking-tight"
                      >
                        Your name
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setField('name', e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={inputStyle(!!errors.name)}
                        style={{ borderRadius: '14px' }}
                        placeholder="e.g. Priya Deshmukh"
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-xs text-red-600 tracking-tight"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 reveal-hidden delay-100">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-ink tracking-tight"
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setField('email', e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={inputStyle(!!errors.email)}
                        style={{ borderRadius: '14px' }}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-xs text-red-600 tracking-tight"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 reveal-hidden delay-200">
                    <label
                      htmlFor="enquiryType"
                      className="text-sm font-semibold text-ink tracking-tight"
                    >
                      Enquiry type
                    </label>
                    <select
                      id="enquiryType"
                      value={form.enquiryType}
                      onChange={(e) =>
                        setField('enquiryType', e.target.value as EnquiryType)
                      }
                      className="w-full px-4 py-3 bg-cream text-ink text-base ring-1 ring-ink/10 focus:ring-teal-deep focus:outline-none transition-all duration-300 ease-cinematic appearance-none"
                      style={{ borderRadius: '14px' }}
                    >
                      {ENQUIRY_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 reveal-hidden delay-300">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-ink tracking-tight"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setField('message', e.target.value)}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-4 py-3 bg-cream text-ink text-base leading-relaxed ring-1 transition-all duration-300 ease-cinematic placeholder:text-ink/40 focus:outline-none resize-y ${
                        errors.message
                          ? 'ring-red-400/60 focus:ring-red-400'
                          : 'ring-ink/10 focus:ring-teal-deep'
                      }`}
                      style={{ borderRadius: '18px' }}
                      placeholder="Tell us what you need — product availability, bulk quantities, distributor terms, etc."
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-xs text-red-600 tracking-tight"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <p className="text-xs text-ink/55 leading-relaxed max-w-sm">
                      Your info stays with us — no sharing. You can call the mill office anytime at{' '}
                      <a href="tel:+912423222222" className="font-semibold text-teal-deep hover:underline underline-offset-2">
                        +91 2423 222 222
                      </a>
                      .
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-teal-deep via-teal-deep to-emerald-700 text-cream text-sm font-semibold tracking-tight ring-1 ring-teal-deep/20 shadow-[0_14px_32px_rgba(31,92,74,0.22)] hover:brightness-[1.04] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-500 ease-cinematic focus-visible:outline-none shine-wrap"
                      style={{ borderRadius: '999px' }}
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-cream/40 border-t-cream animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <Send className="w-4 h-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: contacts + map */}
          <aside
            aria-labelledby="contact-details-heading"
            className="lg:col-span-5 flex flex-col gap-5 reveal-hidden-right order-1 lg:order-2"
          >
            <h2
              id="contact-details-heading"
              className="sr-only"
            >
              Contact details & map
            </h2>

            {/* Map card */}
            <div className="group relative overflow-hidden ring-1 ring-ink/8 bg-white shine-wrap hover:-translate-y-1 transition-all duration-600 ease-cinematic" style={{ borderRadius: '22px' }}>
              <div className="relative overflow-hidden aspect-[4/3] ring-1 ring-ink/5">
                <iframe
                  title="Amrut Sugar — Kopargaon Office"
                  src="https://www.google.com/maps?q=Sahakar%20Maharishi%20Shankarrao%20Kohle%20Sahakari%20Sakhar%20Karkhana%20Kopargaon&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0 transition-transform duration-[1400ms] ease-cinematic group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" aria-hidden="true" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3.5 py-2 bg-white/95 ring-1 ring-ink/10 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.08)]" style={{ borderRadius: '999px' }}>
                  <span className="inline-flex items-center justify-center w-7 h-7 bg-teal-deep shrink-0" style={{ borderRadius: '999px' }}>
                    <MapPin className="w-4 h-4 text-cream" />
                  </span>
                  <div className="flex flex-col leading-none">
                    <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-ink/50">
                      Mill Office
                    </p>
                    <p className="text-[13px] font-extrabold tracking-tight text-ink">
                      Kopargaon, Maharashtra
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Sahakar%20Maharishi%20Shankarrao%20Kohle%20Sahakari%20Sakhar%20Karkhana%20Kopargaon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3.5 py-2 bg-ink/88 hover:bg-ink ring-1 ring-cream/10 backdrop-blur-sm text-cream text-[11px] font-bold tracking-[0.18em] uppercase shadow-[0_10px_22px_rgba(0,0,0,0.22)] focus-visible:outline-none transition-all duration-400 ease-cinematic shine-wrap"
                  style={{ borderRadius: '999px' }}
                >
                  Directions
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 sm:p-6 border-t border-ink/6 bg-gradient-to-br from-cream/80 via-white to-gold-light/25">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-gold">
                    Sahakar Maharishi Mill
                  </p>
                  <p className="text-sm font-extrabold tracking-tight text-ink truncate">
                    Kopargaon · Ahmednagar · Maharashtra 423 601
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-ink/70">
                  <Clock className="w-4 h-4 text-teal-deep shrink-0" />
                  <span className="font-semibold">Mon–Sat 9:00 – 18:30</span>
                </div>
              </div>
            </div>

            {/* Contact quick cards */}
            <ul className="grid sm:grid-cols-2 gap-3">
              {CONTACT_CARDS.map((c, idx) => {
                const IC = c.Icon;
                return (
                  <li
                    key={c.id}
                    className="flex items-start gap-4 bg-white p-4 sm:p-5 ring-1 ring-ink/8 hover:ring-teal-deep/20 transition-all duration-500 ease-cinematic shine-wrap hover:-translate-y-1 reveal-hidden-scale"
                    style={{
                      animationDelay: `${idx * 70}ms`,
                      borderRadius: '18px',
                    }}
                  >
                    <span className={`inline-flex items-center justify-center w-10 h-10 flex-shrink-0 ${c.tint} animate-float-medium`} style={{ borderRadius: '12px' }}>
                      <IC className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-ink/50">
                        {c.label}
                      </p>
                      {c.content}
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Office hours */}
            <div className="bg-gradient-to-br from-cream via-white to-teal-light/30 ring-1 ring-ink/8 p-5 sm:p-6 shine-wrap" style={{ borderRadius: '20px' }}>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-9 h-9 bg-teal-deep text-cream shrink-0" style={{ borderRadius: '12px' }}>
                    <Clock className="w-4.5 h-4.5" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-teal-deep/85">
                      Office Hours
                    </p>
                    <p className="text-sm font-extrabold tracking-tight text-ink leading-tight">
                      Visit us any working day
                    </p>
                  </div>
                </div>
              </div>
              <ul className="flex flex-col divide-y divide-ink/8">
                {OFFICE_HOURS.map((h) => (
                  <li key={h.d} className="flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0">
                    <span className="text-[13px] font-semibold tracking-tight text-ink/80">
                      {h.d}
                    </span>
                    <span className="text-[13px] text-ink/65 truncate text-right">
                      {h.t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="bg-teal-deep text-cream p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shine-wrap animate-float-slow relative overflow-hidden" style={{ borderRadius: '22px' }}>
              <div
                className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full pointer-events-none opacity-50 blur-3xl"
                style={{ background: 'radial-gradient(closest-side, rgba(255,245,225,0.30), rgba(255,245,225,0))' }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col gap-1.5">
                <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-cream/70">
                  Follow us
                </p>
                <p className="text-lg font-extrabold tracking-tight text-cream leading-tight">
                  Watch the Amrut story unfold.
                </p>
              </div>
              <div className="relative flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Amrut Sugar on Facebook"
                  className="inline-flex items-center justify-center w-11 h-11 bg-cream/10 hover:bg-cream/20 text-cream transition-all duration-400 ease-cinematic focus-visible:outline-none hover:-translate-y-0.5 shine-wrap"
                  style={{ borderRadius: '14px' }}
                >
                  <SocialIcon brand="f" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Amrut Sugar on Instagram"
                  className="inline-flex items-center justify-center w-11 h-11 bg-cream/10 hover:bg-cream/20 text-cream transition-all duration-400 ease-cinematic focus-visible:outline-none hover:-translate-y-0.5 shine-wrap"
                  style={{ borderRadius: '14px' }}
                >
                  <SocialIcon brand="ig" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Amrut Sugar on Twitter"
                  className="inline-flex items-center justify-center w-11 h-11 bg-cream/10 hover:bg-cream/20 text-cream transition-all duration-400 ease-cinematic focus-visible:outline-none hover:-translate-y-0.5 shine-wrap"
                  style={{ borderRadius: '14px' }}
                >
                  <SocialIcon brand="x" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
