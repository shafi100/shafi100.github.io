export type ProductStatus = 'Live' | 'In development' | 'Coming soon';

export interface Product {
  name: string;
  tagline: string;
  description: string;
  role: string;
  status: ProductStatus;
  /** external product URL — or an internal page link (e.g. "/products/") */
  url?: string;
  /** badge for products without a public URL */
  note?: string;
  tech?: string[];
  /** lifecycle areas the product covers */
  ownership?: string[];
}

export const products: Product[] = [
  {
    name: 'MyDokan',
    tagline: 'The entire loop from user conversations to code, deployment, support and marketing — run by one person.',
    description:
      'MyDokan is a product where I operate as CEO / Chief of Everything, owning the complete product lifecycle: talking directly with users, identifying problems and opportunities, planning and prioritizing features, designing and implementing solutions, and running the day-to-day operation.',
    role: 'CEO / Chief of Everything',
    status: 'Live',
    url: '/products/',
    note: 'Distributed privately',
    tech: ['Supabase', 'Flutter', 'Dart', 'Android'],
    ownership: [
      'Product — user conversations, problem discovery, feature planning and prioritization',
      'Engineering — architecture, frontend and backend development, deployment, maintenance and performance',
      'Business — marketing, customer communication, support, operations and delivery',
    ],
  },
];
