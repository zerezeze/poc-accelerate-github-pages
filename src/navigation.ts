import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: '#', // Link desativado
        },
        {
          text: 'Startup',
          href: '#', // Link desativado
        },
        {
          text: 'Mobile App',
          href: '#', // Link desativado
        },
        {
          text: 'Personal',
          href: '#', // Link desativado
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: '#', // Link desativado
        },
        {
          text: 'Services',
          href: '#', // Link desativado
        },
        {
          text: 'Pricing',
          href: '#', // Link desativado
        },
        {
          text: 'About us',
          href: '#', // Link desativado
        },
        {
          text: 'Contact',
          href: '#', // Link desativado
        },
        {
          text: 'Terms',
          href: '#', // Link desativado
        },
        {
          text: 'Privacy policy',
          href: '#', // Link desativado
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: '#', // Link desativado
        },
        {
          text: 'Long-form Sales',
          href: '#', // Link desativado
        },
        {
          text: 'Click-Through',
          href: '#', // Link desativado
        },
        {
          text: 'Product Details (or Services)',
          href: '#', // Link desativado
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: '#', // Link desativado
        },
        {
          text: 'Subscription',
          href: '#', // Link desativado
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: '#', // Link desativado
        },
        {
          text: 'Article',
          href: '#', // Link desativado
        },
        {
          text: 'Article (with MDX)',
          href: '#', // Link desativado
        },
        {
          text: 'Category Page',
          href: '#', // Link desativado
        },
        {
          text: 'Tag Page',
          href: '#', // Link desativado
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#', // Link desativado
    },
  ],
  actions: [{ text: 'Posts List', href: '#', target: '' }], // Link desativado
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' }, // Link desativado
        { text: 'Security', href: '#' }, // Link desativado
        { text: 'Team', href: '#' }, // Link desativado
        { text: 'Enterprise', href: '#' }, // Link desativado
        { text: 'Customer stories', href: '#' }, // Link desativado
        { text: 'Pricing', href: '#' }, // Link desativado
        { text: 'Resources', href: '#' }, // Link desativado
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' }, // Link desativado
        { text: 'Partners', href: '#' }, // Link desativado
        { text: 'Atom', href: '#' }, // Link desativado
        { text: 'Electron', href: '#' }, // Link desativado
        { text: 'AstroWind Desktop', href: '#' }, // Link desativado
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' }, // Link desativado
        { text: 'Community Forum', href: '#' }, // Link desativado
        { text: 'Professional Services', href: '#' }, // Link desativado
        { text: 'Skills', href: '#' }, // Link desativado
        { text: 'Status', href: '#' }, // Link desativado
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' }, // Link desativado
        { text: 'Blog', href: '#' }, // Link desativado
        { text: 'Careers', href: '#' }, // Link desativado
        { text: 'Press', href: '#' }, // Link desativado
        { text: 'Inclusion', href: '#' }, // Link desativado
        { text: 'Social Impact', href: '#' }, // Link desativado
        { text: 'Shop', href: '#' }, // Link desativado
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '#' }, // Link desativado
    { text: 'Privacy Policy', href: '#' }, // Link desativado
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' }, // Link desativado
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' }, // Link desativado
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' }, // Link desativado
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: '#' }, // Link desativado
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
};
