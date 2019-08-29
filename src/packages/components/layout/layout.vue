<template>
  <div class="layoutContainer">
    <template v-if="index">
      <sideBarNav :nav="nav"></sideBarNav>
      <container :notice="notice"></container>
    </template>
    <template v-if="!index">
      <sideBarInPage :nav="nav"></sideBarInPage>
      <containerInPage></containerInPage>
    </template>
  </div>
</template>

<script>
  import sideBarNav from '../layout/sideBarNav'
  import sideBarInPage from '../layout/sideBarInPage'
  import container from '../layout/container'
  import containerInPage from '../layout/containerInPage'
  export default {
    name: 'Layout',
    data () {
        return {
            index: false
        }
    },
    created () {

    },
    props: ['notice', 'nav'],
    methods: {
    },
    components: {
        sideBarNav,
        sideBarInPage,
        container,
        containerInPage
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
