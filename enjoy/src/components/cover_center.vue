<template>
	<div>

	  <div id="center">
       
      <div class="swiper-container a">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="data in datalist2">
          	<!-- <div class="bg"></div> -->
          	<a :href="data.enjoy_url">
          	<h1>{{data.title}}</h1>
          	<p>{{data.desc}}</p>
          	</a>
          </div>
      
    </div>

  </div>
     </div>
	
		<hr/>
	</div>
</template>

<script >
import axios from "axios"
import Swiper from "swiper"// 引入js
import "swiper/dist/css/swiper.css"
export default {
   data(){
    return {
      datalist2:[]
 
    }
   },
   mounted(){
    axios({
        url:"hub/home/v1/web/explore.json?city_id=140",
        method: 'get'      
      }).then(res=>{
        // console.log(res) 
        // console.log(res.data[1].data.tabs) 
        this.datalist2 = res.data[1].data.tabs,
        this.$nextTick(()=>{
        var swiper = new Swiper('.a', {
      slidesPerView: 2.4,
      spaceBetween: 30,
      freeMode: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

   })





   })

 }
	}
</script>

<style scoped lang="scss">
a{
  text-decoration:none;
  color:#fff;
}
.swiper-container {
      width: 100%;
      height: 100%;
      // background:red;
}

.swiper-slide {

      text-align: center;
      font-size: 18px;
      background: #000;
      opacity:.6;
      text-align : left;
      padding-left:5px;
      height:91px;

  }
#center{
    margin-top:20px;
    margin-bottom:20px;
	.bg{
        height:100px;
        position: relative;
	}
	h1{
		margin-top:25px;
        position: relative;
        font-size:17px;
	}
	p{
        position: relative;
        font-size:13px;
	}
}
</style>