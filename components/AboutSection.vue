<template>
    <section id="about" class="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div class="container mx-auto px-4 md:px-6">
            <!-- Unified Section Header -->
            <div ref="headerRef" class="section-header">
                <h2 class="section-title">О НАС</h2>
                <p class="section-subtitle">
                    Премиальный детейлинг в Кирове с вниманием к каждой детали вашего автомобиля
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                <!-- Image -->
                <div ref="image" class="relative">
                    <div class="aspect-[4/3] rounded-2xl overflow-hidden bg-primary-card shadow-2xl shadow-black/50">
                        <NuxtImg 
                            src="/images/about.jpg" 
                            alt="Наша студия"
                            class="w-full h-full object-cover" 
                            loading="lazy"
                            width="800"
                            height="600"
                            format="webp"
                        />
                    </div>
                    <!-- Декоративное свечение -->
                    <div class="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
                </div>

                <!-- Content -->
                <div ref="content" class="space-y-6">
                    <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-white font-display">
                        Мастерство, опыт и безупречный результат
                    </h3>
                    
                    <p class="text-base md:text-lg text-text-secondary leading-relaxed">
                        Мы — команда профессионалов, влюблённых в автомобили. Каждый проект для нас — это возможность
                        раскрыть потенциал вашего автомобиля и подарить ему безупречный вид.
                    </p>
                    
                    <p class="text-sm md:text-base text-text-secondary leading-relaxed">
                        Используем только премиальные материалы и современное европейское оборудование.
                        Гарантируем качество и соблюдение регламентов на каждом этапе работы.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { gsap } = useGsap()

const headerRef = ref<HTMLElement | null>(null)
const image = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)

let headerAnim: any = null
let imageAnim: any = null
let contentAnim: any = null

onMounted(async () => {
    await nextTick()

    if (headerRef.value) {
        headerAnim = gsap.fromTo(
            headerRef.value.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headerRef.value,
                    start: 'top 85%'
                }
            }
        )
    }

    if (image.value) {
        imageAnim = gsap.fromTo(
            image.value,
            { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
            {
                clipPath: 'inset(0% 0 0 0)',
                opacity: 1,
                duration: 1.2,
                ease: 'power3.inOut',
                scrollTrigger: {
                    trigger: image.value,
                    start: 'top 80%'
                }
            }
        )
    }

    if (content.value) {
        const contentElements = content.value.querySelectorAll('h3, p')
        if (contentElements.length > 0) {
            contentAnim = gsap.fromTo(
                contentElements,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: content.value,
                        start: 'top 80%'
                    }
                }
            )
        }
    }
})

onUnmounted(() => {
    if (headerAnim) headerAnim.scrollTrigger?.kill()
    if (imageAnim) imageAnim.scrollTrigger?.kill()
    if (contentAnim) contentAnim.scrollTrigger?.kill()
})
</script>