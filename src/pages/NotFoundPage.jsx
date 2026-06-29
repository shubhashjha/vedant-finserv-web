import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Button from '@/components/common/Button';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" />
      <PageHero title="Page Not Found" description="The page you requested does not exist." />
      <section className="section-shell bg-surface">
        <div className="container-shell">
          <Button as={Link} to="/">
            Back to Home
          </Button>
        </div>
      </section>
    </>
  );
}
