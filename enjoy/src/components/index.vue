<template>
  <div>
    <router-view></router-view>    
  </div>
</template>

<script>
	import axios from "axios"
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
}

}

</script>

<style scoped>
	
</style>
