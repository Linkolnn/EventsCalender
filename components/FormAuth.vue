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
        <template v-if="type === 'login'">
            <button class="btn font-button" type="button">Восстановить пароль</button>
        </template>
    </form>
</template>
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

@include mobile
  .form
    width: 350px

</style>