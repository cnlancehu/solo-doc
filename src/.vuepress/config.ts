import { defineUserConfig } from "vuepress";
import meilisearchPlugin from '../../index/search.js';
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
    meilisearchPlugin({
      outputFile: 'meilisearch-index.json',
      indexContent: true,
      baseUrl: 'https://solo.lance.fun',
      filter: (page) => page.path !== '/404.html' && page.path !== '/404',
    }),
  ],

  theme,
});
