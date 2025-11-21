export interface Project {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'topographic' | 'alta';
  description: string;
  image: string;
  location: string;
  date: string;
  client: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Residential Boundary Survey',
    category: 'residential',
    description: 'Complete boundary survey for property subdivision and title documentation.',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652289348_501e5ad7.webp',
    location: 'Nairobi, Kenya',
    date: 'October 2024',
    client: 'Private Homeowner'
  },
  {
    id: 2,
    title: 'Estate Development Survey',
    category: 'residential',
    description: 'Topographic and boundary survey for 50-lot residential development.',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652291399_467cf00a.webp',
    location: 'Kiambu County',
    date: 'September 2024',
    client: 'Greenfield Developers'
  },
  {
    id: 3,
    title: 'Property Line Determination',
    category: 'residential',
    description: 'Precise property line survey for fence installation and easement verification.',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652293413_e99e58c4.webp',
    location: 'Karen, Nairobi',
    date: 'August 2024',
    client: 'Private Estate'
  },
  {
    id: 4,
    title: 'Commercial Complex Survey',
    category: 'commercial',
    description: 'Construction staking and as-built survey for multi-story office building.',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652294437_b111a5ff.webp',
    location: 'Westlands, Nairobi',
    date: 'July 2024',
    client: 'Urban Towers Ltd'
  },
  {
    id: 5,
    title: 'Shopping Mall Development',
    category: 'commercial',
    description: 'Site survey and grading plan for regional shopping center construction.',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652296930_29202e20.webp',
    location: 'Thika Road',
    date: 'June 2024',
    client: 'Retail Ventures'
  },
  {
    id: 6,
    title: 'Industrial Park Survey',
    category: 'commercial',
    description: 'Comprehensive boundary and utility survey for industrial development.',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652298954_77fd1f1d.webp',
    location: 'Athi River',
    date: 'May 2024',
    client: 'Manufacturing Corp'
  },
  {
    id: 7,
    title: 'Terrain Mapping Project',
    category: 'topographic',
    description: 'Detailed topographic survey for infrastructure planning and design.',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652300049_3bd8c95a.webp',
    location: 'Machakos County',
    date: 'April 2024',
    client: 'County Government'
  },
  {
    id: 8,
    title: 'Agricultural Land Survey',
    category: 'topographic',
    description: 'Contour mapping and drainage analysis for large-scale farm development.',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652302170_d96f41ea.webp',
    location: 'Nakuru',
    date: 'March 2024',
    client: 'AgriTech Holdings'
  },
  {
    id: 9,
    title: 'Road Corridor Survey',
    category: 'topographic',
    description: 'Topographic survey for highway expansion and alignment design.',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652304276_80698a5b.webp',
    location: 'Mombasa Road',
    date: 'February 2024',
    client: 'Kenya Roads Authority'
  },
  {
    id: 10,
    title: 'Corporate Campus ALTA',
    category: 'alta',
    description: 'ALTA/NSPS land title survey for commercial real estate transaction.',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652305370_341e8871.webp',
    location: 'Upper Hill',
    date: 'January 2024',
    client: 'Investment Group'
  },
  {
    id: 11,
    title: 'Hotel Property ALTA Survey',
    category: 'alta',
    description: 'Comprehensive ALTA survey for hotel acquisition and financing.',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652307546_243e073f.webp',
    location: 'Mombasa',
    date: 'December 2023',
    client: 'Hospitality Partners'
  },
  {
    id: 12,
    title: 'Mixed-Use Development ALTA',
    category: 'alta',
    description: 'Detailed ALTA survey for mixed-use property development financing.',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652309658_23b354a3.webp',
    location: 'Kilimani, Nairobi',
    date: 'November 2023',
    client: 'Urban Developers'
  }
];
