<template>
  <div>
    <div class="blue">default text</div>
    <div class="red">{{text}}</div>
  </div>
</template>

<script>
  export default {
    name: 'noticeMessage',
    props: {
      text: String
    },
    created () {
      console.log(1)
    }
  }
</script>

<style scoped lang="scss">
.blue{
  color: #000;
}
</style>
