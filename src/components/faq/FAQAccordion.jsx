import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div key={item.question} className="rounded-xl border border-slate-200 bg-white shadow-soft">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left ring-focus"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span className="text-sm font-bold text-dark sm:text-base">{item.question}</span>
              <Plus className={`h-5 w-5 shrink-0 text-primary transition ${open ? 'rotate-45' : ''}`} aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
