<template>
  <div
    title="Haz click para obtener más detalles"
    class="w-full h-full object-cover"
  >
    <svg
      v-show="componentContent === 'skelleton'"
      class="w-40 h-40 text-gray-400 animate-pulse"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
    >
      <path
        d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"
      ></path>
      <path d="m10 14-1-1-3 4h12l-5-7z"></path>
    </svg>
    <img
      v-show="componentContent === 'image'"
      class="w-full h-full object-cover"
      :src="getImageCover"
      id="image-content"
      alt="random alt"
    />
  </div>
</template>

<script>
import * as _ from "lodash";

export default {
  name: "GaleryImageRender",
  props: {
    imageData: {
      type: Object,
      default() {
        return {};
      },
      required: true
    }
  },
  data() {
    return {
      componentContent: "idle"
    };
  },
  mounted() {
    this.watchLoadEvent();
  },
  computed: {
    getImageData() {
      return this.imageData;
    },
    getImageCover() {
      const fullSize = _.get(
        this.imageData,
        ["full_picture"],
        this.imageData.cropped_picture
      );
      return fullSize;
    }
  },
  methods: {
    watchLoadEvent(componentContent) {
      const image = document.getElementById("image-content");
      this.componentContent = componentContent;
      const vm = this;

      image.addEventListener("loadstart", function(e) {
        vm.componentContent = "skelleton";
      });

      image.addEventListener("loadend", function(e) {
        vm.componentContent = "image";
      });
    },
    requestImgDetails() {
      console.log("alola");
    }
  }
};
</script>

<style lang="scss" scoped></style>
