<template>
  <div>
    <Counter></Counter>
    <Type></Type>
  </div>
</template>
<script>
    import Type from './Type.vue';
    import Counter from './Counter.vue'
    export default {
        data(){
            return {msg: 'hello'}
        },
        created(){
        },
        methods: {},
        computed: {},
        components: {Counter,Type}
    }
</script>
<style scoped>

</style>
