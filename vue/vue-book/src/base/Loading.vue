<template>
  <div>
    <!--如果正在加载 显示正在加载-->
    <div v-if="isLoading">
      <div class="spinner"></div>
    </div>
    <!--如果加载完成 并且数据没值 显示暂无数据-->
    <div v-if="!isLoading&&!data.length">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508909303575&di=84b89d124c4f313f13b569b3d8410a9c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1677779351%2C3645026260%26fm%3D214%26gp%3D0.jpg" alt="">

    </div>
  </div>
</template>
<script>
    export default {
        props:{
            isLoading:{
                type:Boolean
            },
            data:{
                type:Array
            }
        }
    }
</script>
<style scoped>
  .spinner {
    width: 40px;
    height: 40px;
    margin: 100px auto;
    background-color: green;

    border-radius: 100%;
    -webkit-animation: scaleout 1.0s infinite ease-in-out;
    animation: scaleout 1.0s infinite ease-in-out;
  }

  @-webkit-keyframes scaleout {
    0% { -webkit-transform: scale(0.0) }
    100% {
      -webkit-transform: scale(1.0);
      opacity: 0;
    }
  }

  @keyframes scaleout {
    0% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 100% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
        opacity: 0;
      }
  }
</style>
