export type CaseStudy = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  overview: string;
  features: string[];
  technologies: string[];
  results: string[];
  platform?: string;
  date?: string;
  industry?: string;
  audience?: string;
};

export const caseStudies: CaseStudy[] = [
  {
  id: 1,
  title: "TripSpark",
  category: "Travel Marketplace Platform",
  description:"Modern Airbnb-style travel discovery platform built for seamless short-stay exploration, intelligent property discovery, and frictionless guest experiences.",
  image: "/case-studies/p1.webp",
  link: "https://tripspark.onrender.com/listings",
  platform: "Next.js 14 + Vercel",
  date: "May 2026",
  industry: "Travel Tech / Short-Stay Marketplace",
  audience:"Travellers, digital nomads, short-stay guests, and property hosts across India and global destinations",
  overview:"TripSpark is a full-stack travel and short-stay marketplace platform inspired by the simplicity and user experience of Airbnb, tailored specifically for the Indian market. The platform was designed to modernize how travellers discover, compare, and explore short-stay properties through category-driven browsing, intelligent filtering, transparent pricing, and seamless authentication flows. Built with Next.js 14 and deployed on Vercel, the experience focuses heavily on conversion optimization, premium UI design, real-time interactions, and scalable marketplace architecture.",
  features: [
    "11-category travel discovery system including Beach, Mountains, Heritage, Camping, Nature, Winter, Boats, City, and Lakefront stays",
    "Advanced property search with filters for location, guest count, and price range",
    "Real-time GST tax toggle with instant client-side price recalculation without page refresh",
    "Airbnb-inspired 4-column responsive listing experience optimized for engagement and browsing",
    "Sticky navigation system with seamless cross-device usability",
    "Secure guest authentication workflows including Login and Signup functionality",
    "Host onboarding system allowing property owners to add and manage new listings",
    "Conversion-focused property cards displaying pricing, location, imagery, and travel categories",
    "Responsive marketplace architecture optimized for desktop, tablet, and mobile devices",
    "Modern white-and-red brand identity focused on premium travel experiences",
  ],
  technologies: [
    "Next.js 14",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Vercel",
    "Responsive UI Architecture",
    "Client-Side State Management",
  ],
  results: [
    "Created a modern travel marketplace inspired by leading global booking platforms",
    "Improved pricing transparency through real-time GST-inclusive calculations",
    "Delivered seamless guest onboarding and authentication experiences",
    "Enabled scalable host onboarding for future marketplace expansion",
    "Designed a premium travel discovery experience optimized for user engagement",
    "Established a conversion-focused interface with simplified navigation and intelligent search",
    "Built a scalable architecture capable of supporting future booking and payment integrations",
    "Enhanced browsing efficiency with category-based discovery and smart filtering systems",
  ],
},
  {
  id: 2,
  title: "Real Estate Appointment Orchestration",
  category: "Appointment Automation Platform",
  description:"Premium real estate appointment orchestration platform designed to streamline consultation scheduling, automate customer engagement workflows, and improve lead conversion efficiency.",
  image: "/case-studies/p2.webp",
  link: "https://appointment-system-five-teal.vercel.app/",
  platform: "Web-Based Consultation Management Platform",
  date: "2026",
  industry: "Real Estate / Consultation Automation",
  audience:"Real estate agencies, sales teams, property consultants, and high-intent property buyers",
  overview:"A premium real estate consultation and appointment orchestration platform built to simplify customer engagement workflows across site visits, virtual tours, consultation calls, and investment discussions. The platform centralizes scheduling, improves lead qualification, and creates a streamlined customer experience through guided appointment workflows and automated confirmation systems.",
  features: [
    "Guided consultation workflows replacing traditional static inquiry forms",
    "Multi-service appointment scheduling for site visits, virtual tours, and consultation calls",
    "Smart lead information capture with contextual consultation requirements",
    "Automated scheduling validation and appointment confirmation workflows",
    "Responsive premium interface focused on clarity and trust",
    "Structured customer journey designed to reduce scheduling friction",
    "Agent-ready lead coordination system improving consultation preparedness",
    "Confirmation-driven workflow improving engagement continuity and transparency",
  ],
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Responsive UI Architecture",
    "Workflow Management System",
  ],
  results: [
    "Improved appointment coordination efficiency across multiple consultation channels",
    "Reduced manual scheduling overhead for sales and consultation teams",
    "Enhanced lead quality through context-rich information collection",
    "Improved customer engagement continuity with confirmation workflows",
    "Strengthened operational readiness for agents before consultations",
    "Delivered a premium consultation experience focused on trust and usability",
  ],
},
  {
  id: 3,

  title: "AI-Powered Real Estate Assistant",

  category: "AI Real Estate Automation Platform",

  description:
    "Conversational AI-powered real estate assistant designed to simplify property discovery, automate lead qualification, and improve customer engagement through guided interactions.",

  image: "/case-studies/p3.webp",

  link: "https://example.com",

  platform: "AI-Assisted Property Discovery Platform",

  date: "May 2026",

  industry: "Real Estate / AI Automation",

  audience:
    "Real estate agencies, property consultants, home buyers, renters, and high-intent property seekers",

  overview:
    "The AI-Powered Real Estate Assistant is a conversational property discovery platform built to modernize how users search, explore, and engage with real estate listings. Instead of relying on traditional search-heavy workflows, the platform guides users through an intelligent step-by-step experience that simplifies decision-making, improves lead quality, and enables faster agent follow-ups through real-time engagement workflows.",

  features: [
    "Guided conversational property discovery flow for Buy, Rent, Budget, Location, and Property Type selection",
    "AI-assisted recommendation system delivering intelligent property suggestions",
    "Dynamic quick-select interactions reducing manual typing and improving engagement",
    "Instant property matching based on user preferences and budget inputs",
    "Structured lead capture including preferences, location, budget, and visit schedules",
    "Real-time agent notification workflows enabling faster customer follow-ups",
    "Seamless chat-based website integration designed for natural user engagement",
    "Minimal-friction interaction experience improving completion and conversion rates",
    "Context-rich lead generation improving consultation readiness for agents",
    "Responsive AI-driven interface optimized for modern real estate experiences",
  ],

  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Conversational UI Architecture",
    "AI-Assisted Recommendation Logic",
    "Responsive Interaction Design",
    "Real-Time Notification Workflows",
  ],

  results: [
    "Improved customer engagement through guided conversational experiences",
    "Reduced property discovery friction with quick-select interaction flows",
    "Enhanced lead quality using structured preference and scheduling capture",
    "Accelerated agent response times with real-time notification systems",
    "Delivered a more intuitive alternative to traditional search-heavy platforms",
    "Improved conversion potential through context-rich customer interactions",
    "Simplified property exploration using AI-assisted recommendation workflows",
    "Built a scalable foundation for future intelligent automation enhancements",
  ],
},
  {
  id: 4,

  title: "Business Analytics Dashboard",

  category: "Business Intelligence Platform",

  description:
    "Modern analytics dashboard designed to help businesses monitor KPIs, visualize operational performance, and make faster data-driven decisions through real-time insights.",

  image: "/case-studies/p4.webp",

  link: "https://basic-analytics-report.vercel.app/",

  platform: "Interactive Analytics & Reporting Dashboard",

  date: "May 2026",

  industry: "Business Intelligence / Data Analytics",

  audience:
    "Business owners, executives, operations teams, analysts, and decision-makers",

  overview:
    "The Business Analytics Dashboard is a modern business intelligence platform built to centralize operational insights, KPI monitoring, and performance tracking within a single interactive interface. Designed with a strong focus on clarity, usability, and real-time visualization, the dashboard enables organizations to simplify reporting workflows, improve strategic visibility, and accelerate data-driven decision-making across teams.",

  features: [
    "Interactive KPI dashboards with real-time performance visualization",
    "Custom analytics views for executives, operations teams, and stakeholders",
    "Advanced reporting interface with export-ready business snapshots",
    "Trend monitoring system enabling faster operational analysis",
    "Role-based dashboard experiences for different business functions",
    "Modern chart-driven UI optimized for quick insight discovery",
    "Centralized business intelligence workflows reducing reporting fragmentation",
    "Responsive dashboard architecture for desktop and mobile accessibility",
    "Simplified data visualization improving readability and decision clarity",
    "Premium analytics interface focused on operational transparency and usability",
  ],

  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Chart Visualization Libraries",
    "Responsive Dashboard Architecture",
    "Business Intelligence Workflows",
    "Interactive Reporting System",
    "Modern Data Visualization UI",
  ],

  results: [
    "Improved operational visibility through centralized analytics reporting",
    "Accelerated decision-making with real-time KPI monitoring",
    "Simplified executive reporting through interactive dashboard experiences",
    "Reduced manual reporting effort across departments and teams",
    "Enhanced business insight accessibility with modern visualization systems",
    "Improved workflow efficiency through unified operational tracking",
    "Delivered a scalable analytics foundation for future business intelligence expansion",
    "Strengthened strategic planning with faster access to actionable insights",
  ],
},
  {
  id: 5,

  title: "Advanced Property Listing Platform",

  category: "Property Listing Experience",

  description:
    "High-performance real estate listing platform designed to simplify property discovery through advanced filtering, premium property presentation, and conversion-focused browsing experiences.",

  image: "/case-studies/p5.webp",

  link: "https://adv-property-listing.vercel.app/",

  platform: "Real Estate Property Discovery Platform",

  date: "May 2026",

  industry: "Real Estate / Property Technology",

  audience:
    "Home buyers, property investors, real estate agencies, and premium property seekers",

  overview:
    "The Advanced Property Listing Platform is a modern real estate discovery experience built to improve how users explore, compare, and engage with property listings online. Designed with a strong focus on performance, usability, and visual clarity, the platform combines intelligent filtering systems, premium property presentation, and responsive browsing workflows to create a seamless and conversion-focused property search experience.",

  features: [
    "Advanced property filtering system with location, budget, and property type search",
    "Premium media-first property cards optimized for engagement and visibility",
    "High-conversion listing detail pages with structured property information",
    "Responsive browsing experience optimized for desktop, tablet, and mobile users",
    "Fast property discovery workflows reducing browsing friction for buyers",
    "Modern visual hierarchy improving listing readability and user navigation",
    "Conversion-focused lead capture system integrated within listing experiences",
    "Optimized search architecture supporting scalable property exploration",
    "Seamless property browsing experience designed for high-intent buyers",
    "Premium UI design enhancing trust and customer interaction quality",
  ],

  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Responsive UI Architecture",
    "Property Search & Filtering System",
    "Modern Real Estate UX Design",
    "Performance Optimization Workflows",
    "Conversion-Focused Interface Design",
  ],

  results: [
    "Improved property discovery experience through advanced filtering workflows",
    "Increased user engagement and browsing time across listing pages",
    "Enhanced inquiry generation through conversion-focused listing design",
    "Improved browsing performance with scalable search architecture",
    "Delivered a premium digital property showcase experience",
    "Simplified navigation and property comparison for buyers and investors",
    "Strengthened customer trust with modern UI and responsive experiences",
    "Built a scalable foundation for future real estate platform enhancements",
  ],
},
  {
  id: 6,
  title: "Corporate Business Website",
  category: "Premium Website Development",
  description:"Modern corporate business website designed to strengthen digital presence, build customer trust, and deliver a premium brand experience through clean UI and performance-focused architecture.",
  image: "/case-studies/p6.webp",
  link: "https://loving-elements-371947.framer.app",
  platform: "Corporate Digital Presence Platform",
  date: "May 2026",
  industry: "Professional Services / Corporate Branding",
  audience:"Enterprise clients, business owners, investors, decision-makers, and corporate customers",
  overview:"The Corporate Business Website is a premium digital presence platform built to help businesses establish credibility, improve brand positioning, and create stronger customer engagement online. Designed with modern UI principles, performance optimization, and strategic storytelling, the website combines elegant visuals, responsive architecture, and conversion-focused experiences to deliver a professional and trustworthy corporate identity across all devices.",
  features: [
    "Modern corporate website architecture optimized for brand positioning and trust",
    "Cinematic hero sections and visual storytelling experiences",
    "Responsive layouts designed for desktop, tablet, and mobile accessibility",
    "SEO-optimized page structure improving search visibility and discoverability",
    "Performance-focused frontend architecture ensuring smooth browsing experiences",
    "Strategic content hierarchy improving readability and engagement",
    "Premium UI design with modern typography and clean visual structure",
    "Conversion-focused contact and inquiry workflows for lead generation",
    "Brand-consistent design system maintaining professional visual identity",
    "Scalable website framework supporting future business expansion",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Responsive UI Architecture",
    "SEO Optimization Framework",
    "Modern Frontend Development",
    "Performance Optimization Workflows",
    "Corporate UX Design System",
  ],
  results: [
    "Strengthened digital brand authority through premium website experiences",
    "Improved customer trust with modern responsive UI and professional presentation",
    "Enhanced user engagement through strategic storytelling and visual hierarchy",
    "Improved lead quality with conversion-focused inquiry workflows",
    "Delivered faster browsing performance across multiple devices",
    "Increased online visibility through SEO-ready website architecture",
    "Created a scalable corporate platform for future business growth",
    "Established a strong and professional online identity for enterprise audiences",
  ],
},
  {
  id: 7,

  title: "Enterprise Real Estate CRM & Sales Operations Platform",

  category: "CRM & Sales Automation",

  description:
    "Enterprise-grade real estate CRM and sales operations platform designed to centralize lead management, property inventory, deal tracking, and sales workflows into a single scalable business system.",

  image: "/case-studies/p11.webp",

  link: "https://webbheads-realestate-crm.vercel.app/dashboard",

  platform: "Centralized Real Estate Sales Operations Platform",

  date: "May 2026",

  industry: "Real Estate / CRM Automation / Sales Operations",

  audience:
    "Real estate agencies, brokers, sales teams, operational managers, and enterprise property consultants",

  overview:
    "The Enterprise Real Estate CRM & Sales Operations Platform is a centralized business management system built to modernize fragmented real estate workflows through a unified digital infrastructure. Designed to replace spreadsheet-based operations and disconnected tools, the platform combines lead management, property inventory tracking, sales pipeline automation, site visit coordination, analytics reporting, and operational monitoring into a single scalable environment optimized for enterprise real estate businesses.",

  features: [
    "Multi-stage lead management system covering New Leads, Contacted, Site Visits, Negotiation, and Conversion stages",
    
    "Centralized property inventory management with real-time status tracking for Available, Sold, and Under Negotiation properties",

    "Automated site visit scheduling workflows with agent assignments and appointment tracking",

    "Comprehensive sales pipeline management for negotiation tracking, proposal workflows, and conversion monitoring",

    "Real-time business dashboard displaying leads, revenue, deals, site visits, and operational insights",

    "Integrated document management system with verification workflows for property and client records",

    "Agent and broker management module supporting operational coordination and performance tracking",

    "Support ticket management system for customer service and operational issue handling",

    "Advanced analytics and reporting dashboards for conversion tracking and sales performance monitoring",

    "Scalable workflow architecture supporting the full customer lifecycle from lead acquisition to portfolio management",
  ],

  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Modular Application Architecture",
    "Operational Analytics Engine",
    "Dashboard-Based Data Visualization",
    "CRM Workflow Management System",
  ],

  results: [
    "Centralized fragmented real estate operations into a unified enterprise management platform",

    "Improved lead tracking and sales visibility through structured pipeline automation",

    "Enhanced operational efficiency with automated site visit coordination workflows",

    "Strengthened property inventory monitoring through centralized status management",

    "Improved decision-making with real-time analytics and performance dashboards",

    "Reduced operational fragmentation through integrated document and support management systems",

    "Streamlined collaboration between sales teams, brokers, and operational managers",

    "Established a scalable digital infrastructure for modern real estate sales operations",
  ],
},
  {
  id: 8,
  title: "WhatsApp Property Automation Bot",
  category: "AI Chatbot & WhatsApp Automation",
  description:
    "AI-powered WhatsApp real estate automation system designed to simplify property discovery, automate lead capture, and deliver multilingual customer engagement directly within WhatsApp.",
  image: "/case-studies/p8.webp",
  link: "https://example.com",
  platform: "WhatsApp Property Engagement Platform",
  date: "May 2026",
  industry: "Real Estate / Conversational Automation",
  audience:
    "Real estate agencies, property buyers, renters, brokers, and multilingual customer segments across India",
  overview:
    "The WhatsApp Property Automation Bot is a conversational real estate engagement platform built using the Meta WhatsApp Cloud API and integrated directly into a property listing ecosystem. Designed to modernize customer communication workflows, the system enables users to discover listings, explore properties, and submit inquiries directly within WhatsApp through a guided multilingual experience optimized for engagement, lead generation, and operational efficiency.",
  features: [
    "Multilingual conversational experience supporting English, Telugu, and Hindi interactions",
    "Structured WhatsApp property discovery workflows for Buy, Rent, and Commercial property categories",
    "Interactive image-based property cards with Prev and Next navigation flows",
    "Automated property detail presentation including location, pricing, area, and property specifications",
    "Integrated lead capture workflows collecting customer name, phone number, email, and property intent",
    "Real-time lead storage and synchronization with Google Sheets through webhook automation",
    "AI-assisted conversational interaction flow reducing manual inquiry handling effort",
    "Responsive WhatsApp-native experience improving customer engagement and accessibility",
    "Automated confirmation workflows personalized in the user's selected language",
    "Scalable chatbot architecture integrated with modern real estate listing systems",
  ],
  technologies: [
    "Next.js 14",
    "Meta WhatsApp Cloud API v18",
    "TypeScript",
    "Google Sheets Webhooks",
    "Vercel",
    "Conversational Workflow Architecture",
    "Session State Management",
    "Multilingual Interaction System",
  ],
  results: [
    "Improved customer engagement through conversational property discovery workflows",
    "Automated lead capture directly from WhatsApp conversations",
    "Reduced manual follow-up coordination for real estate sales teams",
    "Enhanced accessibility with multilingual customer support capabilities",
    "Delivered a seamless mobile-first property browsing experience within WhatsApp",
    "Improved lead quality through structured conversational data collection",
    "Enabled real-time operational visibility through automated lead synchronization",
    "Established a scalable conversational automation foundation for future AI-powered enhancements",
  ],
},
  {
  id: 9,
  title: "Plot & Project Management Platform",
  category: "Real Estate Management System",
  description:
    "Centralized real estate operations platform designed to streamline plot inventory management, project monitoring, customer ownership tracking, document workflows, and business analytics within a unified ecosystem.",
  image: "/case-studies/p9.webp",
  link: "https://plot-management-kappa.vercel.app/projects",
  platform: "Centralized Real Estate Operations Platform",
  date: "May 2026",
  industry: "Real Estate / Land & Portfolio Management",
  audience:
    "Real estate developers, project managers, land sales teams, operational managers, and property portfolio businesses",
  overview:
    "The Plot & Project Management Platform is a centralized real estate operations system built to modernize large-scale land and plot management workflows. Designed to replace fragmented spreadsheets and disconnected tools, the platform unifies project tracking, inventory visibility, customer ownership management, document coordination, reservation workflows, and operational analytics into a single scalable business environment optimized for portfolio management and sales operations.",
  features: [
    "Centralized project management workflows with portfolio-level operational visibility",
    "Real-time plot inventory tracking for available, reserved, and sold units",
    "Structured customer ownership management with relationship tracking and investment records",
    "Integrated sales monitoring workflows with reservation and revenue tracking",
    "Document management system supporting title deeds, receipts, NOC certificates, and verification workflows",
    "Operational analytics dashboard displaying revenue trends, project performance, and inventory insights",
    "Advanced inventory filtering and status management improving operational transparency",
    "Project performance monitoring with sales progress and completion analytics",
    "Centralized administrative settings for security, notifications, and application configuration",
    "Scalable workflow architecture supporting end-to-end real estate portfolio management",
  ],
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Dashboard-Based Analytics System",
    "Inventory Management Architecture",
    "Operational Intelligence Workflows",
    "Centralized Portfolio Management System",
  ],
  results: [
    "Improved inventory visibility through centralized real-time plot tracking",
    "Reduced operational fragmentation by replacing spreadsheet-based workflows",
    "Enhanced project monitoring with integrated portfolio analytics dashboards",
    "Improved customer ownership management through unified relationship workflows",
    "Streamlined reservation coordination and sales tracking processes",
    "Strengthened business intelligence visibility with operational reporting systems",
    "Simplified document handling through centralized verification and management workflows",
    "Established a scalable digital infrastructure for large-scale real estate portfolio operations",
  ],
},
  {
  id: 10,
  title: "Sales Intelligence Platform",
  category: "Operations & Sales Intelligence",
  description:
    "Centralized real estate sales intelligence platform designed to streamline operational workflows, improve pipeline visibility, automate coordination processes, and enhance business decision-making through real-time analytics.",
  image: "/case-studies/p10.webp",
  link: "https://webbheads-demo-portal.vercel.app/",
  platform: "Real Estate Operations Intelligence Platform",
  date: "May 2026",
  industry: "Real Estate / Revenue Operations / Sales Intelligence",
  audience:
    "Real estate agencies, sales leaders, operational managers, brokers, and revenue analytics teams",
  overview:
    "The Sales Intelligence Platform is a centralized operational management system built to modernize and unify real estate sales workflows within a single intelligent dashboard ecosystem. Designed to eliminate fragmented spreadsheets, disconnected tools, and manual coordination processes, the platform centralizes lead tracking, property management, deal coordination, client relationship workflows, site visit scheduling, and business analytics to improve operational visibility, sales performance, and strategic decision-making.",
  features: [
    "Centralized operational dashboard with real-time visibility into leads, deals, revenue, and sales activities",
    "Structured lead management workflows with stage tracking, follow-up monitoring, and agent assignment",
    "Integrated property inventory management with pricing, negotiation status, and location-based filtering",
    "Comprehensive deal tracking system for transaction monitoring, commissions, and closing timelines",
    "Centralized site visit coordination workflows with scheduling, assignment, and appointment tracking",
    "Unified client relationship management system with buyer profiles, communication tracking, and preference management",
    "Advanced analytics and reporting dashboards for sales performance, revenue trends, and conversion monitoring",
    "Operational workflow automation improving coordination across teams and departments",
    "Real-time pipeline visibility supporting faster business decisions and sales monitoring",
    "Scalable operational architecture designed for modern real estate sales ecosystems",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Operational Analytics Engine",
    "Dashboard-Based Data Visualization",
    "CRM Workflow Architecture",
    "Sales Intelligence Reporting System",
    "Real-Time Monitoring Infrastructure",
  ],
  results: [
    "Improved operational visibility through centralized workflow coordination",
    "Enhanced sales pipeline transparency with real-time reporting dashboards",
    "Reduced manual follow-up inefficiencies through structured workflow management",
    "Improved deal tracking and transaction coordination across sales teams",
    "Strengthened customer relationship management through unified CRM workflows",
    "Accelerated business decision-making with centralized operational intelligence",
    "Improved site visit coordination and scheduling efficiency",
    "Established a scalable sales operations infrastructure for future automation and analytics expansion",
  ],
},
  {
  id: 11,

  title: "CRM Dashboard",

  category: "Sales CRM & Real Estate Operations",

  description:
    "Modern real estate CRM dashboard designed to centralize lead management, sales pipeline tracking, revenue analytics, and operational workflows within a single intelligent platform.",

  image: "/case-studies/p7.webp",

  link: "https://crm-dashboard-mocha.vercel.app",

  platform: "Next.js 14 + Vercel",

  date: "May 2026",

  industry: "Real Estate / Sales CRM / Property Technology",

  audience:
    "Real estate sales teams, brokers, operational managers, sales heads, and property consultants",

  overview:
    "The CRM Dashboard is a centralized sales and operations management platform built for real estate businesses to streamline lead tracking, deal management, pipeline visibility, and business analytics. Designed with a modern dashboard architecture and responsive UI system, the platform replaces fragmented spreadsheets and disconnected workflows with a unified operational ecosystem optimized for sales coordination, reporting, and decision-making.",

  features: [
    "Centralized dashboard displaying KPI cards for leads, active deals, site visits, and closed transactions",
    "Interactive lead-source analytics with donut charts and real-time activity tracking",
    "Comprehensive lead management system with status tracking, follow-up monitoring, and filtering workflows",
    "Kanban-style sales pipeline for managing deals across multiple conversion stages",
    "Revenue analytics dashboard with monthly performance visualization and trend monitoring",
    "Role-ready operational architecture supporting future permission-based access control",
    "Settings and profile management workflows including notifications and account preferences",
    "Responsive dashboard interface optimized for operational visibility and usability",
    "Modern analytics-driven UI improving sales monitoring and workflow coordination",
    "Scalable CRM architecture designed for future AI automation and real-time integrations",
  ],

  technologies: [
    "Next.js 14",
    "Tailwind CSS",
    "TypeScript",
    "Recharts",
    "shadcn/ui",
    "Vercel",
    "Dashboard-Based Analytics Architecture",
    "Responsive CRM Workflow System",
  ],

  results: [
    "Improved sales pipeline visibility through centralized workflow management",
    "Enhanced lead coordination with structured status tracking and follow-up workflows",
    "Strengthened operational decision-making with real-time analytics dashboards",
    "Simplified deal monitoring through Kanban-style sales pipeline visualization",
    "Improved reporting efficiency with integrated revenue and performance analytics",
    "Reduced workflow fragmentation by consolidating operational systems into a single platform",
    "Delivered a scalable CRM foundation for future automation and AI-powered enhancements",
    "Established a premium operational dashboard experience for modern real estate teams",
  ],
},
];
