<template>
  <div>
    <top></top>
    <router-view></router-view>    
    <bottom></bottom>
  </div>
</template>

<script>
	import axios from "axios"
	import top from "./top"
	import bottom from "./bottom"
export default {

	mounted(){
	axios({
		url:'hub/home/v1/web/week_choice.json?city_id=140&page=0',
		method:'get'
	}).then(res=>{
		console.log(res)
	}).catch(error=>{
		console.log(error)
	}),
	axios({
		url:'product/info/product_detail.json?product_id=1004528&sub_product_id=5008577',
		method:'get'
	}).then(res=>{
		console.log(res)
	}).catch(error=>{
		console.log(error)
	})
},
	components:{
      top,
      bottom
    },
}

</script>

<style scoped>
	
</style>
