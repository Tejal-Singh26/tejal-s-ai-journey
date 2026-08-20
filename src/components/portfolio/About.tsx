import { about } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Curious about how machines learn"
      description="A short look at where I come from and what I'm working towards."
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {about.paragraphs.map((text, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-base leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <ol className="relative space-y-8 border-l border-border pl-7">
            {about.timeline.map((item) => (
              <li key={item.title} className="relative">
                <span
                  className="absolute -left-[35px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-border bg-surface"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {item.period}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
