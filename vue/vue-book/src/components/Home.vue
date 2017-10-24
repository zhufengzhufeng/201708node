<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <!--获取热门图书-->
      <ul class="hot">
        <li v-for="h in hot">
          <img :src="h.bookCover" alt="">
          <span>{{h.bookName}}</span>
          <span>{{h.bookPrice}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import Swiper from '../base/Swiper.vue';
    import axios from 'axios';
    export default {
        data(){
            return {
                sliders:[],
                hot:[]
            }
        },
        created(){
            this.getSliders();
            this.getHot();
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
              });
            }
        },
        computed: {},
        components: {MHeader,Swiper}
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
