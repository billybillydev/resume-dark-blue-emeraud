import { ResumeSchema } from "$/data/schema";

export type EducationProps = {
    items: ResumeSchema["education"]
}

export function Education({ items }: EducationProps) {
    return (
        <section class={"flex flex-col gap-y-4"}>
            <h2 class="font-bold text-3xl">Diplômes et formations</h2>
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
