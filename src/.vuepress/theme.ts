import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://solo.lance.fun",

  author: {
    name: "Lance",
    url: "https://lance.fun",
  },

  copyright: false,

  repo: "cnlancehu/solo",

  docsDir: "src",
  docsRepo: "cnlancehu/solo-doc",

  pageInfo: ["Author", "ReadingTime", "Category", "Tag"],

  locales: {
    "/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer: "© 2025 Lance. CC-BY / MIT",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page",
      },
    },
    "/zh/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "© 2025 Lance. CC-BY / MIT",
      displayFooter: true,
      metaLocales: {
        editLink: "编辑此页",
      },
    },
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  plugins: {
    components: {
      components: ["Badge", "VPCard", "VPBanner"],
    },
    icon: {
      type: "fontawesome",

      assets: [
        "/assets/fa.css",
      ],
    },
    seo: {
      autoDescription: true,
    },
    slimsearch: {}
  },
});
