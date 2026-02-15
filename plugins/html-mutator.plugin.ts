import { Plugin } from "vite";

class HtmlMutatorPlugin implements Plugin {
  name = "html-mutator";

  transformIndexHtml(html: string) {
    function useInitialsAsFavicon(html: string) {
      const name = html.match(/<title>(.*?)<\/title>/)?.[1];

      if (!name) {
        console.warn("Name not found in title tag, using default favicon");
        return html;
      }

      const size = 128;
      const radius = 16;
      const fontSize = 56;

      const initials = buildInitials(name);

      const svg = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="${size}"
          height="${size}"
          viewBox="0 0 ${size} ${size}"
          role="img"
          aria-label="${escapeXml(initials)}"
        >
          <rect
            width="${size}"
            height="${size}"
            rx="${radius}"
            ry="${radius}"
            fill="#ffffff"
          />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="central"
            fill="#000000"
            font-size="${fontSize}"
            font-weight="700"
            font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
          >
            ${initials}
          </text>
        </svg>
      `.trim();

      const svgDataUrl = `data:image/svg+xml;base64,${btoa(svg)}`;

      html = html.replace(
        `<link rel="icon" type="image/svg+xml" href="/vite.svg" />`,
        `<link rel="icon" type="image/svg+xml" href="${svgDataUrl}" />`,
      );

      return html;
    }

    function escapeXml(s: string) {
      return s.replace(/[&<>"']/g, (c) => {
        switch (c) {
          case "&":
            return "&amp;";
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case '"':
            return "&quot;";
          case "'":
            return "&#39;";
          default:
            return c;
        }
      });
    }

    function buildInitials(name: string): string {
      const names = name.split(" ");
      const initials = names.map((n) => n[0]).join("");
      return initials.toUpperCase();
    }

    return useInitialsAsFavicon(html);
  }
}

export default new HtmlMutatorPlugin();
