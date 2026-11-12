<template>
  <section id="calculator" class="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-primary">
    <!-- Subtle background radial glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="section-header">
        <h2 ref="title" class="section-title">
          КАЛЬКУЛЯТОР
        </h2>
        <p ref="subtitle" class="section-subtitle">
          Выберите класс вашего автомобиля и нужные услуги для предварительного расчёта стоимости и сроков
        </p>
      </div>

      <div ref="calcCard" class="max-w-4xl mx-auto bg-primary-card border border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-2xl shadow-black/60">
        <!-- Шаг 1: Класс автомобиля -->
        <div class="mb-8 md:mb-10">
          <label class="block text-xs uppercase tracking-wider text-text-secondary font-display font-semibold mb-4">
            1. Класс вашего автомобиля
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            <button
              v-for="carClass in carClasses"
              :key="carClass.id"
              type="button"
              @click="selectedClass = carClass.id"
              class="p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-300 relative flex flex-col justify-between cursor-pointer"
              :class="selectedClass === carClass.id 
                ? 'border-white bg-white/10 text-white shadow-lg shadow-white/5' 
                : 'border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 text-text-secondary hover:text-white'"
            >
              <div>
                <div class="text-sm sm:text-base font-bold font-display text-white mb-1">{{ carClass.name }}</div>
                <div class="text-xs text-text-secondary">{{ carClass.examples }}</div>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-xs font-medium px-2 py-0.5 rounded bg-neutral-800/80 text-neutral-300">
                  {{ carClass.multiplier }}x коэффициент
                </span>
                <span v-if="selectedClass === carClass.id" class="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]"></span>
              </div>
            </button>
          </div>
        </div>

        <!-- Шаг 2: Выбор услуг -->
        <div class="mb-8 md:mb-10">
          <div class="flex items-center justify-between mb-4">
            <label class="block text-xs uppercase tracking-wider text-text-secondary font-display font-semibold">
              2. Выберите необходимые услуги
            </label>
            <button 
              type="button" 
              @click="toggleAllServices" 
              class="text-xs text-neutral-400 hover:text-white transition-colors underline underline-offset-2 cursor-pointer"
            >
              {{ selectedServices.length === availableServices.length ? 'Снять всё' : 'Выбрать всё' }}
            </button>
          </div>

          <div class="space-y-3">
            <label
              v-for="service in availableServices"
              :key="service.id"
              class="flex items-start sm:items-center justify-between p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer select-none gap-3"
              :class="isServiceSelected(service.id)
                ? 'border-white/40 bg-white/5'
                : 'border-neutral-800 hover:border-neutral-700 bg-neutral-900/40'"
            >
              <div class="flex items-start md:items-center gap-3 flex-1 min-w-0 pr-1">
                <input
                  type="checkbox"
                  :value="service.id"
                  v-model="selectedServices"
                  class="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 md:mt-0 rounded border-neutral-700 bg-neutral-900 text-white focus:ring-0 focus:ring-offset-0 cursor-pointer accent-white flex-shrink-0"
                />
                <div class="min-w-0">
                  <div class="text-xs sm:text-sm md:text-base font-semibold text-white break-words">{{ service.name }}</div>
                  <div class="text-[11px] sm:text-xs text-text-secondary mt-0.5 break-words">{{ service.description }}</div>
                </div>
              </div>

              <div class="text-right flex-shrink-0 pl-2">
                <div class="text-xs sm:text-sm md:text-base font-bold text-white font-display whitespace-nowrap">
                  {{ formatPrice(getServicePrice(service)) }} ₽
                </div>
                <div class="text-[10px] sm:text-[11px] text-text-secondary whitespace-nowrap">{{ service.time }}</div>
              </div>
            </label>
          </div>
        </div>

        <!-- Шаг 3: Итог и запись -->
        <div class="pt-6 border-t border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div class="text-xs uppercase tracking-wider text-text-secondary mb-1">Примерная стоимость комплекса:</div>
            <div class="flex items-baseline gap-3 flex-wrap">
              <span class="text-2xl sm:text-3xl md:text-5xl font-black font-display text-white break-words">
                {{ formatPrice(totalPrice) }} ₽
              </span>
              <span v-if="selectedServices.length > 0" class="text-xs md:text-sm text-text-secondary">
                • Срок: {{ estimatedTime }}
              </span>
            </div>
            <p class="text-xs text-neutral-500 mt-1 max-w-md">
              Окончательная цена подтверждается при визуальном осмотре степени загрязнения и состояния ЛКП
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full md:w-auto">
            <a
              :href="telegramBookingUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary inline-flex items-center justify-center gap-2 py-3 px-4 sm:px-5 text-xs sm:text-sm w-full sm:w-auto"
            >
              <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span>Записаться в Telegram</span>
            </a>

            <a
              :href="whatsappBookingUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary inline-flex items-center justify-center gap-2 py-3 px-4 sm:px-5 text-xs sm:text-sm w-full sm:w-auto"
            >
              <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>В WhatsApp</span>
            </a>

            <a
              href="https://max.ru/u/f9LHodD0cOKVEKsGKSGdez_in4PN-g2nWFQGKlWF-WGVbKUHcYOZoZpcEu4"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary inline-flex items-center justify-center gap-2 py-3 px-4 sm:px-5 text-xs sm:text-sm w-full sm:w-auto"
            >
              <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.18 0.06C18.79 0.06 23.97 5.42 23.97 12.04C23.97 18.65 18.63 23.88 12.25 23.88C9.98 23.88 8.88 23.56 7.12 22.31C6.99 22.22 6.83 22.24 6.73 22.35C5.37 23.80 1.88 24.82 1.72 22.84C1.72 19.39 0 17.15 0 11.97C0 5.17 5.57 0.06 12.18 0.06ZM12.37 5.95C9.23 5.79 6.78 7.97 6.24 11.37C5.80 14.19 6.59 17.63 7.27 17.80C7.55 17.88 8.25 17.35 8.75 16.87C8.84 16.78 8.99 16.77 9.10 16.84C9.88 17.32 10.77 17.68 11.75 17.73C14.97 17.89 17.82 15.37 17.99 12.16C18.16 8.94 15.59 6.12 12.37 5.95V5.95Z" />
              </svg>
              <span>В MAX</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { gsap } = useGsap()

