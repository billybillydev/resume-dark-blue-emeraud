import { ResumeSchema } from "$/data/schema";
import { Education, EducationProps } from "$/views/left-panel/education.view";
import { ExperienceProps, Experiences } from "$/views/left-panel/experiences.view";
import { PrintButton } from "$/views/left-panel/print-button.view";
import { SocialProps, Socials } from "$/views/left-panel/socials.view";
import { Children } from "@kitajs/html";

interface LeftPanelProps {
  name: ResumeSchema["name"];
  title: ResumeSchema["title"];
  summary: ResumeSchema["summary"];
  socials: SocialProps;
  experiences: ExperienceProps["items"];
  education: EducationProps["items"];
  sidebarTrigger?: Children;
}

export function LeftPanel({
  name,
  title,
  summary,
  socials,
  experiences,
  education,
  sidebarTrigger,
}: LeftPanelProps) {
  return (
    <section class={"bg-white h-full min-h-dvh"}>
      <PrintButton />
      <div class="p-8">
        <h1 class="text-5xl text-center md:text-left">{name}</h1>
        <h2 class="text-success-dark text-center md:text-left">{title}</h2>
        <Socials {...socials} />
      </div>
      {sidebarTrigger}
      <p class="px-8">{summary}</p>
      <div class="p-2 md:p-8">
        <Experiences items={experiences} />
      </div>
      <div class="p-8">
        <Education items={education} />
      </div>
    </section>
  );
}
