export const SITE = {
  name: 'Md Abdullahil Shafi',
  title: 'Md Abdullahil Shafi — Senior Software Engineer',
  description:
    'Senior software engineer with ~10 years building SaaS. Backend and platform engineer — I design systems that remove bottlenecks (reporting, data ingestion, reliability) and the libraries and tooling that make other engineers faster.',
  url: 'https://shafi.me',
  author: 'Md Abdullahil Shafi',
  email: 'shafi.cse.buet@gmail.com',
  role: 'Senior Software Engineer',
  specializations: ['SaaS', 'Platform Engineering', 'Distributed Systems', 'Technical Leadership', 'Full Stack'],
} as const;

export const NAV = [
  { label: 'About', href: '/about/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Products', href: '/products/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Tools', href: '/tools/' },
] as const;

export interface Social {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'stackoverflow' | 'hackerrank' | 'mail';
}

export const SOCIALS: Social[] = [
  { label: 'GitHub', url: 'https://github.com/shafi-', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/md-abdullahil-shafi', icon: 'linkedin' },
  { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/2442877/shafi', icon: 'stackoverflow' },
  { label: 'HackerRank', url: 'https://www.hackerrank.com/Shafi100', icon: 'hackerrank' },
  { label: 'Twitter', url: 'https://twitter.com/bd_shafi', icon: 'twitter' },
  { label: 'Email', url: `mailto:${SITE.email}`, icon: 'mail' },
];
