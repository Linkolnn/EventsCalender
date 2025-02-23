### Zillendar

Написан с использованием Nuxt 3

# app.vue
```markdown
# app.vue

Этот файл является основным компонентом приложения Vue.js, который определяет структуру и стили для всего приложения.
```
## Шаблон (Template)

```vue
<template>
  <Header />
  <main class="main">
    <NuxtPage />
  </main>  
  <Footer />
</template>
```

### Описание

- `<Header />`: Компонент заголовка, который отображается в верхней части страницы.
- `<main class="main">`: Основной контейнер для содержимого страницы.
  - `<NuxtPage />`: Компонент, который отображает текущую страницу, выбранную в маршрутизации Nuxt.js.
- `<Footer />`: Компонент подвала, который отображается в нижней части страницы.

## Стили (Styles)

```sass
<style lang="sass">
@import @color
@import @global
@import @mixin

.section 
  min-height: 90vh

@include mobile
  .section
    min-height: 70vh
</style>
```

### Описание

- `@import @color`: Импортирует файл с цветовыми переменными.
- `@import @global`: Импортирует глобальные стили.
- `@import @mixin`: Импортирует миксины для повторного использования стилей.

### Стили для секции

- `.section`: Класс для секции, который задает минимальную высоту.
  - `min-height: 90vh`: Устанавливает минимальную высоту секции на 90% высоты видимой области окна браузера.
  - `@include mobile`: Миксин для мобильных устройств.
    - `.section`: Класс для секции на мобильных устройствах.
      - `min-height: 70vh`: Устанавливает минимальную высоту секции на 70% высоты видимой области окна браузера на мобильных устройствах.

# /components/Header/index.vue

```markdown
# /components/Header/index.vue

Этот файл является компонентом заголовка (Header) для приложения Vue.js. Он определяет структуру и стили для заголовка, а также включает логику для проверки аутентификации пользователя.
```
## Шаблон (Template)

```vue
<template>
    <header class="header" :class="{ 'header__profile': isAuth }">
        <NuxtLink to="/" class="header__logo-link">
            <IconLogoDark class="footer__logo-img" filled/>
        </NuxtLink>
        <NavMenu/>
    </header>
</template>
```

### Описание

- `<header class="header" :class="{ 'header__profile': isAuth }">`: Основной контейнер заголовка. Добавляет класс `header__profile`, если пользователь аутентифицирован.
  - `<NuxtLink to="/" class="header__logo-link">`: Ссылка на главную страницу.
    - `<IconLogoDark class="footer__logo-img" filled/>`: Логотип приложения.
  - `<NavMenu/>`: Компонент меню навигации.

## Скрипт (Script)

```vue
<script setup>
const { currentUser } = useAuth();
const isAuth = computed(() => !!currentUser.value);
</script>
```

### Описание

- `useAuth()`: Хук для получения текущего пользователя.
- `currentUser`: Переменная, содержащая информацию о текущем пользователе.
- `isAuth`: Вычисляемое свойство, которое возвращает `true`, если пользователь аутентифицирован, и `false` в противном случае.

## Стили (Styles)

```sass
<style lang="sass">
@import @color
@import @global
@import @mixin

.header 
    display: flex
    flex-direction: row
    justify-content: space-between
    background: transparent
    padding: 20px

.header__logo-img
    height: 80px
    width: 80px

@include mobile
    .header__logo-img
        height: 65px
        width: 65px
</style>
```

### Описание

- `@import @color`: Импортирует файл с цветовыми переменными.
- `@import @global`: Импортирует глобальные стили.
- `@import @mixin`: Импортирует миксины для повторного использования стилей.

### Стили для заголовка

- `.header`: Класс для заголовка.
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `flex-direction: row`: Располагает элементы в строку.
  - `justify-content: space-between`: Распределяет элементы с равным пространством между ними.
  - `background: transparent`: Устанавливает прозрачный фон.
  - `padding: 20px`: Устанавливает внутренние отступы.

### Стили для логотипа

- `.header__logo-img`: Класс для изображения логотипа.
  - `height: 80px`: Устанавливает высоту логотипа.
  - `width: 80px`: Устанавливает ширину логотипа.

### Стили для мобильных устройств

- `@include mobile`: Миксин для мобильных устройств.
  - `.header__logo-img`: Класс для изображения логотипа на мобильных устройствах.
    - `height: 65px`: Устанавливает высоту логотипа на мобильных устройствах.
    - `width: 65px`: Устанавливает ширину логотипа на мобильных устройствах.

# /components/Footer/index.vue

```markdown
# /components/Footer/index.vue

Этот файл является компонентом подвала (Footer) для приложения Vue.js. Он определяет структуру и стили для подвала, а также включает меню навигации.
```
## Шаблон (Template)

```vue
<template>
    <footer class="footer">
        <NuxtLink to="/" class="footer__logo-link">
          <IconLogoLight class="footer__logo-img" filled/>
        </NuxtLink>
        <NavMenu variant="footer"/>
    </footer>
</template>
```

### Описание

- `<footer class="footer">`: Основной контейнер подвала.
  - `<NuxtLink to="/" class="footer__logo-link">`: Ссылка на главную страницу.
    - `<IconLogoLight class="footer__logo-img" filled/>`: Логотип приложения в светлой теме.
  - `<NavMenu variant="footer"/>`: Компонент меню навигации с вариантом "footer".

## Стили (Styles)

```sass
<style lang="sass">
@import @color
@import @global
@import @mixin

.footer 
    display: flex
    flex-direction: row
    position: relative  
    z-index: 1
    justify-content: space-between
    background: $black
    padding: 20px

.footer__logo-img
    height: 80px
    width: 80px

@include mobile
    .footer__logo-img
        height: 65px
        width: 65px
</style>
```

### Описание

- `@import @color`: Импортирует файл с цветовыми переменными.
- `@import @global`: Импортирует глобальные стили.
- `@import @mixin`: Импортирует миксины для повторного использования стилей.

### Стили для подвала

- `.footer`: Класс для подвала.
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `flex-direction: row`: Располагает элементы в строку.
  - `position: relative`: Устанавливает относительное позиционирование.
  - `z-index: 1`: Устанавливает z-index для подвала.
  - `justify-content: space-between`: Распределяет элементы с равным пространством между ними.
  - `background: $black`: Устанавливает черный фон.
  - `padding: 20px`: Устанавливает внутренние отступы.

### Стили для логотипа

- `.footer__logo-img`: Класс для изображения логотипа.
  - `height: 80px`: Устанавливает высоту логотипа.
  - `width: 80px`: Устанавливает ширину логотипа.

### Стили для мобильных устройств

- `@include mobile`: Миксин для мобильных устройств.
  - `.footer__logo-img`: Класс для изображения логотипа на мобильных устройствах.
    - `height: 65px`: Устанавливает высоту логотипа на мобильных устройствах.
    - `width: 65px`: Устанавливает ширину логотипа на мобильных устройствах.

# /components/NavMenu.vue

```markdown
# /components/NavMenu.vue


Этот файл является компонентом меню навигации (NavMenu) для приложения Vue.js. Он определяет структуру и стили для меню навигации, а также включает логику для обработки выхода пользователя.
```
## Скрипт (Script)

```vue
<script setup>
import data from '@services/data';
const { logout, currentUser } = useAuth();

const props = defineProps({
  variant: {
    type: String,
    default: 'header',
    validator: (value) => ['header', 'footer'].includes(value)
  }
});

const menuItems = computed(() => 
  data.navMenu(props.variant, !!currentUser.value)
);

const handleLogout = () => {
  logout();
  navigateTo('/');
};
</script>
```

### Описание

- `import data from '@services/data';`: Импортирует данные для меню навигации.
- `const { logout, currentUser } = useAuth();`: Импортирует функции `logout` и `currentUser` из хука `useAuth`.
- `const props = defineProps({ ... });`: Определяет пропсы компонента.
  - `variant`: Тип меню навигации (`header` или `footer`).
- `const menuItems = computed(() => ...);`: Вычисляемое свойство, которое возвращает элементы меню на основе текущего пользователя и варианта меню.
- `const handleLogout = () => { ... };`: Функция для обработки выхода пользователя.

## Шаблон (Template)

