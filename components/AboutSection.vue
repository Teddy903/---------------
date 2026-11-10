<template>
    <!-- Изменено: py-16 на мобильных, py-24 на планшетах, py-32 на десктопе -->
    <section id="about" class="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <!-- Изменено: px-4 на мобильных для большего места под контент -->
        <div class="container mx-auto px-4 md:px-6">
            <!-- Изменено: gap-8 на мобильных, gap-12 на планшетах, gap-16 на десктопе -->
            <div class="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                
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
                    <!-- Декоративное свечение: уменьшено для мобильных, чтобы не создавать лишнюю высоту/скролл -->
                    <div class="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
                </div>

                <!-- Content -->
                <div ref="content">
                    <!-- Изменено: mb-6 на мобильных, mb-8 на десктопе -->
                    <h2 class="section-title mb-6 md:mb-8 text-4xl sm:text-6xl md:text-8xl lg:text-9xl">О НАС</h2>
                    
                    <!-- Изменено: text-base на мобильных, text-xl на десктопе. Отступы уменьшены -->
                    <p class="text-base md:text-xl text-text-secondary mb-6 md:mb-8 leading-relaxed">
                        Мы — команда профессионалов, влюблённых в автомобили. Каждый проект для нас — это возможность
                        раскрыть потенциал вашего автомобиля и подарить ему безупречный вид.
                    </p>
                    
                    <!-- Изменено: text-sm на мобильных, text-lg на десктопе. Отступ снизу уменьшен с mb-12 до mb-8 -->
                    <p class="text-sm md:text-lg text-text-secondary mb-8 md:mb-12 leading-relaxed">
                        Используем только премиальные материалы и современное оборудование.
                        Гарантируем качество на каждом этапе работы.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { gsap } = useGsap()

const image = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)

let imageAnim: any = null
let contentAnim: any = null

onMounted(async () => {
    await nextTick()

    if (!image.value || !content.value) return

    // Image reveal animation
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

    // Content animation
    const contentElements = content.value.querySelectorAll('h2, p')
    if (contentElements.length > 0) {
        contentAnim = gsap.fromTo(
            contentElements,
            { y: 30, opacity: 0 }, // Уменьшил y с 50 до 30 для более плавной анимации на маленьких экранах
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: content.value,
                    start: 'top 75%' // Чуть раньше запускаем анимацию на мобильных
                }
            }
        )
    }
})

// ВАЖНО: Очистка ScrollTrigger при уничтожении компонента для предотвращения утечек памяти
onUnmounted(() => {
    if (imageAnim) imageAnim.scrollTrigger?.kill()
    if (contentAnim) contentAnim.scrollTrigger?.kill()
})
</script>