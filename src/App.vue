<template>
  <div>
    <main class="main-container ">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import "./assets/scss/base.scss";

.main-container  {
  max-width: $max-site-width;
  padding: 74px $site-page-padding 20px $site-page-padding;
  margin: 0 auto;
  height: 100vh;
  box-sizing: border-box;

  @media screen and (max-width: 640px) {
    padding: 54px 0 0 0;
  }
}
</style>
