import api from './api';
import { ServiceData } from '@/data/servicesData';

export interface BlogPost {
  _id?: string;
  id?: string;
  slug?: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  content: string | React.ReactNode;
  author?: string;
  image?: string;
}

export interface CaseStudy {
  _id?: string;
  tag: string;
  roi: string;
  title: string;
  desc: string;
  stats: { label: string; value: string }[];
  chartHeights: number[];
  image?: string;
  link?: string;
}

export interface PackageFeature {
  name: string;
  included: boolean;
}

export interface PricingPackage {
  _id?: string;
  title: string;
  desc: string;
  price: string;
  features: PackageFeature[];
  featured: boolean;
  ctaText: string;
}

export interface CustomServiceItem {
  _id?: string;
  id: string;
  name: string;
  price: number;
  desc: string;
}

export interface ReviewItem {
  _id?: string;
  name: string;
  company: string;
  stars: number;
  text: string;
  initials: string;
}

export interface VideoTestimonial {
  _id?: string;
  id: string;
  name: string;
  company: string;
  subtitles: string[];
}

export interface FAQItem {
  _id?: string;
  q: string;
  a: string;
}

// 1. Services API
export async function getServices(): Promise<ServiceData[]> {
  try {
    const res = await api.get('/services');
    if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data;
    }
  } catch (error) {
    console.warn('Failed to fetch services from API, falling back to default static data', error);
  }
  return [];
}

export async function getServiceBySlug(slug: string): Promise<ServiceData | null> {
  try {
    const res = await api.get(`/services/${slug}`);
    if (res.data?.success && res.data.data) {
      return res.data.data;
    }
  } catch (error) {
    console.warn(`Failed to fetch service with slug ${slug} from API`, error);
  }
  return null;
}

// 2. Blogs API
export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const res = await api.get('/blogs');
    if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data;
    }
  } catch (error) {
    console.warn('Failed to fetch blogs from API', error);
  }
  return [];
}

// 3. Portfolio API
export async function getPortfolios(): Promise<CaseStudy[]> {
  try {
    const res = await api.get('/portfolio');
    if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data;
    }
  } catch (error) {
    console.warn('Failed to fetch portfolio from API', error);
  }
  return [];
}

// 4. Pricing Plans API
export async function getPricingPlans(): Promise<PricingPackage[]> {
  try {
    const res = await api.get('/pricing');
    if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data;
    }
  } catch (error) {
    console.warn('Failed to fetch pricing plans from API', error);
  }
  return [];
}

// 5. Custom Services API
export async function getCustomServices(): Promise<CustomServiceItem[]> {
  try {
    const res = await api.get('/customservices');
    if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data.map((item: any) => ({
        id: item.idName || item._id || item.id,
        name: item.name,
        price: item.price,
        desc: item.desc
      }));
    }
  } catch (error) {
    console.warn('Failed to fetch custom services from API', error);
  }
  return [];
}

// 6. Testimonials API
export async function getTestimonials(): Promise<{ textReviews: ReviewItem[]; videoReviews: VideoTestimonial[] }> {
  try {
    const res = await api.get('/testimonials');
    if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
      const textReviews: ReviewItem[] = [];
      const videoReviews: VideoTestimonial[] = [];

      res.data.data.forEach((item: any) => {
        if (item.type === 'video') {
          videoReviews.push({
            id: item._id || item.id,
            name: item.name,
            company: item.company || '',
            subtitles: item.subtitles || []
          });
        } else {
          textReviews.push({
            name: item.name,
            company: item.company || '',
            stars: item.stars || 5,
            text: item.text || '',
            initials: item.initials || item.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()
          });
        }
      });

      return { textReviews, videoReviews };
    }
  } catch (error) {
    console.warn('Failed to fetch testimonials from API', error);
  }
  return { textReviews: [], videoReviews: [] };
}

// 7. FAQs API
export async function getFaqs(): Promise<FAQItem[]> {
  try {
    const res = await api.get('/faqs');
    if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data;
    }
  } catch (error) {
    console.warn('Failed to fetch FAQs from API', error);
  }
  return [];
}

// 8. Submit Lead / Audit API
export async function submitLead(leadData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
}) {
  return await api.post('/leads', leadData);
}
