import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { banks } from '@/data/siteData';

export function BankLogo({ bank, compact = false }) {
  return (
    <div
      className={`group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/30 ${
        compact ? 'min-h-20' : 'min-h-24'
      }`}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-sm font-bold text-slate-500 grayscale transition duration-300 group-hover:bg-primary group-hover:text-white group-hover:grayscale-0">
        {bank.abbr.slice(0, 3)}
      </span>
      <span className="text-sm font-semibold text-slate-700 transition group-hover:text-primary">{bank.name}</span>
    </div>
  );
}

export default function BankLogoSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      speed={3800}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      slidesPerView={1.3}
      spaceBetween={16}
      breakpoints={{
        520: { slidesPerView: 2.2 },
        768: { slidesPerView: 3.2 },
        1024: { slidesPerView: 4.2 },
        1280: { slidesPerView: 5.2 },
      }}
      className="!py-2"
    >
      {[...banks, ...banks].map((bank, index) => (
        <SwiperSlide key={`${bank.name}-${index}`}>
          <BankLogo bank={bank} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
