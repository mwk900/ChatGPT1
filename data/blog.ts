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
    slug: 'learning-from-building-accessible-ui',
    title: '[BLOG_POST_TITLE] Learning from Building Accessible UI',
    date: '2026-01-10',
    readTime: '6 min read',
    category: 'Learning',
    excerpt: 'A quick summary of practical accessibility upgrades that improved usability and user confidence.',
    content: [
      '[BLOG_POST_CONTENT] Start by replacing this paragraph with your own experience.',
      'I focused on color contrast, keyboard focus states, and clear button labels. The improvements were small but meaningful.',
      'Next, I tested forms with screen readers and simplified helper text to make error recovery easier.'
    ]
  },
  {
    slug: 'project-breakdown-portfolio-redesign',
    title: '[BLOG_POST_TITLE] Project Breakdown: Portfolio Redesign',
    date: '2025-12-02',
    readTime: '7 min read',
    category: 'Projects',
    excerpt: 'An overview of a redesign process from research and sketches to polished interaction patterns.',
    content: [
      '[BLOG_POST_CONTENT] Replace this with your own case study.',
      'The project started with a content audit to ensure each section had one clear purpose.',
      'Framer Motion helped create consistent entrance animations that made transitions feel intentional.'
    ]
  },
  {
    slug: 'industry-insight-shipping-faster',
    title: '[BLOG_POST_TITLE] Industry Insight: Shipping Faster with Better Scope',
    date: '2025-10-15',
    readTime: '5 min read',
    category: 'Insights',
    excerpt: 'How narrowing project scope can increase quality and speed while reducing stress for teams.',
    content: [
      '[BLOG_POST_CONTENT] Add your own perspective here.',
      'I use an MVP checklist and weekly demos to keep goals realistic and visible.',
      'Better scope doesn\'t mean smaller impact—it means focusing effort where users feel it most.'
    ]
  }
];
