import { PlaceholderSchema } from "$/schemas/placeholder.schema";
import { ResumeSchema } from "$/schemas/resume.schema";

export type SkillsProps = {
  items: ResumeSchema["skills"];
  label: PlaceholderSchema["skills"]["label"];
};

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