```vue
<template>
  <nav class="nav__menu">
    <ul :class="[variant === 'footer' ? 'nav__menu-list--footer' : 'nav__menu-list--header']">
      <li class="nav__menu-item" v-for="item in menuItems" :key="item.url">
        <NuxtLink 
          v-if="!item.url.startsWith('#')" 
          :to="item.url" 
          class="nav__menu-link"
          :class="{ 'nav__menu-link--footer': variant === 'footer' }"
        >
          <button class="nav__menu-btn btn font-button">
            {{ item.text }}
          </button>
        </NuxtLink>
        <button 
          v-else 
          class="nav__menu-btn btn font-button" 
          @click="item.url === '#logout' ? handleLogout() : null"
        >
          {{ item.text }}
        </button>
      </li>
    </ul>
  </nav>
</template>
```

### Описание

- `<nav class="nav__menu">`: Основной контейнер меню навигации.
  - `<ul :class="[variant === 'footer' ? 'nav__menu-list--footer' : 'nav__menu-list--header']">`: Список элементов меню. Класс списка зависит от варианта меню (`footer` или `header`).
    - `<li class="nav__menu-item" v-for="item in menuItems" :key="item.url">`: Элемент списка для каждого элемента меню.
      - `<NuxtLink v-if="!item.url.startsWith('#')" :to="item.url" class="nav__menu-link" :class="{ 'nav__menu-link--footer': variant === 'footer' }">`: Ссылка на страницу, если URL не начинается с `#`.
        - `<button class="nav__menu-btn btn font-button">`: Кнопка внутри ссылки.
          - `{{ item.text }}`: Текст элемента меню.
      - `<button v-else class="nav__menu-btn btn font-button" @click="item.url === '#logout' ? handleLogout() : null">`: Кнопка для элементов меню, URL которых начинается с `#`.
        - `{{ item.text }}`: Текст элемента меню.

## Стили (Styles)

```sass
<style lang="sass">
@import @color
@import @global
@import @mixin
@import @fonts

.nav__menu 
  display: flex
  flex-direction: row
  align-items: center

.nav__menu-list--footer
  display: flex
  flex-direction: column
  align-items: flex-end
  gap: 10px   

.nav__menu-list--header
  display: flex
  flex-direction: row
  gap: 10px 

.nav__menu-link 
  color: $white

@include mobile
  .nav__menu-list
    gap: 10px
</style>
```

### Описание

- `@import @color`: Импортирует файл с цветовыми переменными.
- `@import @global`: Импортирует глобальные стили.
- `@import @mixin`: Импортирует миксины для повторного использования стилей.
- `@import @fonts`: Импортирует шрифты.

### Стили для меню навигации

- `.nav__menu`: Класс для контейнера меню навигации.
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `flex-direction: row`: Располагает элементы в строку.
  - `align-items: center`: Выравнивает элементы по центру по вертикали.

### Стили для списка элементов меню

- `.nav__menu-list--footer`: Класс для списка элементов меню в подвале.
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `flex-direction: column`: Располагает элементы в колонку.
  - `align-items: flex-end`: Выравнивает элементы по правому краю.
  - `gap: 10px`: Устанавливает промежуток между элементами.

- `.nav__menu-list--header`: Класс для списка элементов меню в заголовке.
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `flex-direction: row`: Располагает элементы в строку.
  - `gap: 10px`: Устанавливает промежуток между элементами.

### Стили для ссылок меню

- `.nav__menu-link`: Класс для ссылок меню.
  - `color: $white`: Устанавливает белый цвет текста.

### Стили для мобильных устройств

- `@include mobile`: Миксин для мобильных устройств.
  - `.nav__menu-list`: Класс для списка элементов меню на мобильных устройствах.
    - `gap: 10px`: Устанавливает промежуток между элементами.

### pages/index.vue

```markdown
# pages/index.vue

Этот файл является основным компонентом страницы для приложения Vue.js. Он определяет структуру и стили для приветственного экрана и секции "О проекте".
```
## Скрипт (Script)

```vue
<script setup>
import data from '@services/data';
import gsap from 'gsap';

const welcomeListBtn = data.welcomeListBtn();
const sectionRef = ref(null);
const titleRef = ref(null);
const textRef = ref(null);
const btnsRef = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { opacity: 0, y: 50, duration: 1, ease: 'power3.out' } });
  tl.from(titleRef.value, {})
    .from(textRef.value, {}, '-=0.5') // Начинает раньше на 0.5с
    .from(btnsRef.value, { stagger: 0.2 }, '-=0.5'); // Анимирует кнопки по очереди
});
</script>
```

### Описание

- `import data from '@services/data';`: Импортирует данные для кнопок приветственного экрана.
- `import gsap from 'gsap';`: Импортирует библиотеку GSAP для анимации.
- `const welcomeListBtn = data.welcomeListBtn();`: Получает список кнопок для приветственного экрана.
- `const sectionRef = ref(null);`: Создает ссылку на секцию приветственного экрана.
- `const titleRef = ref(null);`: Создает ссылку на заголовок приветственного экрана.
- `const textRef = ref(null);`: Создает ссылку на текст приветственного экрана.
- `const btnsRef = ref(null);`: Создает ссылку на блок кнопок приветственного экрана.
- `onMounted(() => { ... });`: Хук, который выполняется при монтировании компонента. Создает анимацию для заголовка, текста и кнопок приветственного экрана.

## Шаблон (Template)

```vue
<template>
    <section ref="sectionRef" class="welcome section">
      <h1 ref="titleRef" class="welcome__title font-h1">
        Zillendar — удобный инструмент для планирования и управления событиями.
      </h1>
      <p ref="textRef" class="welcome__text font-text_extra-large">
        Добавляйте встречи, задачи и важные даты в пару кликов, а благодаря сохранению данных в cookies ваш график всегда будет под рукой.
        Интуитивный интерфейс и минималистичный дизайн помогут легко организовать время, а гибкая навигация по месяцам обеспечит быстрый доступ к нужным событиям.
      </p>
      <div ref="btnsRef" class="welcome__btn-block">
        <NuxtLink v-for="btn in welcomeListBtn" :to="btn.url">
          <button class="welcome__btn btn font-button">
            {{ btn.text }}
          </button>
        </NuxtLink>
      </div>
    </section>
    <section class="about section" id="more">
      <IconLogoLight class="about__logo" filled/>
      <div class="about__content">
        <h2 class="about__title font-h2">О проекте</h2>
        <p class="about__description font-text_medium">
          Это простое приложение-календарь на Nuxt 3, позволяющее регистрироваться и управлять событиями без серверной части.
          Авторизация и сохранение данных осуществляется с помощью cookie.  
        </p>
        <ul class="about__features">
          <li class="font-text_medium"><strong>Регистрация и вход:</strong> безопасное хранение паролей с хэшированием.</li>
          <li class="font-text_medium"><strong>Управление событиями:</strong> создание, редактирование и удаление задач для каждого пользователя.</li>
          <li class="font-text_medium"><strong>Сохранение данных:</strong> события хранятся в cookies и доступны после перезагрузки.</li>
        </ul>
      </div>
    </section>
</template>
```

### Описание

- `<section ref="sectionRef" class="welcome section">`: Секция приветственного экрана.
  - `<h1 ref="titleRef" class="welcome__title font-h1">`: Заголовок приветственного экрана.
  - `<p ref="textRef" class="welcome__text font-text_extra-large">`: Текст приветственного экрана.
  - `<div ref="btnsRef" class="welcome__btn-block">`: Блок кнопок приветственного экрана.
    - `<NuxtLink v-for="btn in welcomeListBtn" :to="btn.url">`: Ссылка на страницу для каждой кнопки.
      - `<button class="welcome__btn btn font-button">`: Кнопка приветственного экрана.
        - `{{ btn.text }}`: Текст кнопки.
- `<section class="about section" id="more">`: Секция "О проекте".
  - `<IconLogoLight class="about__logo" filled/>`: Логотип проекта.
  - `<div class="about__content">`: Контейнер для содержимого секции "О проекте".
    - `<h2 class="about__title font-h2">`: Заголовок секции "О проекте".
    - `<p class="about__description font-text_medium">`: Описание проекта.
    - `<ul class="about__features">`: Список особенностей проекта.
      - `<li class="font-text_medium"><strong>Регистрация и вход:</strong> ...</li>`: Элемент списка с описанием особенности.

## Стили (Styles)

```sass
<style lang="sass">
@import @color
@import @global
@import @mixin
@import @fonts

.welcome  
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 40px

.welcome__title 
    text-align: center

.welcome__text
    color: $grey
    width: 80%
    text-align: center

.welcome__btn-block
    display: flex
    flex-direction: column
    align-items: center
    gap: 20px

.welcome__btn
    font-size: 24px 

.about 
  display: flex
  min-height: 90vh
  flex-direction: column
  justify-content: center
  align-items: center
  gap: 20px

.about__logo 
  height: 120px
  width: 120px

.about__content 
  display: flex
  flex-direction: column
  align-items: center
  gap: 20px
  > *
    color: $white
    width: 80%
    text-align: center
    
.about__features 
  display: flex
  flex-direction: column
  gap: 20px

@include mobile
  .welcome__text
    display: none
</style>
```

