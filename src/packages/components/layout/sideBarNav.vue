<template>
  <div class="slideBarNav">
      <div class="leftNav">
        <div class="avatar">
          <a href="">
            <img src="https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png!60x60.jpg" alt="">
          </a>
        </div>
        <ul class="navList">
          <li class="topLevelLi active" v-for="(item, index) in nav" :key="index" @mouseenter="childNavData = item.child" @mouseleave="clearNavData">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div v-if="childNavData" class="rightNav" @mouseenter="setNavData" @mouseleave="childNavData = null">
          <div class="parentsName">{{childNavData[0].parentName}}</div>
          <ul>
            <li v-for="(val, key) in childNavData" :key="key"><a href="">{{val.name}}</a></li>
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
            cacheNavData: null
        }
    },
    props: ['nav'],
    created () {
      console.log(this.nav)
    },
    methods: {
        showUserDropdown () {},
        setNavData () {
            setTimeout(() => {
                this.childNavData = this.cacheNavData;
            }, 2)
        },
        clearNavData () {
            this.cacheNavData = this.childNavData;
            setTimeout(() => {
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
    z-index: 1;
    position: relative;
    overflow: hidden;
    display: flex;
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
  overflow: hidden;
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
        background-size: cover;
        background-position: 50% 50%;
        background-color: #fff;
        border: 1px solid #fff;
      }
    }
  }
  .navList{
    li.topLevelLi{
      width: 92px;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      color: #c8c9cc;
      display: block;
      padding-left: 18px;
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
