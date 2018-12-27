<template>
  <div>
	<div v-for= "data in list">
		<p>{{data.name}}</p>
		<ul>
			<li  v-for="dl in data.sub_category_list">
				<a>
					{{dl.name}}
				</a>
			</li>
		</ul>
	</div>
    <router-view></router-view>    
  </div>

</template>

<script>

	import axios from 'axios'
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			axios({
		url:'cdn/home/djEvdmlydHVhbC9pbl9jYXRlZ29yeS5qc29uP2NpdHlfaWQ9MTQwJmlzX25ld19sb2NhbD1mYWxzZSZtZDU9NzEwNzRkMGFhMWRmZmRiMWMzMjc0ODk1ZDg3MTI2NDgmMjAxODEyMjcwOTAw.json',
		method:'get'
		}).then(res=>{
			this.list=res.data
			// console.log(this.list)			
		})
	  }
	}
</script>

<style scoped>
	/* *{
		padding: 0;
		margin: 0;
	}
	p{
		width: 100%;
		height: 38px;
		background:#fdfafa ;
		line-height: 38px;
		float: left;
		padding-left: 25px;
	}
	ul{
		list-style: none;
		float: left;
	}
	a{	
		display: inline-block;
		width: 117px;
		height: 48px;
		background: #fff;
		line-height: 48px;
		text-align: center;
		border:1px solid #ccc;
	}
 */
	p{
		height: 38px;
		background:#fdfafa ;
		line-height: 38px;
		padding-left: 25px;
	}
	ul{
		display: flex;
		flex-wrap: wrap;
	}
	li{
		width: 33%;
		list-style: none;
		text-align: center;
	}
	a{
		display: inline-block;
		text-align: center;
		height: 48px;
		line-height: 48px;
		text-align: center;

	}
</style>
