<template>
  <section id="contacts" class="py-16 md:py-24 lg:py-32 relative">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="section-header">
        <h2 ref="title" class="section-title">КОНТАКТЫ</h2>
        <p class="section-subtitle">
          Запишитесь на осмотр или задайте любой вопрос мастерам студии
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
        <!-- Info -->
        <div ref="info" class="space-y-6 md:space-y-8">
          <!-- Адрес -->
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg sm:text-xl font-bold text-text-primary mb-1 sm:mb-2">Адрес</h3>
              <p class="text-sm sm:text-base text-text-secondary">Киров, Хлебозаводской проезд, 3А</p>
            </div>
          </div>

          <!-- Телефон -->
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg sm:text-xl font-bold text-text-primary mb-1 sm:mb-2">Телефон</h3>
              <a href="tel:+79229159737" class="text-sm sm:text-base text-text-secondary hover:text-accent transition-colors font-medium">
                +7 922 915-97-37
              </a>
            </div>
          </div>

          <!-- Соцсети -->
          <div class="pt-4 md:pt-6">
            <h3 class="text-lg sm:text-xl font-bold text-text-primary mb-4 md:mb-6">Мы в соцсетях</h3>
            <SocialLinks />
          </div>
        </div>

        <!-- Карта -->
        <div 
          ref="mapContainer" 
          class="aspect-[4/3] sm:aspect-square min-h-[280px] sm:min-h-[350px] w-full rounded-2xl overflow-hidden bg-primary-card border border-neutral-800 shadow-2xl shadow-black/50"
        >
          <!-- Контейнер для Яндекс.Карты -->
          <div id="yandex-map" class="w-full h-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { gsap } = useGsap()

const title = ref<HTMLElement | null>(null)
const info = ref<HTMLElement | null>(null)
const mapContainer = ref<HTMLElement | null>(null)

// Координаты студии (Хлебозаводской проезд, 3А, Киров)
const STUDIO_COORDS = [58.601200, 49.642910] 

onMounted(async () => {
  await nextTick()

  if (!title.value || !info.value || !mapContainer.value) return

  // Анимация появления контактов
  gsap.fromTo(
    title.value,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: title.value,
        start: 'top 80%'
      }
    }
  )

  const infoChildren = info.value.children
  if (infoChildren.length > 0) {
    gsap.fromTo(
      infoChildren,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: info.value,
          start: 'top 80%'
        }
      }
    )
  }

  // Инициализация карты
  const checkAndInitMap = () => {
    if (window.ymaps) {
      initYandexMap()
    } else {
      let retries = 0
      const timer = setInterval(() => {
        retries++
        if (window.ymaps) {
          clearInterval(timer)
          initYandexMap()
        } else if (retries > 30) {
          clearInterval(timer)
        }
      }, 300)
    }
  }

  // Также делаем функцию доступной глобально, если сторонний скрипт попытается ее вызвать
  if (typeof window !== 'undefined') {
    (window as any).initYandexMap = initYandexMap
  }

  const mapObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        checkAndInitMap()
        mapObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  mapObserver.observe(mapContainer.value)
})

// Функция инициализации карты (вызывается после загрузки API)
function initYandexMap() {
  if (typeof window === 'undefined' || !window.ymaps || !document.getElementById('yandex-map')) return

  window.ymaps.ready(() => {
    const container = document.getElementById('yandex-map')
    if (!container || container.children.length > 0) return

    const map = new window.ymaps.Map('yandex-map', {
      center: STUDIO_COORDS,
      zoom: 16,
      controls: ['zoomControl', 'fullscreenControl'] // Только нужные элементы управления
    }, {
      suppressMapOpenBlock: true // Убираем блок "Открыть в Яндекс.Картах"
    })

    // Темная тема карты (через пользовательский стиль)
    map.options.set('theme', 'dark') 

    // Маркер студии
    const placemark = new window.ymaps.Placemark(STUDIO_COORDS, {
      hintContent: 'Детейлинг студия',
      balloonContent: `
        <div style="padding: 10px; font-family: sans-serif;">
          <strong style="font-size: 16px; color: #fff;">Детейлинг студия</strong><br>
          <span style="color: #aaa;">Киров, Хлебозаводской проезд, 3А</span><br>
          <a href="tel:+79229159737" style="color: #c8a45a; text-decoration: none; margin-top: 8px; display: inline-block;">
            +7 922 915-97-37
          </a>
        </div>
      `,
      iconCaption: 'Студия'
    }, {
      preset: 'islands#darkGreenDotIconWithCaption', // Темно-зеленый маркер (подходит под B&W)
      iconColor: '#ffffff'
    })

    map.geoObjects.add(placemark)

    // Отключаем скролл карты колесиком мыши (чтобы не мешал прокрутке страницы)
    map.behaviors.disable('scrollZoom')
  })
}
</script>