### Описание

- `@import @color`: Импортирует файл с цветовыми переменными.
- `@import @global`: Импортирует глобальные стили.
- `@import @mixin`: Импортирует миксины для повторного использования стилей.
- `@import @fonts`: Импортирует шрифты.

### Стили для приветственного экрана

- `.welcome`: Класс для секции приветственного экрана.
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `flex-direction: column`: Располагает элементы в колонку.
  - `align-items: center`: Выравнивает элементы по центру по горизонтали.
  - `justify-content: center`: Выравнивает элементы по центру по вертикали.
  - `gap: 40px`: Устанавливает промежуток между элементами.

- `.welcome__title`: Класс для заголовка приветственного экрана.
  - `text-align: center`: Выравнивает текст по центру.

- `.welcome__text`: Класс для текста приветственного экрана.
  - `color: $grey`: Устанавливает серый цвет текста.
  - `width: 80%`: Устанавливает ширину текста.
  - `text-align: center`: Выравнивает текст по центру.

- `.welcome__btn-block`: Класс для блока кнопок приветственного экрана.
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `flex-direction: column`: Располагает элементы в колонку.
  - `align-items: center`: Выравнивает элементы по центру по горизонтали.
  - `gap: 20px`: Устанавливает промежуток между элементами.

- `.welcome__btn`: Класс для кнопок приветственного экрана.
  - `font-size: 24px`: Устанавливает размер шрифта.

### Стили для секции "О проекте"

- `.about`: Класс для секции "О проекте".
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `min-height: 90vh`: Устанавливает минимальную высоту секции.
  - `flex-direction: column`: Располагает элементы в колонку.
  - `justify-content: center`: Выравнивает элементы по центру по вертикали.
  - `align-items: center`: Выравнивает элементы по центру по горизонтали.
  - `gap: 20px`: Устанавливает промежуток между элементами.

- `.about__logo`: Класс для логотипа секции "О проекте".
  - `height: 120px`: Устанавливает высоту логотипа.
  - `width: 120px`: Устанавливает ширину логотипа.

- `.about__content`: Класс для содержимого секции "О проекте".
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `flex-direction: column`: Располагает элементы в колонку.
  - `align-items: center`: Выравнивает элементы по центру по горизонтали.
  - `gap: 20px`: Устанавливает промежуток между элементами.
  - `> *`: Применяет стили ко всем дочерним элементам.
    - `color: $white`: Устанавливает белый цвет текста.
    - `width: 80%`: Устанавливает ширину текста.
    - `text-align: center`: Выравнивает текст по центру.

- `.about__features`: Класс для списка особенностей секции "О проекте".
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `flex-direction: column`: Располагает элементы в колонку.
  - `gap: 20px`: Устанавливает промежуток между элементами.

### Стили для мобильных устройств

- `@include mobile`: Миксин для мобильных устройств.
  - `.welcome__text`: Класс для текста приветственного экрана на мобильных устройствах.
    - `display: none`: Скрывает текст на мобильных устройствах.

# /pages/register.vue

```markdown
# /pages/register.vue

Этот файл является компонентом страницы регистрации для приложения Vue.js. Он определяет структуру и стили для страницы регистрации.
```
## Скрипт (Script)

```vue
<script setup>
</script>
```

### Описание

- В этом компоненте нет логики на стороне скрипта. Он просто рендерит шаблон и применяет стили.

## Шаблон (Template)

```vue
<template>
    <section class="register section">
        <FormAuth type="register" />
    </section>
</template>
```

### Описание

- `<section class="register section">`: Основной контейнер для страницы регистрации.
  - `<FormAuth type="register" />`: Компонент формы аутентификации, который используется для регистрации. Проп `type` установлен в значение `register`, чтобы указать, что это форма регистрации.

## Стили (Styles)

```sass
<style lang="sass">
@import @color
@import @global
@import @mixin

.register
    background: $gradient
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 20px
</style>
```

### Описание

- `@import @color`: Импортирует файл с цветовыми переменными.
- `@import @global`: Импортирует глобальные стили.
- `@import @mixin`: Импортирует миксины для повторного использования стилей.

### Стили для страницы регистрации

- `.register`: Класс для секции регистрации.
  - `background: $gradient`: Устанавливает градиентный фон.
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `flex-direction: column`: Располагает элементы в колонку.
  - `justify-content: center`: Выравнивает элементы по центру по вертикали.
  - `align-items: center`: Выравнивает элементы по центру по горизонтали.
  - `gap: 20px`: Устанавливает промежуток между элементами.

# /pages/login.vue

```markdown
# /pages/login.vue

Этот файл является компонентом страницы входа для приложения Vue.js. Он определяет структуру и стили для страницы входа.
```
## Скрипт (Script)

```vue
<script setup>
</script>
```

### Описание

- В этом компоненте нет логики на стороне скрипта. Он просто рендерит шаблон и применяет стили.

## Шаблон (Template)

```vue
<template>
    <section class="login section">
        <FormAuth type="login" />
    </section>
</template>
```

### Описание

- `<section class="login section">`: Основной контейнер для страницы входа.
  - `<FormAuth type="login" />`: Компонент формы аутентификации, который используется для входа. Проп `type` установлен в значение `login`, чтобы указать, что это форма входа.

## Стили (Styles)

```sass
<style lang="sass">
@import @color
@import @global
@import @mixin

.login
    background: $gradient
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 20px
</style>
```

### Описание

- `@import @color`: Импортирует файл с цветовыми переменными.
- `@import @global`: Импортирует глобальные стили.
- `@import @mixin`: Импортирует миксины для повторного использования стилей.

### Стили для страницы входа

- `.login`: Класс для секции входа.
  - `background: $gradient`: Устанавливает градиентный фон.
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `flex-direction: column`: Располагает элементы в колонку.
  - `justify-content: center`: Выравнивает элементы по центру по вертикали.
  - `align-items: center`: Выравнивает элементы по центру по горизонтали.
  - `gap: 20px`: Устанавливает промежуток между элементами.

# /components/FormAuth.vue

```markdown
# /components/FormAuth.vue

Этот файл является компонентом формы аутентификации для приложения Vue.js. Он используется как для регистрации, так и для входа пользователя, в зависимости от переданного пропса `type`.
```
## Скрипт (Script)

```vue
<script setup>
import { useAuth } from '~/composables/useAuth';
import gsap from 'gsap';

const props = defineProps(['type']);
const formRef = ref(null);
const name = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');

const { register, login } = useAuth();
const router = useRouter();

const handleSubmit = () => {
  if (props.type === 'register') {
    if (password.value !== confirmPassword.value) {
      errorMessage.value = 'Пароли не совпадают';
      return;
    }
    if (register(name.value, password.value)) {
      router.push('/profile');
    } else {
      errorMessage.value = 'Ошибка регистрации';
    }
  } else {
    if (login(name.value, password.value)) {
      router.push('/profile');
    } else {
      errorMessage.value = 'Неверные имя или пароль';
    }
  }
};

onMounted(() => {
  gsap.fromTo(
    formRef.value,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
  );
});
</script>
```

### Описание

- `import { useAuth } from '~/composables/useAuth';`: Импортирует функции аутентификации.
- `import gsap from 'gsap';`: Импортирует библиотеку GSAP для анимации.
- `const props = defineProps(['type']);`: Определяет пропсы компонента. Проп `type` указывает тип формы (`register` или `login`).
- `const formRef = ref(null);`: Создает ссылку на форму.
- `const name = ref('');`: Создает реактивную переменную для имени пользователя.
- `const password = ref('');`: Создает реактивную переменную для пароля.
- `const confirmPassword = ref('');`: Создает реактивную переменную для подтверждения пароля (используется только при регистрации).
- `const errorMessage = ref('');`: Создает реактивную переменную для сообщения об ошибке.
- `const { register, login } = useAuth();`: Импортирует функции регистрации и входа.
- `const router = useRouter();`: Импортирует роутер для навигации.
- `const handleSubmit = () => { ... };`: Функция для обработки отправки формы.
  - Проверяет, совпадают ли пароли при регистрации.
  - Вызывает функцию регистрации или входа в зависимости от типа формы.
  - Перенаправляет пользователя на страницу профиля при успешной аутентификации.
  - Устанавливает сообщение об ошибке при неудачной аутентификации.
