<template>
  <div id="app">
    <div v-if="!hydrated">
      carregando
    </div>

    <div v-if="hydrated">
      <img src="./assets/logo.png">
      <router-view/>
     </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({hydrated: false}),

  async mounted () {
    const {defaultClient} = this.$apollo.provider
    this.hydrated = await defaultClient.hydrated().then(() => true)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
