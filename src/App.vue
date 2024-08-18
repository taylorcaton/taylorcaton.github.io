<template>
  <star-field :isRunning="isRunning" />
  <Portfolio :isRunning="isRunning" />
  <button class="button is-small is-dark toggle-stars" @click="isRunning = !isRunning">
    Toggle Animation
  </button>
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
  data: () => ({
    isRunning: true,
  }),
};
</script>

<style src="../node_modules/bulma/css/bulma.min.css"></style>

<style lang="scss">
html,
body {
  background: #000;
  height: 100%;
}
.toggle-stars {
  position: fixed;
  bottom: 5px;
  right: 5px;

  &:hover {
    text-decoration: underline;
  }
}
</style>
