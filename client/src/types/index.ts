export type Role = 'super_admin' | 'admin' | 'coach';
export type ContentStatus = 'draft' | 'published' | 'archived';

export interface Entity {
  id: string;
  createdAt: string;
}

export interface Coach extends Entity {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  yearsOfExperience: number;
}

export interface Branch extends Entity {
  name: string;
  address: string;
  manager: string;
  phone: string;
  status: 'active' | 'inactive';
}

export interface NewsArticle extends Entity {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  status: ContentStatus;
  publishedAt: string;
}

export interface Student extends Entity {
  fullName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  parentPhone: string;
  address: string;
  branchId: string;
  currentBelt: string;
  enrollmentDate: string;
  status: 'active' | 'paused' | 'graduated' | 'inactive';
}

export interface GalleryAlbum extends Entity {
  name: string;
  description: string;
  images: string[];
}

export interface ScheduleClass {
  id: string;
  day: string;
  time: string;
  level: string;
  branch: string;
  coach: string;
}

export interface TuitionPlan {
  id: string;
  name: string;
  price: string;
  cycle: string;
  description: string;
  features: string[];
  featured?: boolean;
}