- `onMounted(() => { ... });`: Хук, который выполняется при монтировании компонента. Создает анимацию для формы.

## Шаблон (Template)

```vue
<template>
    <form ref="formRef" @submit.prevent="handleSubmit" :class="['form', type ? 'register__form' : 'login__form']">
        <h2 class="register__title font-h2">
            {{ type === 'register' ? 'Регистрация' : 'Авторизация' }}
        </h2>
        <label class="form__label font-text_medium">Имя</label>
        <input class="inp" v-model="name" type="text" required />
        <label class="form__label font-text_medium">Пароль</label>
        <input class="inp" v-model="password" type="password" required />
        <template v-if="type === 'register'">
            <label class="form__label font-text_medium">Повторите пароль</label>
            <input class="inp" v-model="confirmPassword" type="password" required />
        </template>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            <button class="btn font-button" type="submit">
                {{ type === 'register' ? 'Зарегистрироваться' : 'Войти' }}
            </button>
        <!-- <template v-if="type === 'login'">
            <button class="btn font-button" type="button">Восстановить пароль</button>
        </template> -->
    </form>
</template>
```

### Описание

- `<form ref="formRef" @submit.prevent="handleSubmit" :class="['form', type ? 'register__form' : 'login__form']">`: Форма аутентификации.
  - `ref="formRef"`: Ссылка на форму для анимации.
  - `@submit.prevent="handleSubmit"`: Обработчик отправки формы.
  - `:class="['form', type ? 'register__form' : 'login__form']"`: Устанавливает класс формы в зависимости от типа (`register` или `login`).
- `<h2 class="register__title font-h2">`: Заголовок формы.
  - `{{ type === 'register' ? 'Регистрация' : 'Авторизация' }}`: Текст заголовка в зависимости от типа формы.
- `<label class="form__label font-text_medium">Имя</label>`: Метка для поля ввода имени.
- `<input class="inp" v-model="name" type="text" required />`: Поле ввода имени.
- `<label class="form__label font-text_medium">Пароль</label>`: Метка для поля ввода пароля.
- `<input class="inp" v-model="password" type="password" required />`: Поле ввода пароля.
- `<template v-if="type === 'register'">`: Дополнительные поля для регистрации.
  - `<label class="form__label font-text_medium">Повторите пароль</label>`: Метка для поля ввода подтверждения пароля.
  - `<input class="inp" v-model="confirmPassword" type="password" required />`: Поле ввода подтверждения пароля.
- `<p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>`: Сообщение об ошибке.
- `<button class="btn font-button" type="submit">`: Кнопка отправки формы.
  - `{{ type === 'register' ? 'Зарегистрироваться' : 'Войти' }}`: Текст кнопки в зависимости от типа формы.

## Стили (Styles)

```sass
<style lang="sass">
@import @color
@import @global
@import @mixin

.form 
    background: #ffffff4d
    border-radius: $radius
    display: flex
    flex-direction: column
    padding: 20px
    gap: 20px
    width: 700px

.error-message
  border-radius: $radius
  background: red
  color: $white
  padding: 5px
  transition: 0.5s ease

@include mobile
  .form
    width: 350px
</style>
```

### Описание

- `@import @color`: Импортирует файл с цветовыми переменными.
- `@import @global`: Импортирует глобальные стили.
- `@import @mixin`: Импортирует миксины для повторного использования стилей.

### Стили для формы

- `.form`: Класс для формы аутентификации.
  - `background: #ffffff4d`: Устанавливает полупрозрачный белый фон.
  - `border-radius: $radius`: Устанавливает радиус скругления углов.
  - `display: flex`: Использует Flexbox для расположения элементов.
  - `flex-direction: column`: Располагает элементы в колонку.
  - `padding: 20px`: Устанавливает внутренние отступы.
  - `gap: 20px`: Устанавливает промежуток между элементами.
  - `width: 700px`: Устанавливает ширину формы.

### Стили для сообщения об ошибке

- `.error-message`: Класс для сообщения об ошибке.
  - `border-radius: $radius`: Устанавливает радиус скругления углов.
  - `background: red`: Устанавливает красный фон.
  - `color: $white`: Устанавливает белый цвет текста.
  - `padding: 5px`: Устанавливает внутренние отступы.
  - `transition: 0.5s ease`: Устанавливает плавный переход.

### Стили для мобильных устройств

- `@include mobile`: Миксин для мобильных устройств.
  - `.form`: Класс для формы на мобильных устройствах.
    - `width: 350px`: Устанавливает ширину формы на мобильных устройствах.

# /pages/profile.vue

```markdown
# /pages/profile.vue

Этот файл является компонентом страницы профиля для приложения Vue.js. Он определяет структуру и стили для управления событиями пользователя, включая создание, редактирование и удаление событий.
```
## Скрипт (Script)

```vue
<script setup>
import { useAuth } from '@/composables/useAuth';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { useEvents } from '@/composables/useEvents';
import gsap from 'gsap';

const { currentUser } = useAuth();
const { getUserEvents, saveUserEvents } = useEvents();
const aside = ref(null);
const profileRef = ref(null);
const events = ref([]);
const isCreating = ref(false);
const isEditing = ref(false);
const selectedEvent = ref(null);
const newEvent = ref({ 
  id: null,
  title: '', 
  description: '', 
  date: [],
  class: 'purple' 
});

const colorOptions = ref([
  { class: 'red' },
  { class: 'orange' },
  { class: 'green' },
  { class: 'blue' },
  { class: 'purple' }
]);

const generateId = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
};

const formatDate = (date) => {
  if (!date || !(date instanceof Date) || isNaN(date)) return "Дата не указана";
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const startCreating = () => {
  aside.value = true;
  isCreating.value = true;
  isEditing.value = false;
  newEvent.value = { title: '', description: '', date: [], color: '#6A1B9A' };
};

const createEvent = () => {
  if (newEvent.value.title && newEvent.value.date?.length === 2) {
    const eventData = {
      id: isEditing.value ? newEvent.value.id : generateId(),
      title: newEvent.value.title,
      description: newEvent.value.description,
      start: new Date(newEvent.value.date[0]),
      end: new Date(newEvent.value.date[1]),
      class: newEvent.value.class || 'purple'
    };

    const updatedEvents = isEditing.value
      ? events.value.map(e => e.id === eventData.id ? eventData : e)
      : [...events.value, eventData];

    saveUserEvents(currentUser.value.name, updatedEvents);
    events.value = updatedEvents;
    resetForm();
  }
};

const showEventDetails = (event) => {
  aside.value = true;
  selectedEvent.value = event;
  isCreating.value = false;
};

const editEvent = () => {
  if (!selectedEvent.value) return;
  aside.value = true;
  isCreating.value = true;
  isEditing.value = true;
  newEvent.value = {
    id: selectedEvent.value.id,
    title: selectedEvent.value.title,
    description: selectedEvent.value.description,
    date: [new Date(selectedEvent.value.start), new Date(selectedEvent.value.end)],
    color: selectedEvent.value.color 
  };
};

const resetForm = () => {
  isCreating.value = false;
  isEditing.value = false;
  selectedEvent.value = null;
  aside.value = false;
  newEvent.value = { id: null, title: '', description: '', date: [] };
};

const deleteEvent = () => {
  if (!selectedEvent.value) return;
  const isConfirmed = window.confirm("Вы уверены, что хотите удалить это событие?");
  if (!isConfirmed) return;

  aside.value = false;

  const updatedEvents = events.value.filter(e => e.id !== selectedEvent.value.id);
  saveUserEvents(currentUser.value.name, updatedEvents);
  events.value = updatedEvents;
  selectedEvent.value = null;
};

const deleteAllEvent = () => {
  const isConfirmed = window.confirm("Вы уверены, что хотите удалить все события?");
  if (!isConfirmed) return;
  events.value = [];
  saveUserEvents(currentUser.value.name, events.value);
  selectedEvent.value = null;
};

const cancelEdit = () => {
  isCreating.value = false;
  isEditing.value = false;
  aside.value = false;
};

watch(currentUser,  (user) => {
  if (user) {
    events.value = getUserEvents(user.name)
  }
}, { immediate: true })

onMounted(() => {
  if (!currentUser.value) {
    navigateTo('/login');
  }
  gsap.fromTo(
    profileRef.value,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
  );
});
</script>
```

### Описание

