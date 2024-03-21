import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "tr-TR",
  title: "Anti-Siyonist Hareket",
  description: "Siyonizim işgaline karşı direniş hareketi için kaynak sitesi",
  srcDir: "./src",
  themeConfig: {
    docFooter: {
      prev: "Önceki",
      next: "Sonraki",
    },
    returnToTopLabel: "Yukarı dön",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Soru ve Cevaplar", link: "/soru-ve-cevaplar" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
