<script setup>
if (process.client) {
  useSeoMeta({
    link: [
      { rel: 'icon', type: 'image/png', href: '/icons/logo-dark.png', media: '(prefers-color-scheme: light)' },
      { rel: 'icon', type: 'image/png', href: '/icons/logo-light.png', media: '(prefers-color-scheme: dark)' }
    ]
  })
}
</script>
<template>
  <Header />
  <main class="main">
    <NuxtPage />
  </main>  
  <Footer />
</template>
<style lang="sass">
@import @color
@import @global
@import @mixin

.section 
  min-height: 90vh

@include mobile
  .section
    min-height: 70vh
</style>
