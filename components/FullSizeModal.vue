<template>
  <div class="absolute w-full h-full overlay z-10 bg-noir">
    <div class="relative w-full h-full ml-0 mx-auto">
      <button
        title="Cerrar modal"
        class="absolute top-0 right-0 w-10 h-10"
        @click="cleanItem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: rgba(255, 255, 255, 0.4);transform: ;msFilter:;"
        >
          <path
            d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"
          ></path>
          <path
            d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"
          ></path>
        </svg>
      </button>
      <div class="flex w-full h-full ml-0 mr-auto pl-4 py-4 pr-0">
        <div class="max-w-4xl w-full h-full">
          <galery-image-render :image-data="getfullPictureItem" />
        </div>
        <div class="space-y-6 ml-12 mt-12">
          <p
            class=" text-semiGray text-2xl font-semibold"
            v-text="getAuthorInfo"
          ></p>
          <p
            class="text-semiGray text-lg font-medium"
            v-text="getCamaraInfo"
          ></p>
          <div class="rounded bg-semiGray text-white p-1">
            <p v-text="getTagsInfo"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as _ from "lodash";

export default {
  name: "FullSizeModal",

  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getModalOpen", "getfullPictureItem"]),
    getAuthorInfo() {
      const author = _.get(this.getfullPictureItem, ["author"], "");
      return author;
    },
    getCamaraInfo() {
      const camara = _.get(this.getfullPictureItem, ["camera"], "");
      return camara;
    },
    getTagsInfo() {
      const tags = _.get(this.getfullPictureItem, ["tags"], "");
      return tags;
    }
  },
  methods: {
    ...mapActions(["setModalOpen", "setfullPictureItem"]),
    cleanItem() {
      this.setModalOpen(false);
      this.setfullPictureItem();
    }
  }
};
</script>
