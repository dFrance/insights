<template>
  <v-app>
    <v-main class="v-main">
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "./styles/style.base.scss";
  .v-main{
    background: $color-gray-100;
  }
</style>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
