<template>
  <div class="main-page">
    <div class="links_container">
      <MainPageLinkItem
          v-for="link in links()"
          :key="link.name"
          :link="link"
      />
    </div>
  </div>
</template>

<script>
import {links} from "../../../router/router.js";
import MainPageLinkItem from "../components/MainPageLinkItem.vue";

export default {
  name: "MainPage",
  components: {MainPageLinkItem},
  methods: {
    links() {
      return links
    }
  }
}
</script>

<style scoped>
.links_container {
  margin: 0 auto;
  width: min(100%, 1200px);
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
}

@media screen and (max-width: 600px) {
  .links_container {
    flex-direction: column;
    align-content: center;
  }
}
</style>