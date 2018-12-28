<template>
  <div>
  	<div id="banner">
		<swipe class="my-swipe">
			<swipe-item v-for="data,index in datalist">
				<img :src="data.img_url" alt="">
			</swipe-item>
		</swipe>      			
  	</div>
  	<div class="info_title">
		<h3>{{infolist.short_name}}-{{infolist.spec}}</h3>
  		<div class="my_heart">
  			<span><i class="iconfont icon-favorites"></i></span>
  		</div>
  		<p class="desc">{{infolist.description}}</p>
  		<p class="price">{{infolist.price/100+'元'}}/位
			<s>￥{{infolist.origin_price/100}}</s>
  		</p>
  		<span class="status">
  			<span class="gap"></span>
  			<span>随时退</span>
  		</span>
  	</div>

  	<div class="sub_btn">
		<div class="cart"><i class="iconfont icon-cart"></i></div>
		<a href="#" class="add_cart">加入购物车</a>
		<a href="#" class="pay">即刻购买</a>
	</div>

	<div class="sub_normal">
		<div class="sub_area">
			<div class="title clearfix">
				<p>已选择：{{infolist.spec}}</p>
				<a href="#" @click="handleClick()" >关闭<i class="iconfont icon-moreunfold"></i></a>
			</div>
			<transition >
				<div class="count clearfix" v-show="isshow">
					<div class="tip">选择数量</div>
					<div class="operate">
						<a href="#" class="stract">+</a>
						<span class="num">0</span>
						<a href="#" class="plus">-</a>
					</div>
				</div>
			</transition>
			
		</div>
		
		<div class="sub_btn" >
			<transition name="fade">
				<a href="#" v-show="isshow">确定</a>
			</transition>
		</div>
				
		
	</div>
  </div>
</template>

<script>
	import axios from "axios"
	import 'vue-swipe/dist/vue-swipe.css'
	import { Swipe, SwipeItem } from 'vue-swipe';
	export default {
		data(){
			return{
				datalist:[],
				infolist:{},
				isshow:true,
				data1:this.$route.params,
			}
		},
		beforeMount(){
				this.$store.commit("hideTop");
				this.$store.commit("hideBottom");

		},
		mounted(){
			
			// console.log(this.data1.product.split("&")[0],this.data1.product.split("&")[1])
			axios({
				url:`/product/info/product_detail.json?product_id=${this.$route.params.product.split("&")[0]}&sub_product_id=${this.$route.params.product.split("&")[1]}`,
				method: 'get',
			}).then(res=>{
				console.log(res.data.basic.product_images)
				this.datalist = res.data.basic.product_images
				this.infolist = res.data.basic
			})
		},

		methods:{
			handleClick(){
				console.log('aaaaa')
				this.isshow=!this.isshow
			}
		},
		
		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem
		},
		beforeDestory(){
			this.$store.commit("showTop");
			this.$store.commit("showBottom");

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	
	.clearfix:after { 
  		content: "";
  		visibility: hidden;
  		display:block;
  		clear:both;
  		height:0;
  		font-size: 0;
	}

	body{
		overflow:hidden; 
	}
	.my-swipe {
	  height: 250px;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;

	}

	 img {
		width: 100%;
	}
	 
	.info_title {
		width: 339px;
		height: 159px;
		//background-color: #0f0;
		padding: 20px 20px 15px;
		position: relative;
		border-bottom:1px solid #ccc;

		h3 {
			width:294px;
			font-size:21px;
			word-break: break-all;
    		color: #2c3038;
    		font-weight: 100
		}

		.my_heart {
			position: absolute;
			right:33px;
			top:24px;
			font-weight:900;
			i{
				font-size:23px
			}
		}

		.desc {
			width: 335px;
    		font-size: 20px;
    		line-height: 1.33rem;
    		color: #92969c;
    		margin-top: 12px;
		}

		.price {
			margin-top: 21px;
    		font-size: 17px;
    		color: #fc3838;
    		line-height: 1rem;

    		s {
    			color: #92969c;
    		}
		}

		.status {
			position: absolute;
			bottom:47px;
			right:136px;
			.gap {
				height: 14px;
    			background: #92969c;
    			display: inline-block;
    			width: 1px;
    			vertical-align: -3px;
    			margin-right: 7px;
			} 

			span {
				color: #92969c;
			}
		}
	}

	.sub_btn {
			position: fixed;
    		width: 100%;
    		height: 60px;
    		bottom:0;
    		left:0;
    		//background-color:#ff0;
    		display: flex;

    		.cart {
				width:75px;
				line-height:60px;
				text-align:center;

				i {
					font-size:25px
				}
    		}

    		a {
    			flex:1;
    			line-height:60px;
    			text-align:center;
    			text-decoration: none;
    			color:#fff;
    			font-size:18px;
    			display: block;
    		}

    		.add_cart {
				background-color:#ffb22a;
    		}

    		.pay {
    			background-color:#ff3939
    		}
		}

		.sub_normal {
			position: fixed;
    		width: 375px;
    		left: 50%;
    		bottom: 0;
    		margin-left: -187px;
    		z-index: 10;
    		//background: #ff0;
    		border-top: 1px solid #e6e6e6;
			transition: all 0.3s linear;

    		.sub_area {
    			width:100%;
    			// background-color:#0f0;
				
				.title {
					border-bottom: 1px solid #bdc0c5;
					padding: 11px 20px;
					font-size: 14px;
					color: #1a1a1a;

					p {
						float: left;
    					padding: 6px 8px;
    					width: 275px;
					}

					a {
						float:right;
						line-height: 30px;
						text-decoration: none;
						color:#000;
					}
				}

				.count {
					border-bottom: 1px solid #e6e6e6;
    				padding: 25px 20px;
					

					.tip {
						float:left;
						font-size: 16px;
    					color: #1a1a1a;
					}

					.operate {
						float:right;

						a {
							vertical-align: middle;
    						border: 2px solid #e0e0e0;
							display: inline-block;
    						width: 23px;
    						height: 23px;
    						text-align: center;
							text-decoration: none;
						}
					}
				}

    		}

    		.sub_btn {
    			position: relative;
    			width: 100%;
    			height: 60px;
    			a {
    				display: block;
    				width: 100%;
    				height: 120px;
    				background-color: #ff3939;
					
    			}
    		}
		}

		.fade-enter-active, .fade-leave-active {
 			 transition: opacity .5s;
		}

		.fade-enter, .fade-leave-to  {
  				opacity: 0;
		}

		.slide-fade-enter-active {
		  transition: all .3s ease;
		}
		.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		}
		.slide-fade-enter, .slide-fade-leave-to
		/* .slide-fade-leave-active for below version 2.1.8 */ {
		  transform: translateX(10px);
		  opacity: 0;
		}
</style>