- `import { useAuth } from '@/composables/useAuth';`: Импортирует функции аутентификации.
- `import VueCal from 'vue-cal';`: Импортирует компонент календаря.
- `import 'vue-cal/dist/vuecal.css';`: Импортирует стили для компонента календаря.
- `import VueDatePicker from '@vuepic/vue-datepicker';`: Импортирует компонент выбора даты.
- `import '@vuepic/vue-datepicker/dist/main.css';`: Импортирует стили для компонента выбора даты.
- `import { useEvents } from '@/composables/useEvents';`: Импортирует функции для работы с событиями.
- `import gsap from 'gsap';`: Импортирует библиотеку GSAP для анимации.
- `const { currentUser } = useAuth();`: Получает текущего пользователя.
- `const { getUserEvents, saveUserEvents } = useEvents();`: Получает функции для работы с событиями пользователя.
- `const aside = ref(null);`: Создает ссылку на боковую панель.
- `const profileRef = ref(null);`: Создает ссылку на секцию профиля.
- `const events = ref([]);`: Создает реактивную переменную для списка событий.
- `const isCreating = ref(false);`: Создает реактивную переменную для состояния создания события.
- `const isEditing = ref(false);`: Создает реактивную переменную для состояния редактирования события.
- `const selectedEvent = ref(null);`: Создает реактивную переменную для выбранного события.
- `const newEvent = ref({ ... });`: Создает реактивную переменную для нового события.
- `const colorOptions = ref([ ... ]);`: Создает реактивную переменную для списка цветовых опций.
- `const generateId = () => { ... };`: Функция для генерации уникального идентификатора.
- `const formatDate = (date) => { ... };`: Функция для форматирования даты.
- `const startCreating = () => { ... };`: Функция для начала создания нового события.
- `const createEvent = () => { ... };`: Функция для создания нового события.
- `const showEventDetails = (event) => { ... };`: Функция для отображения деталей события.
- `const editEvent = () => { ... };`: Функция для редактирования события.
- `const resetForm = () => { ... };`: Функция для сброса формы.
- `const deleteEvent = () => { ... };`: Функция для удаления события.
- `const deleteAllEvent = () => { ... };`: Функция для удаления всех событий.
- `const cancelEdit = () => { ... };`: Функция для отмены редактирования.
- `watch(currentUser, (user) => { ... }, { immediate: true });`: Наблюдатель за текущим пользователем.
- `onMounted(() => { ... });`: Хук, который выполняется при монтировании компонента. Создает анимацию для секции профиля.

## Шаблон (Template)

```vue
<template>
  <div v-if="currentUser" class="profile__page">
    <Transition name="aside">
      <aside class="profile__aside" v-if="aside">
        <h2 class="profile_aside-title">{{ isCreating ? 'Создание событие':'Изменить событие'}}</h2>
        <form class="profile__form" v-if="isCreating" @submit.prevent="createEvent">
          <label class="font-text_medium">Название</label>
          <input type="text" maxlength="100" class="inp" v-model="newEvent.title" required />
          <span class="profile__form-counter ">
            {{ newEvent.title.length }}/100
          </span>
          <label class="font-text_medium">Описание</label>
          <textarea maxlength="400"  class="inp textarea" v-model="newEvent.description"></textarea>
          <span class="profile__form-counter ">
            {{ newEvent.description.length }}/400
          </span>
          <label class="font-text_medium">Цвет события</label>
          <div class="color-picker">
            <button
              v-for="color in colorOptions"
              type="button"
              class="color-option"
              :class="[
                color.class, 
                { selected: newEvent.class === color.class }
              ]"
              @click="newEvent.class = color.class"
            />
          </div>
          <VueDatePicker class="profile__datapicker" v-model="newEvent.date" inline auto-apply locale="ru" range/>
          <button class="btn font-button" type="submit">{{ isEditing ? 'Сохранить' : 'Создать' }}</button>
          <button class="btn font-button" type="button" @click="cancelEdit">Отмена</button>
        </form>  
        <form class="profile__form" @submit.prevent="editEvent" v-else-if="selectedEvent">
          <div :class="selectedEvent.class" class="profile__form-content">
            <h3 class="profile__event-text">{{ selectedEvent.title }}</h3>
            <p class="profile__event-text">{{ selectedEvent.description }}</p>
            <h4>{{ formatDate(selectedEvent.start) }}</h4>
            <h4>{{ formatDate(selectedEvent.end) }}</h4>
          </div>
          <button class="btn font-button" type="submit">Изменить</button>
          <button class="btn font-button" type="button" @click="cancelEdit">Отмена</button>
          <button class="btn-delete btn font-button" type="button" @click="deleteEvent">Удалить</button>
        </form>
      </aside>
    </Transition>
    <section ref="profileRef" class="profile__section section">
      <div class="profile__create-block">
        <h1>Профиль {{ currentUser.name }}</h1>
        <button class="btn font-button" @click="startCreating">Создать событие</button>
        <button class="btn font-button" @click="$refs.vuecal.switchView('day', new Date())">Сегодня</button>
        <button class="btn-delete btn font-button" @click="deleteAllEvent">Удалить все ивенты</button>
      </div>
      <vue-cal
        locale="ru"
        class="calendar"
        :events="events"
        :disable-touch="true"
        :time="false"
        active-view="week"
        :transitions="true"
        events-on-month-view="short"
        :events-count-on-year-view="false"
        :disable-duplicate-events="true"
        @event-click="showEventDetails"
      />
    </section>
  </div>
</template>
```

### Описание

- `<div v-if="currentUser" class="profile__page">`: Основной контейнер страницы профиля, отображается только если текущий пользователь аутентифицирован.
  - `<Transition name="aside">`: Компонент для анимации боковой панели.
    - `<aside class="profile__aside" v-if="aside">`: Боковая панель для создания и редактирования событий.
      - `<h2 class="profile_aside-title">{{ isCreating ? 'Создание событие':'Изменить событие'}}</h2>`: Заголовок боковой панели.
      - `<form class="profile__form" v-if="isCreating" @submit.prevent="createEvent">`: Форма для создания нового события.
        - `<label class="font-text_medium">Название</label>`: Метка для поля ввода названия события.
        - `<input type="text" maxlength="100" class="inp" v-model="newEvent.title" required />`: Поле ввода названия события.
        - `<span class="profile__form-counter ">{{ newEvent.title.length }}/100</span>`: Счетчик символов для названия события.
        - `<label class="font-text_medium">Описание</label>`: Метка для поля ввода описания события.
        - `<textarea maxlength="400" class="inp textarea" v-model="newEvent.description"></textarea>`: Поле ввода описания события.
        - `<span class="profile__form-counter ">{{ newEvent.description.length }}/400</span>`: Счетчик символов для описания события.
        - `<label class="font-text_medium">Цвет события</label>`: Метка для выбора цвета события.
        - `<div class="color-picker">`: Контейнер для выбора цвета события.
          - `<button v-for="color in colorOptions" type="button" class="color-option" :class="[color.class, { selected: newEvent.class === color.class }]" @click="newEvent.class = color.class" />`: Кнопки для выбора цвета события.
        - `<VueDatePicker class="profile__datapicker" v-model="newEvent.date" inline auto-apply locale="ru" range/>`: Компонент выбора даты.
        - `<button class="btn font-button" type="submit">{{ isEditing ? 'Сохранить' : 'Создать' }}</button>`: Кнопка для создания или сохранения события.
        - `<button class="btn font-button" type="button" @click="cancelEdit">Отмена</button>`: Кнопка для отмены создания или редактирования события.
      - `<form class="profile__form" @submit.prevent="editEvent" v-else-if="selectedEvent">`: Форма для редактирования выбранного события.
        - `<div :class="selectedEvent.class" class="profile__form-content">`: Контейнер для содержимого формы редактирования.
          - `<h3 class="profile__event-text">{{ selectedEvent.title }}</h3>`: Заголовок события.
          - `<p class="profile__event-text">{{ selectedEvent.description }}</p>`: Описание события.
          - `<h4>{{ formatDate(selectedEvent.start) }}</h4>`: Дата начала события.
          - `<h4>{{ formatDate(selectedEvent.end) }}</h4>`: Дата окончания события.
        - `<button class="btn font-button" type="submit">Изменить</button>`: Кнопка для сохранения изменений.
        - `<button class="btn font-button" type="button" @click="cancelEdit">Отмена</button>`: Кнопка для отмены редактирования.
        - `<button class="btn-delete btn font-button" type="button" @click="deleteEvent">Удалить</button>`: Кнопка для удаления события.
  - `<section ref="profileRef" class="profile__section section">`: Основная секция профиля.
    - `<div class="profile__create-block">`: Блок для создания нового события.
      - `<h1>Профиль {{ currentUser.name }}</h1>`: Заголовок профиля.
      - `<button class="btn font-button" @click="startCreating">Создать событие</button>`: Кнопка для начала создания нового события.
      - `<button class="btn font-button" @click="$refs.vuecal.switchView('day', new Date())">Сегодня</button>`: Кнопка для переключения на текущий день.
      - `<button class="btn-delete btn font-button" @click="deleteAllEvent">Удалить все ивенты</button>`: Кнопка для удаления всех событий.
    - `<vue-cal locale="ru" class="calendar" :events="events" :disable-touch="true" :time="false" active-view="week" :transitions="true" events-on-month-view="short" :events-count-on-year-view="false" :disable-duplicate-events="true" @event-click="showEventDetails" />`: Компонент календаря для отображения событий.

