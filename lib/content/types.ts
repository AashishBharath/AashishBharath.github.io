export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type SectionLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectItem = {
  title: string;
  summary: string;
  details: string[];
  tags: string[];
  date?: string
 
};

export type ProjectsData = {
  [key: string]: {
    title: string;
    items: ProjectItem[];
  };
};

export type ExperienceItem = {
  title: string;
  dateRange: string;
  details: string[];
};

export type ResumeEducationItem = {
  title: string;
  dateRange: string
  details: string[];
};

export type ResumeSkillGroup = {
  title: string;
  tags: string[];
};

export type ResumeData = {
  experience: ExperienceItem[];
  education: ResumeEducationItem[];
  skillGroups: ResumeSkillGroup[];
};

export type InterestGalleryItem = {
  image: ImageAsset;
  caption: string;
  href?: string;
};

export type InterestSection = {
  title: string;
  description: string;
  sectionLink?: SectionLink;
  items: InterestGalleryItem[];
};

export type InterestsData = {
  sections: InterestSection[];
};
