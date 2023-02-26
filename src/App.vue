<template>
  <Navbar
      :links="links()"
      class="navbar"
  />
  <main>
    <router-view />
  </main>

</template>

<script>
import Navbar from "./modules/main/Navbar.vue";
import {defineComponent} from "vue";
import CatAndDogsPage from "./modules/cats-and-dogs/pages/CatAndDogsPage.vue";
import {links} from "./router/router.js";

export default defineComponent({
  name: "App",
  methods: {
    links() {
      return links
    }
  },
  components: {
    CatAndDogsPage,
    Navbar,
  },
});
</script>

<style scoped>
.navbar {
  height: 4rem;
}

main {
  height: calc(100vh - 4rem);
}
</style>
