<template>
  <ul>
  <router-link to="/" exact tag="li">
    <i class="iconfont icon-shouye"></i>
    <span>首页</span>
  </router-link>
  <router-link to="/list" tag="li">
    <i class="iconfont icon-liebiaoyetuanqi"></i>
    <span>列表页</span>
  </router-link>
  <router-link to="/collect" tag="li">
    <i class="iconfont icon-shoucang"></i>
    <span>收藏页</span>
  </router-link>
  <router-link to="/add" tag="li">
    <i class="iconfont icon-icon02"></i>
    <span>添加</span>
  </router-link>
</ul>
</template>
<!--flex布局
  display:flex;
  flex:1;
  flex-direction:column 纵向排列
  justify-content:center 垂直居中
  align-item:center 水平
-->
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
<style scoped lang="less">
  ul{
    position: fixed;
    height: 60px;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    background: #f1f1f1;
    border-top: 1px solid slategray;
    li{
      display: flex;
      color: #a2a2a2;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .router-link-active{
      color: black;
      text-shadow: 1px 1px 1px  #ccc;
    }
  }
</style>
