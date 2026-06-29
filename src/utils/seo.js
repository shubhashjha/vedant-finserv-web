import { siteConfig } from '@/data/siteData';

export function absoluteUrl(path = '/') {
  const base = siteConfig.baseUrl.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: siteConfig.companyName,
    url: siteConfig.baseUrl,
    description: siteConfig.description,
    telephone: siteConfig.phoneDisplay,
    areaServed: 'IN',
  };
}

export function createWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.companyName,
    url: siteConfig.baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.baseUrl}/products?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function createBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function createProductSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: siteConfig.companyName,
    },
    url: absoluteUrl(`/products/${product.slug}`),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      price: '0',
    },
  };
}

export function createFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

