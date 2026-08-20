import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Projects in progress"
      description="I'm early in my journey, so these are placeholders for the work I'm planning and starting. Real projects will replace them as they ship."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 90}>
            <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-16/10 overflow-hidden border-b border-border">
                <img
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="glass absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold">
                  {project.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-2">
                  <a
                    href={project.github}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-semibold transition-colors hover:bg-accent"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
