<script setup>
import data from '@services/data';
const { logout, currentUser } = useAuth();

const menuItems = computed(() => 
  data.navMenuItems(!!currentUser.value).map(item => ({
    ...item,
    isAction: item.url === '#logout'
  }))
);

const handleLogout = () => {
  logout();
  navigateTo('/');
};
</script>
<template>
    <nav class="nav__menu">
        <ul class="nav__menu-list">
            <li class="nav__menu-item" v-for="item in menuItems" :key="item.url">
                 <NuxtLink v-if="!item.isAction" :to="item.url" class="nav__menu-link">
                    <button class="nav__menu-btn btn font-button">
                      {{ item.text }}
                    </button>
                 </NuxtLink>
                 <button v-else class="nav__menu-btn btn font-button" @click="handleLogout">
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

.nav__menu-list
    display: flex
    flex-direction: row
    gap: 20px 

.nav__menu-link 
    color: $white

@include mobile
  .nav__menu-list
    gap: 10px

</style>