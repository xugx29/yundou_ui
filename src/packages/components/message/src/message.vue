<template>
  <transition name="fade">
    <div class="messageBox" v-if="visible" :class="type">
      {{message}}
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'message',
    data () {
      return {
        message: '',
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
  margin-left:-200px;
  box-sizing: border-box;
  width:400px;
  min-height: 70px;
  max-height:105px;
  border:1px solid #ebeef5;
  background: #edf2fc;
  color:#909399;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  padding:10px;
  font-size:.9em;
  cursor: default;
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
