export interface Project {
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
  githubUrl: string;
  apkUrl?: string;
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
