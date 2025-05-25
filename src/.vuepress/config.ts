import { defineUserConfig } from "vuepress";
import meilisearchIndexerPlugin from "vuepress-plugin-meilisearch-indexer";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Solo",
      description: "一个保护 / 隐藏服务器端口的轻量级工具",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Solo",
      description: "A lightweight tool to protect / hide server ports",
    },
  },

  plugins: [
    meilisearchIndexerPlugin({
      indexContent: true,
      baseUrl: '',
      deploy: {
        trigger: "meilideploy = true",

        host: "https://search.lance.fun/",
        index_uid: "solo-doc",
        type: "full",
      }
    }),
  ],

  theme,
});
