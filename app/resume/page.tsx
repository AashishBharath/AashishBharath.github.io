import type { Metadata } from "next";

import {
  BulletList,
  ExperienceList,
  SectionHeader,
  TagCloud
} from "@/components/content-sections";
import { resumeData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume | Aashish Bharath",
  description: "Professional experience and skills for Aashish Bharath."
};

export default function ResumePage() {
  return (
    <main>
      <div className="page">
        <section className="hero">
          <span className="eyebrow">Resume</span>
          {/**<h6 className="hero-title">
          Software Engineer specializing in scalable AI/LLM systems, multi-agent orchestration, and production-grade architecture.
          </h6>**/}
          <p className="hero-lead">
            My career thus far has been short, yet eventuful. I started my career
            in the Analytics and Data Science space. Recently, I have found myself in the world of 
            Software Developement and LLMs. This area of work fascinates and keeps me on my toes. I am in
            the constant pursuit of improvement and I hope to continue learning as much as I can.
          </p>
        </section>
        <section className="section">
          <SectionHeader title="Education & Skills" />
          <div className="resume-info-rows">
            <div className="card-grid card-grid--single-row">
              {resumeData.education.map((educationItem) => (
                <article key={educationItem.title} className="card">
                  <h3>{educationItem.title}</h3>
                  <h4>{educationItem.dateRange}</h4>
                  <BulletList items={educationItem.details} />
                </article>
              ))}
            </div>
            <div className="card-grid">
              {resumeData.skillGroups.map((skillGroup) => (
                <article key={skillGroup.title} className="card">
                  <h3>{skillGroup.title}</h3>
                  <TagCloud
                    tags={skillGroup.tags}
                    className={skillGroup.title === "Technical Stack" ? "tag-cloud--stack" : undefined}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHeader title="Experience" />
          <ExperienceList items={resumeData.experience} />
        </section>
      </div>
    </main>
  );
}
