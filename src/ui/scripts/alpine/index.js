import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";

import { capitalizeDirective } from "./directive/capitalize.directive";
import { logDirective } from "./directive/log.directive";

import { clipboardMagic } from "./magic/clipboard.magic";
import { nowMagic } from "./magic/now.magic";

import { groupAccordionData } from "./data/group-accordion.data";
import { soloAccordionData } from "./data/solo-accordion.data";
import { sidebarData } from "./data/sidebar.data";
import { printData } from "./data/print.data";
import { marqueeDirective } from "$/ui/scripts/alpine/directive/marquee.directive";

/* Data */
Alpine.data("groupAccordion", groupAccordionData);
Alpine.data("soloAccordion", soloAccordionData);
Alpine.data("sidebar", sidebarData);
Alpine.data("print", printData);

/* Additional Data from project */

/* Directive */
Alpine.directive("capitalize", capitalizeDirective);
Alpine.directive("log", logDirective);
Alpine.directive("marquee", marqueeDirective);

/* Magic */
Alpine.magic("clipboard", clipboardMagic);
Alpine.magic("now", nowMagic);

/* Plugins */
Alpine.plugin(collapse);
Alpine.plugin(focus);

export default Alpine;
