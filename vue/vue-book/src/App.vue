<template>
  <!--根据不同的路由 显示不同的组件-->
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!--使用组件-->
    <Tab></Tab>
  </div>
</template>
<script>
  // 引入组件
  import Tab from './base/Tab.vue';
  export default {
      components:{Tab} //注册组件
  }
</script>

<style>
  /*默认的公用样式 如果样式较多 可以抽离出来通过@import引入样式*/
  *{margin: 0;padding: 0}
  a{text-decoration: none}
  ul,li{list-style: none}
  input,button{-webkit-appearance: none}
  html,body{font-size: 14px;width: 100%;height: 100%;overflow: hidden;}
  .content{
    position: fixed;
    top:50px;
    left: 0;
    right: 0;
    bottom: 60px;
    overflow-y:scroll;
  }
</style>
