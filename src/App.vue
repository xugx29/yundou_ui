<template>
  <Layout
    :notice="{show: true, text1: '111', text2: '222'}"
    :nav="[{
      name: '凭证',
      url: '',
      child: [
        {name: '新增凭证', url: '', parentName: '凭证中心'},
        {name: '凭证列表', url: '', parentName: '凭证中心'}
      ]
    }]"
  ></Layout>
</template>

<script>
export default {
  name: 'App',
  created () {
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
