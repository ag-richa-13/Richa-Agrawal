export interface Project {
  title: string;
  description: string;
  techStack: string;
  githubUrl?: string;  // Made optional
  apkUrl?: string;     // Already optional
  type?: string;       // Added to distinguish between game and web projects
}

export interface BlogPost {
  title: string;
  url: string;
  description: string;
  imageUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade?: string;
}

export interface Achievement {
  title: string;
  description: string;
  imageUrl?: string;
}
