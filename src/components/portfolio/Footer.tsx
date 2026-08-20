import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm text-muted-foreground">
          © 2026 {profile.name}. Built with React, Tailwind CSS &amp; Craft.
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile" className="text-muted-foreground transition-colors hover:text-foreground">
            <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub profile" className="text-muted-foreground transition-colors hover:text-foreground">
            <Github className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Send an email" className="text-muted-foreground transition-colors hover:text-foreground">
            <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
