<template>
  <div class="all">
	<div v-for= "data in list">
		<p>{{data.name}}</p>

		<table>
			<tr>
				<td >
					<a v-for="dl in data.sub_category_list">
						{{dl.name}}
					</a>
					
				</td>
			</tr>
		</table>
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
	.all{
		width: 100%;
		height: 100%
	}
	p{
		width: 100%;
		height: 38px;
		background:#fdfafa ;
		line-height: 38px;
		float: left;
		padding-left: 25px;
	}
	a{	
		display: inline-block;
		width: 117px;
		height: 48px;
		line-height: 48px;
		text-align: center;
	}
	table{
	 border-collapse: collapse;
     border-spacing: 2px;
     border-color: grey;
     display: table
	}
	tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
	}
</style>
