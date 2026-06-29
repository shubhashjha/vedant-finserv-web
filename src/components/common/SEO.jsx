import React from 'react';
import { Helmet } from 'react-helmet-async';
import { absoluteUrl, createOrganizationSchema, createWebSiteSchema } from '@/utils/seo';
import { siteConfig } from '@/data/siteData';

export default function SEO({
  title,
  description = siteConfig.description,
  path = '/',
  keywords = 'Vedant Finserv, loans in India, home loan, business loan, personal loan, loan consultant',
  schema = [],
}) {
  const pageTitle = title ? `${title} | ${siteConfig.companyName}` : siteConfig.companyName;
  const canonical = absoluteUrl(path);
  const schemas = [createOrganizationSchema(), createWebSiteSchema(), ...schema];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteUrl('/og-image.svg')} />
      <meta name="twitter:card" content="summary_large_image" />
      {schemas.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
