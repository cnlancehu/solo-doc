import { defineUserConfig } from "vuepress";

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

  theme,
});
