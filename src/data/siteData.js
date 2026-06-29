import siteConfig from './siteConfig.json';
import products from './products.json';
import banks from './banks.json';
import testimonials from './testimonials.json';
import faqs from './faq.json';

export { siteConfig, products, banks, testimonials, faqs };

export const featuredProducts = products.slice(0, 6);
export const featuredTestimonials = testimonials.slice(0, 3);
export const featuredFaqs = faqs.slice(0, 4);