## Стили (Styles)

```sass
<style lang="sass">
@import '@color'
@import '@global'
@import '@mixin'

.profile__event-text
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-line;

.aside-enter-active,
.aside-leave-active 
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease

.aside-enter-from,
.aside-leave-to 
  transform: translateX(-100%)
  opacity: 0

.aside-enter-to,
.aside-leave-from 
  transform: translateX(0)
  opacity: 1

.textarea
  min-height: 130px

.profile__page
  position: relative
  background: rgb(255 255 255 / 50%) 
  display: flex

.profile__section
  flex: 1

.profile__create-block
  display: flex
  flex-direction: row
  justify-content: space-between
  padding: 0px 20px
  gap: 10px
  margin-bottom: 10px
  .btn
    width: max-content

.profile__aside
  display: flex
  flex-direction: column 
  width: 320px

.profile_aside-title
  text-align: center
  padding: 0 20px

.profile__form
  height: 160%
  width: 100%
  background: rgb(255 255 255 / 50%) 
  display: flex
  flex-direction: column
  padding: 20px
  gap: 20px

.profile__form-content
  padding: 20px
  border-radius: $radius
  display: flex
  flex-direction: column
  gap: 10px
  > *
    color: $white

.profile__form-counter
  transform: translateY(-15px)
  width: max-content

.color-picker
  border: 2px solid $purple
  border-radius: $radius
  background: $white
  justify-content: space-around
  display: flex;
  gap: 20px;
  padding: 15px 
  .color-option 
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s;
    position: relative;
    &::after 
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      @include transition
    &.selected 
      border: 2px solid $dark-purple 
      transform: scale(1.2);
      @include transition

    &.red::after 
      background-color: $red
    
    &.orange::after 
      background-color: $orange
    
    &.green::after 
      background-color: $green
    
    &.blue::after 
      background-color: $blue
    
    &.purple::after 
      background-color: $purple

.red 
  background-color: $red

.orange 
  background-color: $orange

.green 
  background-color: $green

.blue 
  background-color: $blue

.purple 
  background-color: $purple

.btn-delete
  background: #ff0000 !important

.dp__flex_display
  align-items: center
  justify-content: center

.calendar 
  height: 90vh

.vuecal__event
  padding: 10px 1px
  color: $white
  word-wrap: break-word
  overflow-wrap: break-word
  white-space: normal
  display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 3
  overflow: hidden
  text-overflow: ellipsis
  line-height: 1.5
  max-height: calc(1.8em * 3)
  &:hover
    opacity: 0.8

.vuecal__event-title
  white-space: normal !important; // Заменяем pre-wrap на normal
  word-break: break-word;

.vuecal__menu
  background: $purple

.vuecal__view-btn
  font-size: 16px
  color: $white
  border: none

.vuecal__event-title 
  text-align: center !important

.vuecal__no-event 
  display: none

.weekday-label
  flex-direction: column

.vuecal__title-bar
  background: $white

.vuecal__arrow--next, .vuecal__arrow--prev
  border-radius: $radius
  color: $white
  background: $purple
  padding: 10px

.vuecal__arrow--prev
  margin-left: 20px
  margin-right: 105px

.vuecal__arrow--next
  margin-right: 20px

.vuecal__cell
  padding: 10px 0px
  min-width: 40px
  min-height: 50px

.vuecal__cell-events
  display: flex
  flex-direction: column
  gap: 5px

.vuecal__cell-events-count
  border-radius: 0px
  width: 100%
  background: $purple 

@include mobile
  .vuecal__arrow--prev
    margin-right: 0

  .profile__aside
    position: absolute;
    left: 0;
    overflow-y: scroll
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: $gradient;

  .profile__create-block
    display: flex
    flex-direction: column
    align-items: start
    gap: 10px
    margin-bottom: 10px
    > .btn
      width: 100%

  .calendar
    height: 70vh
</style>
```

### Описание

- `.profile__event-text`: Стили для текста событий.
- `.aside-enter-active`, `.aside-leave-active`, `.aside-enter-from`, `.aside-leave-to`, `.aside-enter-to`, `.aside-leave-from`: Стили для анимации боковой панели.
- `.textarea`: Стили для текстовой области.
- `.profile__page`: Стили для основного контейнера страницы профиля.
- `.profile__section`: Стили для основной секции страницы профиля.
- `.profile__create-block`: Стили для блока создания событий.
- `.profile__aside`: Стили для боковой панели.
- `.profile_aside-title`: Стили для заголовка боковой панели.
- `.profile__form`: Стили для формы создания/редактирования событий.
- `.profile__form-content`: Стили для содержимого формы.
- `.profile__form-counter`: Стили для счетчика символов.
- `.color-picker`: Стили для контейнера выбора цвета.
- `.color-option`: Стили для кнопок выбора цвета.
- `.red`, `.orange`, `.green`, `.blue`, `.purple`: Стили для различных цветов.
- `.btn-delete`: Стили для кнопки удаления.
- `.dp__flex_display`: Стили для дисплея.
- `.calendar`: Стили для календаря.
- `.vuecal__event`: Стили для событий в календаре.
- `.vuecal__event-title`: Стили для заголовков событий в календаре.
- `.vuecal__menu`: Стили для меню календаря.
- `.vuecal__view-btn`: Стили для кнопок просмотра календаря.
- `.vuecal__no-event`: Стили для отсутствия событий в календаре.
- `.weekday-label`: Стили для меток дней недели.
- `.vuecal__title-bar`: Стили для заголовка календаря.
- `.vuecal__arrow--next`, `.vuecal__arrow--prev`: Стили для стрелок навигации в календаре.
- `.vuecal__cell`: Стили для ячеек календаря.
- `.vuecal__cell-events`: Стили для событий в ячейках календаря.
- `.vuecal__cell-events-count`: Стили для счетчика событий в ячейках календаря.
- `@include mobile`: Миксин для мобильных устройств.
  - `.vuecal__arrow--prev`: Стили для стрелки навигации в календаре на мобильных устройствах.
  - `.profile__aside`: Стили для боковой панели на мобильных устройствах.
  - `.profile__create-block`: Стили для блока создания событий на мобильных устройствах.
  - `.calendar`: Стили для календаря на мобильных устройствах.

# /composables/useAuth.js

```markdown
# /composables/useAuth.js

Этот файл является композиционным API для управления аутентификацией пользователей в приложении Vue.js. Он использует куки для хранения данных пользователей и текущей сессии.
```
## Импорты

```javascript
import CryptoJS from 'crypto-js';
import { useCookie } from '#app';
```

- `CryptoJS`: Библиотека для хэширования паролей.
- `useCookie`: Функция для работы с куками в Nuxt.js.

## Функция `useAuth`

```javascript
export function useAuth() {
  const config = useRuntimeConfig();
  const salt = config.public.salt;

  const users = useCookie('auth_users', {
    default: () => ({}),
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 172800 // 2 дня
  });

  const currentUser = useCookie('current_user', {
    default: () => null,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 172800 // 2 дня
  });

  const hashPassword = (password) => CryptoJS.SHA256(password + salt).toString();

  const register = (name, password) => {
    if (users.value[name]) {
      alert('❌ Пользователь уже существует');
      return false;
    }

    users.value = {
      ...users.value,
      [name]: {
        password: hashPassword(password),
        createdAt: new Date().toISOString()
      }
    };

    currentUser.value = { name, lastLogin: new Date().toISOString() };
    return true;
  };

  const login = (name, password) => {
    const user = users.value[name];
    
    if (!user || user.password !== hashPassword(password)) {
      alert('❌ Неверные данные');
      return false;
    }

    currentUser.value = { name, lastLogin: new Date().toISOString() }; 
    return true;
  };

  const logout = () => {
    try {
      currentUser.value = null;
      useCookie('current_user').value = null; // Явное удаление куки
      return true;
    } catch (error) {
      alert('Ошибка при выходе:', error);
      return false;
    }
  };
  
  return { 
    users: computed(() => users.value),
    currentUser: computed(() => currentUser.value),
    register,
    login,
    logout
  };
}
```

