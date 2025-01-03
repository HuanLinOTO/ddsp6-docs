import { defineConfig } from "vitepress";
import afd_svg from "./afd_svg";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DDSP 6.0 整合包文档",
  description: "一个 DDSP 6.0 的非官方整合包文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "全流程教程", link: "/start/index" },
      { text: "常见问题", link: "/faq/index" },
      { text: "ModelHub", link: "/model_hub/index" },
    ],

    sidebar: [
      {
        text: "全流程教程",
        items: [
          { text: "更新日志", link: "/start/changelog" },
          { text: "下载与安装", link: "/start/download" },
          { text: "正式使用", link: "/start/launch" },
        ],
      },
      {
        text: "常见问题",
        items: [{ text: "常见问题-首页", link: "/faq/index" }],
      },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/huanlinoto/ddsp6-docs" },
      { icon: { svg: afd_svg }, link: "https://afdian.net/a/dwhlqwq" },
    ],
    footer: {
      message:
        '<a href="http://beian.miit.gov.cn/?spm=a2c4g.11174386.n2.3.41d561dbuHrgEv">备案 苏ICP备2024094491号-3</a> <br> 🚀 <a href="https://github.com/HuanLinOTO/ddsp6-docs/commit/|| CommitHash ||">|| CommitHashShort ||</a> || DeployTime ||',
      copyright: "Copyright © 2024 多玩幻灵qwq",
    },
  },
});
