import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Button from '@/components/common/Button';
import { products, siteConfig } from '@/data/siteData';
import { buildWhatsAppUrl } from '@/utils/whatsapp';
import { createBreadcrumbSchema } from '@/utils/seo';

const initialValues = { name: '', phone: '', email: '', city: '', loanType: '', message: '' };

export default function ContactPage() {
  const [values, setValues] = useState(initialValues);

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    window.location.href = buildWhatsAppUrl(values);
  };

  return (
    <>
      <SEO
        title="Contact"
        path="/contact"
        description="Contact Vedant Finserv for home loan, business loan, car loan, loan against property, personal loan, and working capital loan assistance."
        schema={[createBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }])]}
      />
      <PageHero eyebrow="Contact" title="Speak to a Loan Advisor" description="Share your requirement and the contact form will open WhatsApp with your details pre-filled." />
      <section className="section-shell bg-surface">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <Info icon={MapPin} title="Office" text={`${siteConfig.addressLine1}, ${siteConfig.addressLine2}. ${siteConfig.addressLine3}`} />
            <Info icon={Phone} title="Phone" text={siteConfig.phoneDisplay} href={`tel:${siteConfig.phoneDigits}`} />
            <Info icon={Mail} title="Email" text={siteConfig.email} href={`mailto:${siteConfig.email}`} />
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-bold text-dark">Google Map</p>
              <a
                href={siteConfig.googleMapPlaceholder}
                target="_blank"
                rel="noreferrer"
                className="mt-4 grid min-h-56 place-items-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center text-sm font-semibold text-primary ring-focus"
              >
                Open map location
              </a>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" value={values.name} onChange={updateField} required />
              <Field label="Phone" name="phone" value={values.phone} onChange={updateField} required />
              <Field label="Email" type="email" name="email" value={values.email} onChange={updateField} />
              <Field label="City" name="city" value={values.city} onChange={updateField} required />
              <label className="sm:col-span-2">
                <span className="text-sm font-semibold text-slate-700">Loan Type</span>
                <select
                  name="loanType"
                  value={values.loanType}
                  onChange={updateField}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 ring-focus"
                >
                  <option value="">Select loan type</option>
                  {products.map((product) => (
                    <option key={product.slug} value={product.title}>
                      {product.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="text-sm font-semibold text-slate-700">Message</span>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={updateField}
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 ring-focus"
                  placeholder="I am interested in your loan services."
                />
              </label>
            </div>
            <Button type="submit" className="mt-6 w-full sm:w-auto">
              Submit on WhatsApp
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...props }) {
  return (
    <label>
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 ring-focus" {...props} />
    </label>
  );
}

function Info({ icon: Icon, title, text, href }) {
  const content = (
    <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <p className="font-bold text-dark">{title}</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block ring-focus">
      {content}
    </a>
  ) : (
    content
  );
}
