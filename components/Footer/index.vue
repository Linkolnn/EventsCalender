<template>
    <footer class="footer">
        <NuxtLink to="/" class="footer__logo-link">
          <IconLogoLight class="footer__logo-img" filled/>
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
    height: 80px
    width: 80px

@include mobile
    .footer__logo-img
        height: 65px
        width: 65px

</style>