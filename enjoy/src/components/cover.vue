<template>
	<div>
    
    <cover_up></cover_up>
    <hr/>
		<cover_center></cover_center>
    <hr/>
    <cover_down></cover_down>
    <hr/>
    <coverLayout></coverLayout>
    <hr/>
    <coverLayout2></coverLayout2>
    <hr/>
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
div{
  margin:4px;
}

</style>