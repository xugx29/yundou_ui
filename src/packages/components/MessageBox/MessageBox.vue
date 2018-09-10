<template>
  <div class="full-screen-mask" v-if="showBox" :class="{hideMask: !showMask}">
    <div class="MessageBox">
      <div class="MessageTitleBox yd-blue-bg">
        <span>{{title}}</span>
        <i @click="close" class="icon icon-close"></i>
      </div>
      <div class="MessageMainBox">
        <!--<p>{{content}}</p>-->
        <!--<p>{{appendixContent}}</p>-->
        <p class="content">测试内容</p>
        <p class="appendixContent" :class="{red: importantClass}">测试内容</p>
        <div class="buttonArea"><button @click="confrim" class="confirm">确定</button></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MessageBox',
    data () {
      return {
        showBox: this.showMessageBox,
        showMask: true
      }
    },
    props: {
      title: {
        default: '提示',
        type: String
      },
      appendixContent: String,
      content: String,
      showMessageBox: {
        default: true,
        type: Boolean
      },
      importantClass: {
        default: true,
        type: Boolean
      }
    },
    methods: {
      close () {
        this.showBox = false;
        this.$emit('closeMessageBox', this)
      },
      confrim () {
        this.showBox = false;
        this.$emit('confirmMessageBox', this)
      }
    }
  }
</script>

<style scoped lang="scss">
.MessageBox{
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  z-index:10001;
  border-radius: 10px;
  width:420px;
  height:280px;
  .MessageTitleBox{
    height:50px;
    width:100%;
    padding:0 15px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span{
      font-size:17px;
      font-weight:bold;
    }
    i{
      font-size:20px;
      font-weight: 700;
      cursor: pointer;
    }
  }
  .MessageMainBox{
    height:230px;
    background: #fff;
    padding:40px 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
      font-size:1.08em;
      &.red{
        color:#f00;
      }
      &.content{
        display: flex;
        justify-content: center;
        height:40px;
        overflow: hidden;
      }
      &.appendixContent{
        margin-top:10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    div.buttonArea{
      margin-top:35px;
    }
    /*border-bottom-left-radius: 10px;*/
    /*border-bottom-right-radius: 10px;*/
  }
}
</style>
