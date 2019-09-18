<template>
  <div class="slideBarNav">
      <div class="leftNav">
        <div class="avatar" style="position: relative">
          <a href="">
            <img :src="logo" alt="">
          </a>
          <div style="min-width:92px;padding-top:60px; position: absolute; top:0; left:10px;z-index:10000" @mouseenter="showDropdown1 = true" @mouseleave="showDropdown1 = false">
              <slot v-if="showDropdown1" name="operation"></slot>
          </div>
        </div>
        <ul class="navList">
          <li class="topLevelLi" v-for="(item, index) in nav" :key="index" @mouseenter="setNavDataByHover(item.child, item.name)" @mouseleave="clearNavData">
            <i :class="item.iconClass" class="navIcon"></i><span v-if="Object.keys(item.child).length == 0"><router-link :to="{path: item.url}">{{item.name}}</router-link></span>
            <span v-else>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div v-if="childNavData" class="rightNav" @mouseenter="setNavData" @mouseleave="childNavData = null">
        <div class="parentsName">{{childNavData && childNavData.child && childNavData.child.length != 0 ? childNavData.alias : menuText}}</div>
        <ul>
          <li v-for="(val, key) in childNavData" :key="key">
            <span v-if="Object.keys(val.child).length == 0" class="secLinkUrl" style="padding-left:28px;"><router-link :to="{path: val.url, query: {}}">{{val.name}}</router-link></span>
            <span @click="toggleSecMenu" v-else><i @click.stop></i>{{val.name}}</span>
            <ul class="navItemList" v-if="val.child.length != 0">
              <li v-for="(v, k) in val.child" :key="k">
                <router-link :to="{path: v.url, query: {}}">{{v.name}}</router-link>
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
            childNavData: null,
            showDropdown1: false,
            cacheNavData: null
        }
    },
    props: ['nav', 'logo'],
    created () {
      // console.log(this.nav)
    },
    methods: {
        toggleSecMenu ($event) {
            if (Array.from($event.target.parentNode.classList).length == 0) {
                $event.target.parentNode.classList.add('hideMenu')
            } else {
                $event.target.parentNode.classList.remove('hideMenu')
            }
        },
        showUserDropdown () {},
        setNavDataByHover (data) {
            if (Object.keys(data).length == 0) return;
            setTimeout(() => {
                this.menuText = data.alias;
                this.childNavData = data.data
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
  .operationDropdown{
    background: #f7f7f7;width:300px;min-height:200px;box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-radius: 2px;
    position: relative;
    padding:5px 0;
    &:before{content:" ";width:0;height:0;position:absolute;left:30px;top:-12px;border:6px solid transparent;border-bottom-color:#fff}
    li{
      width:100%;
      height:58px;
      line-height: 58px;
      padding:0 18px;
      user-select: none;
      cursor: pointer;
      font-size:14px;
      &.bold{
        font-weight: 700;
      }
      &:hover{
        color:#fff;
        background: #2c7dff;
      }
    }
  }
  .leftNav{
    height:100%;
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
    z-index: 1000;
    position: absolute;
    overflow: hidden;
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
  /*overflow: hidden;*/
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
      align-items: center;
      align-content: center;
      width: 92px;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      color: #c8c9cc;
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
        margin-right: 5px;
      }
      &.active{
        background: #fff;
        color:#333;
      }
      &:hover{
        background: #666;
        color: #fff
      }
    }
  }
}
</style>
