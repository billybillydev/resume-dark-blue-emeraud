import { PlaceholderSchema } from "$/schemas/placeholder.schema";
import { ResumeSchema } from "$/schemas/resume.schema";

export type EducationProps = {
  items: ResumeSchema["education"];
  label: PlaceholderSchema["education"]["label"];
};

export function Education({ items, label }: EducationProps) {
  return (
    <section class={"flex flex-col gap-y-4"}>
      <h2 class="font-bold text-3xl">{label}</h2>
      <ul class="flex flex-col gap-y-2">
        {items.map((item) => (
          <li class={"flex justify-between gap-x-2"}>
            <div>
              <h2>{item.degree}</h2>
              <p class={"text-green-800"}>{item.institution}</p>
            </div>
            <p class={"text-base"}>{item.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
