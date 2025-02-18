<template>
    <header class="header" :class="{ 'header__profile': isAuth }">
        <NuxtLink to="/" class="header__logo-link">
          <h2>Event Calendar</h2>
        </NuxtLink>
        <NavMenu/>
    </header>
</template>
  
<script setup>
const { currentUser } = useAuth();
const isAuth = computed(() => !!currentUser.value);
</script>
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

.header__profile
    

.header__logo-link
    color:$black

</style>