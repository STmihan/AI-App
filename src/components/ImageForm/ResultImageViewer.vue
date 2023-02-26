<template>
  <div class="view">
    <div class="view_container">
        <slot>
        </slot>
    </div>
  </div>
</template>

<script>
import CatsAndDogsItem from "../../modules/cats-and-dogs/components/CatsAndDogsItem.vue";

export default {
  name: "ResultImageViewer",
  components: {CatsAndDogsItem},
}
</script>

<style scoped>
:slotted(.item) {
  height: min(300px, 30%);
  aspect-ratio: 1/1;
  margin-right: 0.1rem;
  margin-bottom: 0.1rem;
}

.view {
  display: flex;
  margin-top: 1rem;
}

.view_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  margin: 0 1rem;
}

@media (max-width: 600px) {
  .view {
    flex-direction: column;
  }

  .view_container {
    margin: 0 0 0 1rem;
  }

  .item {
    height: min(550px, 90%);
  }
}

</style>