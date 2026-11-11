<template>
  <div class="min-h-screen bg-primary text-text-primary flex flex-col justify-between relative overflow-hidden font-sans select-none">
    <!-- Ambient glowing backdrop -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>

    <!-- Header with Logo -->
    <header class="container mx-auto px-4 md:px-6 py-6 flex items-center justify-between relative z-10">
      <button @click="handleError('/')" class="flex-shrink-0 cursor-pointer focus:outline-none" aria-label="На главную">
        <NuxtImg
          src="/images/logo.png"
          alt="Детейлинг студия"
          class="h-10 md:h-12 w-auto"
          width="1953"
          height="582"
          format="webp"
        />
      </button>

      <a
        href="tel:+79229159737"
        class="text-sm font-medium text-text-secondary hover:text-white transition-colors flex items-center gap-2"
      >
        <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span class="hidden sm:inline">+7 922 915-97-37</span>
      </a>
    </header>

    <!-- Main Error Content -->
    <main class="container mx-auto px-4 md:px-6 py-12 flex-1 flex items-center justify-center relative z-10">
      <div class="max-w-2xl w-full text-center">
        <!-- Error Code Display with Subtle Glow -->
        <div class="relative inline-block mb-6">
          <span class="text-7xl sm:text-9xl md:text-[13rem] font-black font-display tracking-tighter leading-none text-gradient block select-none">
            {{ is404 ? '404' : (error?.statusCode || '500') }}
          </span>
          <div class="absolute inset-0 bg-white/5 blur-2xl rounded-full -z-10"></div>
        </div>

        <!-- Title -->
        <h1 class="text-2xl sm:text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-white mb-4 break-words">
          {{ is404 ? 'СТРАНИЦА НЕ НАЙДЕНА' : 'ТЕХНИЧЕСКИЙ ПИТ-СТОП' }}
        </h1>

        <!-- Subtitle -->
        <p class="text-text-secondary text-sm sm:text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed font-light">
          <template v-if="is404">
            Похоже, этот маршрут свернул не туда или страницы больше не существует. Автомобиль в полном порядке, но адрес указан неверно.
          </template>
          <template v-else>
            Произошла непредвиденная ошибка сервера. Мы уже наводим лоск и восстанавливаем работу страницы.
          </template>
        </p>

        <!-- Main Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            type="button"
            @click="handleError('/')"
            class="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>На главную страницу</span>
          </button>

          <a
            href="https://t.me/79229159737"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span>Написать мастеру</span>
          </a>
        </div>

        <!-- Helpful Navigation Badges -->
        <div class="pt-8 border-t border-neutral-800">
          <div class="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-display">
            Или перейдите в популярные разделы:
          </div>
          <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              v-for="link in quickLinks"
              :key="link.label"
              type="button"
              @click="handleError(link.href)"
              class="px-4 py-2 text-xs md:text-sm rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-white/40 transition-all cursor-pointer font-medium"
            >
              {{ link.label }}
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="container mx-auto px-4 md:px-6 py-6 border-t border-neutral-900 text-center text-xs text-neutral-600 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>© {{ new Date().getFullYear() }} Детейлинг Мастер • Киров</p>
      <div class="flex items-center gap-4">
        <a href="https://t.me/79229159737" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Telegram</a>
        <a href="https://wa.me/79229159737" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">WhatsApp</a>
        <a href="https://vk.ru/club241937554" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">VK</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: {
    type: Object as () => NuxtError,
    default: null
  }
})

const is404 = computed(() => {
  return props.error?.statusCode === 404 || !props.error?.statusCode
})

useHead({
  title: is404.value ? '404 — Страница не найдена | Детейлинг студия' : 'Ошибка сервера | Детейлинг студия',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const quickLinks = [
  { label: 'Услуги', href: '/#services' },
  { label: 'Калькулятор', href: '/#calculator' },
  { label: 'Наши работы', href: '/#works' },
  { label: 'Контакты', href: '/#contacts' }
]

const handleError = (redirectUrl = '/') => {
  clearError({ redirect: redirectUrl })
}
</script>
