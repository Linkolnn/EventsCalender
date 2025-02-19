<script setup>
</script>
<template>
    <section class="register section">
        <FormAuth type="register" />
    </section>
</template>
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