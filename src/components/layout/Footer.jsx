import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { products, siteConfig } from '@/data/siteData';
import { getIcon } from '@/utils/iconMap';

const quickLinks = [
  ['Home', '/'],
  ['Loan Products', '/products'],
  ['Brands Who Trust Us', '/brands-who-trust-us'],
  ['Approval Steps', '/loan-approval-steps'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-lg font-bold text-primary">V</span>
              <div>
                <p className="font-bold">{siteConfig.companyName}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-secondary">Financial Services</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">{siteConfig.description}</p>
            <div className="mt-5 flex gap-2">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-200 transition hover:border-secondary hover:bg-secondary hover:text-dark ring-focus"
                  aria-label={social.name}
                >
                  {getIcon(social.icon, 'h-4 w-4')}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <Link className="text-sm text-slate-300 transition hover:text-white" to={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Products</h2>
            <ul className="mt-5 grid grid-cols-1 gap-3">
              {products.slice(0, 8).map((product) => (
                <li key={product.slug}>
                  <Link className="text-sm text-slate-300 transition hover:text-white" to={`/products/${product.slug}`}>
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <span>
                  {siteConfig.addressLine1}
                  <br />
                  {siteConfig.addressLine2}
                  <br />
                  {siteConfig.addressLine3}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <a href={`tel:${siteConfig.phoneDigits}`} className="hover:text-white">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          Copyright {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
