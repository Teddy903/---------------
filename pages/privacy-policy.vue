<template>
  <div class="min-h-screen bg-primary pt-32 pb-16 md:pt-40 md:pb-24">
    <div class="container mx-auto px-4 md:px-6">
      
      <!-- Заголовок страницы -->
      <div class="max-w-4xl mx-auto mb-12 md:mb-16">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span class="text-sm font-medium">Вернуться на главную</span>
        </NuxtLink>
        
        <h1 class="text-2xl md:text-3xl lg:text-6xl font-black uppercase tracking-tight mb-4">
          Политика конфиденциальности
        </h1>
        <p class="text-text-secondary text-sm md:text-base">
          Дата последнего обновления: 15 октября 2026 г.
        </p>
      </div>

      <!-- Основной контент -->
      <div class="max-w-4xl mx-auto prose prose-invert prose-lg">
        
        <!-- Раздел 1: Общие положения -->
        <section class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">1. Общие положения</h2>
          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Настоящая Политика конфиденциальности (далее — «Политика») описывает, как сайт 
              <span class="text-white">detailingmaster.ru</span> (далее — «Сайт») обрабатывает информацию, 
              получаемую при посещении пользователями.
            </p>
            <p>
              Сайт не собирает персональные данные пользователей (имена, телефоны, email и т.д.) через формы 
              или иные способы. Единственным источником собираемой информации является сервис веб-аналитики 
              <strong class="text-white">Яндекс.Метрика</strong>, который автоматически собирает обезличенные 
              технические данные о посещениях Сайта.
            </p>
            <p>
              Использование Сайта означает согласие Пользователя с настоящей Политикой. В случае несогласия 
              Пользователь должен воздержаться от использования Сайта или отключить сохранение cookie в настройках 
              своего браузера.
            </p>
          </div>
        </section>

        <!-- Раздел 2: Какие данные собираются -->
        <section class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">2. Какие данные собираются</h2>
          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Сайт не запрашивает и не собирает персональные данные пользователей (имена, номера телефонов, 
              адреса электронной почты и т.д.). 
            </p>
            <p>
              Единственным источником собираемой информации является сервис <strong class="text-white">Яндекс.Метрика</strong>, 
              который автоматически собирает следующие обезличенные технические данные:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li><strong class="text-white">IP-адрес</strong> — для определения географического положения посетителя.</li>
              <li><strong class="text-white">Информация о браузере и устройстве</strong> — тип браузера, операционная система, разрешение экрана.</li>
              <li><strong class="text-white">Данные о посещениях</strong> — время посещения, длительность сессии, посещаемые страницы, источники перехода.</li>
              <li><strong class="text-white">Файлы cookie</strong> — небольшие текстовые файлы, которые сохраняются на устройстве пользователя.</li>
            </ul>
            <p>
              Эти данные являются обезличенными и не позволяют идентифицировать конкретное физическое лицо. 
              Они используются исключительно для анализа поведения посетителей и улучшения работы Сайта.
            </p>
          </div>
        </section>

        <!-- Раздел 3: Цели сбора данных -->
        <section class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">3. Цели обработки данных</h2>
          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p>Собираемые данные обрабатываются исключительно для следующих целей:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Анализ посещаемости Сайта и поведения пользователей.</li>
              <li>Определение наиболее популярных страниц и разделов Сайта.</li>
              <li>Выявление технических проблем и улучшение производительности Сайта.</li>
              <li>Оптимизация контента и структуры Сайта для удобства пользователей.</li>
              <li>Оценка эффективности маркетинговых активностей (если проводятся).</li>
            </ul>
            <p>
              Собранные данные <strong class="text-white">не используются</strong> для идентификации пользователей, 
              отправки коммерческих предложений или передачи третьим лицам в коммерческих целях.
            </p>
          </div>
        </section>

        <!-- Раздел 4: Правовые основания -->
        <section class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">4. Правовые основания обработки</h2>
          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p>Обработка данных осуществляется на следующих правовых основаниях:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Согласие Пользователя на обработку персональных данных, которое фиксируется при принятии 
              уведомления о использовании cookie (нажатие кнопки «Принять» в баннере cookie).</li>
              <li>Законный интерес Оператора в анализе и улучшении работы Сайта (статья 6 Федерального закона 
              № 152-ФЗ «О персональных данных»).</li>
            </ul>
          </div>
        </section>

        <!-- Раздел 5: Файлы cookie и Яндекс.Метрика -->
        <section class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">5. Файлы cookie и Яндекс.Метрика</h2>
          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Сайт использует технологию cookie — небольшие текстовые файлы, которые размещаются на вашем устройстве 
              при посещении Сайта. Cookie необходимы для корректной работы сервиса аналитики.
            </p>
            <p>
              Для сбора аналитических данных используется сервис <strong class="text-white">Яндекс.Метрика</strong> 
              (предоставляется ООО «Яндекс», Россия). Яндекс.Метрика размещает на устройстве пользователя файлы cookie, 
              которые позволяют отслеживать посещения Сайта и анализировать поведение пользователей.
            </p>
            <p>
              Вы можете отключить сохранение cookie в настройках вашего браузера. Для этого обратитесь к справке 
              вашего браузера. Однако отключение cookie может повлиять на функциональность некоторых разделов Сайта.
            </p>
            <p>
              Дополнительную информацию о том, как Яндекс обрабатывает данные, можно найти в 
              <a href="https://yandex.ru/legal/confidential/" target="_blank" rel="noopener noreferrer" 
              class="text-white underline hover:text-accent transition-colors">
                Политике конфиденциальности Яндекса
              </a>.
            </p>
          </div>
        </section>

        <!-- Раздел 6: Передача данных третьим лицам -->
        <section class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">6. Передача данных третьим лицам</h2>
          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Обезличенные технические данные, собираемые с помощью Яндекс.Метрики, передаются компании 
              <strong class="text-white">ООО «Яндекс»</strong> (Россия) для целей аналитики. 
              Яндекс обрабатывает эти данные в соответствии со своей Политикой конфиденциальности.
            </p>
            <p>
              Сайт не передает никакие данные иным третьим лицам, за исключением случаев, предусмотренных 
              законодательством Российской Федерации (по запросу уполномоченных государственных органов).
            </p>
          </div>
        </section>

        <!-- Раздел 7: Сроки хранения -->
        <section class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">7. Сроки хранения данных</h2>
          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Данные, собираемые с помощью Яндекс.Метрики, хранятся в течение срока, необходимого для 
              аналитических целей. Файлы cookie хранятся на устройстве пользователя до момента их удаления 
              пользователем или до истечения срока их действия (устанавливается Яндексом).
            </p>
            <p>
              Пользователь может в любое время удалить сохраненные cookie через настройки своего браузера.
            </p>
          </div>
        </section>

        <!-- Раздел 8: Права пользователя -->
        <section class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">8. Права пользователя</h2>
          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p>Пользователь имеет право:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Получить информацию о том, какие данные обрабатываются на Сайте.</li>
              <li>Отключить сохранение cookie в настройках своего браузера.</li>
              <li>Удалить сохраненные cookie в любое время.</li>
              <li>Прекратить использование Сайта, если не согласен с условиями настоящей Политики.</li>
            </ul>
            <p>
              Поскольку Сайт не собирает персональные данные пользователей (имена, телефоны, email), 
              запросы на уточнение, блокирование или уничтожение персональных данных не применимы.
            </p>
          </div>
        </section>

        <!-- Раздел 9: Безопасность данных -->
        <section class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">9. Безопасность данных</h2>
          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Сайт принимает необходимые технические меры для защиты передаваемых данных. 
              Все данные передаются по защищенному протоколу HTTPS с использованием шифрования.
            </p>
            <p>
              Безопасность хранения данных, собираемых Яндекс.Метрикой, обеспечивается компанией ООО «Яндекс» 
              в соответствии с их Политикой конфиденциальности и требованиями законодательства Российской Федерации.
            </p>
          </div>
        </section>

        <!-- Раздел 10: Изменение Политики -->
        <section class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">10. Изменение Политики конфиденциальности</h2>
          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Владелец Сайта оставляет за собой право вносить изменения в настоящую Политику конфиденциальности. 
              Новая редакция Политики вступает в силу с момента ее размещения на Сайте.
            </p>
            <p>
              Актуальная версия Политики всегда доступна по адресу: 
              <NuxtLink to="/privacy-policy" class="text-white underline hover:text-accent transition-colors">
                detailingmaster.ru/privacy-policy
              </NuxtLink>
            </p>
          </div>
        </section>


      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Мета-теги для SEO
