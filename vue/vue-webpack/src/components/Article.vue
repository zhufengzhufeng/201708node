<template>
  <div>
    id {{this.$route.params.aid}}
    name {{this.$route.params.name}}
  </div>
</template>
<script>
    export default {
        watch:{
          $route(){ //路径参数改变时 可以使用watch监控到 路由的变化
              alert(1)
          }
        },
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