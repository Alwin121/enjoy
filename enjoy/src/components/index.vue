<template>
  <div>
    <header>
    	<span></span>
		<p>ENJOY<span>北京</span></p>
    	<span><i class="iconfont icon-xxx"></i></span>
    </header><!-- /header -->
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
	})
	axios({
		url:'cdn/home/djEvdmlydHVhbC9pbl9jYXRlZ29yeS5qc29uP2NpdHlfaWQ9MTQwJmlzX25ld19sb2NhbD1mYWxzZSZtZDU9NzEwNzRkMGFhMWRmZmRiMWMzMjc0ODk1ZDg3MTI2NDgmMjAxODEyMjcwOTAw.json',
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
