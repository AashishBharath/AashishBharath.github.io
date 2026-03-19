import interestsContent from "@/lib/content/interests.json";
import projectsContent from "@/lib/content/projects.json";
import resumeContent from "@/lib/content/resume.json";

import type { InterestsData, ProjectsData, ResumeData } from "@/lib/content/types";

export const interestsData = interestsContent as InterestsData;
export const projectsData = projectsContent as ProjectsData;
export const resumeData = resumeContent as ResumeData;
