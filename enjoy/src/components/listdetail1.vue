<template>
    <div>
        <div v-if="datalist">
            <ul v-for="data in datalist">
                <li>
                    <img :src="data.product_image">
                </li>
                <li>
                    <p>{{data.name}}</p>
                    <p>{{data.price/100}}元/张<s>￥{{data.original_price/100}}</s></p>
                    <p>
                        <i class="iconfont icon-map" v-if="data.area"></i>
                        {{data.area}}</p>
                </li>
            </ul>
        </div>
       
    </div>
    
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
        datalist:[],
        
        }
    }
    ,
	beforeMount(){
        console.log(this.$route.params)
     axios({
        url:`https://api.ricebook.com/4/tab/category_product_list.json?category_id=${this.$route.params.enjoy}&sort=1&from_id=0&city_id=140&page=0`,
        method: 'get'      
      }).then(res=>{
        // console.log(res.data)
        // console.log(res)
        this.datalist = res.data

       
      })
    },
    method(){
        
    }
  }

</script>

<style scoped lang="scss">
 div{
     ul{
        display: flex;
        margin: 10px;
         li{
             margin-right: 10px;
            flex: 1;
             img{
                 width: 170px;
                 height: 115px;
             }
             
         }
     }
 }

 li:nth-child(2){
    
            p:nth-child(1){
                 font-size: 13px;
                 height: 68px;
             }
            p:nth-child(2){
                 font-size: 15px;
                 color: red;
                 s{
                     color: #ccc;
                     margin-left: 10px;
                 }
             }
             p:nth-child(3){
                 font-size: 8px;
                 color: #666;
                 line-height: 25px;
                 i{
                     font-size: 2px;
                 }
             }
 }
</style>
