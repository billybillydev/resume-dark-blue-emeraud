import { ResumeSchema } from "$/data/schema";

export type SkillsProps = ResumeSchema["skills"];

export function Skills({ items, label }: SkillsProps) {
  return (
    <section class={"flex flex-col gap-y-4"}>
      <h2 class="font-bold">{label}</h2>
      <ul class={"flex flex-col gap-y-4"}>
        {items.map(({ label, items }) => (
          <li>
            <h3>{label}</h3>
            <ul class={"list-inside pl-2"}>
              {items.map((skill) => (
                <li class="text-sm">{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
