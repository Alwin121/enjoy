<template>
  
<div id="down">
   <div class="swiper-container c">
      <div class="swiper-wrapper">

        <div class="swiper-slide" v-for="data in datalist3">
          <a :href="data.enjoy_url">
          <img :src="data.url">
          <p>{{data.title}}</p>
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
   
   
    </div>  
    <hr/>
</div>
</template> 

<script>
// import cover1 from "./components/cover1"
import axios from "axios"
import Swiper from "swiper"// 引入js
import "swiper/dist/css/swiper.css"
export default {
   data(){
    return {
      datalist3:[]
 
    }
   },
   beforeMount(){
    axios({
        url:"hub/home/v1/web/explore.json?city_id=140",
        method: 'get'      
      }).then(res=>{
        // console.log(res) 
        console.log(res.data[2].data.tabs
) 
    
        this.datalist3 = res.data[2].data.tabs


        this.$nextTick(()=>{
        var swiper = new Swiper('.c', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
    });
      })
   })

 }
	}
</script>

<style scoped lang="scss">
#down{
  margin-top: 20px;
}
a{
  text-decoration:none;
  color:#666;
}
 .swiper-container {
      width: 100%;
      height: 100%;

    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      img{
        width:100%;
      }
      p{
        margin:0;
        line-height: 20px;
        font-size: 14px;
        text-align : left;
        padding-bottom: 40px;

      }
    }
    .swiper-pagination{

    }


</style>