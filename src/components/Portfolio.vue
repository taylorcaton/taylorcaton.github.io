<template>
  <section class="container">
    <h1 class="title">Taylor Caton</h1>
  </section>
</template>

<script>
export default {
  name: 'PortfolioContainer',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 600px !important;
  margin: 20px auto 0 !important;
}

h1 {
  text-rendering: optimizeLegibility;
  color: #131313;
  font-size: 28px;
}
</style>
