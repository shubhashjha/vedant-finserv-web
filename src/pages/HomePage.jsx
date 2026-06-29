import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BadgePercent, Clock3, FileCheck2, Globe2, Handshake, ShieldCheck, UserCheck } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import SectionHeading from '@/components/common/SectionHeading';
import ProductCard from '@/components/products/ProductCard';
import BankLogoSlider from '@/components/sliders/BankLogoSlider';
import TestimonialSlider from '@/components/sliders/TestimonialSlider';
import FAQAccordion from '@/components/faq/FAQAccordion';
import LoanTimeline from '@/components/timeline/LoanTimeline';
import HeroIllustration from '@/components/home/HeroIllustration';
import { featuredFaqs, featuredProducts } from '@/data/siteData';
import { createFaqSchema } from '@/utils/seo';

const reasons = [
  ['Quick Approval', Clock3, 'Faster file movement through correct lender matching and clean documentation.'],
  ['Lowest Interest', BadgePercent, 'Compare suitable lending options before choosing the right offer.'],
  ['Expert Guidance', UserCheck, 'Practical support from eligibility check to sanction and disbursement.'],
  ['100% Transparency', ShieldCheck, 'Clear communication on process, documents, charges, and status.'],
  ['Doorstep Service', Handshake, 'Convenient support for document collection and application coordination.'],
  ['PAN India Service', Globe2, 'Loan assistance across major cities and serviceable locations in India.'],
];

export default function HomePage() {
  return (
    <>
      <SEO
        title="Trusted Financial Partner"
        path="/"
        schema={[createFaqSchema(featuredFaqs)]}
        description="Vedant Finserv helps customers compare and apply for loans with fast approval, low interest options, minimal documentation, and trusted banking partners."
      />
      <section className="relative overflow-hidden bg-white pt-24">
        <div className="absolute inset-0 finance-grid opacity-80" aria-hidden="true" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-28 bg-primary/5"
          style={{ clipPath: 'polygon(0 35%, 100% 0, 100% 100%, 0 100%)' }}
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        />
        <div className="container-shell relative grid min-h-[680px] items-center gap-10 py-16 lg:grid-cols-[1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="muted-label">Vedant Finserv</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-normal text-dark sm:text-5xl lg:text-6xl">
              Your Trusted Financial Partner
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Fast loan approval, lowest available interest options, minimal documentation, and guidance through trusted banking partners.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to="/contact">
                Apply Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button as={Link} to="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Fast Loan Approval', 'Lowest Interest Rate', 'Minimal Documentation', 'Trusted Banking Partners'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <FileCheck2 className="h-4 w-4 text-secondary" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <HeroIllustration />
        </div>
      </section>

      <section className="section-shell bg-surface">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose Vedant Finserv"
            description="A practical, transparent process built for customers who want clarity before committing to a financial product."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([title, Icon, copy], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition hover:border-primary/30 hover:shadow-lift"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-dark">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading align="left" eyebrow="Loan Products" title="Our Loan Products" description="Product cards are generated from `src/data/products.json`." />
            <Button as={Link} to="/products" variant="secondary">
              View All Products
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-surface">
        <div className="container-shell">
          <SectionHeading eyebrow="Process" title="How It Works" description="A clear loan approval journey from eligibility review to final disbursement." />
          <div className="mt-12">
            <LoanTimeline steps={['Eligibility', 'Compare', 'Apply', 'Loan Disbursement']} compact />
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Partners" title="Trusted Banking Partners" description="We work with banks and NBFCs across major loan categories." />
          <div className="mt-10">
            <BankLogoSlider />
          </div>
        </div>
      </section>

      <section className="section-shell bg-surface">
        <div className="container-shell">
          <SectionHeading eyebrow="Testimonials" title="Client Experiences" description="Professional support through product comparison, application, and disbursement." />
          <div className="mt-10">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <SectionHeading align="left" eyebrow="FAQ" title="Common Questions" description="Quick answers before starting your loan application." />
          <div>
            <FAQAccordion items={featuredFaqs} />
            <Button as={Link} to="/faq" variant="secondary" className="mt-6">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
