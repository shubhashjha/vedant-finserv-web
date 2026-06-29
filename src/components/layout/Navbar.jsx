import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { products, siteConfig } from '@/data/siteData';
import Button from '@/components/common/Button';
import { cn } from '@/components/common/cn';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products', dropdown: true },
  { label: 'Brands', href: '/brands-who-trust-us' },
  { label: 'Steps', href: '/loan-approval-steps' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 ring-focus" aria-label="Vedant Finserv home">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-lg font-bold text-white shadow-glow">V</span>
      <span className="leading-tight">
        <span className="block text-base font-bold text-dark">{siteConfig.companyName}</span>
        <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-primary">Finserv</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const featuredNavProducts = useMemo(() => products.slice(0, 8), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition duration-300',
        scrolled ? 'border-b border-slate-200/80 bg-white/90 nav-blur shadow-sm' : 'bg-white/70 nav-blur',
      )}
    >
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold transition ring-focus',
                      isActive ? 'text-primary' : 'text-slate-700 hover:bg-slate-100 hover:text-primary',
                    )
                  }
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </NavLink>
                <AnimatePresence>
                  {productsOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full mt-2 w-[520px] rounded-xl border border-slate-200 bg-white p-3 shadow-lift"
                    >
                      <div className="grid grid-cols-2 gap-1">
                        {featuredNavProducts.map((product) => (
                          <Link
                            key={product.slug}
                            to={`/products/${product.slug}`}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-primary"
                          >
                            {product.title}
                          </Link>
                        ))}
                      </div>
                      <Link to="/products" className="mt-2 block rounded-lg bg-primary/5 px-3 py-2 text-sm font-semibold text-primary">
                        View all loan products
                      </Link>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-3 py-2 text-sm font-semibold transition ring-focus',
                    isActive ? 'text-primary' : 'text-slate-700 hover:bg-slate-100 hover:text-primary',
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${siteConfig.phoneDigits}`} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 ring-focus">
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <Button as={Link} to="/contact" className="px-4 py-2.5">
            Apply Now
          </Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm ring-focus lg:hidden"
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div className="fixed inset-0 z-50 bg-dark/40 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="ml-auto h-full w-full max-w-sm overflow-y-auto bg-white p-5 shadow-lift"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 ring-focus"
                  aria-label="Close navigation menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-8 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Loan Products</p>
                <div className="mt-3 grid gap-1">
                  {products.slice(0, 10).map((product) => (
                    <Link
                      key={product.slug}
                      to={`/products/${product.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-2 py-2 text-sm text-slate-700 hover:bg-white hover:text-primary"
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Button as={Link} to="/contact" onClick={() => setMobileOpen(false)} className="mt-6 w-full">
                Apply Now
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
