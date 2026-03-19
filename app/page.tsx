import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aashish Bharath | Data Science Portfolio",
  description:
    "Personal website of Aashish Bharath, showcasing projects, experience, and interests in data science and analytics."
};

export default function HomePage() {
  return (
    <main>
      <div className="page">
        <section className="hero">
          <div>
            
            
            <p className="hero-lead">
            Hi there! My name is{" "}
            <Link
              href="https://www.linkedin.com/in/aashishbharath/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aashish
            </Link>
            . Nice to meet you. 
            </p>
            <div className="button-row">
              <Link className="button button--primary" href="/projects">
                View Projects
              </Link>
              <Link className="button button--secondary" href="/resume">
                View Resume
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2 className="section-title">What I Focus On</h2>
          </div>
          <div className="card-grid">
            <article className="card">
            <h3>Impact</h3>
              <p>
                Whatever I do, I want to create a positive impact on those around me.
              </p>
            </article>
            <article className="card">
              <h3>Curiosity</h3>
              <p>
                I strongly believe that if you approach every interaction with curiosity, you will be better for it.
              </p>
            </article>
            <article className="card">
              <h3>Scalability & Efficiency</h3>
              <p>
                I constantly look to make the lives of others and myself easier by creating
                repeatable, re-usable, and scalabale processes. 
              </p>
            </article>
          </div>
        </section>
{/** 
        <section className="section">
          <div className="section-heading">
            <h2 className="section-title">Featured Experience</h2>
            <Link href="/projects">See all projects</Link>
          </div>
          <div className="kpi-row">
            <div className="kpi">
              <p className="kpi-value">3+</p>
              <p className="kpi-label">Major analytics projects delivered</p>
            </div>
            <div className="kpi">
              <p className="kpi-value">ML + Forecasting</p>
              <p className="kpi-label">
                Applied to real procurement and enrollment data
              </p>
            </div>
            <div className="kpi">
              <p className="kpi-value">Automation Mindset</p>
              <p className="kpi-label">
                Built reusable tools for repeated model testing
              </p>
            </div>
          </div>
        </section>
        */}
      </div>
    </main>
  );
}
