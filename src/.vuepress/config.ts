import { defineUserConfig } from "vuepress";
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

  theme,
});
