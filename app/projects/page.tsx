import type { Metadata } from "next";

import { ProjectCardGrid, SectionHeader } from "@/components/content-sections";
import { projectsData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects | Aashish Bharath",
  description: "Selected data science and analytics projects by Aashish Bharath."
};

export default function ProjectsPage() {
  const projectSections = Object.values(projectsData);

  return (
    <main>
      <div className="page">
        <section className="hero">
          <span className="eyebrow">Projects</span>
          <h1 className="hero-title home-hero-lead">
            Applied projects with clear outcomes and lessons learned.
          </h1>
          <p className="hero-lead home-hero-lead">
            Each project reflects a practical workflow: define the problem, test
            viable approaches, and communicate decisions with transparency.
          </p>
        </section>

        {projectSections.map((section) => (
          <section className="section" key={section.title}>
            <SectionHeader title={section.title} />
            <ProjectCardGrid items={section.items} />
          </section>
        ))}
      </div>
    </main>
  );
}