### Описание

- `const config = useRuntimeConfig();`: Получает конфигурацию среды выполнения.
- `const salt = config.public.salt;`: Получает соль для хэширования паролей из конфигурации.

### Куки

- `const users = useCookie('auth_users', { ... });`: Кука для хранения всех пользователей.
  - `default: () => ({});`: Значение по умолчанию - пустой объект.
  - `secure: true;`: Кука будет передаваться только по HTTPS.
  - `sameSite: 'strict';`: Кука будет отправляться только с запросами с того же сайта.
  - `path: '/';`: Кука доступна для всего сайта.
  - `maxAge: 172800;`: Время жизни куки - 2 дня.

- `const currentUser = useCookie('current_user', { ... });`: Кука для хранения текущего пользователя.
  - `default: () => null;`: Значение по умолчанию - null.
  - `secure: true;`: Кука будет передаваться только по HTTPS.
  - `sameSite: 'strict';`: Кука будет отправляться только с запросами с того же сайта.
  - `path: '/';`: Кука доступна для всего сайта.
  - `maxAge: 172800;`: Время жизни куки - 2 дня.

### Функции

- `const hashPassword = (password) => CryptoJS.SHA256(password + salt).toString();`: Хэширует пароль  использованиемс соли.

- `const register = (name, password) => { ... };`: Регистрирует нового пользователя.
  - Проверяет, существует ли пользователь с таким именем.
  - Хэширует пароль и сохраняет пользователя в куке `users`.
  - Устанавливает текущего пользователя в куке `currentUser`.
  - Возвращает `true` при успешной регистрации, иначе `false`.

- `const login = (name, password) => { ... };`: Выполняет вход пользователя.
  - Проверяет, существует ли пользователь и совпадает ли пароль.
  - Устанавливает текущего пользователя в куке `currentUser`.
  - Возвращает `true` при успешном входе, иначе `false`.

- `const logout = () => { ... };`: Выполняет выход пользователя.
  - Устанавливает текущего пользователя в `null`.
  - Явно удаляет куку `current_user`.
  - Возвращает `true` при успешном выходе, иначе `false`.

### Возвращаемые значения

- `users: computed(() => users.value)`: Вычисляемое свойство для получения всех пользователей.
- `currentUser: computed(() => currentUser.value)`: Вычисляемое свойство для получения текущего пользователя.
- `register`: Функция для регистрации пользователя.
- `login`: Функция для входа пользователя.
- `logout`: Функция для выхода пользователя.

# /composables/useEvents.js

```markdown
# /composables/useEvents.js

Этот файл является композиционным API для управления событиями пользователей в приложении Vue.js. Он использует куки для хранения данных о событиях.
```
## Импорты

```javascript
import { useCookie } from '#app';
```

- `useCookie`: Функция для работы с куками в Nuxt.js.

## Функция `useEvents`

```javascript
export function useEvents() {
  const events = useCookie('user_events', {
    default: () => ({}),
    sameSite: 'strict',
    path: '/',
    maxAge: 172800 // 2 дня
  });

  const saveUserEvents = (username, userEvents) => {
    events.value = { 
      ...events.value,
      [username]: userEvents.map(event => ({
        id: event.id, // Уникальный ID события
        title: event.title,
        description: event.description,
        start: event.start.toISOString(),
        end: event.end.toISOString(),
        class: event.class
      }))
    };
  };

  const getUserEvents = (username) => {
    return (events.value[username] || []).map(event => ({
      id: event.id,
      title: event.title,
      description: event.description,
      start: new Date(event.start),
      end: new Date(event.end),
      class: event.class
    }));
  };

  return { getUserEvents, saveUserEvents };
}
```

### Описание

### Куки

- `const events = useCookie('user_events', { ... });`: Кука для хранения событий пользователей.
  - `default: () => ({});`: Значение по умолчанию - пустой объект.
  - `sameSite: 'strict';`: Кука будет отправляться только с запросами с того же сайта.
  - `path: '/';`: Кука доступна для всего сайта.
  - `maxAge: 172800;`: Время жизни куки - 2 дня.

### Функции

- `const saveUserEvents = (username, userEvents) => { ... };`: Сохраняет события пользователя.
  - Принимает имя пользователя и массив событий.
  - Обновляет куку `events` с новыми событиями пользователя.
  - Каждое событие сохраняется с уникальным ID, заголовком, описанием, временем начала и окончания, и классом.

- `const getUserEvents = (username) => { ... };`: Получает события пользователя.
  - Принимает имя пользователя.
  - Возвращает массив событий пользователя из куки `events`.
  - Каждое событие преобразуется из строки в объект с датами.

### Возвращаемые значения

- `getUserEvents`: Функция для получения событий пользователя.
- `saveUserEvents`: Функция для сохранения событий пользователя.

# plugins/cookies.js

```markdown
# plugins/cookies.js

Этот файл является плагином для Nuxt.js, который интегрирует библиотеку `js-cookie` в приложение. Он предоставляет доступ к функциональности работы с куками через объект `nuxtApp`.
```
## Импорты

```javascript
import { defineNuxtPlugin } from '#app';
import Cookies from 'js-cookie';
```

- `defineNuxtPlugin`: Функция для определения плагина в Nuxt.js.
- `Cookies`: Библиотека для работы с куками.

## Экспорт плагина

```javascript
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      cookies: Cookies
    }
  }
});
```

### Описание

- `defineNuxtPlugin((nuxtApp) => { ... });`: Определяет плагин для Nuxt.js.
  - `nuxtApp`: Объект приложения Nuxt.js.

### Возвращаемое значение

- `provide: { cookies: Cookies }`: Предоставляет объект `Cookies` для работы с куками через `nuxtApp`.

# plugins/router.ts

```markdown
# plugins/router.ts

Этот файл является плагином для Nuxt.js, который настраивает поведение прокрутки маршрутизатора. Он обеспечивает плавную прокрутку к якорям на странице.
```
## Экспорт плагина

```typescript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    const router = useRouter();
    router.options.scrollBehavior = (to, from, savedPosition) => {
      if (to.hash) {
        const element = document.querySelector(to.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return false; // отменяем стандартное поведение
        }
      }
      return { top: 0, behavior: "smooth" };
    };
  });
});
```

### Описание

- `defineNuxtPlugin((nuxtApp) => { ... });`: Определяет плагин для Nuxt.js.
  - `nuxtApp`: Объект приложения Nuxt.js.

### Хук `app:created`

- `nuxtApp.hook("app:created", () => { ... });`: Хук, который выполняется при создании приложения.
  - `const router = useRouter();`: Получает экземпляр маршрутизатора.
  - `router.options.scrollBehavior = (to, from, savedPosition) => { ... };`: Настраивает поведение прокрутки маршрутизатора.

### Поведение прокрутки

- `if (to.hash) { ... }`: Проверяет, есть ли якорь в целевом маршруте.
  - `const element = document.querySelector(to.hash);`: Находит элемент на странице, соответствующий якорю.
  - `if (element) { ... }`: Если элемент найден, прокручивает к нему.
    - `element.scrollIntoView({ behavior: "smooth" });`: Плавно прокручивает к элементу.
    - `return false;`: Отменяет стандартное поведение прокрутки.
- `return { top: 0, behavior: "smooth" };`: Если якорь не найден, прокручивает страницу к началу с плавным поведением.

# nuxt.config.ts

```markdown
# nuxt.config.ts

Этот файл является конфигурационным файлом для проекта Nuxt.js. Он определяет различные настройки и параметры для приложения.
```
## Импорты

```typescript
import { resolve } from "path";
```

- `resolve`: Функция из модуля `path`, используемая для разрешения путей.

## Экспорт конфигурации

