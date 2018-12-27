<template>
  
<div id="Layout">
   <div class="top" v-if="datalist4.group_section">
    <h1>{{datalist4.group_section.title}}</h1>
    <p>{{datalist4.group_section.desc}}</p>
    <span>{{datalist4.group_section.enjoy_url_text}}</span>
     </div>
     <ul>
       <li v-for="dataimg in datalist4.tabs">
         <img :src="dataimg.url">
       </li>
     </ul>
  
</div>
</template> 

<script>
// import cover1 from "./components/cover1"
import axios from "axios"

export default {
  data(){
    return {
      datalist4:[]
 
    }
  },
  mounted(){
    axios({
        url:"hub/home/v1/web/explore.json?city_id=140",
        method: 'get'      
      }).then(res=>{
        // console.log(res) 
        // console.log(res.data[1].data.tabs) 
        this.datalist4 = res.data[4].data
      }) 
  } 
}
</script>

<style scoped lang="scss">
ul{
  width:100%;
  padding:0;
  overflow: hidden;
  position: relative;
  list-style:none;
  li{
    float: left;
    width:130px;
    overflow: hidden;
  }
  img{
    width: 100%;
    transform: scale(1.5);
  }
}
.top{
  h1{
    font-size: 21px;
    margin: 0;
    line-height:30px;
  }
  p{
    font-size: 11px;
    color: #666;
    line-height: 20px;
    margin: 0;
  }
  span{
   float: right;
   font-size:14px;
   color: red;
   position:relative;
   top:-28px;
   right: 5px;
  }
  
}
</style>