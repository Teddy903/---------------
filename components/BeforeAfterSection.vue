<template>
    <section id="works" class="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="section-header">
                <h2 ref="title" class="section-title">НАШИ РАБОТЫ</h2>
                <p class="section-subtitle">
                    Реальные результаты восстановления и защитной обработки автомобилей
                </p>
            </div>
            <div ref="slider" class="max-w-5xl mx-auto">
                <BeforeAfterSlider v-for="(work, index) in works" :key="index" :before-image="work.before"
                    :after-image="work.after" :title="work.title" />
            </div>

            <div class="text-center mt-12">
                <a href="https://vk.com/club241937554" target="_blank" rel="noopener noreferrer"
                    class="btn-primary inline-flex items-center gap-2">
                    Смотреть все работы в VK
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { gsap } = useGsap()

const title = ref<HTMLElement | null>(null)
const slider = ref<HTMLElement | null>(null)

let titleAnim: any = null
let sliderAnim: any = null

const works = [
    {
        before: '/images/works/before-1.jpg',
        after: '/images/works/after-1.jpg',
        title: 'Химчистка салона Ford focus 2'
    },
    {
        before: '/images/works/before-2.jpg',
        after: '/images/works/after-2.jpg',
        title: 'Химчистка салона Chevrolet Lacetti'
    }
]

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

    sliderAnim = gsap.fromTo(
        slider.value,
        { y: 80, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: slider.value,
                start: 'top 80%'
            }
        }
    )
})

onUnmounted(() => {
    if (titleAnim) titleAnim.scrollTrigger?.kill()
    if (sliderAnim) sliderAnim.scrollTrigger?.kill()
})
</script>