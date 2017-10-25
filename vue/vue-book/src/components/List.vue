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
              <a>详情</a>
              <a>删除</a>
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
