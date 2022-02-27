<template>
  <Portfolio />
</template>

<script>
import Portfolio from './components/Portfolio.vue';

export default {
  name: 'App',
  components: {
    Portfolio,
  },
};
</script>

<style src="../node_modules/bulma/css/bulma.min.css"></style>

<style lang="scss">
#app {
  margin-top: 60px;
}

html,
body {
  background: #ececec;
}
</style>
