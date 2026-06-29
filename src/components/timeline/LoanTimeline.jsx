import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const defaultSteps = ['Eligibility', 'Compare', 'Apply', 'Approval', 'Disbursement'];

export default function LoanTimeline({ steps = defaultSteps, compact = false }) {
  return (
    <div className="relative mx-auto max-w-5xl">
      <svg className="absolute left-1/2 top-10 hidden h-[calc(100%-80px)] w-8 -translate-x-1/2 md:block" viewBox="0 0 32 760" fill="none" aria-hidden="true" preserveAspectRatio="none">
        <motion.path
          d="M16 0 C4 90 28 150 16 230 C4 315 28 390 16 470 C4 560 28 640 16 760"
          stroke="#D7E8E1"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <motion.path
          d="M16 0 C4 90 28 150 16 230 C4 315 28 390 16 470 C4 560 28 640 16 760"
          stroke="#0B6E4F"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
      </svg>

      <div className={compact ? 'space-y-5 md:space-y-8' : 'space-y-6 md:space-y-10'}>
        {steps.map((step, index) => {
          const left = index % 2 === 0;
          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative grid items-center gap-4 md:grid-cols-[1fr_72px_1fr] ${compact ? '' : 'min-h-28'}`}
            >
              <div className={left ? 'md:col-start-1 md:text-right' : 'md:col-start-3'}>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Step {index + 1}</p>
                  <h3 className="mt-2 text-lg font-bold text-dark">{step}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {timelineCopy[step] || 'A clear, guided step handled with transparent communication.'}
                  </p>
                </div>
              </div>
              <div className="relative order-first grid place-items-center md:order-none md:col-start-2">
                <span className="grid h-14 w-14 place-items-center rounded-full border-4 border-white bg-primary text-white shadow-glow">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className={left ? 'hidden md:block md:col-start-3' : 'hidden md:block md:col-start-1'} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

const timelineCopy = {
  Eligibility: 'We review your profile, income, credit history, and loan requirement.',
  Compare: 'Relevant lenders and offers are compared for rate, tenure, charges, and fit.',
  Apply: 'Your application and documents are submitted with accurate lender formatting.',
  Approval: 'The lender evaluates the case and issues sanction subject to policy checks.',
  'Loan Disbursement': 'Funds are released after final verification and documentation.',
  Disbursement: 'Funds are released after final verification and documentation.',
};
