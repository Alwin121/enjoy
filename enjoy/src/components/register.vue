<template>
  <div>
	
	<input type="text" placeholder="用户名"><br>
	<input type="text" placeholder="邮箱"><br>
	<input type="password" placeholder="密码"><br>
	<button>注册</button>
	<router-view></router-view>    
  	
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	input{
		outline: none;
		border: 1px solid #ccc;
		width: 300px;
		height: 40px;
		margin-left: 20px;
		margin-top: 20px;
		padding-left: 20px;
		border-radius: 5px;
	}
	input:nth-of-type(1){
		margin-top: 60px
	}
	button{
		width: 320px;
		height: 50px;
		margin-left: 20px;
		margin-top: 20px;
		background-color: #000;
		color: #fff;
		outline: none;
		text-shadow:1px 1px 1px #333;
		border: none;
	}
</style>
