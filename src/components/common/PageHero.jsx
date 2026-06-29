import React from 'react';
import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden bg-white pt-28">
      <div className="absolute inset-0 finance-grid opacity-70" aria-hidden="true" />
      <div className="container-shell relative pb-14 pt-10 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          {eyebrow ? <p className="muted-label">{eyebrow}</p> : null}
          <h1 className="mt-3 text-3xl font-bold tracking-normal text-dark sm:text-4xl lg:text-5xl">{title}</h1>
          {description ? <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
        </motion.div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
