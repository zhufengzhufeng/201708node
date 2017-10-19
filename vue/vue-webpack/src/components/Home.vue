<template>
  <div>
    Home
    <button @click="fn">去介绍页面</button>
  </div>
</template>
<script>
    export default {
        data(){
            return {msg: 'hello'}
        },
        methods: {
            fn(){ //编程式
              //this.$router.push('/profile/introduce');//路径跳转，将当前的路径放到历史管理中
              // this.$router.go(-1); //返回按钮
              this.$router.replace('/profile/introduce'); //跳转页面后不留痕迹
            }
        },
        computed: {},
        components: {
        }
    }
</script>
<style>

</style>
