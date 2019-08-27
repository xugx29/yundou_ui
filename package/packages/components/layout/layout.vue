<template>
  <div class="layoutContainer">
    <sideBarNav :nav="nav"></sideBarNav>
    <container :notice="notice"></container>
  </div>
</template>

<script>
  import sideBarNav from '../layout/sideBarNav'
  import container from '../layout/container'
  export default {
    name: 'Layout',
    data () {
        return {}
    },
    created () {

    },
    props: ['notice', 'nav'],
    methods: {
    },
    components: {
        sideBarNav,
        container
    }
  }
</script>

<style scoped lang="less">
.layoutContainer{
  overflow-x:hidden;
  overflow-y: auto;
  width: 100%;
  height:100%;
}
</style>
