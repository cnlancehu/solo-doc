import { defineUserConfig } from "vuepress";
import meilisearchIndexerPlugin from "vuepress-plugin-meilisearch-indexer";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Solo",
      description: "",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Solo",
      description: "",
    },
  },

  plugins: [
    meilisearchIndexerPlugin({
      indexContent: true,
      baseUrl: '',
      filter: (page) => page.path !== '/404.html' && page.path !== '/404',
      deploy: {
        trigger: "deploy = true",

        host: "https://search.lance.fun/",
        index_uid: "solo-doc",
        type: "full",
      }
    }),
  ],

  theme,
});
