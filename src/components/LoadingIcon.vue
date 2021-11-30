<template>
  <div v-if="status" :class="loadingPage ? 'loading-page' : `standard`">
    <v-progress-circular
      indeterminate
      :size="size"
      :width="width"
      class="loading-icon"
    ></v-progress-circular>
  </div>
</template>


<script>
export default {
  name: "LoadingIcon",
  props: {
    status: {
      type: Boolean,
      required: true,
    },
    size: {
      type: Number,
    },
    width: {
      type: Number,
    },
    loadingPage: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
@import "../styles/style.base.scss";

.loading-icon {
  color: $color-pink-800 !important;
  /* width: 100% !important; */
  z-index: 9999;
  margin: 0 auto;
}

.standard {
    display: flex;
    width: 100%;
    margin: 32px 0;
}

.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
