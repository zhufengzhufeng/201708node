<template>
  <div>
    <MHeader>列表</MHeader>
    <div class="content">
      <Loading :isLoading="isLoading" :data="books"></Loading>
      <ul v-if="!isLoading&&books.length">
        <li v-for="book in books">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <span>{{book.bookPrice}}</span>
            <div>
              <router-link  :to="{name:'detail',params:{id:book.id}}">详情</router-link>
              <a @click="remove(book.id)">删除</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import Loading from '../base/Loading.vue';
    import axios from 'axios';
    export default {
        data(){
            return {books:[],isLoading:true}
        },
        created(){
            this.getBooks();
        },
        methods: {
            async getBooks(){
              let res = await axios.get('/api/book');
              this.books = res.data;
              this.isLoading = false;
              /*axios.get('/api/book').then(res=>{
                this.books = res.data;
                this.isLoading = false;
              });*/
            },
            remove(id){
                // 通过id删除某一项 成功后将页面上原有的数据也一并删除
              axios.delete('/api/book?id='+id).then(res=>{
                this.books = this.books.filter(item=>item.id!==id);
              });
            }
        },
        computed: {},
        components: {MHeader,Loading}
    }
</script>
<style scoped lang="less">
  ul{
    li{
      display: flex;
      margin: 10px;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
      img{
        width: 120px;
        height: 120px;
      }
      div{
        display: flex;
        flex-direction: column;
        div{
          display: flex;
          flex-direction:row;
          a{
            padding: 5px;
          }
        }
      }
    }
  }
</style>
