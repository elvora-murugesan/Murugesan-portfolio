export interface PortraitPose {
  id: string;
  poseNumber: string;
  name: string;
  filename: string;
  image: string;
  description: string;
  idealUsage: string;
  cameraAngle: string;
  lightingSpecs: {
    key: string;
    ambient: string;
    rim: string;
  };
}

export interface PortfolioSlide {
  id: string;
  number: string;
  tagline: string;
  titleRed: string;
  titleWhite: string;
  description: string;
  image: string;
  detailImage: string;
  badge: string;
  year: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Automotive' | 'Details' | 'Night Run' | 'Editorial' | 'Portraits';
  image: string;
  aspectRatio: string;
  location: string;
  camera: string;
  iso: string;
  shutter: string;
  description: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  coverImage: string;
  tags: string[];
}

export interface ColorToken {
  name: string;
  hex: string;
  role: string;
  usage: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  metrics: string;
  github?: string;
  live?: string;
}
