<template>
  <div>
    <!--导航-->
    <Tab></Tab>
    <!--内容-->
    <router-view></router-view>
  </div>
</template>
<script>
    import Tab from './components/Tab.vue';
    export default {
        data(){
            return {msg: 'hello'}
        },
        created(){
        },
        methods: {},
        computed: {},
        components: {
            Tab
        }
    }
</script>
<style>
    /*可以默认app.vue中的样式是全局的  只要路径开头匹配则可以变红 */
  .l{color:red !important;}

  /**/
  .e{color:blue !important;}
</style>