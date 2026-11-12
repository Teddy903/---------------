<template>
    <section class="py-16 md:py-24 lg:py-32 relative">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="section-header">
                <h2 ref="title" class="section-title">КАК МЫ РАБОТАЕМ</h2>
                <p class="section-subtitle">
                    Понятный и прозрачный технологический процесс на каждом этапе работы
                </p>
            </div>
            <div ref="stepsContainer" class="relative max-w-4xl mx-auto">
                <!-- Progress Line -->
                <div ref="progressLine"
                    class="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2">
                    <div ref="progressFill" class="w-full bg-accent origin-top" :style="{ height: `${progress}%` }">
                    </div>
                </div>

                <!-- Steps -->
                <div v-for="(step, index) in stepsData" :key="index" ref="stepElements"
                    class="relative flex items-center mb-12 md:mb-16 last:mb-0"
                    :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
                    <!-- Number -->
                    <div
                        class="absolute left-6 md:left-1/2 w-12 h-12 md:w-16 md:h-16 bg-primary-card border-2 border-accent rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-lg shadow-black/80">
                        <span class="text-base sm:text-lg md:text-2xl font-bold text-accent font-display">{{ String(index + 1).padStart(2, '0') }}</span>
                    </div>

                    <!-- Content -->
                    <div class="ml-14 sm:ml-16 md:ml-0 md:w-1/2"
                        :class="index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'">
                        <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-2 break-words">{{ step.title }}</h3>
                        <p class="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed break-words">{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { gsap } = useGsap()

const title = ref<HTMLElement | null>(null)
const stepsContainer = ref<HTMLElement | null>(null)
const progressLine = ref<HTMLElement | null>(null)
const progressFill = ref<HTMLElement | null>(null)
const stepElements = ref<HTMLElement[] | null>(null)
const progress = ref(0)

const stepsData = [
    {
        title: 'Запись через мессенджер',
        description: 'Свяжитесь с нами удобным способом и выберите время'
    },
    {
        title: 'Осмотр и согласование',
        description: 'Оцениваем состояние автомобиля и согласовываем объём работ'
    },
    {
        title: 'Выполнение работ',
        description: 'Профессионально выполняем все работы с использованием премиальных материалов'
    },
    {
        title: 'Приёмка и выдача',
        description: 'Демонстрируем результат и передаём автомобиль владельцу'
    }
]

let titleAnim: any = null
let progressAnim: any = null
const stepAnims: any[] = []

onMounted(() => {
    titleAnim = gsap.fromTo(
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

    // Progress line animation
    progressAnim = gsap.to(progressFill.value, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: stepsContainer.value,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
            onUpdate: (self) => {
                progress.value = self.progress * 100
            }
        }
    })

    // Steps animation
    stepElements.value?.forEach((step, index) => {
        const anim = gsap.fromTo(
            step,
            {
                x: index % 2 === 0 ? -50 : 50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: step,
                    start: 'top 80%'
                }
            }
        )
        stepAnims.push(anim)
    })
})

onUnmounted(() => {
    if (titleAnim) titleAnim.scrollTrigger?.kill()
    if (progressAnim) progressAnim.scrollTrigger?.kill()
    stepAnims.forEach(anim => anim.scrollTrigger?.kill())
})
</script>