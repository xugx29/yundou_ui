<template>
  <transition name="fade">
    <div class="messageBox" v-if="visible" :class="type">
      <!--<i class="fa fa-times" v-if="type != 'normal'" :class="className"></i>-->
      <i class="fa fa-warning" v-if="type == 'warning'" :class="className"></i>
      <i class="fa fa-check" v-if="type == 'success'" :class="className"></i>
      <i class="fa fa-times" v-if="type == 'error'" :class="className"></i>
      <em class="lf" v-if="type != 'normal'"></em>
      <p :class="{'pd': type != 'normal'}">{{message}}</p>
      <em class="rt" v-if="type != 'normal'"></em>
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

<style scoped lang="scss">
  i.fa{
    display: block;
    position: absolute;
    left:20px;
    top:50%;
    transform: translateY(-50%);
    font-weight: normal;
    font-size:18px;
    margin-left:10px;
    -webkit-text-stroke: 1px;
  }
  em{
    display: inline-block;
    &.lf{
      width:120px;
    }
    &.rt{
      width:50px;
    }
  }
  .fa-warning{
    border:1px solid transparent;
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.messageBox{
  position: fixed;
  top:1000px;
  left:50%;
  margin-left:-190px;
  box-sizing: border-box;
  width:380px;
  min-height: 60px;
  max-height:105px;
  border:1px solid #ebeef5;
  background: #edf2fc;
  color:#909399;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  word-break: break-all;
  padding:10px;
  font-size:.9em;
  cursor: default;
  p{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    text-align: center;
    &.pd{

    }
  }
  &.error{
    border:1px solid #fde2e2;
    color:#f56c6c;
    background: #fef0f0;
  }
  &.success{
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color:#67c23a;
  }
  &.warning{
    background-color: #fdf6ec;
    border-color: #faecd8;
    color:#e6a23c;
  }
}
</style>
