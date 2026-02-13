import { Icon } from "$/ui/components/icon.component";
import { Sidebar, SidebarContent } from "$/ui/components/sidebar.component";
import { LeftPanel } from "$/views/left-panel/index.view";
import { RightPanel } from "$/views/right-panel/index.view";

import data from "$/data/example_resume_3.json";
import { schema } from "$/data/schema";

export function App() {
  const parsedData = schema.safeParse(data);

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
    <div class="min-h-screen grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 w-full lg:w-3/4 xl:w-1/2 mx-auto">
      <Sidebar class="col-span-2">
        <LeftPanel
          name={name}
          title={title}
          summary={summary}
          socials={socials}
          experiences={experiences}
          education={education}
          sidebarTrigger={
            <div class="px-2 flex justify-center md:hidden print:hidden">
              <button
                x-bind="trigger"
                class="bg-success-dark text-white px-4 py-2 rounded flex items-center gap-x-4"
              >
                <span>Contact & Compétences</span>
                <Icon name="ri.arrow-right-long-line" />
              </button>
            </div>
          }
        />
        <SidebarContent>
          <RightPanel
            contact={contact}
            skills={skills}
            softSkills={softSkills}
            languages={languages}
          />
        </SidebarContent>
      </Sidebar>
      <section class="hidden md:block print:block col-span-1">
        <RightPanel
          contact={contact}
          skills={skills}
          softSkills={softSkills}
          languages={languages}
        />
      </section>
    </div>
  );
}
