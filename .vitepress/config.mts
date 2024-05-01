import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "tr-TR",
  title: "Anti-Siyonist Hareket",
  description: "Siyonizim işgaline karşı direniş hareketi için kaynak sitesi",
  srcDir: "./src",
  themeConfig: {
    logo: { light: "/img/sembol-light.webp", dark: "/img/sembol-dark.webp" },
    siteTitle: "Anti-Siyonist Hareket",
    darkModeSwitchLabel: "Koyu mod",
    lightModeSwitchTitle: "Aydınlık mod",
    returnToTopLabel: "Yukarı dön",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Belgeler", link: "/belgeler/" },
      // { text: "Soru ve Cevaplar", link: "/soru-ve-cevaplar" },
    ],

    sidebar: [
      {
        text: "Belgeler",
        items: [
          { text: "İsrail, Mitler ve Terör", link: "/belgeler/israil-mitler-ve-teror" },
          { text: "İslam Deklorasyonu", link: "/belgeler/islam-deklorasyonu" },
          { text: "Amerika'ya Mektup", link: "/belgeler/amerikaya-mektup" },
        ],
      },
    ],

    socialLinks: [
      { icon: "x", link: "https://twitter.com/AntiSiyonistHar" },
      { icon: "youtube", link: "https://www.youtube.com/@AntiSiyonistHar" },
      {
        icon: {
          svg: "<svg fill='#176668' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg'><title>tiktok</title><path d='M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z'></path></svg>",
        },
        link: "https://www.tiktok.com/@antisiyonisthar",
      },
      {
        icon: {
          svg: "<svg fill='#176668' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg'><title>telegram</title><path d='M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z'></path></svg>",
        },
        link: "https://t.me/AntiSiyonistHareket",
      },
      // { icon: "discord", link: "https://discord.gg/TDc4UNfK" },
    ],
    outlineTitle: "Bu sayfada",
    footer: {
      message: "gökyüzünü görebilmek için BAŞ KALDIRMALI! ",
    },
    docFooter: {
      prev: "Önceki",
      next: "Sonraki",
    },
  },
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { href: "https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap", rel: "stylesheet" }],
  ],
});
