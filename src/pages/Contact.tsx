import { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
} from 'lucide-react';

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

export default function Contact() {
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

  return (
    <>
      <Helmet>
        <title>Contact Amrut Sugar — Enquiries, Bulk Orders & Distributors</title>
        <meta
          name="description"
          content="Contact Amrut Sugar for product enquiries, bulk orders, distributor partnerships, and general questions. Reach us by phone, email, or visit our Kopargaon office."
        />
      </Helmet>

      <section
        className="relative overflow-hidden"
        aria-labelledby="contact-hero-heading"
      >
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-light/40 via-cream to-cream"
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-20 lg:pb-16">
          <div className="flex flex-col gap-4 max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-deep">
              Contact
            </p>
            <h1
              id="contact-hero-heading"
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-ink leading-[1.05]"
            >
              We\u2019d love to
              <br className="hidden sm:block" />
              <span className="text-teal-deep">hear from you.</span>
            </h1>
            <p className="text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl">
              Product question, bulk order, distributor partnership, or just a
              quick hello — send us a note and our team will get back soon.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-form-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 lg:pb-24"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="bg-white ring-1 ring-ink/5 p-6 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-start gap-5 py-10">
                  <div className="w-14 h-14 bg-teal-light text-teal-deep flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                      Thank you, {form.name.split(' ')[0] || 'friend'}!
                    </h2>
                    <p className="text-base text-ink/70 leading-relaxed max-w-md">
                      Your message has been received. We\u2019ll get back to you
                      at{' '}
                      <span className="font-medium text-teal-deep">
                        {form.email}
                      </span>{' '}
                      within two business days.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(INITIAL_FORM);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-teal-deep ring-1 ring-teal-deep/20 hover:bg-teal-light/50 transition-colors duration-400 ease-cinematic focus-visible:outline-none"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <h2
                    id="contact-form-heading"
                    className="text-2xl sm:text-3xl font-bold tracking-tight text-ink"
                  >
                    Send us a message
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
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
                        className={`w-full px-4 py-3 bg-cream text-ink text-base ring-1 transition-all duration-300 ease-cinematic placeholder:text-ink/40 focus:outline-none ${
                          errors.name
                            ? 'ring-red-400/60 focus:ring-red-400'
                            : 'ring-ink/10 focus:ring-teal-deep'
                        }`}
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

                    <div className="flex flex-col gap-2">
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
                        className={`w-full px-4 py-3 bg-cream text-ink text-base ring-1 transition-all duration-300 ease-cinematic placeholder:text-ink/40 focus:outline-none ${
                          errors.email
                            ? 'ring-red-400/60 focus:ring-red-400'
                            : 'ring-ink/10 focus:ring-teal-deep'
                        }`}
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

                  <div className="flex flex-col gap-2">
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
                    >
                      {ENQUIRY_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
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

                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-teal-deep text-cream text-sm font-semibold tracking-tight hover:bg-teal-deep/92 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-500 ease-cinematic focus-visible:outline-none"
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
                </form>
              )}
            </div>
          </div>

          <aside
            aria-labelledby="contact-details-heading"
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <h2
              id="contact-details-heading"
              className="sr-only"
            >
              Contact details
            </h2>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-4 bg-white p-5 ring-1 ring-ink/5">
                <span className="inline-flex items-center justify-center w-10 h-10 flex-shrink-0 bg-teal-light text-teal-deep">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-ink/50">
                    Office
                  </p>
                  <p className="text-base text-ink leading-relaxed">
                    Sahakar Maharishi Shankarrao Kohle
                    <br />
                    Sahakari Sakhar Karkhana Ltd.
                    <br />
                    Kopargaon, Ahmednagar,
                    <br />
                    Maharashtra 423601
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 bg-white p-5 ring-1 ring-ink/5">
                <span className="inline-flex items-center justify-center w-10 h-10 flex-shrink-0 bg-gold-light text-gold">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-ink/50">
                    Phone
                  </p>
                  <a
                    href="tel:+912423222222"
                    className="text-base text-ink hover:text-teal-deep transition-colors focus-visible:outline-none"
                  >
                    +91 2423 222 222
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 bg-white p-5 ring-1 ring-ink/5">
                <span className="inline-flex items-center justify-center w-10 h-10 flex-shrink-0 bg-jaggery-light text-jaggery">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-ink/50">
                    Email
                  </p>
                  <a
                    href="mailto:info@amrutsugar.in"
                    className="text-base text-ink hover:text-teal-deep transition-colors break-all focus-visible:outline-none"
                  >
                    info@amrutsugar.in
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 bg-white p-5 ring-1 ring-ink/5">
                <span className="inline-flex items-center justify-center w-10 h-10 flex-shrink-0 bg-teal-light text-teal-deep">
                  <Globe className="w-5 h-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-ink/50">
                    Website
                  </p>
                  <a
                    href="https://www.amrutsugar.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-ink hover:text-teal-deep transition-colors focus-visible:outline-none"
                  >
                    www.amrutsugar.in
                  </a>
                </div>
              </li>
            </ul>

            <div className="bg-teal-deep text-cream p-5 sm:p-6 flex flex-col gap-4">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-cream/70">
                Follow us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Amrut Sugar on Facebook"
                  className="inline-flex items-center justify-center w-10 h-10 bg-cream/10 hover:bg-cream/20 text-cream transition-colors duration-400 ease-cinematic focus-visible:outline-none"
                >
                  <SocialIcon brand="f" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Amrut Sugar on Instagram"
                  className="inline-flex items-center justify-center w-10 h-10 bg-cream/10 hover:bg-cream/20 text-cream transition-colors duration-400 ease-cinematic focus-visible:outline-none"
                >
                  <SocialIcon brand="ig" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Amrut Sugar on Twitter"
                  className="inline-flex items-center justify-center w-10 h-10 bg-cream/10 hover:bg-cream/20 text-cream transition-colors duration-400 ease-cinematic focus-visible:outline-none"
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
