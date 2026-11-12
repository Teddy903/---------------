<template>
  <div class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40 select-none">
    <!-- Popover Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0 translate-y-2"
      enter-to-class="transform scale-100 opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100 translate-y-0"
      leave-to-class="transform scale-95 opacity-0 translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute bottom-16 right-0 mb-2 w-52 sm:w-56 bg-primary-card/95 backdrop-blur-xl border border-white/20 rounded-2xl p-2.5 shadow-2xl shadow-black/80 space-y-1"
      >
        <div class="px-3 py-1.5 text-[11px] font-semibold text-text-secondary uppercase tracking-wider border-b border-neutral-800 mb-1">
          Быстрая связь
        </div>

        <a
          href="https://t.me/+79229159737"
          target="_blank"
          rel="noopener noreferrer"
          @click="isOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors group"
        >
          <div class="w-8 h-8 rounded-lg bg-[#229ED9]/20 text-[#229ED9] flex items-center justify-center flex-shrink-0 group-hover:bg-[#229ED9] group-hover:text-white transition-colors">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>
          <div>
            <div class="text-xs font-bold">Telegram</div>
            <div class="text-[10px] text-text-secondary">Отвечаем за 5 минут</div>
          </div>
        </a>

        <a
          href="https://wa.me/79229159737"
          target="_blank"
          rel="noopener noreferrer"
          @click="isOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors group"
        >
          <div class="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <div>
            <div class="text-xs font-bold">WhatsApp</div>
            <div class="text-[10px] text-text-secondary">Консультация и запись</div>
          </div>
        </a>

        <a
          href="https://vk.com/club241937554"
          target="_blank"
          rel="noopener noreferrer"
          @click="isOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors group"
        >
          <div class="w-8 h-8 rounded-lg bg-[#0077FF]/20 text-[#0077FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0077FF] group-hover:text-white transition-colors">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z"/>
            </svg>
          </div>
          <div>
            <div class="text-xs font-bold">ВКонтакте</div>
            <div class="text-[10px] text-text-secondary">Портфолио и отзывы</div>
          </div>
        </a>

        <a
          href="https://max.ru/u/f9LHodD0cOKVEKsGKSGdez_in4PN-g2nWFQGKlWF-WGVbKUHcYOZoZpcEu4"
          target="_blank"
          rel="noopener noreferrer"
          @click="isOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors group"
        >
          <div class="w-8 h-8 rounded-lg bg-[#6C5CE7]/20 text-[#6C5CE7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#6C5CE7] group-hover:text-white transition-colors">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.18 0.06C18.79 0.06 23.97 5.42 23.97 12.04C23.97 18.65 18.63 23.88 12.25 23.88C9.98 23.88 8.88 23.56 7.12 22.31C6.99 22.22 6.83 22.24 6.73 22.35C5.37 23.80 1.88 24.82 1.72 22.84C1.72 19.39 0 17.15 0 11.97C0 5.17 5.57 0.06 12.18 0.06ZM12.37 5.95C9.23 5.79 6.78 7.97 6.24 11.37C5.80 14.19 6.59 17.63 7.27 17.80C7.55 17.88 8.25 17.35 8.75 16.87C8.84 16.78 8.99 16.77 9.10 16.84C9.88 17.32 10.77 17.68 11.75 17.73C14.97 17.89 17.82 15.37 17.99 12.16C18.16 8.94 15.59 6.12 12.37 5.95V5.95Z" />
            </svg>
          </div>
          <div>
            <div class="text-xs font-bold">MAX</div>
            <div class="text-[10px] text-text-secondary">Мессенджер</div>
          </div>
        </a>

        <a
          href="tel:+79229159737"
          @click="isOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors group"
        >
          <div class="w-8 h-8 rounded-lg bg-white/20 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div>
            <div class="text-xs font-bold">Позвонить</div>
            <div class="text-[10px] text-text-secondary">+7 922 915-97-37</div>
          </div>
        </a>
      </div>
    </transition>

    <!-- Floating Trigger Button -->
    <button
      type="button"
      @click="isOpen = !isOpen"
      aria-label="Быстрая связь"
      class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-black shadow-xl shadow-white/10 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 relative group cursor-pointer"
    >
      <!-- Online Ping Dot -->
      <span class="absolute top-0 right-0 flex h-3.5 w-3.5">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-black"></span>
      </span>

      <!-- Icon: Close vs Chat -->
      <svg
        v-if="isOpen"
        class="w-6 h-6 transition-transform duration-200 rotate-90"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>

      <svg
        v-else
        class="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

onMounted(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen.value) {
      isOpen.value = false
    }
  }
  window.addEventListener('keydown', handleKeyDown)

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
  })
})
</script>
