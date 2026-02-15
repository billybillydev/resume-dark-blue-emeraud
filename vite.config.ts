import { defineConfig } from "vite";
import htmlMutatorPlugin from "./plugins/html-mutator.plugin";

export default defineConfig({
  resolve: {
    alias: {
      $: "/src",
    },
  },
  esbuild: {
    /* Need these two properties to enable JSX in a typescript environment */
    jsx: "automatic",
    jsxImportSource: "@kitajs/html",
  },
  server: {
    port: 3001,
  },
  plugins: [htmlMutatorPlugin],
});
