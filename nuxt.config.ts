export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0', // Слушать все сетевые интерфейсы
    port: 3000
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/strapi", "nuxt-yandex-metrika"],

  yandexMetrika: {
    id: 114170042,
    webvisor: true,
    clickmap: true,
    ecommerce: 'dataLayer',
    accurateTrackBounce: true,
    trackLinks: true,
    // ssr: true можно добавить, если модуль поддерживает эту опцию в вашей версии
  },
  app: {
    head: {
      title: "Детейлинг студия в Кирове",
      script: [
        {
          src: `https://api-maps.yandex.ru/2.1/?apikey=9d897540-fa91-405e-bb4e-9e3cb35ea96d&lang=ru_RU`,
          defer: true,
          onload: 'initYandexMap()' // Вызовем функцию после загрузки
        }
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Профессиональный детейлинг: химчистка, полировка, оклейка в Кирове",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
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