<script setup>
</script>
<template>
    <section class="login section">
        <FormAuth type="login" />
    </section>
</template>
<style lang="sass">
@import @color
@import @global
@import @mixin


.login
    background: linear-gradient($white 70%, $purple 100%)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 20px
</style>