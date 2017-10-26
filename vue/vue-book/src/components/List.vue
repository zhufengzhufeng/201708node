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
            <i style="color:red" @click="add(book)">加入收藏</i>
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
    import {mapMutations} from 'vuex';
    import * as Types from '../vuex/mutation-types'; //宏
    export default {
        data(){
            return {books:[],isLoading:true};
        },
        created(){
            this.getBooks();
        },
        activated(){  // 存放不需要缓存的方法
          this.getBooks();
        },
        methods: {
            ...mapMutations([Types.ADD_COLLECT]), //将mutation中的方法映射到组件内部
            add(book){
              this[Types.ADD_COLLECT](book);
              this.$router.push('/collect'); //跳转收藏页面
            },
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
