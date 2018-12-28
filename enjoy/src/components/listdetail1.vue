<template>
    <div>
        <div v-if="datalist">
            <ul v-for="data in datalist">
                <li>
                    <img :src="data.product_image">
                </li>
                <li>
                    <p>{{data.name}}</p>
                    <p>价格:{{data.price}}</p>
                    <p><span></span></p>
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
        datalist:[]
        }
    }
    ,
	beforeMount(){
        console.log(this.$route.params)
     axios({
        url:`https://api.ricebook.com/4/tab/category_product_list.json?category_id=${this.$route.params.enjoy}&sort=1&from_id=0&city_id=140&page=0`,
        method: 'get'      
      }).then(res=>{
        console.log(res.data)
        console.log(res)
        this.datalist = res.data
      })
	}
  }

</script>

<style scoped lang="scss">
 div{
     ul{
         li{
             img{
                 width: 173px;
                 height: 115px;
             }
         }
     }
 }
</style>
