import { PlaceholderSchema } from "$/schemas/placeholder.schema";
import { ResumeSchema } from "$/schemas/resume.schema";
import {
  SoloAccordion,
  SoloAccordionContent,
  SoloAccordionTrigger,
} from "$/ui/components/accordion.component";
import { Badge } from "$/ui/components/badge.component";
import { Icon } from "$/ui/components/icon.component";

export type ExperienceProps = {
  label: PlaceholderSchema["experiences"]["label"];
  items: ResumeSchema["experiences"];
}

function dateFormat(date: Date) {
  return Intl.DateTimeFormat("fr-FR", {
    month: "long",
    year: "numeric",
  }).format(date);
}
function capitalize(value: string) {
  if (!value) {
    return "";
  }
  return value[0].toUpperCase().concat(value.slice(1));
}

export function Experiences({ items, label }: ExperienceProps) {
  return (
    <section class={"flex flex-col gap-y-4"}>
      <h2 class="font-bold text-3xl">{label}</h2>
      <ul class={"space-y-4 print:space-y-6"}>
        {items.map(
          ({
            duration: period,
            title,
            company,
            location,
            objective: objective,
            achievement: achievement,
            stack,
            context,
          }) => {
            const periodStart = dateFormat(
              new Date(period.start.year, period.start.month - 1),
            );

            const periodEnd = period.end
              ? dateFormat(new Date(period.end.year, period.end.month - 1))
              : capitalize(
                  new Intl.RelativeTimeFormat("fr", {
                    style: "long",
                    numeric: "auto",
                  }).format(0, "day"),
                );

            const props: ExperienceItemProps = {
              title,
              company,
              location,
              periodStart,
              periodEnd,
              objective,
              achievement,
              stack,
              context,
            };

            return (
              <>
                <ItemForWeb {...props} />
                <ItemForPrint {...props} />
              </>
            );
          },
        )}
      </ul>
    </section>
  );
}

type ExperienceItemProps = {
  title: ExperienceProps["items"][number]["title"];
  company: ExperienceProps["items"][number]["company"];
  location: ExperienceProps["items"][number]["location"];
  periodStart: string;
  periodEnd: string;
  objective: ExperienceProps["items"][number]["objective"];
  achievement: ExperienceProps["items"][number]["achievement"];
  stack: ExperienceProps["items"][number]["stack"];
  context: ExperienceProps["items"][number]["context"];
};

function ItemForPrint({
  title,
  company,
  location,
  periodStart,
  periodEnd,
  objective,
  achievement,
  stack,
  context,
}: ExperienceItemProps) {
  return (
    <li class="print:block print-color hidden print:break-inside-avoid space-y-1">
      <section>
        <h2 class="uppercase">{title}</h2>
        <p class={"flex gap-x-2 text-success-dark"}>
          <span>{company}</span>
          <span>({location})</span>
        </p>
        <p class={"flex items-center gap-x-2"}>
          <Icon name="ri.calendar-line" /> De {periodStart} à {periodEnd}
        </p>
      </section>
      <h3>
        <span class="underline underline-offset-2">Contexte:</span> {context}
      </h3>
      {objective ? (
        <section>
          <h3>{objective.label}:</h3>
          <ul class={"list-disc pl-4"}>
            {objective.items.map((objective) => (
              <li>{objective}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {achievement ? (
        <section>
          <h3>{achievement.label}:</h3>
          <ul class={"list-disc pl-4"}>
            {achievement.items.map((achievement) => (
              <li>{achievement}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {stack ? (
        <section>
          <h3>{stack.label}:</h3>
          <ul class={"flex flex-wrap gap-2"}>
            {stack.items.map((stack) => (
              <li class={"text-xs"}>
                <Badge class={"bg-success-dark text-white"} text={stack} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </li>
  );
}

function ItemForWeb({
  title,
  company,
  location,
  periodStart,
  periodEnd,
  objective,
  achievement,
  stack,
  context,
}: ExperienceItemProps) {
  return (
    <SoloAccordion as="li" class="p-2 border rounded print:hidden">
      <SoloAccordionTrigger class={"flex justify-between gap-x-1 py-4"}>
        <div>
          <h2 class="uppercase">{title}</h2>
          <p class={"flex gap-x-2 text-success-dark"}>
            <span>{company}</span>
            <span>({location})</span>
          </p>
          <p class={"flex items-center gap-x-2"}>
            <Icon name="ri.calendar-line" /> De {periodStart} à {periodEnd}
          </p>
        </div>
      </SoloAccordionTrigger>
      <SoloAccordionContent class={"py-4 border-t space-y-4"}>
        <h3 class={"text-md"}>
          <span class="underline underline-offset-2">Contexte:</span> {context}
        </h3>
        {objective ? (
          <section>
            <h3>{objective.label}:</h3>
            <ul class={"list-disc pl-4"}>
              {objective.items.map((objective) => (
                <li>{objective}</li>
              ))}
            </ul>
          </section>
        ) : null}
        {achievement ? (
          <section>
            <h3>{achievement.label}:</h3>
            <ul class={"list-disc pl-4"}>
              {achievement.items.map((achievement) => (
                <li>{achievement}</li>
              ))}
            </ul>
          </section>
        ) : null}
        {stack ? (
          <section>
            <h3>{stack.label}:</h3>
            <ul class={"flex flex-wrap gap-2"}>
              {stack.items.map((stack) => (
                <li class={"text-xs"}>
                  <Badge class={"bg-success-dark text-white"} text={stack} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </SoloAccordionContent>
    </SoloAccordion>
  );
}
