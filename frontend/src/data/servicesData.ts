export interface ServicePillar {
  title: string;
  desc: string;
  deliverables: string[];
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  category: "performance" | "social" | "tech" | "branding";
  categoryLabel: string;
  title: string;
  tagline: string;
  summary: string;
  heroMetrics: { label: string; value: string }[];
  overview: string;
  whyItMatters: string[];
  pillars: ServicePillar[];
  process: { step: string; title: string; desc: string }[];
  technologies: string[];
  faqs: ServiceFAQ[];
}

export const servicesList: ServiceData[] = [
  {
    id: "performance",
    slug: "performance-marketing",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "Performance Marketing",
    tagline: "Data-Driven Paid Ads Engine Engineered for Explosive ROAS",
    summary: "Engineered campaigns to drive qualified leads, acquire customers at scale, and maximize return on ad spend using advanced data-driven media buying.",
    heroMetrics: [
      { label: "Average Campaign ROAS", value: "4.5x+" },
      { label: "High-Intent Leads", value: "150,000+" },
      { label: "Ad Spend Managed", value: "$2.5M+" },
    ],
    overview: "In today's digital landscape, vanity metrics like likes and impressions don't pay the bills. Performance Marketing at Veglux Media is focused entirely on measurable bottom-line growth: revenue, qualified leads, and positive Return on Ad Spend (ROAS). We build multi-channel paid ad ecosystems across Meta, Google, YouTube, and TikTok to systematically turn cold audiences into loyal customers.",
    whyItMatters: [
      "Immediate, predictable customer acquisition pipelines",
      "Full server-side tracking (Meta CAPI & GA4) for zero data loss",
      "Continuous creative iteration & multi-angle A/B testing",
      "Transparent reporting dashboards updated in real time",
    ],
    pillars: [
      {
        title: "Meta Ads (Facebook & Instagram)",
        desc: "Laser-targeted paid social campaigns utilizing custom audiences, lookalikes, and dynamic creative testing.",
        deliverables: [
          "Custom Audience Building & Segmented Lookalikes",
          "High-Converting Ad Creative Copies & Video Hooks",
          "Dynamic Product Ads (DPA) & Retargeting Funnels",
          "Meta Conversions API (CAPI) Integration",
        ],
      },
      {
        title: "Google Ads & Search Campaigns",
        desc: "Capture high-intent searches right when prospects are actively searching for your products or services.",
        deliverables: [
          "High-Intent Keyword Bidding & Negative Match Filtering",
          "Performance Max (PMax) Campaign Architecture",
          "Google Shopping Ads & Feed Optimization",
          "Search Copy & Extensions Optimization",
        ],
      },
      {
        title: "YouTube Ads & High-Impact Video",
        desc: "Engage audiences visually on the world's largest video search engine with irresistible video storytelling.",
        deliverables: [
          "In-Stream & Bumper Video Targeting",
          "Custom Intent Audiences based on Google Searches",
          "Video Scriptwriting & Motion Graphics Editing",
          "Viewer-to-Lead Conversion Funnels",
        ],
      },
      {
        title: "Lead Generation & Conversion Optimization",
        desc: "Streamlined instant forms, dedicated landing pages, and instant CRM sync to convert clicks into sales calls.",
        deliverables: [
          "Custom High-Speed Landing Page Creation",
          "Instant Lead Notification & WhatsApp/CRM Sync",
          "A/B Testing Forms, Headers & CTA Elements",
          "Lead Quality Verification & Spam Filtering",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Strategy Blueprint",
        desc: "We analyze your past campaign data, target demographics, competitor benchmarks, and conversion tracking pixel setups.",
      },
      {
        step: "02",
        title: "Creative Production & Tracking",
        desc: "Our design team develops high-converting ad angles while our technical team deploys CAPI and server-side tracking.",
      },
      {
        step: "03",
        title: "Launch & Rapid Testing",
        desc: "We launch multi-angle campaigns with distinct copy variations, audience segments, and bid strategies.",
      },
      {
        step: "04",
        title: "Scale & ROAS Maximization",
        desc: "We cut underperforming ads and aggressively scale winning campaigns horizontally and vertically.",
      },
    ],
    technologies: [
      "Meta Business Manager",
      "Google Ads & GTM",
      "YouTube Video Ads",
      "Google Analytics 4",
      "Klaviyo & CRM Integration",
      "Hotjar Heatmaps",
    ],
    faqs: [
      {
        q: "How fast will we see results from Performance Marketing?",
        a: "Unlike organic strategies, paid performance ads generate immediate traffic and conversions within 24 to 48 hours of campaign launch.",
      },
      {
        q: "What ad budget do we need to start?",
        a: "We tailor campaign budgets to your target industry and ROAS goals. We start with test budgets to identify winning creatives before scaling up ad spend.",
      },
      {
        q: "How do you handle iOS privacy updates and tracking issues?",
        a: "We implement server-side tracking (Meta Conversions API via GTM server container) and UTM parameter structures so no conversion data is lost.",
      },
    ],
  },
  {
    id: "social",
    slug: "social-media-management",
    category: "social",
    categoryLabel: "Social Media Management",
    title: "Social Media Management",
    tagline: "Organic Scale, Hook-Driven Content & Brand Loyalty",
    summary: "Organic scale and community building to transform casual scrollers into brand advocates through premium aesthetic designs, viral short-form reels, and active engagement.",
    heroMetrics: [
      { label: "Total Reel Views", value: "10M+" },
      { label: "Avg Engagement Boost", value: "+350%" },
      { label: "Monthly Assets Produced", value: "500+" },
    ],
    overview: "Social media is your brand's digital storefront. At Veglux Media, we combine aesthetic perfection with psychological storytelling to build an undeniable organic presence. We produce short-form video reels, aesthetic carousels, and engaging captions that position your brand at the pinnacle of your industry.",
    whyItMatters: [
      "Builds long-term brand authority & trust",
      "Drives cost-free organic customer acquisition",
      "Establishes a premium aesthetic digital identity",
      "Fosters loyal community engagement and advocacy",
    ],
    pillars: [
      {
        title: "Content Strategy & Scriptwriting",
        desc: "Data-backed content pillars designed to inform, entertain, and inspire your target demographic.",
        deliverables: [
          "Monthly Strategic Content Calendars",
          "Viral Reel Scripts with High-Hook Rates",
          "Brand Voice & Tone Guidelines",
          "Competitor Content Gap Analysis",
        ],
      },
      {
        title: "Graphic Design & Luxury Grid Aesthetics",
        desc: "Pixel-perfect visual designs that elevate your brand's social media grid to luxury standards.",
        deliverables: [
          "Carousel Slide Layouts & Infographics",
          "Custom Highlight Cover & Bio Design",
          "Story Templates & Brand Pattern Kits",
          "High-Resolution Motion Graphics",
        ],
      },
      {
        title: "Reels & Short-Form Video Production",
        desc: "Engaging vertical videos tailored for Instagram Reels, YouTube Shorts, and TikTok algorithms.",
        deliverables: [
          "Dynamic Video Editing & Trend Audio Matching",
          "Animated Subtitles & Hook Overlays",
          "Color Grading & Audio Enhancement",
          "Thumbnail & Cover Image Design",
        ],
      },
      {
        title: "Community Management & Engagement",
        desc: "Proactive management of comments, direct messages, and brand interactions to cultivate strong customer relationships.",
        deliverables: [
          "Comment Response & Conversational Nurturing",
          "Automated DM Workflows for Lead Capture",
          "Influencer & Creator Collaboration Outreach",
          "Monthly Growth & Analytics Reports",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand Voice Discovery",
        desc: "We analyze your audience demographic, brand ethos, visual preferences, and competitor landscape.",
      },
      {
        step: "02",
        title: "Monthly Content Planning",
        desc: "We craft a structured 30-day content calendar complete with post topics, script drafts, and aesthetic layout previews.",
      },
      {
        step: "03",
        title: "Asset Production & Editing",
        desc: "Our graphic designers and video editors produce ready-to-publish reels, carousels, and stories.",
      },
      {
        step: "04",
        title: "Publishing & Community Growth",
        desc: "We schedule posts at peak algorithm times, engage with commenters, and provide detailed monthly performance reviews.",
      },
    ],
    technologies: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Photoshop & Illustrator",
      "Meta Creator Studio",
      "CapCut Pro",
      "Later / Buffer Scheduling",
    ],
    faqs: [
      {
        q: "Which social media platforms do you manage?",
        a: "We specialize in Instagram, Facebook, LinkedIn, YouTube Shorts, and TikTok.",
      },
      {
        q: "Do we need to record videos ourselves or do you edit provided footage?",
        a: "We work flexibly! You can send raw smartphone footage for our team to turn into polished reels, or we can shoot and direct content locally in Rajasthan.",
      },
      {
        q: "How often will content be posted?",
        a: "Depending on your selected tier, we post between 15 to 30 strategic pieces of content per month.",
      },
    ],
  },
  {
    id: "seo",
    slug: "search-engine-optimization",
    category: "tech",
    categoryLabel: "SEO & Tech",
    title: "Search Engine Optimization (SEO)",
    tagline: "Dominant Google Rankings, Technical Authority & Inbound Organic Traffic",
    summary: "Technical audits, authority building, content architecture, and local map pack optimizations to secure top rankings on Google search results.",
    heroMetrics: [
      { label: "Organic Search Growth", value: "+280%" },
      { label: "#1 Page Google Ranks", value: "85+" },
      { label: "Core Web Vitals", value: "99/100" },
    ],
    overview: "High-ranking search presence is the ultimate compounding asset for any business. When potential customers search for your solutions, your website should appear at the top. Veglux Media delivers end-to-end technical, on-page, and off-page SEO strategies that outrank competitors and lock in perpetual inbound leads.",
    whyItMatters: [
      "Zero ad-cost organic lead generation",
      "Long-term compounding search domain authority",
      "Captures high-intent buyers ready to purchase",
      "Protects market share against aggressive competitors",
    ],
    pillars: [
      {
        title: "Technical SEO & Speed Optimization",
        desc: "Diagnosing and fixing site architecture bugs, speed bottlenecks, and indexing errors.",
        deliverables: [
          "Core Web Vitals & Page Speed Acceleration",
          "XML Sitemap & Robots.txt Architecture",
          "Canonicalization & Crawl Budget Optimization",
          "Structured Data & Schema Markup Implementation",
        ],
      },
      {
        title: "Keyword Intelligence & Content Architecture",
        desc: "Mapping intent-driven search queries to strategic landing pages and high-value blog pillars.",
        deliverables: [
          "High-Intent Keyword Opportunity Audits",
          "Content Silos & Internal Link Structures",
          "Header Tag (H1-H6) & Meta Data Optimization",
          "Semantic NLP Keyword Integration",
        ],
      },
      {
        title: "Authority Link Building & PR",
        desc: "Acquiring authoritative, contextually relevant backlinks that establish search engine trust.",
        deliverables: [
          "High Domain Authority (DA) Outreach",
          "Editorial Mentions & Guest Publishing",
          "Digital PR & Press Release Distribution",
          "Toxic Backlink Audit & Disavow Cleanups",
        ],
      },
      {
        title: "Local SEO & Google Business Profile",
        desc: "Dominating local search queries and map packs for Udaipur and targeted city markets.",
        deliverables: [
          "Google Business Profile (GBP) Optimization",
          "Local Geo-Targeted Citations & Directories",
          "Customer Review Acquisition Workflows",
          "Local Map Pack Ranking Strategies",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Comprehensive Technical Audit",
        desc: "We perform a 100+ point technical inspection of your website to identify ranking blockers.",
      },
      {
        step: "02",
        title: "On-Page & Keyword Mapping",
        desc: "We optimize all existing web pages with intent-driven keywords, schema markup, and speed tweaks.",
      },
      {
        step: "03",
        title: "Content Strategy & Publishing",
        desc: "We author authoritative articles and dedicated landing pages designed to rank for commercial search queries.",
      },
      {
        step: "04",
        title: "Authority Outreach & Monitoring",
        desc: "We execute ongoing link acquisition and monitor keyword positions daily through SEMrush.",
      },
    ],
    technologies: [
      "Google Search Console",
      "Google Analytics 4",
      "SEMrush",
      "Ahrefs",
      "Screaming Frog",
      "Schema.org Generator",
    ],
    faqs: [
      {
        q: "How long does SEO take to show ranking results?",
        a: "Technical improvements often reflect in 2 to 4 weeks, while ranking competitive keywords usually yields major momentum between 3 to 6 months.",
      },
      {
        q: "Do you handle code changes for technical SEO?",
        a: "Yes! Our frontend developers directly apply technical fixes, speed enhancements, and schema code updates.",
      },
      {
        q: "What is the difference between Local SEO and Organic SEO?",
        a: "Local SEO focuses on Google Maps and location searches (e.g., 'Best Marketing Agency in Udaipur'), while Organic SEO targets national or global search terms.",
      },
    ],
  },
  {
    id: "webdev",
    slug: "website-development",
    category: "tech",
    categoryLabel: "SEO & Tech",
    title: "Website Development",
    tagline: "Ultra-Fast, Next.js Powered Web Applications & E-Commerce",
    summary: "Creating visually stunning, lightning-fast web applications, corporate sites, and e-commerce platforms optimized for conversion and seamless user experience.",
    heroMetrics: [
      { label: "Page Load Speed", value: "< 1.0s" },
      { label: "Performance Score", value: "100/100" },
      { label: "Conversion Rate Up", value: "+45%" },
    ],
    overview: "Your website is your ultimate digital headquarters. Slow, clunky websites lose up to 70% of potential buyers before they even read your headline. Veglux Media builds modern Next.js and React web applications engineered for speed, high conversion rates, responsive mobile design, and luxury visual flair.",
    whyItMatters: [
      "Sub-second load times that keep visitors engaged",
      "Fully customized luxury design tailored to your brand",
      "Seamless mobile responsiveness across all devices",
      "Built-in conversion funnels and lead capture tools",
    ],
    pillars: [
      {
        title: "Next.js & React Web Applications",
        desc: "Modern server-rendered web applications delivering instant page transitions and superior SEO.",
        deliverables: [
          "Custom React Component Engineering",
          "Server-Side Rendering (SSR) & Static Generation (SSG)",
          "Interactive Micro-Animations & Dark/Light Themes",
          "API Integration & Dynamic Form Processing",
        ],
      },
      {
        title: "E-Commerce & Shopify Storefronts",
        desc: "High-converting online store builds with streamlined checkout flows and inventory management.",
        deliverables: [
          "Custom Shopify Theme Development",
          "Payment Gateway & Local Currency Integrations",
          "Upsell, Cross-Sell & Abandoned Cart Triggers",
          "Product Feed & Meta Catalog Synchronization",
        ],
      },
      {
        title: "Headless CMS & Content Systems",
        desc: "Empower your team to effortlessly publish blogs, portfolios, and pages without writing code.",
        deliverables: [
          "Strapi, Sanity, or WordPress Headless CMS Setup",
          "Custom Field Layouts & Visual Page Editors",
          "Automated Content Deployment Pipelines",
          "Role-Based User Access Control",
        ],
      },
      {
        title: "Security, Maintenance & Speed Tuning",
        desc: "Keep your site running smoothly 24/7 with zero downtime, robust SSL encryption, and speed audits.",
        deliverables: [
          "Core Web Vitals Speed Optimization",
          "SSL Certificate & Security Hardening",
          "Automated Daily Database & Code Backups",
          "Continuous Monitoring & Bug Fixing",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Wireframing & UI/UX Design",
        desc: "We create interactive Figma prototypes showcasing luxury layouts, typography, and user flows.",
      },
      {
        step: "02",
        title: "Frontend & API Architecture",
        desc: "Our developers convert designs into clean, responsive Next.js/React code with dynamic backend hooks.",
      },
      {
        step: "03",
        title: "Testing & Speed Tuning",
        desc: "We test across iOS, Android, Safari, Chrome, and test server response times under high loads.",
      },
      {
        step: "04",
        title: "Deployment & Team Handover",
        desc: "We deploy your project to Vercel/AWS and provide full video training for your internal team.",
      },
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "TailwindCSS / Vanilla CSS Modules",
      "Shopify Liquid",
      "Vercel & Node.js",
    ],
    faqs: [
      {
        q: "What tech stack do you recommend for custom websites?",
        a: "We recommend Next.js and React for marketing/corporate sites due to unmatched speed and SEO benefits. For pure E-Commerce stores, we leverage custom Shopify setups.",
      },
      {
        q: "Will I be able to edit text and images myself after launch?",
        a: "Yes! We integrate user-friendly Content Management Systems (CMS) so you can update text, add blog posts, or change images effortlessly.",
      },
      {
        q: "Is hosting and domain setup included?",
        a: "We manage complete deployment on high-performance cloud platforms like Vercel or AWS, including SSL certification.",
      },
    ],
  },
  {
    id: "branding",
    slug: "branding-and-identity",
    category: "branding",
    categoryLabel: "Branding",
    title: "Branding & Visual Identity",
    tagline: "Luxury Positioning, Monograms & Comprehensive Brand Systems",
    summary: "Defining your brand's voice, visual guidelines, logomarks, typography, and premium positioning to stand out in crowded competitive markets.",
    heroMetrics: [
      { label: "Brand Identities Built", value: "100+" },
      { label: "Visual Quality Score", value: "10/10" },
      { label: "Luxury Distinction", value: "100%" },
    ],
    overview: "A great brand is not just a logo; it is an emotional promise and a lasting visual perception. Veglux Media crafts luxury visual identity systems that command premium pricing, evoke prestige, and differentiate your company from competitors.",
    whyItMatters: [
      "Commands higher pricing power & premium positioning",
      "Creates instant visual recognition across all touchpoints",
      "Builds trust before sales conversations even begin",
      "Provides clear visual rules for all future marketing",
    ],
    pillars: [
      {
        title: "Logo Design & Monogram Architecture",
        desc: "Crafting iconic vector logomarks, emblems, monograms, and secondary responsive logo variations.",
        deliverables: [
          "Primary, Secondary & Emblem Logo Formats",
          "High-Resolution Vector Source Files (AI, SVG, EPS, PNG)",
          "3D Metallic & Embossed Logo Mockups",
          "Dark & Light Mode Logo Adaptations",
        ],
      },
      {
        title: "Color Palettes & Typography Systems",
        desc: "Selecting harmonious color scales and typography pairings that embody your brand's luxury identity.",
        deliverables: [
          "Primary & Secondary Color Code Guidelines (HEX, RGB, CMYK)",
          "Serif & Sans-Serif Font Pairings with Usage Rules",
          "Hierarchy Rules for Headers, Body & Buttons",
          "Golden Ratio Visual Balance Guides",
        ],
      },
      {
        title: "Brand Guidelines & Style Handbooks",
        desc: "Comprehensive brand documentation ensuring internal teams and external agencies maintain absolute visual consistency.",
        deliverables: [
          "Full Digital Brand Guidelines PDF",
          "Do's and Don'ts of Logo Placement",
          "Imagery & Photography Style Direction",
          "Iconography & Pattern Graphics Library",
        ],
      },
      {
        title: "Marketing Collateral & Print Design",
        desc: "Applying your brand identity to tangible assets including business cards, letterheads, and presentation decks.",
        deliverables: [
          "Luxury Business Cards & Letterhead Designs",
          "Investor & Sales Pitch Deck Templates",
          "Social Media Kit & Header Banners",
          "Packaging & Merchandise Mockups",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Moodboarding",
        desc: "We explore your business values, target demographic, luxury positioning, and curate moodboards.",
      },
      {
        step: "02",
        title: "Conceptual Sketches",
        desc: "Our senior designers sketch distinct logo concepts and present initial vector directions.",
      },
      {
        step: "03",
        title: "Refinement & Brand System",
        desc: "We refine the chosen direction, establishing font hierarchies, color codes, and collateral mockups.",
      },
      {
        step: "04",
        title: "Brand Book Delivery",
        desc: "We deliver the complete vector master package along with your official Brand Guidelines handbook.",
      },
    ],
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma",
      "Adobe InDesign",
      "Cinema 4D (3D Mockups)",
    ],
    faqs: [
      {
        q: "What files do I receive upon branding completion?",
        a: "You receive full ownership of all vector files (AI, SVG, EPS), high-res PNGs/JPEGs, font files, and the official Brand Guidelines PDF.",
      },
      {
        q: "Can you rebrand an existing business without losing our audience recognition?",
        a: "Yes! We specialize in brand evolutionary refreshes that modernize your look while preserving core brand heritage.",
      },
      {
        q: "How long does a full branding identity project take?",
        a: "A comprehensive brand identity project typically takes 2 to 3 weeks from initial strategy to final handbook delivery.",
      },
    ],
  },
  {
    id: "email",
    slug: "email-marketing",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "Email & Automation Marketing",
    tagline: "Automated Sales Funnels, High Deliverability & Customer Retention",
    summary: "Nurturing leads, driving repeat purchases, and building automated revenue streams through strategic drip campaigns and segmentation.",
    heroMetrics: [
      { label: "Avg Open Rate", value: "45%+" },
      { label: "Automated Email Revenue", value: "$1.2M+" },
      { label: "Spam Complaint Rate", value: "< 0.01%" },
    ],
    overview: "Email marketing remains the highest ROI channel in digital marketing, delivering up to $36 for every $1 spent. Veglux Media builds automated revenue funnels in Klaviyo, Mailchimp, or ActiveCampaign that engage subscribers, recover abandoned carts, and turn one-time buyers into repeat customers.",
    whyItMatters: [
      "Owned channel independent of ad algorithm changes",
      "Automated revenue running 24/7 on autopilot",
      "Hyper-segmented messaging tailored to buyer behavior",
      "Dramatically boosts Customer Lifetime Value (LTV)",
    ],
    pillars: [
      {
        title: "Automated Revenue Workflows & Flows",
        desc: "Triggered email sequences that send the right message at the exact right moment in the buyer journey.",
        deliverables: [
          "High-Converting Welcome Series Sequence",
          "Abandoned Cart & Browse Abandonment Recovery",
          "Post-Purchase Onboarding & Review Requests",
          "Win-Back & Re-Engagement Sequences",
        ],
      },
      {
        title: "Campaign Broadcasts & Newsletter Design",
        desc: "Regular promotional campaigns, product launches, and seasonal newsletters with custom graphics.",
        deliverables: [
          "Custom HTML Email Template Design",
          "Compelling Subject Line & Preview Copywriting",
          "Product Showcase & Promotional Offer Design",
          "A/B Testing Subject Lines & Send Times",
        ],
      },
      {
        title: "List Segmentation & Deliverability Audit",
        desc: "Maintaining pristine inbox placement and targeting subscribers based on purchase history and activity.",
        deliverables: [
          "SPF, DKIM, & DMARC Technical Setup",
          "Active vs VIP vs Unengaged List Segmentation",
          "Inbox Placement & Spam Filter Testing",
          "Inactive Subscriber Cleansing Workflows",
        ],
      },
      {
        title: "Analytics & LTV Optimization",
        desc: "Tracking revenue generated per email, click-through rates, and optimizing campaigns month over month.",
        deliverables: [
          "Klaviyo / ESP Revenue Tracking Setup",
          "Monthly Performance Dashboards",
          "Cohort Retention & Lifetime Value Analysis",
          "Continuous Flow A/B Optimization",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "ESP & Domain Audit",
        desc: "We audit your email domain authentication (SPF/DKIM) and review existing subscriber lists.",
      },
      {
        step: "02",
        title: "Flow Strategy & Template Design",
        desc: "We design high-converting visual templates and write persuasive copy for automated flows.",
      },
      {
        step: "03",
        title: "Integration & Automation Launch",
        desc: "We connect your store or CRM, configure event triggers, and launch automated campaigns.",
      },
      {
        step: "04",
        title: "Broadcast Management & Scaling",
        desc: "We send strategic weekly newsletters, analyze revenue reports, and continuously optimize click rates.",
      },
    ],
    technologies: [
      "Klaviyo",
      "Mailchimp",
      "ActiveCampaign",
      "Brevo (Sendinblue)",
      "Shopify Integration",
      "GlockApps (Deliverability)",
    ],
    faqs: [
      {
        q: "What email platform do you recommend for e-commerce?",
        a: "We strongly recommend Klaviyo due to its deep integration with Shopify/WooCommerce and advanced predictive analytics.",
      },
      {
        q: "How do automated flows generate extra revenue?",
        a: "Automated flows send context-aware emails instantly when a user leaves items in their cart or makes a purchase, recovering revenue without manual labor.",
      },
      {
        q: "How do you keep our emails out of the Spam folder?",
        a: "We configure proper SPF, DKIM, and DMARC authentication protocols, perform list hygiene, and monitor domain reputation continuously.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesList.find((service) => service.slug === slug || service.id === slug);
}
