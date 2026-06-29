import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow ? <p className="muted-label">{eyebrow}</p> : null}
      <h2 className="mt-3 text-2xl font-bold tracking-normal text-dark sm:text-3xl lg:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600">{description}</p> : null}
    </motion.div>
  );
}
