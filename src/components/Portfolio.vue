<template>
  <section class="container">
    <header>
      <h1 class="title">Taylor Caton</h1>
      <h2 class="subtitle">
        Full-stack Developer with a focus on Node.js, Databases (SQL & Mongo), and Vue!
      </h2>
    </header>
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

h1 {
  text-rendering: optimizeLegibility;
  color: #ececec;
  font-size: 28px;
}

header {
  max-width: 600px;
  margin: 20px auto 0;
}
</style>
