<template>
	<div>
		<div class="top">
      <ul>
			 <li>全部<span></span></li>
			 <li @click="barClick()">{{init}}</li>
	   </ul>

		 <div class="bar" v-show="isShow">
       <div v-for="mylist in list.sort" :key="list.sort.sort_id" class="bg" @click="idClick(mylist.sort_id,mylist.sort_name)" :class="ids==mylist.sort_id?'cur':''">
          {{mylist.sort_name}}
         
				</div>
		 </div>
		 
		 
		</div>

		<div class="body" v-if="datalist">
			<ul v-for="data in datalist" :key="datalist.merchant_id">
                <li>
                    <img :src="data.product_image">
                </li>
                <li>
                    <p>{{data.name}}</p>
                    <p>{{data.price/100}}元/张<s>￥{{data.original_price/100}}</s></p>
                    <p>
                        <i class="iconfont icon-map" v-if="data.area"></i>
                        {{data.area}}</p>
                </li>
            </ul>
		</div>
		
	</div>
</template>

<script>
import axios from "axios"
import { Indicator } from 'mint-ui';
export default {
  data(){
		return {
			datalist:[],
			list:[],
			isShow:false,
			init:"智能排序",
			ids:0
		}
	},
	beforeMount(){
		Indicator.open({
			text: '加载中...',
			spinnerType: 'fading-circle'
		});
      axios({
        url:`https://api.ricebook.com/4/tab/category_product_list.json?category_id=${this.$route.params.enjoy}&sort=1&from_id=0&city_id=140&page=0`,
        method: 'get'      
      }).then(res=>{
        // console.log(res.data)
        // console.log(res)
        this.datalist = res.data
         this.$nextTick(()=>{
					 Indicator.close();
				 })
			})

			axios({
        url:`https://api.ricebook.com/4/tab/sub_category.json?category_id=${this.$route.params.enjoy}&city_id=140&from_id=0`,
        method: 'get'      
      }).then(res=>{
        console.log(res.data)
        // console.log(res)
        this.list = res.data

			})

	
	},
	methods:{
		barClick(){
       this.isShow =! this.isShow
		},
		idClick(id,name){
			Indicator.open({
	         text: '请稍等...',
			     spinnerType: 'triple-bounce'
			}
				
			);
			this.init=name
			axios({
        url:`https://api.ricebook.com/4/tab/category_product_list.json?category_id=23&sort=${id}&from_id=0&city_id=140&page=0`,
        method: 'get'      
      }).then(res=>{
        // console.log(res.data)
        // console.log(res)
				this.datalist = res.data
				this.isShow =! this.isShow
				this.ids = id
				 this.$nextTick(()=>{
					 Indicator.close();
				 })


			})
		}
	}
}
</script>

<style scoped lang="scss">

.body{
     ul{
        display: flex;
        margin: 10px;
         li{
             margin-right: 10px;
            flex: 1;
             img{
                 width: 170px;
                 height: 115px;
             }
             
         }
				 
 li:nth-child(2){
    
            p:nth-child(1){
                 font-size: 13px;
                 height: 68px;
             }
            p:nth-child(2){
                 font-size: 15px;
                 color: red;
                 s{
                     color: #ccc;
                     margin-left: 10px;
                 }
             }
             p:nth-child(3){
                 font-size: 8px;
                 color: #666;
                 line-height: 25px;
                 i{
                     font-size: 2px;
                 }
             }
 }
     }
 }




.top{
     position: relative;
  ul{
		overflow: hidden;
		li{
			float: left;
			width: 50%;
			height: 50px;
			line-height: 50px;
			text-align: center;
			border-bottom: 1px solid #ccc;
			position: relative;
			span{
         display: inline-block;
				 width: 1px;
				 height: 25px;
				 background: #ccc;
				 position: absolute;
				 top: 14px;
				 right: 0;
				 
			}
		
		}
	}
	
		.bar{
        // background: #f60;
				position: absolute;
				top:50px;
				width: 100%;
				.bg{
					
					background: #fff;
					height: 50px;
					text-align: center;
					line-height: 50px;
					font-size: 14px;
					border-bottom: 1px solid #ccc;
				}
			}
}  
.cur{
	background: #ccc;
	color: red;
}      
</style>
