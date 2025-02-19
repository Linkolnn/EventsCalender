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
    background: $gradient
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 20px
</style>