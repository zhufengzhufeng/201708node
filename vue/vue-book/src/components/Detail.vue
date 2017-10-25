<template>
  <div>
    <MHeader :back="true">修改</MHeader>
    <div class="content">
      <div>
        <label for="bookName">书名</label>
        <input type="text" id="bookName" v-model="book.bookName">
      </div>
      <div>
        <label for="bookCover">封面</label>
        <input type="text" id="bookCover" v-model="book.bookCover">
      </div><div>
      <label for="bookInfo">详情</label>
      <input type="text" id="bookInfo" v-model="book.bookInfo">
    </div>
      <div>
        <label for="bookPrice">价格</label>
        <input type="text" id="bookPrice" v-model="book.bookPrice">
      </div>
      <div>
        <button @click="update">修改</button>
      </div>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue';
  import axios from 'axios';
  export default {
    data(){
      return {
        book:{
          bookName:'',
          bookPrice:'',
          bookCover:'',
          bookInfo:''
        }
      }
    },
    created(){
      this.getBook();
    },
    watch:{
      $route(){ //监控路径参数的变化 参数变化后 重新校验看是否有这本书没有跳转回去
        this.getBook();
      }
    },
    methods: {
      getBook(){
        axios.get('/api/book?id='+this.$route.params.id).then(res=>{
          if(res.data.err){
            this.$router.push('/list');
          }else{
            this.book = res.data.book;
          }
        })
      },
      update(){ // 点击添加按钮发送ajax
        // 通过url传递id  通过请求体传递数据
        axios.put('/api/book?id='+this.book.id,this.book).then(res=>{
            this.$router.push('/list');
        });
      }
    },
    computed: {},
    components: {MHeader}
  }
</script>
<style scoped lang="less">

  .content {
    bottom:0;
    z-index: 99999999999;
    background: #fff;
    div {
      width: 90%;
      margin: 20px auto;
      label {
        float: left
      }
      input {
        margin-left: 20%;
        display: block;
        width: 80%;
      }
  }
  }
</style>
