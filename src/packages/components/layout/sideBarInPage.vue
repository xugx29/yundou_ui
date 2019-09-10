<template>
  <div class="slideBarNav">
    <div class="leftNav">
      <div class="avatar">
        <a href="">
          <img :src="logo" alt="">
        </a>
      </div>
      <slot name="operation"></slot>
      <ul class="navList">
        <li class="topLevelLi" :class="{active: currentTopLevelName == item.name}" v-for="(item, index) in nav" :key="index" @mouseenter="setNavDataByHover(item.child, item.name)" @mouseleave="clearNavData">
          <i class="navIcon" :class="currentTopLevelName == item.name ? item.iconClass + '-hover' : item.iconClass"></i><span v-if="Object.keys(item.child).length == 0"><router-link :to="{path: item.url, query: {t: 1}}">{{item.name}}</router-link></span>
          <span v-else>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div v-if="childNavData" class="rightNav" @mouseenter="setNavData" @mouseleave="childNavData = null">
      <div class="parentsName">{{childNavData && childNavData.child && childNavData.child.length != 0 ? childNavData.alias : menuText}}</div>
      <ul>
        <li v-for="(val, key) in childNavData" :key="key">
          <span v-if="val.child.length == 0" class="secLinkUrl" style="padding-left:28px;"><router-link :to="{path: val.url, query: {}}">{{val.name}}</router-link></span>
          <span @click="toggleSecMenu" v-else><i @click.stop></i>{{val.name}}</span>
          <ul class="navItemList" v-if="val.child.length != 0">
            <li v-for="(v, k) in val.child" :key="k">
              <router-link :class="{active: v.url == $route.path}" :to="{path: v.url, query: {}}">{{v.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-if="currentNavData" class="fixedRightNav">
      <div class="parentsName">{{currentNavData.alias}}</div>
      <ul>
        <li v-for="(val, key) in currentNavData.data" :key="key">
          <span v-if="val.child.length == 0" class="secLinkUrl" style="padding-left:28px;"><router-link :to="{path: val.url, query: {}}">{{val.name}}</router-link></span>
          <span @click="toggleSecMenu" v-else><i @click.stop></i>{{val.name}}</span>
          <ul class="navItemList" v-if="val.child.length != 0">
            <li v-for="(v, k) in val.child" :key="k">
              <router-link :class="{active: v.url == $route.path}" :to="{path: v.url, query: {}}">{{v.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'slideBarNav',
        data () {
            return {
                menuText: '',
                selectMenuType: '',
                childNavData: null,
                cacheNavData: null,
                currentNavData: null,
                currentTopLevelName: ''
            }
        },
        props: ['nav', 'logo'],
        watch: {
            $route (to, from) {
                this.getNavDataByPath();
            }
        },
        created () {
            this.getNavDataByPath();
        },
        methods: {
            getNavDataByPath () {
                let path = this.$route.path;
                let nav = this.nav;
                let topLevelHasUrl = false;
                let name = '';
                for (let i = 0; i < nav.length; i++) {
                  if (nav[i].url == path) {
                      name = nav[i].name;
                      topLevelHasUrl = true;
                      break
                  }
                }
                if (!topLevelHasUrl) {
                    for (let i = 0; i < nav.length; i++) {
                        if (Object.keys(nav[i].child).length != 0) {
                            this.loopUrlLevel2(nav[i].child.data, nav[i].child.data, nav[i].child, nav[i])
                        }
                        // this.loopUrl()
                    }
                } else {
                    this.currentTopLevelName = name
                    this.currentNavData = null;
                }
            },
            loopUrlLevel2 (l1, l2, l3, l4) {
              let path = this.$route.path;
              for (let i = 0; i < l2.length; i++) {
                  for (let j = 0; j < l2[i].child.length; j++) {
                      if (l2[i].child[j].url == path) {
                          console.log(l3)
                          this.currentNavData = l3
                          this.currentTopLevelName = l4.name;
                      }
                  }
              }
            },
            toggleSecMenu ($event) {
                if (Array.from($event.target.parentNode.classList).length == 0) {
                    $event.target.parentNode.classList.add('hideMenu')
                } else {
                    $event.target.parentNode.classList.remove('hideMenu')
                }
            },
            showUserDropdown () {},
            setNavDataByHover (data, name) {
                if (Object.keys(data).length == 0) return;
                setTimeout(() => {
                    this.menuText = data.alias;
                    this.childNavData = data.data
                    console.log(this.childNavData)
                }, 3)
            },
            setNavData () {
                setTimeout(() => {
                    this.menuText = this.menuTextCache;
                    this.childNavData = this.cacheNavData;
                }, 2)
            },
            clearNavData () {
                this.menuTextCache = this.menuText;
                this.cacheNavData = this.childNavData;
                setTimeout(() => {
                    this.menuText = '';
                    this.childNavData = null;
                }, 1)
            }
        }
    }
</script>

<style scoped lang="less">
  .leftNav{
    height:100%;
  }
  .fixedRightNav{
    width:132px;
    height:100%;
    /*margin-left: 92px;*/
    padding-bottom: 40px;
    background-color: #fff;
    border-right: 1px solid #ebedf0;
    z-index: 1;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .parentsName{
      cursor: default;
      flex: 0 0 56px;
      text-align: center;
      width: 100%;
      height: 56px;
      box-sizing: border-box;
      border-bottom: 1px solid #ebedf0;
      font-size: 14px;
      color: #323233;
      line-height: 56px;
      font-weight: 500;
    }
    ul.navItemList{
      overflow: hidden;
      max-height:300px;
      transition: all .2s ease;
      li{
        position: relative;
        width: 100%;
        min-height: 30px;
        line-height: 30px;
        padding: 5px 0;
        color: #323233;
        cursor: pointer;
        font-size: 14px;
        text-align: center;
        box-sizing: border-box;
        background: #fff;
        a{
          position: relative;
          display: block;
          color: #323233;
          border-radius: 2px;
          font-size: 14px;
          &:hover{
            color:@blueFontColor
          }
        }
      }
    }
    li{
      position: relative;
      width: 100%;
      min-height: 30px;
      line-height: 30px;
      padding: 5px 0;
      color: #323233;
      cursor: pointer;
      font-size: 14px;
      text-align: center;
      box-sizing: border-box;
      background: #fff;
      &.hideMenu {
        i {
          display: inline-block;
          width: 4px;
          height: 4px;
          border: solid #878787;
          border-width: 1px 1px 0 0;
          transform: scale(1.25) rotate(45deg);
          background: none;
          margin-left: 12px;
          margin-top:-2px;
          margin-right: 12px;
        }
        .navItemList{
          transition: all .2s ease;
          max-height:1px;
        }
      }
      span{
        display: flex;
        user-select: none;
        align-content: center;
        align-items: center;
        width:100%;
        height:30px;
        line-height: 30px;
        position: relative;
        cursor: pointer;
        padding-left: 4px;
        i{
          width: 4px;
          height: 4px;
          margin-top:-2px;
          border: solid #878787;
          border-width: 1px 1px 0 0;
          margin-left: 12px;
          margin-right: 12px;
          -webkit-transform: scale(1.25) rotate(135deg);
          -moz-transform: scale(1.25) rotate(135deg);
          transform: scale(1.25) rotate(135deg);
          transition: all .2s ease;
        }
      }
      a{
        position: relative;
        display: block;
        color: #323233;
        border-radius: 2px;
        font-size: 14px;
        text-align: left;
        padding-left:38px;
        &.active{
          color:#323233;
          background-color: #ebedf0;
        }
        &:hover{
          color:@blueFontColor
        }
      }
    }
  }
  .rightNav{
    width:132px;
    height:100%;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
    /*margin-left: 92px;*/
    padding-bottom: 40px;
    background-color: #fff;
    border-right: 1px solid #ebedf0;
    z-index: 4;
    position: absolute;
    /*overflow: hidden;*/
    display: flex;
    left:92px;
    top:0;
    flex-direction: column;
    box-sizing: border-box;
    .parentsName{
      flex: 0 0 56px;
      text-align: center;
      width: 100%;
      height: 56px;
      box-sizing: border-box;
      border-bottom: 1px solid #ebedf0;
      font-size: 14px;
      color: #323233;
      line-height: 56px;
      font-weight: 500;
    }
    ul.navItemList{
      overflow: hidden;
      max-height:300px;
      transition: all .2s ease;
      li{
        position: relative;
        width: 100%;
        min-height: 30px;
        line-height: 30px;
        padding: 5px 0;
        color: #323233;
        cursor: pointer;
        font-size: 14px;
        text-align: center;
        box-sizing: border-box;
        background: #fff;
        a{
          position: relative;
          display: block;
          color: #323233;
          border-radius: 2px;
          font-size: 14px;
          text-align: left;
          padding-left:38px;
          &.active{
            color:#323233;
            background-color: #ebedf0;
          }
          &:hover{
            color:@blueFontColor
          }
        }
      }
    }
    li{
      position: relative;
      width: 100%;
      min-height: 30px;
      line-height: 30px;
      padding: 5px 0;
      color: #323233;
      cursor: pointer;
      font-size: 14px;
      text-align: center;
      box-sizing: border-box;
      background: #fff;
      &.hideMenu {
        i {
          display: inline-block;
          width: 4px;
          height: 4px;
          border: solid #878787;
          border-width: 1px 1px 0 0;
          transform: scale(1.25) rotate(45deg);
          background: none;
          margin-left: 12px;
          margin-top:-2px;
          margin-right: 12px;
        }
        .navItemList{
          transition: all .2s ease;
          max-height:1px;
        }
      }
      span{
        display: flex;
        user-select: none;
        align-content: center;
        align-items: center;
        width:100%;
        height:30px;
        line-height: 30px;
        position: relative;
        cursor: pointer;
        padding-left: 4px;
        i{
          width: 4px;
          height: 4px;
          margin-top:-2px;
          border: solid #878787;
          border-width: 1px 1px 0 0;
          margin-left: 12px;
          margin-right: 12px;
          -webkit-transform: scale(1.25) rotate(135deg);
          -moz-transform: scale(1.25) rotate(135deg);
          transform: scale(1.25) rotate(135deg);
          transition: all .2s ease;
        }
      }
      a{
        position: relative;
        display: block;
        color: #323233;
        border-radius: 2px;
        font-size: 14px;
        text-align: center;
        &:hover{
          color:@blueFontColor
        }
      }
    }
  }
  .slideBarNav{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    min-width: 92px;
    background-color: #444;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    flex-direction: row;
    z-index: 2;
    .avatar{
      height: 56px;
      width: 92px;
      word-break: break-word;
      background: #444;
      z-index: 1002;
      a{
        display: block;
        margin: 0 16px;
        height: 56px;
        overflow: hidden;
        text-align: center;
        img{
          border-radius: 50%;
          margin: 12px auto 0;
          width: 32px;
          height: 32px;
          display: inline-block;
          background-size: cover;
          background-position: 50% 50%;
          background-color: #fff;
          border: 1px solid #fff;
        }
      }
    }
    .navList{
      li.topLevelLi{
        display: flex;
        width: 92px;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        color: #c8c9cc;
        align-content: center;
        align-items: center;
        padding-left: 18px;
        a{
          position: relative;
          display: block;
          color: #c8c9cc;
          border-radius: 2px;
          font-size: 14px;
          text-align: center;
        }
        i.navIcon{
          display: inline-block;
          width:18px;
          height:18px;
          margin-right: 3px;
          background-size: cover;
        }
        &.active{
          background: #fff;
          color:#333;
          a{
            color:#333;
          }
        }
        &:hover{
          background: #666;
          color: #fff
        }
      }
    }
  }
</style>
