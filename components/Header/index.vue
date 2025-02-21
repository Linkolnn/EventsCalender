<template>
    <header class="header" :class="{ 'header__profile': isAuth }">
        <NuxtLink to="/" class="header__logo-link">
            <IconLogoDark class="footer__logo-img" filled/>
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

.header__logo-img
    height: 80px
    width: 80px

@include mobile
    .header__logo-img
        height: 65px
        width: 65px
    
</style>