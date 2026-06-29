import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, UserRoundCheck } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import PageHero from '@/components/common/PageHero';
import { products } from '@/data/siteData';
import { getIcon } from '@/utils/iconMap';
import { createBreadcrumbSchema, createProductSchema } from '@/utils/seo';

const benefits = ['Competitive lender options', 'Transparent eligibility guidance', 'Fast application coordination', 'Support until disbursement'];
const eligibility = ['Indian resident applicant', 'Stable income source', 'Valid KYC documents', 'Credit profile as per lender policy'];
const documents = ['PAN card and Aadhaar card', 'Address proof', 'Income proof or financials', 'Bank statements', 'Property or asset papers where applicable'];

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <>
        <SEO title="Product Not Found" path={`/products/${slug || ''}`} />
        <PageHero title="Product Not Found" description="The loan product you are looking for is not available." />
        <section className="section-shell bg-surface">
          <div className="container-shell">
            <Button as={Link} to="/products">
              View Products
            </Button>
          </div>
        </section>
      </>
    );
  }

  const openForm = () => window.open(product.googleForm, '_blank', 'noopener,noreferrer');

  return (
    <>
      <SEO
        title={product.title}
        path={`/products/${product.slug}`}
        description={product.description}
        keywords={`${product.title}, Vedant Finserv, loan application, loan consultant India`}
        schema={[
          createProductSchema(product),
          createBreadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Products', href: '/products' },
            { name: product.title, href: `/products/${product.slug}` },
          ]),
        ]}
      />
      <PageHero eyebrow="Loan Product" title={product.title} description={product.description}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="button" onClick={openForm}>
            Apply Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button as={Link} to="/contact" variant="secondary">
            Speak to Advisor
          </Button>
        </div>
      </PageHero>

      <section className="section-shell bg-surface">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
            <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary">{getIcon(product.icon, 'h-7 w-7')}</span>
            <h2 className="mt-5 text-xl font-bold text-dark">{product.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
            <Button type="button" onClick={openForm} className="mt-6 w-full">
              Apply Now
            </Button>
          </aside>

          <div className="grid gap-5">
            <InfoBlock icon={ShieldCheck} title="Benefits" items={benefits} />
            <InfoBlock icon={UserRoundCheck} title="Eligibility" items={eligibility} />
            <InfoBlock icon={FileText} title="Documents Required" items={documents} />
            <InfoBlock icon={CheckCircle2} title="Features" items={product.features} />
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 text-white">
        <div className="container-shell flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Ready to Apply</p>
            <h2 className="mt-2 text-2xl font-bold">Start your {product.title} application.</h2>
          </div>
          <Button type="button" onClick={openForm} className="bg-white text-primary hover:bg-slate-100">
            Open Google Form
          </Button>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ icon: Icon, title, items }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-lg font-bold text-dark">{title}</h2>
      </div>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-slate-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
