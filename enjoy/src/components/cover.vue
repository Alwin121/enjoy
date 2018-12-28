<template>
	<div>
    
    <cover_up></cover_up>
    
		<cover_center></cover_center>
    
    <cover_down></cover_down>
  
    <coverLayout></coverLayout>
   
    <coverLayout2></coverLayout2>
   
    <coverLayout3></coverLayout3>

	</div>
</template> 

<script>
// import cover1 from "./components/cover1"
import cover_up from "./cover_up"
import cover_center from "./cover_center"
import cover_down from "./cover_down"
import coverLayout from "./coverLayout"
import coverLayout2 from "./coverLayout2"
import coverLayout3 from "./coverLayout3"
import top from "./top"
// import Swiper from "swiper"// 引入js
// import "swiper/dist/css/swiper.css"
export default {
  beforeMount(){
    	Indicator.open({
			text: '加载中...',
			spinnerType: 'fading-circle'
		});
  },
  Mounted(){
     Indicator.close();
  },
  components:{
    cover_up,
    cover_center,
    cover_down,
    coverLayout,
    coverLayout2,
    coverLayout3,
    top
  }
	}
</script>

<style lang="scss">
#Layout{
  padding-bottom: 15px;
  border-bottom:1px solid #ccc;
}
div{
  margin-right:3px; 
  margin-left:2px; 
}


</style>