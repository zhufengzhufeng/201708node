<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <!--获取热门图书-->
      <!--假如加载后 数据就是空的，在显示正在加载就不合理了-->
      <!--如果加载完 而且还要判断 数据是否存在 如果不存在应该显示暂无数据，如果有数据就隐藏掉-->
      <!--isLoading是否正在加载 data表示数据 -->
      <Loading :isLoading="isLoading" :data="hot"></Loading>
      <!--如果加载完成 并且数据有 显示我们的列表-->
      <template v-if="!isLoading&&hot.length">
        <h3>热门图书</h3>
        <ul class="hot">
          <li v-for="h in hot">
            <img :src="h.bookCover" alt="">
            <span>{{h.bookName}}</span>
            <span>{{h.bookPrice}}</span>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import Swiper from '../base/Swiper.vue';
    import Loading from '../base/Loading.vue';
    import axios from 'axios';
    export default {
        data(){
            return {
                sliders:[],
                hot:[],
                isLoading:true
            }
        },
        created(){
            this.getSliders();
            setTimeout(()=>{
              this.getHot();
            },1000);
        },
        methods: {
            getSliders(){ //获取轮播图
              axios.get('/api/sliders').then((res)=>{
                this.sliders = res.data;
              });
            },
            getHot(){ // 获取热门图书
              axios.get('/api/hot').then(res=>{
                  this.hot = res.data;
                  this.isLoading = false;
              });
            }
        },
        computed: {},
        components: {MHeader,Swiper,Loading}
    }
</script>
<style scoped lang="less">
  .hot{
    display: flex;
    flex-wrap: wrap;
    li{
      padding: 5px;
      box-sizing: border-box;
      width: 33.333333%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      align-items: center;
      img{
        height: 120px;
        width: 80%;
      }
      :nth-child(3){color:#2a2a2a;font-weight: 200}
    }
  }
</style>
