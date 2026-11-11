<template>
   <section id="pricing" class="py-16 md:py-24 lg:py-32 relative">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 ref="title" class="section-title text-4xl sm:text-6xl md:text-8xl lg:text-8xl">СТОИМОСТЬ УСЛУГ</h2>
        <p class="text-text-secondary text-lg">
          Точная стоимость рассчитывается индивидуально после осмотра автомобиля.
          Ниже указаны базовые цены для популярных классов авто.
        </p>
      </div>
      <div ref="cardsContainer" class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div v-for="(item, index) in pricingData" :key="item.title" ref="cards"
          class="group relative bg-primary-card border border-neutral-800 rounded-2xl p-8 transition-all duration-500 hover:border-white/50 hover:-translate-y-2 flex flex-col"
          :class="{ 'border-white/30 bg-neutral-900': item.popular }">
          <!-- Popular Badge -->
          <div v-if="item.popular" class="absolute -top-4 left-1/2 -translate-x-1/2">
            <span class="bg-white text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Популярное
            </span>
          </div>

          <!-- Content -->
          <div class="flex-1">
            <h3 class="text-xl font-bold text-white mb-2">{{ item.title }}</h3>
            <div class="text-3xl font-bold text-white mb-6">
              {{ item.price }}
            </div>

            <ul class="space-y-3 mb-8">
              <li v-for="feature in item.features" :key="feature"
                class="flex items-start gap-3 text-text-secondary text-sm">
                <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>


        </div>
      </div>

      <!-- Bottom Note -->
      <div ref="bottomNote" class="text-center mt-16 max-w-2xl mx-auto">
        <p class="text-text-secondary mb-6">
          Не нашли нужную услугу или у вас нестандартный автомобиль?
          Напишите нам, и мы рассчитаем точную стоимость за 5 минут.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://t.me/79229159737" target="_blank" rel="noopener noreferrer"
            class="btn-secondary inline-flex items-center gap-2 text-sm py-3 px-6">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Написать в Telegram
          </a>
          <a href="https://wa.me/79229159737" target="_blank" rel="noopener noreferrer"
            class="btn-secondary inline-flex items-center gap-2 text-sm py-3 px-6">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Написать в WhatsApp
          </a>
          <a href="https://max.ru/79229159737" target="_blank" rel="noopener noreferrer"
            class="btn-secondary inline-flex items-center gap-2 text-sm py-3 px-6">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12.18 0.06C18.79 0.06 23.97 5.42 23.97 12.04C23.97 18.65 18.63 23.88 12.25 23.88C9.98 23.88 8.88 23.56 7.12 22.31C6.99 22.22 6.83 22.24 6.73 22.35C5.37 23.80 1.88 24.82 1.72 22.84C1.72 19.39 0 17.15 0 11.97C0 5.17 5.57 0.06 12.18 0.06ZM12.37 5.95C9.23 5.79 6.78 7.97 6.24 11.37C5.80 14.19 6.59 17.63 7.27 17.80C7.55 17.88 8.25 17.35 8.75 16.87C8.84 16.78 8.99 16.77 9.10 16.84C9.88 17.32 10.77 17.68 11.75 17.73C14.97 17.89 17.82 15.37 17.99 12.16C18.16 8.94 15.59 6.12 12.37 5.95V5.95Z" />
            </svg>
            Написать в Макс
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { gsap } = useGsap()

const title = ref<HTMLElement | null>(null)
const cardsContainer = ref<HTMLElement | null>(null)
const cards = ref<HTMLElement[] | null>(null)
const bottomNote = ref<HTMLElement | null>(null)

const pricingData = [
  {
    title: 'Химчистка салона',
    price: 'от 12 000 ₽',
    features: [
      'Глубокая очистка кожи и ткани',
      'Удаление сложных запахов',
      'Кондиционер для кожи',
      'Чернение резины и пластика'
    ],
    popular: false
  },
  {
    title: 'Полировка кузова',
    price: 'от 15 000 ₽',
    features: [
      'Удаление царапин и голограмм',
      'Восстановление глубины цвета',
      'Нанесение защитного воска',
      'Полировка фар в подарок'
    ],
    popular: true
  },
  {
    title: 'Оклейка зон риска',
    price: 'от 25 000 ₽',
    features: [
      'Полиуретановая пленка (SunTek/LLumar)',
      'Капот, бампер, фары, зеркала',
      'Гарантия на пленку 5 лет',
      'Не желтеет и не трескается'
    ],
    popular: false
  },
  {
    title: 'Предпродажная подготовка',
    price: 'от 12 000 ₽',
    features: [
      'Комплексная трехфазная мойка',
      'Легкая восстановительная полировка',
      'Экспресс-химчистка салона',
      'Устранение мелких дефектов ЛКП'
    ],
    popular: false
  }
]

onMounted(async () => {
  await nextTick()

  if (!title.value || !cardsContainer.value || !bottomNote.value) return

  // Title animation
  const titleAnim = gsap.fromTo(
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

  // Cards stagger animation
  let cardsAnim: any = null
  const cardElements = cardsContainer.value.querySelectorAll('.group')
  if (cardElements.length > 0) {
    cardsAnim = gsap.fromTo(
      cardElements,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsContainer.value,
          start: 'top 80%'
        }
      }
    )
  }

  // Bottom note animation
  const noteAnim = gsap.fromTo(
    bottomNote.value,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.4,
      scrollTrigger: {
        trigger: bottomNote.value,
        start: 'top 85%'
      }
    }
  )

  onUnmounted(() => {
    titleAnim.scrollTrigger?.kill()
    if (cardsAnim) cardsAnim.scrollTrigger?.kill()
    noteAnim.scrollTrigger?.kill()
  })
})
</script>