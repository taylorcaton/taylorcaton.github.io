<template>
  <star-field />
  <Portfolio />
</template>

<script>
import Portfolio from './components/Portfolio.vue';
import StarField from './components/StarField.vue';

export default {
  name: 'App',
  components: {
    Portfolio,
    'star-field': StarField,
  },
};
</script>

<style src="../node_modules/bulma/css/bulma.min.css"></style>

<style lang="scss">
html,
body {
  background: #000;
  height: 100%;
}
</style>
