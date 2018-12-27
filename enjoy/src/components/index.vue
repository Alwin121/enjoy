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
}
}

</script>

<style scoped>

</style>
