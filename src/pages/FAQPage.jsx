import React from 'react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import FAQAccordion from '@/components/faq/FAQAccordion';
import { faqs } from '@/data/siteData';
import { createBreadcrumbSchema, createFaqSchema } from '@/utils/seo';

export default function FAQPage() {
  return (
    <>
      <SEO
        title="FAQ"
        path="/faq"
        description="Frequently asked questions about documents, approval time, self-employed eligibility, balance transfer, CIBIL score, and online loan applications."
        schema={[
          createFaqSchema(faqs),
          createBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'FAQ', href: '/faq' }]),
        ]}
      />
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" description="Clear answers to common questions before applying for a loan." />
      <section className="section-shell bg-surface">
        <div className="container-shell max-w-4xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
