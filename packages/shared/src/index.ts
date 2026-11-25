export const roles = ['super_admin', 'admin', 'coach'] as const;
export type Role = (typeof roles)[number];

export type ContentStatus = 'draft' | 'published' | 'archived';
export type StudentStatus = 'active' | 'paused' | 'graduated' | 'inactive';

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Branch extends BaseEntity {
  name: string;
  address: string;
  manager: string;
  phone: string;
  status: 'active' | 'inactive';
}

export interface Coach extends BaseEntity {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  yearsOfExperience: number;
}

export interface NewsArticle extends BaseEntity {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  status: ContentStatus;
  publishedAt?: string;
}

export interface Student extends BaseEntity {
  fullName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  parentPhone: string;
  address: string;
  branchId: string;
  currentBelt: string;
  enrollmentDate: string;
  status: StudentStatus;
}

export interface GalleryAlbum extends BaseEntity {
  name: string;
  description: string;
  images: string[];
  createdAt: string;
}