useHead({
  title: 'Политика конфиденциальности | Детейлинг студия в Кирове',
  meta: [
    {
      name: 'description',
      content: 'Политика конфиденциальности сайта детейлинг-студии в Кирове. Информация о сборе данных через Яндекс.Метрику и использовании cookie.'
    },
    { property: 'og:title', content: 'Политика конфиденциальности | Детейлинг студия в Кирове' },
    { property: 'og:description', content: 'Политика конфиденциальности сайта детейлинг-студии в Кирове.' },
    { property: 'og:type', content: 'article' }
  ],
  link: [
    { rel: 'canonical', href: 'https://detailingmaster.ru/privacy-policy' }
  ]
})
</script>

<style scoped>
/* Стили для типографики */
.prose :deep(h2) {
  position: relative;
  padding-bottom: 0.75rem;
  margin-bottom: 1.5rem;
}

.prose :deep(h2::after) {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ff6b35, #f7931e);
  border-radius: 2px;
}

.prose :deep(p) {
  margin-bottom: 1rem;
}

.prose :deep(ul) {
  margin-bottom: 1rem;
}

.prose :deep(li) {
  margin-bottom: 0.5rem;
}

.prose :deep(a) {
  transition: color 0.3s ease;
}

.prose :deep(a:hover) {
  color: #ff6b35;
}
</style>