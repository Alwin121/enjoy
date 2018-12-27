<template>
  <div>
	<footer>
    	<router-link tag="i" to="/" class="iconfont icon-training" activeClass="luanactive"></router-link>
    	<i class="iconfont icon-all"></i>
    	<i class="iconfont icon-cart"></i>
    	<i class="iconfont icon-account"></i>
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
	i{
		display: inline-block;
		flex: 1;
		font-size: 20px;
	}
</style>
