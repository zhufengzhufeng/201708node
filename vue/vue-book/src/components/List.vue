<template>
  <div>
    <MHeader>列表</MHeader>
    <div class="content">
      <Loading :isLoading="isLoading" :data="books"></Loading>
      <ul v-if="!isLoading&&books.length">
        <li v-for="book in books">{{book.bookName}}</li>
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
            getBooks(){
              axios.get('/api/book').then(res=>{
                this.books = res.data;
                this.isLoading = false;
              });
            }
        },
        computed: {},
        components: {MHeader,Loading}
    }
</script>
<style scoped>

</style>
