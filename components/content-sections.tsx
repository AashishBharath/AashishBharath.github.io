import Image from "next/image";
import Link from "next/link";

import type {
  ExperienceItem,
  InterestSection,
  ProjectItem,
  SectionLink
} from "@/lib/content/types";

function getLinkAttributes(external?: boolean) {
  if (!external) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noopener noreferrer"
  };
}

export function SectionHeader({
  title,
  link
}: {
  title: string;
  link?: SectionLink;
}) {
  return (
    <div className="section-heading">
      <h2 className="section-title">{title}</h2>
      {link ? (
        <Link href={link.href} {...getLinkAttributes(link.external)}>
          {link.label}
        </Link>
      ) : null}
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-compact">
      {items.map((item, index) => (
        <li key={`${index}-${item}`}>{item}</li>
      ))}
    </ul>
  );
}

export function TagCloud({
  tags,
  className
}: {
  tags: string[];
  className?: string;
}) {
  return (
    <div className={className ? `tag-cloud ${className}` : "tag-cloud"}>
      {tags.map((tag, index) => (
        <span key={`${index}-${tag}`} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function ProjectCardGrid({ items }: { items: ProjectItem[] }) {
  return (
    <div className="card-grid">
      {items.map((project) => (
        <article key={project.title} className="card">
          <h2>{project.title} ({project.date})</h2>
          <p>{project.summary}</p>
          <BulletList items={project.details} />
          <TagCloud tags={project.tags} />

        </article>
      ))}
    </div>
  );
}

export function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article key={item.title} className="timeline-item">
          <div className="timeline-top">
            <h3 className="timeline-role">{item.title}</h3>
            <p className="timeline-meta">{item.dateRange}</p>
          </div>
          <BulletList items={item.details} />
        </article>
      ))}
    </div>
  );
}

export function GallerySection({ section }: { section: InterestSection }) {
  return (
    <>
      <SectionHeader title={section.title} link={section.sectionLink} />
      <p className="section-copy">{section.description}</p>
      <div className="gallery">
        {section.items.map((item) => {
          const image = (
            <div className="media-frame media-frame--gallery">
              <Image
                className="gallery-image"
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(max-width: 820px) 100vw, (max-width: 1200px) 48vw, 340px"
              />
            </div>
          );

          return (
            <figure key={`${item.caption}-${item.image.src}`}>
              {item.href ? (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image}
                </Link>
              ) : (
                image
              )}
              <figcaption>{item.caption}</figcaption>
            </figure>
          );
        })}
      </div>
    </>
  );
}
