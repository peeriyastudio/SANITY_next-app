import type { PortableTextBlock } from '@portabletext/types';

export type Project = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
  tools: string[];
};