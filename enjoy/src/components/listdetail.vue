<template>
  <div>
	   <ul>
			 <li><a href="">全部</a></li>
			 <li><a href="">智能排序</a></li>
	   </ul>
  	<listdetail1></listdetail1>
  </div>
</template>

<script>
import listdetail1 from "./listdetail1"
// import { Actionsheet } from 'mint-ui';
export default {
  data(){
		return {

		}
	},
	components:{
  listdetail1
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a{
	 text-decoration:none;
}
div{
	ul{
		  height:40px;
			display: flex;
			border-bottom: 1px solid #ccc;
		li{
			line-height:40px;
			flex: 1;

			text-align: center;
		
		}
	}
}
	li:nth-child(1) a{
				color:#666;
          border-right: 1px solid #ccc;
			}
</style>
