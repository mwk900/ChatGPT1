export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: 'Learning' | 'Projects' | 'Insights';
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'improving-enquiry-rate-with-clear-cta',
    title: 'Improving Enquiry Rate with Clear CTA Layouts',
    date: '2026-01-10',
    readTime: '6 min read',
    category: 'Learning',
    excerpt:
      'A practical breakdown of page sections and call-to-action placement that helps service businesses generate more enquiries.',
    content: [
      'Most small-business websites lose leads because visitors are unsure what to do next. The fix is usually simple: one clear action per section and consistent CTA labels.',
      'I usually map each page to one primary action, then support it with proof points and short benefit copy. This keeps pages focused and easier to scan on mobile.',
      'Even modest updates to structure and CTA wording can make a noticeable difference in enquiry quality.'
    ]
  },
  {
    slug: 'garage-website-demo-breakdown',
    title: 'Garage Website Demo: Structure that Supports Bookings',
    date: '2025-12-02',
    readTime: '7 min read',
    category: 'Projects',
    excerpt:
      'How I structured a local garage demo to highlight services quickly and guide users into booking or contacting.',
    content: [
      'The goal was to create trust fast: clear service summaries, contact actions above the fold, and mobile-first spacing for on-the-go users.',
      'I used a sticky navigation with prominent enquiry links so key actions stay visible while browsing service sections.',
      'This kind of structure is repeatable for many service companies that rely on phone and form leads.'
    ]
  },
  {
    slug: 'faster-delivery-with-modern-workflows',
    title: 'Delivering Faster with Modern Workflows',
    date: '2025-10-15',
    readTime: '5 min read',
    category: 'Insights',
    excerpt:
      'Why combining templates, automation, and AI-assisted tooling helps freelance projects ship faster without lowering quality.',
    content: [
      'Small businesses often need websites live quickly. The right workflow makes that possible without cutting corners.',
      'I use structured planning, reusable components, and AI-assisted tasks for repetitive work, while still reviewing content and UX decisions carefully.',
      'The outcome is faster delivery, clearer communication, and more predictable project timelines.'
    ]
  }
];
