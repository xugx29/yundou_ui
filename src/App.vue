<template>
  <Layout
    :notice="{show: true, text1: '111', text2: '222'}"
    :nav="[{
      name: '凭证',
      iconClass: '',
      url: '',
      child: [
        {name: '智能凭证', alias: '凭证管理', child: [
          {name: '1'}, {name: '2'}
        ]},
        {name: '手工凭证', alias: '凭证管理', child: [
          {name: '3'}, {name: '4'}
        ]},
      ]
    },{
      name: '账簿',
      iconClass: '',
      url: '',
      child: [
        {name: '新增凭证1', url: '', parentName: '凭证中心1'},
        {name: '凭证列表1', url: '', parentName: '凭证中心1'}
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
