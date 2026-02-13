import { ResumeSchema } from "$/data/schema";

export type SoftSkillsProps = ResumeSchema["softSkills"];

export function SoftSkills({ label, items }: SoftSkillsProps) {
  return (
    <section class={"flex flex-col gap-y-4 print:break-inside-avoid"}>
      <h2 class="font-bold">{label}</h2>
      <ul class={"flex flex-col gap-y-1 break-before-auto"}>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </section>
  );
}
