
export interface Course {
  id: string;
  title: string;
  price: string;
  image: string;
  link: string;
  description?: string;
  duration?: string;
  syllabus?: string[];
  features?: string[];
  instructor?: string;
  fullPrice?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
}

export interface Faculty {
  id: string;
  name: string;
  description: string;
  dean: string;
  departments: string[];
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
