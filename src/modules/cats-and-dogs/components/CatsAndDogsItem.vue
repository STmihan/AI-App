<template>
  <div class="view_item">
    <img :src="image.src" alt="image">
    <div v-if="result" class="view_item_overlay">
      <p>{{ result }}</p>
    </div>
    <div class="process_button" v-if="!result" @click="processImage(image)">Process</div>
  </div>
</template>

<script>
import {generateResult} from "../ai/aiCatAndDogs.js";

export default {
  name: "CatsAndDogsItem",
  props: {
    image: {
      required: true
    }
  },
  data() {
    return {
      result: ""
    }
  },
  methods: {
    processImage(image) {
      generateResult(image.src).then(result => {
        const catPercentage = Math.round(result[1] * 100);
        const dogPercentage = Math.round(result[0] * 100);
        this.result = result[1] > result[0] ? `Cat: ${catPercentage}%` : `Dog: ${dogPercentage}%`;
      });
    }
  }
}
</script>

<style scoped>
.view_item {
  position: relative;
}

.view_item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.view_item .process_button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  transition: opacity 0.5s;
}

.view_item:hover .process_button {
  opacity: 0.5;
}

.view_item_overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 2rem;
  width: 100%;
  background-color: black;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.view_item_overlay p {
  color: white;
  margin: 0;
  padding: 0;
}
</style>