import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Button from '@/components/common/Button';
import { getIcon } from '@/utils/iconMap';

export default function ProductCard({ product, index = 0 }) {
  const openForm = (event) => {
    event.preventDefault();
    window.open(product.googleForm, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2) }}
      whileHover={{ y: -6 }}
      className="card-surface group flex h-full flex-col rounded-xl p-5 hover:border-primary/30 hover:shadow-lift"
    >
      <Link to={`/products/${product.slug}`} className="flex flex-1 flex-col ring-focus">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
            {getIcon(product.icon, 'h-6 w-6')}
          </span>
          <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:text-primary" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-lg font-bold text-dark">{product.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
        <ul className="mt-4 space-y-2">
          {product.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-secondary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </Link>
      <Button type="button" onClick={openForm} className="mt-6 w-full py-2.5">
        Apply Now
      </Button>
    </motion.article>
  );
}
