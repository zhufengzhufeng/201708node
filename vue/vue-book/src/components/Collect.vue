<template>
  <div>
    {{collects}}
  </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        data(){
            return {msg: 'hello'}
        },
        created(){
        },
        methods: {},
        computed: {
          ...mapState(['collects'])
        },
        components: {}
    }
</script>
<style scoped>

</style>
