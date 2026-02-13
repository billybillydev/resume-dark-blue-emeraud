import { ResumeSchema } from "$/data/schema";
import { Icon } from "$/ui/components/icon.component";

export type ContactProps = ResumeSchema["contact"];

export function Contact({ phone, email, location }: ContactProps) {
  return (
    <section class={"flex flex-col gap-y-2"}>
      <p class="flex gap-x-2">
        <Icon name="ri.phone-fill" size={6} />
        <a href={`tel:${phone}`}>{phone}</a>
      </p>
      <p class="flex space-x-2 w-full">
        <Icon name="ri.at-line" class={"shrink-0"} size={6} />
        <a
          href={`mailto:${email}`}
          class={"overflow-hidden"}
          style={{ wordWrap: "break-word" }}
        >
          <span>{email}</span>
        </a>
      </p>
      <p class="flex gap-x-2">
        <Icon name="ri.map-pin-line" size={6} />
        <a href={`https://www.google.com/maps/search/?api=1&query=${location}`}>
          {location}
        </a>
      </p>
    </section>
  );
}
