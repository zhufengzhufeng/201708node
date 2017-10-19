<template>
  <div>
    <Tab></Tab>
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
<style scoped>

</style>