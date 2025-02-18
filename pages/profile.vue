<template>
  <div v-if="currentUser" class="profile__page">
    <aside class="profile__aside">
      <nav class="profile__nav">
        
      </nav>
    </aside>
    <section class="profile section">
      <h1>Профиль {{ currentUser.name }}</h1>
      <button @click="handleLogout">Выйти</button>
    </section>
  </div>
</template>

<script setup>
const { currentUser, logout } = useAuth()
const router = useRouter()
const isRedirecting = ref(false)

const handleLogout = async () => {
  try {
    isRedirecting.value = true
    await logout();
    // Ждем обновления DOM перед переходом
    await nextTick();
    // Перенаправляем на главную с задержкой
    router.push('/');
  } catch (error) {
    console.error('Ошибка выхода:', error)
    isRedirecting.value = false
  }
}

watchEffect(() => {
  if (!currentUser) {
    router.replace('/login')
  }
})
</script>
<style lang="sass">
@import @color
@import @global
@import @mixin

.profile__page
  padding: 0px 20px
  display: flex
  flex-direction: row
  gap: 20px

.profile__aside
  display: none

</style>