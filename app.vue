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
    min-height: 75vh
</style>
