<template>
  <div
      class="page_card"
  >
    <h3 class="title">
      {{ link.text }}
    </h3>
    <p class="description">
      {{ link.description }}
    </p>
    <router-link
        class="link"
        :to="link.path"
    >
      GO
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MainPageLinkItem",
  props: {
    link: {
      required: true,
    }
  }
}
</script>

<style scoped>
.link {
  width: max(30%, 100px);
  text-align: center;
  text-decoration: none;
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  padding: .6rem 0;
  border-radius: 0.5rem;
  background-color: var(--primary-color);
  font-size: 1.7rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}

.link:hover {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}

.page_card {
  width: 250px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 0.25rem;
  box-shadow: var(--secondary-color) 0 0 2px;
  margin: 1rem;
  padding: 1rem;
}

.title {
  font-size: 2rem;
  margin: 0;
}

.description {
  font-size: 1rem;
  margin: 0;
}

@media screen and (max-width: 600px) {
  .page_card {
    width: 85%;
  }
}
</style>