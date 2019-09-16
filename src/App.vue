<template>
  <Layout
    :notice="{show: true, text1: '111', text2: '222'}"
    :nav="menu"
    :serviceModule="true"
    logo="https://www.baidu.com"
  >
  <div class="operationDropdown" slot="avatarDropDown">
    <ul>
      <li class="bold">退出登录</li>
    </ul>
  </div>
  </Layout>
</template>

<script>
  const menu = require('./nav')
export default {
  name: 'App',
  data () {
      return {
          menu: menu
      }
  },
  created () {
      this.menu = menu;
      // this.$message({
      //     message: '操作成功操作成功操作成功操作成功操作成功操作成功！',
      //     type: 'warning',
      //     duration: 3000
      // })
  },
  methods: {
    // showMessage () {
    //   this.$message.normal({
    //     message: '操作成功操作成功操作成功操作成功操作成功操作成功！',
    //     duration: 3000
    //   })
    // }
      logout () {
          alert(1)
      }
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
