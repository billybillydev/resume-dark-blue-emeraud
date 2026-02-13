import { Icon, IconName } from "$/ui/components/icon.component";
import { ResumeSchema } from "$/data/schema";

export type SocialProps = ResumeSchema["socials"];

const socialIconsMap = new Map<string, IconName>([
  ["website", "ri.global-fill"],
  ["youtube", "ri.youtube-fill"],
  ["github", "ri.github-line"],
  ["linkedin", "ri.linkedin-box-fill"],
  ["medium", "ri.medium-line"],
  ["x", "ri.twitter-x-fill"],
  ["twitter", "ri.twitter-x-fill"],
  ["gitlab", "ri.gitlab-fill"],
]);

export function Socials(props: SocialProps) {
  return (
    <section class={"flex flex-wrap gap-y-2 gap-x-3"}>
      {Object.entries(props).map(([key, value]) => {
        return (
          <p class="flex text-sm gap-x-2" title={value.label}>
            <Icon
              name={socialIconsMap.get(key as keyof SocialProps) as IconName}
              size={5}
            />
            <a href={value.url} target="_blank">
              {value.label}
            </a>
          </p>
        );
      })}
    </section>
  );
}
