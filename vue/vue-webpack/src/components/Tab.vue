<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          珠峰
        </a>
      </div>
      <nav class="navbar-nav nav">
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/profile">个人</router-link></li>
        <li><router-link to="/article">文章</router-link></li>
      </nav>
    </div>
  </nav>
</template>
<script>
    export default {
        data(){
            return {msg: 'hello'}
        },
        created(){
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped>

</style>