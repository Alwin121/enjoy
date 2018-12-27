<template>
  <div>
  	<div v-for="data in bigdetail">
  		<h3>{{data.group_section.title}}</h3>
		<p>{{data.group_section.desc}}</p>
  		<ul>
  			<li v-for="dl in data.tabs">	
  				<img :src="dl.url" alt="">
  				<p>{{dl.desc}}</p>
  				<p>{{dl.title}}</p>
  			</li>
  		</ul>
  	</div>
    <router-view></router-view>    
  </div>
</template>

<script>
	import axios from "axios"
export default {
	data(){
		return{
			bigdetail:[]
		}
	},
	mounted(){
	axios({
		url:'hub/home/v1/web/week_choice.json?city_id=140&page=0',
		method:'get'
	}).then(res=>{
		console.log(res.data)
		this.bigdetail = res.data
	}).catch(error=>{
		console.log(error)
	})
},


}

</script>

<style scoped>
	img{
		width: 100%;
	}
</style>
