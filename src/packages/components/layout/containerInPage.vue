<template>
  <div class="appContainer">
      <header class="subtitle">
        <span class="subtitleText">凭证</span>
        <div class="helpCenter" v-if="!showHelpCenter" @click="showHelpCenter = !showHelpCenter">
          <span class="helpIcon"></span>
          <span>帮助和服务</span>
          <span class="toggleHelpCenter"></span>
        </div>
      </header>
      <div class="viewContainer">
        <div class="viewMain">
<!--          <router-view/>-->
        </div>
        <div class="helpCenterContainer" v-if="showHelpCenter">
          <div class="serviceAndHelpTitle helpCenter" @click="showHelpCenter = !showHelpCenter">
            <div>
              <span class="helpIcon"></span>
              <span>帮助和服务</span>
            </div>
            <div>
              <span class="toggleHelpCenter"></span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                showHelpCenter: false
            }
        },
        created () {
            if (document.body.clientWidth <= 1400) {
                this.showHelpCenter = false;
            } else {
                this.showHelpCenter = true;
            }
        }
    }
</script>
<style scoped lang="less">
  .appContainer{
    height:calc(~"100vh - 56px");
    position: relative;
    margin-left: 224px;
    margin-right:0;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
    background: #f2f2f2;
    width: auto;
    /*padding-bottom: 50px;*/
    min-width: 810px;
    /*height:3000px;*/
    .subtitle{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px 0 20px;
      height:55px;
      background: #fff;
      border-bottom: 1px solid #ebedf0;
      span.subtitleText{
        color:#333;
        font-size: 14px;
        line-height: 1em;
        display: inline-block;
        vertical-align: middle;
        text-decoration: none;
      }
      .helpCenter{
        display: flex;
        align-items: center;
        span{
          margin:0 8px;
          cursor: default;
        }
        .helpIcon{
          display: inline-block;
          width: 16px;
          height: 16px;
          background: url(../../styles/icon/helpicon.png) no-repeat;
          background-size: cover;
          cursor: pointer;
        }
        .toggleHelpCenter{
          display: inline-block;
          width: 13px;
          height: 10px;
          background: url(../../styles/icon/toggleHelpCenter.png) no-repeat;
          background-size: cover;
          cursor: pointer;
        }
      }
    }
    .viewContainer{
      width:100%;
      height:100%;background: #f2f2f2;
      display: flex;
      .viewMain{
        flex: 1;
        min-width:1180px;
        flex-shrink: 0;
        padding: 10px;
      }
      @media screen and (min-width: 1366px) and (max-width: 1599px) {
        .helpCenterContainer{
          width:223px;
          position: absolute;
          height:100vh;
          background: #fff;
          right:0;
          top:0;
          .helpCenter{
            width:100%;
            height:55px;
            border-bottom: 1px solid #ebedf0;
            border-left: 1px solid #ebedf0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            div{
              display: flex;
              align-items: center;
              align-content: center;
              padding:0 10px;
            }
            span{
              margin:0 4px;
              cursor: default;
              font-size:14px;
              user-select: none;
            }
            .helpIcon{
              display: inline-block;
              width: 16px;
              height: 16px;
              background: url(../../styles/icon/helpicon.png) no-repeat;
              background-size: cover;
              cursor: pointer;
            }
            .toggleHelpCenter{
              display: inline-block;
              width: 13px;
              height: 10px;
              background: url(../../styles/icon/toggleHelpCenter.png) no-repeat;
              background-size: cover;
              cursor: pointer;
            }
          }
        }
      }
      @media screen and (min-width: 1600px) {
        .helpCenterContainer{
          width:223px;
          background: #fff;
          position: relative;
          .helpCenter{
            width:100%;
            height:55px;
            border-bottom: 1px solid #ebedf0;
            border-left: 1px solid #ebedf0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            top:-56px;
            right:0;
            div{
              display: flex;
              align-items: center;
              align-content: center;
              padding:0 10px;
            }
            span{
              margin:0 4px;
              cursor: default;
              font-size:14px;
              user-select: none;
            }
            .helpIcon{
              display: inline-block;
              width: 16px;
              height: 16px;
              background: url(../../styles/icon/helpicon.png) no-repeat;
              background-size: cover;
              cursor: pointer;
            }
            .toggleHelpCenter{
              display: inline-block;
              width: 13px;
              height: 10px;
              background: url(../../styles/icon/toggleHelpCenter.png) no-repeat;
              background-size: cover;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
