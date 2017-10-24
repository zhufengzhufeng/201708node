<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
    </div>
  </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import Swiper from '../base/Swiper.vue';
    export default {
        data(){
            return {
                sliders:[
                  'http://image.suning.cn/uimg/aps/material/150874774640274018.jpg?from=mobile',
                  '//image3.suning.cn/uimg/cms/img/150865652890306878.jpg?from=mobile',
                  'http://image.suning.cn/uimg/aps/material/150839500712003672.jpg?from=mobile'
                ]
            }
        },
        created(){
        },
        methods: {},
        computed: {},
        components: {MHeader,Swiper}
    }
</script>
<style scoped>

</style>
