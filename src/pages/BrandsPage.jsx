import React from 'react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import { BankLogo } from '@/components/sliders/BankLogoSlider';
import { banks } from '@/data/siteData';
import { createBreadcrumbSchema } from '@/utils/seo';

export default function BrandsPage() {
  return (
    <>
      <SEO
        title="Brands Who Trust Us"
        path="/brands-who-trust-us"
        description="Banks and finance brands associated with Vedant Finserv loan advisory services."
        schema={[createBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Brands Who Trust Us', href: '/brands-who-trust-us' }])]}
      />
      <PageHero eyebrow="Banking Partners" title="Brands Who Trust Us" description="A responsive partner grid with clean logo treatment and grayscale hover transition." />
      <section className="section-shell bg-surface">
        <div className="container-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {banks.map((bank) => (
              <BankLogo key={bank.name} bank={bank} compact />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
