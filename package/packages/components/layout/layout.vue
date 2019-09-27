<template>
  <div class="layoutContainer">
    <template v-if="index">
      <sideBarNav :nav="nav" :logo="logo">
        <div class="a999" slot="operation">
          <slot name="avatarDropDown"></slot>
        </div>
      </sideBarNav>
      <container :notice="notice">
        <template slot="companyName">
          <slot name="companyNameDiv"></slot>
        </template>
        <template slot="accountPeriod">
          <slot name="accountPeriodDiv"></slot>
        </template>
      </container>
    </template>
    <template v-if="!index">
      <sideBarInPage :nav="nav" :logo="logo">
        <template slot="operation">
          <slot name="avatarDropDown"></slot>
        </template>
      </sideBarInPage>
      <containerInPage :nav="nav" :serviceModule="serviceModule" :navGroup="navGroup"></containerInPage>
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
            if (to.path != '/index' && to.path != '/v5/index') {
                this.index = false
            } else {
                this.index = true
            }
            console.log(this.index)
        }
    },
    created () {
        if (this.$route.path != '/index' && this.$route.path != '/v5/index') {
            this.index = false
        } else {
            this.index = true
        }
    },
    props: ['notice', 'nav', 'serviceModule', 'logo', 'navGroup'],
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
