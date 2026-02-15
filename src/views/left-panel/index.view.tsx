import { ResumeSchema } from "$/data/schema";
import { Education, EducationProps } from "$/views/left-panel/education.view";
import {
  ExperienceProps,
  Experiences,
} from "$/views/left-panel/experiences.view";
import { PrintButton } from "$/views/left-panel/print-button.view";
import { SocialProps, Socials } from "$/views/left-panel/socials.view";
import { Children } from "@kitajs/html";

interface LeftPanelProps {
  name: ResumeSchema["name"];
  title: ResumeSchema["title"];
  summary: ResumeSchema["summary"];
  socials: SocialProps;
  experiences: ExperienceProps;
  education: EducationProps;
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
    <main class={"bg-white h-full min-h-dvh"}>
      <PrintButton />
      <div class="p-4 md:p-8">
        <h1 class="text-5xl text-center md:text-left">{name}</h1>
        <h2 class="text-success-dark text-center md:text-left text-balance">
          {title}
        </h2>
        <Socials {...socials} />
      </div>
      {sidebarTrigger}
      <p class="px-2 md:px-8 py-2">{summary}</p>
      <div class="p-2 md:p-8">
        <Experiences {...experiences} />
      </div>
      <div class="p-8">
        <Education {...education} />
      </div>
    </main>
  );
}
