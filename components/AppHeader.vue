<template>
    <header ref="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        :class="scrolled ? 'bg-primary/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'">
        <div class="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
            <!-- Logo -->
            <NuxtLink to="/" class="flex-shrink-0">
                <!-- Исправлена опечатка: tupe -> format -->
                <NuxtImg src="/images/logo.png" alt="Детейлинг студия" class="h-10 md:h-12 w-auto" width="1953"
                    height="582" format="webp" />
            </NuxtLink>
            
            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-8">
                <a v-for="item in navItems" :key="item.href" :href="item.href"
                    @click="onNavClick($event, item.href)"
                    class="text-text-secondary hover:text-accent transition-colors duration-300 font-medium cursor-pointer">
                    {{ item.label }}
                </a>
            </nav>

            <!-- Phone & Social Links -->
            <div class="hidden md:flex items-center space-x-6">
                <a href="tel:+79229159737" class="hidden lg:inline-flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors">
                    <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>+7 922 915-97-37</span>
                </a>
                <SocialLinks />
            </div>

            <!-- Mobile Menu Button -->
            <!-- Добавлен z-50, чтобы кнопка оставалась поверх открытого меню -->
            <button @click="toggleMobileMenu" class="md:hidden text-text-primary p-2 relative z-50" aria-label="Меню">
                <div class="w-6 h-5 relative flex flex-col justify-between">
                    <!-- Верхняя линия: сдвиг ровно на 9px вниз к центру -->
                    <span class="w-full h-0.5 bg-current transition-all duration-300"
                        :class="mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''"></span>
                    
                    <!-- Средняя линия: исчезает -->
                    <span class="w-full h-0.5 bg-current transition-all duration-300"
                        :class="mobileMenuOpen ? 'opacity-0' : ''"></span>
                    
                    <!-- Нижняя линия: сдвиг ровно на 9px вверх к центру -->
                    <span class="w-full h-0.5 bg-current transition-all duration-300"
                        :class="mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''"></span>
                </div>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div ref="mobileMenu" class="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
            :style="{ maxHeight: mobileMenuOpen ? '500px' : '0' }">
            <nav class="container mx-auto px-4 md:px-6 py-6 space-y-4 bg-primary/95 backdrop-blur-lg shadow-xl">
                <a v-for="item in navItems" :key="item.href" :href="item.href" @click="onNavClick($event, item.href)"
                    class="block text-text-secondary hover:text-accent transition-colors duration-300 font-medium py-2 text-lg cursor-pointer">
                    {{ item.label }}
                </a>
                <div class="pt-4 border-t border-gray-800 space-y-3">
                    <a href="tel:+79229159737" class="inline-flex items-center gap-2 text-white font-bold text-base hover:text-accent transition-colors">
                        <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <span>+7 922 915-97-37</span>
                    </a>
                    <SocialLinks />
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
const { gsap } = useGsap()

const header = ref<HTMLElement | null>(null)
const mobileMenu = ref<HTMLElement | null>(null)
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

let menuTl: any = null

const navItems = [
    { label: 'О нас', href: '#about' },
    { label: 'Услуги', href: '#services' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Работы', href: '#works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Контакты', href: '#contacts' }
]

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
    
    // Блокируем прокрутку фона сайта при открытом меню
    document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''

    if (mobileMenu.value) {
        const items = mobileMenu.value.querySelectorAll('a, .social-links > *')
        
        // Создаем таймлайн один раз
        if (!menuTl) {
            menuTl = gsap.timeline({ paused: true })
            menuTl.fromTo(items,
                { opacity: 0, y: -15 },
                { opacity: 1, y: 0, stagger: 0.05, duration: 0.3, ease: 'power2.out' }
            )
        }

        // Проигрываем или отматываем анимацию
        if (mobileMenuOpen.value) {
            menuTl.play()
        } else {
            menuTl.reverse()
        }
    }
}

const closeMobileMenu = () => {
    if (mobileMenuOpen.value) {
        toggleMobileMenu()
    }
}

const nuxtApp = useNuxtApp()
const onNavClick = (e: MouseEvent, href: string) => {
    if (href.startsWith('#')) {
        e.preventDefault()
        closeMobileMenu()
        const lenis = nuxtApp.$lenis as any
        if (lenis && typeof lenis.scrollTo === 'function') {
            lenis.scrollTo(href, { offset: -80 })
        } else {
            const target = document.querySelector(href)
            target?.scrollIntoView({ behavior: 'smooth' })
        }
    }
}

onMounted(() => {
    const handleScroll = () => {
        scrolled.value = window.scrollY > 80
    }

    window.addEventListener('scroll', handleScroll)
    
    // Закрываем меню, если экран был растянут до десктопного размера
    const handleResize = () => {
        if (window.innerWidth >= 768 && mobileMenuOpen.value) {
            closeMobileMenu()
        }
    }
    window.addEventListener('resize', handleResize)

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleResize)
        // Возвращаем прокрутку при уничтожении компонента
        document.body.style.overflow = ''
        if (menuTl) menuTl.kill()
    })
})
</script>