<template>
  <div id="app">
    <button @click="fn"></button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    fn () {
      alert(1)
    }
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
