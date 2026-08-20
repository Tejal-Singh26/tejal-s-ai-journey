import type { SkillLevel } from "@/data/portfolio";

const styles: Record<SkillLevel, string> = {
  Exploring: "bg-cyan/12 text-cyan",
  Learning: "bg-primary/12 text-primary",
  Practicing: "bg-violet/12 text-violet",
  "Building Projects": "bg-accent text-accent-foreground",
};

export function LevelBadge({ level }: { level: SkillLevel }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${styles[level]}`}
    >
      {level}
    </span>
  );
}