const title = ref<HTMLElement | null>(null)
const subtitle = ref<HTMLElement | null>(null)
const calcCard = ref<HTMLElement | null>(null)

let titleAnim: any = null
let cardAnim: any = null

const carClasses = [
  { id: 'sedan', name: 'Седан / Хэтчбек', examples: 'Solaris, Camry, BMW 3/5', multiplier: 1.0 },
  { id: 'crossover', name: 'Кроссовер', examples: 'RAV4, Tiguan, X3/X5', multiplier: 1.2 },
  { id: 'suv', name: 'Внедорожник / Минивэн', examples: 'Land Cruiser, Prado, V-Class', multiplier: 1.4 }
]

const availableServices = [
  {
    id: 'dry_clean',
    name: 'Комплексная химчистка салона',
    description: 'Глубокая очистка кожи, ткани, потолка и багажника с сушкой и озонацией',
    basePrice: 12000,
    time: '1-2 дня'
  },
  {
    id: 'polish_body',
    name: 'Восстановительная полировка кузова',
    description: 'Удаление до 90% царапин, паутинки и голограмм, глубокий блеск',
    basePrice: 15000,
    time: '1-2 дня'
  },
  {
    id: 'ceramic',
    name: 'Керамическое покрытие 9H (2 слоя)',
    description: 'Мощный гидрофоб, защита от реагентов и ультрафиолета на 12+ месяцев',
    basePrice: 18000,
    time: '+1 день'
  },
  {
    id: 'film_zones',
    name: 'Оклейка зон риска полиуретаном',
    description: 'Бронепленка: капот, бампер, фары, зеркала, под ручками дверей',
    basePrice: 25000,
    time: '1-2 дня'
  },
  {
    id: 'headlights',
    name: 'Полировка и бронирование фар',
    description: 'Восстановление прозрачности + полиуретановая плёнка от сколов',
    basePrice: 5000,
    time: '3-4 часа'
  },
  {
    id: 'antirain',
    name: 'Антидождь «Аквапель» на все стёкла',
    description: 'Водоотталкивающее покрытие для идеальной видимости в непогоду',
    basePrice: 3500,
    time: '2 часа'
  }
]

const selectedClass = ref('crossover')
const selectedServices = ref<string[]>(['dry_clean', 'polish_body'])

const isServiceSelected = (id: string) => selectedServices.value.includes(id)

const toggleAllServices = () => {
  if (selectedServices.value.length === availableServices.length) {
    selectedServices.value = []
  } else {
    selectedServices.value = availableServices.map(s => s.id)
  }
}

const getServicePrice = (service: typeof availableServices[0]) => {
  const currentClass = carClasses.find(c => c.id === selectedClass.value)
  const multiplier = currentClass ? currentClass.multiplier : 1.0
  return Math.round(service.basePrice * multiplier)
}

const totalPrice = computed(() => {
  return selectedServices.value.reduce((acc, id) => {
    const service = availableServices.find(s => s.id === id)
    return service ? acc + getServicePrice(service) : acc
  }, 0)
})

const estimatedTime = computed(() => {
  const count = selectedServices.value.length
  if (count === 0) return '0 дней'
  if (count === 1) {
    const s = availableServices.find(item => item.id === selectedServices.value[0])
    return s?.time || '1 день'
  }
  if (count <= 2) return '1-2 дня'
  if (count <= 4) return '2-3 дня'
  return '3-4 дня'
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

const selectedServicesNames = computed(() => {
  return selectedServices.value
    .map(id => availableServices.find(s => s.id === id)?.name)
    .filter(Boolean)
    .join(', ')
})

const currentClassName = computed(() => {
  return carClasses.find(c => c.id === selectedClass.value)?.name || 'Автомобиль'
})

const telegramBookingUrl = computed(() => {
  const text = encodeURIComponent(
    `Здравствуйте! Сделал расчёт на сайте:\nАвто: ${currentClassName.value}\nУслуги: ${selectedServicesNames.value || 'Консультация'}\nОриентир. стоимость: ${formatPrice(totalPrice.value)} ₽\nХочу записаться или уточнить детали.`
  )
  return `https://t.me/+79229159737?text=${text}`
})

const whatsappBookingUrl = computed(() => {
  const text = encodeURIComponent(
    `Здравствуйте! Сделал расчёт на сайте:\nАвто: ${currentClassName.value}\nУслуги: ${selectedServicesNames.value || 'Консультация'}\nОриентир. стоимость: ${formatPrice(totalPrice.value)} ₽\nХочу записаться или уточнить детали.`
  )
  return `https://wa.me/79229159737?text=${text}`
})

onMounted(async () => {
  await nextTick()
  if (!title.value || !calcCard.value) return

  titleAnim = gsap.fromTo(
    [title.value, subtitle.value],
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: title.value,
        start: 'top 85%'
      }
    }
  )

  cardAnim = gsap.fromTo(
    calcCard.value,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: calcCard.value,
        start: 'top 85%'
      }
    }
  )
})

onUnmounted(() => {
  if (titleAnim) titleAnim.scrollTrigger?.kill()
  if (cardAnim) cardAnim.scrollTrigger?.kill()
})
</script>
