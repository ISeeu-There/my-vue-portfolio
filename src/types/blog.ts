export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: string[];
  content: string;
  installation: InstallationStep[];
  videoUrl?: string;
  author: string;
  publishedDate: string;
  readTime: number;
}

export interface InstallationStep {
  title: string;
  description: string;
  code?: string;
  language?: string;
}
