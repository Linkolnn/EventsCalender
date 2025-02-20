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
        <img src="/assets/logo-light.svg" alt="Лого проекта" class="about__logo" />
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
  padding: 20px 0px

.about__logo 
  width: 100px

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