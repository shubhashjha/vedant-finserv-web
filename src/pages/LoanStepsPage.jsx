import React from 'react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import LoanTimeline from '@/components/timeline/LoanTimeline';
import { createBreadcrumbSchema } from '@/utils/seo';

export default function LoanStepsPage() {
  return (
    <>
      <SEO
        title="Loan Approval Steps"
        path="/loan-approval-steps"
        description="Understand the Vedant Finserv loan approval journey from eligibility check and comparison to application, approval, and disbursement."
        schema={[createBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Loan Approval Steps', href: '/loan-approval-steps' }])]}
      />
      <PageHero eyebrow="Loan Approval Steps" title="A Clear Path from Eligibility to Disbursement" description="A structured timeline designed to keep the loan process transparent and easy to track." />
      <section className="section-shell bg-surface">
        <div className="container-shell">
          <LoanTimeline steps={['Eligibility', 'Compare', 'Apply', 'Approval', 'Disbursement']} />
        </div>
      </section>
    </>
  );
}
