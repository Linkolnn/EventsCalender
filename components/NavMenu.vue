<script setup>
import data from '@services/data';
const { logout, currentUser } = useAuth();

const props = defineProps({
  variant: {
    type: String,
    default: 'header',
    validator: (value) => ['header', 'footer'].includes(value)
  }
});

const menuItems = computed(() => 
  data.navMenu(props.variant, !!currentUser.value)
);

const handleLogout = () => {
  logout();
  navigateTo('/');
};
</script>

<template>
  <nav class="nav__menu">
    <ul :class="[variant === 'footer' ? 'nav__menu-list--footer' : 'nav__menu-list--header']">
      <li class="nav__menu-item" v-for="item in menuItems" :key="item.url">
        <NuxtLink 
          v-if="!item.url.startsWith('#')" 
          :to="item.url" 
          class="nav__menu-link"
          :class="{ 'nav__menu-link--footer': variant === 'footer' }"
        >
          <button class="nav__menu-btn btn font-button">
            {{ item.text }}
          </button>
        </NuxtLink>
        <button 
          v-else 
          class="nav__menu-btn btn font-button" 
          @click="item.url === '#logout' ? handleLogout() : null"
        >
          {{ item.text }}
        </button>
      </li>
    </ul>
  </nav>
</template>
<style lang="sass">
@import @color
@import @global
@import @mixin
@import @fonts

.nav__menu 
  display: flex
  flex-direction: row
  align-items: center

.nav__menu-list--footer
  display: flex
  flex-direction: column
  align-items: flex-end
  gap: 10px   

.nav__menu-list--header
    display: flex
    flex-direction: row
    gap: 10px 

.nav__menu-link 
    color: $white

@include mobile
  .nav__menu-list
    gap: 10px

</style>