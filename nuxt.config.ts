export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    host: '0.0.0.0', // Слушать все сетевые интерфейсы
    port: 3000
  },
  nitro: {
    preset: 'node-server'
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/strapi", "nuxt-yandex-metrika"],

  yandexMetrika: {
    id: 114170042,
    webvisor: true,
    clickmap: true,
    ecommerce: 'dataLayer',
    accurateTrackBounce: true,
    trackLinks: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: "Детейлинг студия в Кирове — Химчистка, полировка, оклейка авто",
      script: [
        {
          src: `https://api-maps.yandex.ru/2.1/?apikey=9d897540-fa91-405e-bb4e-9e3cb35ea96d&lang=ru_RU`,
          defer: true
        }
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Профессиональный детейлинг в Кирове: химчистка салона с сушкой, полировка кузова, оклейка бронепленкой, керамика 9H. Цены от 3500 ₽. Хлебозаводской проезд, 3А.",
        },
        {
          name: "keywords",
          content:
            "детейлинг киров, химчистка салона киров, полировка кузова киров, оклейка полиуретаном киров, бронепленка киров, керамика авто киров, предпродажная подготовка авто киров, антидождь киров"
        },
        { name: "robots", content: "index, follow" },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://detailingmaster.ru/" },
        { property: "og:locale", content: "ru_RU" },
        { property: "og:site_name", content: "Детейлинг Мастер" },
        { property: "og:title", content: "Детейлинг студия в Кирове — Химчистка, полировка, оклейка авто" },
        {
          property: "og:description",
          content: "Профессиональный уход за автомобилем в Кирове: глубокая химчистка салона, полировка кузова, керамика 9H, оклейка полиуретановой плёнкой. Гарантия качества."
        },
        { property: "og:image", content: "https://detailingmaster.ru/images/about.jpg" },
        // Twitter Cards
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Детейлинг студия в Кирове — Химчистка, полировка, оклейка авто" },
        {
          name: "twitter:description",
          content: "Профессиональный детейлинг в Кирове: химчистка, полировка, бронепленка, керамика. Гарантия и фиксированные цены."
        },
        { name: "twitter:image", content: "https://detailingmaster.ru/images/about.jpg" },
        // Local SEO Geo Targeting (Киров)
        { name: "geo.region", content: "RU-KIR" },
        { name: "geo.placename", content: "Киров" },
        { name: "geo.position", content: "58.601200;49.642910" },
        { name: "ICBM", content: "58.601200, 49.642910" },
        // Theme Colors
        { name: "theme-color", content: "#0a0a0a" },
        { name: "format-detection", content: "telephone=yes" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/favicon.ico" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Unbounded:wght@400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    configPath: "tailwind.config.ts",
  },
  image: {
    quality: 80,
    format: ["webp", "avif"],
  },
  compatibilityDate: "2024-09-01",
});