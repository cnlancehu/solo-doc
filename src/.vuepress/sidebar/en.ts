import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/guide/": [
    "get-started",
    {
      text: "Config",
      icon: "sliders-up",
      prefix: "config/",
      children: [
        "new",
        "edit",
        {
          text: "Server",
          icon: "server",
          prefix: "server/",
          children: [
            "aliyunecs",
            "aliyunswas",
            "qcloudlh",
            "rainyunrcs",
          ]
        },
        "run",
      ]
    },
  ]
});
