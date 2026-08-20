import { Bot, Brain, Cpu, Hammer, Puzzle, Sparkles } from "lucide-react";
import { interests } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const iconMap = { Brain, Sparkles, Bot, Cpu, Puzzle, Hammer } as const;

export function Interests() {
  return (
    <Section
      id="interests"
      eyebrow="Interests"
      title="What keeps me curious"
      description="The areas I keep coming back to, in class and outside it."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((item, i) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Sparkles;
          return (
            <Reveal key={item.name} delay={i * 70}>
              <article className="group glass flex h-full items-start gap-4 rounded-2xl p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet/12 text-violet transition-colors group-hover:bg-primary/12 group-hover:text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
