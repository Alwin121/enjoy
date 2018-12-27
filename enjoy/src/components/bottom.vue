<template>
  <div>
	<footer>
    	<router-link tag="p" to="/" activeClass="luanactive">
    		<i class="iconfont icon-training"></i>
    	</router-link>
    	<router-link tag="p" to="/cover" activeClass="luanactive">
    		<i class="iconfont icon-all"></i>
    	</router-link>
    	<router-link tag="p" to="/shopcar" activeClass="luanactive">
    		<i class="iconfont icon-cart"></i>
    	</router-link>
    	<router-link tag="p" to="/myuser" activeClass="luanactive">
    		<i class="iconfont icon-account"></i>
    	</router-link>
    </footer> 
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
	}
	footer{
		z-index: 10000;
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex; 
		text-align: center;
		height: 40px;
		background-color: #fff;
		color: #000;
		line-height: 40px;
	}
	p{
		flex: 1;
		height: 40px;
	}
	i{
		display: inline-block;
		
		font-size: 20px;
	}
	.luanactive{
		font-weight: bold
	}
</style>
