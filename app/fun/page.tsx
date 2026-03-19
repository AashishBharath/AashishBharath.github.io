import type { Metadata } from "next";

import { GallerySection } from "@/components/content-sections";
import { interestsData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Interests | Aashish Bharath",
  description: "Creative interests and photography by Aashish Bharath."
};

export default function FunPage() {
  return (
    <main>
      <div className="page">
        <section className="hero">
          <span className="eyebrow">Interests</span>
          <h1 className="hero-title">
            Creative work keeps my perspective sharp.
          </h1>
          <p className="hero-lead">
            I enjoy experimenting with AI image generation and drone
            photography. Both help me think about composition, context, and
            storytelling in visual form.
          </p>
        </section>

        {interestsData.sections.map((section) => (
          <section key={section.title} className="section">
            <GallerySection section={section} />
          </section>
        ))}
      </div>
    </main>
  );
}
