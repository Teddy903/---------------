<template>
    <div class="min-h-screen bg-primary text-text-primary">
        <AppHeader />
        <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PricingSection />
            <CalculatorSection />
            <BeforeAfterSection />
            <AdvantagesSection />
            <ProcessSection />
            <BrandsSection />
            <FaqSection />
            <CtaSection />
            <ContactsSection />
        </main>
        <AppFooter />
        <CookieBanner />
        <FloatingContactButton />
    </div>
</template>

<script setup lang="ts">
const { cdnURL, baseURL } = useRuntimeConfig().app

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Детейлинг Мастер — Детейлинг студия в Кирове',
    url: 'https://detailingmaster.ru/',
    description: 'Профессиональный детейлинг в Кирове: химчистка салона с сушкой, восстановительная полировка кузова, оклейка полиуретановой бронепленкой, керамика 9H.',
    image: 'https://detailingmaster.ru/images/about.jpg',
    telephone: '+7-922-915-97-37',
    priceRange: '3500 - 50000 RUB',
    currenciesAccepted: 'RUB',
    paymentAccepted: 'Наличные, Банковские карты, Перевод',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Хлебозаводской проезд, 3А',
        addressLocality: 'Киров',
        addressRegion: 'Кировская область',
        postalCode: '610000',
        addressCountry: 'RU'
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 58.601200,
        longitude: 49.642910
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '09:00',
            closes: '20:00'
        }
    ],
    sameAs: [
        'https://vk.com/club241937554',
        'https://t.me/+79229159737',
        'https://wa.me/79229159737',
        'https://max.ru/u/f9LHodD0cOKVEKsGKSGdez_in4PN-g2nWFQGKlWF-WGVbKUHcYOZoZpcEu4'
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Услуги детейлинга',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Химчистка салона',
                    description: 'Глубокая очистка кожи, ткани, потолка и багажника с сушкой и озонацией'
                },
                price: '12000',
                priceCurrency: 'RUB'
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Полировка кузова',
                    description: 'Восстановительная полировка, удаление до 90% царапин и паутинки'
                },
                price: '15000',
                priceCurrency: 'RUB'
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Оклейка зон риска полиуретановой плёнкой',
                    description: 'Бронирование капота, бампера, фар и зеркал полиуретаном SunTek/LLumar'
                },
                price: '25000',
                priceCurrency: 'RUB'
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Керамическое покрытие кузова',
                    description: 'Нанесение керамики 9H в 2 слоя для глубокого гидрофоба и блеска'
                },
                price: '18000',
                priceCurrency: 'RUB'
            }
        ]
    }
}

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Сколько времени занимает химчистка салона и отдадите ли вы авто сухим?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Комплексная химчистка салона занимает от 1 до 2 дней. Мы просушиваем автомобиль профессиональными сушильными пушками и автофенами. Вы получаете 100% сухой салон без конденсата и без запаха сырости.'
            }
        },
        {
            '@type': 'Question',
            name: 'Безопасна ли химия для кожи, детей и домашних животных?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да. Мы используем только сертифицированную премиальную автохимию Koch Chemie (Германия) и CarPro (Корея). Все составы биоразлагаемые, гипоаллергенные, с нейтральным pH, а после процедур проводится озонирование салона.'
            }
        },
        {
            '@type': 'Question',
            name: 'В чём разница между полиуретановой плёнкой и обычным винилом?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Полиуретан (SunTek, LLumar) — это толстая (190-210 мкм) упругая броня, выдерживающая удары гравия на трассе со свойством самозатягивания царапин при нагреве. Срок службы — до 5-7 лет.'
            }
        },
        {
            '@type': 'Question',
            name: 'Сколько держится эффект после восстановительной полировки и керамики?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Восстановительная полировка убирает царапины навсегда, а не маскирует их. Керамическое покрытие 9H в 2 слоя защищает лак от 12 до 24 месяцев.'
            }
        },
        {
            '@type': 'Question',
            name: 'Нужно ли мыть машину перед тем, как привезти к вам?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Специально мыть автомобиль не требуется. В регламент любой процедуры входит тщательная трёхфазная детейлинг-мойка, глубокая очистка глиной и обезжиривание кузова.'
            }
        },
        {
            '@type': 'Question',
            name: 'Какая гарантия предоставляется на услуги?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'На полиуретановые плёнки действует официальная гарантия 5 лет от пожелтения, растрескивания и отслоения. На полировку и керамику даём гарантию строгого соблюдения техпроцесса.'
            }
        }
    ]
}

useHead({
    htmlAttrs: {
        lang: 'ru'
    },
    link: [
        { rel: 'canonical', href: 'https://detailingmaster.ru/' },
        { rel: 'icon', type: 'image/x-icon', href: `${cdnURL || baseURL}favicon.ico` },
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(localBusinessSchema)
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(faqSchema)
        }
    ]
})
</script>