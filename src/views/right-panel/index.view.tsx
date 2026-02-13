import { Contact, ContactProps } from "$/views/right-panel/contact.view";
import { Languages, LanguagesProps } from "$/views/right-panel/languages.view";
import { Skills, SkillsProps } from "$/views/right-panel/skills.view";
import { SoftSkills, SoftSkillsProps } from "$/views/right-panel/soft-skills.view";

interface RightPanelProps {
    contact: ContactProps;
    skills: SkillsProps["items"];
    softSkills: SoftSkillsProps;
    languages: LanguagesProps;
}

export function RightPanel({ contact, skills, softSkills, languages }: RightPanelProps) {

  return (
    <div class={"md:h-full print:h-full print-color bg-success-dark print:bg-success-dark text-white px-4 md:px-8 py-8 md:py-16 flex flex-col gap-y-8"}>
      <Contact {...contact} />
      <Skills items={skills} />
      <SoftSkills {...softSkills} />
      <Languages {...languages} />
    </div>
  );
}
