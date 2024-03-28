import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "tr-TR",
  title: "Anti-Siyonist Hareket",
  description: "Siyonizim işgaline karşı direniş hareketi için kaynak sitesi",
  srcDir: "./src",
  themeConfig: {
    logo: { light: "sembol-light.webp", dark: "sembol-dark.webp" },
    siteTitle: false,
    darkModeSwitchLabel: "Koyu mod",
    lightModeSwitchTitle: "Aydınlık mod",
    returnToTopLabel: "Yukarı dön",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Ana Sayfa", link: "/" },
      { text: "Soru ve Cevaplar", link: "/soru-ve-cevaplar" },
    ],

    sidebar: [
      {
        text: "Belgeler",
        items: [
          { text: "İslam Deklorasyonu", link: "/islam-deklorasyonu" },
          { text: "Amerika'ya Mektup", link: "/amerikaya-mektup" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    outlineTitle: "Bu sayfada",
    footer: {
      copyright: "Copyright © 2023-present Cem Kaan Kosali",
      message: "MIT Lisansı altında yayınlanmıştır.",
    },
    docFooter: {
      prev: "Önceki",
      next: "Sonraki",
    },
  },
});
