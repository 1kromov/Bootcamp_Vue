<template>
  <header class="bg-blue-600">
    <div class="container mx-auto">
      <nav class="nav flex w-full justify-between h-[75px] items-center">
        <a href="/" class="nav-logo text-white uppercase text-2xl">VUE.APP</a>
        <ul class="nav__list flex min-w-[10%] justify-between uppercase">
          <li class="nav__list--item">
            <RouterLink class="nav__list--item-link text-white p-3 mx-2"  to="/">Home</RouterLink>
          </li>
          <li class="nav__list--item">
            <RouterLink class="nav__list--item-link text-white p-3 mx-2" to="/userlist">User list</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import {RouterLink} from "vue-router"
export default {
  name: "Header",
};
</script>
<style scoped>
    .router-link-active {
        color: rgba(246, 255, 0) !important;
        text-decoration: underline;
        font-weight: 900;
    }

</style>
