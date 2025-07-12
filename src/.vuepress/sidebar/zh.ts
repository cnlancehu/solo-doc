import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/guide/": [
    "get-started",
    {
      text: "配置文件",
      icon: "sliders-up",
      prefix: "config/",
      children: [
        "new",
        "edit",
        {
          text: "服务器",
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
    }
  ]
});
