export interface Project {
  title: string;
  description: string;
  techStack: string[]; // Changed to array for better tag handling
  githubUrl?: string;
  apkUrl?: string;
  type: "game" | "web"; // Made type required and specific
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
}
