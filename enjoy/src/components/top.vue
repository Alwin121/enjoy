<template>
  <div>
	<header>

    	<router-link tag="span" to="/list" >首页</router-link>
		<p>ENJOY<span class="location">北京</span></p>
    	<span><i class="iconfont icon-search"></i></span>
    </header> 
  </div>

</template>

<script>
export default{
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	div{
		height: 40px;
		width: 100%;

	}
	header{
		z-index: 1000;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex; 
		text-align: center;
		height: 40px;
		background-color: black;
		color: #fff;
		line-height: 40px
	}
	span{
		flex: 1
	}
	p{
		flex: 2
	}
	.location{
		font-size: 12px;
	}
</style>
