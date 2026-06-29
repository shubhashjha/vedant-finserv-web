import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, IndianRupee, Landmark, ShieldCheck } from 'lucide-react';

export default function HeroIllustration() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-xl border border-white/70 bg-white/65 p-5 shadow-lift backdrop-blur-md">
      <svg className="absolute inset-x-0 bottom-0 h-40 w-full" viewBox="0 0 640 180" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 100C100 52 185 132 290 82C400 30 505 48 640 16V180H0V100Z" fill="#E5F7F0" />
        <path d="M0 128C104 78 190 152 300 108C412 64 510 82 640 48V180H0V128Z" fill="#D7F1E7" />
      </svg>

      <motion.div
        initial={{ y: 10 }}
        animate={{ y: [10, 0, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-8 top-8 grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent"
      >
        <IndianRupee className="h-7 w-7" aria-hidden="true" />
      </motion.div>

      <div className="relative z-10 grid gap-4">
        <div className="w-52 rounded-xl bg-primary p-5 text-white shadow-glow">
          <div className="flex items-center justify-between">
            <Landmark className="h-7 w-7" aria-hidden="true" />
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">Approved</span>
          </div>
          <p className="mt-8 text-xs text-white/70">Loan Sanction</p>
          <p className="mt-1 text-2xl font-bold">INR 48L</p>
        </div>

        <div className="ml-auto w-60 rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/12 text-primary">
              <BarChart3 className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-dark">Rate Comparison</p>
              <p className="text-xs text-slate-500">15+ banking partners</p>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            <div className="h-2 w-full rounded-full bg-slate-100">
              <motion.div className="h-full rounded-full bg-primary" initial={{ width: 0 }} animate={{ width: '76%' }} transition={{ duration: 1 }} />
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100">
              <motion.div className="h-full rounded-full bg-secondary" initial={{ width: 0 }} animate={{ width: '64%' }} transition={{ duration: 1, delay: 0.2 }} />
            </div>
          </div>
        </div>

        <div className="mt-4 w-56 rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-dark">Transparent Guidance</p>
              <p className="text-xs text-slate-500">No hidden process</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
