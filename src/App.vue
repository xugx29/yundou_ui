<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <MessageBox></MessageBox>
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
      this.$message.normal({
        message: '操作成功操作成功操作成功操作成功操作成功操作成功！',
        duration: 3000
      })
    }
  },
  created () {

  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
