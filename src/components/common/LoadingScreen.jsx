import React from 'react';
import { siteConfig } from '@/data/siteData';

export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-soft">
        <span className="h-3 w-3 animate-pulse rounded-full bg-primary" />
        <span className="text-sm font-medium text-slate-700">{siteConfig.companyName}</span>
      </div>
    </div>
  );
}
