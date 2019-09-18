<template>
  <div class="layoutContainer">
    <template v-if="index">
      <sideBarNav :nav="nav" :logo="logo">
        <div class="a999" slot="operation">
          <slot name="avatarDropDown"></slot>
        </div>
      </sideBarNav>
      <container :notice="notice"></container>
    </template>
    <template v-if="!index">
      <sideBarInPage :nav="nav" :logo="logo">
        <template slot="operation">
          <slot name="avatarDropDown"></slot>
        </template>
      </sideBarInPage>
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
            if (to.path != '/index' && to.path != '/v5/index' && to.path.indexOf('/printDownload') == -1) {
                this.index = false
            } else {
                this.index = true
            }
            console.log(this.index)
        }
    },
    created () {
        if (this.$route.path != '/index' && this.$route.path != '/v5/index' && this.$route.path.indexOf('/printDownload') == -1) {
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
