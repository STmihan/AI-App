<template>
  <div class="module">
    <ImageForm
        @newImages="newImagesHandler"
        @removeImage="removeImageHandler"
        :images="images"
        class="module_block_left"
    />
    <ResultImageViewer
        class="module_block_right"
    >
      <CatsAndDogsItem
          class="item"
          v-for="image in images"
          :key="image.id"
          :image="image"
      />
    </ResultImageViewer>
  </div>
</template>

<script>
import ImageForm from "../../../components/ImageForm/ImageForm.vue";
import ResultImageViewer from "../../../components/ImageForm/ResultImageViewer.vue";
import CatsAndDogsItem from "../components/CatsAndDogsItem.vue";

export default {
  name: "CatAndDogsPage",
  components: {CatsAndDogsItem, ResultImageViewer, ImageForm},
  data() {
    return {
      images: []
    }
  },
  methods: {
    newImagesHandler(images) {
      this.images.push(...images)
      console.log(this.images);
    },
    removeImageHandler(id) {
      this.images = this.images.filter(image => image.id !== id);
    }
  }
}
</script>

<style scoped>
.module {
  display: flex;
  flex-direction: Row;
}

.module_block_left {
  width: 30%;
}

.module_block_right {
  width: 70%;
}

@media (max-width: 768px) {
  .module {
    flex-direction: column;
  }

  .module_block_left {
    width: 90%;
  }

  .module_block_right {
    width: 90%;
  }
}
</style>