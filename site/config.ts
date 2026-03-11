export interface SiteConfig {
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lang: string;
  base: string;
  website: string;
  social: Record<string, string>;
  googleAnalyticsId?: string;
  homeHeroDescription: string;
  blogDescription: string;
  projectsDescription: string;

  // Homepage post counts
  featuredPostsCount: number;
  latestPostsCount: number;

  // Homepage projects
  homeProjects: {
    enabled: boolean;
    count: number;
  };

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: boolean;
    filePath: string; // Path to markdown file with CTA content
  };

  // Homepage Hero block
  hero: {
    enabled: boolean;
    filePath: string;
  };

  // Giscus comments configuration
  comments: {
    enabled: boolean;
    repo: string; // e.g., 'username/repo'
    repoId: string;
    category: string;
    categoryId: string;
    mapping: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
    reactionsEnabled: boolean;
    emitMetadata: boolean;
    inputPosition: 'top' | 'bottom';
    theme: string; // e.g., 'preferred_color_scheme', 'light', 'dark'
    lang: string;
  };
}

export const SITE: SiteConfig = {
  author: '0x1337',
  desc: '0xDispatch - The 0x1337 Newsletter',
  title: '0xDispatch',
  ogImage: 'og.png',
  lang: 'en-US',
  base: '/newsletter',
  website: 'https://0x1337github.io',
  social: {
    github: 'https://github.com/0x1337club',
    linkedin: 'https://www.linkedin.com/company/0x1337/',
    instagram: 'https://www.instagram.com/0x1337iiith',
    email: 'mailto:hacking.club@students.iiit.ac.in',
  },
  googleAnalyticsId: '', // Example: 'G-XXXXXXXXXX'
  homeHeroDescription: 'Welcome to 0xDispatch.',
  blogDescription: 'Transmissions from the grid.',
  projectsDescription: 'Active operations and tools.',

  // Homepage post counts
  featuredPostsCount: 3,
  latestPostsCount: 3,

  // Homepage projects
  homeProjects: {
    enabled: false,
    count: 0,
  },

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: false,
    filePath: 'site/cta.md',
  },

  hero: {
    enabled: true,
    filePath: 'site/hero.md',
  },

  // Giscus comments configuration
  // Get your configuration from https://giscus.app
  comments: {
    enabled: true, // Set to true after filling in the IDs below
    repo: '0x1337iiit/newsletter', // Your GitHub repository
    repoId: 'R_kgDORjtw2g', // Get from https://giscus.app - enter repo above and copy the value
    category: 'General', // GitHub Discussions category name
    categoryId: 'DIC_kwDORjtw2s4C4ItM', // Get from https://giscus.app - select category and copy the value
    mapping: 'pathname',
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'top',
    theme: 'preferred_color_scheme', // Automatically matches your site theme
    lang: 'en',
  },
};
