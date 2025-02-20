<template>
    <footer class="footer">
        <NuxtLink to="/" class="footer__logo-link">
          <img class="footer__logo-img" src="/public/assets/logo-light.svg" alt="">
        </NuxtLink>
        <NavMenu variant="footer"/>
    </footer>
</template>
<style lang="sass">
@import @color
@import @global
@import @mixin

.footer 
    display: flex
    flex-direction: row
    justify-content: space-between
    background: $black
    padding: 20px

.footer__logo-img
    width: 80px

@inlude mobile
    .footer__logo-img
        width: 65px

</style>