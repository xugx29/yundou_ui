<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <button @click="showMessage">123</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    showMessage () {
      this.$message.success({
        message: '提示提提示提提示提提示提提示提提示提提示提提示提提示提提示提提示提提示提提示提提示提提示提提示提提示提提示提提示提'
      })
    }
  },
  created () {

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
