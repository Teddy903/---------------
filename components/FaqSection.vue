<template>
  <section id="faq" class="py-16 md:py-24 lg:py-32 relative bg-primary">
    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <h2 ref="title" class="section-title text-3xl sm:text-5xl md:text-7xl lg:text-7xl mb-4">
          ВОПРОСЫ И ОТВЕТЫ
        </h2>
        <p ref="subtitle" class="text-text-secondary text-sm md:text-base lg:text-lg">
          Ответы на самые частые вопросы автовладельцев перед визитом в нашу студию
        </p>
      </div>

      <div ref="faqContainer" class="max-w-3xl mx-auto space-y-4">
        <div
          v-for="(item, index) in faqList"
          :key="index"
          class="faq-item border rounded-2xl transition-colors duration-300 overflow-hidden"
          :class="openIndex === index ? 'border-white/40 bg-white/[0.04]' : 'border-neutral-800 bg-primary-card hover:border-neutral-700'"
        >
          <button
            type="button"
            @click="toggle(index)"
            class="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 select-none cursor-pointer"
            :aria-expanded="openIndex === index"
          >
            <span class="text-base md:text-lg font-bold font-display text-white">
              {{ item.question }}
            </span>
            <div
              class="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center flex-shrink-0 text-white transition-transform duration-300"
              :class="openIndex === index ? 'rotate-180 border-white bg-white text-black' : ''"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </button>

          <div
            v-show="openIndex === index"
            class="px-5 pb-6 md:px-6 md:pb-6 text-text-secondary text-sm md:text-base leading-relaxed border-t border-neutral-800/60 pt-4"
          >
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>

      <!-- Support hint -->
      <div class="text-center mt-12 text-sm text-text-secondary">
        Остались вопросы по вашему автомобилю?
        <a href="https://t.me/79229159737" target="_blank" rel="noopener noreferrer" class="text-white underline underline-offset-4 hover:text-accent font-medium ml-1">
          Напишите мастеру в Telegram
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { gsap } = useGsap()

const title = ref<HTMLElement | null>(null)
const subtitle = ref<HTMLElement | null>(null)
const faqContainer = ref<HTMLElement | null>(null)

let titleAnim: any = null
let faqAnim: any = null

const openIndex = ref<number | null>(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqList = [
  {
    question: 'Сколько времени занимает химчистка салона и отдадите ли вы авто сухим?',
    answer: 'Комплексная химчистка салона занимает от 1 до 2 дней в зависимости от степени загрязнения. Мы обязательно просушиваем автомобиль профессиональными сушильными пушками и автофенами. Вы получаете 100% сухой салон без конденсата и без запаха сырости.'
  },
  {
    question: 'Безопасна ли химия для кожи, детей и домашних животных?',
    answer: 'Да. Мы используем только сертифицированную премиальную автохимию брендов Koch Chemie (Германия) и CarPro (Корея). Все составы биоразлагаемые, гипоаллергенные, имеют нейтральный pH и смываются профессиональными экстракторами. После окончания работ проводим озонирование салона.'
  },
  {
    question: 'В чём разница между полиуретановой плёнкой и обычным винилом?',
    answer: 'Виниловая плёнка тонкая (80-100 мкм), предназначена для изменения цвета и трескается от ударов щебня на морозе. Полиуретан (SunTek, LLumar) — это толстая (190-210 мкм) упругая броня, выдерживающая удары гравия на трассе со свойством самозатягивания царапин при нагреве солнцем или тёплой водой. Срок службы полиуретана — до 5-7 лет.'
  },
  {
    question: 'Сколько держится эффект после восстановительной полировки и керамики?',
    answer: 'Качественная восстановительная полировка убирает царапины навсегда, а не маскирует их. Керамическое покрытие в 2 слоя защищает лак от микроцарапин, ультрафиолета, птичьего помёта и реагентов от 12 до 24 месяцев при соблюдении регламента двух- и трёхфазной мойки.'
  },
  {
    question: 'Нужно ли мыть машину перед тем, как привезти к вам?',
    answer: 'Специально мыть автомобиль не требуется. В регламент любой нашей процедуры (полировка, химчистка, оклейка) уже входит тщательная трёхфазная детейлинг-мойка, глубокая очистка глиной и обезжиривание кузова.'
  },
  {
    question: 'Какая гарантия предоставляется на услуги?',
    answer: 'На полиуретановые плёнки действует официальная гарантия 5 лет от пожелтения, растрескивания и отслоения. На полировку и керамику даём гарантию соблюдения технологического процесса и подробные рекомендации по уходу.'
  }
]

onMounted(async () => {
  await nextTick()
  if (!title.value || !faqContainer.value) return

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

  const items = faqContainer.value.querySelectorAll('.faq-item')
  if (items.length > 0) {
    faqAnim = gsap.fromTo(
      items,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: faqContainer.value,
          start: 'top 85%'
        }
      }
    )
  }
})

onUnmounted(() => {
  if (titleAnim) titleAnim.scrollTrigger?.kill()
  if (faqAnim) faqAnim.scrollTrigger?.kill()
})
</script>
