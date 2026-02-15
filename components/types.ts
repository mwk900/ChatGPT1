export type PortfolioData = {
  personal: {
    name: string;
    title: string;
    bio: string;
    email: string;
    image: string;
  };
  skills: string[];
  projects: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    link: string;
  }[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
};
