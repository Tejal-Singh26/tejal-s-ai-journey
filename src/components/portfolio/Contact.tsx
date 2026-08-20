import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "See my code", href: profile.github, icon: Github },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app…");
  };

  const field = "mt-1.5 w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect"
      description="Open to study groups, beginner-friendly collaborations and anyone happy to share advice on AI, ML or robotics."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={field}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your message…"
                className={`${field} resize-y`}
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              This form opens your email app — no messages are stored.
            </p>
          </form>
        </Reveal>

        <Reveal delay={100}>
          <ul className="grid gap-4">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="glass flex items-center gap-4 rounded-2xl p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary">
                    <channel.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{channel.label}</span>
                    <span className="block text-sm text-muted-foreground">{channel.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
