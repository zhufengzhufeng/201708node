<template>
  <div class="header">
    <!--将使用MHeader时夹着的内容传递到当前组件的slot中-->
    <i class="iconfont icon-houtui" v-if="back" @click="go"></i>
    <slot></slot>
  </div>
</template>
<script>
    export default {
        props:{
            back:{
                type:Boolean,
                default:false
            }
        },
        methods: {
            go(){
                this.$router.back(); //后退
            }
        },
    }
</script>
<style scoped lang="less">
  .header{height: 50px;background: #809399;color: #fff;text-align: center;line-height: 50px;position: fixed;width: 100%;
    i{
      position: absolute;
      left: 20px;font-size: 20px;
    }
  }
</style>
