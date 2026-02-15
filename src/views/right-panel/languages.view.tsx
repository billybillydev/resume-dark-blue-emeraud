import { ResumeSchema } from "$/data/schema";

export type LanguagesProps = ResumeSchema["languages"];

export function Languages({ label, items }: LanguagesProps) {
  return (
    <section class={"flex flex-col gap-y-4"}>
      <h2 class="font-bold">{label}</h2>
      <ul class={"flex flex-col gap-y-1"}>
        {items.map((item) => (
          <li>{item.label} {item.proficiency && `(${item.proficiency})`}</li>
        ))}
      </ul>
    </section>
  );
}
