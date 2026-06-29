import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/siteData';

export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop
      autoplay={{ delay: 3600, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="testimonial-swiper !pb-12"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id} className="h-auto">
          <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex gap-1 text-accent" aria-label={`${testimonial.rating} star rating`}>
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">"{testimonial.quote}"</p>
            <div className="mt-6 border-t border-slate-100 pt-4">
              <p className="font-bold text-dark">{testimonial.name}</p>
              <p className="mt-1 text-sm text-slate-500">
                {testimonial.role}, {testimonial.location}
              </p>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
