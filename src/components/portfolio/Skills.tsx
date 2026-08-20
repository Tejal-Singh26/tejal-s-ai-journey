import { Brain, Code2, Wrench } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { LevelBadge } from "./LevelBadge";

const icons = { code: Code2, brain: Brain, wrench: Wrench };

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I'm working with"
      description="An honest snapshot of where I am today. Each skill is labelled by how far along I actually am — no inflated claims."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <Reveal key={group.category} delay={i * 90}>
              <article className="glass h-full rounded-2xl p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold">{group.category}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface/60 px-3.5 py-2.5"
                    >
                      <span className="text-sm font-medium">{skill.name}</span>
                      <LevelBadge level={skill.level} />
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
