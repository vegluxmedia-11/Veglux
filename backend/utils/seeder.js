const Service = require('../models/Service');
const Blog = require('../models/Blog');
const Portfolio = require('../models/Portfolio');
const PricingPlan = require('../models/PricingPlan');
const CustomService = require('../models/CustomService');
const Testimonial = require('../models/Testimonial');
const FAQ = require('../models/FAQ');

const seedInitialData = async () => {
  try {
    // 1. Seed Services if empty
    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0) {
      console.log('Seeding initial Services...');
      await Service.create([
        {
          title: 'Performance Marketing',
          slug: 'performance-marketing',
          category: 'performance',
          categoryLabel: 'Performance Marketing',
          tagline: 'Data-Driven Paid Ads Engine Engineered for Explosive ROAS',
          summary: 'Engineered campaigns to drive qualified leads, acquire customers at scale, and maximize return on ad spend using advanced data-driven media buying.',
          desc: 'Engineered campaigns to drive leads, acquire customers, and generate massive ROAS using advanced paid media strategies.',
          icon: 'trending-up',
          subservices: [
            'Meta Ads (Facebook & Instagram)',
            'Google Ads & Search Campaigns',
            'YouTube Ads & Video Targeting',
            'High-Intent Lead Generation',
            'Conversion Rate Optimization (CRO)'
          ],
          heroMetrics: [
            { label: 'Average Campaign ROAS', value: '4.5x+' },
            { label: 'High-Intent Leads', value: '150,000+' },
            { label: 'Ad Spend Managed', value: '$2.5M+' }
          ],
          overview: 'In today\'s digital landscape, vanity metrics like likes and impressions don\'t pay the bills. Performance Marketing at Veglux Media is focused entirely on measurable bottom-line growth: revenue, qualified leads, and positive Return on Ad Spend (ROAS).',
          whyItMatters: [
            'Immediate, predictable customer acquisition pipelines',
            'Full server-side tracking (Meta CAPI & GA4) for zero data loss',
            'Continuous creative iteration & multi-angle A/B testing',
            'Transparent reporting dashboards updated in real time'
          ],
          pillars: [
            {
              title: 'Meta Ads (Facebook & Instagram)',
              desc: 'Laser-targeted paid social campaigns utilizing custom audiences, lookalikes, and dynamic creative testing.',
              deliverables: [
                'Custom Audience Building & Segmented Lookalikes',
                'High-Converting Ad Creative Copies & Video Hooks',
                'Dynamic Product Ads (DPA) & Retargeting Funnels',
                'Meta Conversions API (CAPI) Integration'
              ]
            },
            {
              title: 'Google Ads & Search Campaigns',
              desc: 'Capture high-intent searches right when prospects are actively searching for your products or services.',
              deliverables: [
                'High-Intent Keyword Bidding & Negative Match Filtering',
                'Performance Max (PMax) Campaign Architecture',
                'Google Shopping Ads & Feed Optimization',
                'Search Copy & Extensions Optimization'
              ]
            }
          ],
          process: [
            { step: '01', title: 'Audit & Strategy Blueprint', desc: 'We analyze past campaign data, target demographics, competitor benchmarks, and pixel setups.' },
            { step: '02', title: 'Creative Production & Tracking', desc: 'Designing high-converting ad copy, video hooks, and CAPI server-side integration.' },
            { step: '03', title: 'Launch & Daily Scaling', desc: 'Rapid testing of hooks and audiences followed by aggressive scaling of top performers.' }
          ],
          technologies: ['Meta Ads Manager', 'Google Ads', 'Meta CAPI', 'Google Analytics 4', 'Triple Whale', 'Hyros'],
          faqs: [
            { q: 'What is the minimum ad budget required?', a: 'We recommend a testing budget starting at ₹25,000/month for performance marketing.' },
            { q: 'How fast do we see leads?', a: 'Campaigns typically launch within 48 hours and begin capturing leads immediately.' }
          ]
        },
        {
          title: 'Social Media Management',
          slug: 'social-media-management',
          category: 'social',
          categoryLabel: 'Social Media SMM',
          tagline: 'Turn Social Media Scrolls into Brand Loyalty and Organic Conversions',
          summary: 'Organic scale and community building to build brand trust and convert passive followers into paying clients.',
          desc: 'Organic scale and community building to turn social media scrolls into brand loyalty and organic customer acquisition.',
          icon: 'message-circle',
          subservices: [
            'Content Creation & Scriptwriting',
            'Post Designing & Aesthetics',
            'Reels & Short-form Video Production',
            'Monthly Structured Content Calendars',
            'Community & Audience Engagement'
          ],
          heroMetrics: [
            { label: 'Organic Views Generated', value: '12M+' },
            { label: 'Viral Reels Produced', value: '350+' },
            { label: 'Average Engagement Rate', value: '8.4%' }
          ],
          overview: 'Social media is the digital storefront of your business. We craft aesthetic post designs, trending video reels, and high-converting copy that positions your brand as an industry leader.',
          whyItMatters: [
            'Establishes immediate brand authority and social proof',
            'Captures viral short-form video reach without ad spend',
            'Directs engaged followers straight into your sales funnels'
          ],
          pillars: [
            {
              title: 'Short-Form Reels Production',
              desc: 'High-hook video concepts edited with dynamic subtitles and audio trends.',
              deliverables: ['Script writing & concepting', 'Professional editing & color grading', 'Custom thumbnail graphics']
            }
          ],
          process: [
            { step: '01', title: 'Content Calendar Blueprint', desc: 'Planning monthly themes, pillars, and post schedules.' },
            { step: '02', title: 'Asset Production & Copywriting', desc: 'Designing visuals and crafting high-converting captions.' }
          ],
          technologies: ['Premiere Pro', 'CapCut Pro', 'Figma', 'Photoshop', 'Meta Business Suite'],
          faqs: [
            { q: 'How many posts per week do you publish?', a: 'Our plans range from 3 to 6 posts per week, including dedicated Reels.' }
          ]
        },
        {
          title: 'Search Engine Optimization',
          slug: 'search-engine-optimization',
          category: 'tech',
          categoryLabel: 'SEO & Inbound Tech',
          tagline: 'Dominate Google Search Rankings & Capture High-Intent Inbound Traffic',
          summary: 'Technical audits, authority building, and content optimizations to secure top rankings on Google and capture organic sales.',
          desc: 'Technical audits, authority building, and content optimizations to secure top rankings on Google and capture inbound traffic.',
          icon: 'search',
          subservices: [
            'Keyword Research & Competitor Audit',
            'On-Page Content Architecture',
            'Technical SEO & Core Web Vitals',
            'Quality Link Acquisition',
            'Local SEO & Google Business Profile'
          ],
          heroMetrics: [
            { label: 'Top 3 Keyword Rankings', value: '450+' },
            { label: 'Organic Traffic Lift', value: '320%' },
            { label: 'Core Web Vitals Pass Rate', value: '100%' }
          ],
          overview: 'Google ranks fast, authoritative websites. We execute technical SEO optimizations and publish structured articles that turn search engines into a permanent client generation tool.',
          whyItMatters: [
            'Zero cost per click traffic that compounds over time',
            'Dominates local search intent in target regions',
            'Builds domain authority that outperforms competitors'
          ],
          pillars: [
            {
              title: 'Technical Core Web Vitals',
              desc: 'Optimizing page speed, LCP, CLS, and JS bundles to pass Google Web Vitals.',
              deliverables: ['Code auditing & image compression', 'SSR & Caching configurations']
            }
          ],
          process: [
            { step: '01', title: 'Keyword & Competitor Audit', desc: 'Identifying low-hanging fruit search terms with high purchase intent.' }
          ],
          technologies: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Screaming Frog', 'Next.js SSR'],
          faqs: [
            { q: 'How long until SEO results show?', a: 'Noticeable ranking movements usually begin within 60 to 90 days.' }
          ]
        },
        {
          title: 'Website Development',
          slug: 'website-development',
          category: 'tech',
          categoryLabel: 'Bespoke Engineering',
          tagline: 'Custom-Coded, Lightning-Fast Web Portals Built to Convert',
          summary: 'Creating visually stunning, lightning-fast web applications and e-commerce platforms optimized for conversion.',
          desc: 'Creating visually stunning, lightning-fast web applications and e-commerce platforms optimized for conversion.',
          icon: 'code',
          subservices: [
            'Next.js & React Applications',
            'Headless CMS Integrations',
            'E-Commerce & Shopify Engineering',
            'Custom APIs & Integrations',
            'Responsive, Blazing Fast Page Speeds'
          ],
          heroMetrics: [
            { label: 'Average Page Speed Score', value: '98/100' },
            { label: 'Conversion Lift', value: '+38%' },
            { label: 'Custom Systems Built', value: '60+' }
          ],
          overview: 'We design and engineer bespoke web platforms using Next.js and Tailwind/Vanilla CSS. No bloated WordPress plugins or broken themes.',
          whyItMatters: [
            'Sub-second page load times that double conversion rates',
            'Custom backend API integrations and CRM synchronizations'
          ],
          pillars: [
            {
              title: 'Next.js Frontend Architecture',
              desc: 'Modern React components built with server rendering and sleek CSS animations.',
              deliverables: ['Custom layout design', 'Mobile optimization', 'Form integrations']
            }
          ],
          process: [
            { step: '01', title: 'UX Wireframing & Design System', desc: 'Mapping user journeys and high-converting visual components.' }
          ],
          technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Express', 'Tailwind/Vanilla CSS'],
          faqs: [
            { q: 'Do you provide web hosting and maintenance?', a: 'Yes, we manage deployments on Vercel and AWS servers with 99.9% uptime.' }
          ]
        },
        {
          title: 'Branding & Identity',
          slug: 'branding-and-identity',
          category: 'branding',
          categoryLabel: 'Brand Engineering',
          tagline: 'Distinctive Visual Identity & Luxury Brand Positioning',
          summary: 'Defining your brand voice, monograms, typography, and premium positioning to command higher price points.',
          desc: 'Defining your brand\'s voice, visuals, and premium positioning to stand out in crowded competitive spaces.',
          icon: 'feather',
          subservices: [
            'Logo Design & Monograms',
            'Visual Identity Guidelines',
            'Typography & Color Palettes',
            'Creative Ad Layout Layouts',
            'Brand Guidelines & Handbooks'
          ],
          heroMetrics: [
            { label: 'Brand Guidelines Designed', value: '40+' },
            { label: 'Perceived Value Multiplier', value: '3x' }
          ],
          overview: 'Your visual identity dictates the price point customers are willing to pay. We create luxury monograms, typography systems, and brand guidelines.',
          whyItMatters: ['Commands premium market pricing', 'Instantly memorable visual presence'],
          pillars: [{ title: 'Visual Identity Suite', desc: 'Complete brand guide, color tokens, and font combinations.', deliverables: ['Vector logos', 'Brand book PDF'] }],
          process: [{ step: '01', title: 'Brand Discovery & Moodboarding', desc: 'Defining market positioning and aesthetic directions.' }],
          technologies: ['Figma', 'Illustrator', 'Photoshop'],
          faqs: [{ q: 'What deliverables are included in branding?', a: 'You receive full vector logo files, font files, color palettes, and a comprehensive Brand Guideline PDF.' }]
        },
        {
          title: 'Email Marketing',
          slug: 'email-marketing',
          category: 'performance',
          categoryLabel: 'Automated Lifecycle',
          tagline: 'Automated Drip Sequences & High-Margin Newsletter Monetization',
          summary: 'Nurturing subscribers, building brand trust, and driving automated sales backflows through smart email funnels.',
          desc: 'Nurturing subscribers, building brand trust, and driving automated sales backflows through smart drip funnels.',
          icon: 'mail',
          subservices: [
            'Newsletter Design & Copywriting',
            'Abandoned Cart Recovery Flows',
            'Welcome & Purchase Automation Sequences',
            'Audience Cohort Segmentation',
            'Deliverability Audits & Tracking'
          ],
          heroMetrics: [
            { label: 'Average Open Rate', value: '42%' },
            { label: 'Email Revenue Contribution', value: '28%' }
          ],
          overview: 'Email marketing generates higher ROI than any other channel because it owns direct relationships with past customers and warm leads.',
          whyItMatters: ['Zero ad cost repeat sales', 'Automated revenue generated 24/7'],
          pillars: [{ title: 'Automated Klaviyo & Mailchimp Flows', desc: 'Welcome series, abandoned cart, and re-engagement campaigns.', deliverables: ['Copywriting', 'HTML/CSS template design'] }],
          process: [{ step: '01', title: 'Flow Mapping & Segment Setup', desc: 'Creating triggers for customer behavior and cart drops.' }],
          technologies: ['Klaviyo', 'Mailchimp', 'Brevo'],
          faqs: [{ q: 'Can email marketing integrate with Shopify or Next.js?', a: 'Yes, we set up real-time webhooks and native integrations.' }]
        }
      ]);
      console.log('Services seeded successfully.');
    }

    // 2. Seed Blogs if empty
    const blogCount = await Blog.countDocuments();
    if (blogCount === 0) {
      console.log('Seeding initial Blogs...');
      await Blog.create([
        {
          title: '5 Copywriting Hooks That Instantly Double Click-Through Rates',
          slug: '5-copywriting-hooks-that-instantly-double-click-through-rates',
          tag: 'Marketing Tips',
          date: 'July 12, 2026',
          author: 'Veglux Admin',
          excerpt: 'Diluted hooks bleed ad budgets. Learn the direct-response formulas we deploy at Veglux to capture immediate attention.',
          content: 'In modern digital marketing, attention is the highest priced currency. The average internet user scrolls past 300 feet of content daily. If your ad\'s first line doesn\'t capture them in 1.5 seconds, you are wasting budgets.\n\n1. The Accidental Discovery Hook\nExample: "I stumbled on this Udaipur-based villa layout by mistake... now I can\'t look at standard flats anymore." This hook works because it feels organic and non-promotional.\n\n2. The Consequence First hook\nExample: "Stop wasting ₹15,000 monthly on broken Meta ad bidding algorithms." Lead with financial leakage to trigger immediate concern.\n\n3. The Contrarian Statement hook\nExample: "Why generic SEO is actually hurting your brand conversions." Challenging standard practices makes users pause and click.'
        },
        {
          title: 'Mastering Core Web Vitals for Modern Search Rankings',
          slug: 'mastering-core-web-vitals-for-modern-search-rankings',
          tag: 'SEO Guides',
          date: 'June 28, 2026',
          author: 'Veglux Tech',
          excerpt: 'Google ranks fast sites. Discover how we optimize LCP and CLS values inside Next.js to secure search dominance.',
          content: 'Google\'s ranking algorithms prioritize page experience. If your website takes more than 2.8 seconds to load, your search engine rankings will decay, regardless of keyword densities or backlinks.\n\nLargest Contentful Paint (LCP): Measures loading performance. Target under 2.5s.\nCumulative Layout Shift (CLS): Measures visual stability. Keep under 0.1.'
        },
        {
          title: 'How to Build a Structured Organic Reels Strategy in 2026',
          slug: 'how-to-build-a-structured-organic-reels-strategy-in-2026',
          tag: 'Social Media',
          date: 'May 15, 2026',
          author: 'Veglux SMM',
          excerpt: 'Viral views are useless without structured paths. Here is how we turn 60-second video hooks into actual CRM inquiries.',
          content: 'Short-form video is the quickest vehicle for organic brand exposure. However, most brands make the mistake of chasing views instead of conversion funnels.\n\n1. The Hook (0-3s)\n2. The Core Value (3-45s)\n3. The CTA (45-60s)'
        }
      ]);
      console.log('Blogs seeded successfully.');
    }

    // 3. Seed Portfolio if empty
    const portfolioCount = await Portfolio.countDocuments();
    if (portfolioCount === 0) {
      console.log('Seeding initial Portfolio...');
      await Portfolio.create([
        {
          title: 'Scaling Direct-to-Consumer Jewelry Brand',
          tag: 'E-Commerce',
          roi: '8.5x ROAS',
          desc: 'Architected a custom Meta and Google Catalog funnel to scale purchase volumes globally. Focused heavily on high-converting product hooks and post-click email flows.',
          stats: [
            { label: 'Ad Spend', value: '₹2.8L' },
            { label: 'Revenue', value: '₹23.8L' },
            { label: 'Purchase CRO', value: '+44%' }
          ],
          chartHeights: [20, 35, 60, 95]
        },
        {
          title: 'Premium Residential Villa Lead Generation',
          tag: 'Real Estate',
          roi: '7.2x ROI',
          desc: 'Developed direct-response lead generation funnels for a luxury builder in Rajasthan. Targeted high-net-worth individuals utilizing specific intent-based search filters.',
          stats: [
            { label: 'Qualified Leads', value: '340+' },
            { label: 'Cost Per Lead', value: '₹280' },
            { label: 'Bookings', value: '11 Villas' }
          ],
          chartHeights: [15, 45, 75, 90]
        }
      ]);
      console.log('Portfolio seeded successfully.');
    }

    // 4. Seed Pricing Plans if empty
    const pricingCount = await PricingPlan.countDocuments();
    if (pricingCount === 0) {
      console.log('Seeding initial Pricing Plans...');
      await PricingPlan.create([
        {
          title: 'Starter',
          desc: 'Perfect for local businesses looking to establish their online presence.',
          price: '₹25,000',
          featured: false,
          ctaText: 'Get Started',
          features: [
            { name: 'Social Media (12 Posts/mo)', included: true },
            { name: 'Google Business Optimization', included: true },
            { name: 'Basic SEO Keyword Audit', included: true },
            { name: 'Monthly Performance Report', included: true },
            { name: 'Meta & Google Ads Campaign', included: false },
            { name: 'Premium Website Development', included: false },
            { name: 'Dedicated Account Manager', included: false }
          ]
        },
        {
          title: 'Professional',
          desc: 'Accelerate leads and revenue. Our most popular scaling program.',
          price: '₹55,000',
          featured: true,
          ctaText: 'Scale My Business',
          features: [
            { name: 'Social Media (24 Posts + 8 Reels)', included: true },
            { name: 'Meta Ads (Facebook & Insta)', included: true },
            { name: 'Google Search Ads setup', included: true },
            { name: 'Full SEO Optimization & Backlinks', included: true },
            { name: 'Bi-Weekly Strategy Sync Calls', included: true },
            { name: 'Premium Website Development', included: false },
            { name: 'Dedicated Account Manager', included: true }
          ]
        },
        {
          title: 'Premium',
          desc: 'Complete digital dominance for brands looking to expand exponentially.',
          price: '₹95,000',
          featured: false,
          ctaText: 'Secure Dominance',
          features: [
            { name: 'Unlimited Content Creation & Reels', included: true },
            { name: 'Meta, Google & YouTube Ads', included: true },
            { name: 'Full-Scale SEO & PR Backlinks', included: true },
            { name: 'Next.js Custom Web Development', included: true },
            { name: 'Advanced CRO Funnel Design', included: true },
            { name: 'Weekly Executive Strategy Briefs', included: true },
            { name: 'Dedicated Director-Level Manager', included: true }
          ]
        }
      ]);
      console.log('Pricing Plans seeded successfully.');
    }

    // 5. Seed Custom Services if empty
    const customServiceCount = await CustomService.countDocuments();
    if (customServiceCount === 0) {
      console.log('Seeding initial Custom Services...');
      await CustomService.create([
        { idName: 'meta', name: 'Meta Ads Management', price: 15000, desc: 'Lead generation & Catalog sales' },
        { idName: 'google', name: 'Google & YT Ads', price: 15000, desc: 'Search intent & Video hooks' },
        { idName: 'seo', name: 'SEO Optimization', price: 20000, desc: 'On-page rank & Backlink acquisition' },
        { idName: 'smm', name: 'Social Media & Reels', price: 25000, desc: 'Content calendar & video editing' },
        { idName: 'webdev', name: 'Next.js Web Dev', price: 30000, desc: 'Bespoke custom-coded web portal' },
        { idName: 'email', name: 'Email Marketing Automation', price: 12000, desc: 'Abandoned flows & Newsletters' }
      ]);
      console.log('Custom Services seeded successfully.');
    }

    // 6. Seed Testimonials if empty
    const testimonialCount = await Testimonial.countDocuments();
    if (testimonialCount === 0) {
      console.log('Seeding initial Testimonials...');
      await Testimonial.create([
        {
          type: 'text',
          name: 'Amit Sharma',
          company: 'Rajasthan Realities',
          stars: 5,
          text: 'Veglux Media managed our campaigns for luxury villas. Their Meta ads funnels were extremely precise, driving the cost per qualified lead down to a third. Highly recommended!',
          initials: 'AS'
        },
        {
          type: 'text',
          name: 'Priyal Sen',
          company: 'Aura Luxury Fashion',
          stars: 5,
          text: 'Our Shopify conversions jumped by 44% in less than two months. The catalog setup and email retrieval automations designed by Veglux are state-of-the-art.',
          initials: 'PS'
        },
        {
          type: 'text',
          name: 'Rohit Mehta',
          company: 'Heritage Palace Resorts',
          stars: 5,
          text: 'Lucky and his team are data-driven. They don\'t report generic metrics; they report return on investment. Their local SEO optimizations put us on top of local maps.',
          initials: 'RM'
        },
        {
          type: 'video',
          name: 'Karan Singh',
          company: 'Udaipur Devs Group',
          subtitles: [
            'Hey everyone! Karan here from Udaipur Devs Group.',
            'We partnered with Veglux Media to scale our SaaS product client acquisition.',
            'In our first month itself, we observed a massive 3.2x increase in demo bookings.',
            'Their reporting dashboards are clean, and client managers are highly responsive.',
            'If you are looking to scale your B2B services, Veglux Media is the team!'
          ]
        },
        {
          type: 'video',
          name: 'Meera Vyas',
          company: 'Chai & Co. Chain',
          subtitles: [
            'Meera here from Chai & Co. We operate outlets across Rajasthan.',
            'Social media reels designed by Veglux went viral, bringing thousands of walk-ins.',
            'Their monthly content calendar is extremely structured and aligned with our brand.',
            'It feels like we have an in-house media house working for us.',
            'Outstanding content and reels management!'
          ]
        }
      ]);
      console.log('Testimonials seeded successfully.');
    }

    // 7. Seed FAQs if empty
    const faqCount = await FAQ.countDocuments();
    if (faqCount === 0) {
      console.log('Seeding initial FAQs...');
      await FAQ.create([
        {
          q: 'What ad budgets do you recommend starting with?',
          a: 'For performance marketing campaigns (Meta/Google Ads), we recommend a minimum testing budget of ₹25,000 to ₹35,000 per month. This ensures we collect sufficient data to test copy hooks and audience segments without choking the bidding algorithms.'
        },
        {
          q: 'How fast will we see qualified leads or sales?',
          a: 'Direct-response campaigns can start generating lead inquiries and pixel events within 24 to 48 hours of launch. However, stabilization of Cost-Per-Lead (CPL) and optimization of campaign margins typically takes between 14 to 30 days.'
        },
        {
          q: 'Do you design custom software, or work with standard WordPress?',
          a: 'We are custom development specialists. We construct fast, premium Next.js and React web applications, custom databases, and high-end Shopify layouts. We avoid bloated templates to ensure your page loads in under 2.5 seconds, maximizing conversion rates.'
        },
        {
          q: 'How does your client reporting structure operate?',
          a: 'We give you a dedicated dashboard updating spend and leads hourly. In addition, we coordinate bi-weekly strategy syncs and maintain real-time communications over custom client WhatsApp groups.'
        },
        {
          q: 'Where is your office located? Can we schedule an in-person meeting?',
          a: 'Our head office is located in Udaipur, Rajasthan. We welcome local clients for strategy consultations. If you are located elsewhere, we can facilitate Zoom or Google Meet calls daily.'
        }
      ]);
      console.log('FAQs seeded successfully.');
    }

  } catch (error) {
    console.error('Error seeding initial data:', error.message);
  }
};

module.exports = seedInitialData;
