<template>
  <div>
  	<ul v-infinite-scroll="loadMore"
  		infinite-scroll-disabled="loading"
  		infinite-scroll-immediate-check = "false"
  		infinite-scroll-distance="0">
  	<li class="bigli" v-for="data in bigdetail">
  		<h3>{{data.group_section.title}}</h3>
		<p class="bigp">{{data.group_section.desc}}</p>
  		<ul>
  			<li @click="myclick(dl.enjoy_url)" v-for="dl in data.tabs">	
  				<img :src="dl.url" alt="">
  				<p class="first">{{dl.desc}}</p>
  				<p class="second">{{dl.title}}</p>
  			</li>
  		</ul>
  	</li>
  </ul>
    <router-view></router-view>    
  </div>
</template>

<script>
	import axios from "axios"
	import { InfiniteScroll } from 'mint-ui';
export default {
	data(){
		return{
			bigdetail:[],
			loading:false,
			page:0
		}
	},
	mounted(){
	axios({
		url:`hub/home/v1/web/week_choice.json?city_id=140&page=${this.page}`,
		method:'get'
	}).then(res=>{
		console.log(res.data)
		this.bigdetail = res.data
	}).catch(error=>{
		console.log(error)
	})
},
methods:{

	loadMore(){
		if (this.page === 7) {
			this.loading = true
		}
		this.page++
		axios({
		url:`hub/home/v1/web/week_choice.json?city_id=140&page=${this.page}`,
		method:'get'
	}).then(res=>{
		console.log(res)
		this.bigdetail = [...this.bigdetail,...res.data]

	}).catch(error=>{
		console.log(error)
	})

	},
	myclick(data){
		console.log(data)
		console.log(data.split("=")[2])
		console.log(data.split("=")[1].split("&")[0])

		this.$router.push(`/goods/${{product_id:data.split("=")[1].split("&")[0],sub_product_id:data.split("=")[2]

	}}`)

			}
}
}
</script>

<style scoped>
	img{
		width: 100%;
	}
	p.bigp{
		font-size: 12px;
		color: red;
		margin-bottom: 20px
	} 
	p,h3{
		text-indent: 20px
	}
	.first{
		font-size: 20px;
		margin-top:20px 
	}
	.second{
		font-size: 12px;
		color: #ccc;
		margin-bottom:20px 
	}
	h3{
		margin-top:20px; 
		font-size: 30px
	}
</style>
