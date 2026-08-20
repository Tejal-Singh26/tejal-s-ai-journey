import { Award } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Certifications & milestones"
      description="This space is intentionally empty for now. As I complete certifications, hackathons and workshops, they'll be listed here."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((group, i) => (
          <Reveal key={group.category} delay={i * 70}>
            <article className="h-full rounded-2xl border border-dashed border-border p-5 transition-colors hover:border-primary/40">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-secondary text-muted-foreground">
                  <Award className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold">{group.category}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
