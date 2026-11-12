<template>
  <div v-if="showBanner" ref="banner"
    class="fixed bottom-0 left-0 right-0 z-[60] bg-primary/95 backdrop-blur-lg border-t border-white/10 shadow-2xl pb-[env(safe-area-inset-bottom)]">
    <!-- Уменьшен горизонтальный паддинг на мобильных (px-4), увеличен вертикальный для удобства чтения -->
    <div class="container mx-auto px-4 py-4 md:px-6 md:py-5">

      <!-- На мобильных элементы идут строго в колонку (items-stretch), на десктопе в строку -->
      <div class="flex flex-col items-stretch md:flex-row md:items-center justify-between gap-4 md:gap-6">

        <!-- Текст уведомления -->
        <!-- text-xs для очень маленьких экранов, sm:text-sm для обычных телефонов, leading-relaxed для читаемости -->
        <div class="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed text-center md:text-left">
          <p>
            Мы используем файлы cookie и сервисы веб-аналитики
            для улучшения работы сайта и анализа трафика.
            Продолжая использовать сайт, вы даете согласие на обработку данных
            в соответствии с нашей
            <NuxtLink to="/privacy-policy"
              class="text-white underline decoration-accent underline-offset-2 hover:text-accent transition-colors font-medium">
              Политикой конфиденциальности
            </NuxtLink>.
          </p>
        </div>

        <!-- Кнопки действия -->
        <!-- На мобильных кнопки растягиваются на всю ширину (w-full) для удобного нажатия большим пальцем -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto flex-shrink-0">

          <!-- На мобильных эту кнопку скрываем, так как ссылка уже есть в тексте, чтобы не загромождать экран -->
          <NuxtLink to="/privacy-policy"
            class="hidden md:inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-lg border border-white/10 hover:border-white/30">
            Подробнее
          </NuxtLink>

          <button @click="acceptCookies" class="btn-primary inline-flex items-center justify-center px-6 py-3.5 md:py-2.5 text-sm font-bold
            rounded-lg w-full min-h-[48px] active:scale-[0.98] transition-transform">
            Принять
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { gsap } = useGsap()

const banner = ref<HTMLElement | null>(null)
const showBanner = ref(false)
let bannerAnim: any = null

// Ключ для хранения и срок действия (например, 180 дней = ~6 месяцев)
const CONSENT_KEY = 'cookie_consent_data'
const CONSENT_DURATION_MS = 180 * 24 * 60 * 60 * 1000 

onMounted(() => {
  const consentDataStr = localStorage.getItem(CONSENT_KEY)
  let shouldShowBanner = true

  if (consentDataStr) {
    try {
      // Пытаемся распарсить данные (с защитой от старых записей, где был просто 'true')
      const data = typeof consentDataStr === 'string' && consentDataStr.startsWith('{') 
        ? JSON.parse(consentDataStr) 
        : { accepted: consentDataStr === 'true', timestamp: 0 }

      const now = Date.now()
      const isExpired = (now - data.timestamp) > CONSENT_DURATION_MS

      // Если согласие дано и срок еще не истек, баннер не показываем
      if (data.accepted && !isExpired) {
        shouldShowBanner = false
      }
    } catch (e) {
      // Если данные повреждены, на всякий случай показываем баннер
      console.warn('Ошибка парсинга данных cookie consent', e)
    }
  }

  if (shouldShowBanner) {
    showBanner.value = true

    // Анимируем появление снизу
    nextTick(() => {
      if (banner.value) {
        bannerAnim = gsap.fromTo(
          banner.value,
          { y: '100%' },
          { y: '0%', duration: 0.5, ease: 'power3.out' }
        )
      }
    })
  }
})

const acceptCookies = () => {
  // 1. Сохраняем согласие с текущей меткой времени
  const consentData = {
    accepted: true,
    timestamp: Date.now()
  }
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData))

  // 2. Анимируем исчезновение
  if (bannerAnim && banner.value) {
    gsap.to(banner.value, {
      y: '100%',
      duration: 0.4,
      ease: 'power3.in',
      onComplete: () => {
        showBanner.value = false
      }
    })
  } else {
    showBanner.value = false
  }
}

onUnmounted(() => {
  if (bannerAnim) {
    bannerAnim.kill()
  }
})
</script>