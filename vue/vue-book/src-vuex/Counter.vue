<template>
  <div>
    {{count}}
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>
<script>
    import {mapState,mapMutations} from 'vuex'; // mapState语法糖
    //console.log(mapMutations(['increment'])); // =>{increment:function}
    //console.log(mapState(['count'])); // => {count:function(){}}
    export default {
        computed:{
          ...mapState(['count']), //将count直接定义在属性上，相当于把store里的count映射到组件的count中
        },
        data(){
            return {msg: 'hello'}
        },
        created(){
        },
        methods: { //将mutations中的方法映射到了组件的内部
          ...mapMutations(['increment','decrement']), //名字不能和原有的函数名相同
          add(){ //载荷
              this["increment"](2);
          },
          minus(){
              this["decrement"](5);
          }
        },
        components: {}
    }
</script>
<style scoped>

</style>
