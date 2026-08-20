import { learning } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { LevelBadge } from "./LevelBadge";

export function Learning() {
  return (
    <Section
      id="learning"
      eyebrow="Learning Journey"
      title="Currently learning"
      description="Where my attention goes week to week. Stages instead of percentages, because progress isn't a number."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {learning.map((item, i) => (
          <Reveal key={item.name} delay={i * 70}>
            <article className="glass h-full rounded-2xl p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <LevelBadge level={item.stage} />
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
