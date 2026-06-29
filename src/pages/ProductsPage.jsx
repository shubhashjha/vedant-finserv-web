import React from 'react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/siteData';
import { createBreadcrumbSchema } from '@/utils/seo';

export default function ProductsPage() {
  return (
    <>
      <SEO
        title="Loan Products"
        path="/products"
        description="Explore Vedant Finserv loan products including home loan, business loan, loan against property, car loan, education loan, and working capital finance."
        schema={[createBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Products', href: '/products' }])]}
      />
      <PageHero eyebrow="Loan Products" title="Loan Solutions for Every Requirement" description="This page is generated from `src/data/products.json`. Add a new product object there and it appears here automatically." />
      <section className="section-shell bg-surface">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
