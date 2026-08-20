import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation"
      description="My formal studies and the upskilling work running alongside them. Certifications and achievements will be added here as I earn them."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 90}>
            <article className="glass h-full rounded-2xl p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-primary">{item.specialization}</p>
                </div>
              </div>
              <p className="mt-5 text-sm font-medium">{item.institution}</p>
              <p className="text-sm text-muted-foreground">{item.period}</p>
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
                    {point}
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
