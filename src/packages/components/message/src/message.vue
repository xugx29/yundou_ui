<template>
  <transition name="fade">
    <div class="messageBox" v-if="visible" :class="type">
      <!--<i class="fa fa-times" v-if="type != 'normal'" :class="className"></i>-->
      <i class="icon icon-warn" v-if="type == 'warning' && showIcon" :class="className"></i>
      <i class="icon icon-check" v-if="type == 'success' && showIcon" :class="className"></i>
      <i class="icon icon-close" v-if="type == 'error' && showIcon" :class="className"></i>
      <p :class="{'pd': type != 'normal'}">{{message}}</p>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'message',
    data () {
      return {
        message: '',
        className: '',
        center: true,
        type: 'normal',
        showIcon: true,
        duration: 2500,
        visible: false,
        closed: false,
        onClose: null,
        timer: null
      }
    },
    watch: {
      closed (newVal) {
        if (newVal) {
          this.visible = false;
          this.$el.addEventListener('transitionend', this.destroyElement);
        }
      }
    },
    created () {
      if (this.type == 'success') {

      } else if (this.type == 'warning') {

      } else if (this.type == 'error') {

      } else {
        this.className = 'check'
      }
    },
    mounted () {
      this.startTimer();
    },
    methods: {
      destroyElement () {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
      close () {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },
      startTimer () {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        } else {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, 2500);
        }
      }
    }
  }
</script>

<style scoped lang="less">
  i.icon{
    margin-right:10px;
    font-weight: normal;
    font-size:18px;
    margin-left:10px;
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.messageBox{
  z-index:10001;
  position: fixed;
  top:100px;
  left:50%;
  margin-left:-170px;
  box-sizing: border-box;
  width:340px;
  height: 60px;
  border:1px solid #ebeef5;
  background: #edf2fc;
  color:#909399;
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  border-radius: 10px;
  padding:5px 10px;
  font-size:.95em;
  cursor: default;
  p{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    text-align: center;
    font-size:.98em;
    &.pd{

    }
  }
  &.error{
    border:1px solid #fde2e2;
    color:@error;
    background: #fef0f0;
  }
  &.success{
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color:@success;
  }
  &.warning{
    background-color: #fdf6ec;
    border-color: #faecd8;
    color:@warning !important;
  }
}
</style>
