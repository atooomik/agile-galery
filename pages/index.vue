<template>
  <div
    class="relative flex w-full h-screen mx-auto bg-white overflow-x-hidden"
    :class="[getModalOpen ? 'mx-0' : 'mx-auto max-w-7xl']"
  >
    <full-size-modal v-if="getModalOpen" />

    <galery-sidebar></galery-sidebar>
    <div class="flex items-end w-full h-full">
      <div
        id="viewport"
        class="max-w-4xl w-full h-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-0 lg:px-8 overflow-y-scroll"
      >
        <div
          @click="requestImageDetail(picture_item.id)"
          v-for="picture_item in images_collection.pictures"
          :key="picture_item.id"
          class="w-full h-full overflow-hidden"
        >
          <galery-image-render :image-data="picture_item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      images_collection: [],
      picture_detail: {}
    };
  },
  async mounted() {
    await this.requestImageCollection();
  },
  computed: {
    ...mapGetters(["getModalOpen", "getfullPictureItem"])
  },
  methods: {
    ...mapActions(["setModalOpen", "setfullPictureItem"]),
    async requestImageCollection() {
      await this.$axios
        .$get("/images")
        .then(response => {
          this.images_collection = response;
        })
        .catch(err => {
          throw err;
        });
    },
    async requestImageDetail(id) {
      await this.$axios
        .$get(`/images/${id}`)
        .then(response => {
          this.setfullPictureItem(response);
          if (this.getfullPictureItem !== undefined) {
            this.setModalOpen(true);
          }
        })
        .catch(err => {
          throw err;
        });
    }
  }
};
</script>