```typescript
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    '@components': resolve(__dirname, './components'),
    '@services': resolve(__dirname, './services'),
    '@color': resolve(__dirname, './const/color.sass'),
    '@global': resolve(__dirname, './const/global.sass'), 
    '@mixin': resolve(__dirname, './const/mixin.sass'),
    '@fonts': resolve(__dirname, './const/fonts.sass'),
  },
  svgo: {
    autoImportPath: "./assets/icons/",
    componentPrefix: "Icon",
    svgoConfig: {
      plugins: [
        { 
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            }
          }
        }
      ]
    }
  },
  css: ['@/const/global.sass'],
  runtimeConfig: {
    public: {
      salt: '1jkashdgo871godl71982569381o67toadg78108-98sjf98weye278'
    }
  },
  modules:['nuxt-svgo'],
  app: {
    head: {
      title: 'Zillendar',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/faviconDark.ico',
          media: '(prefers-color-scheme: light)',
          sizes: 'any'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/faviconLight.ico',
          media: '(prefers-color-scheme: dark)',
          sizes: 'any'
        }
      ]
    }
  },
  fonts: {
      provider: "local",
      defaults: {
          weights: [300, 400, 500, 700, 900],
      },
      families: [
          {
              name: "Source-Sans-3",
              src: [
                  {url: "/fonts/SourceSans3-Black.ttf", format: "'truetype'"},
              ],
              global: true,
              weight: "900",
              style: 'normal'
          },
          {
              name: "Source-Sans-3",
              src: [
                  {url: "/fonts/SourceSans3-Bold.ttf", format: "'truetype'"},
              ],
              global: true,
              weight: "700",
              style: 'normal'
          },
          {
              name: "Source-Sans-3",
              src: [
                  {url: "/fonts/SourceSans3-Medium.ttf", format: "'truetype'"},
              ],
              global: true,
              weight: "500",
              style: 'normal'
          },
          {
              name: "Source-Sans-3",
              src: [
                  {url: "/fonts/SourceSans3-Regular.ttf", format: "'truetype'"},
              ],
              global: true,
              weight: "400",
              style: 'normal'
          },
          {
              name: "Source-Sans-3",
              src: [
                  {url: "/fonts/SourceSans3-Light.ttf", format: "'truetype'"},
              ],
              global: true,
              weight: "300",
              style: 'normal'
          },
      ],
  },
})
```

### Описание

- `compatibilityDate: '2024-11-01'`: Дата совместимости для проекта.
 `-devtools: { enabled: true }`: Включает инструменты разработчика.

### Алиасы

- `alias`: Определяет алиасы для путей в проекте.
  - `'@components'`: Алиас для директории компонентов.
  - `'@services'`: Алиас для директории сервисов.
  - `'@color'`: Алиас для файла с цветовыми переменными.
  - `'@global'`: Алиас для файла с глобальными стилями.
  - `'@mixin'`: Алиас для файла с миксинами.
  - `'@fonts'`: Алиас для файла со шрифтами.

### Настройки SVGO

- `svgo`: Настройки для автоматического импорта SVG и оптимизации.
  - `autoImportPath: "./assets/icons/"`: Путь для автоматического импорта SVG.
  - `componentPrefix: "Icon"`: Префикс для компонентов SVG.
  - `svgoConfig`: Конфигурация для SVGO.
    - plugins: Плагины для SVGO.
      - `preset-default`: Плагин с настройками по умолчанию.
        - `params`: Параметры для плагина.
          - `overrides`: Переопределения параметров.
            - `removeViewBox: false`: Оставляет атрибут `viewBox` в SVG.

### Стили

- `css: ['@/const/global.sass']`: Подключает глобальные стили.

### Конфигурация среды выполнения

- `runtimeConfig`: Конфигурация для среды выполнения.
  - public: Публичные параметры конфигурации.
    - `salt: '1jkashdgo871godl71982569381o67toadg78108-98sjf98weye278'`: Соль для хэширования паролей.

### Модули

- `modules: ['nuxt-svgo']`: Подключает модуль `nuxt-svgo` для работы с SVG.

### Настройки приложения

- `app`: Настройки приложения.
  - `head`: Настройки заголовка страницы.
    - `title: 'Zillendar'`: Заголовок страницы.
    - `link`: Ссылки на иконки.
      - `rel: 'icon'`: Тип ссылки - иконка.
      - `type: 'image/x-icon'`: Тип изображения - иконка.
      - `href: '/faviconDark.ico'`: Путь к иконке для светлой темы.
      - `media: '(prefers-color-scheme: light)'`: Медиа-запрос для светлой темы.
      - `sizes: 'any'`: Размеры иконки.
      - `href: '/faviconLight.ico'`: Путь к иконке для темной темы.
      - `media: '(prefers-color-scheme: dark)'`: Медиа-запрос для темной темы.

### Настройки шрифтов

- `fonts`: Настройки шрифтов.
  - `provider: "local"`: Провайдер шрифтов - локальный.
  - `defaults`: Настройки по умолчанию.
    - `weights: [300, 400, 500, 700, 900]`: Доступные веса шрифтов.
  - `families`: Семейства шрифтов.
    - `name: "Source-Sans-3"`: Название шрифта.
    - `src`: Источники шрифтов.
      - `url: "/fonts/SourceSans3-Black.ttf"`: Путь к файлу шрифта.
      - `format: "'truetype'"`: Формат шрифта.
    - `global: true`: Шрифт доступен глобально.
    - `weight: "900"`: Вес шрифта.
    - `style: 'normal'`: Стиль шрифта.
    - Аналогичные настройки для других весов шрифта.

# services/data.js

```markdown
# services/data.js

Этот файл содержит объект `data`, который предоставляет методы для получения данных, используемых в навигационном меню и списке кнопок приветственного экрана в приложении Vue.js.
```
## Экспортируемый объект `data`

```javascript
const data = {
    navMenu(menuType = 'header', isAuth = false) {
        const baseItems = isAuth ? [
            {
                url: "/profile",
                text: 'Профиль'
            },
            {
                url: "#logout",
                text: 'Выйти'
            }
        ] : [
            {
                url: "/register",
                text: 'Регистрация'
            },
            {
                url: "/login",
                text: 'Войти'
            }
        ];

        const additionalItems = {
            footer: [
                {
                    url: "/#more",
                    text: 'О проекте'
                }
            ],
            header: []
        };

        return [...baseItems, ...(additionalItems[menuType] || [])];
    },
    welcomeListBtn() {
      return [
          {
              url: "/#more",
              text: 'Подробнее'
          },
      ];
  },
};

export default data;
```

### Описание

### Метод `navMenu`

```javascript
navMenu(menuType = 'header', isAuth = false) {
    const baseItems = isAuth ? [
        {
            url: "/profile",
            text: 'Профиль'
        },
        {
            url: "#logout",
            text: 'Выйти'
        }
    ] : [
        {
            url: "/register",
            text: 'Регистрация'
        },
        {
            url: "/login",
            text: 'Войти'
        }
    ];

    const additionalItems = {
        footer: [
            {
                url: "/#more",
                text: 'О проекте'
            }
        ],
        header: []
    };

    return [...baseItems, ...(additionalItems[menuType] || [])];
}
```

#### Описание

- `menuType`: Тип меню (`header` или `footer`). По умолчанию - `header`.
- `isAuth`: Флаг, указывающий, аутентифицирован ли пользователь. По умолчанию - `false`.

#### Возвращаемое значение

- Возвращает массив объектов, представляющих элементы меню. Каждый объект содержит:
  - `url`: URL элемента меню.
  - `text`: Текст элемента меню.

#### Логика

- Если пользователь аутентифицирован (`isAuth` равно `true`), базовые элементы меню включают ссылки на профиль и выход.
- Если пользователь не аутентифицирован (`isAuth` равно `false`), базовые элементы меню включают ссылки на регистрацию и вход.
- В зависимости от типа меню (`menuType`), добавляются дополнительные элементы меню:
  - Для `footer` добавляется ссылка на раздел "О проекте".
  - Для `header` дополнительные элементы отсутствуют.

### Метод `welcomeListBtn`

```javascript
welcomeListBtn() {
  return [
      {
          url: "/#more",
          text: 'Подробнее'
      },
  ];
}
```

#### Описание

- Возвращает массив объектов, представляющих кнопки приветственного экрана. Каждый объект содержит:
  - `url`: URL кнопки.
  - `text`: Текст кнопки.

## Экспорт

```javascript
export default data;
```

- Экспортирует объект `data` по умолчанию, чтобы его можно было импортировать и использовать в других частях приложения.

## Примечания

- Этот файл предоставляет методы для получения данных, используемых в навигационном меню и списке кнопок приветственного экрана.
- Методы учитывают состояние аутентификации пользователя и тип меню для формирования соответствующих элементов.
```

```
## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
