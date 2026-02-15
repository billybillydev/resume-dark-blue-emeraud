import { Icon } from "$/ui/components/icon.component";
import { Sidebar, SidebarContent } from "$/ui/components/sidebar.component";
import { LeftPanel } from "$/views/left-panel/index.view";
import { RightPanel } from "$/views/right-panel/index.view";

import data from "$/data/example_resume_1.json";
import placeholder from "$/data/placeholder.json";

import { resumeSchema } from "$/schemas/resume.schema";
import { placeholderSchema } from "$/schemas/placeholder.schema";

export function App() {
  const parsedPlaceholder = placeholderSchema.safeParse(placeholder);
  if (!parsedPlaceholder.success) {
    console.error(parsedPlaceholder.error);
    return <p>Placeholder schema validation failed</p>;
  }

  const parsedData = resumeSchema.safeParse(data);
  if (!parsedData.success) {
    console.error(parsedData.error);
    return <p>Schema validation failed</p>;
  }

  const {
    name,
    title,
    summary,
    socials,
    experiences,
    education,
    contact,
    skills,
    softSkills,
    languages,
  } = data;

  return (
    <div class="relative min-h-screen grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 w-full lg:w-3/4 xl:w-1/2 mx-auto">
      <Sidebar class="md:col-span-2">
        <LeftPanel
          name={name}
          title={title}
          summary={summary}
          socials={socials}
          experiences={{ label: placeholder.experiences.label, items: experiences}}
          education={{ label: placeholder.education.label, items: education }}
          sidebarTrigger={
            <div class="px-2 flex justify-center md:hidden print:hidden">
              <button
                x-bind="trigger"
                class="bg-success-dark text-white px-4 py-2 rounded flex items-center gap-x-4"
              >
                <span>{placeholder.sideBarTrigger.label}</span>
                <Icon name="ri.arrow-right-long-line" />
              </button>
            </div>
          }
        />
        <SidebarContent>
          <RightPanel
            contact={contact}
            skills={{ label: placeholder.skills.label, items: skills}}
            softSkills={{ label: placeholder.softSkills.label, items: softSkills}}
            languages={{ label: placeholder.languages.label, items: languages}}
          />
        </SidebarContent>
      </Sidebar>
      <aside class="hidden md:block print:block print:break-after-page print:h-full col-span-1">
        <RightPanel
          contact={contact}
          skills={{ label: placeholder.skills.label, items: skills}}
          softSkills={{ label: placeholder.softSkills.label, items: softSkills}}
          languages={{ label: placeholder.languages.label, items: languages}}
        />
      </aside>
    </div>
  );
}
