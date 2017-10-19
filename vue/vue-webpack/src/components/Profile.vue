<template>
  <div>
      <div class="col-md-4">
        <ul class="nav nav-pills nav-stacked">
            <li><router-link :to="{path:'/profile/introduce'}">简介</router-link></li>
            <li><router-link :to="{path:'/profile/aboutme'}">关于我</router-link></li>
        </ul>
      </div>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
  </div>
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