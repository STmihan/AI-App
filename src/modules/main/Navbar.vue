<template>
  <nav>
    <router-link class="logo" to="/">
      AI
    </router-link>
    <div class="links">
      <div v-for="link in links" class="link">
        <router-link
            v-bind:class="(link.disable) ? 'disable' : ''"
            :to="link.path"
        >{{ link.text }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    links: {
      type: Array,
    }
  },
}
</script>

<style scoped>

  nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding-left: 3rem;
    padding-right: 1rem;
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

  .logo {
    font-size: 2rem;
  }

  .links {
    display: flex;
    justify-content: end;
    flex-direction: row;
    align-items: center;
  }

  .link {
    padding: 0.5rem;
  }

  /*noinspection ALL*/
  .disable {
    color: #ccc;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    nav {
      /*flex-direction: column;*/
      padding-left: 1rem;
      padding-right: 0;
    }
  }
</style>