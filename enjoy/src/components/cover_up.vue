<template>
	<div>
  <div id="top">
    <div v-if="datalist1.group_section">
       <h1>{{datalist1.group_section.title}}</h1>
       <p>{{datalist1.group_section.desc}}</p>
    </div>
  </div>
    
    <div id="up">
      
        <div class="swiper-container b">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="img in datalist1.tabs">
            <a :href="img.enjoy_url" >
              <span><img :src="img.url"/></span>
              <h3>{{img.tag}}</h3>
              <h1>{{img.title}}</h1>
              <P>{{img.desc}}</P>
            </a>
          </div>
        </div>
      </div>
         
        </div>
        <!-- Add Pagination -->
        
    </div>
     
   
    </div>
		
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
      datalist1:[]
 
    }
   },
   mounted(){
    axios({
        url:"hub/home/v1/web/explore.json?city_id=140",
        method: 'get'      
      }).then(res=>{
        // console.log(res) 
        // console.log(res.data[0].data.tabs) 
        this.datalist = res.data,
        this.datalist1 = res.data[0].data,

        this.$nextTick(()=>{
      
       var swiper = new Swiper('.b', {
      spaceBetween: 30,
     
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
}
.swiper-container {
      width: 100%;
      height: 100%;
      span{
        display: inline-block;
        // background:#f60;
        width:100%;
        height: 202px;
        overflow:hidden;
        // opacity:0;
        img{
        width:100%;      
        }

      }
        
      }
    
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;}
 #top{  
     margin-top:0;
     height:100%;
 
  h1{
    font-size:23px;
    font-weight: 600;
    line-height: 40px;
    margin:0;

  }
  p{
    font-size: 14px;
    margin-top:0;
    color:#666;
  }
 }
 #up{
  text-align : left;
  // padding-bottom: 20px;
  // border-bottom: 1px solid #ccc;
  h3{
    font-size: 10px;
    line-height: 20px;
    color:red;
    margin:0;
    text-align : left;
  }
  h1{
    font-size: 16px;
    line-height: 25px;
    margin:0;
    color: #333;
    text-align : left;
  }
  p{
    margin:0;
    font-size: 12px;
    line-height: 22px;
    text-align : left;
    color:#666;
  }
 }

</style>