<template>
  <div class="layoutContainer">
    <template v-if="index">
      <sideBarNav :nav="nav" :logo="logo"></sideBarNav>
      <container :notice="notice"></container>
    </template>
    <template v-if="!index">
      <sideBarInPage :nav="nav" :logo="logo"></sideBarInPage>
      <containerInPage :nav="nav" :serviceModule="serviceModule"></containerInPage>
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
            index: true
        }
    },
    watch: {
        $route (to, from) {
            if (to.path != '/index') {
                this.index = false
            } else {
                this.index = true
            }
            console.log(this.index)
        }
    },
    created () {
        if (this.$route.path != '/index') {
            this.index = false
        } else {
            this.index = true
        }
    },
    props: ['notice', 'nav', 'serviceModule', 'logo'],
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
