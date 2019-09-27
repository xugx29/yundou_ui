<template>
  <div class="appContainer">
      <header>
        <div class="notice" v-if="notice.show">
          <div>
            <p v-if="notice.text1 != ''">{{notice.text1}}</p>
            <p v-if="notice.text2 != ''">{{notice.text2}}</p>
          </div>
        </div>
      </header>
      <div class="header">
        <slot name="companyName"></slot>
<!--        <div class="companyOperation">-->
<!--              <span class="accountPeriod"></span>-->
<!--          <span class="userIcon"></span>-->
<!--          <span class="userName">徐光星</span>-->
<!--          <span class="arrowIcon"></span>-->
<!--        </div>-->
        <slot name="accountPeriod"></slot>
      </div>
      <div class="viewContainer">
        <div class="viewMain">
          <router-view/>
        </div>
        <div class="ad"></div>
      </div>
  </div>
</template>
<script>
  export default {
    data () {
        return {}
    },
    props: {
        notice: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return {
                    show: false,
                    text2: '',
                    text1: ''
                }
            }
        }
    }
  }
</script>
<style scoped lang="less">
  .appContainer{
    position: relative;
    margin-left: 92px;
    margin-right:0;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
    background: #f2f2f2;
    width: auto;
    /*padding-bottom: 50px;*/
    min-width: 810px;
    /*height:3000px;*/
    .notice{
      height:56px;
      background: #fff7cc;
      color:#333;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      padding: 10px 0 10px 30px;
      font-size: 12px;
      box-sizing: border-box;
      p{
        line-height: 24px;
      }
    }
    .header{
      display: flex;
      align-items: center;
      position: relative;
      height: 56px;
      background-color: #fff;
      padding: 0 20px;
      justify-content: space-between;
      div.panel{
        margin-left:20px;
        display: flex;
        align-items: center;
        .tag{
          height:18px;
          margin-left: 5px;
          font-size:12px;
          line-height: 1.2;
          color: #38f;
          border:1px solid #38f;
          padding: .084em .417em;
          border-radius: .167em;
        }
        .companyName{
          font-size: 20px;
          color: #333;
          font-weight: 700;
        }
      }
      div.companyOperation{
        display: flex;
        align-items: center;
        align-content: center;
        cursor: pointer;
        .userIcon{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 1px 1px 1px rgba(0,0,0,.1);
          background-image: url(../../styles/icon/avatar.png);
          background-size: cover;
        }
        .userName{
          margin: 0 10px;
        }
        .arrowIcon{
          display: block;
          background-image: url(../../styles/icon/arrow_dark.png);
          background-size: cover;
          width: 20px;
          height: 20px;
        }
      }
    }
    .viewContainer{
      padding: 20px;
      height:500px;
      display: flex;
      .viewMain{
        flex:1;
        min-width: 1060px;
        height:100%;
        background:#fff;
        margin-right:20px;
      }
      .ad{
        width:240px;
        flex-shrink: 0;
        background: #fff;
      }
    }
  }
</style>
